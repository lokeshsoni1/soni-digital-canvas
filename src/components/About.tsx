
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 200); // Stagger the animations
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    // Observe all elements that should animate on scroll
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 
          ref={el => elementsRef.current[0] = el} 
          className="section-title reveal"
        >
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="reveal"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-xl rounded-full animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/37488469-dee4-40a6-b509-9ba432fbe7d0.png" 
                alt="Lokesh Soni" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg border-2 border-primary/10 relative z-10"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg z-20 animate-bounce-slow">
                CSE Student
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 
              ref={el => elementsRef.current[2] = el}
              className="text-2xl font-bold mb-4 reveal"
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lokesh Soni</span>
            </h3>
            
            <p 
              ref={el => elementsRef.current[3] = el}
              className="text-muted-foreground reveal"
            >
              I'm a first-year Computer Science and Engineering student at Dronacharya College passionate about web development, UI/UX design, and creating user-friendly digital experiences.
            </p>
            
            <p 
              ref={el => elementsRef.current[4] = el}
              className="text-muted-foreground reveal"
            >
              My journey in tech started with basic HTML and CSS, and has evolved to include modern frameworks and design principles. I enjoy solving problems and continuously learning new technologies.
            </p>
            
            <div 
              ref={el => elementsRef.current[5] = el}
              className="reveal"
            >
              <h4 className="font-bold text-lg mb-2">Areas of Interest:</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Video Editing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Mobile App Development
                </li>
              </ul>
            </div>
            
            <div 
              ref={el => elementsRef.current[6] = el}
              className="flex flex-wrap gap-4 pt-2 reveal"
            >
              <Button asChild className="group">
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button variant="outline" asChild className="group">
                <a href="#resume">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
