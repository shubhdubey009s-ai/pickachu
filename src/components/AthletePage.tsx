import React from 'react';
import { motion } from 'framer-motion';

const AthleteSection: React.FC = () => {
  const athletePhotos = [
    "https://i.imgur.com/I4fuwum.jpeg",
    "https://i.imgur.com/AtN1JYY.jpeg",
    "https://i.imgur.com/JHK262n.jpeg",
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Athletes
        </motion.h2>

        {/* Videos + Photos in one grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* First Vimeo video */}
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative pt-[176.67%]">
              <iframe
                src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Athlete Video 1"
              ></iframe>
            </div>
          </motion.div>

          {/* Second Vimeo video */}
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative pt-[100%]">
              <iframe
                src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
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
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
