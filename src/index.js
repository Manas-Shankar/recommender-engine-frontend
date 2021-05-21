import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoggedIn from './LoggedIn';
import VideoView from './videoView';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


ReactDOM.render(
  <Router>
    
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/video/:videoId" exact component={VideoView}/>
      <Route path="/loggedIn" exact component={LoggedIn}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);


