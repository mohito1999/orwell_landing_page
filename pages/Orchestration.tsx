import React, { useState, useEffect } from 'react';
import { Server, Zap, Activity, ArrowRight, GitBranch, ShieldCheck, Terminal, Workflow, Database, Globe, MessageSquare } from 'lucide-react';

export function Orchestration() {
    const [activeStep, setActiveStep] = useState(0);

    // Simulate workflow execution
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-20 font-sans selection:bg-orwell-500/30">

            {/* Hero Section */}
            <section className="py-24 px-6 border-b border-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orwell-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orwell-500/10 border border-orwell-500/20 rounded-full w-fit mb-8">
                            <Workflow className="w-4 h-4 text-orwell-500" />
                            <span className="text-xs font-mono text-orwell-500 uppercase tracking-wider">Orchestration Engine</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            The Conductor <br />
                            <span className="text-orwell-500">Of Your Agents.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                            Orwell doesn't just run models; it manages entire lifecycles. From planning and reasoning to tool execution and state management, our engine ensures your agents complete complex, multi-step workflows reliably.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orwell-500 text-white px-8 py-4 font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono flex items-center gap-2 group">
                                Start Orchestrating <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all rounded-sm font-mono">
                                View Documentation
                            </button>
                        </div>
                    </div>

                    {/* Right: Live Workflow Widget */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orwell-500/5 blur-3xl rounded-full"></div>
                        <div className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-lg p-8 shadow-2xl">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-orwell-500" />
                                    <span className="font-mono text-sm text-zinc-300">WORKFLOW_EXECUTOR</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-mono text-xs text-green-500">RUNNING</span>
                                </div>
                            </div>

                            {/* Workflow Visualization */}
                            <div className="flex flex-col gap-4 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-800"></div>

                                {/* Step 1: Trigger */}
                                <div className={`relative pl-12 transition-all duration-500 ${activeStep === 0 ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${activeStep === 0 ? 'bg-orwell-500 border-orwell-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-zinc-950 border-zinc-600'}`}></div>
                                    <div className={`bg-zinc-900 border p-4 rounded-sm flex items-center justify-between ${activeStep === 0 ? 'border-orwell-500' : 'border-zinc-800'}`}>
                                        <div className="flex items-center gap-3">
                                            <MessageSquare className="w-4 h-4 text-zinc-400" />
                                            <span className="font-mono text-sm text-white">User_Request</span>
                                        </div>
                                        <span className="font-mono text-xs text-zinc-500">RECEIVED</span>
                                    </div>
                                </div>

                                {/* Step 2: Plan */}
                                <div className={`relative pl-12 transition-all duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${activeStep === 1 ? 'bg-orwell-500 border-orwell-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-zinc-950 border-zinc-600'}`}></div>
                                    <div className={`bg-zinc-900 border p-4 rounded-sm flex items-center justify-between ${activeStep === 1 ? 'border-orwell-500' : 'border-zinc-800'}`}>
                                        <div className="flex items-center gap-3">
                                            <GitBranch className="w-4 h-4 text-purple-400" />
                                            <span className="font-mono text-sm text-white">Planner_Agent</span>
                                        </div>
                                        <span className="font-mono text-xs text-zinc-500">REASONING...</span>
                                    </div>
                                </div>

                                {/* Step 3: Tool Execution */}
                                <div className={`relative pl-12 transition-all duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${activeStep === 2 ? 'bg-orwell-500 border-orwell-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-zinc-950 border-zinc-600'}`}></div>
                                    <div className={`bg-zinc-900 border p-4 rounded-sm flex items-center justify-between ${activeStep === 2 ? 'border-orwell-500' : 'border-zinc-800'}`}>
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-4 h-4 text-blue-400" />
                                            <span className="font-mono text-sm text-white">Tool: Web_Search</span>
                                        </div>
                                        <span className="font-mono text-xs text-zinc-500">FETCHING</span>
                                    </div>
                                </div>

                                {/* Step 4: Final Response */}
                                <div className={`relative pl-12 transition-all duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${activeStep === 3 ? 'bg-orwell-500 border-orwell-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-zinc-950 border-zinc-600'}`}></div>
                                    <div className={`bg-zinc-900 border p-4 rounded-sm flex items-center justify-between ${activeStep === 3 ? 'border-orwell-500' : 'border-zinc-800'}`}>
                                        <div className="flex items-center gap-3">
                                            <Zap className="w-4 h-4 text-orwell-500" />
                                            <span className="font-mono text-sm text-white">Final_Output</span>
                                        </div>
                                        <span className="font-mono text-xs text-green-500">COMPLETE</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HUD Metrics Section */}
            <section className="py-12 border-b border-zinc-800 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Steps / Sec</span>
                            <span className="font-mono text-3xl font-bold text-white">45<span className="text-zinc-600 text-lg">ops</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Success Rate</span>
                            <span className="font-mono text-3xl font-bold text-white">99.8<span className="text-zinc-600 text-lg">%</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Avg. Chain Length</span>
                            <span className="font-mono text-3xl font-bold text-orwell-500">4.2<span className="text-orwell-800 text-lg">nodes</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">State Recovery</span>
                            <span className="font-mono text-3xl font-bold text-green-500">100<span className="text-green-900 text-lg">%</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Scroll-telling */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-4">The Agent Lifecycle</h2>
                        <p className="text-zinc-400">How Orwell manages state, memory, and execution.</p>
                    </div>

                    <div className="relative border-l border-zinc-800 ml-6 md:ml-0 space-y-16">

                        {/* Step 1 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">01. PLANNING</span>
                                <h3 className="text-xl font-bold text-white mt-2">Reasoning & Decomposition</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Upon receiving a goal, the Orchestrator breaks it down into a sequence of atomic tasks. It uses Chain-of-Thought (CoT) reasoning to determine dependencies and the optimal execution path.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">02. EXECUTION</span>
                                <h3 className="text-xl font-bold text-white mt-2">Tool Use & Action</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Agents are granted access to secure tools (APIs, Databases, Browsers). The Orchestrator invokes these tools safely, validating inputs and parsing outputs into a structured format.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">03. PERSISTENCE</span>
                                <h3 className="text-xl font-bold text-white mt-2">State Management</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Every step is check-pointed. If a workflow fails or hangs, Orwell can resume exactly where it left off. Long-running jobs can span days or weeks without losing context.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Deployment Section (No Code) */}
            <section className="py-24 bg-zinc-900 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Deploy in Your VPC</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                The Orchestration Engine is delivered as a Docker container that sits within your private cloud. Connect it to your existing model endpoints or run local inference.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Air-gapped compatible</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Server className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Horizontal auto-scaling</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Sub-millisecond overhead</span>
                                </li>
                            </ul>
                        </div>

                        {/* Deployment UI Mockup */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orwell-500 to-purple-500"></div>
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-mono text-sm text-white font-bold">DEPLOYMENT_CONFIG</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Environment</span>
                                    <span className="text-white">AWS us-east-1 (VPC-0x82)</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Instance Type</span>
                                    <span className="text-white">g5.12xlarge (NVIDIA A10G)</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Replicas</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-orwell-500">Auto-Scale</span>
                                        <span className="text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">Min: 2</span>
                                        <span className="text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">Max: 10</span>
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 mt-4 rounded-sm font-bold transition-colors">
                                    INITIATE DEPLOYMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
