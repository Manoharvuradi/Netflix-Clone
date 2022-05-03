import React, { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);
    //when we press back to go back we need to use history button for example when we hit the profile button we will useNavigate button
    const navigate = useNavigate();
    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }        
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=>window.removeEventListener("scroll",transitionNavBar);
    },[])
    
  return (
    <div className={`nav ${show && `nav_black`}`}>
        <div className='nav__contents'>
            <img onClick={()=>navigate('/')} className="nav_logo" src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>

            <img onClick={()=>navigate('/profile')} className="nav_avatar" src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' width="20%"alt=''/>
        </div>
    </div>
  )
}

export default Nav