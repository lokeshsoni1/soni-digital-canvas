
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioLink({ to, text }: { to: string; text: string }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        variant="secondary" 
        className="group shadow-md hover:shadow-lg animate-pulse"
        onClick={() => window.location.href = to}
      >
        {text}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
