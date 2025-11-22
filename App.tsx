import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Healthcare } from './pages/Healthcare';
import { Legal } from './pages/Legal';
import { Finance } from './pages/Finance';
import { Logistics } from './pages/Logistics';
import { Government } from './pages/Government';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-orwell-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/government" element={<Government />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;