import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Achieng from Kisumu',
    text: 'Mama Millicent’s kikapus are so beautiful and strong! I use mine every market day and it still looks brand new.',
  },
  {
    name: 'Wanjiku from Nairobi',
    text: 'The craftsmanship is amazing. I love how natural and colorful the designs are — I’ve even gifted some to my friends abroad!',
  },
  {
    name: 'Mwikali from Machakos',
    text: 'You can tell each basket is made with love and care. Perfect for storage, groceries, or even as decor at home.',
  },
  {
    name: 'Kevin from Mombasa',
    text: 'I ordered through WhatsApp and got my kikapu delivered fast. Excellent quality and friendly service!',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-natural-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-playfair font-bold text-warm-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Real stories from people who’ve experienced Mama Millicent’s beautiful handmade kikapus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-warm-brown text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                  {item.name.charAt(0)}
                </div>
                <p className="text-gray-700 italic mb-4">“{item.text}”</p>
                <p className="font-semibold text-warm-brown">— {item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
