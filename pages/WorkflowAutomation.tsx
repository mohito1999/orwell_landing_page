import React, { useState } from 'react';
import { FileText, Database, Cog, CheckCircle, ArrowRight, Mail, Upload, Server, Layers, Zap, Search } from 'lucide-react';

export function WorkflowAutomation() {
    const [activeUseCase, setActiveUseCase] = useState(0);

    const useCases = [
        {
            title: "Document Processing",
            description: "Automatically ingest invoices, contracts, and forms. Extract key data and sync it to your ERP or CRM.",
            stats: "99% Extraction Accuracy",
            graph: [
                { label: "Ingest PDF/Email", icon: Upload, color: "text-zinc-400", bg: "bg-zinc-400/10", border: "border-zinc-400/20" },
                { label: "OCR & Extraction", icon: Search, color: "text-orwell-500", bg: "bg-orwell-500/10", border: "border-orwell-500/20" },
                { label: "Validate Data", icon: CheckCircle, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                { label: "Sync to ERP", icon: Database, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" }
            ]
        },
        {
            title: "Employee Onboarding",
            description: "Orchestrate the entire provisioning process: account creation, hardware requests, and training modules.",
            stats: "Zero-Touch Provisioning",
            graph: [
                { label: "New Hire Trigger", icon: Users, color: "text-zinc-400", bg: "bg-zinc-400/10", border: "border-zinc-400/20" },
                { label: "Create Accounts", icon: Server, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
                { label: "Assign Hardware", icon: Cog, color: "text-orwell-500", bg: "bg-orwell-500/10", border: "border-orwell-500/20" },
                { label: "Send Welcome Email", icon: Mail, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" }
            ]
        },
        {
            title: "IT Helpdesk",
            description: "Auto-resolve Tier 1 IT tickets like password resets, software access, and wifi troubleshooting.",
            stats: "Instant Resolution",
            graph: [
                { label: "Ticket Created", icon: FileText, color: "text-zinc-400", bg: "bg-zinc-400/10", border: "border-zinc-400/20" },
                { label: "Diagnose Issue", icon: Zap, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                { label: "Execute Script", icon: Layers, color: "text-orwell-500", bg: "bg-orwell-500/10", border: "border-orwell-500/20" },
                { label: "Close Ticket", icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-20">
            {/* Hero Section */}
            <section className="py-24 px-6 border-b border-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orwell-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orwell-500/10 border border-orwell-500/20 rounded-sm">
                                <Cog className="w-6 h-6 text-orwell-500" />
                            </div>
                            <span className="text-orwell-500 font-mono text-sm tracking-wider uppercase">Workflow Automation</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            Ops on Autopilot. <br />
                            <span className="text-orwell-500"> Efficiency Unlocked.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                            Eliminate manual data entry and repetitive admin tasks. Let AI agents handle your documents, onboarding, and internal workflows.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-orwell-500 text-white px-8 py-4 font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono flex items-center gap-2 group">
                                Automate Workflows <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all rounded-sm font-mono">
                                View Integrations
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative h-[400px] hidden lg:flex items-center justify-center">
                        <div className="absolute inset-0 bg-orwell-500/5 blur-3xl rounded-full"></div>
                        <div className="relative z-10 w-64 h-64 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 grid-bg opacity-20"></div>
                            <Layers className="w-32 h-32 text-orwell-500 opacity-80" />

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 bg-zinc-950 border border-zinc-800 p-4 rounded-sm shadow-xl animate-pulse">
                                <FileText className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-zinc-950 border border-zinc-800 p-4 rounded-sm shadow-xl">
                                <Database className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 bg-zinc-900/30 border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Manual Trap</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Your team was hired to think, not to copy-paste data between spreadsheets.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                                <FileText className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Data Entry Fatigue</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Manual data entry is slow, error-prone, and soul-crushing. It's the #1 cause of employee dissatisfaction in ops roles.
                            </p>
                        </div>
                        <div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                                <Zap className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Process Bottlenecks</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Simple approvals wait days in email inboxes. Automating handoffs reduces cycle times by 80%.
                            </p>
                        </div>
                        <div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                                <Server className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Shadow IT</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                When processes are broken, employees find unsafe workarounds. Centralized automation ensures compliance and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orchestrator Carousel */}
            <section className="py-24 bg-zinc-900/50 border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Orchestrate Your Operations</h2>
                        <p className="text-zinc-400">Select a workflow to see how Orwell streamlines your business.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Use Case List */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {useCases.map((useCase, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveUseCase(index)}
                                    className={`text-left p-6 border rounded-sm transition-all ${activeUseCase === index
                                        ? 'bg-zinc-900 border-orwell-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]'
                                        : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                                        }`}
                                >
                                    <h3 className={`font-bold text-lg mb-2 ${activeUseCase === index ? 'text-white' : 'text-zinc-400'}`}>
                                        {useCase.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">{useCase.description}</p>
                                    <div className="flex items-center gap-2 text-xs font-mono text-orwell-500">
                                        <Cog className="w-3 h-3" />
                                        {useCase.stats}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: Visual Graph */}
                        <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800 rounded-sm p-8 relative overflow-hidden flex items-center justify-center min-h-[500px]">
                            <div className="absolute inset-0 grid-bg opacity-30"></div>

                            {/* Animated Graph Nodes */}
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-center">
                                {useCases[activeUseCase].graph.map((node, i) => (
                                    <React.Fragment key={i}>
                                        {/* Node */}
                                        <div className={`flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500 delay-${i * 100} fill-mode-forwards`}>
                                            <div className={`w-20 h-20 rounded-sm ${node.bg} ${node.border} border flex items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform`}>
                                                <node.icon className={`w-8 h-8 ${node.color}`} />
                                                {/* Pulse Effect for active node look */}
                                                <div className={`absolute inset-0 ${node.bg} opacity-0 group-hover:opacity-100 transition-opacity blur-lg`}></div>
                                            </div>
                                            <span className="text-xs font-mono text-zinc-400 text-center max-w-[100px]">{node.label}</span>
                                        </div>

                                        {/* Connector Arrow (except last item) */}
                                        {i < useCases[activeUseCase].graph.length - 1 && (
                                            <div className="hidden md:flex flex-1 h-px bg-zinc-800 relative w-12 shrink-0">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orwell-500 to-transparent animate-pulse"></div>
                                            </div>
                                        )}
                                        {/* Mobile Connector */}
                                        {i < useCases[activeUseCase].graph.length - 1 && (
                                            <div className="md:hidden w-px h-12 bg-zinc-800 relative">
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orwell-500 to-transparent animate-pulse"></div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Streamline Your Ops?</h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Stop working harder. Start working smarter with Orwell's intelligent automation.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="bg-orwell-500 text-white px-10 py-5 text-lg font-bold hover:bg-orwell-600 transition-all rounded-sm font-mono w-full md:w-auto">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Missing icon import fix
import { Users } from 'lucide-react';
