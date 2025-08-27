import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AITracking from "@/components/AITracking";
import DeveloperQuickstart from "@/components/DeveloperQuickstart";
import ClientManagement from "@/components/ClientManagement";
import LogoSection from "@/components/LogoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <Hero />
      <Features />
      <AITracking />
      <DeveloperQuickstart />
      <ClientManagement />
      <LogoSection />
      <Footer />
    </div>
  );
};

export default Index;