import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: 'no-store' })
  const todos = await res.json(); //SSR

  return todos
}

export const addTodos = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }
  )
  const newTodo = await res.json(); //SSR

  return newTodo
}

export const ediTodos = async (id: Task["id"], newText: Task["text"]): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text: newText})
    }
  )
  const updateTodo = await res.json(); //SSR

  return updateTodo
}

export const deleteTodos = async (id: Task["id"]): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }
  )
  const deleteTodo = await res.json(); //SSR

  return deleteTodo
}