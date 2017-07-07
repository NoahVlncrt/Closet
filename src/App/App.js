import React, {Component} from 'react';
import { Alert, Button } from 'reactstrap';
import Cosmic from 'cosmicjs';

import NewNavbar from "../components/Navbar";
import Picker from './picker.js';

class App extends Component {
  constructor(props) {
    super(props)
    if(localStorage.getItem('slug') === null){
      this.state = {
        isOpen: true,
        pickFilter: 'All',
        db: [],
        loading: true
      }
    } else {
      this.state = {
        isOpen: false,
        pickFilter: 'All',
        db: [],
        loading: true
      }

    }
  }

  componentDidMount() {
    if(typeof localStorage.getItem('slug') === "string"){
      var params = {
        type_slug: 'articles',
        skip: 0,
      };
      var config = {
        "bucket": {
          slug: localStorage.getItem('slug'),
          write_key: localStorage.getItem('write_key'),
          read_key: localStorage.getItem('read_key')
        }
      }
      const AllOfIt = []
      Cosmic.getObjectType(config, params, (error, response) => {
        console.log("grabbing info")
        var updateCount = 0
        response.objects.all.map((item)=>{
          var newStuff = {
            _id: item._id,
            colors: JSON.parse(item.metafield.colors.value),
            image: item.metafield.item.url,
            tags: item.metafield.tags.value,
          }
          AllOfIt.push(newStuff)
          updateCount++
          console.log(updateCount)
        })
        if(updateCount === response.total){
          this.setState({loading: false, db: AllOfIt})
        }
      });
    }
  }

  GetPickerSelection = (selection) => {
    this.setState({pickFilter: selection})
  }

  RenderCards = () => {
    
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
        <Alert color="info" isOpen={this.state.loading}>
          Grabbing items from your bucket. . .
        </Alert>
        <div style={Styles.buttonMenu}>
          <Picker triggerFilterChange={this.GetPickerSelection}/>
          <Button outline color="primary" onClick={()=>{this.props.history.push('/upload')}}>Upload</Button>
        </div>
        <div>

        </div>
      </div>

    );
  }
}

export default App;
