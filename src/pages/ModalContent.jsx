// ModalContent.js
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const ModalContent = ({ onImageClick }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    await detectFaceAndAddGlasses(imageSrc);
    onImageClick(imageSrc); // Notify parent component about the clicked image
  };

  const detectFaceAndAddGlasses = async (imageSrc) => {
    // Load face detection models
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

    // Initialize face detection
    const faceDetectionOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 512 });
    const faceDetectionResults = await faceapi.detectAllFaces(imageSrc, faceDetectionOptions)
                                              .withFaceLandmarks();

    // Create a canvas to draw on
    const canvas = document.createElement('canvas');
    const image = new Image();
    image.src = imageSrc;
    image.onload = async () => {
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);

      // Draw text "HELLO" on the upper side of the image
      context.font = '30px Arial';
      context.fillStyle = 'white';
      context.fillText('HELLO', 20, 40); 

      for (const result of faceDetectionResults) {
        const { landmarks } = result;
        const glasses = new Image();
        glasses.src = 'https://tse4.mm.bing.net/th?id=OIP.xVulqZe6QyJpyxxMGWgB6gHaCr&pid=Api&P=0&h=220';

        // Calculate position and size of glasses
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();
        const glassesWidth = rightEye.x - leftEye.x;
        const glassesHeight = glassesWidth * (glasses.height / glasses.width);

        // Draw glasses on the canvas
        glasses.onload = () => {
          context.drawImage(glasses, leftEye.x, leftEye.y - glassesHeight / 2, glassesWidth, glassesHeight);
        };
      }

      // Convert canvas data to image source
      const newImageSrc = canvas.toDataURL();
      setCapturedImage(newImageSrc);
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '200px', height: '300px' }}>
        <Webcam ref={webcamRef} style={{ width: '200px', height: '300px' }} />
      </div>
      <button onClick={captureImage} style={{ marginTop: '10px' }}>Capture Image</button>
      {capturedImage && <img src={capturedImage} alt="Captured" style={{ marginTop: '10px' }} />}
    </div>
  );
};

export default ModalContent;
