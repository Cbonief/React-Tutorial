import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [currentId, setCurrentId] = useState(4)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Sports',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Work Meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ])

  function addTask(task){
    task = {...task, id:currentId}
    setCurrentId(currentId+1)
    console.log(currentId)
    setTasks([...tasks, task])
  }

  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Maps through all tasks and if the task id is the given id, then returns the same task with the
  // reminder toggled. If not it returns the task.
  function toggleReminder(id){
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task)
    )
  }

  function toggleAddTask(){
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header onClick={toggleAddTask} showAdd={showAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>) : ('No Task')}
    </div>
  );
}

export default App;