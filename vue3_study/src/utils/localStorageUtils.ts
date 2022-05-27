import { Todo } from "../types/todo"
export function saveTodos(todos: Todo []) {
    localStorage.setItem('todos_key', JSON.stringify(todos))
}
export function readTodos(): Todo [] {
    return JSON.parse(localStorage.getItem("todos_key") || '[]')
}