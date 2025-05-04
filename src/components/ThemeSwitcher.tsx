
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
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeTheme("dark")} className="flex items-center gap-2">
          <Moon size={16} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("light")} className="flex items-center gap-2">
          <Sun size={16} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("high-contrast")} className="flex items-center gap-2">
          <Palette size={16} /> High Contrast
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("solarized")} className="flex items-center gap-2">
          <Palette size={16} /> Solarized
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("cyberpunk")} className="flex items-center gap-2">
          <Palette size={16} /> Cyberpunk
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("minimal")} className="flex items-center gap-2">
          <Palette size={16} /> Minimal
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("sepia")} className="flex items-center gap-2">
          <Palette size={16} /> Sepia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("system")} className="flex items-center gap-2">
          <Laptop size={16} /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
