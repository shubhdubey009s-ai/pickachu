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
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Athletes & Stories
        </motion.h2>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Video 1 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg bg-black"
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

          {/* Testimonial Card */}
          <motion.div
            className="bg-blue-600 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg italic">“{testimonials[0].text}”</p>
            <span className="mt-4 font-semibold text-white/90">
              – {testimonials[0].name}
            </span>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg bg-black"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
              className="overflow-hidden rounded-2xl shadow-lg bg-black"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={src}
                alt={`Athlete ${idx + 1}`}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}

          {/* More Testimonials */}
          {testimonials.slice(1).map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-600 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }}
            >
              <p className="text-lg italic">“{t.text}”</p>
              <span className="mt-4 font-semibold text-white/90">
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
