import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import NewToConsortiumSection from "@/components/NewToConsortiumSection";
import CredentialsSection from "@/components/CredentialsSection";
import RepresentativesSection from "@/components/RepresentativesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import Simulator from "@/components/Simulator";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onSimulateClick={scrollToSimulator} />
        <CategoriesSection onContractClick={scrollToSimulator} />
        <NewToConsortiumSection onCtaClick={scrollToSimulator} />
        <CredentialsSection />
        <RepresentativesSection onCtaClick={scrollToSimulator} />
        <StatsSection />
        <AboutSection onCtaClick={scrollToSimulator} />
        <Simulator />
        <BenefitsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
