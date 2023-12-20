//create a React.js application that displays a counter and too buttons.The counter starts at 0.
//One button should increment the counter by 1 when clicked and the other button should decrement
//the counter bt 1 when clicked.the counter should not go below 0.
import React,{useState} from 'react'

const Example1 = () => {
    const [count,setCount]=useState(0);

    const handleDecrement=()=>{
        if (count>0)
        setCount(count-1);
    }
    const handleIncrement=()=>{
        setCount(count+1)
    }
  return (
    <div >
        <center>
        <p>Count{count}</p>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        </center>
    </div>
  )
}

export default Example1;