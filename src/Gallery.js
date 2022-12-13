// import { View, Text } from 'react-native'
import "./Gallery.css";
import React, { useState, useEffect } from 'react';
import storage, {database} from './firebaseStorage';
import { ref, listAll, getDownloadURL } from "firebase/storage";
//import { ImageGroup } from 'react-fullscreen-image'

function Gallery() {
  const [allImages, setImages] = useState([]);

  useEffect(() => {
    getFromFirebaseStorage();
  }, []);


  const getFromFirebaseStorage = () => {
    let storageRef = ref(storage, "");
    listAll(storageRef)
      .then(function(res) {
        res.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const getName=(image)=>{
    let start = image.indexOf("%");
    let end = image.indexOf(".jpg");
    let result = image.substring(start, end);
    let removedPrefix = result.replace("%2F", '');
    let pieceName = removedPrefix.replace(/%20/g, ' ');
    return pieceName.toUpperCase();
  }

  const turnRight=()=>{
      if(si>=1){
          si--;
      }
      else{
          si=right.length-1;
          function sttmot(i){
              setTimeout(function(){right[i].style.zIndex="auto";},300);
          }
          for(var i=0;i<right.length;i++){
              right[i].className="right";
              sttmot(i);
              z=1;
          }
      }
      right[si].classList.add("flip");
      z++;
      right[si].style.zIndex=z;
  }


  return (
    <div className="Gallery" id="gallery" style={{ zIndex: 0, backgroundColor: "black" }}>
      <div className="grid-container">
        {allImages.map((image) => {
            return (
              <img className="grid-item" src={image} id={getName(image)} />
            );
        })}
      </div>
      <div className="book-section">
       <p>Illustrations by <a href="http://artisticdesigning.com" target="_blank">Nidhanshu Sharma</a></p>
        <div className="container">
           <div className="right">
                <figure className="back" id="back-cover"></figure>
                <figure className="front" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/angry_man.jpg)"}}></figure>
            </div>
            <div className="right">
                <figure className="back" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/angry_man.jpg)"}}></figure>
                <figure className="front" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/sunset_landscape.jpg)"}}></figure>
            </div>
            <div className="right">
                <figure className="back" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/sunset_landscape.jpg)"}}></figure>
                <figure className="front" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/intex_speakers.jpg)"}}></figure>
            </div>
            <div className="right">
                <figure className="back" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/intex_speakers.jpg)"}}></figure>
                <figure className="front" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/doraemon_nobita_aged.jpg)"}}></figure>
            </div>
            <div className="right">
                <figure className="back" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/doraemon_nobita_aged.jpg)"}}></figure>
                <figure className="front" style={{backgroundImage: "url(http://artisticdesigning.com/Drawings/Photoshopped/narendra_modi_caricature.jpg)"}}></figure>
            </div>
            <div className="right">
                <figure className="back" style={{backgroundImage: "url('http://artisticdesigning.com/Drawings/Photoshopped/narendra_modi_caricature.jpg')"}}></figure>
                <figure className="front" id="cover">
                    <h1>Book Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, modi.</p>
                </figure>
            </div>
        </div>
        <button onclick={()=>turnLeft()}>Prev</button> <button onclick={()=>turnRight()}>Next</button>
        <br/>
    </div>
    </div>
  )
}

export default Gallery;