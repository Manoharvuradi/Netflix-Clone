import React from 'react'
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import Nav from '../Nav';
import "./ProfileScreen.css"
import { auth } from '../firebase';
function ProfileScreen() {
    //this prrints the user details
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit profile</h1>
            <div className='profileScreen__info'>
                <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' alt=''
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        
                        <button onClick={()=>auth.signOut()} className='profileScreen__button'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen