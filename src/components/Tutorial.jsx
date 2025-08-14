'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';

export default function Tutorial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const tutorials = [
    {
      title: "THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORY",
      thumbnail: '/tutorials/tutorial-1.jpg'
    },
    {
      title: "THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORY",
      thumbnail: '/tutorials/tutorial-2.jpg'
    },
    {
      title: "THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORY",
      thumbnail: '/tutorials/tutorial-3.jpg'
    },
    {
      title: "THE BEST BOXERS IN THEIR WEIGH TARGET CATEGORY",
      thumbnail: '/tutorials/tutorial-4.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(tutorials.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [tutorials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(tutorials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(tutorials.length / 3)) % Math.ceil(tutorials.length / 3));
  };

  return (
    <section className="tutorial-section pt-20 pb-20">
      <div className="container-fluid px-4">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-8 col-md-6 text-center">
            <div className="section-header">
              <h2 className="section-title text-4xl font-bold mb-4">
                OUR <span className="text-red-600">KARATE</span> TUTORIAL
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mb-30-none mt-12">
          <div className="col-xl-12">
            <div className="tutorial-slider relative overflow-hidden">
              <div className="swiper-wrapper flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {[0, 1].map((slideIndex) => (
                  <div key={slideIndex} className="swiper-slide w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {tutorials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((tutorial, index) => (
                        <div key={index} className="tutorial-item group cursor-pointer">
                          <div className="tutorial-thumb relative overflow-hidden rounded-lg shadow-lg">
                            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                              <span className="text-gray-500">Tutorial Thumbnail</span>
                            </div>
                            <div className="tutorial-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="tutorial-video">
                                <a 
                                  href="#" 
                                  className="video-icon w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors transform hover:scale-110"
                                >
                                  <FaYoutube className="text-2xl" />
                                </a>
                              </div>
                              <div className="tutorial-content absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="title text-xl font-bold leading-tight">
                                  {tutorial.title}
                                </h3>
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
                <div className="slider-prev bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all">
                  <FaChevronLeft onClick={prevSlide} />
                </div>
                <div className="slider-next bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all">
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