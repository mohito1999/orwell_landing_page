import React from 'react';
import { Settings, Database, MessageSquare, Share2, Mic, ArrowRight } from 'lucide-react';

const Node = ({ title, icon: Icon, type, inputs, outputs }: any) => (
  <div className="bg-zinc-950 border border-zinc-800 w-full md:w-64 shadow-2xl z-10 group hover:border-orwell-500/50 transition-all">
    <div className={`px-4 py-2 border-b border-zinc-800 flex items-center justify-between ${type === 'trigger' ? 'bg-zinc-900' :
      type === 'action' ? 'bg-zinc-900' : 'bg-zinc-900'
      }`}>
      <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider">{type}</span>
      <Settings className="w-3 h-3 text-zinc-600 cursor-pointer hover:text-white transition-colors" />
    </div>
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-sm group-hover:border-orwell-500/30 transition-colors">
          <Icon className="w-4 h-4 text-orwell-500" />
        </div>
        <span className="font-medium text-sm text-zinc-200">{title}</span>
      </div>

      <div className="space-y-2">
        {inputs?.map((label: string, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-orwell-500 transition-colors"></div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">{label}</span>
          </div>
        ))}
        {outputs?.map((label: string, i: number) => (
          <div key={i} className="flex items-center justify-end gap-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">{label}</span>
            <div className="w-1.5 h-1.5 bg-orwell-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const WorkflowBuilder: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-6">THE ORCHESTRATION ENGINE</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Drag, drop, and deploy. Our visual builder connects proprietary data sources to open-source models.
            Manage hallucinations with HITL (Human-in-the-Loop) checkpoints and audit every token generated.
          </p>
        </div>

        <div className="relative w-full bg-zinc-900/30 border border-zinc-800 rounded-sm overflow-hidden grid-bg p-8 md:p-20 min-h-[600px] flex items-center justify-center">

          {/* Toolbar */}
          <div className="absolute top-4 left-4 bottom-4 w-14 bg-zinc-950 border border-zinc-800 hidden md:flex flex-col items-center py-4 gap-4 z-20 rounded-sm">
            {[MessageSquare, Mic, Database, Share2].map((Icon, i) => (
              <div key={i} className="p-2 hover:bg-zinc-900 rounded-sm cursor-pointer text-zinc-500 hover:text-orwell-500 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Diagram Container - Responsive Flex/Grid hybrid */}
          <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

            {/* Connection Lines - Horizontal (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -z-0 hidden md:block"></div>

            {/* Node 1 */}
            <div className="relative">
              <Node
                title="Ahoy! Inbound"
                type="trigger"
                icon={Mic}
                outputs={['Audio Stream']}
              />
              <div className="absolute top-1/2 -right-12 md:flex hidden items-center justify-center w-12">
                <div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
                <div className="h-[2px] w-full bg-zinc-700"></div>
              </div>
              {/* Mobile Arrow */}
              <div className="md:hidden flex justify-center py-4">
                <ArrowRight className="text-zinc-700" />
              </div>
            </div>

            {/* Node 2 */}
            <div className="relative">
              <Node
                title="Orwell Logic Core"
                type="process"
                icon={Database}
                inputs={['Context', 'Audio']}
                outputs={['Decision', 'Transcript']}
              />
              <div className="absolute top-1/2 -right-12 md:flex hidden items-center justify-center w-12">
                <div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
                <div className="h-[2px] w-full bg-zinc-700"></div>
              </div>
              {/* Mobile Arrow */}
              <div className="md:hidden flex justify-center py-4">
                <ArrowRight className="text-zinc-700" />
              </div>
            </div>

            {/* Node 3 */}
            <div className="relative">
              <Node
                title="Compliance Log"
                type="action"
                icon={Share2}
                inputs={['Transcript']}
              />
            </div>

          </div>

          {/* UI Overlay */}
          <div className="absolute top-4 right-4 bg-zinc-950 border border-zinc-800 p-2 flex gap-2 rounded-sm shadow-lg">
            <div className="px-3 py-1 bg-green-950/30 border border-green-500/20 text-green-500 text-[10px] font-mono uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Agent Active
            </div>
            <div className="px-3 py-1 bg-zinc-900 text-zinc-400 text-[10px] font-mono uppercase border border-zinc-800">v2.4.1</div>
          </div>

        </div>
      </div>
    </section>
  );
};