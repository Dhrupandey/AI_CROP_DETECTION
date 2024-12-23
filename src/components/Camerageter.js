import React, { useRef, useState, useEffect } from 'react';

const PlantDiseaseDetection = () => {
  const diseases = [
    { plant: "Apple", name: "Apple Scab", cure: "Apply fungicides like captan or myclobutanil." },
    { plant: "Apple", name: "Apple Black Rot", cure: "Prune infected areas and apply fungicides." },
    { plant: "Apple", name: "Cedar Apple Rust", cure: "Remove nearby juniper hosts and apply fungicides." },
    { plant: "Cherry", name: "Cherry Powdery Mildew", cure: "Use sulfur-based fungicides and ensure good air circulation." },
    { plant: "Corn", name: "Cercospora Leaf Spot (Gray Leaf Spot)", cure: "Rotate crops and apply resistant hybrids." },
    { plant: "Corn", name: "Common Rust", cure: "Use resistant varieties and apply fungicides if needed." },
    { plant: "Corn", name: "Northern Leaf Blight", cure: "Plant resistant hybrids and use fungicides." },
    { plant: "Grape", name: "Black Rot", cure: "Prune and remove infected parts, apply fungicides." },
    { plant: "Grape", name: "Black Measles", cure: "Implement good cultural practices and use fungicides." },
    { plant: "Grape", name: "Leaf Blight", cure: "Apply protective fungicides and practice proper vineyard hygiene." },
    { plant: "Orange", name: "Citrus Greening", cure: "Use disease-free trees and manage psyllid populations." },
    { plant: "Orange", name: "Orange with Citrus Greening", cure: "Use disease-free trees and manage psyllid populations." },
    { plant: "Peach", name: "Bacterial Spot", cure: "Apply copper-based bactericides and select resistant varieties." },
    { plant: "Pepper Bell", name: "Bacterial Spot", cure: "Use resistant varieties and copper-based bactericides." },
    { plant: "Potato", name: "Early Blight", cure: "Apply fungicides and practice crop rotation." },
    { plant: "Potato", name: "Late Blight", cure: "Use resistant varieties and fungicides." },
    { plant: "Squash", name: "Powdery Mildew", cure: "Apply sulfur-based fungicides and ensure proper spacing." },
    { plant: "Strawberry", name: "Leaf Scorch", cure: "Remove infected leaves and apply fungicides." },
    { plant: "Tomato", name: "Bell pepper with Bacterial Spot", cure: "Use copper-based bactericides and resistant varieties." },
    { plant: "Tomato", name: "Early Blight", cure: "Apply fungicides and use resistant varieties." },
    { plant: "Tomato", name: "Tomato with Late Blight", cure: "Use resistant varieties and fungicides." },
    { plant: "Tomato", name: "Leaf Mold", cure: "Improve ventilation and apply fungicides." },
    { plant: "Tomato", name: "Septoria Leaf Spot", cure: "Remove affected leaves and use fungicides." },
    { plant: "Tomato", name: "Spider Mites (Two-Spotted Spider Mite)", cure: "Use miticides or insecticidal soap." },
    { plant: "Tomato", name: "Target Spot", cure: "Apply fungicides and improve air circulation." },
    { plant: "Tomato", name: "Mosaic Virus", cure: "Remove infected plants and sanitize tools." },
    { plant: "Tomato", name: "Yellow Leaf Curl Virus", cure: "Use resistant varieties and control whiteflies." }
  ];

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState('');
  const [result1, setResult1] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
        alert("Could not access the camera. Please allow camera permissions.");
      });
  }, []);

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 320, 240);
  };

  const uploadImage = () => {
    setLoading(true);
    canvasRef.current.toBlob((blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'plant_image.jpg');

      fetch('http://10.12.37.12:8000/predict/', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          if (data.prediction && data.prediction.length > 0) {
            const { label, score } = data.prediction[0];
            setResult(`Prediction: ${label} | Accuracy: ${score}`);
            const diseaseInfo = diseases.find(disease => disease.name === label);
            if (diseaseInfo) {
              console.log(`Disease: ${diseaseInfo.name}, Cure: ${diseaseInfo.cure}`);
              setResult1(diseaseInfo.cure);
            } else {
              console.log("Disease not found in the list.");
              setResult1("");
            }
          } else {
            setResult("Prediction is not defined");
            setResult1("");
          }
        })
        .catch(error => {
          setLoading(false);
          console.error("Error uploading the image or in prediction: ", error);
          setResult("Please retake the picture");
          setResult1("");
        });
    }, 'image/jpeg');
  };

  return (
    <div style={{ height: "640px", width: "100%", background: "linear-gradient(360deg,#208420,white)" }}>
      <div style={{ textAlign: 'center', marginTop: '100px', marginLeft: '280px', borderRadius: "8px", paddingTop: "20px", width: "800px", backgroundColor: "#E4F1E8", border: "2px solid black" }}>
        <h1>Plant Disease Detection</h1>
        <video ref={videoRef} width="320" height="240" autoPlay style={{ marginTop: '20px', border: "2px solid green", marginRight: "5px" }}></video>
        <canvas ref={canvasRef} width="320" height="240" style={{ marginTop: '20px', border: "2px solid green", marginLeft: "5px" }}></canvas><br />
        <button onClick={captureImage} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', border: "none", backgroundColor: "#C6F5B5", borderRadius: "8px" }}>Capture Image</button>
        <button onClick={uploadImage} style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', border: "none", backgroundColor: "#C6F5B5", borderRadius: "8px" }}>Upload and Detect</button>
        {loading && <div id="loading" style={{ marginTop: '20px' }}>Processing...</div>}
      </div>
      <div style={{ height: "40px", width: "600px", backgroundColor: "#E4F1E8", borderRadius: "20px", border: "2px solid black", marginTop: "10px", marginLeft: "380px", paddingTop: "6px", textAlign: "center" }}>
        <div id="result" style={{ fontWeight: 'bold' }}>{result}</div>
        <div style={{height:"30px",marginTop:"40px",backgroundColor:"white",opacity:"0.8",borderRadius:"8px",border:"2px solid black",fontWeight:"600"}}>Cure:  {result1}</div>
      </div>
    </div>
  );
};

export default PlantDiseaseDetection;
