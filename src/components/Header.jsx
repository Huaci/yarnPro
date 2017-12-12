import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="logo" to="/"></Link>
        <ul className="navbar">
          <li><NavLink className="navbar-item" exact to="/">home</NavLink></li>
          <li><NavLink className="navbar-item" exact to="/test">test</NavLink></li>
        </ul>
      </header>
    )
  }
}