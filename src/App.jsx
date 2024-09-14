
import styles from './App.module.css';
import Cardboard from './components/Cardboard/Cardboard';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import { useState, useEffect } from 'react';

function App() {

  // Initialize tasks from localStorage (or an empty array if none exist)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks):[];
  });

   // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // function to add a new task to the tasks array
  const addTask = (newTask) => {
    //setTasks([...tasks, newTask]);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // function to delete a task
  const deleteTask = (taskIndex) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
  };

  //function to edit a task
  const editTask = (taskIndex, updatedTasks) => {
    setTasks((prevTasks) => prevTasks.map((task, index) => 
      index === taskIndex ? updatedTasks : task
    ));
  };

  return ( 
    <div className={styles.App}>
      <Title />
      <Form addTask={addTask}/>
      <Cardboard tasks={tasks} editTask={editTask} deleteTask={deleteTask}/>
      <Footer />
    </div>
  );
}

export default App
