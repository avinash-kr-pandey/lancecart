import './Googles.css';
import React, { useState } from "react";
import sum from "../assets/images/glass-1.png";
import sum2 from "../assets/images/glass-2.png";
import sum3 from "../assets/images/glass-3.png";
import sum4 from "../assets/images/glass-4.png";
import sum5 from "../assets/images/Glasses--5.png";
import sum6 from "../assets/images/sunglass-3.png"
import sum7 from "../assets/images/glassIMG-7.png"
import FaceModal from '../pages/FaceMoal';

function Googles({ isShowModal, setIsShowModal }) {
  const [selectedGlassesImage, setSelectedGlassesImage] = useState(sum7);

  const handleClick = (image) => {
    setSelectedGlassesImage(image);
  };

  return (
    <>
      {isShowModal && <FaceModal selectedGlassesImage={selectedGlassesImage} handleClick={handleClick} />}
      <section className='cardbox' style={{paddingTop:'10vh'}}>
        <div className="card p-[8]" onClick={() => handleClick(sum6)} style={{ boxShadow: 'none' }}>
          <div className="imgbox">
            <img className='boximg' src={sum6} alt="Eye Glasses" style={{ boxShadow: 'none', border: 'none', width: '100%', height: 'auto' }} />
          </div>
          <div className="content">
            <p className='name'>Eye Glasses</p>
            <p className='price'>Starting Rs1200</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick(sum)}>
          <div className="imgbox ">
            <img className='boximg' src={sum} alt="Sun Glasses" style={{ boxShadow: 'none', border: 'none', width: '100%', height: 'auto' }} />
          </div>
          <div className="content">
            <p className='name'>Sun Glasses</p>
            <p className='price'>Starting Rs1400</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick(sum2)}>
          <div className="imgbox">
            <img className='boximg' src={sum2} alt="Computer Glasses" style={{ boxShadow: 'none', border: 'none', width: '100%', height: 'auto' }} />
          </div>
          <div className="content">
            <p className='name'>Computer Glasses</p>
            <p className='price'>Starting Rs1000</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick(sum3)}>
          <div className="imgbox">
            <img className='boximg' src={sum3} alt="Power Sunglasses" style={{ boxShadow: 'none', border: 'none', width: '100%', height: 'auto' }} />
          </div>
          <div className="content">
            <p className='name'>Power Sunglasses</p>
            <p className='price'>Starting Rs1900</p>
            <button className='viewall'>View All</button>
          </div>
        </div>
        <div className="card" onClick={() => handleClick(sum4)}>
          <div className="imgbox">
            <img className='boximg' src={sum4} alt="Progressive Lenses" style={{ boxShadow: 'none', border: 'none', width: '100%', height: 'auto' }} />
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
