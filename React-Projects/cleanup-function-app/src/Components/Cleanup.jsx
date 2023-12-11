import React,{useEffect,useState} from 'react';
// import {cleanup} from '@testing-library/react';


const Cleanup = () => {
    const [open,setOpen]=useState(true);
  return (
    <div>
        {open && <Chat/>}
        <button onClick={()=>setOpen(!open)}>Toggle Chat</button>
    </div>
  )
}

function Chat(){
    useEffect(()=>{
        return()=>{
            alert("Chat window is Closed");
        }
    },[]);
    useEffect(()=>{
        return()=>{
            alert("Chat window is Opened");
        }
    },[]);
    return <div>
        <h1>Chat window</h1>
    </div>
}

export default Cleanup;