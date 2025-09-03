import React from 'react';

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Four strategically positioned glowing shapes away from text */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl shadow-yellow-500/50 animate-float-slow glow-gold"></div>
      
      <div className="absolute bottom-20 right-8 w-36 h-36 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-45 shadow-2xl shadow-yellow-500/50 animate-float-medium shape-cube"></div>
      
      <div className="absolute top-1/2 left-2 w-28 h-28 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg transform rotate-30 shadow-2xl shadow-orange-500/50 animate-float-fast shape-3d"></div>
      
      {/* Fourth shape - positioned on the right side above the existing square */}
      <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 transform rotate-12 shadow-2xl shadow-yellow-500/50 animate-float-medium shape-cube hover:shadow-yellow-400/70 hover:scale-110 hover:rotate-45 transition-all duration-500 cursor-pointer"></div>
    </div>
  );
};

export default BackgroundShapes;