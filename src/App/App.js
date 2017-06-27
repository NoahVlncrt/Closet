import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import NewNavbar from "../components/Navbar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    if(localStorage.getItem('Bucket_Slug') === null){
      this.state = {
        isOpen: true
      }
    } else {
      this.state = {
        isOpen: false
      }
    }
  }

  render() {
    return (
      <div>
        <NewNavbar/>
        <Alert color="danger" isOpen={this.state.isOpen}>
          Oh no! Your bucket details seem to be missing. Go settings and change that.
        </Alert>
      </div>

    );
  }
}

export default App;
