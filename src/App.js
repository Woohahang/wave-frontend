import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import UserPage from './pages/UserPage';
// import Test from './pages/Test';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <Router>
      <div className="App">
        <Header />

        {/* 
        <main>
          <Routes>
            <Route path="/" element={<h2>환영합니다!</h2>} /> 
        <Route path="/user" element={<UserPage />} /> 
        <Route path="/test" element={<Test />} />
      </Routes>
        </main>

    */}

        <Footer />
      </div>
    </Router>

  );
}

export default App;
