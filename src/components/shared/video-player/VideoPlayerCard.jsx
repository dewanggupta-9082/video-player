import React, { useState } from "react";

import "./VideoPlayerCard.css";

//const VideoPlayer = ({ videoUrl, description }) => {
// const [isFullScreen, setIsFullScreen] = useState(false);

// const toggleFullScreen = () => {
//   setIsFullScreen(!isFullScreen);
// };

const VideoPlayerCard = ({ videoUrl, description, play }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [play]);

  /* return (
    <div
      className={isFullScreen ? "video-card fullscreen" : "video-card"}
      onClick={toggleFullScreen}
    >
      <ReactPlayer
        url={videoUrl}
        playing={isFullScreen}
        controls={true}
        width="100%"
        height={isFullScreen ? "100%" : "200px"}
      />
      <div className="description-container">
        <p className="description">{description}</p>
      </div>
    </div>
  );
}; */

  return (
    <div className="video-card">
      <video ref={videoRef} src={videoUrl} width="100%" controls>
        Your browser
      </video>
      <div className="description-container">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayerCard;
