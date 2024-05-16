import React, { useState } from 'react'
import './Navbar.css'
import { MdAddIcCall } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import FaceModal from '../pages/FaceMoal';


function Navbar({isShowModal,setIsShowModal}) {
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsShowModal((prev)=>!prev)
  };
  return (
    <>
    <nav className='fnav'>
      <div className='logo'>  
       <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />  
      </div>
      <div className='call'>
      <p><MdAddIcCall />  1800-202-4444</p>
      </div>   
      <div className='input'>
        <a><input type="text" placeholder='What are you lokking for?'/></a>
      </div> 
      <ul className='navbar-content'>
      <li>Track Order</li>
      <button>Sign In & Singn Up</button>
      <li><FaRegHeart/>  Wishlist</li>
      <li><FaCartArrowDown />  Cart</li>
      </ul>
    </nav>
    <nav className='snav'>
      <div>
      <ul className='content-nav'>
      <li>EYEGLASSES</li>
        <li>COMPUTER GLASSES</li>
        <li>KIDS GLASSES</li>
        <li>SUNGLASSES</li>
        <li>HOME EYE-TEST</li>
        <li>STORE LOCATION</li>
      </ul>
      </div>
      <img
          src='https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png'
          alt=''
          onClick={toggleModal}
        />
        <img src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="" />
        <img src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="" />
        
    </nav>
    {/* {isModalOpen && <FaceModal toggleModal={toggleModal} />} */}

    </>
  )
}

export default Navbar
