'use client';

import { FaArrowRight, FaFistRaised, FaFire, FaMedal, FaStar, FaDumbbell, FaHeartbeat, FaClock, FaUsers, FaTrophy, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Training() {
  const trainingTypes = [
    { 
      name: 'BOXING FUNDAMENTALS', 
      icon: FaFistRaised,
      description: 'Master the sweet science with proper stance, footwork, and punching techniques',
      level: 'Beginner Friendly',
      duration: '45-60 min',
      intensity: 'Medium',
      highlights: ['Stance & Footwork', 'Jab & Cross', 'Defense Techniques']
    },
    { 
      name: 'ADVANCED BOXING', 
      icon: FaTrophy,
      description: 'Take your skills to the next level with advanced combinations and sparring',
      level: 'Advanced',
      duration: '60-90 min',
      intensity: 'High',
      highlights: ['Advanced Combinations', 'Sparring Sessions', 'Fight Strategy']
    },
    { 
      name: 'MUAY THAI STRIKING', 
      icon: FaFire,
      description: 'Learn the art of eight limbs with powerful strikes and clinch work',
      level: 'Intermediate',
      duration: '60 min',
      intensity: 'High',
      highlights: ['Kick Techniques', 'Knee & Elbow Strikes', 'Clinch Work']
    },
    { 
      name: 'STRENGTH & CONDITIONING', 
      icon: FaDumbbell,
      description: 'Build explosive power and endurance with specialized athletic training',
      level: 'All Levels',
      duration: '45-60 min',
      intensity: 'High',
      highlights: ['Power Lifting', 'Plyometrics', 'Core Strength']
    },
    { 
      name: 'MMA COMBAT', 
      icon: FaShieldAlt,
      description: 'Complete mixed martial arts training for the modern fighter',
      level: 'Advanced',
      duration: '90 min',
      intensity: 'Extreme',
      highlights: ['Grappling', 'Striking', 'Ground & Pound']
    },
    { 
      name: 'FUNCTIONAL FITNESS', 
      icon: FaHeartbeat,
      description: 'Real-world fitness movements for everyday strength and mobility',
      level: 'All Levels',
      duration: '45 min',
      intensity: 'Medium',
      highlights: ['Mobility', 'Functional Movement', 'Injury Prevention']
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Members', icon: FaUsers },
    { number: '50+', label: 'Expert Trainers', icon: FaFistRaised },
    { number: '15+', label: 'Training Programs', icon: FaFire },
    { number: '98%', label: 'Success Rate', icon: FaTrophy }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
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
            className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full mb-8"
          >
            <FaFistRaised className="mr-3 text-lg" />
            <span className="font-bold text-sm uppercase tracking-wider">Elite Training Programs</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            TRANSFORM YOUR <span className="text-red-600">BODY</span> & <span className="text-red-600">MIND</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class training programs designed to unleash your inner champion. From beginner fundamentals to elite combat training, we have everything you need.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <stat.icon className="text-2xl text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {trainingTypes.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full">
                {/* Card Header */}
                <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <training.icon className="text-white text-lg" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <training.icon className="text-red-600 text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{training.name}</h3>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-300 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {training.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <FaMedal className="mr-2 text-red-500" />
                        <span className="font-medium">Level:</span>
                      </div>
                      <span className="font-semibold text-gray-700">{training.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <FaClock className="mr-2 text-blue-500" />
                        <span className="font-medium">Duration:</span>
                      </div>
                      <span className="font-semibold text-gray-700">{training.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <FaFire className="mr-2 text-orange-500" />
                        <span className="font-medium">Intensity:</span>
                      </div>
                      <span className="font-semibold text-gray-700">{training.intensity}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {training.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center group shadow-lg"
                  >
                    Join This Class
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">READY TO BECOME UNSTOPPABLE?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of champions who have transformed their lives through our elite training programs. Your journey starts now.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-2xl"
                >
                  Start Free Trial
                  <FaArrowRight className="ml-3" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center"
                >
                  View Schedule
                  <FaClock className="ml-3" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}