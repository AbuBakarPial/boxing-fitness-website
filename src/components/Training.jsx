'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function Training() {
  const trainingTypes = [
    { name: 'JUDO', icon: '/icons/judo.png' },
    { name: 'TAEKWONDO', icon: '/icons/taekwondo.png' },
    { name: 'KICK BOXING', icon: '/icons/kickboxing.png' },
    { name: 'MIXED MARTIAL ARTS', icon: '/icons/mma.png' },
    { name: 'WRESTLING', icon: '/icons/wrestling.png' },
    { name: 'TAICHI', icon: '/icons/taichi.png' },
    { name: 'KUBODO', icon: '/icons/kubodo.png' },
    { name: 'KARATE', icon: '/icons/karate.png' }
  ];

  return (
    <section className="training-section training-section-two pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="section-header">
              <h2 className="section-title text-4xl font-bold mb-4">
                OUR <span className="text-red-600">TRAINING</span> CLASSES
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mb-30-none mt-12">
          {trainingTypes.map((training, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xxs-6 mb-8" data-aos="zoom-in" data-aos-duration="800" data-aos-delay={index * 100}>
              <div className="training-item text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="training-icon mb-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-md">
                      <span className="text-white font-bold text-sm">
                        {training.name.substring(0, 2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="training-content">
                  <h4 className="title text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                    <a href="#" className="hover:text-red-600 transition-colors">
                      {training.name}
                    </a>
                  </h4>
                </div>
                <div className="training-overlay absolute inset-0 bg-red-600 bg-opacity-95 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="training-overlay-content text-white text-center p-4">
                    <div className="training-overlay-icon mb-4">
                      <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-gray-100 transition-colors mx-auto transform hover:scale-110">
                        <FaArrowRight className="text-xl" />
                      </a>
                    </div>
                    <h4 className="title text-xl font-bold mb-2">
                      <a href="#" className="text-white hover:text-gray-200 transition-colors">
                        {training.name}
                      </a>
                    </h4>
                    <p className="text-sm opacity-90">Learn from the best masters</p>
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