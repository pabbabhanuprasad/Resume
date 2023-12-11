import React, { useState } from 'react';

const RangeInputWithStartEnd = () => {
  // Declare state variables for start and end values
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
    <div>
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
  );
};

export default RangeInputWithStartEnd;
