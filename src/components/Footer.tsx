'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaArrowRight, FaClock, FaCreditCard, FaFistRaised, FaFire, FaTrophy, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: 'About Us', href: '#' },
      { name: 'Our Programs', href: '#' },
      { name: 'Our Trainers', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Gallery', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    training: [
      { name: 'Boxing Fundamentals', href: '#' },
      { name: 'Advanced Boxing', href: '#' },
      { name: 'Muay Thai', href: '#' },
      { name: 'MMA Training', href: '#' },
      { name: 'Strength & Conditioning', href: '#' },
      { name: 'Self-Defense', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const stats = [
    { icon: FaUsers, label: 'Happy Members', value: '10,000+' },
    { icon: FaTrophy, label: 'Champions Trained', value: '500+' },
    { icon: FaFire, label: 'Classes Weekly', value: '200+' },
    { icon: FaFistRaised, label: 'Expert Trainers', value: '50+' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full mb-6">
                  <FaFire className="mr-2" />
                  <span className="font-bold text-sm uppercase tracking-wider">Stay Connected</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Join The Champion Community</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Subscribe to our newsletter for exclusive training tips, special offers, and updates on upcoming events and competitions.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="border-b border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-red-500 text-2xl" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mr-4">
                <FaFistRaised className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SWORD</h3>
                <span className="text-red-500 text-sm font-bold tracking-wider uppercase">FITNESS ACADEMY</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Premier boxing and fitness academy dedicated to transforming lives through elite training programs. Join thousands of champions who have started their journey with us.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: '#', label: 'Facebook' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaYoutube, href: '#', label: 'YouTube' },
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-red-400 transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-3 text-xs group-hover:text-red-400 transition-colors" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Training Programs</h4>
            <ul className="space-y-4">
              {footerLinks.training.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-red-400 transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-3 text-xs group-hover:text-red-400 transition-colors" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-4 flex-shrink-0 text-lg" />
                <div>
                  <p className="text-gray-400 leading-relaxed">123 Fitness Street, New York, NY 10001</p>
                  <p className="text-gray-400 leading-relaxed">Ground Floor, Sword Building</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-red-500 mr-4 flex-shrink-0 text-lg" />
                <div>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-500 mr-4 flex-shrink-0 text-lg" />
                <div>
                  <p className="text-gray-400">info@boxinggym.com</p>
                  <p className="text-gray-400">support@boxinggym.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-red-500 mt-1 mr-4 flex-shrink-0 text-lg" />
                <div>
                  <p className="text-gray-400 font-semibold mb-1">Working Hours</p>
                  <p className="text-gray-400">Mon-Fri: 5:00 AM - 10:00 PM</p>
                  <p className="text-gray-400">Sat-Sun: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 Sword Fitness Academy. All rights reserved. | Designed with <span className="text-red-500">❤</span> for champions
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <FaCreditCard className="mr-2 text-green-500" />
                <span>Secure Payments</span>
              </div>
              <div className="flex space-x-6">
                {footerLinks.support.slice(0, 3).map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}