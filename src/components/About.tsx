
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Mail, MapPin } from "lucide-react";

export default function About() {
  const technologies = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", 
    "SQL", "Git", "Figma", "UI/UX Design"
  ];
  
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              Hello! My name is Lokesh Soni, and I love creating things that live on the internet.
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
                    className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="group mt-4">
              View Resume 
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div>
            <div className="card-base h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30">
                    <img 
                      src="/lovable-uploads/3f064c13-752d-4896-ad16-0cc7b7ecbde0.png"
                      alt="Lokesh Soni"
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
                    <p className="font-medium">Lokesh Soni</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">lokeshsoniroyal1@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Gurugram, Haryana, India</p>
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
