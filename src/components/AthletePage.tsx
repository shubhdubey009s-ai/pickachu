import React from "react";
import { motion } from "framer-motion";

const AthleteSection: React.FC = () => {
  const athletePhotos = [
    "https://i.imgur.com/eSwFfDl.jpeg",
    "https://i.imgur.com/CIQsSm8.jpeg",
    "https://i.imgur.com/bfyagHf.jpeg",
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Training here has pushed me to a whole new level. My stamina and strength are at their peak!",
    },
    {
      name: "Neha Kapoor",
      text: "An amazing transformation journey! The guidance and motivation kept me going every day.",
    },
    {
      name: "Arjun Mehta",
      text: "I’ve never felt this confident before. The workouts, discipline, and energy changed my lifestyle completely.",
    },
    {
      name: "Simran Kaur",
      text: "The personal attention and structured workouts made all the difference. Highly recommend!",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Athlete Highlights
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Video 1 */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-yellow-500/40 shadow-lg shadow-yellow-500/30 bg-black"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pt-[176.67%]">
              <iframe
                src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Athlete Video 1"
              ></iframe>
            </div>
          </motion.div>

          {/* Testimonial 1 */}
          <motion.div
            className="rounded-2xl p-8 border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black shadow-lg shadow-yellow-500/20 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg italic text-gray-200">“{testimonials[0].text}”</p>
            <span className="mt-6 font-semibold text-yellow-400">– {testimonials[0].name}</span>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-yellow-500/40 shadow-lg shadow-yellow-500/30 bg-black"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative pt-[100%]">
              <iframe
                src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full"
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
              className="rounded-2xl overflow-hidden border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black shadow-lg shadow-yellow-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
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
              className="rounded-2xl p-8 border border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 to-black shadow-lg shadow-yellow-500/20 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
            >
              <p className="text-lg italic text-gray-200">“{t.text}”</p>
              <span className="mt-6 font-semibold text-yellow-400">– {t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
