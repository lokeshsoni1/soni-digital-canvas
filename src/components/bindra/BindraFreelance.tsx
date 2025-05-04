
import { BriefcaseIcon, Monitor } from "lucide-react";

export default function BindraFreelance() {
  return (
    <section id="freelance" className="py-20 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Freelance Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data Entry</h3>
                <p className="text-muted-foreground">
                  Providing efficient and accurate manual and automated data entry 
                  services for businesses and individuals. Clean organization and 
                  formatting of data for optimal usability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Monitor className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Online UI Editing</h3>
                <p className="text-muted-foreground">
                  Optimizing web interfaces using modern design tools and CSS frameworks.
                  Creating responsive, user-friendly designs that enhance user experience
                  and engagement for your online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
