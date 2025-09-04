import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Heart, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Target,
      title: "Weight Loss Program",
      features: ["Custom meal plans", "Cardio workouts", "Progress tracking", "24/7 support"],
      color: "from-yellow-400/20 via-yellow-500/10 to-amber-500/10"
    },
    {
      icon: Zap,
      title: "Strength Training",
      features: ["Progressive overload", "Form correction", "Muscle building", "Recovery plans"],
      color: "from-orange-400/20 via-orange-500/10 to-red-500/10"
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition",
      features: ["Lifestyle coaching", "Stress management", "Habit formation", "Mindful eating"],
      color: "from-yellow-300/20 via-yellow-400/10 to-yellow-500/10"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      features: ["Contest prep", "Peak week planning", "Posing practice", "Stage ready"],
      color: "from-yellow-500/20 via-amber-500/10 to-orange-400/10"
    }
  ];

  // Slower, smoother stagger
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 } // more delay between items
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } // slower + smoother
    }
  };

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
              Choose from our expertly crafted programs designed by expert coaches to help you 
              achieve your specific fitness goals with personalized guidance and support.
            </span>
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`
                relative overflow-hidden rounded-3xl p-5 md:p-6
                bg-white/10 backdrop-blur-md
                border border-white/15 shadow-xl
                hover:border-yellow-400/40 hover:shadow-2xl transition
              `}
            >
              {/* glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl bg-gradient-to-br ${program.color}`}
              />
              <div
                className={`pointer-events-none absolute -left-20 -bottom-20 h-44 w-44 rounded-full blur-3xl bg-gradient-to-tr ${program.color}`}
              />

              {/* Icon */}
              <div className="relative inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-yellow-500/10 ring-1 ring-yellow-400/30 mb-4">
                <program.icon className="h-6 w-6 text-yellow-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2">
                {program.title}
              </h3>

              {/* Features */}
              <ul className="list-none space-y-1.5 text-sm md:text-base text-gray-300 leading-relaxed break-words">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-balance">{feature}</li>
                ))}
              </ul>

              {/* bottom accent */}
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
