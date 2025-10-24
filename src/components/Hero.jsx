import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-natural-beige to-soft-green">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-warm-brown mb-6"
        >
          Handwoven Kikapus — Crafted with Love by Mama Millicent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-warm-brown/80 mb-8 max-w-2xl mx-auto"
        >
          Discover the beauty of traditional Kenyan craftsmanship. Each basket tells a story of culture, patience, and art.
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
      {/* Placeholder for background image - in real implementation, add a background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/10 to-warm-brown/10"></div>
    </section>
  );
};

export default Hero;