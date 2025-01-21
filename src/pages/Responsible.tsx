import { Heart, Clock, Wallet, Bell } from "lucide-react";

const Responsible = () => {
  const tools = [
    {
      icon: Clock,
      title: "Time Management",
      description: "Set gaming time limits and receive friendly reminders",
    },
    {
      icon: Wallet,
      title: "Spending Controls",
      description: "Track and manage your gaming expenses effectively",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Personalized alerts to promote healthy gaming habits",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-green-900 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Responsible Gaming
          </h1>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            Empowering players with tools and insights for healthy gaming habits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <tool.icon className="h-8 w-8 text-green-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-green-200">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 animate-fade-in">
          <Heart className="h-12 w-12 text-green-300 mb-6 mx-auto" />
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Wellness Dashboard
          </h2>
          <div className="h-64 bg-green-900/50 rounded-lg border border-green-500/30">
            {/* Placeholder for future wellness metrics */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsible;