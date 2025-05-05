
import { useState, useEffect } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Palette, Sun, Moon, Laptop } from "lucide-react";

type Theme = "dark" | "light" | "cyberpunk" | "tech" | "neon" | "minimal" | "gradient" | "system";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      setTheme("dark");
      applyTheme("dark");
    }
  }, []);
  
  // Handle theme change
  const changeTheme = (newTheme: Theme) => {
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  
  // Apply theme-specific CSS custom properties
  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("dark", "light", "cyberpunk", "tech", "neon", "minimal", "gradient");
    
    // Add new theme class if not system
    if (selectedTheme !== "system") {
      root.classList.add(selectedTheme);
    } else {
      // Handle system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      selectedTheme = systemTheme;
    }
    
    switch (selectedTheme) {
      case "dark":
        // Deep dark theme with blue accent
        root.style.setProperty('--background', '240 10% 3.9%');
        root.style.setProperty('--foreground', '0 0% 98%');
        root.style.setProperty('--primary-hue', '220');
        root.style.setProperty('--primary-saturation', '65%');
        root.style.setProperty('--accent-hue', '260');
        root.style.setProperty('--accent-saturation', '70%');
        root.style.setProperty('--card', '240 10% 3.9%');
        root.style.setProperty('--card-foreground', '0 0% 98%');
        root.style.setProperty('--accent-rgb', '147, 51, 234');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(220, 65%, 60%) 0%, hsl(260, 70%, 60%) 100%)');
        root.style.setProperty('--background-pattern', 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.02) 2%, transparent 0%)');
        root.style.setProperty('--pattern-size', '30px 30px');
        break;
      
      case "light":
        // Clean light theme with soft purple accents
        root.style.setProperty('--background', '0 0% 100%');
        root.style.setProperty('--foreground', '240 10% 3.9%');
        root.style.setProperty('--primary-hue', '250');
        root.style.setProperty('--primary-saturation', '60%');
        root.style.setProperty('--accent-hue', '280');
        root.style.setProperty('--accent-saturation', '65%');
        root.style.setProperty('--card', '0 0% 100%');
        root.style.setProperty('--card-foreground', '240 10% 3.9%');
        root.style.setProperty('--accent-rgb', '146, 86, 217');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(250, 60%, 65%) 0%, hsl(280, 65%, 65%) 100%)');
        root.style.setProperty('--background-pattern', 'linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)');
        root.style.setProperty('--pattern-size', '25px 25px');
        break;
        
      case "cyberpunk":
        // Cyberpunk theme with neon colors
        root.style.setProperty('--background', '260 15% 8%');
        root.style.setProperty('--foreground', '180 100% 75%');
        root.style.setProperty('--primary-hue', '315');
        root.style.setProperty('--primary-saturation', '100%');
        root.style.setProperty('--accent-hue', '195');
        root.style.setProperty('--accent-saturation', '100%');
        root.style.setProperty('--card', '260 25% 12%');
        root.style.setProperty('--card-foreground', '180 100% 80%');
        root.style.setProperty('--accent-rgb', '236, 72, 153');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(315, 100%, 60%) 0%, hsl(195, 100%, 50%) 100%)');
        root.style.setProperty('--background-pattern', 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0, rgba(255, 255, 255, 0.03) 1px, transparent 0, transparent 50%)');
        root.style.setProperty('--pattern-size', '10px 10px');
        break;
      
      case "tech":
        // Tech theme with blue and teal
        root.style.setProperty('--background', '210 50% 8%');
        root.style.setProperty('--foreground', '210 20% 98%');
        root.style.setProperty('--primary-hue', '200');
        root.style.setProperty('--primary-saturation', '80%');
        root.style.setProperty('--accent-hue', '160');
        root.style.setProperty('--accent-saturation', '80%');
        root.style.setProperty('--card', '210 45% 12%');
        root.style.setProperty('--card-foreground', '210 20% 98%');
        root.style.setProperty('--accent-rgb', '45, 212, 191');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(200, 80%, 50%) 0%, hsl(160, 80%, 50%) 100%)');
        root.style.setProperty('--background-pattern', 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 2px, transparent 0)');
        root.style.setProperty('--pattern-size', '30px 30px');
        break;
      
      case "neon":
        // Neon theme with vibrant colors
        root.style.setProperty('--background', '265 15% 7%');
        root.style.setProperty('--foreground', '0 0% 98%');
        root.style.setProperty('--primary-hue', '330');
        root.style.setProperty('--primary-saturation', '90%');
        root.style.setProperty('--accent-hue', '120');
        root.style.setProperty('--accent-saturation', '100%');
        root.style.setProperty('--card', '265 20% 10%');
        root.style.setProperty('--card-foreground', '0 0% 98%');
        root.style.setProperty('--accent-rgb', '47, 233, 128');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(330, 90%, 60%) 0%, hsl(120, 100%, 55%) 100%)');
        root.style.setProperty('--background-pattern', 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent)');
        root.style.setProperty('--pattern-size', '20px 20px');
        break;
      
      case "minimal":
        // Minimal monochrome theme
        root.style.setProperty('--background', '0 0% 98%');
        root.style.setProperty('--foreground', '0 0% 12%');
        root.style.setProperty('--primary-hue', '0');
        root.style.setProperty('--primary-saturation', '0%');
        root.style.setProperty('--accent-hue', '0');
        root.style.setProperty('--accent-saturation', '0%');
        root.style.setProperty('--card', '0 0% 100%');
        root.style.setProperty('--card-foreground', '0 0% 12%');
        root.style.setProperty('--accent-rgb', '82, 82, 82');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(0, 0%, 20%) 0%, hsl(0, 0%, 40%) 100%)');
        root.style.setProperty('--background-pattern', 'none');
        root.style.setProperty('--pattern-size', '0 0');
        break;
      
      case "gradient":
        // Gradient theme with vibrant colors
        root.style.setProperty('--background', '235 10% 12%');
        root.style.setProperty('--foreground', '0 0% 98%');
        root.style.setProperty('--primary-hue', '270');
        root.style.setProperty('--primary-saturation', '80%');
        root.style.setProperty('--accent-hue', '170');
        root.style.setProperty('--accent-saturation', '90%');
        root.style.setProperty('--card', '235 15% 15%');
        root.style.setProperty('--card-foreground', '0 0% 98%');
        root.style.setProperty('--accent-rgb', '52, 211, 153');
        root.style.setProperty('--gradient', 'linear-gradient(90deg, hsl(270, 80%, 60%) 0%, hsl(170, 90%, 50%) 100%)');
        root.style.setProperty('--background-pattern', 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.03) 2%, transparent 0%)');
        root.style.setProperty('--pattern-size', '40px 40px');
        break;
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-all">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in w-60">
        <div className="px-4 py-2 text-sm font-medium text-center border-b">Choose Theme Style</div>
        
        <DropdownMenuItem onClick={() => changeTheme("dark")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A1F2C] to-[#2E3748] border border-[#4A5568]/30 shadow-inner"></div> 
          <div>
            <span className="font-medium">Dark Mode</span>
            <p className="text-xs text-muted-foreground">Deep dark with blue accents</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("light")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] border border-[#CBD5E1]/30"></div>
          <div>
            <span className="font-medium">Light Mode</span>
            <p className="text-xs text-muted-foreground">Clean with purple accents</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("cyberpunk")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#120458] to-[#330044] border border-[#FE53BB]/30 shadow-[0_0_5px_#00fff3]"></div>
          <div>
            <span className="font-medium">Cyberpunk</span>
            <p className="text-xs text-muted-foreground">Neon futuristic theme</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("tech")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0F172A] to-[#164E63] border border-[#06B6D4]/30"></div>
          <div>
            <span className="font-medium">Tech Blue</span>
            <p className="text-xs text-muted-foreground">Technical & professional</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("neon")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A0933] to-[#290025] border border-[#FF00FF]/30 shadow-[0_0_5px_#2BFF88]"></div>
          <div>
            <span className="font-medium">Neon</span>
            <p className="text-xs text-muted-foreground">Vibrant neon colors</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("minimal")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#94A3B8]/30"></div>
          <div>
            <span className="font-medium">Minimal</span>
            <p className="text-xs text-muted-foreground">Clean monochrome design</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => changeTheme("gradient")} className="flex items-center gap-3 cursor-pointer hover:bg-primary/10 p-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4C1D95] to-[#059669] border border-[#8B5CF6]/30"></div>
          <div>
            <span className="font-medium">Gradient</span>
            <p className="text-xs text-muted-foreground">Rich colorful gradients</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
