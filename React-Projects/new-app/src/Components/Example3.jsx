import React, { useState } from 'react';

const Example3=()=> {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  function StatusDisplay({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
      </div>
    );
  }

  return (
    <div>
      <h1>Simple Authentication Example</h1>
      <button onClick={toggleLoginStatus}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <StatusDisplay isLoggedIn={isLoggedIn} />
    </div>
  );
}



export default Example3;
