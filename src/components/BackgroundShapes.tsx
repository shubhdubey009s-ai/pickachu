import React from 'react';

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base black + gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-yellow-900"></div>

      {/* Moving golden light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,200,0,0.1),transparent_70%)] animate-pulse"></div>

      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundShapes;
