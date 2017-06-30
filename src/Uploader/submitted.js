import React, { Component } from 'react';

export default class Submitted extends Component {
  constructor(props){
    super(props)
    console.log(this.props.palette)
  }

  render(){
    const Styles = {
      "imgArea": {
        float: "left",
        width: "25%"
      },
      "colorSwatches": {
        display: "flex",
        justifyContent: "center"
      }
    }
    return (
      <div>
        <img src={this.props.imgLink} alt="" style={Styles.imgArea}/>
        <h2 style={{textAlign: "center"}}>Colors</h2>
        <div style={Styles.colorSwatches}>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Vibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.LightVibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkVibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Muted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.LightMuted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkMuted.getHex()}}></div>
        </div>
        <h2 style={{textAlign: "center"}}>Tags</h2>
      </div>
    )
  }
}
