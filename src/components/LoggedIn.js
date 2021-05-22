import React from 'react';
import '../CSS/loggedIn.css';


export default function LoggedIn(){

    const [user,setUser] = React.useState(false);

    // React.useEffect(()=>{
    //     console.log(window.location.pathname);
    //     if(window.location.pathname==='/loggedIn' && user===false)
    //     {
    //       window.location.replace('/');
    //     }
    //    },[])


    const handleLogOut = ()=>{
       
      setUser(false);
      window.location.replace("/");
      }

    

    return (
        <div className="opener">
        <div className="App-header-logged">
        <p className="title-logged">EngineTube</p>
        <button className="log-out" onClick={()=>{handleLogOut()}}>
        Sign Out</button>
        
      </div>
        <div className="dashboard">
        <div className="uploaded">
        Welcome to the LoggedIn page !
        Your uploaded videos are:

        </div>
        <div className="upload">
        Here you can upload videos :

        </div>
            
        </div>
        </div>
    );
}