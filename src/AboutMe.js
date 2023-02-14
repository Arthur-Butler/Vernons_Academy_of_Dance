// import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { FaReadme } from "react-icons/fa";
import "./App.scss";
import Footer from "./Footer";
import $ from 'jquery';

function AboutMe() {
 

  const scrollTop = () =>{
    console.log("1");
    $(".aboutMe").scrollTop(0);
  }

  const spinnerLoad =()=>{
    setTimeout(function () {
      $(".spinnerBG").hide(); 
    }, 3000);
  }

  return (
    <div className="aboutMe" id="aboutMe" onLoad={scrollTop}>
        <div className='galleryBG'>
            <img className="bgImages" src='images/1.jpg'></img>
            <img className="bgImages" src='images/2.jpg'></img>
            <img className="bgImages" src='images/3.jpg'></img>
            <img className="bgImages" src='images/4.jpg'></img>
            <img className="bgImages" src='images/5.jpg'></img>
        </div>
        <div className='foreground'>
            <div id="spinnerBG" className='spinnerBG'  onLoad={spinnerLoad()}>
              <div id="floatingBarsG">
                <img src="images/loaders.png"></img>
              </div>
            </div>
            <center>
              <img src='images/profile.jpg' className='selfPortrait'></img>
              <hr className='aboutMeHR'/>
              <div className="aboutMePar">
                <p>
                  Artist, author and editor Ken is a Natal-born, Transvaal-raised Cape immigrant. Trained as an
                  architect and working in design, construction and marketing, in later years he was able to indulge in
                  his love of books by moving into the world of publishing. After collaborating on several projects with
                  renowned book illustrator and artist, <a className="links" href="https://za.linkedin.com/in/izak-vollgraaff-923a251b">Izak Vollgraaff</a>
                  , Ken was persuaded to join the <a className="links" href="https://www.instagram.com/izakvollgraaff/">Izak Vollgraaff Art Studio</a>.
                  While living in Belgium, his translation from Flemish into English of Colour: a timeless booklet about
                  mixing colours, by Antwerp artist and art teacher, Lieve Peeters, further inspired him, as did the
                  artworks created by her and her partner, artist Bart Laerenbergh.
                  Apart from South Africa, Ken’s paintings have found homes in the United States, the United Kingdom
                  and the Netherlands.
                  A member of SASA, Ken has exhibited at the Kirstenbosch, Welgemeend and Rust-en-Vrede galleries,
                  and at the <a className="links" href="https://www.capegallery.co.za/">Cape Gallery</a>.
                </p>
                <p>
                  While living in Belgium, his translation from Flemish into English of Colour: a timeless booklet about
                  mixing colours, by Antwerp artist and art teacher, Lieve Peeters, further inspired him, as did the
                  artworks created by her and her partner, artist Bart Laerenbergh.
                  Apart from South Africa, Ken’s paintings have found homes in the United States, the United Kingdom
                  and the Netherlands.
                  A member of SASA, Ken has exhibited at the Kirstenbosch, Welgemeend and Rust-en-Vrede galleries,
                  and at the Cape Gallery.
                </p>
              </div>
              <FaReadme className="bookIcon" />
              <br/>
              <Footer />
            </center>
        </div>
    </div>
   
  )
}

export default AboutMe;