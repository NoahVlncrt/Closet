import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';

import NewNavbar from "../components/Navbar";
import Picker from './picker.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    if(localStorage.getItem('slug') === null){
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
    const Styles = {
      "buttonMenu": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "5px"
      }
    }
    return (
      <div>
        <NewNavbar/>
        <Alert color="danger" isOpen={this.state.isOpen}>
          Oh no! Your bucket details seem to be missing. Go settings and change that.
        </Alert>
        <div style={Styles.buttonMenu}>
          <Picker/>    {/* TODO: pass value from child to the parent */}
          <Button outline color="primary">Upload</Button>
        </div>
      </div>

    );
  }
}

export default App;
