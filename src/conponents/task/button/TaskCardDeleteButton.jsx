import React from 'react'

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
  }) => {
  const taskCardDeleteButton = (id) => {
    /* カードを削除*/
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));

  }
  return (
    <div>
      <button className='taskDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
