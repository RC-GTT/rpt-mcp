
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CircleCheck, FileText, Search } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Secure Context Storage",
    description: "Redis, SQLite, and other secure storage options for your AI context data"
  },
  {
    icon: Search,
    title: "Simple API",
    description: "Easy-to-use API to fetch, save, and clear context with minimal setup"
  },
  {
    icon: CircleCheck,
    title: "Fast Integration",
    description: "Works seamlessly with OpenAI, Claude, and other popular AI models"
  },
  {
    icon: FileText,
    title: "Developer Friendly",
    description: "Lightweight setup with comprehensive documentation and examples"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            MVP Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to add intelligent context awareness to your AI applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
