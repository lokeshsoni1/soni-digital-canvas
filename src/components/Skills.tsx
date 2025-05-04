
import { useState, useEffect, useRef } from "react";
import { 
  Code2, Figma, FileCode, GitBranch, Database, 
  Layers, Palette, Film, PenTool, Github 
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { name: "HTML", icon: <FileCode className="h-5 w-5" />, level: 95, color: "from-orange-400 to-red-500" },
    { name: "CSS", icon: <Palette className="h-5 w-5" />, level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "JavaScript", icon: <Code2 className="h-5 w-5" />, level: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: <Layers className="h-5 w-5" />, level: 70, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: <Layers className="h-5 w-5" />, level: 65, color: "from-gray-600 to-gray-900" },
    { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" />, level: 75, color: "from-cyan-400 to-sky-500" },
    { name: "SQL", icon: <Database className="h-5 w-5" />, level: 60, color: "from-blue-500 to-purple-500" },
    { name: "Git", icon: <GitBranch className="h-5 w-5" />, level: 80, color: "from-orange-600 to-red-600" },
    { name: "Figma", icon: <Figma className="h-5 w-5" />, level: 85, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", icon: <PenTool className="h-5 w-5" />, level: 80, color: "from-pink-500 to-rose-500" },
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
              className="skill-card group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex flex-col items-center p-6">
                <div className={`skill-icon-wrapper bg-gradient-to-br ${skill.color}`}>
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
              
              <div className="skill-card-overlay bg-gradient-to-br from-primary/80 to-accent/80">
                <div className="flex flex-col items-center justify-center h-full text-white p-4 text-center">
                  <h3 className="font-bold text-xl mb-2">{skill.name}</h3>
                  <div className="w-12 h-1 bg-white rounded-full mb-2"></div>
                  <p className="text-sm">
                    {skill.level >= 90 ? 'Expert Level' : 
                     skill.level >= 80 ? 'Advanced Level' : 
                     skill.level >= 70 ? 'Intermediate Level' : 
                     'Basic Understanding'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
