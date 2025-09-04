import React from "react";
import { Target, Zap, Heart, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Target,
      title: "Weight Loss Program",
      features: [
        "Custom meal plans",
        "Cardio workouts",
        "Progress tracking",
        "24/7 support",
      ],
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Zap,
      title: "Strength Training",
      features: [
        "Progressive overload",
        "Form correction",
        "Muscle building",
        "Recovery plans",
      ],
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition",
      features: [
        "Lifestyle coaching",
        "Stress management",
        "Habit formation",
        "Mindful eating",
      ],
      color: "from-yellow-300 to-yellow-500",
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      features: [
        "Contest prep",
        "Peak week planning",
        "Posing practice",
        "Stage ready",
      ],
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <section id="programs" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Programs
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            <span className="text-gray-100 font-medium">
              Choose from our expertly crafted programs designed by expert
              coaches to help you achieve your fitness goals.
            </span>
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full bg-white/15 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 shadow-lg shadow-black/50"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${program.color} mb-4 group-hover:shadow-lg transition-all duration-300`}
              >
                <program.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2xl font-bold mb-3 text-white hover:text-yellow-400 transition-colors">
                {program.title}
              </h3>

              {/* Features */}
              <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                {program.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-200 font-medium"
                  >
                    <div className="w-2 h-2 mt-1 md:mt-2 bg-yellow-400 rounded-full mr-2 md:mr-3"></div>
                    <span className="leading-snug">{feature}</span>
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
