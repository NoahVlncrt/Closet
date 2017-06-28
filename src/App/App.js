import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';

import NewNavbar from "../components/Navbar";
import Picker from './picker.js';

class App extends Component {
  constructor(props) {
    super(props)
    if(localStorage.getItem('slug') === null){
      this.state = {
        isOpen: true,
        pickFilter: 'All'
      }
    } else {
      this.state = {
        isOpen: false,
        pickFilter: 'All'
      }
    }
  }

  GetPickerSelection = (selection) => {
    this.setState({pickFilter: selection})
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
          <Picker triggerFilterChange={this.GetPickerSelection}/>    {/* TODO: pass value from child to the parent */}
          <Button outline color="primary">Upload</Button>
        </div>
      </div>

    );
  }
}

export default App;
