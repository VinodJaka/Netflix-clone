import React,{useState,useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",null);
        };
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
    <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="Netflix Logo" className="nav__logo" />
    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg" alt="Profile Logo" className="nav__avatar" />
    </div>
  )
}

export default Nav
