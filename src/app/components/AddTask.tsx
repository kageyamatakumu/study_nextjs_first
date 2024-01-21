"use client";

import { FormEvent, useState } from "react"
import { addTodos } from "../pages/api/api";
import { Task } from "../pages/api/types";
import { v4 as uuidv4 } from 'uuid';

export const AddTask = () => {

  const [taskTitle, setTaskTitle] = useState<Task["text"]>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const uniqueId = uuidv4();
    console.log(taskTitle)
    await addTodos({id: uniqueId, text: taskTitle})

    setTaskTitle("")
  }
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input type="text"
        className="w-full border px-4 py-2 focus:outline-none focus:border-blue-300"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-200 rounded transform hover:bg-black hover:scale-95 duration-500">
        Add Task
      </button>
    </form>
  )
}