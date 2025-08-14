'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFistRaised, FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset animation after scroll
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotate: isClicked ? [0, -15, 15, -15, 15, 0] : 0
          }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-500/30 transition-all duration-300 group backdrop-blur-sm border border-red-500/20"
          aria-label="Scroll to top"
        >
          {/* Main Icon */}
          <motion.div
            animate={{ 
              y: isClicked ? [0, -8, 0] : 0,
              scale: isClicked ? [1, 1.3, 1] : 1,
              rotate: isClicked ? [0, -10, 10, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <FaFistRaised className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Arrow overlay */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ 
                scale: isClicked ? [0, 1.2, 1] : 0,
                opacity: isClicked ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowUp className="text-red-700 text-xs" />
            </motion.div>
          </motion.div>
          
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 border-2 border-red-400 rounded-full"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-red-300 rounded-full"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30"
            animate={{ 
              scale: isClicked ? [1, 1.5, 1] : 1,
              opacity: isClicked ? [0.3, 0.6, 0.3] : 0.3
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            Back to Top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}