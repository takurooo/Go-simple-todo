package todo

// Task ...
type Task struct {
	ID           string `json:"id"`
	Title        string `json:"title"`
	DueDate      string `json:"dueDate"`
	Done         bool   `json:"done"`
	DisplayOrder int    `json:"displayOrder"`
}

// NewTask ...
func NewTask() *Task {
	task := &Task{}
	return task
}

// TodoList ...
type TodoList struct {
	Tasks []*Task `json:"tasks"`
}

// NewTodoList ...
func NewTodoList() *TodoList {
	todoList := &TodoList{}
	return todoList
}
