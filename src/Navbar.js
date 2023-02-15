import React from 'react';
import { Link } from "react-router-dom";
import "./App.scss";
import { FaPhone, FaBars, FaImage, FaUserAlt, FaMoneyBill, FaTicketAlt } from "react-icons/fa";
//import { BrowserRouter as Router } from "react-router-dom";
import $ from 'jquery';
// import logo from './resources/images/logo.png';

function Navbar(){
  var navMenuBool=false;
  const navMenu=()=>{
    console.log("click");
    if (navMenuBool===false) {
      $(".headComp").slideDown();
      $(".headComp").css("display","flex");
      navMenuBool=true;
    } else {
      $(".headComp").slideUp();
      navMenuBool=false;
    }
    
  }

  const navFunction=(value)=>{
    console.log("click");
    $(".nav").removeClass("clicked");
    $(`#${value}`).addClass("clicked");
  }


  return (
    <div className='navbar'>
        <div className="navBtn" onClick={()=>navMenu()}><FaBars /></div>
        <div className="headComp">
          <img className="navLogo" src="images/logo.png"></img>
          <Link
            to="/"
            className="nav"
            id="nav1"
            onClick={()=>navFunction("nav1")}
            style={{
              color: "black",
              fontSize: "21px"
            }}
          >
            About me
            <FaUserAlt />
          </Link>
          <Link
            to="/Gallery"
            className="nav"
            id="nav2"
            onClick={()=>navFunction("nav2")}
            style={{
              color: "black",
              fontSize: "25px"
            }}
          >
            Gallery
            <FaImage />
          </Link>
          <Link
            to="/Pricing"
            className="nav"
            id="nav3"
            onClick={()=>navFunction("nav3")}
            style={{
              color: "black",
              fontSize: "25px"
            }}
          >
            Lessons
            <FaTicketAlt />
          </Link>
          <Link
            to="/Contact"
            className="nav"
            id="nav4"
            onClick={()=>navFunction("nav4")}
            style={{
              color: "black",
              fontSize: "25px"
            }}
          >
            Contact
            <FaPhone />
          </Link>
        </div>
    </div>
  );
}
export default Navbar;