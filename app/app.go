package app

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
	"github.com/takurooo/todo-app/app/todo"
)

const (
	databasePath string = "todo.db"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)

	if _, err = os.Stat(path); os.IsNotExist(err) {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func handleDBError(w http.ResponseWriter, err error) {
	switch err {
	case todo.ErrNoSuchEntity:
		NewErrors(err.Error()).Write(w, http.StatusBadRequest)
	case todo.ErrNoSuchEntity:
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
	default:
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
	}
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		next.ServeHTTP(w, r)
	})
}

// App ...
type App struct {
	db  *todo.TaskDB
	srv *http.Server
}

// NewApp ...
func NewApp() *App {
	return &App{db: &todo.TaskDB{}}
}

// Start ...
func (a *App) Start(addr string) (err error) {

	if err := a.db.Open(databasePath); err != nil {
		fmt.Println("start", err)
		return err
	}

	defer func() {
		if dbErr := a.db.Close(); dbErr != nil {
			err = dbErr
		}
	}()

	router := a.initRouter()

	a.srv = &http.Server{
		Handler: router,
		Addr:    addr,
	}

	if err := a.srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return err
	}
	return nil
}

// Stop ...
func (a *App) Stop(ctx context.Context) error {
	err := a.srv.Shutdown(ctx) // Graceful Shutdown
	if err != nil && err != http.ErrServerClosed {
		return err
	}
	return nil
}

func (a *App) initRouter() *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/api/v1/tasks", a.createTask).Methods(http.MethodPost)
	r.HandleFunc("/api/v1/tasks", a.updateTasks).Methods(http.MethodPut)
	r.HandleFunc("/api/v1/tasks", a.getTasks).Methods(http.MethodGet)
	r.HandleFunc("/api/v1/tasks/{id}", a.getTask).Methods(http.MethodGet)
	r.HandleFunc("/api/v1/tasks/{id}", a.deleteTask).Methods(http.MethodDelete)
	r.HandleFunc("/api/v1/tasks/{id}", a.updateTask).Methods(http.MethodPut)

	// for health check
	r.HandleFunc("/api/v1/health", a.healthCheck)

	// for CORS
	r.HandleFunc("/api/v1/tasks", a.handlePreflightRequest).Methods(http.MethodOptions)
	r.HandleFunc("/api/v1/tasks/{id}", a.handlePreflightRequest).Methods(http.MethodOptions)
	r.Use(corsMiddleware)

	// for single page application
	spa := spaHandler{staticPath: "static", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)
	return r
}

func (a *App) healthCheck(w http.ResponseWriter, r *http.Request) {
	if err := json.NewEncoder(w).Encode(map[string]bool{"ok": true}); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) createTask(w http.ResponseWriter, r *http.Request) {
	fmt.Println("createTask")

	t := todo.NewTask()
	if err := json.NewDecoder(r.Body).Decode(t); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}

	if err := a.db.Add(t); err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewEncoder(w).Encode(t); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) getTasks(w http.ResponseWriter, r *http.Request) {
	fmt.Println("getTasks")

	todoList, err := a.db.GetAll()
	if err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewEncoder(w).Encode(todoList); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) getTask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println("getTask", vars)

	id := vars["id"]

	task, err := a.db.GetFirst(id)
	if err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewEncoder(w).Encode(task); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) deleteTask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println("deleteTask", vars)

	id := vars["id"]

	if err := a.db.Delete(id); err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewEncoder(w).Encode(map[string]string{"id": id}); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) updateTasks(w http.ResponseWriter, r *http.Request) {
	fmt.Println("updateTasks")

	var todoList todo.TodoList
	if err := json.NewDecoder(r.Body).Decode(&todoList); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}

	for _, task := range todoList.Tasks {
		if err := a.db.Update(task); err != nil {
			handleDBError(w, err)
			return
		}
	}

	if err := json.NewEncoder(w).Encode(todoList); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}

}

func (a *App) updateTask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println("updateTask", vars)

	id := vars["id"]

	task, err := a.db.GetFirst(id)
	if err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewDecoder(r.Body).Decode(task); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}

	if err := a.db.Update(task); err != nil {
		handleDBError(w, err)
		return
	}

	if err := json.NewEncoder(w).Encode(task); err != nil {
		NewErrors(err.Error()).Write(w, http.StatusInternalServerError)
		return
	}
}

func (a *App) handlePreflightRequest(w http.ResponseWriter, r *http.Request) {
	// for prefilight request
	w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "*")
}
