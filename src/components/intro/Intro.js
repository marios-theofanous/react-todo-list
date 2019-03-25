import React from 'react'
import { Link } from 'react-router-dom'

export default function Intro () {
  return (
    <div>
      This is an intro page
      <Link to={'/todos'}>Todos</Link>
      <Link style={{display: 'block', height: '100%'}} to="/todos">
        <button className="btn btn-success">CLICK ME</button>
      </Link>
    </div>
  )
}
