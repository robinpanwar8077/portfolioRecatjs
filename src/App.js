import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Project from './Project';
import ResumeNew from './ResumeNew';
import About from './About';
import Banner from './Banner';
import Contect from './Contect';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         
          
          <Route path="/resumenew" element={<ResumeNew />} />
          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
