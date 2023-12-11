import React,{useState} from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

const Example1 = () => {
    const [vid,setVid]=useState(null);

    const handleChange=(event)=>{
        setVid(URL.createObjectURL(event.target.files[0]));
    }

   const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(100);
  
    // Event handler functions to update the state when the range inputs change
    const handleStartChange = (e) => {
      setStartValue(Number(e.target.value));
    };
  
    const handleEndChange = (e) => {
      setEndValue(Number(e.target.value));
    };



  return (
    <div style={{marginLeft:"300px"}}>
        <input type="file" onChange={handleChange}  style={{marginLeft:"150px"}}/><br/><br/>
        <iframe src={vid} style={{width:"600px",height:"400px"}}></iframe><br/>

      <h1>Start Value: {startValue}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={startValue}
        onChange={handleStartChange}
      />

      <h1>End Value: {endValue}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={endValue}
        onChange={handleEndChange}
      />
    </div>

  )
}

export default Example1;


