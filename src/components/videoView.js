import React from 'react';
import '../CSS/videoView.css'
import LogIn from './LogIn';
import SignUp from './SignUp';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function VideoView(props){

    const [videoID,changeID] = React.useState("");
    const [embedID,changeEmbedID] = React.useState("");
    const [link,setLink] = React.useState("");
    const [objList, setList] = React.useState({});
    const [logIn,showLogin] = React.useState(false);
    const location = useLocation();
    const [signUp,showSignUp] = React.useState(false);
    const [finished,setFinished] = React.useState(false);
    const [recommended, setRecommended] = React.useState("");
    const [Class,setClass] = React.useState("");
    const url = "https://recommender-engine.herokuapp.com/recommend";

    React.useEffect(() => {
     changeID(location.state.videoId)
     console.log(location.state)
      changeEmbedID(props.match.params.embedId)
      setList(location.state.data.detected_objects)
      setLink(location.state.data.link)
      console.log(link, objList);
      
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

      const onFinish = ()=>{
        axios.post(url,objList).then((res)=>{
          console.log(res);
          setClass(res.data.class)
          setRecommended(res.data.link)
  
          console.log(Class,recommended);
  
        })
        setFinished(true);
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
        <p className="title-video">intelliTube</p>
        <button className="log-in-sign-up-video" onClick={(e)=>{handleOpen(e)}} id="signUp">
        Sign Up</button>
        <button className="log-in-sign-up-video" onClick={(e)=>{handleOpen(e)}} id="logIn">
        Login</button>
      </div>

        <div className="container">
          <div className="player-area">
            <h2 className="player-title">{videoID}</h2> 
            <div className="main-player">
                
                {/* <YouTube
                    videoId="u4bGGtnc6Ds"
                    // onPlay={(e) => checkElapsedTime(e)}
                    className="Youtube"
                /> */}

                <ReactPlayer 
                url= {link}
                className='react-player'
                width="99%"
                height="99%"
                controls 
                onEnded = {()=> {onFinish()}}
                />

            </div>   
          </div>
        
        </div>

                { finished && 
                  <div className="container">
                  <div className="player-area">
                  <h2 className="player-title">Recommended Advert : </h2> 
                  <div className="main-player">
               
                {/* <YouTube
                    videoId="u4bGGtnc6Ds"
                    // onPlay={(e) => checkElapsedTime(e)}
                    className="Youtube"
                /> */}
                <ReactPlayer 
                url= {recommended}
                className='react-player'
                width="99%"
                height="99%"
                controls 
                />

                </div> 
                <p className="rec">Class of the recommended ad: {Class}</p>
                  
                </div>
        
                </div>
                }
            
        </div>
    );
}

