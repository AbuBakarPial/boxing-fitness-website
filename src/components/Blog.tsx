'use client';

import { FaCalendarAlt, FaUser, FaComment, FaArrowRight, FaBookmark } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Evolution of Martial Arts: From Ancient Traditions to Modern Practice",
      excerpt: "Explore how martial arts have evolved over centuries while maintaining their core principles and values...",
      author: "Master Chen",
      date: "15 June 2024",
      comments: 24,
      category: "History",
      image: "/blog/blog-1.jpg"
    },
    {
      title: "5 Essential Self-Defense Techniques Everyone Should Know",
      excerpt: "Learn practical self-defense techniques that can help you stay safe in various situations...",
      author: "Sarah Johnson",
      date: "12 June 2024",
      comments: 18,
      category: "Self-Defense",
      image: "/blog/blog-2.jpg"
    },
    {
      title: "Nutrition Tips for Martial Artists: Fueling Your Training",
      excerpt: "Discover the best nutritional practices to enhance your martial arts performance and recovery...",
      author: "Dr. Mike Rodriguez",
      date: "8 June 2024",
      comments: 31,
      category: "Nutrition",
      image: "/blog/blog-3.jpg"
    }
  ];

  const categories = [
    { name: "Training", count: 12 },
    { name: "Nutrition", count: 8 },
    { name: "Self-Defense", count: 15 },
    { name: "History", count: 6 },
    { name: "Competition", count: 9 }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            <FaBookmark className="mr-2" />
            <span className="font-semibold text-sm uppercase tracking-wide">Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            LATEST <span className="text-red-600">BLOG</span> POSTS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest martial arts tips, training techniques, and industry insights from our expert instructors and practitioners.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="md:flex">
                  {/* Blog Image */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaBookmark className="text-2xl" />
                        </div>
                        <p className="text-lg">Blog Image</p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-center backdrop-blur-sm">
                        <div className="text-xs opacity-75">DATE</div>
                        <div className="text-sm font-bold">{post.date.split(' ')[0]}</div>
                        <div className="text-xs">{post.date.split(' ')[1]}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-red-500" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-red-500" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaComment className="mr-2 text-red-500" />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
                    >
                      Read More
                      <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-red-50 transition-colors group"
                  >
                    <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                      {category.name}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      {category.count}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Popular Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 2).map((post, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
              <p className="text-sm opacity-90 mb-4">Get weekly martial arts tips and updates</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 inline-block"
              >
                Subscribe Now
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-red-500/25"
          >
            View All Posts
            <FaArrowRight className="ml-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}