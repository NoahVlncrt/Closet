import React, { Component } from 'react';

export default class Submitted extends Component {
  render(){
    return (
      <div>
        <img src={this.props.imgLink} alt="" style={{width: "30%"}}/>
      </div>
    )
  }
}
