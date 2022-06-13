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
    const [Detected_objects, setList] = React.useState({});
    const [Word_frequency,setWord] = React.useState({});
    const [logIn,showLogin] = React.useState(false);
    const location = useLocation();
    const [signUp,showSignUp] = React.useState(false);
    const [finished,setFinished] = React.useState(false);

    const [recommended, setRecommended] = React.useState("");
    const [Class,setClass] = React.useState("");
    const [videodata,setVideodata] = React.useState([]);

    const [obj_det_freq,setFreq] = React.useState(0);
    const [word_freq,setWordFreq] = React.useState(0);
    const [r1,setr1] = React.useState(0);
    const [r2,setr2] = React.useState(0);
    const [final_r,setFinalr] = React.useState(0);

    const url = "https://recommender-intellitube.herokuapp.com/recommend";

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
    

      console.log(location.state)

      
      
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
        setFinished(true);
      }

      const onMid = ()=>{
        let final_obj  = {Detected_objects,Word_frequency}
        
        console.log(final_obj)
        
        axios.post(url,final_obj).then((res)=>{
          console.log(res);
          setClass(res.data.class)
          setRecommended(res.data.link)
          setCompany(res.data.company)
          setFreq(res.data.obj_det_freq)
          setWordFreq(res.data.word_freq)

          let R1 = res.data.r1_score;
          let R2 = res.data.r2_score;
          let finalR = res.data.final_r;
          
          setr1(parseFloat(R1).toPrecision(3))
          setr2(parseFloat(R2).toPrecision(3))
          setFinalr(parseFloat(finalR).toPrecision(3))

          console.log(Class,recommended);
  
        })
      }

      const doNothing = ()=>{
        
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
                onProgress = {({playedSeconds})=>{ (playedSeconds > 5  && playedSeconds < 6) ? onMid() : doNothing() }}
                />

            </div>   
          </div>
        
        </div>

                { finished && 
                  <div className="info-container">

                  <div className="container">

                  <table class="styledTable">
                    <thead>
                      <td >Class of the recommended ad</td>
                      <td className="table-field">{Class}</td>
                    </thead>

                    <thead>
                      <td >Oject frequency of {Class}</td>
                      <td className="table-field"> {obj_det_freq}</td>
                    </thead>

                    <thead>
                      <td >Word frquency of {Class}</td>
                      <td className="table-field">{word_freq}</td>
                    </thead>

                    <thead>
                      <td>Recommender r1 (Obj-det) score for {Class}</td>
                      <td className="table-field">{r1}</td>
                    </thead>

                    <thead>
                      <td>Recommender r2 (speech-to-text) score for {Class}</td>
                      <td className="table-field">{r2}</td>
                    </thead>


                    <thead>
                      <td>final_r score for {Class}</td>
                      <td className="table-field"> {final_r}</td>
                    </thead>
 
                  </table>
                 
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
                
                  
                </div>
        
                </div>
                </div>
                }

                
      
   
            
        </div>
    );
}

