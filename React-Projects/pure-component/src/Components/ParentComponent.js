import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp'
class ParentComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                name:"Bhanu"
            }
    }
  render() {
    return (
      <div>ParentComponent
      <RegComponent/>
      <PureComp/>
      </div>
    )
  }
}

export default ParentComponent