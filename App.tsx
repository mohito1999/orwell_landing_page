import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Healthcare } from './pages/Healthcare';
import { Legal } from './pages/Legal';
import { Finance } from './pages/Finance';
import { Logistics } from './pages/Logistics';
import { Government } from './pages/Government';
import { Sales } from './pages/Sales';
import { Support } from './pages/Support';
import { WorkflowAutomation } from './pages/WorkflowAutomation';
import { Orchestration } from './pages/Orchestration';
import { VectorMemory } from './pages/VectorMemory';
import { Guardrails } from './pages/Guardrails';
import { AuditLogging } from './pages/AuditLogging';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Retry after a small delay to allow for rendering
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="min-h-screen bg-zinc-950 text-white selection:bg-orwell-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/government" element={<Government />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/support" element={<Support />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/orchestration" element={<Orchestration />} />
          <Route path="/vector-memory" element={<VectorMemory />} />
          <Route path="/guardrails" element={<Guardrails />} />
          <Route path="/audit-logging" element={<AuditLogging />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;