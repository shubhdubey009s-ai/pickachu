import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Trophy, Heart } from 'lucide-react';

const CoachSection: React.FC = () => {
  const certifications = [
    { name: "Certified Personal Trainer", icon: Award },
    { name: "Sports Nutrition Specialist", icon: Target },
    { name: "Bodybuilding Coach", icon: Trophy },
    { name: "Wellness Coach", icon: Heart },
  ];

  const athletePhotos = [
    "https://i.imgur.com/I4fuwum.jpeg",
    "https://i.imgur.com/AtN1JYY.jpeg",
    "https://i.imgur.com/JHK262n.jpeg",
  ];

  return (
    <>
      {/* Original Coach Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
                <img
                  src="https://i.imgur.com/Gbs73eG.jpeg"
                  alt="Coach Aditya"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg">
                <p className="text-black font-bold">CLC Founder</p>
              </div>
            </motion.div>

            {/* Text + Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet Your <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Coach Aditya
                </span>
              </h2>

              <p className="text-lg text-gray-200 leading-relaxed">
                Aditya Sandu is a passionate athlete and coach, dedicated to transforming lives through fitness. 
                With experience across multiple sports, bodybuilding, and personal training, he has guided 
                hundreds of clients towards healthier, stronger lifestyles.
              </p>

              {/* Certifications */}
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-7 h-7 text-yellow-400" />
                  <h3 className="text-yellow-400 text-lg font-semibold">Accreditations</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-center space-x-3 hover:bg-yellow-500/20 transition-all duration-300"
                    >
                      <cert.icon className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-gray-200">{cert.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
                }
              >
                Work With Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔥 New Athlete Section (With Vimeo Iframes) */}
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

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>

          {/* Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </>
  );
};

export default CoachSection;
