
import Hero from "@/components/Hero";
import WhatIsMCP from "@/components/WhatIsMCP";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import TechnicalOverview from "@/components/TechnicalOverview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatIsMCP />
      <Features />
      <Benefits />
      <UseCases />
      <TechnicalOverview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
