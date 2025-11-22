import { Link } from 'react-router-dom';

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
              <li><Link to="/#platform" className="hover:text-orwell-500">Orchestration Engine</Link></li>
              <li><Link to="/#platform" className="hover:text-orwell-500">Vector Memory</Link></li>
              <li><Link to="/#platform" className="hover:text-orwell-500">Hallucination Guardrails</Link></li>
              <li><Link to="/#platform" className="hover:text-orwell-500">Image Gen</Link></li>
              <li><Link to="/#platform" className="hover:text-orwell-500">Audit & Logging</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/healthcare" className="hover:text-orwell-500">Healthcare</Link></li>
              <li><Link to="/legal" className="hover:text-orwell-500">Legal</Link></li>
              <li><Link to="/finance" className="hover:text-orwell-500">Finance</Link></li>
              <li><Link to="/logistics" className="hover:text-orwell-500">Logistics</Link></li>
              <li><Link to="/government" className="hover:text-orwell-500">Government</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/#about" className="hover:text-orwell-500">About Us</Link></li>
              <li><Link to="/#careers" className="hover:text-orwell-500">Careers</Link></li>
              <li><Link to="/#blog" className="hover:text-orwell-500">Blog</Link></li>
              <li><Link to="/#contact" className="hover:text-orwell-500">Contact Sales</Link></li>
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