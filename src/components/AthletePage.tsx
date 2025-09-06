import React from "react";
import { motion } from "framer-motion";

const AthleteSection: React.FC = () => {
  const athletePhotos = [
    "https://i.imgur.com/I4fuwum.jpeg",
    "https://i.imgur.com/AtN1JYY.jpeg",
    "https://i.imgur.com/JHK262n.jpeg",
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Training with Coach Aditya has completely transformed my physique and mindset.",
    },
    {
      name: "Neha Kapoor",
      text: "Aditya pushed me beyond limits I never thought I could cross. His methods are effective and motivating.",
    },
    {
      name: "Arjun Mehta",
      text: "I lost 15kg in 4 months and built lean muscle. Couldn’t have done it without his guidance.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Hero Heading */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Champion Athletes
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stories, testimonials, and highlights from athletes who transformed
            their lives with Coach Aditya.
          </p>
        </motion.div>

        {/* Golden Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Video 1 */}
          <motion.div
            className="relative rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-black/80 to-black p-2 shadow-lg shadow-yellow-500/20"
            initial={{ opacity: 0, y: 40 }}
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
            initial={{ opacity: 0, y: 40 }}
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
            className="relative rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-black/80 to-black p-2 shadow-lg shadow-yellow-500/20"
            initial={{ opacity: 0, y: 40 }}
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

          {/* Remaining Testimonials */}
          {testimonials.slice(1).map((t, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black p-8 shadow-lg shadow-yellow-500/20 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
            >
              <p className="text-lg italic text-gray-200">“{t.text}”</p>
              <span className="mt-6 font-semibold text-yellow-400">
                – {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
