import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
