import { Globe, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "54", label: "African Countries" },
  { value: "500M+", label: "Mobile Money Users" },
  { value: "1", label: "Platform" },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-secondary/1 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-secondary-1" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-secondary-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-secondary-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Vision
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground/1 mb-8 leading-tight">
            One API.
            <br />
            One Platform.
            <br />
            <span className="text-gradient">One Africa.</span>
          </h2>

          <p className="text-lg sm:text-xl text-secondary-foreground/1 max-w-2xl mx-auto mb-12 leading-relaxed">
            When global services integrate with Argent, they unlock access to the entire African continent — 
            54 countries, hundreds of millions of mobile money users, through a single integration.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-secondary-foreground/6">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto p-8 rounded-3xl bg-secondary-foreground/5 border border-secondary-foreground/10 mb-12">
            <div className="absolute -top-4 left-8 text-6xl text-primary/30 font-serif">"</div>
            <p className="text-xl sm:text-2xl text-secondary-foreground/1 font-medium italic leading-relaxed">
              When X, YouTube, Netflix accepts argent.africa — they have access to the whole of Africa. 
              One API, one platform, one Argent, one Africa.
            </p>
          </div>

          {/* Globe Icon */}
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-glow mb-8 animate-pulse-glow">
            <Globe className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
