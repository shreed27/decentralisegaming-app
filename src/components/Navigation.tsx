import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BarChart2, Shield, Heart, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const navItems = [
    { name: "Game Classification", path: "/classification", icon: BarChart2 },
    { name: "Trust & Transparency", path: "/transparency", icon: Shield },
    { name: "Responsible Gaming", path: "/responsible", icon: Heart },
  ];

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900 to-purple-900 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              GameGuard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-800/50 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={handleLogin}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;