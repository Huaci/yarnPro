import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import FatherComponent from './FatherComponnent'
export default class Header extends React.Component {
  render() {
    return (
      <div>
      <header className="header">
        <Link className="logo" to="/"></Link>
        <ul className="navbar">
          <li><NavLink className="navbar-item" exact to="/">home</NavLink></li>
          <li><NavLink className="navbar-item" exact to="/test">test</NavLink></li>
        </ul>
      </header>
        <FatherComponent/>
      </div>
    )
  }
}