import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to pay the
            <span className="text-gradient"> African way?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of Africans who are already paying for their favorite services with mobile money.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="h-14">
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            Be the first to know when we launch in your country. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
