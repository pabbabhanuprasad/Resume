import React from 'react';

const App = () => {
  const fileUrl = "C:\Users\Bhanu prasad\Desktop\Resume\React-Projects\fullstack\public\FrontEndDeveloper.pdf";

  // Now you can use 'fileUrl' in your component
  return (
    <div>
      <p>Content of the file:</p>
      <pre>{fileUrl}</pre>
    </div>
  );
};

export default App;

