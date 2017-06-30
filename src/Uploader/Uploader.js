import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant'

import NewNavbar from "../components/Navbar";
import Fresh from './fresh.js';
import Submitted from './submitted.js'

export default class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgLink: '',
      palette: ''
    }
  }

  onImageDrop = (acceptedFiles, rejectedFiles) => {
    Vibrant.from(acceptedFiles[0].preview).getPalette((err, palette) => {this.setState({palette: palette}); this.setState({imgLink: acceptedFiles[0].preview})})
  }


  LogicalDecider = () => {
    if(this.state.imgLink === ''){
      return <Fresh update={this.onImageDrop.bind(this)}/>
    } else {
      return <Submitted imgLink={this.state.imgLink} palette={this.state.palette}/>
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
