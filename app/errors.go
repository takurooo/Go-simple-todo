package app

import (
	"encoding/json"
	"net/http"
)

type errorMessage struct {
	message string `json:"message"`
}

// Errors ...
type Errors struct {
	errMsg *errorMessage
}

// NewErrors ...
func NewErrors(message string) *Errors {
	return &Errors{errMsg: &errorMessage{message: message}}
}

// Write ...
func (e *Errors) Write(w http.ResponseWriter, code int) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.WriteHeader(code)
	json.NewEncoder(w).Encode(e.errMsg)
}
