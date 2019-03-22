import * as PropTypes from 'prop-types'
import React from 'react'

export default function TodoInput (props) {
  return <form onSubmit={props.onSubmit} className="container-fluid">
    <div className="input-group">
      <input value={props.value} onChange={props.onChange} type="text"
             className="form-control" onSubmit={props.onSubmit} placeholder="Enter your todo here..."/>
      <div className="input-group-append">
        <button type="submit" className="btn btn-info">ADD</button>
      </div>
    </div>
  </form>
}

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
