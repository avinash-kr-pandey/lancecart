import React, { useEffect, useRef, useState } from "react";
import * as blazeface from "@tensorflow-models/blazeface";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

const FaceModal = ({ selectedGlassesImage, handleClick }) => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const canvasRef = useRef(null);
  const [glassesMesh, setGlassesMesh] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewCards, setShowNewCards] = useState(false);

  const loadModel = async () => {
    try {
      await tf.setBackend("webgl");
      const loadedModel = await blazeface.load();
      setModel(loadedModel);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading model:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    const detectAndPositionGlasses = async () => {
      if (!webcamRef.current || !model) return;

      try {
        const video = webcamRef.current.video;
        if (video.readyState !== 4) return;

        const predictions = await model.estimateFaces(video);
        if (predictions.length > 0) {
          const face = predictions[0].topLeft;
          const width = predictions[0].bottomRight[0] - face[0];
          const height = predictions[0].bottomRight[1] - face[1];
          const faceCenter = {
            x: (face[0] + predictions[0].bottomRight[1]) / 2,
            y: (face[1] + predictions[0].bottomRight[0]) / 2,
          };

          const glassesWidth = 170;
          const glassesHeight = 1000;

          const glassesOffset = {
            x: glassesWidth / 2,
            y: glassesHeight / 4,
          };

          const glassesPosition = {
            x: faceCenter.x - glassesOffset.x,
            y: faceCenter.y - glassesOffset.y,
          };

          const scaleMultiplierX = width / glassesWidth;
          const scaleMultiplierY = height / glassesHeight;
          const scaleMultiplier = Math.min(scaleMultiplierX, scaleMultiplierY);

          setGlassesMesh({
            position: glassesPosition,
            scale: scaleMultiplier,
          });
        }
      } catch (error) {
        console.error("Error detecting and positioning glasses:", error);
      }
    };

    const intervalId = setInterval(detectAndPositionGlasses, 120);
    return () => clearInterval(intervalId);
  }, [model]);

  const openNewCards = () => {
    setShowNewCards(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          margin: "0 37%",
          width: "50%",
          height: "50%",
        }}
      >
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <h3 style={{paddingTop:"50px"}}>Loading...</h3>
          </div>
        )}

        {!isLoading && (
          <>
            <Webcam
              ref={webcamRef}
              autoPlay
              playsInline
              style={{ width: "500px", height: "500px", borderRadius: "30%" }}
              mirrored={true}
            />
             <canvas
              ref={canvasRef}
              style={{
                width: "800px",
                height: "800px",
                position: "absolute",
                top: 0,
                left: 0,
              }} 
            />
          </>
        )}
        {glassesMesh && (
          <img
            src={selectedGlassesImage}
            alt="Selected Glasses"
            style={{
              position: "absolute",
              top: glassesMesh.position.y + 180,
              left: glassesMesh.position.x + 20,
              transform: `translate(-50%, -50%) scale(${glassesMesh.scale})`,
            }}
          />
        )}
        <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}>
         

        </div>
      </div>
    </div>
  );
};

export default FaceModal;
