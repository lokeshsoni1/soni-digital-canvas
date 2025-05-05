
import { useState, useEffect } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, Palette } from "lucide-react";

type Theme = "dark" | "light" | "high-contrast" | "solarized" | "cyberpunk" | "minimal" | "sepia" | "system";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
      applyThemeStyles(storedTheme);
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      applyThemeStyles("dark");
    }
  }, []);
  
  // Handle theme change
  const changeTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("dark", "light", "high-contrast", "solarized", "cyberpunk", "minimal", "sepia");
    
    // Add new theme class if not system
    if (newTheme !== "system") {
      root.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
      applyThemeStyles(newTheme);
    } else {
      // Handle system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      localStorage.removeItem("theme");
      setTheme(systemTheme);
      applyThemeStyles(systemTheme);
    }
  };
  
  // Apply theme-specific CSS custom properties
  const applyThemeStyles = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    switch (selectedTheme) {
      case "dark":
        root.style.setProperty('--primary-hue', '240');
        root.style.setProperty('--primary-saturation', '60%');
        root.style.setProperty('--accent-hue', '260');
        break;
      case "light":
        root.style.setProperty('--primary-hue', '220');
        root.style.setProperty('--primary-saturation', '50%');
        root.style.setProperty('--accent-hue', '280');
        break;
      case "high-contrast":
        root.style.setProperty('--primary-hue', '60');
        root.style.setProperty('--primary-saturation', '100%');
        root.style.setProperty('--accent-hue', '60');
        // Set high contrast specific variables
        root.style.setProperty('--background', '0 0% 0%');
        root.style.setProperty('--foreground', '60 100% 50%');
        break;
      case "solarized":
        root.style.setProperty('--primary-hue', '180');
        root.style.setProperty('--primary-saturation', '45%');
        root.style.setProperty('--accent-hue', '45');
        break;
      case "cyberpunk":
        root.style.setProperty('--primary-hue', '315');
        root.style.setProperty('--primary-saturation', '100%');
        root.style.setProperty('--accent-hue', '195');
        // Set cyberpunk specific variables
        root.style.setProperty('--background', '260 85% 12%');
        root.style.setProperty('--foreground', '315 100% 90%');
        break;
      case "minimal":
        root.style.setProperty('--primary-hue', '0');
        root.style.setProperty('--primary-saturation', '0%');
        root.style.setProperty('--accent-hue', '0');
        break;
      case "sepia":
        root.style.setProperty('--primary-hue', '35');
        root.style.setProperty('--primary-saturation', '40%');
        root.style.setProperty('--accent-hue', '30');
        // Set sepia specific variables
        root.style.setProperty('--background', '35 35% 95%');
        root.style.setProperty('--foreground', '35 35% 15%');
        break;
      case "system":
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.style.setProperty('--primary-hue', isDark ? '240' : '220');
        root.style.setProperty('--primary-saturation', isDark ? '60%' : '50%');
        root.style.setProperty('--accent-hue', isDark ? '260' : '280');
        break;
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-all">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        <DropdownMenuItem onClick={() => changeTheme("dark")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#1A1F2C] border border-white/20"></div> 
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("light")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#F1F0FB] border border-black/20"></div>
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("high-contrast")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-black border border-yellow-400"></div>
          <span>High Contrast</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("solarized")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#FDF6E3] border border-[#2AA198]"></div>
          <span>Solarized</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("cyberpunk")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#120458] border border-[#FE53BB]"></div>
          <span>Cyberpunk</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("minimal")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-white border border-black"></div>
          <span>Minimal</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("sepia")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#FFF1E0] border border-[#704214]"></div>
          <span>Sepia</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("system")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <Laptop size={16} />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
