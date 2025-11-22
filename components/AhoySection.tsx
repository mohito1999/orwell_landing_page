import React, { useEffect, useState } from 'react';
import { Mic, PhoneCall, Activity, Lock } from 'lucide-react';

export const AhoySection: React.FC = () => {
  const [bars, setBars] = useState<number[]>(new Array(20).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 80 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ahoy" className="py-24 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden">
      {/* Abstract circular gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orwell-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block bg-orwell-500 text-black font-bold px-3 py-1 text-xs uppercase tracking-wider font-mono">
              Module: Ahoy!
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              REAL-TIME <br />
              VOICE INTELLIGENCE.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              An end-to-end pipeline for agentic telephony. Replace legacy IVR with 
              human-like responsiveness (&lt;500ms latency). Built on open-source 
              models like Moshi and SeamlessM4T, running entirely on your hardware.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                { icon: Activity, text: "Sub-500ms Latency" },
                { icon: Lock, text: "Zero Data Exfiltration" },
                { icon: PhoneCall, text: "Native SIP/WebRTC Support" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300">
                  <div className="p-2 bg-zinc-950 rounded-sm border border-zinc-800 group hover:border-orwell-500 transition-colors">
                    <item.icon className="w-4 h-4 text-orwell-500" />
                  </div>
                  <span className="font-mono text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-6 lg:p-12 flex flex-col justify-between relative rounded-sm shadow-2xl">
            <div className="absolute top-4 right-4 flex gap-2">
               <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
               <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            </div>

            <div className="space-y-6 mb-12">
              {/* Chat Bubble 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-zinc-900 rounded-sm flex items-center justify-center border border-zinc-800 shrink-0">
                   <span className="font-mono text-[10px] text-zinc-500">USR</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 text-zinc-300 font-mono text-sm shadow-sm">
                  "I need to reschedule my installation appointment for next Tuesday."
                </div>
              </div>

              {/* Chat Bubble 2 (AI) */}
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 bg-orwell-500 rounded-sm flex items-center justify-center border border-orwell-400 shrink-0">
                   <span className="font-mono text-[10px] text-black font-bold">AI</span>
                </div>
                <div className="bg-zinc-100 p-4 text-black font-mono text-sm border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                  "I can help with that. I see a slot open at 2 PM on Tuesday the 14th. Would you like me to lock that in?"
                </div>
              </div>
            </div>

            {/* Visualizer */}
            <div className="border-t border-zinc-900 pt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                   <span className="text-xs font-mono text-red-500 uppercase">Live_Stream_01</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-600">48kHz / 16-bit PCM</span>
              </div>
              <div className="flex items-end justify-between h-12 gap-1">
                {bars.map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-orwell-500 transition-all duration-100 ease-in-out"
                    style={{ height: `${height}%`, opacity: 0.5 + (height/200) }}
                  ></div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};