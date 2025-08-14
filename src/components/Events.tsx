'use client';

import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTicketAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Events() {
  const events = [
    {
      title: "National Karate Championship 2024",
      description: "Join us for the most prestigious karate competition in the country. Watch top athletes compete for the national title in various weight categories and skill levels.",
      date: "15 June 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Madison Square Garden, NYC",
      attendees: "500+",
      price: "$25-$75",
      image: "/events/championship.jpg"
    },
    {
      title: "Self-Defense Workshop for Women",
      description: "Empowering women through practical self-defense techniques. Learn essential skills from our expert female trainers in a supportive environment.",
      date: "22 June 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Sword Martial Arts Center",
      attendees: "50",
      price: "Free",
      image: "/events/workshop.jpg"
    },
    {
      title: "MMA Training Camp",
      description: "Intensive 3-day training camp featuring professional MMA fighters. Perfect for intermediate to advanced practitioners looking to elevate their skills.",
      date: "5-7 July 2024",
      time: "8:00 AM - 8:00 PM",
      location: "Elite Training Facility",
      attendees: "100",
      price: "$299",
      image: "/events/camp.jpg"
    }
  ];

  const upcomingEvents = [
    {
      title: "Kids Martial Arts Tournament",
      date: "29 June 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Community Center"
    },
    {
      title: "Weapons Training Seminar",
      date: "6 July 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Main Dojo"
    },
    {
      title: "Black Belt Testing",
      date: "13 July 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Sword Academy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <FaCalendarAlt className="mr-2" />
            <span className="font-semibold text-sm uppercase tracking-wide">Upcoming Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            OUR <span className="text-red-600">KARATE</span> EVENTS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Join our exciting events and competitions.
          </p>
        </motion.div>
        
        {/* Main Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Event Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCalendarAlt className="text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Featured Event</h3>
                  <p className="text-lg opacity-90">National Karate Championship</p>
                </div>
              </div>
              
              {/* Event Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  FEATURED
                </div>
              </div>
              
              {/* Event Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-2xl font-bold mb-2">{events[0].title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{events[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{events[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Events List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        <FaTicketAlt className="inline mr-1" />
                        Event
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        <FaCalendarAlt className="inline mr-1" />
                        {event.date}
                      </div>
                    </div>
                    <div className="text-red-600 font-bold text-lg">
                      {event.price}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-red-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2 text-red-500" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="mr-2 text-red-500" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Register Now
                    <FaArrowRight className="ml-2 text-sm" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">More Upcoming Events</h3>
              <p className="text-lg opacity-90">Stay tuned for more exciting martial arts events</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <FaCalendarAlt className="text-xl" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75">Date</div>
                      <div className="font-semibold">{event.date}</div>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                  <div className="space-y-2 text-sm opacity-90">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-xs" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-xs" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}