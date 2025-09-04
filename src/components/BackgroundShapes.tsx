import React from 'react';
import '../background.css'; // import the CSS we made

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base black + gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-yellow-900"></div>

      {/* Animated golden spotlight */}
      <div className="absolute inset-0">
        <div className="absolute w-[160%] h-[160%] spotlight-glow animate-spotlight"></div>
      </div>

      {/* Subtle noise overlay (inline SVG for grain effect) */}
      <svg className="absolute opacity-0 pointer-events-none">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.07]"
        style={{ filter: 'url(#grain)' }}
      ></div>
    </div>
  );
};

export default BackgroundShapes;
