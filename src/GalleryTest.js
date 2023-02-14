// import { View, Text } from 'react-native'
import "./Gallery.scss";
import "./Book.scss";
import React, { useState, useEffect } from 'react';
import storage, {database} from './firebaseStorage';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import $ from 'jquery';
//import { ImageGroup } from 'react-fullscreen-image'

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCounter, setClickCounter] = useState(1);
  const [allImages, setImages] = useState([]);

  useEffect(() => {
    getFromFirebaseStorage();
  }, []);

  const toggleClass=(element, toggleClassName)=> {
    if(element.hasClass(toggleClassName)) {
      element.removeClass(toggleClassName);
      console.log(element);
    } else {
      element.addClass(toggleClassName);
      console.log(element);
    }
  }

  const movePage=(page)=> {
    if (page == currentPage) {
      ()=>setCurrentPage(currentPage+2);
      console.log("yes");
      toggleClass($( `#${page}` ), "left-side");
      toggleClass($( `#${page}` ).next(), "left-side");
    } else if (page == currentPage - 1) {
      ()=>setCurrentPage(currentPage-2);
      console.log("no");
      toggleClass($( `#${page}` ), "left-side");
      toggleClass($( `#${page}` ).prev(), "left-side");
    }
  }

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
    let number = pieceName.replace("https://firebasestorage.googleapis.com/v0/b/vernonsacademy.appspot.com/o/", '');
    return number;
  }

  const orderPages=()=>{
    $(".page").sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id);
    }).each(function () {
        var pages = $(this);
        pages.remove();
        $(pages).appendTo(".book");
        for(var i = 0; i < pages.length; i++)
        {
          var page = pages[i];
          if (i % 2 === 0)
          {
            page.style.zIndex = (pages.length - i);
          }
        }
    });
  }

  const onClick=(imgName)=>{
    if (clickCounter==1) {
      orderPages();
      ()=>setClickCounter(clickCounter+1);
    }
    console.log(clickCounter);
    movePage(imgName);
  }

  return (
    <div className="Gallery" id="gallery" style={{ zIndex: 0, backgroundColor: "black" }}>
      <div className="grid-gallery">
        {allImages.map((image) => {
            return (
              <img className="grid-item" src={image} id={getName(image)} />
            );
        })}
      </div>
      <div className="instruction">Flip the page</div>
      <div className="book">
        <div className="page cover-front" id="1" onClick={()=>movePage("1")}>
          <h1>Vernon's Academy Gallery</h1>
          <hr/>
          <div className="hat"><i className="fab fa-pied-piper-hat"></i></div>
        </div>
        {allImages.map((image) => {
            return (
              <div className="page text-page" id={getName(image)} onClick={()=>onClick(getName(image))}><img className="gallery-img" key={getName(image)} src={image}/></div>
            );
        })}
        {/* <div className="book">
          <div className="page cover-front" onClick={movePage(this, 1)}>
            <h1>Mrs. Dalloway</h1>
            <div className="hat"><i className="fab fa-pied-piper-hat"></i></div>
            <h2>Virginia Woolf</h2>
          </div>
          <div className="page cover-front" onClick={movePage(this, 2)}></div>
          <div className="grid-container">
            {allImages.map((image) => {
                return (
                  <div className="page cover-front" id="" onClick={movePage(this, 2)}><img className="grid-item" src={image} id={getName(image)} /></div>
                );
            })}
          </div>
        </div> */}
      </div>
    </div>
  )
}


 // const toggleClass=(e, toggleClassName)=> {
  //   if(e.classList.includes(toggleClassName)) {
  //     e.classList = e.className.replace(' ' + toggleClassName, '');
  //   } else {
  //     e.classList += ' ' + toggleClassName;
  //   }
  // }

  // const movePage=(e, page)=> {
  //   if (page == currentPage) {
  //     currentPage+=2;
  //     toggleClass(e, "left-side");
  //     toggleClass(e.nextElementSibling, "left-side");
      
  //   } else if (page = currentPage - 1) {
  //     currentPage-=2;
  //     toggleClass(e, "left-side");
  //     toggleClass(e.previousElementSibling, "left-side");
  //   }
  // }

export default Gallery;