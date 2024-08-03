import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <div className='space-y-4'>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;
