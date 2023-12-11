// import React, { useState, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import Draggable from 'react-draggable';

// const VideoPlayer = ({ videoUrl, onStart, onEnd }) => {
//   const [playing, setPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const playerRef = useRef(null);

//   const handlePlayPause = () => {
//     setPlaying(!playing);
//   };

//   const handleProgress = (progress) => {
//     setCurrentTime(progress.playedSeconds);
//   };

//   return (
//     <div>
//       <ReactPlayer
//         ref={playerRef}
//         url={videoUrl}
//         controls={false}
//         playing={playing}
//         onPlay={() => onStart(currentTime)}
//         onPause={() => onEnd(currentTime)}
//         onProgress={handleProgress}
//       />

//       <div>
//         <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
//         <p>Current Time: {currentTime.toFixed(2)} seconds</p>
//       </div>

//       <Draggable axis="x" bounds="parent">
//         <div>
//           <div style={{ width: '90%', height: '10px', backgroundColor: 'red' }} />
//         </div>
//       </Draggable>
//     </div>
//   );
// };

// export default VideoPlayer;


// src/components/VideoPlayer.js
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Draggable from 'react-draggable';

const VideoPlayer = ({ videoUrl, onStart, onEnd }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleStartRangeChange = (e) => {
    setStartRange(parseFloat(e.target.value));
  };

  const handleEndRangeChange = (e) => {
    setEndRange(parseFloat(e.target.value));
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        controls={true}
        playing={playing}
        onPlay={() => onStart(currentTime)}
        onPause={() => onEnd(currentTime)}
        onProgress={handleProgress}
      />

      <div>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <p>Current Time: {currentTime.toFixed(2)} seconds</p>
      </div>

      <Draggable axis="x" bounds="parent">
        <div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }} />
        </div>
      </Draggable>

      <div>
        <label>Start Time:</label>
        <input
          type="range"
          min="0"
          max={currentTime}
          step="0.1"
          value={startRange}
          onChange={handleStartRangeChange}
        />
        <span>{startRange.toFixed(2)} seconds</span>
      </div>

      <div>
        <label>End Time:</label>
        <input
          type="range"
          min={startRange}
          max={currentTime}
          step="0.1"
          value={endRange}
          onChange={handleEndRangeChange}
        />
        <span>{endRange.toFixed(2)} seconds</span>
      </div>
    </div>
  );
};

export default VideoPlayer;



