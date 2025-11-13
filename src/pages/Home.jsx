import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Fast",
      description: "Lightning-fast performance",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Beautiful",
      description: "Stunning visual design",
      icon: "✨",
    },
    {
      id: 3,
      title: "Smooth",
      description: "Buttery smooth animations",
      icon: "🎨",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 animate-slide-down">
          Welcome to MyApp
        </h1>
        <p className="text-xl text-white/80 mb-8 animate-slide-up">
          Build amazing things with modern web technologies
        </p>
        <div className="flex gap-4 justify-center animate-slide-up">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="mt-20 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 animate-fade-in">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-lg">Modern Stack</h3>
                <p>Built with React, Vite, and TailwindCSS</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-bold text-lg">Easy to Use</h3>
                <p>Simple and intuitive user interface</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-bold text-lg">Performance</h3>
                <p>Optimized for speed and efficiency</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl">🔒</span>
              <div>
                <h3 className="font-bold text-lg">Secure</h3>
                <p>Built with security best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
