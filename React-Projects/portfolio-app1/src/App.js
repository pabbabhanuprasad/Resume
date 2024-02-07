import "./App.css";
import Header from "./Components/Home/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/pageContent/HomePage";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
