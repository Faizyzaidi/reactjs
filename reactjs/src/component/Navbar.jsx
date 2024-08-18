import React from 'react'
import './Navbar.css'
function Navbar(props) {
  return (
    <div className ="navbar">
      <ul>
        <li>{props.title}</li>
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
      </ul>
    </div>
  )
}

export default Navbar
