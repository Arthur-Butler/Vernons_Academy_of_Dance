import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom'
//import { Component } from "react";
import "./Landing.css";
import { useState } from "react";
import $ from 'jquery';

function Landing(props) {
  useEffect(() => {
    const handleClick = event => {
      $(".App-header").slideUp(500);
      $(".headComp").css('display','flex');
    };

    var element=document.getElementById("openBtn");
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  const [hideLogin, setHideLogin] = useState(true);

  const Display = () => {
    return (
      <div>
        <header className="App-header" style={{backgroundImage:"url('images/1.jpg')"}}>
          <div className='landing'>
              <div className='head'>
                <img className="logo" src="images/logo.png"></img>
                <div className="heading"><h1 className='header'>Vernon's Academy of Dance</h1><h3 className='subHeader'>BALLROOM AND LATIN AMERICAN DANCING</h3></div>
              </div>
              <button id='openBtn' className='btn-3'><span>open</span></button>  
          </div>
        </header>
      </div>
    );
  };

  const handleLogin = (event) => {
    setHideLogin(false);
  };

  return <div>{hideLogin ? <Display className="loginDisplay" /> : null}</div>;
}

export default Landing;
