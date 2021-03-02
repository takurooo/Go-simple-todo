package todo

import "errors"

var (
	ErrBadRequest   = errors.New("bad request")
	ErrNoSuchEntity = errors.New("no such entity")
)
