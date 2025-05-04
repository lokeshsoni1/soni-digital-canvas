
import { Code, FileInput } from "lucide-react";

export default function Freelance() {
  return (
    <section id="freelance" className="py-20 bg-secondary/20">
      <div className="container-custom">
        <h2 className="section-title">Freelance Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-base hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <FileInput className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Data Entry</h3>
              <p className="text-muted-foreground mb-6">
                I provide both manual and automated data entry services customized to the unique needs of each client. With attention to detail and quick turnaround times, I ensure accurate and efficient data organization.
              </p>
              
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Manual data input and formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Document digitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Data cleaning and organization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Spreadsheet management</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-base hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                <Code className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Online UI Editing</h3>
              <p className="text-muted-foreground mb-6">
                I specialize in editing and optimizing web interfaces using modern design tools like Figma, Canva, and CSS frameworks. Creating clean, intuitive, and responsive user experiences is my passion.
              </p>
              
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>UI component design and optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Responsive layout refinement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Design system implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Prototyping and interaction design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
