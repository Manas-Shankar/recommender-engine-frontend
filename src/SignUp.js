import React, { Component } from "react";
import './popUp.css';



export default function SignUp(props) {

  const [name,changeName] = React.useState("");
  const [email,changeEmail] = React.useState("");
  const [password,changePassword] = React.useState("");

  const handleClick = () => {
   props.toggle();
  };

  const handleChange= (e)=>{
    console.log(e.target.value)
    if(e.target.id === "name")
    {
      changeName(e.target.value)
    }
    if(e.target.id === "email")
    {
      changeEmail(e.target.value)
    }
    if(e.target.id === "password")
    {
      changePassword(e.target.value)
    }
  }

const handleSubmit = (e)=>{
    console.log(e.target);
}

  //   const handleSubmit = (e)=>{
//     e.preventDefault();
//     let userData;
    
//     let phonePattern = new RegExp(/^\d{10}$/);
//     let res = phonePattern.test(phone);

//     if(res)
//     {
//       const formData1 = [name,phone,region];
//       console.log(formData1);
  
//       axios.post(url,{
//         name:name,
//         phone:phone,
//         region:region
//       },{"headers": {
  
//         "content-type": "application/json",
        
//         }})
//       .then((response)=>{
//         console.log(response)
        
//         if(response.status===200 && response.data==="phone number duplicated.Please try again")
//         {
//           alert("phone number already in database.\nPlease try again");
//           props.toggle();
//         }
//         else if(response.status===200)
//         {
//           alert("successfully inserted record!");
//           props.toggle();
//         }
//       })
//       .catch((err)=>{
//         console.log(err)
//         alert(err,"\nPlease try again later..")
//         props.toggle();
//       })
//     }

//     else {
//       alert("entered phone number must be a number, and must be of 10 digits!")
//     }
//   };
    // console.log(props.regionData[0])
  return (

     <div className="modal_content">
     <span className="close" onClick={()=>{handleClick()}} >&times; </span>
      <div className="content">
        <p className="description">
          Enter username, email id and password to sign up.
        </p>

        <form  onSubmit={(e)=>{handleSubmit(e)}} className="form">
          <label for="name">Username :</label><br/>
          <input type="text" name="name" id="name" value={name} onChange ={(e)=>{handleChange(e)}} required className="input"/><br/>

          <label for="email">Email ID:</label><br/>
          <input type="email" name="email" id="email" value={email} onChange ={(e)=>{handleChange(e)}}  required className="input"/><br/>

          <label for="password">Password: </label><br/>
          <input type="password" name="password" id="password" value={password} onChange ={(e)=>{handleChange(e)}}  required className="input"/><br/>

        <br/>

          <button type="submit" className="submit" >Submit</button>

        </form>
      </div>
   </div>
  );
 
}