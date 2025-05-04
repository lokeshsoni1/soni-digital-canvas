
import { useState, useEffect, useRef } from "react";
import { 
  Code2, Figma, FileCode, GitBranch, Database, 
  Layers, Palette, Film, PenTool, Github 
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { name: "HTML", icon: <FileCode className="h-5 w-5" />, level: 90 },
    { name: "CSS", icon: <Palette className="h-5 w-5" />, level: 85 },
    { name: "JavaScript", icon: <Code2 className="h-5 w-5" />, level: 75 },
    { name: "React", icon: <Layers className="h-5 w-5" />, level: 70 },
    { name: "Next.js", icon: <Layers className="h-5 w-5" />, level: 65 },
    { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" />, level: 80 },
    { name: "SQL", icon: <Database className="h-5 w-5" />, level: 60 },
    { name: "Git", icon: <GitBranch className="h-5 w-5" />, level: 75 },
    { name: "Figma", icon: <Figma className="h-5 w-5" />, level: 85 },
    { name: "UI/UX Design", icon: <PenTool className="h-5 w-5" />, level: 80 },
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
    <section ref={sectionRef} id="skills" className="py-20 bg-secondary/20">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {skills.slice(0, 5).map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 p-1.5 rounded-md text-primary">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            {skills.slice(5).map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 p-1.5 rounded-md text-primary">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index + 5) * 0.1}s` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
