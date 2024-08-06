import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch tasks from json-server
    axios.get('http://localhost:5000/tasks')
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
      });
  }, []);

  const addTask = (task) => {
    // Add a new task
    axios.post('http://localhost:5000/tasks', task)
      .then(response => {
        setTasks([...tasks, response.data]);
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };

  const updateTask = (updatedTask) => {
    // Update an existing task
    axios.put(`http://localhost:5000/tasks/${updatedTask.id}`, updatedTask)
      .then(response => {
        const newTasks = tasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(newTasks);
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };



  const filteredTasks = tasks.filter(task =>
    task.name && task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      <div className="container mx-auto p-4">
        <SearchBar setSearchTerm={setSearchTerm} />
        <TaskForm addTask={addTask} />
        <TaskList tasks={filteredTasks} updateTask={updateTask} />
      </div>
    </>
  );
}

export default App;
