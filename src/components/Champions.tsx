import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote, Trophy, Target, Zap } from 'lucide-react';

const Champions = () => {
  const [activeTab, setActiveTab] = useState('transformations');

  const champions = [
    {
      id: 1,
      type: 'image',
      src: 'https://i.imgur.com/eSwFfDl.jpeg',
      name: 'Rajesh Kumar',
      achievement: 'Lost 25kg in 6 months',
      review: 'Incredible transformation! Coach Aditya\'s guidance helped me achieve what I thought was impossible. The personalized workout plan and nutrition advice were game-changers.',
      rating: 5,
      category: 'weight-loss'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.imgur.com/CIQsSm8.jpeg',
      name: 'Priya Sharma',
      achievement: 'Built lean muscle & strength',
      review: 'From feeling weak to becoming strong and confident! The strength training program was perfectly designed for my goals. I can now lift weights I never imagined.',
      rating: 5,
      category: 'strength'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://i.imgur.com/bfyagHf.jpeg',
      name: 'Vikram Singh',
      achievement: 'Complete body transformation',
      review: 'The most comprehensive fitness journey I\'ve ever experienced. Every aspect was covered - training, nutrition, mindset. Results speak for themselves!',
      rating: 5,
      category: 'transformation'
    },
    {
      id: 4,
      type: 'video',
      embedCode: '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion Transformation Video"></iframe></div>',
      name: 'Amit Patel',
      achievement: 'Athletic performance boost',
      review: 'My athletic performance has improved dramatically! The sport-specific training and conditioning programs have taken my game to the next level.',
      rating: 5,
      category: 'athletic'
    },
    {
      id: 5,
      type: 'video',
      embedCode: '<div style="padding:176.67% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion Success Story"></iframe></div>',
      name: 'Neha Gupta',
      achievement: 'Lifestyle transformation',
      review: 'Not just physical transformation, but a complete lifestyle change! I feel more energetic, confident, and healthy than ever before. Thank you Coach!',
      rating: 5,
      category: 'lifestyle'
    }
  ];

  const categories = [
    { id: 'transformations', label: 'All Transformations', icon: Trophy },
    { id: 'weight-loss', label: 'Weight Loss', icon: Target },
    { id: 'strength', label: 'Strength', icon: Zap },
    { id: 'athletic', label: 'Athletic', icon: Trophy }
  ];

  const filteredChampions = activeTab === 'transformations' 
    ? champions 
    : champions.filter(champion => champion.category === activeTab);

  return (
    <section id="champions" className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Champions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gray-100 font-medium">
              Meet the incredible individuals who have transformed their lives through dedication, 
              hard work, and our proven training programs. Their success stories inspire us every day.
            </span>
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/30'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-yellow-500/30'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChampions.map((champion, index) => (
            <motion.div
              key={champion.id}
              className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Media Container */}
              <div className="relative aspect-square overflow-hidden">
                {champion.type === 'image' ? (
                  <img
                    src={champion.src}
                    alt={`${champion.name} transformation`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div 
                    className="w-full h-full relative"
                    dangerouslySetInnerHTML={{ __html: champion.embedCode }}
                  />
                )}
                
                {/* Overlay with achievement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-sm">Achievement</span>
                    </div>
                    <p className="text-white font-bold">{champion.achievement}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {champion.name}
                  </h3>
                  <div className="flex space-x-1">
                    {[...Array(champion.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1 mb-4">
                  <Target className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">{champion.achievement}</span>
                </div>

                {/* Review */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-6 h-6 text-yellow-400/30" />
                  <p className="text-gray-300 text-sm leading-relaxed pl-4 font-medium">
                    "{champion.review}"
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-100 mb-6 text-lg font-medium">
            Ready to become our next champion?
          </p>
          <button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105"
            onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
          >
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Champions;