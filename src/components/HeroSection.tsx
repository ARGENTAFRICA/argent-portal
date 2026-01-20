import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CreditCard, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 mb-8 animate-slide-up shadow-soft">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Launching across Africa
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up stagger-1">
            Pay for <span className="text-gradient">subscriptions</span>
            <br />
            the African way
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-2 leading-relaxed">
            One platform connecting Africa's local payment methods to global services. 
            Netflix, YouTube, ChatGPT — pay with <span className="text-foreground font-semibold">MoMo</span>, not Visa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-3">
            <Button variant="hero" size="xl">
              Start Paying Smarter
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Floating Cards */}
          <div className="relative h-64 sm:h-80 animate-slide-up stagger-4">
            {/* Center Card */}
            <div className="absolute left-1/3 top-[120px] -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-card rounded-3xl shadow-card border border-border p-6 animate-float z-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">MoMo Payment</p>
                  <p className="text-xs text-muted-foreground">Instant transfer</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">GH₵ 120</span>
                <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">Success ✓</span>
              </div>
            </div>

            {/* Left Card */}
            <div className="absolute left-4 sm:left-16 top-8 w-48 h-32 bg-card rounded-2xl shadow-soft border border-border p-4 animate-float-slow opacity-70 z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Globe className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">Netflix</span>
              </div>
              <p className="text-xs text-muted-foreground">Monthly Premium</p>
            </div>

            {/* Right Card */}
            <div className="absolute right-4 sm:right-16 top-2 w-48 h-32 bg-card rounded-2xl shadow-soft border border-border p-4 animate-float-delay opacity-70 z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Telecel Cash</span>
              </div>
              <p className="text-xs text-muted-foreground">Balance: GH₵ 450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
