import "./App.css";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    
    </BrowserRouter>
  );
}

export default App;
