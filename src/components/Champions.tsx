import React from 'react';
import { motion } from 'framer-motion';

const Champions = () => {
  const champions = [
    {
      id: 1,
      type: 'image',
      src: 'https://i.imgur.com/eSwFfDl.jpeg',
      alt: 'Champion transformation 1'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.imgur.com/CIQsSm8.jpeg',
      alt: 'Champion transformation 2'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://i.imgur.com/bfyagHf.jpeg',
      alt: 'Champion transformation 3'
    },
    {
      id: 4,
      type: 'video',
      embedCode: '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145513?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 1"></iframe></div>',
      alt: 'Champion transformation video 1'
    },
    {
      id: 5,
      type: 'video',
      embedCode: '<div style="padding:176.67% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1116145794?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 2"></iframe></div>',
      alt: 'Champion transformation video 2'
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
                    alt={champion.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div 
                    className="w-full h-full relative"
                    dangerouslySetInnerHTML={{ __html: champion.embedCode }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Champions;