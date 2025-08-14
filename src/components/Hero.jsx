'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "BE A WORRIOR IN LIFE",
      subtitle: "MIND.BODY & SPIRIT IMPROVED",
      description: "KUNG FU SCHOOL IN CHINA",
      badge: "#1 MIXED MARTIAL ARTS SCHOOL IN MIAMI"
    },
    {
      title: "MASTER THE ART OF FIGHTING",
      subtitle: "STRENGTH.DISCIPLINE & HONOR",
      description: "ELITE TRAINING CENTER",
      badge: "WORLD CLASS MARTIAL ARTS ACADEMY"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="banner relative min-h-screen flex items-center">
      <div className="slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-lg">
        <FaChevronLeft onClick={prevSlide} />
      </div>
      <div className="slider-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shadow-lg">
        <FaChevronRight onClick={nextSlide} />
      </div>
      
      <div className="banner-slider overflow-hidden w-full">
        <div className="swiper-wrapper flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide w-full flex-shrink-0">
              <div className="banner-section banner-section-two relative min-h-screen flex items-center">
                <div className="banner-bg absolute inset-0 bg-black/40 bg_img" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/banner-bg.jpg')" }}></div>
                <div className="container-fluid mx-auto px-4 relative z-10">
                  <div className="row justify-content-center align-items-end mb-30-none">
                    <div className="col-xl-12 col-lg-12 text-center mb-30">
                      <div className="banner-content text-white" data-aos="fade-up" data-aos-duration="1200">
                        <span className="sub-title text-red-400 text-sm font-bold tracking-wider uppercase mb-4 inline-block bg-red-900/30 px-4 py-2 rounded-full">
                          {slide.badge}
                        </span>
                        <h1 className="title text-5xl md:text-7xl font-black mb-4 text-white leading-tight">
                          {slide.title}
                        </h1>
                        <h3 className="inner-title text-2xl md:text-3xl font-bold mb-4 text-gray-200">
                          {slide.subtitle}
                        </h3>
                        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                          {slide.description}
                        </p>
                        <div className="banner-btn flex flex-col sm:flex-row gap-4 justify-center items-center">
                          <a href="#" className="btn--base bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl">
                            Apply Now <FaArrowRight className="ml-2" />
                          </a>
                          <a href="#" className="btn--base bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center">
                            Training Classes <FaArrowRight className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}