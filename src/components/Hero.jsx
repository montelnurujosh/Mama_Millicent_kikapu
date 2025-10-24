import React from "react";
import { motion } from "framer-motion";



const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/image2.png')",
        backgroundPosition: "center center", // move focus higher or lower
        backgroundSize: "100", // 🔥 Replace with your image path
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6"
        >
          Handwoven Kikapus — Crafted with Love by Mama Millicent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Discover the beauty of traditional Kenyan craftsmanship. Each basket
          tells a story of culture, patience, and art.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToGallery}
          className="bg-gold-accent hover:bg-gold-accent/80 text-warm-brown font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Our Creations
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
