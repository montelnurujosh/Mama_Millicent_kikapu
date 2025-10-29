import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sharon from Kisumu",
    text: "Mama Millicent’s kikapus are so beautiful and strong! I use mine every market day and it still looks brand new.",
    image: "/testimonials/sharon.jpg",
  },
  {
    name: "Patrick from Nairobi",
    text: "The craftsmanship is amazing. I love how natural and colorful the designs are — I’ve even gifted some to my friends abroad!",
    image: "/testimonials/patrick.jpg",
  },
  {
    name: "Wycliffe from Kisumu",
    text: "You can tell each basket is made with love and care. Perfect for storage, groceries, or even as decor at home.",
    image: "/testimonials/wycliffe.jpg",
  },
  {
    name: "Kevin from Mombasa",
    text: "I ordered through WhatsApp and got my kikapu delivered fast. Excellent quality and friendly service!",
    image: "/testimonials/kevin.jpg",
  },
  {
    name: "Naomi from Eldoret",
    text: "I absolutely love the colors and the traditional design. It reminds me of home every time I carry it.",
    image: "src/assets/images/mama-millicent.jpeg",
  },
  {
    name: "Beatrice from Kakamega",
    text: "The kikapu is strong, stylish, and eco-friendly. I recommend Mama Millicent’s baskets to everyone!",
    image: "/testimonials/beatrice.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-natural-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center"
            >
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-gold-accent shadow-md">
                <img
                  src={item.image}
                  alt={`${item.name}'s testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{item.text}”
              </p>
              <p className="font-semibold text-warm-brown">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
