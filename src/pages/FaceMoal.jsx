import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";


const FaceModal = ({ selectedGlassesImage }) => {
  const webcamRef = useRef(null);
  const [faceMesh, setFaceMesh] = useState(null);
  const [glassesTransform, setGlassesTransform] = useState({ x: 0, y: 0, scale: 1, rotation: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const [initialDistance, setInitialDistance] = useState(null);

  const loadModel = async () => {
    try {
      const faceMeshModel = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });
      faceMeshModel.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });
      faceMeshModel.onResults(onResults);
      setFaceMesh(faceMeshModel);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading face mesh model:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (faceMesh && webcamRef.current) {
      const video = webcamRef.current.video;
      const camera = new Camera(video, {
        onFrame: async () => {
          await faceMesh.send({ image: video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, [faceMesh]);

  const onResults = (results) => {
    if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
      setIsFaceDetected(false);
      return;
    }

    const faceLandmarks = results.multiFaceLandmarks[0];

    if (!faceLandmarks || !Array.isArray(faceLandmarks) || faceLandmarks.length < 34) {
      setIsFaceDetected(false);
      return;
    }

    setIsFaceDetected(true);

    const leftEye = faceLandmarks[33];
    const rightEye = faceLandmarks[263];
    const leftEar = faceLandmarks[130];
    const rightEar = faceLandmarks[359];

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    const glassesWidth = (rightEar.x - leftEar.x) * videoWidth;

    const glassesPosition = {
      x: (1 - (leftEye.x + rightEye.x) / 2) * videoWidth,
      y: (leftEye.y + rightEye.y) / 2 * videoHeight,
    };
    const distance = Math.sqrt(Math.pow(rightEye.x - leftEye.x, 2) + Math.pow(rightEye.y - leftEye.y, 2));
    if (!initialDistance) {
      setInitialDistance(distance);
    }

    const scaleFactor = initialDistance ? initialDistance / distance : 1;

    const deltaX = rightEye.x - leftEye.x;
    const deltaY = rightEye.y - leftEye.y;
    const rotation = -Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setGlassesTransform({
      x: glassesPosition.x,
      y: glassesPosition.y,
      scale: glassesWidth / 220 * scaleFactor, 
      rotation: rotation,
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          width: "640px",
          height: "480px",
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
            <h3 style={{ paddingTop: "50px" }}>Loading...</h3>
          </div>
        )}

        {!isLoading && (
          <>
            <Webcam
              ref={webcamRef}
              autoPlay
              playsInline
              style={{ width: "640px", height: "480px", borderRadius: "30%" }}
              mirrored={true}
            />
          </>
        )}
        {isFaceDetected && glassesTransform && (
          <img
            src={selectedGlassesImage}
            alt="Selected Glasses"
            style={{
              position: "absolute",
              top: glassesTransform.y,
              left: glassesTransform.x,
              transform: `translate(-50%, -50%) scale(${glassesTransform.scale}) rotate(${glassesTransform.rotation}deg)`,
              transition: "transform 0.1s",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FaceModal;
