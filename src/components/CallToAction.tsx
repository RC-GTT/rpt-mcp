
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to make your AI smarter?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the future of context-aware AI. Get started with our MCP Server today and transform how your applications understand and remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-lg transition-all hover:scale-105">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-500">
                Questions? Email us at <span className="text-blue-600 font-semibold">hello@riskprotech.com</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
