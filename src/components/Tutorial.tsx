'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube, FaPlay, FaClock, FaEye, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Tutorial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tutorials = [
    {
      title: "Basic Karate Stances and Postures",
      description: "Learn the fundamental stances that form the foundation of karate training",
      duration: "15:30",
      views: "125K",
      rating: 4.8,
      thumbnail: "/tutorials/tutorial-1.jpg",
      difficulty: "Beginner"
    },
    {
      title: "Advanced Punching Techniques",
      description: "Master the art of powerful and precise punching combinations",
      duration: "22:45",
      views: "89K",
      rating: 4.9,
      thumbnail: "/tutorials/tutorial-2.jpg",
      difficulty: "Advanced"
    },
    {
      title: "Self-Defense for Beginners",
      description: "Essential self-defense techniques everyone should know",
      duration: "18:20",
      views: "203K",
      rating: 4.7,
      thumbnail: "/tutorials/tutorial-3.jpg",
      difficulty: "Beginner"
    },
    {
      title: "Kata Performance and Meaning",
      description: "Understanding the deeper meaning behind traditional karate forms",
      duration: "25:15",
      views: "67K",
      rating: 4.9,
      thumbnail: "/tutorials/tutorial-4.jpg",
      difficulty: "Intermediate"
    },
    {
      title: "Sparring Strategies and Tactics",
      description: "Advanced techniques for competitive karate sparring",
      duration: "20:30",
      views: "94K",
      rating: 4.8,
      thumbnail: "/tutorials/tutorial-5.jpg",
      difficulty: "Advanced"
    },
    {
      title: "Flexibility and Warm-up Routines",
      description: "Essential stretching exercises to prevent injuries and improve performance",
      duration: "12:45",
      views: "156K",
      rating: 4.6,
      thumbnail: "/tutorials/tutorial-6.jpg",
      difficulty: "All Levels"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(tutorials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [tutorials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(tutorials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(tutorials.length / 3)) % Math.ceil(tutorials.length / 3));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <FaYoutube className="mr-2" />
            <span className="font-semibold text-sm uppercase tracking-wide">Video Tutorials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            OUR <span className="text-red-600">KARATE</span> TUTORIAL
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Learn from our expert instructors through these comprehensive video tutorials.
          </p>
        </motion.div>
        
        {/* Tutorial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {[0, 1].map((slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutorials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((tutorial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                          {/* Video Thumbnail */}
                          <div className="relative overflow-hidden">
                            <div className="w-full h-64 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                              <div className="text-center text-white">
                                <FaYoutube className="text-6xl mx-auto mb-4 opacity-80" />
                                <p className="text-lg">Tutorial Video</p>
                              </div>
                            </div>
                            
                            {/* Video Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                              <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 shadow-lg"
                              >
                                <FaPlay className="text-2xl ml-1" />
                              </motion.a>
                            </div>
                            
                            {/* Duration Badge */}
                            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                              <FaClock className="inline mr-1" />
                              {tutorial.duration}
                            </div>
                            
                            {/* Difficulty Badge */}
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tutorial.difficulty)}`}>
                                {tutorial.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          {/* Tutorial Info */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                              {tutorial.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {tutorial.description}
                            </p>
                            
                            {/* Stats */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <FaEye className="mr-1" />
                                  <span>{tutorial.views}</span>
                                </div>
                                <div className="flex items-center">
                                  <FaStar className="mr-1 text-yellow-400" />
                                  <span>{tutorial.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Watch Button */}
                            <motion.a
                              href="#"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
                            >
                              Watch Tutorial
                              <FaPlay className="ml-2 text-sm" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Previous tutorials"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Next tutorials"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
        
        {/* Featured Tutorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured Tutorial Series</h3>
                <p className="text-lg mb-6 opacity-90">
                  Complete your black belt journey with our comprehensive tutorial series covering everything from basic techniques to advanced forms.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-300 mr-2" />
                    <span>50+ Professional Video Lessons</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-300 mr-2" />
                    <span>Step-by-Step Instructions</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-300 mr-2" />
                    <span>Certificate of Completion</span>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-lg"
                >
                  Start Learning Now
                  <FaPlay className="ml-3" />
                </motion.a>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaYoutube className="text-4xl" />
                    </div>
                    <p className="text-lg font-semibold">Tutorial Series Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}