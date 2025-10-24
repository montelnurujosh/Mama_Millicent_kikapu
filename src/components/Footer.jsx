import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const whatsappNumber = '254746980950'; // your sister’s WhatsApp
  const smsNumber = '254782572756'; // your mum’s SMS number
  const message = 'Hello Mama Millicent, I love your kikapus! How can I order?';
  const encodedMessage = encodeURIComponent(message);

  return (
    <footer className="bg-warm-white text-Black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Millicent's Kikapu Crafts
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Handmade with love in Kenya 🇰🇪
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center space-x-10 mb-8">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-accent transition-colors flex flex-col items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8 mb-1"
              />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* SMS */}
            <a
              href={`sms:${smsNumber}?body=${encodedMessage}`}
              className="hover:text-gold-accent rounded-full  transition-colors flex flex-col items-center"
            >
              <img
                src="https://www.svgrepo.com/show/532110/smartphone.svg"
                alt="SMS"
                className="w-9 h-9 invert"
              />
              <span className="text-sm font-medium">Send SMS</span>
              <p className="text-[12px] text-brown/70 mt-1 max-w-[180px] leading-snug">
               
              </p>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm opacity-75">
              © 2025 Millicent's Kikapu Crafts. All rights reserved.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Preserving Kenyan craftsmanship, one basket at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
