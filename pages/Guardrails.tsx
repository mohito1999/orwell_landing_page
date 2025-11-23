import React, { useState, useEffect } from 'react';
import { Shield, ShieldAlert, ShieldCheck, ArrowRight, Lock, Eye, FileSearch, AlertTriangle, CheckCircle, Scan } from 'lucide-react';

export function Guardrails() {
    const [scanStep, setScanStep] = useState(0);

    // Simulate scanning process
    useEffect(() => {
        const interval = setInterval(() => {
            setScanStep((prev) => (prev + 1) % 4);
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
                            <Shield className="w-4 h-4 text-orwell-500" />
                            <span className="text-xs font-mono text-orwell-500 uppercase tracking-wider">Active Defense Layer</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            Trust, But <br />
                            <span className="text-orwell-500">Verify.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                            Deploy AI with confidence. Orwell's guardrails intercept hallucinations, redact PII, and block prompt injections in real-time—before they ever reach your users.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orwell-500 text-white px-8 py-4 font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono flex items-center gap-2 group">
                                Configure Rules <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all rounded-sm font-mono">
                                Security Whitepaper
                            </button>
                        </div>
                    </div>

                    {/* Right: Live Security Widget */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orwell-500/5 blur-3xl rounded-full"></div>
                        <div className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-lg p-8 shadow-2xl">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <Scan className="w-5 h-5 text-orwell-500" />
                                    <span className="font-mono text-sm text-zinc-300">THREAT_MONITOR</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-mono text-xs text-green-500">PROTECTED</span>
                                </div>
                            </div>

                            {/* Monitor Visualization */}
                            <div className="flex flex-col gap-4 font-mono text-sm">

                                {/* Message Stream */}
                                <div className="space-y-3">
                                    {/* Item 1: Safe */}
                                    <div className={`p-3 rounded-sm border flex items-center justify-between transition-all duration-500 ${scanStep >= 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} bg-zinc-900/50 border-zinc-800`}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-zinc-500">IN:</span>
                                            <span className="text-zinc-300">"Summarize the Q3 report."</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-2 py-1 rounded text-xs">
                                            <CheckCircle className="w-3 h-3" />
                                            SAFE
                                        </div>
                                    </div>

                                    {/* Item 2: PII Detected */}
                                    <div className={`p-3 rounded-sm border flex items-center justify-between transition-all duration-500 ${scanStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} bg-zinc-900/50 border-zinc-800`}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-zinc-500">OUT:</span>
                                            <span className="text-zinc-300">"Contact <span className="bg-zinc-800 text-zinc-500 px-1 rounded">[REDACTED]</span> at..."</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-orwell-500 bg-orwell-500/10 px-2 py-1 rounded text-xs">
                                            <ShieldCheck className="w-3 h-3" />
                                            PII_REDACTED
                                        </div>
                                    </div>

                                    {/* Item 3: Injection Attempt */}
                                    <div className={`p-3 rounded-sm border flex items-center justify-between transition-all duration-500 ${scanStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} bg-red-500/5 border-red-500/20`}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-zinc-500">IN:</span>
                                            <span className="text-red-400">"Ignore previous instructions..."</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-2 py-1 rounded text-xs">
                                            <ShieldAlert className="w-3 h-3" />
                                            BLOCKED
                                        </div>
                                    </div>

                                    {/* Item 4: Hallucination Check */}
                                    <div className={`p-3 rounded-sm border flex items-center justify-between transition-all duration-500 ${scanStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} bg-zinc-900/50 border-zinc-800`}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-zinc-500">OUT:</span>
                                            <span className="text-zinc-300">"Revenue grew by 12%..."</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-2 py-1 rounded text-xs">
                                            <FileSearch className="w-3 h-3" />
                                            VERIFIED
                                        </div>
                                    </div>
                                </div>

                                {/* Scanning Animation Bar */}
                                <div className="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-orwell-500 w-1/3 animate-[shimmer_2s_infinite]"></div>
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
                            <span className="font-mono text-xs text-zinc-500 uppercase">Threats Blocked</span>
                            <span className="font-mono text-3xl font-bold text-white">14.2<span className="text-zinc-600 text-lg">k</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">False Positive Rate</span>
                            <span className="font-mono text-3xl font-bold text-white">&lt;0.01<span className="text-zinc-600 text-lg">%</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">PII Redacted</span>
                            <span className="font-mono text-3xl font-bold text-orwell-500">2.4<span className="text-orwell-800 text-lg">M</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Latency Overhead</span>
                            <span className="font-mono text-3xl font-bold text-green-500">8<span className="text-green-900 text-lg">ms</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Scroll-telling */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-4">The Defense Pipeline</h2>
                        <p className="text-zinc-400">How Orwell secures every interaction.</p>
                    </div>

                    <div className="relative border-l border-zinc-800 ml-6 md:ml-0 space-y-16">

                        {/* Step 1 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">01. INPUT SCAN</span>
                                <h3 className="text-xl font-bold text-white mt-2">Injection & Jailbreak Detection</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Before the model sees a single token, Orwell scans the prompt for adversarial patterns, jailbreak attempts ("DAN"), and known exploits using a specialized BERT classifier.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">02. OUTPUT FILTER</span>
                                <h3 className="text-xl font-bold text-white mt-2">PII Redaction & Toxicity</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Generated text is analyzed in real-time. Sensitive data (emails, SSNs, credit cards) is automatically redacted or hashed. Toxic or biased content is filtered out based on your policy.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">03. VERIFICATION</span>
                                <h3 className="text-xl font-bold text-white mt-2">Hallucination Check</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Orwell cross-references the model's claims against your trusted knowledge base (Vector Memory). If a claim lacks citation or contradicts the source, it is flagged or rewritten.
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
                            <h2 className="text-3xl font-bold mb-6">Customizable Policy Engine</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Define exactly what your AI can and cannot say. Update rules instantly without retraining models.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Eye className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Real-time Observability</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Lock className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Data Loss Prevention (DLP)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <AlertTriangle className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Adversarial Defense</span>
                                </li>
                            </ul>
                        </div>

                        {/* Deployment UI Mockup */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orwell-500 to-purple-500"></div>
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-mono text-sm text-white font-bold">POLICY_CONFIGURATION</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">PII Redaction</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-4 bg-green-500/20 rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-white">Enabled</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Fact Checking</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-4 bg-green-500/20 rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-white">Strict</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Topic Whitelist</span>
                                    <span className="text-zinc-500 text-xs">finance, support, hr</span>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 mt-4 rounded-sm font-bold transition-colors">
                                    UPDATE POLICY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
