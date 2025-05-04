
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BindraHero() {
  const roles = ["Web Developer", "UI/UX Designer", "CS Student", "Problem Solver"];
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Implement the typing animation effect
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";
    
    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Delete text
        currentText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Type text
        currentText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }
      
      // Set typing speed
      let typeSpeed = isDeleting ? 80 : 150;
      
      // Move to next role when typing is complete
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to next role
        typeSpeed = 500; // Pause before typing new word
      }
      
      setTimeout(typeEffect, typeSpeed);
    };
    
    // Start the typing effect
    const timeout = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* Interactive animated background elements */}
        <div className="absolute w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-float-reverse"></div>
          <div className="absolute top-2/3 left-1/5 w-40 h-40 bg-secondary/20 rounded-full filter blur-2xl animate-pulse-slow"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute h-full w-full">
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
          <span className="bindra-particle"></span>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1 animate-fadeIn">
          <p className="text-accent font-medium mb-4">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
            Pankaj Bindra
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-6">
            I'm a{" "}
            <span className="text-primary">
              <span ref={textRef}></span>
              <span ref={cursorRef} className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-cursor"></span>
            </span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg">
            A passionate Computer Science student at Dronacharya College focused on creating accessible and user-friendly digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center items-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-64 h-64 rounded-full border-4 border-primary/20 shadow-xl overflow-hidden">
              <img 
                src="/lovable-uploads/3f064c13-752d-4896-ad16-0cc7b7ecbde0.png" 
                alt="Pankaj Bindra" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              <span>1+</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
        <span className="text-sm mt-2 text-muted-foreground">Scroll Down</span>
      </div>
    </section>
  );
}
