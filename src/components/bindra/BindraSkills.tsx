
import { useState, useEffect, useRef } from "react";
import { 
  Code2, FileCode, GitBranch, Database, 
  Layers, Palette, Server
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  description: string;
}

export default function BindraSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { 
      name: "HTML", 
      icon: <FileCode className="h-5 w-5" />, 
      level: 95, 
      color: "from-orange-400 to-red-500",
      description: "Expert in semantic HTML and accessibility features"
    },
    { 
      name: "CSS", 
      icon: <Palette className="h-5 w-5" />, 
      level: 90, 
      color: "from-blue-400 to-indigo-500",
      description: "Strong with CSS Grid, Flexbox, and animations"
    },
    { 
      name: "JavaScript", 
      icon: <Code2 className="h-5 w-5" />, 
      level: 85, 
      color: "from-yellow-400 to-yellow-600",
      description: "Proficient with ES6+ features and DOM manipulation"
    },
    { 
      name: "React", 
      icon: <Layers className="h-5 w-5" />, 
      level: 65, 
      color: "from-cyan-400 to-blue-500",
      description: "Familiar with hooks, context, and component architecture"
    },
    { 
      name: "Next.js", 
      icon: <Layers className="h-5 w-5" />, 
      level: 50, 
      color: "from-gray-600 to-gray-900",
      description: "Basic understanding of SSR and routing"
    },
    { 
      name: "Tailwind CSS", 
      icon: <Palette className="h-5 w-5" />, 
      level: 60, 
      color: "from-cyan-400 to-sky-500",
      description: "Comfortable with utility-first workflow"
    },
    { 
      name: "SQL", 
      icon: <Database className="h-5 w-5" />, 
      level: 70, 
      color: "from-blue-500 to-purple-500",
      description: "Experienced with database design and complex queries"
    },
    { 
      name: "Git", 
      icon: <GitBranch className="h-5 w-5" />, 
      level: 80, 
      color: "from-orange-600 to-red-600",
      description: "Proficient with branching, merging, and collaboration"
    },
    { 
      name: "Node.js", 
      icon: <Server className="h-5 w-5" />, 
      level: 55, 
      color: "from-green-500 to-green-700",
      description: "Learning backend development with Express"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:transform hover:scale-[1.02] hover:border-primary/30"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="relative w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
