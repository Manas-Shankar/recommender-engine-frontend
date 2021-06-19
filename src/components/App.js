import '../CSS/App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import React from 'react';
import {Link} from 'react-router-dom';
import VideoView from './videoView';
import { MongoClient }  from 'mongodb' ;
import * as Realm from 'realm-web';

const uri = "mongodb+srv://admin:admin@videosdb.mtlip.mongodb.net/videosdatabase?retryWrites=true&w=majority";

function App(){
  const [user,setUser] = React.useState(false);
  const [data,setData] = React.useState([]);
  const [logIn,showLogin] = React.useState(false);
  const [signUp,showSignUp] = React.useState(false);
  const app = new Realm.App({id: process.env.REACT_APP_REALM_APP_ID});
  

  React.useEffect(()=>{
    async function getData () {
    	const user = await app.logIn(Realm.Credentials.anonymous())
      const client = app.currentUser.mongoClient('mongodb-atlas');
      const vids = client.db('videosdatabase').collection('videos');
      vids.find()
      .then((res)=>{
        console.log(res);
        setData(res);
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    
    getData();
   
  },[])

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
        <p className="title">intelliTube</p>
        <button className="log-in-sign-up" onClick={(e)=>{handleOpen(e)}} id="signUp">
        Sign Up</button>
        <button className="log-in-sign-up" onClick={(e)=>{handleOpen(e)}} id="logIn">
        Login</button>
      </div>
      <div className="videos-section">

        <div className="videos-container">

          <div className="row-1">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/1/",
                state: {
                  data : data[0],
                  videoId : "How a fire hydrant works"
                },
              }}
            className="link-1">
              <h3>How a fire hydrant works</h3>
              <img 
              src="https://i.ytimg.com/vi/HzFeh05_y3A/hqdefault.jpg"
                className="img-2"
                alt=""
              />
              <p class="p1">
              In this video we learn the inner workings of a fire hydrant, 
              the most important local resource for firefighters
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/2/",
                state: {
                  data : data[1],
                  videoId : "Vintage cuckoo clocks are still ticking in Bengaluru"
                },
              }} 
            className="link-1">
            <h3>Vintage cuckoo clocks are still ticking in Bengaluru</h3>
            <img 
              src="https://i.ytimg.com/vi/xhetXxhjIno/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>The shop, located in Bengaluru’s Majestic, 
              has been selling and repairing cuckoo clocks for more than 50 years now. 
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/3/",
                state: {
                  data : data[2],
                  videoId : "The Impossible Razer Laptop"
                },
              }} 
            className="link-1">
            <h3>The Impossible Razer Laptop</h3>
            <img 
            src="data:image/jpeg;base64,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"
            className="img-1"
            alt=""
              />
              <p>
              First look at a device running the AMD 5900HX with up to an RTX 3080. 
              The cooling is great on both those components in a such a small 14” package.
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/4/",
                state: {
                  data : data[3],
                  videoId : "How a Microwave Oven Works"
                },
              }} 
            className="link-1">
            <h3>How a Microwave Oven Works</h3>
            <img 
              src="https://i.ytimg.com/vi/kp33ZprO0Ck/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p> 
              Bill details how a microwave oven heats food, by describing the vacuum tube, known as a magnetron, and its properties
              </p>
              </Link>
            </div>

          </div>






          <div className="row-2">

          <div className="card">
            <Link 
            to={{
            pathname: "/video/5/",
                state: {
                  data : data[4],
                  videoId : "Turn your Outdated Computer into a Monitor! - Luna Display"
                },
              }} 
            className="link-1">
            <h3>Turn your Outdated Computer into a Monitor! - Luna Display</h3>
            <img 
              src="https://i.ytimg.com/vi/u4bGGtnc6Ds/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>been a thing since 2014. 
              Enter Luna Display, a dongle that hopes to fix that – But is it really better than AirPlay?
              
              </p>
              </Link>
            </div>
         
            <div className="card">
            <Link 
            to={{
            pathname: "/video/6/",
                state: {
                  data : data[5],
                  videoId : "The 2020 Voice Assistant Battle"
                },
              }}  
            className="link-1">
            <h3>The 2020 Voice Assistant Battle</h3>
            <img 
              src="https://i.ytimg.com/vi/ou9CjRWq1tM/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>
              Full comparison of Google Assistant vs Siri vs Bixby vs Amazon Alexa - Voice Assistants in 2020
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/7/",
                state: {
                  data : data[6],
                  videoId : "Gameloft Montréal  Faites le tour du studio en 5 minutes!"
                },
              }}  
            className="link-1">
            <h3>Gameloft Montréal  Faites le tour du studio en 5 minutes!</h3>
            <img 
              src="https://i.ytimg.com/vi/V2MaaMR6t3c/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>This is Gameloft Montreal's exclusive tour of its studio! 
              Get a behind-the-scenes look of your favourite games ! 
              
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/8/",
                state: {
                  data : data[7],
                  videoId : "Darksiders II - Vigil Games Studio Tour"
                },
              }}  
            className="link-1">
            <h3>Darksiders II - Vigil Games Studio Tour</h3>
            <img 
              src="https://i.ytimg.com/vi/EdUvOhOFeiY/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>Take a whirlwind tour of Vigil Games 
              to see the team hard at work on Darksiders II.
              </p>
              </Link>
            </div>

          </div>




          <div className="row-3">

          <div className="card">
            <Link to={{
            pathname: "/video/9/",
                state: {
                  data : data[8],
                  videoId : "Why do 'Gaming' Phones Exist??"
                },
              }}  
              className="link-1">
            <h3>Why do 'Gaming' Phones Exist??</h3>
            <img 
              src="https://i.ytimg.com/vi/9ujDlJaSbbM/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>
              A look at Lenovo Legion Duel Phone 2, 
              Nubia RedMagic 6 Pro, ASUS ROG Phone 5 
              Ultimate, to decide the best one 
              during the silicon shortage
              </p>
              </Link>
            </div>


          <div className="card">
            <Link 
            to={{
            pathname: "/video/10/",
                state: {
                  data : data[9],
                  videoId : "Dream Desk Setup 5.0: Big Screen Productivity and Gaming"
                },
              }}  
              className="link-1">
            <h3>Dream Desk Setup 5.0: Big Screen Productivity and Gaming</h3>
            <img 
              src="https://i.ytimg.com/vi/Xzp3fF6AL88/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>Upgrades to the Dream Desk Setup-2020  
              for working from home, gaming and relaxing. 
               
              </p>
              </Link>
            </div>

         <div className="card">
         <Link 
         to={{
            pathname: "/video/11/",
                state: {
                  data : data[10],
                  videoId : "Google Pixel 4a Review: Simple and Clean!"
                },
              }}  
         className="link-1">
         <h3>Google Pixel 4a Review: Simple and Clean!</h3>
         <img 
           src="data:image/jpeg;base64,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"
             className="img-1"
             alt=""
           />
           <p>
           The mission of Google with this handset is a simple one, and that's to beat the iPhone SE.
           </p>
           </Link>
         </div>

         <div className="card">
         <Link 
         to={{
            pathname: "/video/12/",
                state: {
                  data : data[11],
                 videoId : "How Do Fire Hydrants Work?"
                },
              }} 
         className="link-1">
         <h3>How Do Fire Hydrants Work?</h3>
         <img 
           src="https://i.ytimg.com/vi/YanPpmDkRLU/maxresdefault.jpg"
             className="img-1"
             alt=""
           />
           <p>
           This video isn't meant to be a comprehensive guide to fire hydrants, and here, we look mainly at US hydrants and fire systems.
           </p>
           </Link>
         </div>

       </div>



       <div className="row-4">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/13/",
                state: {
                  data : data[12],
                  videoId : "Home Office Updated Setup 2021 ft. UPLIFT Commercial Desk V2"
                },
              }} 
            className="link-1">
            <h3>Home Office Updated Setup 2021 ft. UPLIFT Commercial Desk V2</h3>
            <img 
              src="https://i.ytimg.com/vi/0oLzoYnPHY8/maxresdefault.jpg"
                className="img-2"
                alt=""
              />
              <p>
              Spent last week rearranging the home office space, and 
               the current configuration is working well.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/14/",
                state: {
                  data : data[13],
                  videoId : "Why Everyone is Copying AirPods: Explained!"
                },
              }}  
            className="link-1">
            <h3>Why Everyone is Copying AirPods: Explained!</h3>
            <img 
              src="https://i.ytimg.com/vi/zHAB4qDsgKY/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>The TRUTH about AirPods clones... 
              and how they're actually helping usher in a dream wireless future.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/15/",
                state: {
                  data : data[14],
                  videoId : "Avoid These Keyboards !"
                },
              }} 
            className="link-1">
            <h3>Avoid These Keyboards !</h3>
            <img 
              src="https://i.ytimg.com/vi/S5-12O3kiho/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p>
              My review of the CoolerMaster SK650 and SK630. 
              Beautiful low profile mechanical keyboards that you shouldn't buy.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/16/",
                state: {
                  data : data[15],
                  videoId : "Logitech G502 Lightspeed Review - NO reason NOT to upgrade"
                },
              }} 
             className="link-1">
            <h3>Logitech G502 Lightspeed Review - NO reason NOT to upgrade</h3>
            <img 
              src="https://i.ytimg.com/vi/tDNShkud4HE/maxresdefault.jpg"
                className="img-2"
                alt=""
              />
              <p className="p1"> 
              The G502 Lightspeed is the new wireless version with the HERO sensor,
              but can it compete with other offerings ?
              </p>
              </Link>
            </div>

          </div>




          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/17/",
                state: {
                  data : data[16],
                  videoId : "The Dream Desk Setup - Workspace + Desk Tour 2020"
                },
              }}  
            className="link-1">
            <h3>The Dream Desk Setup - Workspace + Desk Tour 2020</h3>
            <img 
              src="https://i.ytimg.com/vi/aRgqQe-8zYk/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p> 
              Take a tour of my work from home office and desk setup.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/18/",
                state: {
                  data : data[17],
                  videoId : "Cyberpunk 2077 - CD Projekt Red Studio Tour | Golden Joystick Awards 2019"
                },
              }}  
            className="link-1">
            <h3>Cyberpunk 2077 - CD Projekt Red Studio Tour | Golden Joystick Awards 2019</h3>
            <img 
              src="https://i.ytimg.com/vi/99E9KbbXD3A/maxresdefault.jpg"
                className="img-2"
                alt=""
              />
              <p className="p1">We took a tour around the CD Projekt Red studio ahead of the upcoming release of their game Cyberpunk 2077.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/19/",
                state: {
                  data : data[18],
                  videoId : "Why Samsung is about to take over."
                },
              }}  
            className="link-1">
            <h3>Why Samsung is about to take over.</h3>
            <img 
              src="https://i.pinimg.com/originals/a8/82/b6/a882b6b2e98c2720603f6e0b6545a0dd.jpg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              The launch of the Samsung Galaxy S20 FE is the first sign of Samsung starting to win. Here's what I think is happening.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/20/",
                state: {
                  data : data[19],
                  videoId : "Samsung S21 Ultra vs iPhone Battery Life Test!"
                },
              }}   
            className="link-1">
            <h3>Samsung S21 Ultra vs iPhone Battery Life Test!</h3>
            <img 
              src="https://i.ytimg.com/vi/OmzKPmSW1Bw/maxresdefault.jpg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Full battery Life Drain Comparison of Samsung Galaxy S21 Ultra vs 
              Samsung Galaxy S20 Ultra vs iPhone 12 Pro Max vs iPhone 11 Pro Max.
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
