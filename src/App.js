import React from 'react'
import logo from './logo.svg'
import './App.scss'
import TodoContainer from './components/todo/TodoContainer'

export default function App () {
  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo"/>
        <TodoContainer/>
      </div>
    </div>
  )
}
