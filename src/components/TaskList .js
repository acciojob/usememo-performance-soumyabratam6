import React from 'react'

const TaskList  = ({ tasks }) => {
  return (
    <div>
        <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default TaskList 