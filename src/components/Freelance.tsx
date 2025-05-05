
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseIcon, Monitor, Code, Palette, ArrowRightCircle } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function Freelance() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);

  const services: Service[] = [
    {
      icon: <BriefcaseIcon className="h-6 w-6" />,
      title: "Data Entry",
      description: "Providing efficient and accurate manual and automated data entry services for businesses and individuals.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Online UI Editing",
      description: "Optimizing web interfaces using modern design tools and CSS frameworks for better user experience.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Creating responsive and user-friendly websites with modern technologies and best practices.",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Crafting visually appealing interfaces with focus on usability and user experience.",
      color: "from-emerald-500 to-green-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 150);
            observer.unobserve(entry.target);
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
    <section ref={sectionRef} id="freelance" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent/5 rounded-full blur-2xl animate-float"></div>
        
        {/* Added animated particles */}
        <div className="hidden md:block">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="particle absolute rounded-full bg-primary/20"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-3xl font-bold mb-3 text-center reveal"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Freelance Services
          </span>
        </h2>
        
        <p 
          ref={el => elementsRef.current[1] = el}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 reveal"
        >
          Professional services offered with dedication to quality and client satisfaction
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => elementsRef.current[index + 2] = el}
              className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-500 group hover:border-primary/30 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white transform transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-secondary/20 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="ghost" size="sm" className="group">
                  Learn More
                  <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
