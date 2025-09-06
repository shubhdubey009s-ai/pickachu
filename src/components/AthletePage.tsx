import React from "react";
import { motion } from "framer-motion";
import { Star, Play, Award, Users } from "lucide-react";

const AthleteShowcase: React.FC = () => {
  const athletePhotos = [
    "https://i.imgur.com/I4fuwum.jpeg",
    "https://i.imgur.com/AtN1JYY.jpeg",
    "https://i.imgur.com/JHK262n.jpeg",
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Training with Aditya has completely transformed my physique and mindset. His personalized approach made all the difference.",
      rating: 5
    },
    {
      name: "Neha Kapoor", 
      text: "He pushed me beyond limits I never thought I could cross. Highly motivating and effective coaching style.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      text: "I lost 15kg in 4 months and built lean muscle. Couldn't have done it without his expert guidance.",
      rating: 5
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clients Transformed" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="athlete" className="relative bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.06),transparent_60%)]" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                The Golden Fitness Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="text-gray-100 font-medium">
                Witness incredible transformations, training highlights, and success stories that 
                define true dedication and the pursuit of excellence.
              </span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg shadow-yellow-500/30">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <motion.div
              className="relative rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-md p-3 shadow-xl shadow-black/50 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative pt-[177%] overflow-hidden rounded-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&autoplay=1&loop=1"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Transformation Journey"
                ></iframe>
              </div>
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Play className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>

            {/* Testimonial 1 */}
            <motion.div
              className="rounded-3xl border border-yellow-500/30 bg-white/10 backdrop-blur-md p-8 shadow-xl shadow-black/50 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-100 leading-relaxed mb-6 font-medium">
                  "{testimonials[0].text}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-lg">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-yellow-400">{testimonials[0].name}</div>
                  <div className="text-sm text-gray-300">Fitness Enthusiast</div>
                </div>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              className="relative rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-md p-3 shadow-xl shadow-black/50 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative pt-[100%] overflow-hidden rounded-2xl">
                <iframe
                  src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&autoplay=1&loop=1"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Training Highlights"
                ></iframe>
              </div>
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Play className="w-5 h-5 text-yellow-400" />
              </div>
            </motion.div>

            {/* Athlete Photos */}
            {athletePhotos.map((src, idx) => (
              <motion.div
                key={idx}
                className="group rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-md overflow-hidden shadow-xl shadow-black/50 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Transformation ${idx + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white font-semibold">Transformation Result</div>
                    <div className="text-yellow-400 text-sm">View Progress</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* More Testimonials */}
            {testimonials.slice(1).map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="rounded-3xl border border-yellow-500/30 bg-white/10 backdrop-blur-md p-8 shadow-xl shadow-black/50 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-100 leading-relaxed mb-6 font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-400">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">Success Story</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Own <span className="text-yellow-400">Golden Journey?</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
              Join hundreds of successful transformations and discover what your body is truly capable of achieving.
            </p>
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
              }
            >
              Begin Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AthleteShowcase;