
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
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
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
    } else {
      // Handle system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      localStorage.removeItem("theme");
      setTheme(systemTheme);
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
