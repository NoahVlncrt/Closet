import React, { Component } from 'react';

import NewNavbar from "../components/Navbar";
import Fresh from './fresh.js';
import Submitted from './submitted.js';

export default class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgLink: ''
    }
  }

  onImageDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({imgLink: acceptedFiles[0].preview})
  }

  LogicalDecider = () => {
    if(this.state.imgLink === ''){
      return <Fresh update={this.onImageDrop.bind(this)}/>
    } else {
      return <Submitted imgLink={this.state.imgLink}/>
    }
  }

  render(){
    return (
      <div>
        <NewNavbar/>
        <div>
          <div>
            {this.LogicalDecider()}
          </div>
        </div>
      </div>
    )
  }
}
