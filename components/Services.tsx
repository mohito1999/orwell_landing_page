import React from 'react';
import { CheckCircle2, Users, Wrench, Terminal } from 'lucide-react';

const ServiceCard = ({ title, desc, icon: Icon }: any) => (
  <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-orwell-500/50 transition-colors group">
    <div className="mb-6 inline-block p-3 bg-zinc-950 border border-zinc-800 group-hover:bg-orwell-500 group-hover:text-black transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{desc}</p>
    <ul className="space-y-2">
      <li className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
        <CheckCircle2 className="w-3 h-3 text-orwell-500" />
        <span>Included in Enterprise SLA</span>
      </li>
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">BESPOKE INTELLIGENCE. <br />DELIVERED.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Generic models fail in production. Our Forward Deployed Engineers work alongside your team to architect, fine-tune, and deploy agents that solve <span className="text-zinc-200 font-medium">your</span> specific problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Strategic Implementation"
            desc="We don't just hand you an API key. We map your workflows, identify high-value use cases, and architect the entire intelligence layer."
            icon={Terminal}
          />
          <ServiceCard
            title="Domain-Specific Fine-Tuning"
            desc="We take open weights (Qwen, Kimi) and inject your DNA. Your jargon, your compliance rules, your tone—baked into the model weights."
            icon={Wrench}
          />
          <ServiceCard
            title="Operational Sovereignty"
            desc="We set up the 'Orwell Stack' on your metal or your VPC. You own the weights, the logs, and the hardware. We just keep it running."
            icon={Users}
          />
        </div>
      </div>
    </section>
  );
};