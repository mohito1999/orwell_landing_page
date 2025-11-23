import React, { useState } from 'react';
import { Eye, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-orwell-500 rounded-sm flex items-center justify-center group-hover:bg-orwell-600 transition-colors">
              <Eye className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">ORWELL</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/#platform" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Platform</Link>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono"
              >
                Industries <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-48 pt-4 transition-all duration-200 ${isIndustriesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl">
                  <Link to="/healthcare" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Healthcare
                  </Link>
                  <Link to="/legal" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Legal
                  </Link>
                  <Link to="/finance" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Finance
                  </Link>
                  <Link to="/logistics" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Logistics
                  </Link>
                  <Link to="/government" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Government
                  </Link>
                </div>
              </div>
            </div>

            {/* Use Cases Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsUseCasesOpen(true)}
              onMouseLeave={() => setIsUseCasesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono"
              >
                Use Cases <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-56 pt-4 transition-all duration-200 ${isUseCasesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl">
                  <Link to="/sales" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Sales & GTM
                  </Link>
                  <Link to="/support" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Customer Support
                  </Link>
                  <Link to="/workflow-automation" className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-mono border-b border-zinc-800/50">
                    Workflow Automation
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/#hardware" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Hardware</Link>
            <Link to="/#ahoy" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Ahoy! Voice</Link>
            <Link to="/#services" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Services</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all font-mono">
              Documentation
            </button>
            <button className="bg-orwell-500 text-white px-5 py-2 text-sm font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono">
              Book Demo
            </button>
          </div>

          <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 absolute w-full">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <Link to="/#platform" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Platform</Link>

            <div className="space-y-2 pl-4 border-l border-zinc-800">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Industries</span>
              <Link to="/healthcare" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Healthcare</Link>
              <Link to="/legal" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Legal</Link>
              <Link to="/finance" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Finance</Link>
              <Link to="/logistics" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Logistics</Link>
              <Link to="/government" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Government</Link>
            </div>

            <div className="space-y-2 pl-4 border-l border-zinc-800">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Use Cases</span>
              <Link to="/sales" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Sales & GTM</Link>
              <Link to="/support" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Customer Support</Link>
              <Link to="/workflow-automation" className="block text-sm font-medium text-zinc-300 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Workflow Automation</Link>
            </div>

            <Link to="/#hardware" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Hardware</Link>
            <Link to="/#ahoy" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Ahoy! Voice</Link>
            <Link to="/#services" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Services</Link>
            <button className="w-full px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all font-mono">
              Documentation
            </button>
            <button className="w-full bg-orwell-500 text-white px-5 py-3 text-sm font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};