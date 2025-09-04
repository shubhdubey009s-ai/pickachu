import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Body & Mind
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gray-100 font-medium">
              Discover your incredible potential with our exceptional fitness programs crafted to accelerate 
              your weight loss journey, amplify your strength, and create your amazing body transformation.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/20 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-black/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-100 font-medium">Success Stories</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-black/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-100 font-medium">Expert Trainers</div>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-black/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-100 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;