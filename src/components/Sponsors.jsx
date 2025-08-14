'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Sponsors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sponsors = [
    { name: 'Nike', logo: '/sponsors/nike.png' },
    { name: 'Adidas', logo: '/sponsors/adidas.png' },
    { name: 'Reebok', logo: '/sponsors/reebok.png' },
    { name: 'Under Armour', logo: '/sponsors/under-armour.png' },
    { name: 'Everlast', logo: '/sponsors/everlast.png' },
    { name: 'Venum', logo: '/sponsors/venum.png' },
    { name: 'Hayabusa', logo: '/sponsors/hayabusa.png' },
    { name: 'RDX Sports', logo: '/sponsors/rdx.png' }
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
    <section className="sponsors-section pt-20 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <h2 className="section-title text-4xl font-bold mb-4">
                OUR <span className="text-red-600">SPONSORS</span> & PARTNERS
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are proud to be supported by leading brands in the martial arts and sports industry.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mt-12">
          <div className="col-xl-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="sponsors-slider relative">
              <div className="swiper-wrapper overflow-hidden">
                <div className="swiper-slide transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsors.slice(0, 4).map((sponsor, index) => (
                      <div key={index} className="sponsor-item group">
                        <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center h-36 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                              <span className="text-red-600 font-bold text-lg">{sponsor.name.substring(0, 2)}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                              {sponsor.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-slide transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsors.slice(4, 8).map((sponsor, index) => (
                      <div key={index} className="sponsor-item group">
                        <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center h-36 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                              <span className="text-red-600 font-bold text-lg">{sponsor.name.substring(0, 2)}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                              {sponsor.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="slider-nav-area flex justify-center mt-12 space-x-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="slider-prev bg-white hover:bg-gray-100 text-gray-700 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg hover:shadow-xl hover:scale-110">
                  <FaChevronLeft onClick={prevSlide} className="text-lg" />
                </div>
                <div className="slider-next bg-white hover:bg-gray-100 text-gray-700 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg hover:shadow-xl hover:scale-110">
                  <FaChevronRight onClick={nextSlide} className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-16">
          <div className="col-xl-12 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className="sponsor-cta bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Interested in becoming a sponsor? Partner with us to support the martial arts community and promote your brand to our dedicated audience.
              </p>
              <a href="#" className="btn--base bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl">
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}