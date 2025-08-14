'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Trainers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trainers = [
    { name: 'Randall Schwartz', specialty: 'Women\'s Trainer', image: '/trainers/trainer-1.jpg' },
    { name: 'Mike Johnson', specialty: 'Boxing Coach', image: '/trainers/trainer-2.jpg' },
    { name: 'Sarah Wilson', specialty: 'MMA Expert', image: '/trainers/trainer-3.jpg' },
    { name: 'David Chen', specialty: 'Karate Master', image: '/trainers/trainer-4.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(trainers.length / 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [trainers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(trainers.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(trainers.length / 2)) % Math.ceil(trainers.length / 2));
  };

  return (
    <section className="trainer-section trainer-section-two pt-20 pb-20 section--bg relative overflow-hidden bg-gray-900">
      <div className="trainer-element-one absolute top-10 left-10 opacity-20">
        <div className="w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      <div className="trainer-element-two absolute bottom-10 right-10 opacity-20">
        <div className="w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-header-wrapper flex flex-col lg:flex-row justify-between items-center">
              <div className="section-header white text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="section-title text-4xl font-bold mb-4 text-white">
                  OUR <span className="text-red-500">EXPERT</span> MASTERS
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                </p>
              </div>
              <div className="all-btn text-center lg:text-right">
                <a href="#" className="custom-btn bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 inline-block">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mb-30 mt-12">
          <div className="col-xl-12">
            <div className="trainer-slider relative overflow-hidden">
              <div className="swiper-wrapper flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {[0, 1].map((slideIndex) => (
                  <div key={slideIndex} className="swiper-slide w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {trainers.slice(slideIndex * 2, (slideIndex + 1) * 2).map((trainer, index) => (
                        <div key={index} className="trainer-item group cursor-pointer">
                          <div className="trainer-thumb relative overflow-hidden rounded-lg">
                            <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500">Trainer Image</span>
                            </div>
                            <div className="trainer-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="trainer-content absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="title text-2xl font-bold mb-2">
                                  <a href="#" className="text-white hover:text-red-400 transition-colors">
                                    {trainer.name}
                                  </a>
                                </h3>
                                <span className="sub-title text-red-400 font-medium">
                                  {trainer.specialty}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="slider-nav-area flex justify-center mt-8 space-x-4">
                <div className="slider-prev bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <FaChevronLeft onClick={prevSlide} />
                </div>
                <div className="slider-next bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <FaChevronRight onClick={nextSlide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}