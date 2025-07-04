
import { useState, useEffect, useRef } from "react";
import { 
  Code2, Figma, FileCode, GitBranch, Database, 
  Github, Palette, Film, PenTool, Coffee, Zap 
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  description: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { 
      name: "HTML", 
      icon: <FileCode className="h-5 w-5" />, 
      level: 80, 
      color: "from-orange-400 to-red-500",
      description: "Strong foundation in HTML5 and semantic markup."
    },
    { 
      name: "CSS", 
      icon: <Palette className="h-5 w-5" />, 
      level: 50, 
      color: "from-blue-400 to-indigo-500",
      description: "Basic styling with CSS3 and responsive design."
    },
    { 
      name: "JavaScript", 
      icon: <Code2 className="h-5 w-5" />, 
      level: 45, 
      color: "from-yellow-400 to-yellow-600",
      description: "Learning JavaScript fundamentals and ES6+ features."
    },
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      level: 55, 
      color: "from-gray-700 to-gray-900",
      description: "Basic version control and repository management."
    },
    { 
      name: "Java", 
      icon: <Coffee className="h-5 w-5" />, 
      level: 75, 
      color: "from-orange-600 to-red-600",
      description: "Learning Java basics and object-oriented programming."
    },
    { 
      name: "Swift", 
      icon: <Zap className="h-5 w-5" />, 
      level: 40, 
      color: "from-orange-500 to-red-500",
      description: "Beginning iOS development with Swift."
    },
    { 
      name: "SQL", 
      icon: <Database className="h-5 w-5" />, 
      level: 45, 
      color: "from-blue-500 to-purple-500",
      description: "Basic database queries and design."
    },
    { 
      name: "Git", 
      icon: <GitBranch className="h-5 w-5" />, 
      level: 50, 
      color: "from-orange-600 to-red-600",
      description: "Learning version control basics."
    },
    { 
      name: "Figma", 
      icon: <Figma className="h-5 w-5" />, 
      level: 55, 
      color: "from-purple-500 to-pink-500",
      description: "Basic UI/UX design and prototyping."
    },
    { 
      name: "UI/UX Design", 
      icon: <PenTool className="h-5 w-5" />, 
      level: 50, 
      color: "from-pink-500 to-rose-500",
      description: "Learning design principles and user experience."
    },
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
    <section ref={sectionRef} id="skills" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`h-full flex flex-col items-center p-6 bg-background border border-secondary shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl ${
                hoveredSkill === skill.name ? 'translate-y-[-100%]' : 'translate-y-0'
              }`}>
                <div className={`skill-icon-wrapper bg-gradient-to-br ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2">{skill.name}</h3>
                
                <div className="relative w-full h-2 bg-secondary/50 rounded-full overflow-hidden mt-2">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <span className="text-sm font-medium mt-1">{skill.level}%</span>
              </div>
              
              {/* Hover state content */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} text-white p-6 flex flex-col justify-center items-center rounded-xl transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <div className="w-12 h-1 bg-white rounded-full mb-3"></div>
                <p className="text-center text-sm">{skill.description}</p>
                <div className="mt-3 font-bold text-xl">{skill.level}%</div>
                <div className="relative w-3/4 h-2 bg-white/30 rounded-full overflow-hidden mt-2">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="mt-2 text-xs">
                  {skill.level >= 90 ? 'Expert Level' : 
                   skill.level >= 80 ? 'Advanced Level' : 
                   skill.level >= 70 ? 'Intermediate Level' : 
                   'Basic Understanding'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
