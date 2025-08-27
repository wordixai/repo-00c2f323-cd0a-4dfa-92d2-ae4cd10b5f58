import { BarChart3, Users, Settings, Shield, Zap, PieChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-black" />,
      title: "Real-time Analytics",
      description: "Monitor AI interactions as they happen with live dashboards and instant insights"
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Multi-client Support",
      description: "Manage multiple clients from a single dashboard with role-based access control"
    },
    {
      icon: <Settings className="w-8 h-8 text-black" />,
      title: "Zero Code Integration",
      description: "Start tracking immediately without modifying your existing AI system code"
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications"
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Lightning Fast",
      description: "Built for performance with sub-millisecond response times and 99.9% uptime"
    },
    {
      icon: <PieChart className="w-8 h-8 text-black" />,
      title: "Advanced Insights",
      description: "Deep analytics with machine learning-powered recommendations and predictions"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 section-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">AI Operations</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Everything you need to track, analyze, and optimize your AI interactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">{feature.title}</h3>
              <p className="text-zinc-900 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;