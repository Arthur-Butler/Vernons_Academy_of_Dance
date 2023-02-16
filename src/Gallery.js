import "./GalleryTest.scss";
import "./Book.scss";
import React, { useState, useEffect } from "react";
import storage, { database } from "./firebaseStorage";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import $ from "jquery";
import Footer from "./Footer";
//import { ImageGroup } from 'react-fullscreen-image'

function Gallery() {
  const [allImages, setImages] = useState([]);

  useEffect(() => {
    getFromFirebaseStorage();
  }, []);

  const getFromFirebaseStorage = () => {
    let storageRef = ref(storage, "");
    listAll(storageRef)
      .then(function (res) {
        res.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getName = (image) => {
    let start = image.indexOf("%");
    let end = image.indexOf(".jpg");
    let result = image.substring(start, end);
    let removedPrefix = result.replace("%2F", "");
    let pieceName = removedPrefix.replace(/%20/g, " ");
    let number = pieceName.replace(
      "https://firebasestorage.googleapis.com/v0/b/vernonsacademy.appspot.com/o/",
      ""
    );
    return number;
  };

  // const orderPages=()=>{
  //   $(".page").sort(function (a, b) {
  //       return parseInt(a.id) - parseInt(b.id);
  //   }).each(function () {
  //       var pages = $(this);
  //       pages.remove();
  //       $(pages).appendTo(".book");
  //       for(var i = 0; i < pages.length; i++)
  //       {
  //         var page = pages[i];
  //         if (i % 2 === 0)
  //         {
  //           page.style.zIndex = (pages.length - i);
  //         }
  //       }
  //   });
  // }

  const pageInitialize = () => {
    var pages = $(".page");
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      page.id = i + 1;
      if (i % 2 === 0) {
        console.log(pages.length - i);
        page.style.zIndex = pages.length - i;
      }
    }
    $(".page:not([id])").remove();
  };

  const pageTurn = (nameVal) => {
    var pageID = $(`[name=${nameVal}]`).id;
    if (pageID % 2 === 0) {
      $(`[name=${nameVal}]`).removeClass("flipped");
      $(`[name=${nameVal}]`).prev().removeClass("flipped");
    } else {
      $(`[name=${nameVal}]`).addClass("flipped");
      $(`[name=${nameVal}]`).next().addClass("flipped");
    }
  };

  // var pages = document.getElementsByClassName('page');
  // for(var i = 0; i < pages.length; i++)
  //   {
  //     var page = pages[i];
  //     if (i % 2 === 0)
  //       {
  //         page.style.zIndex = (pages.length - i);
  //       }
  //   }

  // document.addEventListener('DOMContentLoaded', function(){
  //   for(var i = 0; i < pages.length; i++)
  //     {
  //       //Or var page = pages[i];
  //       pages[i].pageNum = i + 1;
  //       pages[i].onclick=function()
  //         {
  //           if (this.pageNum % 2 === 0)
  //             {
  //               this.classList.remove('flipped');
  //               this.previousElementSibling.classList.remove('flipped');
  //             }
  //           else
  //             {
  //               this.classList.add('flipped');
  //               this.nextElementSibling.classList.add('flipped');
  //             }
  //          }
  //       }
  // })
  const spinnerLoad = () => {
    setTimeout(function () {
      $(".spinnerBG").hide();
    }, 3000);
  };

  return (
    <div
      className="Gallery"
      id="gallery"
      style={{ zIndex: 0, backgroundColor: "black" }}
    >
      <div className="galleryBG">
        <img className="bgImages" src="images/2.jpg"></img>
        <img className="bgImages" src="images/3.jpg"></img>
      </div>
      <div className="galleryForeground">
        <div id="spinnerBG" className="spinnerBG" onLoad={spinnerLoad()}>
          <div id="floatingBarsG">
            <img src="images/loaders.png"></img>
          </div>
        </div>
        <div className="galleryPar">
          <p>
            At Vernon's Academy of Dance we are like a little family. Over the
            many years we have laughed together and cried together and all these
            important memories are recorded. Every family needs a photo album.
            Maybe someday you will become part of the family too!
          </p>
        </div>
        <div className="grid-gallery">
          {allImages.map((image) => {
            return (
              <img className="grid-item" src={image} id={getName(image)} />
            );
          })}
        </div>
        {/* <div className="book">
          <div className="pages" id="pages" onLoad={pageInitialize()}>
            {allImages.map((image) => {
              return (
                <div
                  className="page"
                  name={getName(image)}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => pageTurn(getName(image))}
                ></div>
              );
            })}
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Gallery;
