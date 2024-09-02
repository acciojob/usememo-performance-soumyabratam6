
import React, { useState,useMemo} from "react";
import './../styles/App.css';
import TaskList from "./TaskList ";

const generateInitialTasks = ()=>{
  const tasks = [];
  for (let i = 1; i <=50; i++) {
    tasks.push({id:i,text:`Todo ${i}`,completed:i<=25})    
  }
  return tasks;
}

const App = () => {
  const [tasks, setTasks] = useState(generateInitialTasks());
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

function slowFunction(tasks) {
  for (let i = 0; i < 1000000000; i++) {} // Artificial delay
  return tasks;
}
const filteredTasks = useMemo(() => {
  const filtered = filter === 'All' 
    ? tasks 
    : tasks.filter(task => filter === 'Completed' ? task.completed : !task.completed);
  return slowFunction(filtered);  // Slows down the filtered tasks rendering artificially
}, [filter, tasks]);

  return (
    <div>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Todo App</h1>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </header>
      <TaskList tasks={filteredTasks} />
    </div>
    </div>
  )
}

export default App
