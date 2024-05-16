import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Googles from './Components/Googles'
import Crousel from './Components/Crousel';
import Images from './Components/Images';
import CardCarusel from './Components/CardCarusel';
import Permium from './Components/Permium';
import AsSeen from './Components/AsSeen';
import Shark from './Components/Shark';
import Karan from './Components/Karan';
import SunGlases from './Components/SunGlases';
import Ojos from './Components/Ojos';
import Color from './Components/Color';
import Perfect from './Components/Perfect';
import Subscribe from './Components/Subscribe';
import More from './Components/More';
import Way from './Components/Way';
import YourWay from './Components/YourWay';
import Brands from './Components/Brands';
import EyeGlases from './Components/EyeGlases';
import SunG from './Components/SunG';
import John from './Components/John';
import Hooper from './Components/Hooper';
import BlueLenses from './Components/BlueLenses';
import AquaLenses from './Components/AquaLenses';
import ContactLenses from './Components/ContactLenses';
import Customers from './Components/Customers';
import Footer from './Components/Footer';
import SigninAndSignup from './Components/SigninAndSignup';


function App() {

  const [isShowModal,setIsShowModal]=useState(false)

  return (
    <div>
      <Navbar isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      <Googles isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      <Crousel/>
      <Images/>
      <CardCarusel/>
      <Permium/>
      <AsSeen/>
      <Shark/>
      <Karan/>
      <SunGlases/>
      <Ojos/>
      <Color/>
      <Perfect/>
      <Subscribe/>
      <More/>
      <Way/>
      <YourWay/>
      <Brands/>
      <EyeGlases/>
      <SunG/>
      <John/>
      <Hooper/>
      <BlueLenses/>
      <AquaLenses/>
      <ContactLenses/>
      <Customers/>
      <Footer/>
     <SigninAndSignup/>
    </div>
    
  )
}

export default App

