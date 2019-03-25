import React from 'react'
import logo from './logo.svg'
import './App.scss'
import TodoContainer from './components/todo/TodoContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/nav'
import NotFound from './components/misc/NotFound'

// Navbar.propTypes = {location: PropTypes.any}
export default function App () {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <Switch>
            <Route exact path="/" component={Intro}/>
            <Route path="/todos" component={TodoContainer}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
