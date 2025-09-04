import React from 'react';
import { Dumbbell, HeartPulse, Weight, Zap } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      color: "from-yellow-400 to-orange-500",
      features: [
        "Progressive overload programs",
        "Compound movement focus",
        "Personalized weight tracking",
        "Form correction guidance"
      ]
    },
    {
      icon: HeartPulse,
      title: "Cardio Fitness",
      color: "from-red-400 to-pink-500",
      features: [
        "HIIT workout sessions",
        "Endurance building",
        "Heart rate monitoring",
        "Fat burning protocols"
      ]
    },
    {
      icon: Weight,
      title: "Weight Management",
      color: "from-green-400 to-blue-500",
      features: [
        "Nutrition planning",
        "Calorie tracking",
        "Meal prep guidance",
        "Sustainable habits"
      ]
    },
    {
      icon: Zap,
      title: "Athletic Performance",
      color: "from-purple-400 to-indigo-500",
      features: [
        "Sport-specific training",
        "Agility development",
        "Power enhancement",
        "Recovery optimization"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-100 font-medium max-w-3xl mx-auto">
            Discover our comprehensive fitness programs designed to help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 shadow-lg shadow-black/50"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${program.color} mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <program.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                {program.title}
              </h3>
              
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-100 font-medium">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;