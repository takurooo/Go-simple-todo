package todo_test

import (
	"strconv"
	"testing"

	"github.com/takurooo/todo-app/app/todo"
)

func TestTaskDB(t *testing.T) {

	db := todo.NewTaskDB()
	if err := db.Open("todo_test.db"); err != nil {
		t.Fatal(err)
	}
	defer db.Close()

	titles := []string{"Wake up", "Eat apple", "Buy banana"}

	for i := 0; i < len(titles); i++ {
		task := todo.NewTask()
		task.ID = strconv.Itoa(i)
		task.Title = titles[i]
		db.Add(task)
	}

	tasks, err := db.GetAll()
	if err != nil {
		t.Fatal(err)
	}

	for i, task := range tasks {
		if task.Title != titles[i] {
			t.Fatal("invalid title ", task.Title, titles[i])
		}
	}

	{
		titles[0] = "Go to bed"
		task := todo.NewTask()
		task.ID = "0"
		task.Title = "Go to bed"
		db.Update(task)

		tasks, err := db.GetAll()
		if err != nil {
			t.Fatal(err)
		}

		for i, task := range tasks {
			if task.Title != titles[i] {
				t.Fatal("invalid title ", task.Title, titles[i])
			}
		}
	}

	for i := 0; i < len(titles); i++ {
		if err := db.Delete(strconv.Itoa(i)); err != nil {
			t.Fatal(err)
		}
	}

	tasks, err = db.GetAll()
	if err != nil {
		t.Fatal(err)
	}

	if 0 < len(tasks) {
		t.Fatal("tasks exists")
	}
}
