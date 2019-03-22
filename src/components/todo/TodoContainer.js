import React, { Component } from 'react'
import TodoComponent from './TodoComponent'

export default class TodoContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentId: 10,
      currentTodo: '',
      items: []
    }
  }

  completeHandler = (id) => {
    const item = this.state.items.find((element) =>
      element.id === id
    )
    item.completed = !item.completed
    this.setState({items: this.state.items})
  }

  deleteHandler = (id) => {
    this.setState({
      items: this.state.items.filter(val => {
        return val.id !== id
      })
    })
  }

  addItem = (text) => {
    this.setState({
      currentId: this.state.currentId + 1,
      items: this.state.items.concat([{id: this.state.currentId, text: text, completed: false}])
    })
  }

  handleTodoChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  submitTodo = (e) => {
    e.preventDefault()
    const todo = this.state.currentTodo
    if (todo) {
      this.addItem(todo)
      this.setState({
        currentTodo: ''
      })
    }
  }

  render () {
    return (
      <TodoComponent onSubmit={this.submitTodo} value={this.state.currentTodo} onChange={this.handleTodoChange}
                     items={this.state.items} completeHandler={this.completeHandler}
                     deleteHandler={this.deleteHandler}/>
    )
  }
}
