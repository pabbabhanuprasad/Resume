import React,{useState} from "react";

const Card = () => {
  
  const [card,setCard]=useState("");

  const hideContent=()=>{
    setCard(!card)
  }
  return (
    <div>
      <center>
      <div class="card" >
        {/* <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5> */}
          {card&&<p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>}
          <button onClick={hideContent}>Hide content</button>
      </div>
      </center>
    </div>
  );
};

export default Card;
