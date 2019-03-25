import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function TodoNotFound () {
  return <div className="mt-3 mb-3">Nothing to show
    <span role="img" aria-label="Flower icon">🎉</span>
  </div>
}

export default function TodoList (props) {
  const todoList = props.items.map(item =>
    <TodoItem id={item.id}
              text={item.text}
              deleteHandler={props.deleteHandler}
              completeHandler={props.completeHandler}
              key={item.id}
              completed={item.completed}/>
  )
  const content = todoList.length ? todoList : <TodoNotFound/>

  return <ReactCSSTransitionGroup transitionName="example"
                                  transitionEnterTimeout={700}
                                  transitionLeaveTimeout={700}
                                  transitionAppear={true}
                                  transitionAppearTimeout={700}
                                  className="mt-3 mb-3">
    {content}
  </ReactCSSTransitionGroup>
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  completeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
}
