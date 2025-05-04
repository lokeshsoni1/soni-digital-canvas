
import { useState, useEffect } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Palette, SunMoon } from "lucide-react";

type Theme = "dark" | "light" | "blue" | "green" | "purple" | "minimal" | "elegant" | "system";

export function BindraThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const storedTheme = localStorage.getItem("bindra-theme") as Theme | null;
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
    localStorage.setItem("bindra-theme", newTheme);
    setTheme(newTheme);
  };

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove("dark", "light", "blue", "green", "purple", "minimal", "elegant");
    
    // Add new theme class if not system
    if (selectedTheme !== "system") {
      root.classList.add(selectedTheme);
    } else {
      // Handle system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    }

    // Apply theme-specific CSS variables
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
      case "blue":
        root.style.setProperty('--primary-hue', '210');
        root.style.setProperty('--primary-saturation', '70%');
        root.style.setProperty('--accent-hue', '230');
        break;
      case "green":
        root.style.setProperty('--primary-hue', '140');
        root.style.setProperty('--primary-saturation', '60%');
        root.style.setProperty('--accent-hue', '160');
        break;
      case "purple":
        root.style.setProperty('--primary-hue', '270');
        root.style.setProperty('--primary-saturation', '70%');
        root.style.setProperty('--accent-hue', '290');
        break;
      case "minimal":
        root.style.setProperty('--primary-hue', '200');
        root.style.setProperty('--primary-saturation', '10%');
        root.style.setProperty('--accent-hue', '200');
        break;
      case "elegant":
        root.style.setProperty('--primary-hue', '340');
        root.style.setProperty('--primary-saturation', '50%');
        root.style.setProperty('--accent-hue', '20');
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
          <SunMoon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in w-48">
        <div className="px-2 py-2 text-sm font-medium text-center border-b">Select Theme</div>
        <DropdownMenuItem onClick={() => changeTheme("dark")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#151822] border border-white/20"></div> 
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("light")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#F5F7FA] border border-black/10"></div>
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("blue")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#0A192F] border border-blue-400/40"></div>
          <span>Blue</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("green")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#0F291E] border border-green-400/40"></div>
          <span>Green</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("purple")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#1A1528] border border-purple-400/40"></div>
          <span>Purple</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("minimal")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-white border border-gray-300"></div>
          <span>Minimal</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("elegant")} className="flex items-center gap-2 cursor-pointer hover:bg-primary/10">
          <div className="w-5 h-5 rounded-full bg-[#1D1D1D] border border-rose-400/40"></div>
          <span>Elegant</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
