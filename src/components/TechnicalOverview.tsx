
import { Card, CardContent } from "@/components/ui/card";

const TechnicalOverview = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Risk Pro Technology Advantage
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              At Risk Pro, we don't just build AI — we make it accountable, secure, and context-smart.
            </p>
          </div>
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                  <p className="text-slate-300">Built with privacy and data protection as core principles</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High Performance</h3>
                  <p className="text-slate-300">Optimized for speed and scalability in production environments</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                  <p className="text-slate-300">Designed with enterprise-grade risk management and compliance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalOverview;
