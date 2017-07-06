import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

export default class Fresh extends Component {
  render(){
    const Styles = {
      "imgArea": {
        display: "flex",
        padding: "5px"
      },
      "helpText": {
        maxWidth: "80%",
        padding: "5px"
      }
    }
    return (
      <div>
        <div style={Styles.imgArea}>
          <Dropzone multiple={false} accept="image/*" onDrop={this.props.update}>
            <p>Select an image</p>
          </Dropzone>
          <div style={Styles.helpText}>
            <h3>When uploading images please keep the following things in mind to allow for optimal color matching</h3>
            <p><b>1.</b> Make sure the clothing itself is clean</p>
            <p><b>2.</b> Double check that the colors in the image are as close to real life as possible</p>
            <p><b>3.</b> Take the image vertically</p>
            <p><b>4.</b> Try to make sure the clothing takes up a majority of the image</p>
          </div>
        </div>
      </div>
    )
  }
}
