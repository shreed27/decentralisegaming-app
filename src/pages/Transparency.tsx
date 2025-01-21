import { Shield, Lock, FileCheck, Activity } from "lucide-react";

const Transparency = () => {
  const features = [
    {
      icon: Lock,
      title: "Secure Transactions",
      description: "End-to-end encryption for all gaming transactions",
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Complete transparency with detailed activity logs",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live tracking of gaming metrics and performance",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trust & Transparency
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Building trust through transparent gaming practices and secure transactions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 animate-fade-in">
          <Shield className="h-12 w-12 text-blue-300 mb-6 mx-auto" />
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Security Dashboard
          </h2>
          <div className="h-64 bg-blue-900/50 rounded-lg border border-blue-500/30">
            {/* Placeholder for future security metrics */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;