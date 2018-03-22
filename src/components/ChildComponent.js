import React, { Component } from 'react'

class ChildComponent extends Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    console.log(this.props)
    console.log(this.context)
    return (<div>
      <div onClick={this.props.click}>
        {this.props.name}
      </div>

    </div>)
  }
}
export default ChildComponent;