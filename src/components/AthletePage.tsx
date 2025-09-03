import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Trophy, Target, Heart } from 'lucide-react';

const AthletePage = () => {
  const [activeTab, setActiveTab] = useState('athletes');

  const certifications = [
    { name: "Certified Personal Trainer", icon: Award },
    { name: "Sports Nutrition Specialist", icon: Target },
    { name: "Bodybuilding Coach", icon: Trophy },
    { name: "Wellness Coach", icon: Heart }
  ];

  const athleteTestimonials = [
    {
      text: "Aditya helped me prepare for bodybuilding competitions with structured workouts and nutrition guidance.",
      author: "Competitive Bodybuilder"
    },
    {
      text: "His coaching style keeps me motivated and consistent in my training.",
      author: "Professional Athlete"
    },
    {
      text: "The sport-specific training programs have taken my performance to the next level.",
      author: "Marathon Runner"
    }
  ];

  const clientTestimonials = [
    {
      text: "I lost 9 kgs in 6 months following Aditya's online sessions and diet plans. I feel lighter, more energetic, and confident.",
      author: "Sanjay Yadav"
    },
    {
      text: "Thanks to Aditya's coaching, I changed my lifestyle and improved my fitness despite a hectic work schedule.",
      author: "Working Professional"
    },
    {
      text: "The personalized approach and constant motivation helped me achieve goals I never thought possible.",
      author: "Fitness Enthusiast"
    },
    {
      text: "Aditya's guidance transformed not just my body but my entire mindset towards health and wellness.",
      author: "Lifestyle Client"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
                  <img 
                    src="https://i.imgur.com/Gbs73eG.jpeg" 
                    alt="Aditya Sandu - Fitness Coach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-8 h-8 text-black" />
                </div>
              </div>
            </motion.div>

            {/* Heading and About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    About Aditya Sandu
                  </span>
                </h2>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20">
                <p className="text-lg text-gray-100 leading-relaxed mb-6">
                  Aditya Sandu is a passionate athlete and coach, dedicated to transforming lives through fitness. 
                  With experience across multiple sports, bodybuilding, and personal training, he has guided 
                  hundreds of clients towards healthier, stronger lifestyles.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-3xl font-bold text-yellow-400">4.9</span>
                      <span className="text-gray-300 ml-1">/5</span>
                    </div>
                    <p className="text-gray-400">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-yellow-400 mr-2" />
                      <span className="text-3xl font-bold text-yellow-400">500+</span>
                    </div>
                    <p className="text-gray-400">Clients Trained</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Certifications</h4>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-yellow-500/20">
              <button
                onClick={() => setActiveTab('athletes')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'athletes'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                Trained Athletes
              </button>
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'clients'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                Helping People Achieve Their Goals
              </button>
            </div>
          </div>

          {/* Testimonials Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'athletes' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Athlete Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
                      <img 
                        src="https://i.imgur.com/I4m6m7J.jpeg" 
                        alt="Trained Athlete"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Trophy className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>

                {/* Athlete Testimonials */}
                <div className="space-y-6">
                  {athleteTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                    >
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-100 italic mb-4">"{testimonial.text}"</p>
                      <p className="text-yellow-400 font-medium">- {testimonial.author}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clientTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden"
                  >
                    {/* Customer avatar */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/20 mr-4">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.author}
                        </h4>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-100 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Decorative bottom accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AthletePage;
