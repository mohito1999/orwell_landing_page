import React, { useState, useEffect } from 'react';
import { FileText, Search, Download, ArrowRight, Activity, Database, Shield, Clock, Terminal, AlertCircle, CheckCircle } from 'lucide-react';

export function AuditLogging() {
    const [logs, setLogs] = useState<string[]>([]);

    // Simulate live log streaming
    useEffect(() => {
        const possibleLogs = [
            `[INFO] 2024-11-23T10:42:01Z | agent_id="sales_bot_01" | action="tool_call" | tool="calendar_api" | status="success"`,
            `[INFO] 2024-11-23T10:42:02Z | agent_id="support_agent_04" | action="retrieval" | query="refund_policy" | latency="12ms"`,
            `[WARN] 2024-11-23T10:42:03Z | agent_id="analyst_v2" | action="guardrail_check" | flag="pii_detected" | redacted=true`,
            `[INFO] 2024-11-23T10:42:04Z | agent_id="sales_bot_01" | action="response_gen" | model="llama-3-70b" | tokens=450`,
            `[INFO] 2024-11-23T10:42:05Z | system="orchestrator" | event="autoscaling" | replicas=4 | region="us-east-1"`
        ];

        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [...prev, possibleLogs[index]];
                if (newLogs.length > 6) newLogs.shift(); // Keep only last 6 logs
                return newLogs;
            });
            index = (index + 1) % possibleLogs.length;
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
                            <FileText className="w-4 h-4 text-orwell-500" />
                            <span className="text-xs font-mono text-orwell-500 uppercase tracking-wider">Immutable Audit Logs</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            The Black Box <br />
                            <span className="text-orwell-500">Recorder.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                            Complete visibility into every interaction. Orwell captures every prompt, tool call, and system event in an immutable, searchable ledger. Compliance is built-in, not an afterthought.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orwell-500 text-white px-8 py-4 font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono flex items-center gap-2 group">
                                Explore Logs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all rounded-sm font-mono">
                                Export Options
                            </button>
                        </div>
                    </div>

                    {/* Right: Live Log Widget */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-orwell-500/5 blur-3xl rounded-full"></div>
                        <div className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-lg p-8 shadow-2xl">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-orwell-500" />
                                    <span className="font-mono text-sm text-zinc-300">LIVE_EVENT_STREAM</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-mono text-xs text-green-500">RECORDING</span>
                                </div>
                            </div>

                            {/* Log Stream Visualization */}
                            <div className="font-mono text-xs space-y-3 min-h-[200px]">
                                {logs.map((log, i) => (
                                    <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300 border-l-2 border-zinc-800 pl-3 py-1">
                                        <span className={log.includes("[WARN]") ? "text-yellow-500" : "text-zinc-400"}>
                                            {log}
                                        </span>
                                    </div>
                                ))}
                                {logs.length === 0 && (
                                    <div className="text-zinc-600 italic">Waiting for events...</div>
                                )}
                                <div className="h-4 w-2 bg-orwell-500 animate-pulse inline-block ml-3"></div>
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
                            <span className="font-mono text-xs text-zinc-500 uppercase">Retention Policy</span>
                            <span className="font-mono text-3xl font-bold text-white">365<span className="text-zinc-600 text-lg">days</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Ingestion Rate</span>
                            <span className="font-mono text-3xl font-bold text-white">50<span className="text-zinc-600 text-lg">k/sec</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Query Speed</span>
                            <span className="font-mono text-3xl font-bold text-orwell-500">&lt;1<span className="text-orwell-800 text-lg">s</span></span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-xs text-zinc-500 uppercase">Compliance</span>
                            <span className="font-mono text-3xl font-bold text-green-500">SOC2<span className="text-green-900 text-lg">Type II</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Scroll-telling */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold mb-4">The Audit Pipeline</h2>
                        <p className="text-zinc-400">From raw event to actionable insight.</p>
                    </div>

                    <div className="relative border-l border-zinc-800 ml-6 md:ml-0 space-y-16">

                        {/* Step 1 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">01. CAPTURE</span>
                                <h3 className="text-xl font-bold text-white mt-2">Full Fidelity Tracing</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    We don't just log the output. We capture the entire context: system prompts, user inputs, tool parameters, latency metrics, and token usage for every single step.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">02. INDEX</span>
                                <h3 className="text-xl font-bold text-white mt-2">Structured Storage</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Logs are structured as JSON and indexed in real-time. This allows you to run complex SQL-like queries across petabytes of data instantly.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="md:absolute md:right-full md:mr-12 md:text-right md:w-64">
                                <span className="font-mono text-orwell-500 text-sm font-bold">03. ANALYZE</span>
                                <h3 className="text-xl font-bold text-white mt-2">Replay & Debug</h3>
                            </div>
                            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-orwell-500 rounded-full"></div>
                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm">
                                <p className="text-zinc-400 leading-relaxed">
                                    Step through any past interaction exactly as it happened. Visualize the agent's decision tree to debug failures or audit for compliance violations.
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
                            <h2 className="text-3xl font-bold mb-6">Integrate with Your SIEM</h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Don't create another data silo. Stream Orwell audit logs directly to your existing security infrastructure.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Splunk Forwarder</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Datadog / New Relic</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-zinc-300">Amazon S3 / CloudWatch</span>
                                </li>
                            </ul>
                        </div>

                        {/* Deployment UI Mockup */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orwell-500 to-purple-500"></div>
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-mono text-sm text-white font-bold">EXPORT_CONFIGURATION</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Destination</span>
                                    <div className="flex items-center gap-2">
                                        <Database className="w-4 h-4 text-blue-500" />
                                        <span className="text-white">Datadog HQ</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">API Key</span>
                                    <span className="text-zinc-500">****************4a92</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-zinc-900 rounded-sm border border-zinc-800">
                                    <span className="text-zinc-400">Log Level</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-orwell-500">INFO</span>
                                        <span className="text-white bg-zinc-800 px-2 py-0.5 rounded text-xs">+ WARN/ERROR</span>
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 mt-4 rounded-sm font-bold transition-colors">
                                    TEST CONNECTION
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
