import React from 'react';
import './background.css'; // make sure path is correct

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base black + gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-yellow-900"></div>

      {/* Animated golden spotlight */}
      <div className="absolute inset-0">
        <div className="absolute w-[150%] h-[150%] spotlight-glow animate-spotlight"></div>
      </div>

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundShapes;
