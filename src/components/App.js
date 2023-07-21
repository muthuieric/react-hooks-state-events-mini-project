import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] =useState({TASKS});
  const [categories, setCategories] =useState({CATEGORIES})
  const handleDelete = (deleteTask) => {
    const deletedTask=tasks.filter(task => deleteTask.text !== task.text)
    setTasks(deletedTask)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={TASKS} handleDelete={handleDelete} />
    </div>
  );
}

export default App;