import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section */}
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
              Mama Millicent is a passionate artisan from Kenya, dedicated to
              preserving the ancient art of kikapu weaving. With over seven
              years of experience, she creates beautiful, functional baskets
              that carry the rich cultural heritage of her community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each kikapu is handwoven using traditional techniques passed down
              through generations. The process requires patience, skill, and a
              deep connection to the natural materials that give these baskets
              their unique character and durability.
            </p>
            <blockquote className="text-xl font-playfair italic text-warm-brown border-l-4 border-gold-accent pl-6 py-4">
              “Each basket carries a story — of culture, patience, and art.”
            </blockquote>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/MamaMillicent.jpeg"
                alt="Mama Millicent weaving a Kikapu"
                className="w-full max-w-md rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                <p className="text-white font-semibold text-lg">
                  Mama Millicent at work
                </p>
                <p className="text-sm text-gray-200">
                  Handcrafting authentic Kikapus with passion and skill
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
