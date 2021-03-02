package todo

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

const (
	driverName string = "sqlite3"
)

// TaskDB ...
type TaskDB struct {
	conn *sql.DB
}

// NewTaskDB ...
func NewTaskDB() *TaskDB {
	return &TaskDB{conn: nil}
}

// Open ...
func (db *TaskDB) Open(name string) error {
	var conn *sql.DB
	conn, err := sql.Open(driverName, name)
	if err != nil {
		return err
	}
	db.conn = conn

	err = db.createTable()
	if err != nil {
		return err
	}
	return nil
}

func (db *TaskDB) createTable() error {
	cmd := "CREATE TABLE IF NOT EXISTS task(id STRING, title STRING, due_date STRING, done BOOLEAN, display_order INTEGER)"
	if _, err := db.conn.Exec(cmd); err != nil {
		return err
	}
	return nil
}

// Close ...
func (db *TaskDB) Close() error {
	if err := db.conn.Close(); err != nil {
		return err
	}
	return nil
}

// Add ...
func (db *TaskDB) Add(task *Task) error {
	if task.ID == "" {
		return ErrBadRequest
	}
	cmd := "INSERT INTO task (id, title, due_date, done, display_order) VALUES (?, ?, ?, ?, ?)"
	if _, err := db.conn.Exec(
		cmd,
		task.ID,
		task.Title,
		task.DueDate,
		task.Done,
		task.DisplayOrder); err != nil {
		return err
	}
	return nil
}

// Update ...
func (db *TaskDB) Update(task *Task) error {
	if task.ID == "" {
		return ErrBadRequest
	}

	cmd := "UPDATE task SET title = ?, due_date = ?, done = ?, display_order = ? WHERE id = ?"

	result, err := db.conn.Exec(
		cmd,
		task.Title,
		task.DueDate,
		task.Done,
		task.DisplayOrder,
		task.ID)
	if err != nil {
		return err
	}

	nRows, err := result.RowsAffected()
	if err != nil {
		return err
	}

	if nRows == 0 {
		return ErrNoSuchEntity
	}

	return nil
}

// GetFirst ....
func (db *TaskDB) GetFirst(id string) (*Task, error) {
	if id == "" {
		return nil, ErrBadRequest
	}
	cmd := "SELECT * FROM task WHERE id = ?"
	rows, _ := db.conn.Query(cmd, id)

	defer rows.Close()

	task := NewTask()
	for rows.Next() {
		err := rows.Scan(
			&task.ID,
			&task.Title,
			&task.DueDate,
			&task.Done,
			&task.DisplayOrder)
		if err != nil {
			return nil, err
		}
		break
	}

	if task.ID == "" {
		return nil, ErrNoSuchEntity
	}

	return task, nil
}

// GetAll ....
func (db *TaskDB) GetAll() (*TodoList, error) {
	cmd := "SELECT * FROM task"
	rows, _ := db.conn.Query(cmd)

	defer rows.Close()

	todoList := NewTodoList()
	for rows.Next() {
		task := NewTask()
		err := rows.Scan(
			&task.ID,
			&task.Title,
			&task.DueDate,
			&task.Done,
			&task.DisplayOrder)
		if err != nil {
			return nil, err
		}
		todoList.Tasks = append(todoList.Tasks, task)
	}
	return todoList, nil
}

// Delete ....
func (db *TaskDB) Delete(id string) error {
	if id == "" {
		return ErrBadRequest
	}
	cmd := "DELETE FROM task WHERE id = ?"
	result, err := db.conn.Exec(cmd, id)
	if err != nil {
		return err
	}

	nRows, err := result.RowsAffected()
	if err != nil {
		return err
	}

	if nRows == 0 {
		return ErrNoSuchEntity
	}

	return nil
}
