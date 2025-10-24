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
    <section id="home" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <img
        src="/image2.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white mb-6"
        >
          Handwoven Kikapus — Crafted with Love by Mama Millicent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Discover the beauty of traditional Kenyan craftsmanship. Each basket
          tells a story of culture, patience, and art.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToGallery}
          className="bg-gold-accent hover:bg-gold-accent/80 text-warm-brown font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Our Creations
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
