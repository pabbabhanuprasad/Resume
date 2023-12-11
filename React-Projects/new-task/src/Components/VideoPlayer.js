import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Draggable from 'react-draggable';
import ReactSlider from "react-slider"
const VideoPlayer = ({ videoUrl}) => {
  const [playing, setPlaying] = useState(false);

  const [endRange, setEndRange] = useState(0);
  const playerRef = useRef(null);
  const [values,setValues]=useState([30,70])
 const hanlechange=(e)=>{
  setValues(e)
 }
  const handlePlayPause = () => {
    setPlaying(!playing);
  };

const handleProgress = (progress) => {
    if(progress.playedSeconds == values[1]){
      handlePlayPause()
    }
  };
  const onReady = React.useCallback(() => {
    setEndRange(playerRef.current?.player?.prevLoaded)
  },[]);

  const onStart=()=>{
    playerRef.current.seekTo(values[0])
  }
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        controls={true}
        playing={playing}
        start={20000}
        onReady={onReady}
        onPlay={() => onStart()}
        onProgress={handleProgress}
      />

<Draggable axis="x" bounds="parent">
        <div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }} />
        </div>
      </Draggable>
      <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    defaultValue={[0, endRange]}
    min={0}
    max={playerRef?.current?.getDuration()}
    value={values}
    onChange={hanlechange}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={10}
/>
</div>
  );
};
export default VideoPlayer;