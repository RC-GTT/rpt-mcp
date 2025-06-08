
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Contact, FileText, CircleUser } from "lucide-react";

const useCases = [
  {
    icon: MessageSquare,
    title: "AI Customer Service",
    description: "Bots that remember user history and provide personalized support experiences"
  },
  {
    icon: Contact,
    title: "Digital Health Assistants",
    description: "Healthcare AI that tracks patient context and medical history securely"
  },
  {
    icon: CircleUser,
    title: "Enterprise AI Systems",
    description: "Secure business AI with session awareness and compliance features"
  },
  {
    icon: FileText,
    title: "Content Assistants",
    description: "Writing and research tools that remember your preferences and context"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Use Cases
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how MCP can transform AI applications across industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full group-hover:bg-green-600 transition-colors duration-300">
                  <useCase.icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
