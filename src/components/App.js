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
  const app1 = new Realm.App({id: process.env.REACT_APP_REALM_APP_ID});
  

 
  

  React.useEffect(()=>{
    async function getData () {
    	const user = await app1.logIn(Realm.Credentials.anonymous())
      
      const client1 = app1.currentUser.mongoClient('mongodb-atlas');
      
      const vids1 = client1.db('test').collection('videos');
      console.log(vids1)
    

      vids1.find()
      .then((res)=>{
        console.log(res);
        setData(res);
        
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
                  videoId : "New ASUS Laptops Are Here!"
                },
              }}
            className="link-1">
              <h3>New ASUS Laptops Are Here!</h3>
              <img 
              src="https://i.ytimg.com/an_webp/gpmTV9Ki2Qk/mqdefault_6s.webp?du=3000&sqp=CPi015QG&rs=AOn4CLDDseMpCiS52eOJONBVSWsXe1MtFw"
                className="img-2"
                alt=""
              />
              <p class="p1">
              ASUS have announced 4 new Zenbook laptops in their 2022 lineup, featuring innovative desgins, a mux switch, 
              and addressing issues with previous editions !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/2/",
                state: {
                  data : data[1],
                  videoId : "Tee Off Mr Bean (part 2/5) - Mr. Bean Official"
                },
              }} 
            className="link-1">
            <h3>Tee Off Mr Bean (part 2/5) - Mr. Bean Official</h3>
            <img 
              src="https://i.ytimg.com/an_webp/cbPtLlJpv6A/mqdefault_6s.webp?du=3000&sqp=CICA15QG&rs=AOn4CLBH4lAdW3T4JzS4onGZoUbnDO6yQw"
                className="img-1"
                alt=""
              />
              <p>Mr. Bean loses his trousers again, and has his first round of crazy gold in the afternoon ! 
            
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/3/",
                state: {
                  data : data[2],
                  videoId : "Best of Michael Scott - The Office US | Comedy Bites"
                },
              }} 
            className="link-1">
            <h3>Best of Michael Scott - The Office US | Comedy Bites</h3>
            <img 
            src="https://i.ytimg.com/an_webp/B3_UM8xxg5E/mqdefault_6s.webp?du=3000&sqp=CKO315QG&rs=AOn4CLDTLtzh87EuYxagRrKHjrPYr2U75w"
            className="img-1"
            alt=""
              />
              <p>
              From "The Office", an American television mockumentary sitcom, 
              created as an adaptation of the British series of the same name.
              
               
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/4/",
                state: {
                  data : data[3],
                  videoId : "Library  Special Episode | Classic MrBean"
                },
              }} 
            className="link-1">
            <h3>Library  Special Episode | Classic MrBean</h3>
            <img 
              src="https://i.ytimg.com/an_webp/SpF5EZy9ZOY/mqdefault_6s.webp?du=3000&sqp=CMap15QG&rs=AOn4CLDOwHYaaAmvslS-nRhqwjEYHitu1A"
                className="img-1"
                alt=""
              />
              <p> 
              Mr. Bean visits a rare book library, and tries to copy a page of a book by shading on tracing paper, but things go wrong ! 
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
                  videoId : "Making New York-style pizza at home"
                },
              }} 
            className="link-1">
            <h3>Making New York-style pizza at home</h3>
            <img 
              src="https://i.ytimg.com/an_webp/SDpCzJw2xm4/mqdefault_6s.webp?du=3000&sqp=CNC515QG&rs=AOn4CLCimF0BO8RahlQx3fSS2cg0P5j79A"
                className="img-1"
                alt=""
              />
              <p>Italian American Youtube chef Adam Ragusea detials his version of being able to make a New 
              York style pizza !
              
              </p>
              </Link>
            </div>
         
            <div className="card">
            <Link 
            to={{
            pathname: "/video/6/",
                state: {
                  data : data[5],
                  videoId : "XPS 13 Plus - Cleaner And Faster Than A MacBook!"
                },
              }}  
            className="link-1">
            <h3>XPS 13 Plus - Cleaner And Faster Than A MacBook!</h3>
            <img 
              src="https://i.ytimg.com/an_webp/6fPj6mj-M_k/mqdefault_6s.webp?du=3000&sqp=CLKW15QG&rs=AOn4CLDlRNZOv857v-MdseqhyrZ8IVDsUA"
                className="img-1"
                alt=""
              />
              <p>
              Review of the XPS 13 Plus 9320 (2022). Running the new i7-1280P chip from Intel. 
              This is the most powerful 13" laptop they've ever made.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/7/",
                state: {
                  data : data[6],
                  videoId : "Blowdrying Tutorial | Mens Hairstyle Tutorial 2022"
                },
              }}  
            className="link-1">
            <h3>Blowdrying Tutorial | Mens Hairstyle Tutorial 2022</h3>
            <img 
              src="https://i.ytimg.com/an_webp/tqXDa7k3sUc/mqdefault_6s.webp?du=3000&sqp=CNey15QG&rs=AOn4CLC0eBlPjCypgVc1z9hMbKzgVPpbpA"
                className="img-1"
                alt=""
              />
              <p>You guys asked for it so here it is! A men's hairstyle tutorial teaching you how to use a hair dryer / blow dryer properly.  
              
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/8/",
                state: {
                  data : data[7],
                  videoId : "I got hacked by an iPhone Cable"
                },
              }}  
            className="link-1">
            <h3>I got hacked by an iPhone Cable</h3>
            <img 
              src="https://i.ytimg.com/an_webp/IrXLRxSsMbs/mqdefault_6s.webp?du=3000&sqp=CNWk15QG&rs=AOn4CLAmcioAsZawUcSItPE8aZQrLaFHmw"
                className="img-1"
                alt=""
              />
              <p>Watch How this simple iPhone Cable can hack your computer, and steal everything you own, 
              and that the threat only gets bigger from there. 
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
                  videoId : "The MX Master 3 Is The Mouse You Want"
                },
              }}  
              className="link-1">
            <h3>The MX Master 3 Is The Mouse You Want</h3>
            <img 
              src="https://i.ytimg.com/an_webp/7YF6VOqlfVM/mqdefault_6s.webp?du=3000&sqp=COCo15QG&rs=AOn4CLBCimAcJYUe_1Y91qLZ7T5o4O622g"
                className="img-1"
                alt=""
              />
              <p>
              The Logitech MX Master 3 makes the best mouse better, with a host of new and improved features from previous iterations .
              </p>
              </Link>
            </div>


          <div className="card">
            <Link 
            to={{
            pathname: "/video/10/",
                state: {
                  data : data[9],
                  videoId : "Why do 'Gaming' Phones Exist"
                },
              }}  
              className="link-1">
            <h3>Why do 'Gaming' Phones Exist</h3>
            <img 
              src="https://i.ytimg.com/an_webp/9ujDlJaSbbM/mqdefault_6s.webp?du=3000&sqp=COKw15QG&rs=AOn4CLAZ6zaWblvTOCJBJwQUZmtld6l1lw"
                className="img-1"
                alt=""
              />
              <p>
              We took a look at Lenovo Legion Duel Phone 2, Nubia RedMagic 6 Pro, 
              and ASUS ROG Phone 5 Ultimate to make some hard choices 
              </p>
              </Link>
            </div>

         <div className="card">
         <Link 
         to={{
            pathname: "/video/11/",
                state: {
                  data : data[10],
                  videoId : "Dream Desk Setup 5.0 | Big Screen Productivity and Gaming"
                },
              }}  
         className="link-1">
         <h3>Dream Desk Setup 5.0 | Big Screen Productivity and Gaming</h3>
         <img 
           src="https://i.ytimg.com/an_webp/Xzp3fF6AL88/mqdefault_6s.webp?du=3000&sqp=CJaJ15QG&rs=AOn4CLBlIowf2IAbd3iDtQFfUErArUkowA"
             className="img-1"
             alt=""
           />
           <p>
           Upgraded my Dream Desk Setup for 2020 with improvements for working from home, gaming and relaxing.
           </p>
           </Link>
         </div>

         <div className="card">
         <Link 
         to={{
            pathname: "/video/12/",
                state: {
                  data : data[11],
                 videoId : "Avoid These Keyboards!"
                },
              }} 
         className="link-1">
         <h3>Avoid These Keyboards!</h3>
         <img 
           src="https://i.ytimg.com/an_webp/S5-12O3kiho/mqdefault_6s.webp?du=3000&sqp=CNiq15QG&rs=AOn4CLBTDTpfhAXD8lFGD4SyZGkC09kOMg"
             className="img-1"
             alt=""
           />
           <p>
           My review of the CoolerMaster SK650 and SK630. Beautiful low profile mechanical keyboards that you shouldn't buy.
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
                  videoId : "Darksiders II - Vigil Games Studio Tour"
                },
              }} 
            className="link-1">
            <h3>Darksiders II - Vigil Games Studio Tour</h3>
            <img 
              src="https://i.ytimg.com/an_webp/EdUvOhOFeiY/mqdefault_6s.webp?du=3000&sqp=CICo15QG&rs=AOn4CLDOdjCHm2R1OkGnxtKg7M_CnUtgJw"
                className="img-2"
                alt=""
              />
              <p>
              Take a whirlwind tour of Vigil Games to see the team hard at work on Darksiders II.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/14/",
                state: {
                  data : data[13],
                  videoId : "The 2020 Voice Assistant Battle"
                },
              }}  
            className="link-1">
            <h3>The 2020 Voice Assistant Battle</h3>
            <img 
              src="https://i.ytimg.com/an_webp/ou9CjRWq1tM/mqdefault_6s.webp?du=3000&sqp=CPmh15QG&rs=AOn4CLC5sIRCWlCa1jnPcrUHj4FG9RC31g"
                className="img-1"
                alt=""
              />
              <p>
              Full comparison of Google Assistant vs Siri vs Bixby vs Amazon Alexa - Voice Assistants in 2020 - Do they suck?

              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/15/",
                state: {
                  data : data[14],
                  videoId : "Turn your Outdated Computer into a Monitor! - Luna Display"
                },
              }} 
            className="link-1">
            <h3>Turn your Outdated Computer into a Monitor! - Luna Display</h3>
            <img 
              src="https://i.ytimg.com/an_webp/u4bGGtnc6Ds/mqdefault_6s.webp?du=3000&sqp=CISz15QG&rs=AOn4CLDwVULvXpkLxSoog1L71pNvQCqr9g"
                className="img-1"
                alt=""
              />
              <p>
              Been a thing since 2014. Enter Luna Display, a dongle that hopes to fix that – But is it really better than AirPlay?
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/16/",
                state: {
                  data : data[15],
                  videoId : "Why Everyone is Copying AirPods Explained!"
                },
              }} 
             className="link-1">
            <h3>Why Everyone is Copying AirPods Explained!</h3>
            <img 
              src="https://i.ytimg.com/an_webp/zHAB4qDsgKY/mqdefault_6s.webp?du=3000&sqp=CLaw15QG&rs=AOn4CLCm2utl9g4TGKMZrSmegqo6fpf3lQ"
                className="img-2"
                alt=""
              />
              <p className="p1"> 
              The TRUTH about AirPods clones... and how they're actually helping usher in a dream wireless future.
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
                  videoId : "Samsung S21 Ultra vs iPhone Battery Life Test!"
                },
              }}  
            className="link-1">
            <h3>Samsung S21 Ultra vs iPhone Battery Life Test!</h3>
            <img 
              src="https://i.ytimg.com/an_webp/OmzKPmSW1Bw/mqdefault_6s.webp?du=3000&sqp=CNy615QG&rs=AOn4CLAdkpTuGA_adiq-NCLAbqW1v_KeLQ"
                className="img-1"
                alt=""
              />
              <p> 
              Drain Comparison of Samsung Galaxy S21 Ultra 
              vs Samsung galaxy Note 20 Ultra vs Samsung Galaxy S20 Ultra 
              vs iPhone 12 Pro Max vs iPhone 11 Pro Max. 
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/18/",
                state: {
                  data : data[17],
                  videoId : "Hotdog cooking tutorial"
                },
              }}  
            className="link-1">
            <h3>Hotdog cooking tutorial</h3>
            <img 
              src="https://i.ytimg.com/an_webp/-p7YMtvYvSM/mqdefault_6s.webp?du=3000&sqp=COmx15QG&rs=AOn4CLDeVR6_Iw-EcDAh7YMYS-DILtsg-A"
                className="img-2"
                alt=""
              />
              <p className="p1">
              I made a famous street food in Korea, corn dogs.
              (In Korea, it is called a hot dog.)
              There are a lot of different toppings, so I made three.
              It's really crispy and really tasty.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/19/",
                state: {
                  data : data[18],
                  videoId : "Cyberpunk 2077 - CD Projekt Red Studio Tour"
                },
              }}  
            className="link-1">
            <h3>Cyberpunk 2077 - CD Projekt Red Studio Tour</h3>
            <img 
              src="https://i.ytimg.com/an_webp/99E9KbbXD3A/mqdefault_6s.webp?du=3000&sqp=CMDB15QG&rs=AOn4CLBeM_1mI5JJP9Kyx2_H6dPZMrrULw"
                className="img-1"
                alt=""
              />
              <p className="p1">
              We took a tour around the CD Projekt Red studio ahead of the upcoming release of their game Cyberpunk 2077.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/20/",
                state: {
                  data : data[19],
                  videoId : "Home Office Updated Setup 2021 ft UPLIFT Commercial Desk V2"
                },
              }}   
            className="link-1">
            <h3>Home Office Updated Setup 2021 ft UPLIFT Commercial Desk V2</h3>
            <img 
              src="https://i.ytimg.com/an_webp/0oLzoYnPHY8/mqdefault_6s.webp?du=3000&sqp=CNut15QG&rs=AOn4CLAmuCueJR2wBsnoTzVXgnmBQwfKkQ"
                className="img-1"
                alt=""
              />
              <p className="p1">
              I spent last week rearranging my home office space and I’m liking this current configuration the most right now.
              </p>
              </Link>
            </div>

          </div>


// new stuff begins here









          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/21/",
                state: {
                  data : data[20],
                  videoId : "Crazy Driving - Funny Clip | Classic Mr Bean"
                },
              }}  
            className="link-1">
            <h3>Crazy Driving | Funny Clip | Classic Mr Bean</h3>
            <img 
              src="https://i.ytimg.com/an_webp/FYuQctvKNLg/mqdefault_6s.webp?du=3000&sqp=CJCq15QG&rs=AOn4CLAa-whSXLbR8CYp9L2dMth2XD5qCw"
                className="img-1"
                alt=""
              />
              <p> 
              Mr. Bean is Running late for his dentist's appointment, so he has to drive whilst changing clothes 
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/22/",
                state: {
                  data : data[21],
                  videoId : "Danny Macaskill : The Ridge"
                },
              }}  
            className="link-1">
            <h3>Danny Macaskill : The Ridge</h3>
            <img 
              src="https://i.ytimg.com/an_webp/xQ_IQS3VKjA/mqdefault_6s.webp?du=3000&sqp=CICi15QG&rs=AOn4CLDacAtmeYxFx8KB0jCfujD9ObUQFA"
                className="img-2"
                alt=""
              />
              <p className="p1">
              'The Ridge' is the brand new film from Danny Macaskill, as he returns to his native 
              home in Scotland to take on a death-defying ride along the notorious Cuillin Ridgeline.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/23/",
                state: {
                  data : data[22],
                  videoId : "Finding The Best Dominos Pizza : The Urban Guide"
                },
              }}  
            className="link-1">
            <h3>Finding The Best Dominos Pizza : The Urban Guide</h3>
            <img 
              src="https://i.ytimg.com/an_webp/16RDAgxZivU/mqdefault_6s.webp?du=3000&sqp=CNi515QG&rs=AOn4CLD0xI8NRpZba739r1kcMOm6xVpW2A"
                className="img-1"
                alt=""
              />
              <p className="p1">
              You wanted Antil & Rohit to try all the Domino's ke non-veg pizzas. 
              Watch to find out Antil & Rohit's Top 3 choices !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/24/",
                state: {
                  data : data[23],
                  videoId : "Mission Impossible - Fallout Ambushed by the CIA"
                },
              }}   
            className="link-1">
            <h3>Mission Impossible - Fallout Ambushed by the CIA</h3>
            <img 
              src="https://i.ytimg.com/an_webp/Ar5QDYsU1Qg/mqdefault_6s.webp?du=3000&sqp=CJjO15QG&rs=AOn4CLBMayMd_UHtABBYv8ZViWHASNRMig"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Sent by British intelligence to kill Solomon Lane, Ilsa  
              is trying to catch up to Ethan Hunt in a wild car chase through the streets of Paris.
              </p>
              </Link>
            </div>

          </div>







          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/25/",
                state: {
                  data : data[24],
                  videoId : "English Names for Cups, Glasses, Mugs etc"
                },
              }}  
            className="link-1">
            <h3>English Names for Cups, Glasses, Mugs etc</h3>
            <img 
              src="https://i.ytimg.com/an_webp/lHJIfoYbf0g/mqdefault_6s.webp?du=3000&sqp=CJDS15QG&rs=AOn4CLCokuNnG9sau8mJ553Gn53khI2Xqg"
                className="img-1"
                alt=""
              />
              <p> 
              Learn about the English names for glasses, tumblers, cups, mugs, pitchers, jars, etc.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/26/",
                state: {
                  data : data[25],
                  videoId : "At the Airport"
                },
              }}  
            className="link-1">
            <h3>At the Airport</h3>
            <img 
              src="https://i.ytimg.com/an_webp/jiBHZ_rqHB8/mqdefault_6s.webp?du=3000&sqp=CKGx15QG&rs=AOn4CLDFADrkSEDyMF234VIAZhJB4D5RRQ"
                className="img-2"
                alt=""
              />
              <p className="p1">
              Learn English words and phrases you can use at the airport when checking in, 
              going through security and while traveling by plane.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/27/",
                state: {
                  data : data[26],
                  videoId : "BABY DRIVER - 6-Minute Opening Clip"
                },
              }}  
            className="link-1">
            <h3>BABY DRIVER - 6-Minute Opening Clip</h3>
            <img 
              src="https://i.ytimg.com/an_webp/6XMuUVw7TOM/mqdefault_6s.webp?du=3000&sqp=CNqq15QG&rs=AOn4CLDMq0iFfM_-rlMgNJ29fidgpkeXmg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Check out this cool 6 -minute clip from #BabyDriverMovie in cinemas August 2.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/28/",
                state: {
                  data : data[27],
                  videoId : "How To Sharpen Dull Knives"
                },
              }}   
            className="link-1">
            <h3>How To Sharpen Dull Knives</h3>
            <img 
              src="https://i.ytimg.com/an_webp/Wk3scs5FqCY/mqdefault_6s.webp?du=3000&sqp=COS-15QG&rs=AOn4CLCUW4qTXRyFW0ipuOGeYki4ySfyOQ"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Here is what you'll need! Check out the Tasty One-Stop Shop for cookbooks, aprons, hats, and more at TastyShop.com
              </p>
              </Link>
            </div>

          </div>




          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/29/",
                state: {
                  data : data[28],
                  videoId : "Khaabon Ke Parinday (Full video song) Zindagi Na Milegi Dobara"
                },
              }}  
            className="link-1">
            <h3>Khaabon Ke Parinday (Full video song) Zindagi Na Milegi Dobara</h3>
            <img 
              src="https://i.ytimg.com/an_webp/R0XjwtP_iTY/mqdefault_6s.webp?du=3000&sqp=CJzW15QG&rs=AOn4CLDLN9Ab3qw4X96yGYivFSPFUpR11A"
                className="img-1"
                alt=""
              />
              <p> 
              From the movie "Zindagi Na Milegi Dobara" 
              starring Hrithik Roshan, Kartina Kaif, Farhan Akhtar, Abhey Deol and Kalki Koechin
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/30/",
                state: {
                  data : data[29],
                  videoId : "How to Choose Fresh Fruits and Vegetables From the Market"
                },
              }}  
            className="link-1">
            <h3>How to Choose Fresh Fruits and Vegetables From the Market</h3>
            <img 
              src="https://i.ytimg.com/an_webp/dtP8pTwQgc8/mqdefault_6s.webp?du=3000&sqp=CKaU15QG&rs=AOn4CLA8srw6b84E5WGu_ESZP9gFcmx-8Q"
                className="img-2"
                alt=""
              />
              <p className="p1">
              How to identify fresh and healthy fruits and vegetables in the Indian market every single time?
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/31/",
                state: {
                  data : data[30],
                  videoId : "How Japan’s High-Speed Bullet Train Works"
                },
              }}  
            className="link-1">
            <h3>How Japan’s High-Speed Bullet Train Works</h3>
            <img 
              src="https://i.ytimg.com/an_webp/oL-AOAOSTFw/mqdefault_6s.webp?du=3000&sqp=CPTB15QG&rs=AOn4CLBO6nFKFJ4JFS5DLZLtgb8ZK-wLfA"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Learn some of the high-tech engineering behind the Shinkansen, and how the trains are kept so precisely on schedule.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/32/",
                state: {
                  data : data[31],
                  videoId : "Musical Chairs Song for Children (Official Video) by Miss Patty"
                },
              }}   
            className="link-1">
            <h3>Musical Chairs Song for Children (Official Video) by Miss Patty</h3>
            <img 
              src="https://i.ytimg.com/an_webp/-oO7Vk3lNXM/mqdefault_6s.webp?du=3000&sqp=CPHO15QG&rs=AOn4CLB-WTLhbUY6hbWuxTCQSxDASJQWRg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Musical Chairs can be played with many games, developing strategic thinking, listening to directions and social comfort.
              </p>
              </Link>
            </div>

          </div>











          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/33/",
                state: {
                  data : data[32],
                  videoId : "How to use a Fork and Knife Correctly to eat"
                },
              }}  
            className="link-1">
            <h3>How to use a Fork and Knife Correctly to eat</h3>
            <img 
              src="https://i.ytimg.com/an_webp/dtQDNI_64JE/mqdefault_6s.webp?du=3000&sqp=CJPb15QG&rs=AOn4CLBx23vP5FlNlLGtMeT-mK78stv7xg"
                className="img-1"
                alt=""
              />
              <p> 
              In this video on simple dining etiquettes, 
              I take you through the British method of using a fork and knife which is what we use in India.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/34/",
                state: {
                  data : data[33],
                  videoId : "How Nathans Makes The Most Legendary Hot Dogs In NYC"
                },
              }}  
            className="link-1">
            <h3>How Nathans Makes The Most Legendary Hot Dogs In NYC</h3>
            <img 
              src="https://i.ytimg.com/an_webp/dbPIalzF7Qc/mqdefault_6s.webp?du=3000&sqp=CNir15QG&rs=AOn4CLDt5CsG0lPK2kEajutIPx8AyqVVBQ"
                className="img-2"
                alt=""
              />
              <p className="p1">
              The restaurant has grown into an iconic global brand with its internationally recognized annual hot-dog-eating contest.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/35/",
                state: {
                  data : data[34],
                  videoId : "London to Paris on the new Eurostar e320"
                },
              }}  
            className="link-1">
            <h3>London to Paris on the new Eurostar e320</h3>
            <img 
              src="https://i.ytimg.com/an_webp/fP3lUQ2kFCQ/mqdefault_6s.webp?du=3000&sqp=CIir15QG&rs=AOn4CLDt6eLXPo3PQXPPkBY_zgex7wngNQ"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Join me for a short trip from London to Paris on Eurostar. 
              We will also check out the business lounge using our Amex Plat card.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/36/",
                state: {
                  data : data[35],
                  videoId : "How to Open Champagne"
                },
              }}   
            className="link-1">
            <h3>How to Open Champagne</h3>
            <img 
              src="https://i.ytimg.com/an_webp/nDBKqoaCTkc/mqdefault_6s.webp?du=3000&sqp=CI2r15QG&rs=AOn4CLBefmWNRzQNZkAwrqRRtrjb-9osGg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Every New Year's Eve, many people wonder how to open champagne. 
              Chef Jason Hill shows you how to open champagne the correct way 
              </p>
              </Link>
            </div>

          </div>









          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/37/",
                state: {
                  data : data[36],
                  videoId : "Paris to Milan by TGV train from €29 - video guide"
                },
              }}  
            className="link-1">
            <h3>Paris to Milan by TGV train from €29 - video guide</h3>
            <img 
              src="https://i.ytimg.com/an_webp/B09t_WJz_mM/mqdefault_6s.webp?du=3000&sqp=CNmz15QG&rs=AOn4CLDCIsuUcAvDSYHOj98kkRX8LiqUEw"
                className="img-1"
                alt=""
              />
              <p> 
              A journey from Paris to Turin & Milan by TGV high-speed train, 
              showing the train interior & exterior, the scenery and food. 
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/38/",
                state: {
                  data : data[37],
                  videoId : "Ordered ENTIRE Krispy Kreme DONUT MENU"
                },
              }}  
            className="link-1">
            <h3>Ordered ENTIRE Krispy Kreme DONUT MENU</h3>
            <img 
              src="https://i.ytimg.com/an_webp/f-XFQmr5eV8/mqdefault_6s.webp?du=3000&sqp=COzg15QG&rs=AOn4CLC6Rpo55uDKJbVAUWbxpzx56kTmtA"
                className="img-2"
                alt=""
              />
              <p className="p1">
              Donuts tried include Peanut Butter Kreme, New York Cheesecake, Powdered Blueberry, Red Velvet and many more
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/39/",
                state: {
                  data : data[38],
                  videoId : "Tera Ban Jaunga Mix  🔥 Toyota Innova Crysta"
                },
              }}  
            className="link-1">
            <h3>Tera Ban Jaunga Mix  🔥 Toyota Innova Crysta</h3>
            <img 
              src="https://i.ytimg.com/an_webp/vamvFRENuZk/mqdefault_6s.webp?du=3000&sqp=CJHj15QG&rs=AOn4CLAHpiWjvvRcnpnbzyFSc-nggQZaNw"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Driving through traffic in my Innova Crysta, listening to some good music, and sharing good driving tips !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/40/",
                state: {
                  data : data[39],
                  videoId : "Selecting the Best Fruit and Vegetables"
                },
              }}   
            className="link-1">
            <h3>Selecting the Best Fruit and Vegetables</h3>
            <img 
              src="https://i.ytimg.com/an_webp/mB3qc-mexsc/mqdefault_6s.webp?du=3000&sqp=CPDP15QG&rs=AOn4CLAhV4oPrOBQ-Z8Gzo-LEXPTueWlWQ"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Watch as Chef Jimmy Schmidt teaches how to select foods that are in season. 
              These videos are for demonstration purposes. 
              </p>
              </Link>
            </div>

          </div>






          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/41/",
                state: {
                  data : data[40],
                  videoId : "Top 100 Modern Wooden Sofa Set Design Ideas 2022"
                },
              }}  
            className="link-1">
            <h3>Top 100 Modern Wooden Sofa Set Design Ideas 2022</h3>
            <img 
              src="https://i.ytimg.com/an_webp/jff6HE9Otys/mqdefault_6s.webp?du=3000&sqp=CM-z15QG&rs=AOn4CLA4ZeoM9phnFvJoIkJvkYA6BgzfRw"
                className="img-1"
                alt=""
              />
              <p> 
              Modern Wooden Sofa Set Design Ideas | Living Room Sofa Design | 
              living room furniture design ideas by Decor Puzzle
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/42/",
                state: {
                  data : data[41],
                  videoId : "Raymour & Flanigan Furniture and Mattress Store Bed Room And Living Set 2022"
                },
              }}  
            className="link-1">
            <h3>Raymour & Flanigan Furniture and Mattress Store Bed Room And Living Set 2022</h3>
            <img 
              src="https://i.ytimg.com/an_webp/ZjHle0jsgmg/mqdefault_6s.webp?du=3000&sqp=CPjY15QG&rs=AOn4CLCGpnN9DVfE-Es075AgrLheBYBbHA"
                className="img-2"
                alt=""
              />
              <p className="p1">
              A fresh collection of Raymour & Flanigan sofa sets for the modern home environment !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/43/",
                state: {
                  data : data[42],
                  videoId : "SPARETIME : A road cycling video"
                },
              }}  
            className="link-1">
            <h3>SPARETIME : A road cycling video</h3>
            <img 
              src="https://i.ytimg.com/an_webp/TrksXthaMz8/mqdefault_6s.webp?du=3000&sqp=CPa915QG&rs=AOn4CLCX9iKf4C6903MrEpZO1W3GHP1KBA"
                className="img-1"
                alt=""
              />
              <p className="p1">
              "Your spare time is where your dreams and goals come true.
              We work hard to earn sparetime. Don't waste it doing nothing." 
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/44/",
                state: {
                  data : data[43],
                  videoId : "Mr Bean - ride on the car roof"
                },
              }}   
            className="link-1">
            <h3>Mr Bean - ride on the car roof</h3>
            <img 
              src="https://i.ytimg.com/an_webp/dNn4YFvQLMI/mqdefault_6s.webp?du=3000&sqp=CK7Z15QG&rs=AOn4CLC6vfvESzaEOaV7n-zT8TGyuNnVOg"
                className="img-1"
                alt=""
              />
              <p className="p1">
              Mr. Bean gets a little too carried away in the DIY store, leading to a very awkward drive home.
              </p>
              </Link>
            </div>

          </div>






          <div className="row-5">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/45/",
                state: {
                  data : data[44],
                  videoId : "Veg Mayo Sandwich - Lunch Box Recipe"
                },
              }}  
            className="link-1">
            <h3>Veg Mayo Sandwich - Lunch Box Recipe</h3>
            <img 
              src="https://i.ytimg.com/an_webp/rASgAQYZpFo/mqdefault_6s.webp?du=3000&sqp=CMSz15QG&rs=AOn4CLAqJufJ_SVFnBlClkzh8TQGL9urzw"
                className="img-1"
                alt=""
              />
              <p> 
              Follow this simple homecooking recipe to make a delicious Veg Mayo Sandwich with 
              veggy toppings and spoonful of Mayo !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/46/",
                state: {
                  data : data[45],
                  videoId : "Yun Hi Chala Chal [Full Song] | Swades"
                },
              }}  
            className="link-1">
            <h3>Yun Hi Chala Chal [Full Song] | Swades</h3>
            <img 
              src="https://i.ytimg.com/an_webp/LuTy9KGKNbA/mqdefault_6s.webp?du=3000&sqp=CPDY15QG&rs=AOn4CLCTPsprN9PT3B7PTwIDleSQfuCugg"
                className="img-2"
                alt=""
              />
              <p className="p1">
              Song - Yun Hi Chala Chal,
              Movie - Swades,
              Singer - Udit Narayan, Hariharan, Kailash Kher,
              Lyricist - Javed Akhtar,
              Music - A.R. Rahman,
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/47/",
                state: {
                  data : data[46],
                  videoId : "vegetables in the butter, Recipe #8, vegetables"
                },
              }}  
            className="link-1">
            <h3>vegetables in the butter, Recipe #8, vegetables</h3>
            <img 
              src="https://i.ytimg.com/an_webp/9Onjrbphdxw/mqdefault_6s.webp?du=3000&sqp=CIzG15QG&rs=AOn4CLBPA1q9Pk_55o48uwC8E_A5WSG5iw"
                className="img-1"
                alt=""
              />
              <p className="p1">
                 A simple recipe to make a good side dish consisiting of buttered vegetables, nutricious and delicious !
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
             to={{
            pathname: "/video/48/",
                state: {
                  data : data[47],
                  videoId : "We Tried Star Chefs Chocolate Cake Recipes"
                },
              }}   
            className="link-1">
            <h3>We Tried Star Chefs Chocolate Cake Recipes</h3>
            <img 
              src="https://i.ytimg.com/an_webp/kAgPn_4gGTY/mqdefault_6s.webp?du=3000&sqp=CNbQ15QG&rs=AOn4CLCKOgc3B0AD6KWIdkrMGHkEKXFI0A"
                className="img-1"
                alt=""
              />
              <p className="p1">
              There's nothing better than a rich, decadent slice of chocolate cake. Join us as we critique an assortment of famous cholocate cakes!
              </p>
              </Link>
            </div>

          </div>






          <div className="row-6">

            <div className="card">
            <Link 
            to={{
            pathname: "/video/49/",
                state: {
                  data : data[48],
                  videoId : "VARANASI - Cinematic travel film (Sony A7iii)"
                },
              }}  
            className="link-1">
            <h3>VARANASI - Cinematic travel film (Sony A7iii)</h3>
            <img 
              src="https://i.ytimg.com/an_webp/1udJsv1VcII/mqdefault_6s.webp?du=3000&sqp=CNjf15QG&rs=AOn4CLA0wu893oLMiXbG9Qp3ZWV7H-R40g"
                className="img-1"
                alt=""
              />
              <p> 
              A cinematic travel film to Varanasi, 
              to see a culture which has been preserved for thousands of years.
              </p>
              </Link>
            </div>

            <div className="card">
            <Link 
            to={{
            pathname: "/video/50/",
                state: {
                  data : data[49],
                  videoId : "This Plane Could Even Land Itself: Why Did The L-1011 Fail?"
                },
              }}  
            className="link-1">
            <h3>This Plane Could Even Land Itself: Why Did The L-1011 Fail?</h3>
            <img 
              src="https://i.ytimg.com/an_webp/jkFYD7R_Xig/mqdefault_6s.webp?du=3000&sqp=CKC615QG&rs=AOn4CLAgRuP_ZveDyEpJ6kCgpDeZ-vj_eg"
                className="img-2"
                alt=""
              />
              <p className="p1">
              The L-1011  nearly bankrupted Lockheed, who incurred billions of dollars in losses, 
              and only ever sold half the TriStars it would need  just to break even financially. 
              </p>
              </Link>
            </div>

           

            

          </div>

          


        </div>
      
      </div>  
      <footer className="footer">
        Developed in 2022, by Kaustubha DS, Kaushik K, Manas P S and Manish M 
      </footer>
    </div>
    
    
  );
}

export default App;
