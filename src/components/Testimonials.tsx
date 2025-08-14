'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft, FaUser, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Black Belt Student',
      content: 'Sword Martial Arts has completely transformed my life. The instructors are incredibly knowledgeable and supportive. I\'ve not only learned self-defense but also gained confidence and discipline that extends to all areas of my life.',
      rating: 5,
      experience: '3 years',
      image: '/clients/client-1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Competition Fighter',
      content: 'The training here is unmatched. From the state-of-the-art facilities to the world-class coaches, every aspect is designed to help you reach your full potential. I\'ve won three regional championships thanks to their guidance.',
      rating: 5,
      experience: '5 years',
      image: '/clients/client-2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fitness Enthusiast',
      content: 'I joined looking for a workout routine and found so much more. The community here is amazing, and the martial arts training has improved my strength, flexibility, and mental focus. Highly recommend to anyone looking to transform their life.',
      rating: 5,
      experience: '2 years',
      image: '/clients/client-3.jpg'
    },
    {
      name: 'David Thompson',
      role: 'Veteran Student',
      content: 'After training at various schools across the country, I can confidently say Sword Martial Arts is the best. The combination of traditional values and modern training techniques creates the perfect learning environment.',
      rating: 5,
      experience: '7 years',
      image: '/clients/client-4.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg_img opacity-20" style={{ 
          backgroundImage: "url('/bg-testimonial.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center mb-16"
        >
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
            <div className="inline-flex items-center bg-red-600/20 text-red-400 px-4 py-2 rounded-full mb-6 border border-red-600/30">
              <FaAward className="mr-2" />
              <span className="font-semibold text-sm uppercase tracking-wide">Student Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              OUR <span className="text-red-500">STUDENT'S</span> TESTIMONIAL
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Hear from our successful students.
            </p>
          </div>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </motion.div>
        
        {/* Testimonials Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : 50 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${currentSlide === index ? 'relative z-10' : 'z-0'}`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-red-600 text-2xl" />
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    {/* Testimonial Content */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Student Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                          <FaUser className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-red-600 font-medium">{testimonial.role}</p>
                          <p className="text-sm text-gray-500">{testimonial.experience} experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Training Excellence</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Student Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[98%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Success Rate</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Expert Instructors</span>
                  <span className="font-bold">15+</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-full"></div>
                </div>
              </div>
            </div>
            
            {/* Quick Testimonials */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-white font-bold text-lg mb-4">Quick Reviews</h4>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm">{testimonial.name}</span>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm italic">
                      "{testimonial.content.substring(0, 80)}..."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-red-600 w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}