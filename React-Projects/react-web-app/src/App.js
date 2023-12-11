// src/App.js
import React, { useState } from 'react';
import VideoUploader from './Components/VideoUploader';
import VideoPlayer from './Components/VideoPlayer';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleVideoUpload = (file) => {
    const videoObjectURL = URL.createObjectURL(file);
    setVideoUrl(videoObjectURL);
  };

  const handleVideoStart = (currentTime) => {
    setStartTime(currentTime);
  };

  const handleVideoEnd = (currentTime) => {
    setEndTime(currentTime);
  };

  return (
    <center>
      <div>
      <VideoUploader onVideoUpload={handleVideoUpload} />
      {videoUrl && (
        <VideoPlayer
          videoUrl={videoUrl}
          onStart={handleVideoStart}
          onEnd={handleVideoEnd}
        />
      )}
      <p>Start Time: {startTime.toFixed(2)} seconds</p>
      <p>End Time: {endTime.toFixed(2)} seconds</p>
    </div>
    </center>
  );
};

export default App;


