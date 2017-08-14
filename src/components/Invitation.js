// Code Invitation Component Here
import React from 'react'

export default class Invitation extends React.Component {


  render(){
    let anyChildren = React.Children.map(this.props.children, child =>
      {
        return child
      })
    return(
      <div>
        <h1>
        You've been invited!
        </h1>
        {anyChildren}
      </div>
    )
  }
}
