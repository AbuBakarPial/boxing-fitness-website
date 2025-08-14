'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Randall Schwartz',
      specialty: 'Women\'s Trainer',
      content: 'Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Fight School has specialized.',
      image: '/clients/client-1.jpg'
    },
    {
      name: 'Andru Smith',
      specialty: 'Boxing Trainer',
      content: 'Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Fight School has specialized.',
      image: '/clients/client-2.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`${index < 4 ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ));
  };

  return (
    <section className="client-section client-section-two pt-20 pb-20 bg-overlay-black bg_img relative overflow-hidden" style={{ backgroundImage: "url('/bg-testimonial.jpg')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-header-wrapper flex flex-col lg:flex-row justify-between items-center mb-12">
              <div className="section-header white text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="section-title text-4xl font-bold mb-4 text-white">
                  OUR <span className="text-red-500">STUDENT'S</span> TESTIMONIAL
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                </p>
              </div>
              <div className="slider-nav-area flex space-x-4">
                <div className="slider-prev bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <FaChevronLeft onClick={prevSlide} />
                </div>
                <div className="slider-next bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <FaChevronRight onClick={nextSlide} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="client-area">
          <div className="row justify-content-center align-items-end mb-30-none">
            <div className="col-xl-8 col-lg-8 col-md-6 mb-8 lg:mb-0">
              <div className="client-slider relative">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className={`swiper-slide transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                    >
                      <div className="client-item bg-white rounded-lg p-8 shadow-xl">
                        <div className="client-header flex items-start justify-between mb-6">
                          <div className="client-quote">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-red-600 text-xl font-bold">"</span>
                            </div>
                          </div>
                          <div className="client-thumb">
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Photo</span>
                            </div>
                          </div>
                        </div>
                        <div className="client-content mb-6">
                          <p className="text-gray-700 text-lg leading-relaxed italic">
                            {testimonial.content}
                          </p>
                        </div>
                        <div className="client-footer flex items-center justify-between">
                          <div className="client-footer-left">
                            <h4 className="title text-xl font-bold text-gray-800 mb-1">
                              <a href="#" className="text-gray-800 hover:text-red-600 transition-colors">
                                {testimonial.name}
                              </a>
                            </h4>
                            <span className="sub-title text-red-600 font-medium">
                              {testimonial.specialty}
                            </span>
                          </div>
                          <div className="client-footer-right">
                            <span className="ratings flex space-x-1">
                              {renderStars()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="client-right-thumb relative rounded-lg overflow-hidden shadow-2xl">
                <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Master Image</span>
                </div>
                <div className="client-thumb-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h4 className="title text-white text-2xl font-bold p-6">
                    MASTER UPPER CUT
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}