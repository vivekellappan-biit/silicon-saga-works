import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import TechMarquee from "@/components/TechMarquee";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ExpertiseGrid />
    <PortfolioSection />
    <StatsSection />
    <TechMarquee />
    <Footer />
  </div>
);

export default Index;
