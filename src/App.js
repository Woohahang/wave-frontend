import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
