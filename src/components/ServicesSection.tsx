import { Youtube, MessageSquare, Music, Cloud, Tv, BookOpen, icons } from "lucide-react";
import telechash from '../assets/telecelcash.png';
import airteltigochash from '../assets/airteltigo-money.jpg';
import mtnmomo from '../assets/MTNmomo.jpg';

const services = [
  { name: "Netflix", icon: Tv, color: "bg-red-500" },
  { name: "YouTube Premium", icon: Youtube, color: "bg-red-600" },
  { name: "ChatGPT Plus", icon: MessageSquare, color: "bg-emerald-500" },
  { name: "Spotify", icon: Music, color: "bg-green-500" },
  { name: "iCloud", icon: Cloud, color: "bg-blue-500" },
  { name: "Coursera", icon: BookOpen, color: "bg-blue-600" },
];

const paymentMethods = [
  { name: "MTN MoMo", image: mtnmomo, color: "from-yellow-400 to-yellow-500" },
  { name: "Telecel Cash", image: telechash, color: "from-white-500 to-white-600" },
  { name: "AirtelTigo", image: airteltigochash, color: "from-white-500 to-white-600" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Supported Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            All your favorites,
            <span className="text-gradient"> one platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From streaming to AI tools, we're connecting you to the digital services that matter most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-500 text-center cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm font-medium text-foreground">{service.name}</p>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-foreground mb-8">
            Pay with what you already use
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                  <img src={method.image} alt={method.name} className="w-20 h-20 object-contain" />
                </div>
                <span className="font-semibold text-foreground">{method.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            More payment methods and countries coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
