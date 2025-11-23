import React, { useState, useEffect } from 'react';
import { Database, Search, HardDrive, ArrowRight, FileText, Brain, Lock, Zap, Server } from 'lucide-react';

export function VectorMemory() {
    const [searchStep, setSearchStep] = useState(0);

    // Simulate search process
    useEffect(() => {
        const interval = setInterval(() => {
            setSearchStep((prev) => (prev + 1) % 4);
        }, 1500);
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
                            <Database className="w-4 h-4 text-orwell-500" />
                            <span className="text-xs font-mono text-orwell-500 uppercase tracking-wider">Vector Memory Engine</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            Total Recall <br />
                            <span className="text-orwell-500">For Your AI.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                            Give your agents infinite long-term memory. Our high-performance vector store ingests millions of documents, enabling sub-millisecond retrieval for RAG pipelines with perfect accuracy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orwell-500 text-white px-8 py-4 font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono flex items-center gap-2 group">
                                Initialize Index <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all rounded-sm font-mono">
                                API Reference
                            </button>
                        </div>
                    </div>

                    {/* Right: Live Memory Widget */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orwell-500/5 blur-3xl rounded-full"></div>
                        <div className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-lg p-8 shadow-2xl">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <HardDrive className="w-5 h-5 text-orwell-500" />
                                    <span className="font-mono text-sm text-zinc-300">INDEX_STATUS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-mono text-xs text-green-500">ONLINE</span>
                                </div>
                            </div>

                            {/* Search Visualization */}
                            <div className="flex flex-col gap-6">

                                {/* Search Bar Simulation */}
                                <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-sm flex items-center gap-3">
                                    <Search className={`w-4 h-4 ${searchStep >= 0 ? 'text-orwell-500' : 'text-zinc-500'}`} />
                                    <span className="font-mono text-sm text-zinc-300">
                                        {searchStep === 0 ? "Query: 'Q3 Financial Report'|" : "Query: 'Q3 Financial Report'"}
                                    </span>
                                </div>

                                {/* Memory Grid */}
                                <div className="grid grid-cols-8 gap-2 h-32 relative overflow-hidden">
                                    {[...Array(32)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-[1px] border transition-all duration-300 ${searchStep === 1 && Math.random() > 0.7 ? 'bg-orwell-500/50 border-orwell-500' :
                                                    searchStep === 2 && [3, 12, 28].includes(i) ? 'bg-orwell-500 border-orwell-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' :
                                                        'bg-zinc-900 border-zinc-800'
                                                }`}
                                        ></div>
                                    ))}
                                    {/* Scanning Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-orwell-500 shadow-[0_0_20px_rgba(249,115,22,1)] transition-all duration-1000 ${searchStep === 1 ? 'translate-y-32 opacity-100' : 'opacity-0'}`}></div>
                                </div>

                                {/* Results Log */}
                                <div className="space-y-2 font-mono text-xs">
                                    <div className={`flex justify-between items-center p-2 bg-zinc-900/50 border border-zinc-800 rounded-sm transition-opacity duration-300 ${searchStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-3 h-3 text-zinc-400" />
                                            <span className="text-white">finance_q3_final.pdf</span>
                                        </div>
                                        <span className="text-orwell-500">Score: 0.98</span>
                                    </div>
                                    <div className={`flex justify-between items-center p-2 bg-zinc-900/50 border border-zinc-800 rounded-sm transition-opacity duration-300 ${searchStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-3 h-3 text-zinc-400" />
                                            <span className="text-white">board_meeting_notes.txt</span>
                                        </div>
                                        <span className="text-orwell-500">Score: 0.85</span>
                                    </div>
                                </div>

                                {/* Status Footer */}
                                <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase pt-2 border-t border-zinc-800">
                                    <span>Latency: 12ms</span>
                                    <span>Shards: 4</span>
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
                            <span className="font-mono text-xs text-zinc-500 uppercase">Query Latency</span>
                            <span className="font-mono text-3xl font-bold text-white">&lt;20<span className="text-zinc-600 text-lg">ms</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Context Window</span>
                            <span className="font-mono text-3xl font-bold text-white">1M+<span className="text-zinc-600 text-lg">tokens</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Recall Accuracy</span>
                            <span className="font-mono text-3xl font-bold text-orwell-500">99.2<span className="text-orwell-800 text-lg">%</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Data Ingested</span>
                            <span className="font-mono text-3xl font-bold text-green-500">500<span className="text-green-900 text-lg">TB</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Scroll-telling */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-4">The RAG Pipeline</h2>
                        <p className="text-zinc-400">How Orwell turns raw data into actionable intelligence.</p>
                    </div>

                    <div className="relative border-l border-zinc-800 ml-6 md:ml-0 space-y-16">

                        {/* Step 1 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">01. INGESTION</span>
                                <h3 className="text-xl font-bold text-white mt-2">Universal Connectors</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Connect to Google Drive, Notion, Slack, or SQL databases. Orwell automatically parses PDFs, images (OCR), and text, chunking them into semantic segments.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">02. EMBEDDING</span>
                                <h3 className="text-xl font-bold text-white mt-2">Hybrid Search Index</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Data is embedded using state-of-the-art models and stored in a vector index. We combine dense vector search with sparse keyword search (BM25) for maximum accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">03. RETRIEVAL</span>
                                <h3 className="text-xl font-bold text-white mt-2">Context Injection</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    When an agent needs information, Orwell retrieves the most relevant chunks and dynamically injects them into the model's context window, ensuring grounded answers.
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
                            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Your data never leaves your infrastructure. The Vector Memory Engine is designed for strict compliance and data sovereignty.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Lock className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Role-Based Access Control (RBAC)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Server className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Self-Hosted / On-Premise</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">SOC2 & HIPAA Compliant</span>
                                </li>
                            </ul>
                        </div>

                        {/* Deployment UI Mockup */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orwell-500 to-purple-500"></div>
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-mono text-sm text-white font-bold">DATA_SOURCE_CONFIG</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Storage Backend</span>
                                    <span className="text-white">PostgreSQL (pgvector)</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Encryption</span>
                                    <span className="text-white">AES-256 (At Rest)</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Sync Frequency</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-orwell-500">Real-time</span>
                                        <span className="text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">Webhooks</span>
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 mt-4 rounded-sm font-bold transition-colors">
                                    CONNECT DATA SOURCE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
