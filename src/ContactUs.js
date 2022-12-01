import emailjs from 'emailjs-com';
import { useRef } from 'react';
import "./App.scss";
import React, { Component } from "react";
import Footer from "./Footer";
import ReCAPTCHA from "react-google-recaptcha";
import $ from 'jquery';

function ContactUs() {
  const form = useRef();
  const recaptchaRef = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_otj4n7k', 'template_3rpr0qt', form.current, 'uuxqeqPCq0d-qHJNZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const onChange = (value) => {
    console.log("Captcha value:",  $(".from_name").val());
    if( $(".from_name").val()==="" ||  $(".from_name").val()===null ||  $(".email").val()==="" ||  $(".email").val()===null || $(".message").val()==="" || $(".message").val()===null){
      recaptchaRef.current?.reset();
      $(".note").show(); 
    }else{
      $(".submit").show(); 
    }
  }

  const btnChange =(event)=>{
    $(".submit").attr("value","Sent");
    setTimeout(function () {
      recaptchaRef.current?.reset();
      $(".submit").attr("value","Send");
      $(".submit").hide(); 
      $(".from_name").val("");
      $(".email").val("");
      $(".message").val("");
    }, 20000);
  }

  const onExpire = (value) => {
    $(".submit").hide(); 
  }

  return (
    <div className="Contact" style={{backgroundColor:"black"}}>
      <div className='galleryBG'>
        <img className="bgImages" src='images/3.jpg'></img>
        <img className="bgImages" src='images/4.jpg'></img>
      </div>
      <div className="contactForeground" id="contact">
        <div className='contactContent'>
          <div className='contactDetails'>
            <h1 className='contactHeader'>CONTACT DETAILS</h1>
            <hr/>
            <p className='contactInfo'>Email address: vernonlouw7405@gmail.com </p>
            <p className='contactInfo'>Contact No: 0813836255</p>
            <h1 className='contactHeader'>LOCATION</h1>
            <hr/>
            <div className="contactMap"><iframe className="contactMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.808678220499!2d18.533367915728828!3d-33.868821226492436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc595a895c0849%3A0x35755d819a8224be!2sBosmansdam%20Primary%20School!5e0!3m2!1sen!2sza!4v1669707750072!5m2!1sen!2sza" width="500" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
          <hr/>
          <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <h1 className='contactHeader'>CONTACT FORM</h1>
            <hr/>
            <label className='contactDiv'>
                <div className='contactLabel'>ENTER FULL-NAME:</div>
                <input type="text" name="from_name" className='from_name input'/>
            </label>
            <label className='contactDiv'>
                <div className='contactLabel'>ENTER EMAIL ADDRESS:</div>
                <input type="text" name="email" className='email input'/>
            </label>
            <label className='contactDiv'>
                <div className='contactLabel'>LEAVE A MESSAGE:</div>
                <textarea name="message" className='message'></textarea>
            </label>
            <center>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdCepkbAAAAAIXFZlcSSOGgApA0M5AkArDX_3io"
                onChange={onChange}
                onExpired={onExpire}
              />
            </center>
            <center>
              <p className="note" style={{display:"none"}}>* please fill in all text fields</p>
              <input className="submit" type="submit" value="Send" onClick={(e)=>btnChange(e)} style={{display:"none"}}/>
            </center>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
