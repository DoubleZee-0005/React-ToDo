import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : "Doctors Appointment",
        day : "April 11th at 9:00pm",
        reminder : true,

    },
    {
        id : 2,
        text : "Meeting Client",
        day : "April 12th at 3:30pm",
        reminder : true,
    },
    {
        id : 3,
        text : "Tyler's Vaccine",
        day : "April 13th at 2:30pm",
        reminder : false,
    }
])

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}    
    setTasks([...tasks,newTask])
  }

  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task ))
  }

  return (
    <>
    <div className="container">
      <AddTask onAdd = {addTask} />
      <Header title = "ToDo Tracker" />
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleRemainder} /> : <h3>Nothing to show</h3>}
    </div>
    </>
  );
}

export default App;
