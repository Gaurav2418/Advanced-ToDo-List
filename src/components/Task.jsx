import React, { useState } from 'react';
import axios from 'axios';

const Task = ({ task, updateTask,  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.name);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    const updatedTask=({ ...task, name: newTitle, lastUpdated: new Date() });
    axios.put(`http://localhost:5000/tasks/${task.id}`, updatedTask)
      .then(response => {
        updateTask(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const handleMarkAsDone = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>{task.name}</h3>
      <div className="flex space-x-2 mt-2">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleToggleExpand}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button
          className={`px-2 py-1 rounded ${task.completed ? 'bg-green-500' : 'bg-red-500'} text-white`}
          onClick={handleMarkAsDone}
        >
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={handleToggleEdit}
        >
          Edit
        </button>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <p>Description: {task.description}</p>
          <p>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</p>
        </div>
      )}
      {isEditing && (
        <div className="mt-2">
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-2 py-1 rounded mt-2"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}
      
    </div>
  );
};

export default Task;
