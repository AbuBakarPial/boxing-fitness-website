'use client';

import { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBell, FaGift, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      setEmail('');
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Visual */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 p-8 lg:p-12 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                  >
                    <FaEnvelope className="text-5xl text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-4"
                  >
                    Stay Updated
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-8 max-w-md mx-auto"
                  >
                    Get the latest updates about our classes, events, and exclusive offers delivered straight to your inbox.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="space-y-3 text-left max-w-md mx-auto"
                  >
                    <div className="flex items-center text-gray-700">
                      <FaBell className="text-red-600 mr-3" />
                      <span className="text-sm">Weekly training tips and techniques</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaGift className="text-red-600 mr-3" />
                      <span className="text-sm">Exclusive member-only content</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-red-600 mr-3" />
                      <span className="text-sm">Early access to events and workshops</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right Side - Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-8 lg:p-12"
              >
                <div className="mb-8">
                  <h2 className="text-4xl font-black mb-4 text-gray-800">
                    SUBSCRIBE <span className="text-red-600">NOW</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Join thousands of martial arts enthusiasts who are already part of our community. Get exclusive content, training tips, and special offers.
                  </p>
                </div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-3xl text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Successfully Subscribed!</h3>
                    <p className="text-gray-600">Thank you for joining our community. Check your email for confirmation.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input 
                          id="email"
                          type="email" 
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          I agree to receive emails and special offers. Read our{' '}
                          <a href="#" className="text-red-600 hover:text-red-700 underline">
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-red-500/25"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          GET ALERT
                          <FaPaperPlane className="ml-3" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our Terms of Service and Privacy Policy. 
                    You can unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}