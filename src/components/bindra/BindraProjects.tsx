
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export default function BindraProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Calculator using Python",
      description: "A basic calculator with GUI built using Python's Tkinter library that performs arithmetic operations with a clean interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["Python", "Tkinter", "GUI"],
      demo: "https://lokeshhsoni.github.io/calculator/",
      github: "https://github.com/lokeshhsoni/python_calculator"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A fully responsive personal portfolio website built with modern web technologies showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      demo: "/bindra",
      github: "https://github.com/lokeshhsoni"
    },
    {
      id: 3,
      title: "Milk Planner",
      description: "A smart dairy tracking application that helps users manage milk deliveries and consumption patterns.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
      demo: "https://lokeshhsoni.github.io/milk_planner/",
      github: "https://github.com/lokeshhsoni/milk_planner"
    }
  ];
  
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = useCallback(() => {
    setVisibleProjects((prev) => prev + 3);
  }, []);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.id} 
              className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/30 flex flex-col h-full"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.demo && (
                      <Button size="icon" variant="default" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between gap-4 mt-auto">
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
