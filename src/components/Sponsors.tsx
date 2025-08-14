'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Sponsors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sponsors = [
    { name: "Elite Sports Gear", logo: "/sponsors/sponsor-1.png" },
    { name: "Power Nutrition", logo: "/sponsors/sponsor-2.png" },
    { name: "Champion Athletics", logo: "/sponsors/sponsor-3.png" },
    { name: "Martial Arts Supply", logo: "/sponsors/sponsor-4.png" },
    { name: "Fight Wear Pro", logo: "/sponsors/sponsor-5.png" },
    { name: "Training Equipment Co", logo: "/sponsors/sponsor-6.png" },
    { name: "Sports Medicine Plus", logo: "/sponsors/sponsor-7.png" },
    { name: "Fitness First", logo: "/sponsors/sponsor-8.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(sponsors.length / 4));
    }, 4000);
    return () => clearInterval(interval);
  }, [sponsors.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(sponsors.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(sponsors.length / 4)) % Math.ceil(sponsors.length / 4));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full mb-6">
            <span className="font-semibold text-sm uppercase tracking-wide">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            TRUSTED <span className="text-red-600">SPONSORS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to partner with industry-leading brands that share our commitment to excellence in martial arts training and equipment.
          </p>
        </motion.div>
        
        {/* Sponsors Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {[0, 1].map((slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsors.slice(slideIndex * 4, (slideIndex + 1) * 4).map((sponsor, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 hover:bg-white border border-gray-200 hover:border-red-200">
                          <div className="aspect-square flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {sponsor.name.substring(0, 2)}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                                {sponsor.name}
                              </h3>
                            </div>
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
              aria-label="Previous sponsors"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Next sponsors"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Become a Sponsor</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Partner with us and reach thousands of martial arts enthusiasts. Join our network of trusted sponsors and grow your brand with us.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-red-500/25"
              >
                Partner With Us
                <FaChevronRight className="ml-3" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}