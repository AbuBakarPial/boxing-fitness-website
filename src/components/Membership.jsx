'use client';

import { useState } from 'react';
import { FaAngleRight, FaFistRaised, FaCrown, FaFire, FaStar, FaCheckCircle, FaUsers, FaClock, FaTrophy, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = {
    monthly: [
      {
        name: 'STRIKER',
        price: 79,
        period: 'month',
        description: 'Perfect for beginners and casual fighters',
        features: [
          '3 Classes Per Week',
          'Access to Boxing Fundamentals',
          'Basic Equipment Usage',
          'Monthly Progress Assessment',
          'Mobile App Access',
          'Community Support'
        ],
        popular: false,
        highlight: 'STARTER PACK',
        icon: FaFistRaised
      },
      {
        name: 'WARRIOR',
        price: 129,
        period: 'month',
        description: 'For serious athletes and competitors',
        features: [
          'Unlimited Classes',
          'All Training Programs Access',
          'Personal Training Session (1/month)',
          'Advanced Equipment Access',
          'Nutrition Consultation',
          'Competition Preparation',
          'Priority Booking',
          'Guest Passes (2/month)'
        ],
        popular: true,
        highlight: 'MOST POPULAR',
        icon: FaFire
      },
      {
        name: 'CHAMPION',
        price: 199,
        period: 'month',
        description: 'Elite training for professional fighters',
        features: [
          'Everything in Warrior',
          'Unlimited Personal Training',
          '24/7 Gym Access',
          'Private Locker Room',
          'Sports Massage Therapy',
          'Mental Coaching',
          'Travel Competition Support',
          'Sponsorship Opportunities',
          'Custom Meal Plans',
          'Video Analysis Sessions'
        ],
        popular: false,
        highlight: 'ELITE PACKAGE',
        icon: FaCrown
      }
    ],
    annual: [
      {
        name: 'STRIKER',
        price: 849,
        period: 'year',
        description: 'Perfect for beginners and casual fighters',
        features: [
          '3 Classes Per Week',
          'Access to Boxing Fundamentals',
          'Basic Equipment Usage',
          'Monthly Progress Assessment',
          'Mobile App Access',
          'Community Support'
        ],
        popular: false,
        highlight: 'SAVE 10%',
        icon: FaFistRaised
      },
      {
        name: 'WARRIOR',
        price: 1389,
        period: 'year',
        description: 'For serious athletes and competitors',
        features: [
          'Unlimited Classes',
          'All Training Programs Access',
          'Personal Training Session (1/month)',
          'Advanced Equipment Access',
          'Nutrition Consultation',
          'Competition Preparation',
          'Priority Booking',
          'Guest Passes (2/month)'
        ],
        popular: true,
        highlight: 'SAVE 10%',
        icon: FaFire
      },
      {
        name: 'CHAMPION',
        price: 2149,
        period: 'year',
        description: 'Elite training for professional fighters',
        features: [
          'Everything in Warrior',
          'Unlimited Personal Training',
          '24/7 Gym Access',
          'Private Locker Room',
          'Sports Massage Therapy',
          'Mental Coaching',
          'Travel Competition Support',
          'Sponsorship Opportunities',
          'Custom Meal Plans',
          'Video Analysis Sessions'
        ],
        popular: false,
        highlight: 'SAVE 10%',
        icon: FaCrown
      }
    ]
  };

  const currentPlans = isAnnual ? plans.annual : plans.monthly;

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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full mb-8"
          >
            <FaMedal className="mr-3 text-lg" />
            <span className="font-bold text-sm uppercase tracking-wider">Membership Plans</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            CHOOSE YOUR <span className="text-red-600">FIGHTING</span> PATH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the perfect membership plan that matches your fitness goals and commitment level. From beginners to elite fighters, we have the right plan for you.
          </p>
        </motion.div>
        
        {/* Pricing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 mb-16"
        >
          <span 
            className={`text-xl font-bold cursor-pointer transition-all duration-300 ${!isAnnual ? 'text-red-600 scale-110' : 'text-gray-500'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          <div 
            className="relative w-20 h-10 bg-gray-300 rounded-full cursor-pointer transition-colors"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div className={`absolute top-1 w-8 h-8 bg-red-600 rounded-full transition-transform duration-300 flex items-center justify-center ${isAnnual ? 'transform translate-x-10' : 'translate-x-1'}`}>
              <span className="text-white text-xs font-bold">{isAnnual ? 'Y' : 'M'}</span>
            </div>
          </div>
          <span 
            className={`text-xl font-bold cursor-pointer transition-all duration-300 ${isAnnual ? 'text-red-600 scale-110' : 'text-gray-500'}`}
            onClick={() => setIsAnnual(true)}
          >
            Yearly <span className="text-green-600 text-sm">(Save 10%)</span>
          </span>
        </motion.div>
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full ${plan.popular ? 'ring-4 ring-red-500' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <FaStar className="mr-2" />
                      {plan.highlight}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <plan.icon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                    <p className="text-red-100 mb-4">{plan.description}</p>
                    <div className="text-5xl font-black mb-2">
                      ${plan.price}
                      <span className="text-xl font-normal text-red-200">/{plan.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Plan Features */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-6">What's Included:</h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                            <FaCheckCircle className="text-green-600 text-sm" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/25' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    Get Started
                    <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">READY TO START YOUR JOURNEY?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of champions who have transformed their lives through our elite training programs. No contracts, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-2xl"
                >
                  <FaFistRaised className="mr-3" />
                  Start Free Trial
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center"
                >
                  Contact Sales
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