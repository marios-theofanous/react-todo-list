import React from 'react'
import PropTypes from 'prop-types'
import './todo-item.scss'

export default function TodoItem ({completed, text, id, completeHandler, deleteHandler}) {
  const textClass = completed ? 'todo-item-complete' : ''
  return (
    <div className="container mt-1">
      <div className="todo-item-container">
        <span className={`todo-item-text ${textClass}`}>{text}</span>
        <button className="btn btn-success todo-item-complete-btn mx-1" onClick={completeHandler.bind(this, id)}>
          <span>✔</span>
        </button>
        <button className="btn btn-danger todo-item-delete-btn mx-1" onClick={deleteHandler.bind(this, id)}>
          <span>🗑</span>
        </button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  completeHandler: PropTypes.func.isRequired
}
