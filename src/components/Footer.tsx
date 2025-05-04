
import { Heart, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-poppins">
              <span className="text-gradient">Lokesh's Portfolio</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/lokeshsoni1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/lokesh-soni-2b3b7034a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/lokesh.soni194/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> by Lokesh Soni | &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
