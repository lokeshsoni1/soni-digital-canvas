
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar } from "lucide-react";

export default function BindraResume() {
  return (
    <section id="resume" className="py-20 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="flex items-center text-xl font-bold mb-6 text-primary">
            <GraduationCap className="mr-2 h-5 w-5" /> Education
          </h3>
          
          <div className="space-y-6">
            <div className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h4 className="text-lg font-semibold">B.Tech Computer Science & Engineering</h4>
                <span className="flex items-center text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <Calendar className="mr-1 h-3.5 w-3.5" /> 2024 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2">Dronacharya College of Engineering</p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Science and Engineering, focusing on
                learning modern software development, data structures, algorithms, and web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
