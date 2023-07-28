import React, { useEffect, useState } from 'react'
import logo from './logo.png';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 150) {
              handleShow(true);
            } else {
              handleShow(false);
            }
          };
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    },[]);
  return (
    <div className={`nav ${show && "navBlack"}`}>
        <img src={logo} className="navLogo" />

    </div>
  )
}

export default Nav