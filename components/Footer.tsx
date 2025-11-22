import React from 'react';
import { Eye, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-orwell-500 rounded-sm"></div>
              <span className="font-display font-bold text-lg tracking-tight text-white">ORWELL</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Sovereign AI infrastructure for the enterprise.
              Deploy fine-tuned agents on your own metal.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-orwell-500">Orchestration Engine</a></li>
              <li><a href="#" className="hover:text-orwell-500">Vector Memory</a></li>
              <li><a href="#" className="hover:text-orwell-500">Hallucination Guardrails</a></li>
              <li><a href="#" className="hover:text-orwell-500">Image Gen</a></li>
              <li><a href="#" className="hover:text-orwell-500">Audit & Logging</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="/healthcare" className="hover:text-orwell-500">Healthcare</a></li>
              <li><a href="/legal" className="hover:text-orwell-500">Legal</a></li>
              <li><a href="/finance" className="hover:text-orwell-500">Finance</a></li>
              <li><a href="/logistics" className="hover:text-orwell-500">Logistics</a></li>
              <li><a href="/government" className="hover:text-orwell-500">Government</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-orwell-500">About Us</a></li>
              <li><a href="#" className="hover:text-orwell-500">Careers</a></li>
              <li><a href="#" className="hover:text-orwell-500">Blog</a></li>
              <li><a href="#" className="hover:text-orwell-500">Contact Sales</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-mono">© 2024 ORWELL PLATFORM INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-xs text-zinc-600 font-mono">
            <a href="#">PRIVACY_POLICY</a>
            <a href="#">TERMS_OF_SERVICE</a>
            <a href="#">SLA</a>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-orwell-500 transition-colors cursor-pointer">
              <Twitter className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-orwell-500 transition-colors cursor-pointer">
              <Github className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-orwell-500 transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};