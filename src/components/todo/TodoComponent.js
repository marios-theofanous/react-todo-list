import * as PropTypes from 'prop-types'
import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default function TodoComponent (props) {
  return <>
    <TodoInput onSubmit={props.onSubmit} value={props.value} onChange={props.onChange}/>
    <TodoList items={props.items} completeHandler={props.completeHandler} deleteHandler={props.deleteHandler}/>
  </>
}

TodoComponent.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.any,
  onChange: PropTypes.func,
  items: PropTypes.any,
  completeHandler: PropTypes.func,
  deleteHandler: PropTypes.func
}
