import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Zap, Target, Trophy, Star } from "lucide-react";

const ParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const midgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const foregroundY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);

  const rotateX = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const features = [
    {
      icon: Zap,
      title: "Rapid Results",
      description: "See visible changes in just 2 weeks and stay hooked to the process.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Every workout and meal is optimized for your lifestyle and goals.",
      color: "from-indigo-400 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Elite Standards",
      description: "Training used by entrepreneurs, leaders, and high performers.",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "24/7 support and personalized attention for your fitness journey.",
      color: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    >
      {/* Background Layer */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      </motion.div>

      {/* Floating Shapes */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: midgroundY }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64"
          style={{ rotateX, rotateY, scale }}
        >
          <div className="relative w-full h-full transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl border border-yellow-400/10 shadow-2xl" />
            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl scale-150 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4"
        style={{ y: foregroundY }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">BEYOND</span>
              <br />
              <span className="text-yellow-400">ORDINARY</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transformation powered by science, precision, and dedication — for both body and mind.
            </motion.p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:border-yellow-400/40 transition-all"
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-12 h-12 mx-auto text-yellow-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;