import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const roles = ["Web Developer", "UI/UX Designer", "Video Editor", "CS Student"];
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

  // Add moving shapes animation
  useEffect(() => {
    const createMovingShapes = () => {
      const heroSection = document.getElementById('home');
      if (!heroSection) return;

      // Create floating elements
      const count = 8;
      const shapes = ['circle', 'square', 'triangle', 'dot'];
      const container = document.createElement('div');
      container.className = 'absolute inset-0 overflow-hidden pointer-events-none z-0';
      
      for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 60 + 20; // 20-80px
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 10; // 10-25s
        const delay = Math.random() * 5;
        
        shape.className = `absolute opacity-[0.03] z-0 ${
          shapeType === 'circle' ? 'rounded-full' : 
          shapeType === 'square' ? 'rounded-md' : 
          shapeType === 'triangle' ? 'triangle' : 'rounded-full scale-50'
        }`;
        
        if (shapeType === 'triangle') {
          shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.background = `rgba(var(--primary-rgb), 0.15)`;
        shape.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        container.appendChild(shape);
      }
      
      heroSection.appendChild(container);
    };
    
    createMovingShapes();
    
    // Clean up
    return () => {
      const heroSection = document.getElementById('home');
      const shapeContainer = heroSection?.querySelector('.absolute.inset-0.overflow-hidden');
      if (shapeContainer) {
        shapeContainer.remove();
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative bg-animate bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-xl animate-float-delay"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-2xl animate-pulse-slow-delay"></div>
        
        {/* Moving particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1 animate-fadeIn">
          <p className="text-accent font-medium mb-4">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
            Lokesh Soni
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
            <Button size="lg" className="group animate-bounce-slow" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center items-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-xl opacity-20 animate-spin-slow"></div>
              <img 
                src="/lovable-uploads/52f6e410-c612-43ca-a932-fc59eb00325c.png" 
                alt="Lokesh Soni" 
                className="w-64 h-64 object-cover rounded-full border-4 border-primary/20 shadow-xl relative z-10"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce-slow">
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
