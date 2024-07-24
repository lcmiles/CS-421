import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, isEditing: false }]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  const startEditingTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: true } : task,
    );
    setTasks(updatedTasks);
  };
  const saveTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, isEditing: false } : task,
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.isEditing ? (
              <div>
                <input
                  type="text"
                  defaultValue={task.text}
                  onBlur={(e) => saveTask(index, e.target.value)}
                />
                <button onClick={() => saveTask(index, task.text)}>Save</button>
              </div>
            ) : (
              <div>
                {task.text}
                <button onClick={() => startEditingTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
