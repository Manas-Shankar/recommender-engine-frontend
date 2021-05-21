import React from 'react';
import './videoView.css';
import LogIn from './LogIn';
import SignUp from './SignUp';


export default function VideoView(props){

    const [videoID,changeID] = React.useState("");
    const [logIn,showLogin] = React.useState(false);
    const [signUp,showSignUp] = React.useState(false);

    console.log(props.match.params.videoId);

    React.useEffect(() => {
     changeID(props.match.params.videoId)
    }, [])

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
   

    return (
        <div>
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
        <div className="App-header-video">
        <p className="title-video">EngineTube</p>
        <button className="log-in-sign-up-video" onClick={(e)=>{handleOpen(e)}} id="signUp">
        Sign Up</button>
        <button className="log-in-sign-up-video" onClick={(e)=>{handleOpen(e)}} id="logIn">
        Login</button>
      </div>

        <div className="container">
        Hello! This is video {videoID} !
        </div>
            
        </div>
    );
}

