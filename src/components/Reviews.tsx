import React from "react";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviews = [
    {
      name: "Raj",
      title: "45-year-old Professional with International Travel",
      rating: 5,
      text: "Being in a shape is a necessity of healthy long innings of life. It adds charm to our personality as well as boosts our confidence. I am 45 years old male and with a job demanding continuous international travel. Irregular eating and sleeping habits was a part of life but ultimately it is the pandemic which brought a big plus to health. Being fit is always a dream for everyone but with lockdown restrictions work out in a gym was not an option. So along with WFH (Work From Home 🏡), also started WOFH (Work Out From Home 🏡). But for WOFH, there is a big effort to maintain discipline, regularity as well as the most important to do every WO (Work Out) correctly to have positive impact."
    },
    {
      name: "Amit",
      title: "Fitness Transformation Journey",
      rating: 5,
      text: "Champion at state as well as National level and of course body building to name a few of Adi's achievements in a short span. Easy going style along with focus on achieving objectives are his exceptional qualities which dramatically help students like me. Inspite of a large age difference, he is always like the best buddy, making me comfortable during work out but stretching my limits beyond what I can imagine. And the results clearly demonstrate how he has increased the bandwidth and mental strength of a person along with physical capabilities."
    },
    {
      name: "Kiran",
      title: "Body Transformation Success",
      rating: 5,
      text: "It always feels nice when people complement for the drastic changes from Bhopu tummy to a fitter personality. Importantly whenever I see in mirror there is a gentle smile on the face with a message striking the mind 'This credit goes to Adi'. Finally this is just a beginning of fit and healthy lifestyle for me, I have a dream. While I continue to take my fitness learnings from Adi and few years down the line when the world 🌍 successfully comes out of this pandemic, would like to participate in a body building competition like Mumbai Shree or similar where Adi is the chief guest of honor giving a special award in senior citizen category to one of his student and a strong follower 🏅🤝. As he says 'Chal ready…….'"
    },
    {
      name: "Sneha",
      title: "Weight Loss Success - 83kg to 74kg",
      rating: 5,
      text: "Knowing him for several years but taking online sessions and learning from him for the past 6 months, the weight has come down from 83 Kg to 74 Kg and feels like someone has taken away the garbage of 9 Kgs. It feels so nice, energetic and light on feet. Following a work out regime is one part and the intake of nutritional diet prescribed by Adi including intermittent fasting for a specific duration is the root cause for these positive results."
    },
    {
      name: "Ravi",
      title: "Wardrobe Transformation Problem",
      rating: 5,
      text: "While I can keep mentioning all the positives that I have always gained from Adi, there is a big complaint as well: 'Adi you never told me that I will have to change my wardrobe after 6 months with all my shirts 👕 and trousers 👖 of 6 month ago had to be donated and refill with all slim fits.'"
    },
    {
      name: "Aditya",
      title: "Perfect Coach Discovery",
      rating: 5,
      text: "The way 'Daane daane pe likha hota hai khan wale ka naam, usi tarah Knowledgeable and Passionate Coach milna bhi hota hai naseeb walon ke naam'. I met my perfect Coach Aditya Sandu. Don't go by his age of 21 years but his inherent quality of teaching and motivating others, will put any senior experienced person to shame. Fabulous personality maintaining a perfect V shape physique, muscular structure and excelling in every sports that he has pursued till date right from his childhood including 'Sports person of the Year' in his school days, sprinting 🏃, running Marathons, international football ⚽ tournament, weight lifting 🏆"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } }
    ]
  };

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="group bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-102 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden mx-2">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-20">
        <Quote className="w-8 h-8 text-yellow-400" />
      </div>

      {/* Customer info */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/20 mr-4">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
            {review.name}
          </h4>
          <p className="text-sm text-gray-300">{review.title}</p>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex space-x-1 mb-6">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Review text */}
      <div className="text-gray-100 leading-relaxed text-sm">
        <p className="italic">"{review.text}"</p>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Listen from the People Like You
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives through dedicated fitness coaching. 
            Their journeys show what's possible when you commit to change.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Slider>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-100 mb-6 text-lg">
            Ready to write your own success story?
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105">
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;