import React, { useState } from 'react';
import { Cpu, HardDrive, Zap, ChevronRight } from 'lucide-react';

const SpecRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-zinc-800 last:border-0">
    <span className="text-zinc-500 font-mono text-sm">{label}</span>
    <span className="text-zinc-200 font-mono text-sm font-bold">{value}</span>
  </div>
);

export const Hardware: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workstation' | 'server'>('workstation');

  return (
    <section id="hardware" className="py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">PURPOSE-BUILT CONFIGURATIONS</h2>
            <p className="text-zinc-400 max-w-xl">
              Deploy Anywhere. Validated reference architectures for the Orwell Stack.
              Whether you have a closet of H100s or a private VPC, our software is optimized
              to squeeze every FLOP out of your compute.
            </p>
          </div>
          <div className="flex bg-zinc-900 p-1 border border-zinc-800">
            <button
              onClick={() => setActiveTab('workstation')}
              className={`px-6 py-2 font-mono text-sm transition-all ${activeTab === 'workstation' ? 'bg-orwell-500 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              OR1 WORKSTATION
            </button>
            <button
              onClick={() => setActiveTab('server')}
              className={`px-6 py-2 font-mono text-sm transition-all ${activeTab === 'server' ? 'bg-orwell-500 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              ORMAX RACK
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <div className="relative h-[500px] bg-zinc-900 border border-zinc-800 flex items-center justify-center p-8 group overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20"></div>

            {activeTab === 'workstation' ? (
              // Or1 Visual
              <div className="w-48 h-96 bg-zinc-800 border-2 border-zinc-700 relative shadow-2xl flex flex-col items-center pt-6 transition-all duration-500 group-hover:scale-105">
                <div className="w-32 h-2 bg-zinc-900 mb-4"></div>
                <div className="w-full h-[1px] bg-zinc-700 mb-8"></div>
                <div className="w-32 h-32 bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-orwell-500/10 animate-pulse"></div>
                  <Cpu className="text-zinc-600 w-12 h-12" />
                </div>
                <div className="mt-auto mb-8 flex gap-2">
                  <div className="w-2 h-2 bg-orwell-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
                </div>
              </div>
            ) : (
              // OrMax Visual
              <div className="w-full max-w-md flex flex-col gap-2 transition-all duration-500 group-hover:scale-105">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-zinc-800 border border-zinc-700 flex items-center justify-between px-6 shadow-lg relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orwell-600"></div>
                    <div className="grid grid-cols-8 gap-1">
                      {[...Array(8)].map((_, j) => (
                        <div key={j} className="w-1 h-4 bg-zinc-900"></div>
                      ))}
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="font-mono text-xs text-zinc-500">SLOT_0{i + 1}</span>
                      <div className="w-12 h-2 bg-green-500/50"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Specs Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {activeTab === 'workstation' ? 'Or1 Workstation' : 'OrMax Server Rack'}
              </h3>
              <p className="text-orwell-500 font-mono mb-6">
                {activeTab === 'workstation' ? 'DESK-SIDE DEVELOPMENT UNIT' : 'DATA CENTER INFERENCE CLUSTER'}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {activeTab === 'workstation'
                  ? 'Reference configuration for teams prototyping agents, running inference on mid-sized models, or handling interactive AI tasks. Validated on standard workstation hardware.'
                  : 'Enterprise-grade software stack for rack-mounted clusters. Supports training, fine-tuning, and serving large models (70B+) at massive scale on H100/A100 infrastructure.'
                }
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              {activeTab === 'workstation' ? (
                <>
                  <SpecRow label="GPU CONFIG" value="Up to 2x NVIDIA RTX 6000 Ada" />
                  <SpecRow label="VRAM" value="96 GB GDDR6 ECC" />
                  <SpecRow label="CPU" value="AMD Threadripper PRO (64-Core)" />
                  <SpecRow label="MEMORY" value="512 GB DDR5" />
                  <SpecRow label="FORM FACTOR" value="Mid-Tower Chassis" />
                </>
              ) : (
                <>
                  <SpecRow label="GPU CONFIG" value="8x NVIDIA H100 Tensor Core" />
                  <SpecRow label="VRAM" value="640 GB HBM3" />
                  <SpecRow label="INTERCONNECT" value="900 GB/s NVLink" />
                  <SpecRow label="MEMORY" value="2 TB DDR5" />
                  <SpecRow label="FORM FACTOR" value="4U Rackmount" />
                </>
              )}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center text-white hover:text-orwell-500 font-bold transition-colors">
                DOWNLOAD DATASHEET <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};