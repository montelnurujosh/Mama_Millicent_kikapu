import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/Kikapu1.jpeg' },
    { id: 2, src: '/images/kikapu2.jpeg' },
    { id: 3, src: '/images/kikapu3.jpeg' },
    { id: 4, src: '/images/kikapu4.jpeg' },
    { id: 5, src: '/images/kikapu5.jpeg' },
    { id: 6, src: '/images/kikapu6.jpeg' },
    { id: 7, src: '/images/kikapu7.jpeg' },
    { id: 8, src: '/images/kikapu8.jpeg' },
    { id: 9, src: '/images/kikapu9.jpeg' },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery" className="py-20 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-warm-brown mb-4">
            Our Kikapu Collection
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Handwoven with care and tradition — each kikapu is unique, made from the same natural materials with love and skill.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt="Handwoven Kikapu"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-2xl"
              />

              {/* Hover Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-warm-brown/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <p className="text-white font-semibold text-lg text-center px-4">
                  Hey, you want this? <br /> Tap to order 👋🏽
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <img
                src={selectedImage.src}
                alt="Selected Kikapu"
                className="w-full h-96 object-cover object-center"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold text-warm-brown mb-3">
                  Beautifully Handcrafted Kikapu
                </h3>
                <p className="text-gray-600 mb-6">
                  Each kikapu is a timeless piece of Kenyan artistry — woven with patience, culture, and passion.
                </p>

                <a
                  href={`https://wa.me/254746980950?text=Hello!%20I'm%20interested%20in%20this%20beautiful%20kikapu.%20Is%20it%20still%20available?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
