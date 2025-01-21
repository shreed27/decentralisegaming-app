import { ArrowRight, Shield, BarChart2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BarChart2,
      title: "Game Classification",
      description: "Advanced analytics to distinguish skill-based gaming from gambling",
      path: "/classification",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Real-time tracking and verification of gaming transactions",
      path: "/transparency",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Responsible Gaming",
      description: "Tools and insights to promote healthy gaming habits",
      path: "/responsible",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Enhancing Trust in Online Gaming
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            Building a safer, more transparent gaming ecosystem through innovative technology
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.path}
              className={`glass-card hover-card rounded-xl p-6 text-left bg-gradient-to-br ${feature.gradient} bg-opacity-10 backdrop-blur-lg transition-all duration-300`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <feature.icon className="h-8 w-8 text-white mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200 mb-4">{feature.description}</p>
              <div className="flex items-center text-white group">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-2 transform transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;