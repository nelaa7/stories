import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import exportObject from './Home.js';
import MainContent from './MainContent.js'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
        <Sidebar />
      <MainContent />
      </div>
    </Router>
  );
}

export default App;
