import { X, CreditCard, AlertCircle, Ban } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Card declined. Again.",
    description: "International cards fail constantly for African users. Expired, blocked, or just... rejected."
  },
  {
    icon: AlertCircle,
    title: "No bank account",
    description: "Millions of Africans are unbanked. No card means no access to global digital services."
  },
  {
    icon: Ban,
    title: "Limited options",
    description: "Visa and Mastercard dominate online payments. But Africa runs on mobile money."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary-foreground/1 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-secondary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-secondary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-secondary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
            Paying online shouldn't be 
            <span className="block">this hard</span>
          </h2>
          <p className="text-lg text-secondary-foreground/1 max-w-2xl mx-auto">
            You just want to subscribe to ChatGPT or Netflix. But your card fails, your bank blocks it, 
            or you simply don't have one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-accent/5 border border-secondary/1 hover:bg-secondary-foreground/40 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-destructive/80" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text mb-3">
                {problem.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative X */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <X className="w-8 h-8 text-destructive" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
