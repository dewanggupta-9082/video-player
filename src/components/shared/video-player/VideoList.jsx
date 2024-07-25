import React, { useState, useEffect } from "react";
import VideoPlayerCard from "./VideoPlayerCard";
import videoUrl from "/videos/video.mp4";
// import videoUrl from "../../../assets/video.mp4";
import "./VideoPlayerCard.css";

const videos = [
  { url: videoUrl, description: "Test Video 1" },
  { url: videoUrl, description: "Test Video 2" },
  { url: videoUrl, description: "Test Video 3" },
  { url: videoUrl, description: "Test Video 4" },
  { url: videoUrl, description: "Test Video 5" },
];

const videoLenghth = videos.length;

const VideoList = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoLenghth);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* useEffect(() => {
    console.log("Rendering video index:", currentVideoIndex);
  }, [currentVideoIndex]); */

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoPlayerCard
          key={index}
          videoUrl={video.url}
          //       description={video.description}
          play={index === currentVideoIndex}
        />
      ))}
    </div>
  );
};

export default VideoList;
