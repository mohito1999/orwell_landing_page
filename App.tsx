import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Healthcare } from './pages/Healthcare';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-orwell-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;