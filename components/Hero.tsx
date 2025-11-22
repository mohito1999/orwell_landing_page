import React from 'react';
import { ArrowRight, Shield, Server, Brain, Activity } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center border-b border-zinc-800">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full w-fit mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">System Operational</span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.9] mb-8">
              SOVEREIGN AI. <br />
              <span className="text-zinc-500">BUILT FOR YOUR</span> <br />
              <span className="text-orwell-500">MISSION.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
              Stop waiting for generic APIs. Orwell delivers bespoke, fine-tuned AI agents deployed on your infrastructure—secure, private, and aligned with your strategic goals. From pilot to production in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Building
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Hardware Specs
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Cards */}
          <div className="lg:col-span-5 relative w-full max-w-[500px] lg:max-w-none mx-auto lg:mx-0 mt-12 lg:mt-0 perspective-1000">
            <div className="flex flex-col gap-4 relative z-10 transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:transform-none">

              {/* Card 1 */}
              <div className="bg-zinc-950/90 backdrop-blur-xl p-6 border border-zinc-800 shadow-2xl lg:translate-x-[-20px] hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                    <Shield className="w-4 h-4" />
                    <span>DATA_SOVEREIGNTY</span>
                  </div>
                  <span className="text-green-500 font-mono text-xs">SECURE</span>
                </div>
                <div className="h-1.5 bg-zinc-900 w-full overflow-hidden rounded-full">
                  <div className="h-full bg-orwell-500 w-full rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                </div>
                <div className="mt-3 flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                  <span>EXTERNAL_API: BLOCKED</span>
                  <span>LOCAL_INFERENCE: 100%</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-950/90 backdrop-blur-xl p-6 border border-zinc-800 shadow-2xl lg:translate-x-[20px] hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                    <Server className="w-4 h-4" />
                    <span>ORMAX_CLUSTER_01</span>
                  </div>
                  <span className="text-orwell-500 font-mono text-xs">HEAVY_LOAD</span>
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`h-6 w-full rounded-[1px] bg-zinc-900 border border-zinc-800 ${i < 12 ? 'animate-pulse bg-zinc-800 border-zinc-700' : ''}`}></div>
                  ))}
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-950/90 backdrop-blur-xl p-6 border border-zinc-800 shadow-2xl lg:translate-x-[-10px] hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                    <Brain className="w-4 h-4" />
                    <span>AHOY_VOICE_AGENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-zinc-400" />
                    <span className="text-zinc-100 font-mono text-xs">ACTIVE</span>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 h-10 justify-center bg-zinc-900/50 border border-zinc-900/50 p-2 rounded-sm">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-orwell-500 rounded-full transition-all duration-75"
                      style={{
                        height: `${Math.max(10, Math.random() * 100)}%`,
                        opacity: 0.4 + (Math.random() * 0.6)
                      }}
                    ></div>
                  ))}
                </div>
              </div>

            </div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orwell-500/5 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};