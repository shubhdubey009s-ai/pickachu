import React from "react";
import { motion } from "framer-motion";

const AthleteShowcase: React.FC = () => {
  const athletePhotos = [
    "https://i.imgur.com/I4fuwum.jpeg",
    "https://i.imgur.com/AtN1JYY.jpeg",
    "https://i.imgur.com/JHK262n.jpeg",
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Training with Aditya has completely transformed my physique and mindset.",
    },
    {
      name: "Neha Kapoor",
      text: "He pushed me beyond limits I never thought I could cross. Highly motivating and effective.",
    },
    {
      name: "Arjun Mehta",
      text: "I lost 15kg in 4 months and built lean muscle. Couldn’t have done it without his guidance.",
    },
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.img
          src="https://i.imgur.com/JHK262n.jpeg"
          alt="Hero Athlete"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="relative z-10 space-y-6">
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Golden Fitness Journey
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Inspiring stories, transformations, and training highlights that
            define true dedication.
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Journey
          </motion.button>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Video 1 */}
          <motion.div
            className="relative rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-black to-black/80 p-2 shadow-lg shadow-yellow-500/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pt-[176.67%] overflow-hidden rounded-xl">
              <iframe
                src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Athlete Video 1"
              ></iframe>
            </div>
          </motion.div>

          {/* Testimonial 1 */}
          <motion.div
            className="rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black p-8 shadow-lg shadow-yellow-500/20 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg italic text-gray-200">“{testimonials[0].text}”</p>
            <span className="mt-6 font-semibold text-yellow-400">
              – {testimonials[0].name}
            </span>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="relative rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-black to-black/80 p-2 shadow-lg shadow-yellow-500/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative pt-[100%] overflow-hidden rounded-xl">
              <iframe
                src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Athlete Video 2"
              ></iframe>
            </div>
          </motion.div>

          {/* Athlete Photos */}
          {athletePhotos.map((src, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black overflow-hidden shadow-lg shadow-yellow-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <img
                src={src}
                alt={`Athlete ${idx + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}

          {/* More Testimonials */}
          {testimonials.slice(1).map((t, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black p-8 shadow-lg shadow-yellow-500/20 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
            >
              <p className="text-lg italic text-gray-200">“{t.text}”</p>
              <span className="mt-6 font-semibold text-yellow-400">– {t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AthleteShowcase;
