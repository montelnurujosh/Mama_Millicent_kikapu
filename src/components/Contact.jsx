import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form submission (via Formspree)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/manprrnj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('⚠️ Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('⚠️ Network error. Please check your connection.');
    }
  };

  // ✅ WhatsApp setup
  const whatsappNumber = '254746980950'; // Sister’s WhatsApp
  const smsNumber = '254782572756'; // Mum’s SMS
  const message = encodeURIComponent('Hello Mama Millicent, I love your kikapus! I’d love to order one.');

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Reach Mama Millicent for her handmade kikapus — call, SMS, WhatsApp, or send us an email.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp + Call/SMS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp Contact */}
            <div className="bg-natural-beige rounded-lg p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-warm-brown mb-4">
                Chat on WhatsApp
              </h3>
              <p className="text-gray-700 mb-6">
                Chat directly with Millicent’s daughter on WhatsApp to place orders or get quick updates.
              </p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Message on WhatsApp
              </button>
            </div>

            {/* Call / SMS */}
            <div className="bg-soft-green/20 rounded-lg p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src="https://www.svgrepo.com/show/532110/smartphone.svg"
                  alt="SMS"
                  className="w-9 h-9 invert"
                />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-warm-brown mb-4">
                📞 Call or SMS Mama Millicent
              </h3>
              <p className="text-gray-700 mb-4">
                For quick inquiries or to place an order directly, reach her on phone or send a ready SMS.
              </p>
              <div className="space-y-3">
                <a href={`tel:+254795051633`} className="block text-blue-600 font-medium hover:underline">
                  Call: +254 795 051 633
                </a>
                <a
                  href={`sms:${smsNumber}?body=${message}`}
                  className="block text-blue-600 font-medium hover:underline"
                >
                  Send SMS
                </a>
                <p className="text-sm text-gray-600 italic mt-2">
                  
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-natural-beige rounded-lg p-8 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-playfair font-bold text-warm-brown mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-accent focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-accent focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your interest in our kikapus..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-warm-brown hover:bg-warm-brown/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
