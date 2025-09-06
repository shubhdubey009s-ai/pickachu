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
      text: "Training with Coach Aditya has completely transformed my physique and mindset. I feel stronger and more disciplined than ever.",
    },
    {
      name: "Neha Kapoor",
      text: "Aditya pushed me beyond limits I never thought I could cross. His methods are effective, motivating, and sustainable.",
    },
    {
      name: "Arjun Mehta",
      text: "I lost 15kg in 4 months and built lean muscle. Couldn’t have done it without this guidance and accountability.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Athletes & Testimonials
        </motion.h2>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Vimeo Video 1 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative pt-[176.67%]">
              <iframe
                src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Athlete Video 1"
              ></iframe>
            </div>
          </motion.div>

          {/* Vimeo Video 2 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative pt-[100%]">
              <iframe
                src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
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
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={src}
                alt={`Athlete ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}

          {/* Testimonials */}
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 border border-yellow-500/20 p-6 rounded-2xl shadow-lg flex flex-col justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <p className="text-gray-200 italic">“{t.text}”</p>
              <span className="mt-4 text-yellow-400 font-semibold">
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
