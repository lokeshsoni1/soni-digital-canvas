
import { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Calculator using Python",
      description: "A basic calculator with GUI built using Python's Tkinter library that performs arithmetic operations with a clean interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["Python", "Tkinter", "GUI"],
      demo: "https://lokeshsoni1.github.io/python_calculator/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A fully responsive personal portfolio website built with modern web technologies showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      demo: "#"
    },
    {
      id: 3,
      title: "Milk Planner",
      description: "A smart dairy tracking application that helps users manage milk deliveries and consumption patterns.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      demo: "https://lokeshsoni1.github.io/milk_planner/"
    }
  ];

  const loadMore = useCallback(() => {
    setVisibleProjects((prev) => prev + 3);
  }, []);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe project cards
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => (projectRefs.current[index] = el)}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 opacity-0 translate-y-16"
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-4 group-hover:translate-y-0">
                  {project.demo && (
                    <Button size="icon" variant="default" asChild className="rounded-full shadow-lg hover:scale-110 transition-transform">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between gap-4 mt-6">
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1 group">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-10">
            <Button 
              onClick={loadMore} 
              variant="outline" 
              className="group hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Load More Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
