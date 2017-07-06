import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant'
import Cosmic from 'cosmicjs';



import NewNavbar from "../components/Navbar";
import Fresh from './fresh.js';
import Submitted from './submitted.js'

export default class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgLink: '',
      palette: '',
      type: '',
      name: ''
    }

  }

  onImageDrop = (acceptedFiles, rejectedFiles) => {
    Vibrant.from(acceptedFiles[0].preview).getPalette((err, palette) => {this.setState({palette: palette, imgLink: acceptedFiles[0].preview, type: acceptedFiles[0].type})})
    var config = {
      "bucket": {
        slug: localStorage.getItem("slug"),
        write_key: localStorage.getItem("write_key"),
        read_key: localStorage.getItem("read_key")
      }
    }

    var imageParams = {
      media: acceptedFiles[0]
    }

    Cosmic.addMedia(config, imageParams, (error, response) => {
      this.setState({name: response.body.media.name})
    })
  }


  LogicalDecider = () => {
    if(this.state.name === ''){
      return <Fresh update={this.onImageDrop.bind(this)}/>
    } else {
      return <Submitted imgLink={this.state.imgLink} palette={this.state.palette} type={this.state.type} name={this.state.name} history={this.props.history}/>
    }
  }

  render(){
    return (
      <div>
        <NewNavbar/>
        <div>
          {this.LogicalDecider()}
        </div>
      </div>
    )
  }
}
