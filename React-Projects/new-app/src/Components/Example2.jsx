import React,{useState} from 'react';

const Example2 = () => {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p className="para">You clicked{count}</p>
        <button className="button1" onClick={handleIncrement}>Click</button>
    </div>
  )
}

export default Example2;