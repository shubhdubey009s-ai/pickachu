import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Champions = () => {
  const champions = [
    {
      id: 1,
      type: 'image',
      src: 'https://i.imgur.com/eSwFfDl.jpeg',
      alt: 'Champion transformation 1',
      review: {
        text: "Coach Aditya completely changed my perspective on fitness. I feel stronger than ever!",
        name: "Rohit Sharma",
        role: "Athlete"
      }
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.imgur.com/CIQsSm8.jpeg',
      alt: 'Champion transformation 2',
      review: {
        text: "The guidance and nutrition plan helped me transform not just my body but my lifestyle.",
        name: "Priya Mehta",
        role: "Entrepreneur"
      }
    },
    {
      id: 3,
      type: 'image',
      src: 'https://i.imgur.com/bfyagHf.jpeg',
      alt: 'Champion transformation 3',
      review: {
        text: "I never thought I could achieve this physique. The process was tough but so worth it.",
        name: "Aman Verma",
        role: "Fitness Enthusiast"
      }
    },
    {
      id: 4,
      type: 'video',
      embedCode:
        '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&autoplay=1&loop=1&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 1"></iframe></div>',
      alt: 'Champion transformation video 1',
      review: {
        text: "The video shows only part of the journey. The real win is how confident I feel today.",
        name: "Sneha Kapoor",
        role: "Dancer"
      }
    },
    {
      id: 5,
      type: 'video',
      embedCode:
        '<div style="padding:176.67% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&autoplay=1&loop=1&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 2"></iframe></div>',
      alt: 'Champion transformation video 2',
      review: {
        text: "Consistency and the right mentorship brought me here. Forever grateful to the team!",
        name: "Karan Singh",
        role: "Student"
      }
    }
  ];

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
        </motion.div>

        {/* Champions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {champions.map((champion, index) => (
            <motion.div
              key={champion.id}
              className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/50 flex flex-col"
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
                    alt={champion.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div
                    className="w-full h-full relative"
                    dangerouslySetInnerHTML={{ __html: champion.embedCode }}
                  />
                )}
              </div>

              {/* Review Section */}
              {champion.review && (
                <div className="p-4 text-white">
                  <p className="text-sm italic mb-3 text-gray-300">“{champion.review.text}”</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold">{champion.review.name}</span>
                    <span className="text-gray-400 text-xs">• {champion.review.role}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Champions;
