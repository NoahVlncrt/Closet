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
      palette: '',
      type: ''
    }
  }

  onImageDrop = (acceptedFiles, rejectedFiles) => {
    Vibrant.from(acceptedFiles[0].preview).getPalette((err, palette) => {this.setState({palette: palette, imgLink: acceptedFiles[0].preview, type: acceptedFiles[0].type })})
  }


  LogicalDecider = () => {
    if(this.state.imgLink === ''){
      return <Fresh update={this.onImageDrop.bind(this)}/>
    } else {
      return <Submitted imgLink={this.state.imgLink} palette={this.state.palette} type={this.state.type}/>
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
