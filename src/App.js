import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import React from 'react';
import {Link} from 'react-router-dom';
import VideoView from './videoView';

function App(){
  const [user,setUser] = React.useState(false);

  const [logIn,showLogin] = React.useState(false);
  const [signUp,showSignUp] = React.useState(false);
  
  const handleOpen = (e)=>{
    console.log(e.target.id);
    if(e.target.id==="logIn")
    {
      showSignUp(false);
      showLogin(true);
    }
    else if(e.target.id==="signUp")
    {
      showLogin(false);
      showSignUp(true);
    }
  
  }

  const closeLogin =()=>{
    if(logIn === true)
    {
      showLogin(false);
    }
  }

  const closeSignUp = ()=>{
    if(signUp===true)
    {
      showSignUp(false);
    }
  }

  const handleLogin =()=>{
    setUser(true);
  }

  return (
    
    <div className="App">
        {
          logIn===true ? (
            <LogIn
              toggle = {closeLogin}
            />
          ):(
            <div></div>
          )
        }
        {
          signUp===true ? (
            <SignUp
              toggle = {closeSignUp}
            />
          ):(
            <div></div>
          )
        }
      <div className="App-header">
        <p className="title">EngineTube</p>
        <button className="log-in-sign-up" onClick={(e)=>{handleOpen(e)}} id="signUp">
        Sign Up</button>
        <button className="log-in-sign-up" onClick={(e)=>{handleOpen(e)}} id="logIn">
        Login</button>
      </div>
      <div className="videos-section">

        <div className="videos-container">

          <div className="row-1">
            <div className="card">
            <Link to={`/video/1`} className="link-1">
              <h3>video-1</h3>
              <img 
              src="https://cdn.mos.cms.futurecdn.net/4fxJtRFSxRMGs6yUsjhrkS.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/2`} className="link-1">
            <h3>video-2</h3>
            <img 
              src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Koenigsegg-news-scaled.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/3`} className="link-1">
            <h3>video-3</h3>
            <img 
            src="https://i.ytimg.com/vi/Fq2cTx-uGgA/maxresdefault.jpg"
              className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/4`} className="link-1">
            <h3>video-4</h3>
            <img 
              src="https://cdn.idropnews.com/wp-content/uploads/2020/12/01162746/PS5-Giveaway-Enter-to-Win-a-Free-PlayStation-5.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>


            <div className="card">
            <Link to={`/video/5`} className="link-1">
            <h3>video-5</h3>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/DE7w2qsRA3jVTaR8wTYp2P.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
              </p>
              </Link>
            </div>

          </div>

          <div className="row-2">
         
            <div className="card">
            <Link to={`/video/6`} className="link-1">
            <h3>video-6</h3>
            <img 
              src="https://www.bijlibachao.com/wp-content/uploads/2016/09/Bosch-washing-machine-update-photo.png"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/7`} className="link-1">
            <h3>video-7</h3>
            <img 
              src="https://i.ytimg.com/vi/E-gNDbz9Xbs/maxresdefault.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/8`} className="link-1">
            <h3>video-8</h3>
            <img 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13547183475129.5d3de2faec59b.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/9`} className="link-1">
            <h3>video-9</h3>
            <img 
              src="https://cdn.vox-cdn.com/thumbor/iOjXI9H8guMH90tCaLmiXeRTp78=/0x0:2040x1295/1200x800/filters:focal(743x479:1069x805)/cdn.vox-cdn.com/uploads/chorus_image/image/67629863/BudsZ.0.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link to={`/video/10`} className="link-1">
            <h3>video-10</h3>
            <img 
              src="https://i.ytimg.com/vi/A3Pyk3FPPoM/maxresdefault.jpg"
                className="img-1"
              />
              <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               
              </p>
              </Link>
            </div>

          </div>

        </div>
      
      </div>  
      <footer className="footer">
        Copyright 2021, Galacticos 
      </footer>
    </div>
    
    
  );
}

export default App;
