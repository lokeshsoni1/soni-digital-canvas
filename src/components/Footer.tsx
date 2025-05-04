
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-poppins">
              <span className="text-gradient">Lokesh.dev</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by Lokesh Soni | &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
