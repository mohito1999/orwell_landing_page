import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';
import { Hero } from '../components/Hero';
import { WorkflowBuilder } from '../components/WorkflowBuilder';
import { Hardware } from '../components/Hardware';
import { AhoySection } from '../components/AhoySection';
import { Services } from '../components/Services';

export function Home() {
    return (
        <>
            <Hero />

            <section className="py-24 border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        {/* Total Sovereignty - Large Card (Left Column) */}
                        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col gap-6 group hover:border-zinc-600 transition-colors h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Total Sovereignty</h3>
                                <p className="text-zinc-400 leading-relaxed text-base">
                                    The Anti-Black Box. Public models are a compliance nightmare. Orwell gives you full auditability.
                                    Trace every token generation back to its source document. No hidden biases, no data leakage.
                                </p>
                            </div>
                            <div className="flex-1 bg-zinc-950 border border-zinc-800 relative overflow-hidden rounded-sm min-h-[240px] flex items-center justify-center group-hover:border-orwell-500/30 transition-colors">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orwell-500/10 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 grid-bg opacity-20"></div>

                                {/* Central Graphic */}
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                                        <Lock className="w-10 h-10 text-orwell-500" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orwell-500 animate-pulse"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                {/* Zero Exfiltration */}
                                <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col gap-6 group hover:border-zinc-600 transition-colors min-h-[240px]">
                                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-sm flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-orwell-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Zero Exfiltration</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            Air-gapped by default. Your data never leaves your VPC. No callbacks, no telemetry.
                                        </p>
                                    </div>
                                </div>

                                {/* Latency Optimized */}
                                <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col gap-6 group hover:border-zinc-600 transition-colors min-h-[240px]">
                                    <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-sm flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-orwell-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Latency Optimized</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            Bare-metal performance. <span className="text-orwell-500 font-bold">200+ tokens/sec</span> on Llama-3-70B.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hallucination Guardrails */}
                            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 group hover:border-zinc-600 transition-colors">
                                <div className="max-w-lg">
                                    <h4 className="font-bold text-white text-lg mb-3">Hallucination Guardrails</h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        Real-time verification layers that cross-reference generation against your trusted internal Knowledge Bases (KBs).
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`h-12 w-2 rounded-sm transition-all duration-500 ${i < 3 ? 'bg-zinc-800' : i === 3 ? 'bg-orwell-900 animate-pulse' : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'}`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <WorkflowBuilder />
            <Hardware />
            <AhoySection />
            <Services />
        </>
    );
}
