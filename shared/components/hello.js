import React from 'react'

class Hello extends  React.Component{
  constructor(props,context){
    super(props,context)
  }

  render(){
    return <div>
      <h1>Hello <strong>X</strong>ERN</h1>
      <ul>
        <li>Mongodb</li>
        <li>Express</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  }
}

export default Hello