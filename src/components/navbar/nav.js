import { Link, NavLink } from 'react-router-dom'
import React from 'react'

export default function Navbar (props) {
  console.log(props)
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={'nav-item'}>
          {props.location}
          <NavLink activeClassName="active" to="/todos" className="nav-link">Todos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/test">Not found</NavLink>
        </li>
      </ul>
    </div>
  </nav>
}
