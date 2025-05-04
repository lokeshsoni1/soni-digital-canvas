
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
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="container-custom">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div ref={testimonialsRef} className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-base flex flex-col items-center text-center p-8 max-w-3xl mx-auto">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    
                    <p className="text-xl mb-8 font-medium">"{testimonial.content}"</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-left">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant={index === currentTestimonial ? "default" : "outline"}
                size="icon"
                className={`rounded-full w-3 h-3 p-0 ${index === currentTestimonial ? "" : "opacity-50"}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
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
