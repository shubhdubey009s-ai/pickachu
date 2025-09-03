{/* About Section */}
<section className="py-20 px-6 bg-black text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Profile Image - Bigger and Prominent */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center lg:justify-start"
    >
      <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
        <img 
          src="https://i.imgur.com/Gbs73eG.jpeg" 
          alt="Aditya Sandu - Fitness Coach"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold">
        Meet Your{" "}
        <span className="text-yellow-400">Coach Aditya</span>
      </h2>

      {/* About Description */}
      <p className="text-lg text-gray-300 leading-relaxed">
        Coach Aditya is a certified fitness expert specializing in bodybuilding, 
        athlete training, and lifestyle transformation. He has helped professionals, 
        athletes, and fitness enthusiasts achieve their peak performance without 
        compromising balance or energy.
      </p>

      {/* Credentials Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <h4 className="text-xl font-bold text-yellow-400 mb-4">Accreditations</h4>
        <ul className="space-y-3">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center space-x-3">
              <cert.icon className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-200">{cert.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-6 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all">
        Work With Me
      </button>
    </motion.div>

  </div>
</section>
