'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaFistRaised, FaFire, FaDumbbell, FaHeartbeat } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "UNLEASH YOUR INNER CHAMPION",
      subtitle: "STRENGTH. POWER. DISCIPLINE.",
      description: "PREMIUM BOXING & FITNESS ACADEMY",
      badge: "#1 RATED BOXING GYM IN THE CITY",
      bgImage: "/boxing-hero-1.jpg"
    },
    {
      title: "TRANSFORM YOUR BODY & MIND",
      subtitle: "ELITE TRAINING. ELITE RESULTS.",
      description: "WORLD-CLASS FITNESS FACILITY",
      badge: "AWARD-WINNING TRAINING PROGRAMS",
      bgImage: "/boxing-hero-2.jpg"
    },
    {
      title: "JOIN THE FITNESS REVOLUTION",
      subtitle: "SWEAT. STRENGTH. SUCCESS.",
      description: "COMPLETE FITNESS SOLUTION",
      badge: "500+ SUCCESS STORIES",
      bgImage: "/boxing-hero-3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${slides[currentSlide].bgImage}')`,
            }}
          />
        </AnimatePresence>
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-red-500 opacity-20">
          <FaFire className="text-6xl animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 text-red-500 opacity-20">
          <FaDumbbell className="text-6xl animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-20 text-red-500 opacity-20">
          <FaHeartbeat className="text-6xl animate-pulse" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 group"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 group"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Slider Content */}
      <div className="relative w-full h-screen">
        <div className="flex transition-transform duration-1000 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full flex items-center">
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-left max-w-4xl ml-0 lg:ml-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="banner-content text-white"
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-block mb-8"
                    >
                      <span className="bg-red-600 text-white text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-full inline-flex items-center shadow-lg">
                        <FaFistRaised className="mr-3 text-lg" />
                        {slide.badge}
                      </span>
                    </motion.div>
                    
                    {/* Main Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    {/* Subtitle */}
                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-red-400 uppercase tracking-wide"
                    >
                      {slide.subtitle}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                    
                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="flex flex-col sm:flex-row gap-6 items-start"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-red-500/25"
                      >
                        Start Your Journey <FaArrowRight className="ml-3 text-sm" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center"
                      >
                        View Classes <FaArrowRight className="ml-3 text-sm" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-red-600 w-10' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}