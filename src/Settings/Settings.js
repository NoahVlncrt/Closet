import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import NewNavbar from "../components/Navbar";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem("slug") === null){
      this.state = {
        slug: '',
        read_key: '',
        write_key: '',
        isOpen: false
      }
    } else {
      this.state = {
        slug: '',
        read_key: '',
        write_key: '',
        isOpen: true
      }
    }
  }

  // It's sort of like move that bus but you don't get a new house. . .
  SendThatForm = (event) => {
    var formInfo ={
      slug: this.state.slug,
      read_key: this.state.read_key,
      write_key: this.state.write_key
    }
    localStorage.clear()
    localStorage.setItem("slug", formInfo.slug)
    localStorage.setItem("read_key", formInfo.read_key)
    localStorage.setItem("write_key", formInfo.write_key)
    this.props.history.push('/');
    event.preventDefault();
  }


  render(){
    const form = {
      width: "75%"
    }
    return (
      <div>
        <NewNavbar/>
        <Alert isOpen={this.state.isOpen}>Everything has been set correctly!</Alert>
        <div style={{display: "flex",justifyContent: "center"}}>
          <Form style={form} onSubmit={this.SendThatForm}>
            <FormGroup>
              <Label for="bucket_slug">Bucket Slug</Label>
              <Input type="text" name="bucket_slug" id="bucket_slug" onChange={(event)=>{this.setState({slug: event.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="api_read_key">API Read Key</Label>
              <Input type="text" name="api_read_key" id="api_read_key" onChange={(event)=>{this.setState({read_key: event.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="api_write_key">API Write Key</Label>
              <Input type="text" name="api_write_key" id="api_write_key" onChange={(event)=>{this.setState({write_key: event.target.value})}}/>
            </FormGroup>
            <Button  color="primary">Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}
