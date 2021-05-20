import React from 'react';
import './loggedIn.css'


export default function LoggedIn(){

    const [user,setUser] = React.useState(false);

    // React.useEffect(()=>{
    //     console.log(window.location.pathname);
    //     if(window.location.pathname==='/loggedIn' && user===false)
    //     {
    //       window.location.replace('/');
    //     }
    //    },[])

    return (
        <div className="opener">
            Welcome to the LoggedIn page !
            Hope you're having a good day !
        </div>
    );
}