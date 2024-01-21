"use client";

import React, { useState, useRef, useEffect } from 'react'
import { Task } from '../pages/api/types'
import { deleteTodos, ediTodos } from '../pages/api/api';

type TodoProps = {
  todo: Task
}

export const Todo = (props: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const { todo } = props;
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedTaskTitle, setEditTaskTitle] = useState<Task["text"]>(todo.text)

  useEffect(() => {
    if(isEditing)
    {
      ref.current?.focus()
    }
  }, [isEditing])

  const handleEdit = async () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    await ediTodos(todo.id, editedTaskTitle)
    setIsEditing(false)
  }

  const handleDelete = async () => {
    await deleteTodos(todo.id)
  }

  return (
    <li key={todo.id} className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
      {isEditing ?
        <input
          ref={ref}
          type="text"
          className='mr-2 py-1 px-2 rounded border-gray-400 border'
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditTaskTitle(e.target.value)
          }
        /> : <span>{todo.text}</span>
      }
      <div>
        {isEditing ? (
          <button className='text-blue-500 mr-3' onClick={handleSave}>save</button>
          ) : (
            <button className='text-green-500 mr-3' onClick={handleEdit}>edit</button>
          )
        }
        <button className='text-red-500 ml-3' onClick={handleDelete}>delete</button>
      </div>
    </li>
  )
}
