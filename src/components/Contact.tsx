
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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
    // In a real app, you would integrate with a service like Formspree
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
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="container-custom">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card-base">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
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
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
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
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
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
            
            <div className="card-base">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-base">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
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
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
