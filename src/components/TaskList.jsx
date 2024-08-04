import React from 'react';
import Task from './Task';
import axios from 'axios';
import { useState, useEffect } from 'react';


const TaskList = ({ task2, updateTask }) => {

  const[taskFromDb, setTaskFromDb] = useState([]);

  useEffect(() => {
    // Fetch tasks from json-server
    axios.get('http://localhost:5000/tasks')
      .then(res => {
        setTaskFromDb(res.data);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
      });
  }, [taskFromDb,task2]);


  return (
    <div className='space-y-4'>
      {taskFromDb.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} />
      ))}
    </div>
  );



}




export default TaskList;
