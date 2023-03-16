import React, { useState } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useNavigate } from 'react-router-dom';
import "../../index.css";




const PrendrePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePrendrePhoto = (dataUri, event) => {
    setPhoto(dataUri);
    navigate('/ajouter-gisement?photo=' + encodeURIComponent(dataUri));
  };
  

  return (
    
  
        <div style={{height: "calc(100vh - 3rem)"}} className=" flex items-center justify-center overflow-hidden pb-10">
          <div className="w-full h-screen">
          <Camera 
                onTakePhoto={handlePrendrePhoto} 
                idealFacingMode={FACING_MODES.USER} 
                isMaxResolution={true}
                isImageMirror={true}
                isSilentMode={false}
                isDisplayStartCameraError={false}
                isFullscreen={true}
              />
          </div>
        </div>
    

  );
};

export default PrendrePhoto;
