import React,{ useEffect } from 'react'
import { useSelector } from "react-redux";
import './index.css'
import { useHistory, Redirect } from "react-router-dom";




const Profile = () => {
    const user = useSelector((store) => store.user)
    const history = useHistory();

    // useEffect(() => {
    //   if(user.firstName.length<2){
    //     setTimeout(()=>{
    //       <Redirect to="/profile"/>
    //     }, 2000)
    //   }
    // }, [])

    function logout() {
          setTimeout(()=>{
          window.location.reload(false);
      }, 500)
      history.push("/")
      }
      
  return (
    <div className='profile'>
        <h1>Profile   </h1> <br></br>
        
        <h2>Full Name: {user.firstName}</h2>
        <h2>Email ID: {user.email}</h2>
        <h2>Password: {user.cpass}</h2> 
        <button className='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile