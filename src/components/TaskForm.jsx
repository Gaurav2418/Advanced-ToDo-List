import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      lastUpdated: new Date()
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
    <input
      type="text"
      className="border p-2 rounded w-full mb-2"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      className="border p-2 rounded w-full mb-2"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Add Task
    </button>
  </form>
  );
};

export default TaskForm;
