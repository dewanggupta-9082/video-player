import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './index.css'; 


const VideoPlayer = ({ videoUrl, description }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={isFullScreen ? 'video-card fullscreen' : 'video-card'} onClick={toggleFullScreen}>
      <ReactPlayer url={videoUrl} playing={isFullScreen}  controls={true} width="100%" height={isFullScreen ? '100%' : '200px'}  />
      <div className="description-container">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;