
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BindraNavbar from '../components/bindra/BindraNavbar';
import BindraHero from '../components/bindra/BindraHero';
import BindraAbout from '../components/bindra/BindraAbout';
import BindraSkills from '../components/bindra/BindraSkills';
import BindraProjects from '../components/bindra/BindraProjects';
import BindraFreelance from '../components/bindra/BindraFreelance';
import BindraTestimonials from '../components/bindra/BindraTestimonials';
import BindraResume from '../components/bindra/BindraResume';
import BindraContact from '../components/bindra/BindraContact';
import BindraFooter from '../components/bindra/BindraFooter';

const BindraPortfolio = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Show scroll button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-radial from-background via-background to-background/90">
      <BindraNavbar />
      
      <main className="flex-grow">
        <BindraHero />
        <BindraAbout />
        <BindraSkills />
        <BindraProjects />
        <BindraFreelance />
        <BindraTestimonials />
        <BindraResume />
        <BindraContact />
      </main>
      
      <BindraFooter />
      
      {/* Scroll to top button */}
      <Button
        variant="secondary"
        size="icon"
        className={`fixed bottom-8 right-8 rounded-full shadow-lg transition-all duration-300 z-20 ${
          showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default BindraPortfolio;
