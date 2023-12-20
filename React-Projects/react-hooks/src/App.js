import './App.css';
import React,{useState} from 'react';
import FunctionContextComponent from "./Components/FunctionContextComponent";
import ClassContextComponent from "./Components/ClassContextComponent";
import Example1 from './Components/Example1';

export const ThemeContext=React.createContext();

function App() {
  const[darkTheme,setDarkTheme]=useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme=>!prevDarkTheme)
  }

  return (
    <div>
     {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
     </ThemeContext.Provider> */}
     <Example1/>
    </div>
  );
}

export default App;
