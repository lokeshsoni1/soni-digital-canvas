
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "अमित शर्मा",
      role: "वेब डेवलपर",
      content: "बहुत बेहतरीन काम किया लोकेश ने, समय पर डिलीवरी मिली और क्वालिटी शानदार थी।",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      name: "प्रिया गुप्ता",
      role: "स्टार्टअप फाउंडर",
      content: "UI डिज़ाइन देखकर क्लाइंट खुश हो गया। धन्यवाद लोकेश!",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 3,
      name: "विशाल जैन",
      role: "बिज़नेस एनालिस्ट",
      content: "Data entry का काम प्रोफेशनली और जल्दी पूरा किया गया। शानदार अनुभव।",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];
  
  // Auto slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        changeTestimonial((currentTestimonial + 1) % testimonials.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length, isAnimating]);
  
  const changeTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    
    setIsAnimating(true);
    setCurrentTestimonial(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with your transition duration
  };
  
  const handlePrev = () => {
    const newIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    changeTestimonial(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-[350px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0 scale-100 z-10' 
                    : index < currentTestimonial || (currentTestimonial === 0 && index === testimonials.length - 1)
                      ? 'opacity-0 -translate-x-full scale-95 z-0' 
                      : 'opacity-0 translate-x-full scale-95 z-0'
                }`}
              >
                <div className="bg-card h-full border border-border rounded-xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                  {/* Quote icon background */}
                  <Quote className="absolute top-6 right-6 h-32 w-32 text-primary/5 transform rotate-180" />
                  
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1 shadow">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl font-medium mb-4 italic relative">
                      "{testimonial.content}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-primary">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={isAnimating}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <Button 
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-3 h-3 p-1 rounded-full ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                  onClick={() => changeTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={isAnimating}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
