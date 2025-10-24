import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair font-bold text-warm-brown">
              About Mama Millicent
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mama Millicent is a passionate artisan from Kenya, dedicated to preserving the ancient art of kikapu weaving.
              With over 7 years of experience, she creates beautiful, functional baskets that carry the rich cultural heritage
              of her community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each kikapu is handwoven using traditional techniques passed down through generations. The process requires
              patience, skill, and a deep connection to the natural materials that give these baskets their unique character
              and durability.
            </p>
            <blockquote className="text-xl font-playfair italic text-warm-brown border-l-4 border-gold-accent pl-6 py-4">
              "Each basket carries a story — of culture, patience, and art."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-natural-beige rounded-lg p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-warm-brown/20 to-soft-green/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-warm-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">👩‍🎨</span>
                  </div>
                  <p className="text-warm-brown font-semibold">Mama Millicent at work</p>
                  <p className="text-sm text-gray-600 mt-2">Placeholder for artisan photo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;