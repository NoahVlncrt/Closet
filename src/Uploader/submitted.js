import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import Cosmic from 'cosmicjs';
import Random from 'meteor-random';

export default class Submitted extends Component {
  constructor(props){
    super(props)
    this.state = {
      cSelected: [],
      tags: []
    }
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

  tagChange = (item) => {
    if(this.state.tags.includes(item)){
      const index = this.state.tags.indexOf(item)
      this.state.tags.splice(index)
    } else {
      this.state.tags.push(item)
    }
    this.setState({ tags: [...this.state.tags]})
  }

  Upload = () => {
    const tags = []
    this.state.tags.map( (tag) => {
      tags.push(tag)
      return "Completed"
    })

    const colormap = {
      Vibrant: this.props.palette.Vibrant.getHex(),
      DarkVibrant: this.props.palette.DarkVibrant.getHex(),
      Muted: this.props.palette.Muted.getHex(),
      LightMuted: this.props.palette.LightMuted.getHex(),
      DarkMuted: this.props.palette.DarkMuted.getHex()
    }

    var params = {
      write_key: localStorage.getItem("write_key"),
      type_slug: 'articles',
      title: Random.id(),
      content: '',
      metafields: [
        {
          key: 'tags',
          type: 'check-boxes',
          value: tags
        },
        {
          key: 'item',
          type: 'file',
          title: '',
          value: this.props.name
        },
        {
          key: 'colors',
          type: 'textarea',
          value: JSON.stringify(colormap)
        }
      ]
    }

    var config = {
      "bucket": {
        slug: localStorage.getItem("slug"),
        write_key: localStorage.getItem("write_key"),
        read_key: localStorage.getItem("read_key")
      }
    }


    Cosmic.addObject(config, params, function(error, response){

    })
    this.props.history.push('/')
  }

  render(){
    const Styles = {
      "imgArea": {
        float: "left",
        width: "29%"
      },
      "flexCenter": {
        display: "flex",
        justifyContent: "center"
      }
    }
    return (
      <div>
        <img src={this.props.imgLink} alt="" style={Styles.imgArea} id="thatImageDo"/>
        <h2 style={{textAlign: "center"}}>Colors</h2>
        <div style={Styles.flexCenter}>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Vibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkVibrant.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.Muted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.LightMuted.getHex()}}></div>
          <div style={{width: "50px", height: "50px", backgroundColor: this.props.palette.DarkMuted.getHex()}}></div>
        </div>
        <h2 style={{textAlign: "center"}}>Tags</h2>
        <div style={Styles.flexCenter}>
          <ButtonGroup>
            <Button color="secondary" onClick={() => {this.onCheckboxBtnClick(1, "Shorts"); this.tagChange("Shorts")}} active={this.state.cSelected.includes(1)}>Shorts</Button>
            <Button color="secondary" onClick={() => {this.onCheckboxBtnClick(2, "Pants"); this.tagChange("Pants")}} active={this.state.cSelected.includes(2)}>Pants</Button>
            <Button color="secondary" onClick={() => {this.onCheckboxBtnClick(3, "Shirt"); this.tagChange("Shirt")}} active={this.state.cSelected.includes(3)}>Shirt</Button>
            <Button color="secondary" onClick={() => {this.onCheckboxBtnClick(4, "Jacket"); this.tagChange("Jacket")}} active={this.state.cSelected.includes(4)}>Jacket</Button>
          </ButtonGroup>
        </div>
        <Button outline color="primary" style={{position: "fixed", right: "5px", bottom: "10px"}} onClick={() => this.Upload()}>Upload</Button>
      </div>
    )
  }
}
