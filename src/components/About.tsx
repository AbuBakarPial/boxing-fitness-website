'use client';

import { motion } from 'framer-motion';
import { FaFistRaised, FaTrophy, FaUsers, FaHeartbeat, FaAward, FaMedal, FaStar, FaCheckCircle, FaFire, FaDumbbell, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: FaFistRaised,
      title: 'World-Class Training',
      description: 'Elite coaching from certified professionals with years of experience in combat sports and fitness training.'
    },
    {
      icon: FaTrophy,
      title: 'Proven Results',
      description: 'Join thousands of success stories from members who have achieved their fitness and fighting goals.'
    },
    {
      icon: FaUsers,
      title: 'Supportive Community',
      description: 'Become part of a family of like-minded individuals who motivate and inspire each other daily.'
    },
    {
      icon: FaHeartbeat,
      title: 'State-of-the-Art Facility',
      description: 'Train in a premium facility equipped with the latest gear and technology for optimal performance.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence', icon: FaAward },
    { number: '10,000+', label: 'Members Transformed', icon: FaUsers },
    { number: '50+', label: 'Expert Trainers', icon: FaMedal },
    { number: '25+', label: 'Championship Titles', icon: FaTrophy }
  ];

  const values = [
    {
      icon: FaFire,
      title: 'Passion',
      description: 'We live and breathe fitness. Our passion drives us to deliver exceptional training experiences every single day.'
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, respect, and professionalism in everything we do.'
    },
    {
      icon: FaHeartbeat,
      title: 'Excellence',
      description: 'We continuously strive for perfection in our training methods, facility, and member experience.'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'We foster a supportive environment where everyone feels welcome and motivated to achieve their best.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
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
            <FaFistRaised className="mr-3 text-lg" />
            <span className="font-bold text-sm uppercase tracking-wider">About Sword Fitness Academy</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            WHERE <span className="text-red-500">CHAMPIONS</span> ARE <span className="text-red-500">BORN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize fitness training, Sword Fitness Academy stands as a beacon of excellence in combat sports and athletic development. We don't just train bodies – we transform lives.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-red-600 to-red-800 h-96 lg:h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <FaFistRaised className="text-8xl text-white/20 mb-6" />
                  <div className="text-6xl font-black text-white mb-4">SWORD</div>
                  <div className="text-xl font-semibold text-white/80">FITNESS ACADEMY</div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">15+</div>
                  <div className="text-sm font-semibold text-white/80">YEARS OF EXCELLENCE</div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-2xl">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <FaStar className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sword Fitness Academy was established in 2009 with a simple mission: to provide world-class combat sports and fitness training to everyone who walks through our doors. What started as a small gym has grown into a premier fitness destination.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our founder, a former champion fighter, envisioned a place where beginners and professionals alike could train in a supportive, challenging environment. Today, that vision is realized through our state-of-the-art facility and elite coaching staff.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-3xl p-12 border border-red-600/30">
            <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{achievement.number}</div>
                  <div className="text-sm font-semibold text-gray-300 uppercase tracking-wide">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}