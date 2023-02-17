// import { View, Text } from 'react-native';
import React, { useEffect } from "react";
import { FaReadme } from "react-icons/fa";
import "./App.scss";
import Footer from "./Footer";
import $ from "jquery";

function AboutMe() {
  const scrollTop = () => {
    console.log("1");
    $(".aboutMe").scrollTop(0);
  };

  const spinnerLoad = () => {
    setTimeout(function () {
      $(".spinnerBG").hide();
      $(".scroll").addClass("loadedLeft");
    }, 3000);
  };

  const readMore =()=>{
    if ($(".readMoreBtn").text()=="Read more...") {
      $(".morePar").show();
      $(".readMoreBtn").text("Read less...")
    }else{
      $(".morePar").hide();
      $(".readMoreBtn").text("Read more...")
    }
  }

  return (
    <div className="aboutMe" id="aboutMe" onLoad={scrollTop}>
      <div className="galleryBG">
        <img className="bgImages" src="images/1.jpg"></img>
        <img className="bgImages" src="images/2.jpg"></img>
        <img className="bgImages" src="images/3.jpg"></img>
        <img className="bgImages" src="images/4.jpg"></img>
        <img className="bgImages" src="images/5.jpg"></img>
      </div>
      <div className="foreground">
        <div id="spinnerBG" className="spinnerBG" onLoad={spinnerLoad()}>
          <div id="floatingBarsG">
            <img src="images/loaders.png"></img>
          </div>
        </div>
        <center>
          <img src="images/profile.jpg" className="selfPortrait"></img>
          <hr className="aboutMeHR" />
          <div className="scroll">
            <img src="images/scrollBG.svg" className="scrollHandle"></img>
            <div className="aboutMePar">
              <p>
              My name is Vernon Louw, I am the principal and founder of Vernon's Academy of Dancing. I founded this school to share my love and passion for the art of Ballroom and Latin American dance with my community.
              In total, I have 30 years of dance teaching experience and am a certified teacher and adjudicator with qualifications from the United Kingdom Alliance I received in 1999. 
              I have competed competitively in Ballroom and Latin American dancing since the age of thirteen and
              won numerous awards.
              <span className="morePar">
              In my competitive classes multiple couples have progressed from beginners to the championship level and have won multiple awards along the way.  
              If competitive dancing is too daunting then there are always social classes for the more recreational dancers.
              You will come to discover that I am a dedicated teacher who will do everything in my power to make sure my students succeed and progress.
              Dancing is an art form that requires concentration, dedication, and attention to detail to master and perfect. You must be prepared to give it your all and as your instructor, I shall do my best to match your enthusiasm.
              </span>
              <button className="readMoreBtn" onClick={()=>readMore()}>Read more...</button>
              </p>
            </div>
            <img src="images/scrollBG.svg" className="scrollHandle"></img>
          </div>
          <FaReadme className="bookIcon" />
          <br />
          <h1 className="aboutMeHead">Certification</h1>
          <div className="cerification">
            <img className="certificates" src="images/20230217_122017.jpg"></img>
            <img className="certificates" src="images/20230217_122029.jpg"></img>
          </div>
          <Footer />
        </center>
      </div>
    </div>
  );
}

export default AboutMe;
