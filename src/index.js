import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import App from './App/App';
import Settings from './Settings/Settings'
import Uploader from './Uploader/Uploader'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/settings" component={Settings}/>
      <Route exact path="/upload" component={Uploader}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker();
