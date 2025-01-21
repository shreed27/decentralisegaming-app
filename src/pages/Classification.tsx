import { BarChart2, Brain, Dices, Trophy } from "lucide-react";

const Classification = () => {
  const metrics = [
    {
      icon: Brain,
      title: "Skill Analysis",
      description: "Advanced AI algorithms analyze gameplay patterns to measure skill components",
    },
    {
      icon: Dices,
      title: "Chance Detection",
      description: "Sophisticated systems to identify and measure elements of chance",
    },
    {
      icon: Trophy,
      title: "Performance Tracking",
      description: "Detailed metrics to track player improvement over time",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Game Classification System
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Advanced analytics and AI-powered tools to distinguish skill-based gaming from chance-based elements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <metric.icon className="h-8 w-8 text-purple-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
              <p className="text-purple-200">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 animate-fade-in">
          <BarChart2 className="h-12 w-12 text-purple-300 mb-6 mx-auto" />
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Real-time Classification Metrics
          </h2>
          <div className="h-64 bg-purple-900/50 rounded-lg border border-purple-500/30">
            {/* Placeholder for future chart implementation */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classification;