import React, { useEffect } from 'react';
import '../CSS/Landing.css'
import {  Link } from 'react-router-dom';


export default function Landing(){


    var i=0;
    var txt = 'Welcome to the website for our final year project,titled "MULTIMODAL RECOMMENDATION ENGINE FOR ADVERTISING USING OBJECT DETECTION AND NATURAL LANGUAGE PROCESSING"!'; /* The text */
    var speed = 75; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(i);
         
          i++;
          setTimeout(typeWriter, speed);
        }

      }

      useEffect(()=>{
        typeWriter()
      })
   
    return (

        <div className="App-header-landing">

        <p className="title-landing">intelliTube<span class="blinking-cursor">_</span> </p>

      <div className="landingContent">

      <div class="typewriter">
      
            <p id="demo"></p>
      </div>

      </div>

        <Link 
            to={{
            pathname: "/mainPage"
              }}
            className="link-landing">
             <button className="landing-button"> Go to the videos page ! </button>
        </Link>

      </div>

    );
}

