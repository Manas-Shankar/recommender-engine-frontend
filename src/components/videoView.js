import React from 'react';
import '../CSS/videoView.css'
import LogIn from './LogIn';
import SignUp from './SignUp';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll,getDownloadURL,getMetadata } from "firebase/storage";

export default function VideoView(props){

    const [videoID,changeID] = React.useState("");
    const [embedID,changeEmbedID] = React.useState("");
    const [link,setLink] = React.useState("");
    const [company,setCompany] =  React.useState("");
    const [Detected_objects, setList] = React.useState("");
    const [Word_frequency,setWord] = React.useState("");
    const [logIn,showLogin] = React.useState(false);
    const location = useLocation();
    const [signUp,showSignUp] = React.useState(false);
    const [finished,setFinished] = React.useState(false);
    const [recommended, setRecommended] = React.useState("");
    const [Class,setClass] = React.useState("");
    const [videodata,setVideodata] = React.useState([]);
    const url = "https://recommender-final-year.herokuapp.com/recommend";

    const firebaseConfig = {
      apiKey: "AIzaSyAH1O6NBX0jTktS6yEsPKNTzOtjvm5x5rQ",
      authDomain: "multimodal-recommender-d-4e69c.firebaseapp.com",
      projectId: "multimodal-recommender-d-4e69c",
      storageBucket: "multimodal-recommender-d-4e69c.appspot.com",
      messagingSenderId: "1008583322580",
      appId: "1:1008583322580:web:9cdcf9cbcaa83cad2f4441",
      measurementId: "G-X9KST56JH3"
    };

    React.useEffect(() => {
     changeID(location.state.videoId)
     setVideodata(location.state.data)
    //  const appFirebase = initializeApp(firebaseConfig);
    //  const storage = getStorage(appFirebase);
    //  const storageRef = ref(storage,"/VIDEOS/");
    

      console.log(location.state)

      
      // listAll(storageRef)
      // .then((res) => {
      //   res.items.forEach((itemref)=>{
      //    getMetadata(itemref).then((metadata)=>{
      //      console.log(metadata.name)
      //      if(metadata.name === videoID)
      //      {
      //        getDownloadURL(itemref).then((url)=>{
      //          setLink(url)
      //        })
      //      }
          
      //    })
      //   })
      //     })
      // changeEmbedID(props.match.params.embedId)
      let obj1 = {}, obj2 = {};
      eval('obj1='+location.state.data.objects_detected);
      eval('obj2='+location.state.data.word_freq);
      // console.log(obj1)
      // console.log(obj2)
      setList(obj1)
      setLink(location.state.data.link)
      setWord(obj2)
      
      
      
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
        
        let final_obj  = {Detected_objects,Word_frequency}
        
        console.log(final_obj)
        
        axios.post(url,final_obj).then((res)=>{
          console.log(res);
          setClass(res.data.class)
          setRecommended(res.data.link)
          setCompany(res.data.company)
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
                  <h2 className="player-title">Recommended Advert : {company}</h2> 
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
                playing={true}
                />

                </div> 
                <p className="rec">Class of the recommended ad: {Class}</p>
                  
                </div>
        
                </div>
                }
            
        </div>
    );
}

