import React, { Component } from 'react';
import { Button,DatePicker } from 'antd';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!!! {this.props.name}</h1>
        <Button type="primary">q</Button>
        <div>123</div>
        <DatePicker/>
      </div>
    )
  }
}
