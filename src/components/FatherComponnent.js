import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class FatherComponent extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      name:'hello'
    }
  }
  click() {
    console.log("click...")
    this.setState({
      name:'world'
    })
  }

  render(){
    return (<div>
      <div>
        <ChildComponent name={this.state.name} click={()=>this.click()}/>
      </div>

    </div>)
  }
}
export default FatherComponent;