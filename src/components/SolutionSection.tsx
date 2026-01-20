import { Smartphone, Zap, Shield, Check } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Pay with MoMo",
    description: "MTN, Telecel, AirtelTigo — all your mobile money wallets work here.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Instant activation",
    description: "Like topping up on a betting site. Fast, familiar, effortless.",
    color: "accent"
  },
  {
    icon: Shield,
    title: "Secure & trusted",
    description: "Bank-grade security protecting every transaction you make.",
    color: "secondary"
  }
];

const SolutionSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Enter <span className="text-gradient">Argent</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An African subscription payment platform that bridges the gap between 
            local payment methods and global digital services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-500"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* How it works steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Simple as 1-2-3
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-primary to-primary/30" />
            
            {[
              { step: "1", title: "Choose your service", desc: "Select Netflix, YouTube, ChatGPT, or any supported subscription" },
              { step: "2", title: "Pay with MoMo", desc: "Complete payment using your preferred mobile money wallet" },
              { step: "3", title: "Enjoy instantly", desc: "Your subscription activates immediately. That's it!" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6 shadow-glow relative z-10">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
