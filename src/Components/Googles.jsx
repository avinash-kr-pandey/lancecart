import './Googles.css';
import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as THREE from "three";
import sum from "../assets/images/Glasses-PNG-Pic.png"
import sum2 from "../assets/images/glasses.png"
import sum3 from "../assets/images/sunglass3.png"
import sum4 from "../assets/images/sunglasses.5de64473f35e956f53e7.png"
import sum5 from "../assets/images/sunglasses.png"
import FaceModal from '../pages/FaceMoal';

function Googles({isShowModal,setIsShowModal}) {
  const [selectedGlassesImage, setSelectedGlassesImage] = useState(sum5);
 

  const handleClick = (image) => {
    setSelectedGlassesImage(image);
  };


  

  
       
  return (
    <>
    {isShowModal && <FaceModal selectedGlassesImage={selectedGlassesImage} handleClick={handleClick} />}
      <section className='cardbox'>
        <div className="card p-[8]" onClick={() => handleClick("https://www.textures4photoshop.com/tex/thumbs/glasses-PNG-transparent-thumb23.png")}>
          <div className="imgbox">
            <img src={sum5} />
          </div>
          <div className="content">
            <p className='name'>Eye Glasses</p>
            <p className='price'>Starting Rs1200</p>
            <button className='viewall'>View All</button>
          </div> 
        </div>
        <div className="card" onClick={() => handleClick("https://static.vecteezy.com/system/resources/thumbnails/021/353/354/small/metal-frame-geek-glasses-flat-symbol-icon-illustration-png.png")}>
          <div className="imgbox">
            <img src={sum} />
          </div>
          <div className="content">
            <p className='name'>Sun Glasses</p>
            <p className='price'>Starting Rs1400</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick("https://pngimg.com/uploads/glasses/small/glasses_PNG54320.png")}>
          <div className="imgbox">
            <img src={sum2} />
          </div>
          <div className="content">
            <p className='name'>Computer Glasses</p>
            <p className='price'>Starting Rs1000</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick("https://www.freepnglogos.com/uploads/glasses-png/eye-eyeglasses-glass-glasses-look-shades-specs-31.png")}>
          <div className="imgbox">
            <img src={sum3} />
          </div>
          <div className="content">
            <p className='name'>Power Sunglasses</p>
            <p className='price'>Starting Rs1900</p>
            <button className='viewall'>View All</button>
          </div>
        </div>

        <div className="card" onClick={() => handleClick("https://static.vecteezy.com/system/resources/thumbnails/021/353/354/small/metal-frame-geek-glasses-flat-symbol-icon-illustration-png.png")}>
          <div className="imgbox">
            <img src={sum4} />
          </div>
          <div className="content">
            <p className='name'>Progressive Lenses</p>
            <p className='price'>Starting Rs1900</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Googles;
