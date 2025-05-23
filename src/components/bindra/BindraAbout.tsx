
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin } from "lucide-react";

export default function BindraAbout() {
  const technologies = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", 
    "SQL", "Git", "UI/UX Design"
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              Hello! My name is Pankaj Bindra, and I love creating things that live on the internet.
            </p>
            
            <p>
              Fast-forward to today, I'm currently a first-year Computer Science and Engineering student at Dronacharya College. Along with web development, I specialize in video editing and UI/UX design using Figma. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Technologies I've been working with recently:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30">
                    <img 
                      src="/lovable-uploads/52f6e410-c612-43ca-a932-fc59eb00325c.png"
                      alt="Pankaj Bindra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">Pankaj Bindra</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">pankajbindrajjr@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Jhajjar, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
