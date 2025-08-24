import React, { useRef, useEffect, useState } from "react";
import { sendFrame } from "../api";

import axios from "axios";

function Camera() {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");

  // Start webcam
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });

    const interval = setInterval(captureAndSend, 2000); // every 2 sec
    return () => clearInterval(interval);
  }, []);

  const captureAndSend = async () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

    const imageBase64 = canvas.toDataURL("image/jpeg").split(",")[1]; // remove prefix

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/emotion/detect", {
        image_base64: imageBase64,
      });
      setEmotion(res.data.emotion);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Camera />
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Real-Time Emotion Detection</h1>
      <video ref={videoRef} autoPlay playsInline style={{ width: "60%", borderRadius: "10px" }} />
      <h2 style={{ marginTop: "20px" }}>Detected Emotion: {emotion}</h2>
    </div>
    
    </>
  );
}




const CameraFeed = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    // get webcam stream
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  }, []);

  const captureAndSend = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");

      const res = await sendFrame(formData);
      setEmotion(res?.emotion || "Unknown");
    }, "image/jpeg");
  };

  // Run detection every 2s
  useEffect(() => {
    const interval = setInterval(captureAndSend, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <h2>Detected Emotion: {emotion}</h2>
    </div>
  );
};

export default CameraFeed;
