import React from 'react';
import Task from './Task';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TaskList = ({tasks, updateTask }) => {

  const[taskFromDb, setTaskFromDb] = useState([]);

  // useEffect(() => {
  //   // Fetch tasks from json-server
  //   axios.get('http://localhost:5000/tasks')
  //     .then(res => {
  //       setTaskFromDb(res.data);
  //     })
  //     .catch(err => {
  //       console.error('Error fetching tasks:', err);
  //     });
  // }, []);


  return (
    <div className='space-y-4'>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
    </div>
  );



}




export default TaskList;
