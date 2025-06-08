
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, HealthTech Solutions",
    company: "MediCare AI",
    content: "Risk Pro's MCP Server transformed our patient interaction system. Our AI now remembers patient preferences and medical history across sessions, making consultations feel more personal and efficient.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "FinanceBot Inc",
    content: "Integration was incredibly smooth. Within days, our customer service bot went from forgetting everything to providing contextual, intelligent responses. Our customer satisfaction scores jumped 40%.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Emily Watson",
    role: "AI Research Director",
    company: "University Medical Center",
    content: "The security and privacy features are exactly what we needed for healthcare applications. The MCP Server handles sensitive context data with enterprise-grade protection.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "James Liu",
    role: "Product Manager",
    company: "RetailAI Corp",
    content: "Our e-commerce AI assistant now remembers customer preferences and shopping history. Sales conversions increased by 35% since implementing Risk Pro's MCP technology.",
    rating: 5,
    avatar: "JL"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how organizations are transforming their AI applications with our MCP Server
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-lg px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-slate-600 text-sm">Uptime</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-slate-600 text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">40%</div>
              <div className="text-slate-600 text-sm">Avg. Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
