package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"time"

	"github.com/takurooo/todo-app/app"
)

const (
	exitOK    = 0
	exitError = 1
)

func runApp(addr string) int {

	a := app.NewApp()
	errCh := make(chan error)

	go func() {
		fmt.Println("Start app : localhost", addr)
		err := a.Start(addr)
		errCh <- err
	}()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)

	select {
	case err := <-errCh:
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			return exitError
		}
	case <-c:
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		if err := a.Stop(ctx); err != nil {
			fmt.Fprintln(os.Stderr, err)
			return exitError
		}
	}

	return exitOK
}

func main() {
	addr := ":8000"
	os.Exit(runApp(addr))
}
