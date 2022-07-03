import React from 'react'

const Task = ({ task }) => {
  const handleDelete = (id) => {

  }
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  )
}

export default Task
