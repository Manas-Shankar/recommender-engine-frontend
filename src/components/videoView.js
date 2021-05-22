import React from 'react';
import '../CSS/videoView.css'
import LogIn from './LogIn';
import SignUp from './SignUp';
import YouTube from 'react-youtube';


export default function VideoView(props){

    const [videoID,changeID] = React.useState("");
    const [embedID,changeEmbedID] = React.useState("");
    const [logIn,showLogin] = React.useState(false);
    const [signUp,showSignUp] = React.useState(false);
    

    React.useEffect(() => {
     changeID(props.match.params.videoId)
     changeEmbedID(props.match.params.embedId)
     console.log(props.match)
  }, [])

  // const checkElapsedTime = (e) => {
  //   const duration = e.target.getDuration();
  //   const currentTime = e.target.getCurrentTime();
  //   // console.log(currentTime/duration)
  //   if(currentTime/duration > 0.5)
  //   {
  //     console.log(duration)
  //     console.log(currentTime)
  //   }
    
  // };


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
          <div className="player-area">
            <h2 className="player-title">Video {videoID}</h2> 
            <div className="main-player">
                {/* <iframe
                  id="embedded-video"
                  src={`https://www.youtube.com/embed/${embedID}?enablejsapi=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                /> */}
                <YouTube
                    videoId={embedID}
                    // onPlay={(e) => checkElapsedTime(e)}
                    className="Youtube"
                />
            </div>   
          </div>
        
        </div>
            
        </div>
    );
}

