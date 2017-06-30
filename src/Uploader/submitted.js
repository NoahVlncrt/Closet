import React, { Component } from 'react';

import { Button, ButtonGroup } from 'reactstrap';

export default class Submitted extends Component {
  constructor(props){
    super(props)
    this.state = {cSelected: []}
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }



  render(){
    const Styles = {
      "imgArea": {
        float: "left",
        width: "25%"
      },
      "flexCenter": {
        display: "flex",
        justifyContent: "center"
      }
    }
    return (
      <div>
        <img src={this.props.imgLink} alt="" style={Styles.imgArea}/>
        <h2 style={{textAlign: "center"}}>Colors</h2>
        <div style={Styles.flexCenter}>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Vibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.LightVibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkVibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Muted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.LightMuted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkMuted.getHex()}}></div>
        </div>
        <h2 style={{textAlign: "center"}}>Tags</h2>
        <div style={Styles.flexCenter}>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Shorts</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Pants</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Shirt</Button>
            <Button color="primary" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Jacket</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
