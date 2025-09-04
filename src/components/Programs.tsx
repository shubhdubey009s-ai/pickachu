import React from 'react';
import { Target, Zap, Heart, Trophy } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Target,
      title: "Weight Loss Program",
      features: ["Custom meal plans", "Cardio workouts", "Progress tracking", "24/7 support"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Zap,
      title: "Strength Training",
      features: ["Progressive overload", "Form correction", "Muscle building", "Recovery plans"],
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition",
      features: ["Lifestyle coaching", "Stress management", "Habit formation", "Mindful eating"],
      color: "from-yellow-300 to-yellow-500"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      features: ["Contest prep", "Peak week planning", "Posing practice", "Stage ready"],
      color: "from-yellow-500 to-orange-400"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Programs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our expertly crafted programs designed to help you achieve your fitness goals 
            with proven methodologies and personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${program.color} mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <program.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                {program.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
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