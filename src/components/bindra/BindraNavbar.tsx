
import { useState, useEffect } from "react";
import { BindraThemeSwitcher } from "./BindraThemeSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Freelance", href: "#freelance" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

export default function BindraNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll event for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle smooth scrolling for nav links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-40 transition-all duration-300 ${
      scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold font-poppins relative z-10">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bindra Digital Canvas
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-2 py-1 transition-all duration-200 hover:text-primary ${
                    activeSection === link.href.substring(1) 
                      ? "text-primary font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                      : "text-foreground/80"
                  }`}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <BindraThemeSwitcher />
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <BindraThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-30 bg-background/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center pt-16">
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-xl ${activeSection === link.href.substring(1) ? "text-primary font-medium" : "text-foreground/80"}`}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
