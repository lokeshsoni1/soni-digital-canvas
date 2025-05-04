
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

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Calculator using Python",
      description: "A basic calculator with GUI built using Python's Tkinter library that performs arithmetic operations with a clean interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["Python", "Tkinter", "GUI"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A fully responsive personal portfolio website built with modern web technologies showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Milk Planner",
      description: "A smart dairy tracking application that helps users manage milk deliveries and consumption patterns.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      tags: ["React", "Tailwind CSS", "Local Storage"],
      github: "#",
      demo: "#"
    }
  ];
  
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = useCallback(() => {
    setVisibleProjects((prev) => prev + 3);
  }, []);
  
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div 
              key={project.id} 
              className="card-base group hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 overflow-hidden rounded-md relative mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="icon" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="icon" variant="default" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-xs px-2 py-1 rounded text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
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
            <Button onClick={loadMore} variant="outline">Load More Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
}
