'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaAward, FaUsers, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaFistRaised, FaMedal, FaFire, FaHeartbeat, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Trainers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trainers = [
    { 
      name: 'Marcus "The Titan" Steel', 
      specialty: 'Head Boxing Coach', 
      image: '/trainers/trainer-1.jpg',
      experience: '20+ years',
      students: '2000+',
      rating: 4.9,
      bio: 'Former heavyweight champion with Olympic training experience',
      achievements: ['World Champion', 'Olympic Medalist', '15+ Title Defenses'],
      expertise: ['Boxing Fundamentals', 'Advanced Striking', 'Fight Strategy']
    },
    { 
      name: 'Sandra "Phoenix" Rodriguez', 
      specialty: 'Muay Thai Specialist', 
      image: '/trainers/trainer-2.jpg',
      experience: '15+ years',
      students: '1500+',
      rating: 4.8,
      bio: 'Lumpinee Stadium champion with authentic Thai fighting experience',
      achievements: ['Lumpinee Champion', 'Multiple Title Holder', '100+ Fights'],
      expertise: ['Muay Thai', 'Clinch Work', 'Elbow & Knee Techniques']
    },
    { 
      name: 'Alex "Thunder" Thompson', 
      specialty: 'MMA Director', 
      image: '/trainers/trainer-3.jpg',
      experience: '12+ years',
      students: '1200+',
      rating: 4.9,
      bio: 'UFC veteran with comprehensive combat sports background',
      achievements: ['UFC Veteran', 'Grappling Expert', 'Striking Specialist'],
      expertise: ['MMA', 'Brazilian Jiu-Jitsu', 'Wrestling', 'Striking']
    },
    { 
      name: 'Elena "Iron" Volkov', 
      specialty: 'Strength & Conditioning', 
      image: '/trainers/trainer-4.jpg',
      experience: '18+ years',
      students: '3000+',
      rating: 5.0,
      bio: 'Olympic-level strength coach with sports science background',
      achievements: ['Olympic Coach', 'Sports Science PhD', 'Elite Athlete Developer'],
      expertise: ['Strength Training', 'Conditioning', 'Injury Prevention', 'Nutrition']
    },
    { 
      name: 'Jake "Lightning" Chen', 
      specialty: 'Kickboxing Expert', 
      image: '/trainers/trainer-5.jpg',
      experience: '14+ years',
      students: '1800+',
      rating: 4.8,
      bio: 'World kickboxing champion with explosive fighting style',
      achievements: ['World Champion', 'Knockout Artist', 'Technical Master'],
      expertise: ['Kickboxing', 'Speed Training', 'Combination Drills']
    },
    { 
      name: 'Maya "Warrior" Williams', 
      specialty: 'Women\'s Self-Defense', 
      image: '/trainers/trainer-6.jpg',
      experience: '10+ years',
      students: '2500+',
      rating: 4.9,
      bio: 'Specialized in empowering women through combat training',
      achievements: ['Self-Defense Expert', 'Women\'s Advocate', 'Safety Instructor'],
      expertise: ['Self-Defense', 'Confidence Building', 'Practical Techniques']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(trainers.length / 3));
    }, 6000);
    return () => clearInterval(interval);
  }, [trainers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(trainers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(trainers.length / 3)) % Math.ceil(trainers.length / 3));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/20 to-transparent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full mb-8"
          >
            <FaTrophy className="mr-3 text-lg" />
            <span className="font-bold text-sm uppercase tracking-wider">Elite Coaching Staff</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
            MEET OUR <span className="text-red-500">WORLD-CLASS</span> TRAINERS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our elite team of champions and experts are dedicated to transforming your fitness journey. Learn from the best in the industry.
          </p>
        </motion.div>
        
        {/* Trainers Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {[0, 1].map((slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.slice(slideIndex * 3, (slideIndex + 1) * 3).map((trainer, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 h-full">
                          {/* Trainer Image */}
                          <div className="relative h-80 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                            <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                  <span className="text-white font-black text-3xl">
                                    {trainer.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center space-x-1 mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-sm" />
                                  ))}
                                  <span className="text-white text-sm ml-2">{trainer.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                              EXPERT
                            </div>
                            
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                      <FaStar key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                    <span className="text-sm ml-2">{trainer.rating}</span>
                                  </div>
                                  <div className="flex space-x-2">
                                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                      <FaFacebookF className="text-sm" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                      <FaInstagram className="text-sm" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                      <FaTwitter className="text-sm" />
                                    </a>
                                  </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                                <p className="text-red-400 font-medium mb-3">{trainer.specialty}</p>
                                <p className="text-sm text-gray-300 mb-4">{trainer.bio}</p>
                                <div className="flex flex-wrap gap-2">
                                  {trainer.achievements.slice(0, 2).map((achievement, idx) => (
                                    <span key={idx} className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs">
                                      {achievement}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Trainer Info */}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                              <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                                {trainer.specialty}
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                                  <FaAward className="text-red-500" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-400">Experience</p>
                                  <p className="text-sm text-white font-medium">{trainer.experience}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                                  <FaUsers className="text-red-500" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-400">Students</p>
                                  <p className="text-sm text-white font-medium">{trainer.students}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-400 mb-3">Expertise:</h4>
                              <div className="flex flex-wrap gap-2">
                                {trainer.expertise.slice(0, 3).map((skill, idx) => (
                                  <span key={idx} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <motion.a
                              href="#"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center shadow-lg"
                            >
                              Book Session
                              <FaChevronRight className="ml-2 text-sm" />
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
          <div className="flex justify-center mt-12 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-sm"
              aria-label="Previous trainers"
            >
              <FaChevronLeft className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-sm"
              aria-label="Next trainers"
            >
              <FaChevronRight className="text-lg" />
            </motion.button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">READY TO TRAIN WITH CHAMPIONS?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our elite training programs and learn from the best coaches in the industry. Your transformation starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-2xl"
                >
                  <FaFistRaised className="mr-3" />
                  Start Training Today
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center"
                >
                  Meet All Trainers
                  <FaUsers className="ml-3" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}