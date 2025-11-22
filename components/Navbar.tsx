import React from 'react';
import { Eye, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-orwell-500 p-1.5 rounded-sm">
              <Eye className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">ORWELL</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Platform</a>
            <a href="#hardware" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Hardware</a>
            <a href="#ahoy" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Ahoy! Voice</a>
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 transition-colors font-mono">Services</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all font-mono">
              Documentation
            </button>
            <button className="bg-orwell-500 text-white px-5 py-2 text-sm font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono">
              Book Demo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <a href="#platform" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Platform</a>
            <a href="#hardware" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Hardware</a>
            <a href="#ahoy" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Ahoy! Voice</a>
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-orwell-500 font-mono" onClick={() => setIsOpen(false)}>Services</a>
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