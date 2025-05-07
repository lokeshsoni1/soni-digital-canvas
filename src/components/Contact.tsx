
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a simulation of form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="contact" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="section-title reveal"
        >
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div 
            ref={el => elementsRef.current[1] = el}
            className="lg:col-span-1 space-y-6 reveal"
          >
            <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:lokeshsoniroyal1@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      lokeshsoniroyal1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href="tel:+918595598458" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8595598458
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Gurugram, Haryana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-gradient">Connect With Me</h3>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/lokeshhsoni" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/lokesh-soni-2b3b7034a/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a 
                  href="https://instagram.com/lokesh.soni194" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            ref={el => elementsRef.current[2] = el}
            className="lg:col-span-2 reveal"
          >
            <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-gradient">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-primary/5 border border-border rounded-lg">
                <p className="text-center text-sm text-muted-foreground">
                  I'll respond to your message as soon as possible. Thanks for reaching out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
