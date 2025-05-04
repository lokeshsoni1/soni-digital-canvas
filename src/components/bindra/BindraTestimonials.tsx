
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function BindraTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "अमित शर्मा",
      role: "स्टार्टअप फाउंडर",
      content: "बहुत बेहतरीन काम किया पंकज ने, समय पर डिलीवरी मिली और क्वालिटी शानदार थी।",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      name: "नीतू गुप्ता",
      role: "डिजाइन एजेंसी",
      content: "UI डिज़ाइन देखकर क्लाइंट खुश हो गया। धन्यवाद पंकज!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 3,
      name: "राजेश कुमार",
      role: "ई-कॉमर्स कंपनी",
      content: "Data entry का काम प्रोफेशनली और जल्दी पूरा किया गया। शानदार अनुभव।",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>
        
        <div className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-8 max-w-4xl mx-auto shadow-md overflow-hidden relative">
          <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/10" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="md:w-1/4 flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/30 mx-auto">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <p className="text-lg italic mb-6">"{testimonials[activeIndex].content}"</p>
              <div className="flex flex-col">
                <span className="font-bold text-primary">{testimonials[activeIndex].name}</span>
                <span className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-secondary'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
