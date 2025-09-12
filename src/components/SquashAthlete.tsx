import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Award } from 'lucide-react';

const SquashAthlete = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "47th Maharashtra State Open",
      result: "9th Position / 32 girls in Under-13 category"
    },
    {
      icon: Award,
      title: "Matunga Gymkhana Open",
      result: "8th Position in Under-13 category"
    },
    {
      icon: Trophy,
      title: "Dunlop Maharashtra State Closed Open",
      result: "3rd Position"
    },
    {
      icon: Target,
      title: "SFA Games",
      result: "3rd Overall & Finals at Matunga Club Open"
    }
  ];

  const improvements = [
    {
      icon: Zap,
      title: "Agility",
      description: "Improved reaction time to respond"
    },
    {
      icon: Target,
      title: "Speed",
      description: "Ability to reach the ball faster"
    },
    {
      icon: Trophy,
      title: "Mental Strength",
      description: "Eagerness to match skill to fitness"
    }
  ];

  return (
    <section id="squash-athlete" className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Squash Athlete Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              Witness the incredible transformation of young athletes through specialized sports training
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
              <img
                src="https://i.imgur.com/N6N2HUF.jpeg"
                alt="Mahika Subramanian - Squash Athlete"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Mahika Subramanian</h3>
                <p className="text-yellow-400 font-semibold">Under-13 Squash Champion</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Parent's Testimonial</h3>
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <p className="italic">
                    "I still remember the 1st day Mahika came to train under you for fitness. She and I both were sceptical. 
                    She was apprehensive and worried as to what would be expected from her. At the end of the session, she had 
                    a big smile on her face."
                  </p>
                  <p>
                    "She told me that she enjoyed this session thoroughly and I never had to coax her to go for fitness. 
                    She would be eager to join that session and such was the impact you and your techniques had on her."
                  </p>
                  <p className="font-semibold text-white">
                    "We are truly thankful for the time and effort you take to plan her programmes and make them useful 
                    and interesting for her."
                  </p>
                </div>
              </div>
            </div>

            {/* Key Improvements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Key Improvements
              </h4>
              <div className="space-y-3">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <improvement.icon className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-white">{improvement.title}</h5>
                      <p className="text-gray-300 text-sm">{improvement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
              <h4 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Tournament Achievements (Since July 2024)
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 hover:bg-yellow-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <achievement.icon className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-white">{achievement.title}</h5>
                        <p className="text-gray-300 text-sm">{achievement.result}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 mb-6 text-lg font-medium">
            Ready to unlock your athletic potential?
          </p>
          <button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
          >
            Start Your Athletic Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SquashAthlete;