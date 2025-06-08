
import { Card } from "@/components/ui/card";

const WhatIsMCP = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            What is the MCP Server?
          </h2>
          <Card className="p-8 md:p-12 bg-white shadow-xl border-0">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6">
              The Model Context Protocol (MCP) is a <span className="font-semibold text-blue-600">smart memory layer</span> for AI systems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It helps your AI remember important context between interactions — like user preferences, past conversations, or system states — so your applications can deliver smarter, more human-like responses.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMCP;
