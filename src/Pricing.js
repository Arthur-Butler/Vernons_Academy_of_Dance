// import { View, Text } from 'react-native';
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaReadme } from "react-icons/fa";
import "./App.scss";
import Footer from "./Footer";
import ReCAPTCHA from "react-google-recaptcha";
import $ from "jquery";

function Pricing() {
  const form = useRef();
  const recaptchaRef = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mc9y79r",
        "template_fesp2je",
        form.current,
        "uuxqeqPCq0d-qHJNZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onChange = (value) => {
    console.log("Captcha value:", $(".from_name").val());
    if (
      $(".from_name").val() === "" ||
      $(".from_name").val() === null ||
      $(".email").val() === "" ||
      $(".email").val() === null ||
      $(".message").val() === "" ||
      $(".message").val() === null
    ) {
      recaptchaRef.current?.reset();
      $(".note").show();
    } else {
      $(".submit").show();
    }
  };

  const btnChange = (event) => {
    $(".submit").attr("value", "Submitted");
    setTimeout(function () {
      recaptchaRef.current?.reset();
      $(".submit").attr("value", "Submit");
      $(".submit").hide();
      $(".from_name").val("");
      $(".from_partner_name").val("");
      $(".phone").val("");
      $(".email").val("");
    }, 10000);
  };

  const onExpire = (value) => {
    $(".submit").hide();
  };

  const openForm = (value) => {
    $(".bookingFormBG").css("display", "flex");
    $(".lesson_type").val(value);
  };

  const closeForm = (value) => {
    $(".bookingFormBG").css("display", "none");
  };

  const closeFormBG = (event) => {
    $(".bookingFormBG").hide();
  };

  const spinnerLoad = () => {
    setTimeout(function () {
      $(".spinnerBG").hide();
    }, 3000);
  };

  return (
    <div className="pricing" id="pricing">
      <div className="galleryBG">
        <img className="bgImages" src="images/4.jpg"></img>
        <img className="bgImages" src="images/5.jpg"></img>
      </div>
      <div className="pricingForeground">
        <div id="spinnerBG" className="spinnerBG" onLoad={spinnerLoad()}>
          <div id="floatingBarsG">
            <img src="images/loaders.png"></img>
          </div>
        </div>
        <p className="bookingDescription">
          Disclaimer: Due to the nature and size of my business, lesson prices
          will not be given on the website. I will reach out to you with prices
          once you have booked. If you have any questions please{" "}
          <a className="links" href="/booking">
            contact me
          </a>
          . The purpose of this page is simply to book lessons so I may booking
          you.
        </p>
        <hr className="aboutMeHR" />
        <div className="lessonInfo">
          <div className="lessons" id="socialLessons">
            <h2 className="lessonHead">Social Lessons</h2>
            <p>
              You will be taught amongst a welcoming and encouraging group of
              other couples. This experience provides a far more relaxed
              non-serious social environment. Recommended for couples who are
              not interested in competing and want a group experience.
            </p>
            <button
              className="lessonBtn"
              onClick={() => openForm("Social Lessons")}
            >
              BOOK NOW
            </button>
          </div>
          <div className="lessons" id="groupLessons">
            <h2 className="lessonHead">Group Lessons</h2>
            <p>
              You will be practice alongside other couples. This experience is
              for couples that wish to train for competitions in a group
              environment. Recommended for competitive couples who wish to
              practice in a group setting.
            </p>
            <button
              className="lessonBtn"
              onClick={() => openForm("Group Lessons")}
            >
              BOOK NOW
            </button>
          </div>
          <div className="lessons" id="privateLessons">
            <h2 className="lessonHead">Private Lessons</h2>
            <p>
              This is a one on one lesson format for couples who want a more
              private session.{" "}
            </p>
            <button
              className="lessonBtn"
              onClick={() => openForm("Private Lessons")}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="bookingFormBG">
          <form ref={form} onSubmit={sendEmail} className="bookingForm">
            <div className="bookingHeader">
              <h1>BOOKING FORM</h1>
              <div onClick={() => closeForm()} className="bookingExitBtn">
                X
              </div>
            </div>
            <center>
              <hr />
            </center>
            <label className="bookingDiv">
              <div className="bookingLabel">ENTER FULL-NAME:</div>
              <input type="text" name="from_name" className="from_name input" />
            </label>
            <label className="bookingDiv">
              <div className="bookingLabel">
                ENTER PARTNER FULL-NAME (NOT REQUIRED):
              </div>
              <input
                type="text"
                name="from_partner_name"
                className="from_partner_name input"
              />
            </label>
            <label className="bookingDiv">
              <div className="bookingLabel">ENTER CONTACT NUMBER:</div>
              <input type="text" name="phone" className="phone input" />
            </label>
            <label className="bookingDiv">
              <div className="bookingLabel">ENTER EMAIL ADDRESS:</div>
              <input type="text" name="email" className="email input" />
            </label>
            <label className="bookingDiv">
              <div className="bookingLabel">DESIRED LESSON TYPE:</div>
              <input
                type="text"
                name="lesson_type"
                className="lesson_type input"
                disabled
              />
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
              <p className="note" style={{ display: "none" }}>
                * please fill in all text fields
              </p>
              <input
                className="submit"
                type="submit"
                value="SUBMIT"
                onClick={(e) => btnChange(e)}
                style={{ display: "none" }}
              />
            </center>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Pricing;
