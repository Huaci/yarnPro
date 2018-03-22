import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <h2>A React and Mobx Website.</h2>}/>
          <Route exact path="/test" render={() => <h2>A test page.</h2>}/>
        </Switch>
        <a href="" className="item">点击</a>
        <div className="item">123哈哈哈</div>
      </div>
    )
  }
}