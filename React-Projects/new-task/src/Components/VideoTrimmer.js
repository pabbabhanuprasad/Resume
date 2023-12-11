import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";

export const VideoTrimmer = () => {
  const videoRef = useRef(null);
  const startHandleRef = useRef(null);
  const endHandleRef = useRef(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        setVideoDuration(videoRef.current.duration);
        setEndTime(videoRef.current.duration);
      });
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && !isPlaying) {
      const currentTime = videoRef.current.currentTime;
      if (currentTime < startTime || currentTime > endTime) {
        videoRef.current.currentTime = startTime;
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.pause();
    }
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();
    }
  };

  const handleDrag = (e, ui, handle) => {
    if (!videoRef.current) return;

    const duration = videoRef.current.duration;
    const videoWidth = e.target.clientWidth;
    const newPosition = ui.x / videoWidth;

    if (handle === 'start') {
      const newStartTime = newPosition * duration;
      setStartTime(newStartTime);
    } else if (handle === 'end') {
      const newEndTime = newPosition * duration;
      setEndTime(newEndTime);
    }

    if (videoRef.current.paused) {
      videoRef.current.currentTime = startTime;
      setIsPlaying(true);
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
        setIsPlaying(false);
      });
    }
  };

  // const handleDragStop = () => {
  //   setIsPlaying(false);
  //   if (videoRef.current) {
  //     videoRef.current.currentTime = startTime;
  //     videoRef.current.pause();
  //   }
  // };
  const handleDragStop = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // const handlePlayTrimmedVideo = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime = startTime;
  //     setIsPlaying(true);
  //     videoRef.current.play().catch((error) => {
  //       console.error('Video playback failed:', error);
  //       setIsPlaying(false);
  //     });
  //   }
  // };

  const handlePlayTrimmedVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play().catch((error) => {
        console.error('Video playback failed:', error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const videoURL = URL.createObjectURL(file);
  //     videoRef.current.src = videoURL;
  //     setStartTime(0);
  //     setEndTime(0);
  //   }
  // };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const videoURL = URL.createObjectURL(file);
        videoRef.current.src = videoURL;
        setStartTime(0);
        setEndTime(0);
      } catch (error) {
        console.error('Error setting video source:', error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };
  
  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} /><br/>
      <video
        ref={videoRef}
        controls
        width="600"
        onCanPlay={handleVideoPlay}
        onPause={() => videoRef.current.pause()}
      >
        Your browser does not support the video tag.
      </video>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Draggable
          axis="x"
          bounds={{ left: 0, right: videoDuration ? videoDuration * 10 : 0 }}
          onDrag={(e, ui) => handleDrag(e, ui, 'start')}
          onStop={handleDragStop}
          nodeRef={startHandleRef}
        >
          <div
            ref={startHandleRef}
            style={{
              width: '4px',
              height: '20px',
              background: 'red',
              cursor: 'ew-resize',
              position: 'relative'
            }}
          >
            {startTime.toFixed(2)}/{videoDuration.toFixed(2)}
            <button
              onClick={handlePlayTrimmedVideo}
              style={{ position: 'absolute', top: '25px', left: '-20px' }}
            >
              Play Trimmed
            </button>
          </div>
        </Draggable>
        <Draggable
          axis="x"
          bounds={{ left: 0, right: videoDuration ? videoDuration * 10 : 0 }}
          onDrag={(e, ui) => handleDrag(e, ui, 'end')}
          onStop={handleDragStop}
          nodeRef={endHandleRef}
        >
          <div
            ref={endHandleRef}
            style={{
              width: '4px',
              height: '20px',
              background: 'red',
              cursor: 'ew-resize',
              position: 'relative'
            }}
          >
            {endTime.toFixed(2)}/{videoDuration.toFixed(2)}
            <button
              onClick={handlePlayTrimmedVideo}
              style={{ position: 'absolute', top: '25px', left: '-20px' }}
            >
              Play Trimmed
            </button>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

//export default VideoTrimmer;
