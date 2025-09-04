import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    // ... your testimonial data
  ];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              Discover how our clients have transformed their lives through our personalized fitness programs. 
              Their incredible journeys inspire us every day.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden shadow-lg shadow-black/50"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Customer photo */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/20 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - Customer testimonial`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-200 font-medium">{testimonial.title}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-100 leading-relaxed text-base mb-6 line-clamp-6 font-medium">
                "{testimonial.text}"
              </p>

              {/* Decorative bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-100 mb-6 text-lg font-medium">Ready to start your own transformation story?</p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105">
            Join Our Success Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
