import React, { useState } from 'react';
import ModalContent from '../../pages/ModalContent';
import Googles from '../Googles';


function ParentComponent() {
  const [clickedImage, setClickedImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setClickedImage(imageSrc);
  };

  const closeModal = () => {
    if (clickedImage) {
      setCapturedImage(clickedImage); // Store the clicked image
      setClickedImage(null);
    }
  };

  return (
    <div>
      <ModalContent onImageClick={handleImageClick} onCloseModal={closeModal} />
      <Googles clickedImage={capturedImage} />
    </div>
  );
}

export default ParentComponent;
