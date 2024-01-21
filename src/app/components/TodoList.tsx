import React from 'react'
import { Task } from '../pages/api/types'
import { Todo } from './Todo'

type TodoListProps = {
  todos: Task[]
}

export const TodoList = (props: TodoListProps) => {
  const { todos } = props
  return (
    <ul className='space-y-3'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
