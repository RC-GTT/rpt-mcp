
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Personalized AI",
    description: "Make your AI remember user preferences and deliver tailored experiences"
  },
  {
    title: "No Repetition",
    description: "Avoid asking the same questions twice with persistent context memory"
  },
  {
    title: "Coherent Sessions",
    description: "Keep conversations flowing naturally across time and devices"
  },
  {
    title: "Enhanced Trust",
    description: "Boost user confidence with consistent, context-aware AI interactions"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Why Use MCP?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transform your AI from stateless to stateful, creating more meaningful user experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
