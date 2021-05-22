import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './components/App';
import LoggedIn from './components/LoggedIn';
import VideoView from './components/videoView';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


ReactDOM.render(
  <Router>
    
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/video/:videoId/:embedId" exact component={VideoView}/>
      <Route path="/loggedIn" exact component={LoggedIn}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);


