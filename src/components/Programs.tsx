import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Heart, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Target,
      title: "Weight Loss Program",
      features: ["Custom meal plans", "Cardio workouts", "Progress tracking", "24/7 support"],
      color: "from-yellow-400/15 via-yellow-500/10 to-amber-500/10"
    },
    {
      icon: Zap,
      title: "Strength Training",
      features: ["Progressive overload", "Form correction", "Muscle building", "Recovery plans"],
      color: "from-orange-400/15 via-orange-500/10 to-red-500/10"
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition",
      features: ["Lifestyle coaching", "Stress management", "Habit formation", "Mindful eating"],
      color: "from-yellow-300/15 via-yellow-400/10 to-yellow-500/10"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      features: ["Contest prep", "Peak week planning", "Posing practice", "Stage ready"],
      color: "from-yellow-500/15 via-amber-500/10 to-orange-400/10"
    }
  ];

  // Staggered, step-by-step entrance
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="programs" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading (unchanged content) */}
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

        {/* Cards – mobile: 1 column like your screenshot; md: 2; lg: 4 */}
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
                bg-gradient-to-br from-[#121212] via-[#151515] to-black
                border border-white/10 shadow-xl
                hover:border-yellow-400/40 hover:shadow-2xl transition
              `}
            >
              {/* soft background glow */}
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

              {/* Features (same content, tidier layout — no bullets, tighter leading) */}
              <ul className="list-none space-y-1.5 text-sm md:text-base text-gray-300 leading-relaxed break-words">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-balance">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* subtle bottom divider like card foot highlight */}
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

              {/* hover lift */}
              <div className="absolute inset-0 rounded-3xl ring-0 hover:ring-1 hover:ring-yellow-400/30 transition" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
