
import './App.css';
import Home from './Home';

import ResumeNew from './ResumeNew';


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
