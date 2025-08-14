'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFistRaised, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'training', name: 'Training' },
    { id: 'facility', name: 'Facility' },
    { id: 'events', name: 'Events' },
    { id: 'members', name: 'Members' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/800/600',
      alt: 'Boxing Training Session',
      category: 'training',
      title: 'Intense Boxing Training',
      description: 'Professional boxing training with expert coaches'
    },
    {
      id: 2,
      src: '/api/placeholder/800/600',
      alt: 'Modern Gym Facility',
      category: 'facility',
      title: 'State-of-the-Art Facility',
      description: 'Premium equipment and spacious training areas'
    },
    {
      id: 3,
      src: '/api/placeholder/800/600',
      alt: 'Group Fitness Class',
      category: 'training',
      title: 'Group Fitness Session',
      description: 'Energetic group workouts for all fitness levels'
    },
    {
      id: 4,
      src: '/api/placeholder/800/600',
      alt: 'Championship Event',
      category: 'events',
      title: 'Championship Event',
      description: 'Annual boxing championship competition'
    },
    {
      id: 5,
      src: '/api/placeholder/800/600',
      alt: 'Weight Training Area',
      category: 'facility',
      title: 'Strength Training Zone',
      description: 'Fully equipped weight training area'
    },
    {
      id: 6,
      src: '/api/placeholder/800/600',
      alt: 'Member Achievement',
      category: 'members',
      title: 'Member Success Story',
      description: 'Celebrating member achievements and transformations'
    },
    {
      id: 7,
      src: '/api/placeholder/800/600',
      alt: 'Personal Training',
      category: 'training',
      title: 'One-on-One Coaching',
      description: 'Personalized training sessions with certified trainers'
    },
    {
      id: 8,
      src: '/api/placeholder/800/600',
      alt: 'Gym Interior',
      category: 'facility',
      title: 'Modern Gym Interior',
      description: 'Clean, modern, and motivating training environment'
    },
    {
      id: 9,
      src: '/api/placeholder/800/600',
      alt: 'Community Event',
      category: 'events',
      title: 'Community Gathering',
      description: 'Building community through fitness events'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateImage('prev');
        break;
      case 'ArrowRight':
        navigateImage('next');
        break;
    }
  };

  const currentImage = selectedImage ? filteredImages.find(img => img.id === selectedImage) : null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
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
            <FaFistRaised className="mr-3 text-lg" />
            <span className="font-bold text-sm uppercase tracking-wider">Photo Gallery</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            CAPTURING <span className="text-red-600">EXCELLENCE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our world-class facility, training sessions, events, and the amazing community that makes Sword Fitness Academy special.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
              }`}
            >
              <FaFilter className="mr-2 text-xs" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-red-500 to-red-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaFistRaised className="text-6xl mb-4 opacity-50" />
                    <p className="text-lg font-semibold opacity-80">{image.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                  >
                    <FaSearchPlus className="text-red-600 text-xl" />
                  </motion.div>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-sm font-semibold opacity-90">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">50+</div>
              <div className="text-sm font-semibold opacity-90">Events Covered</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">1000+</div>
              <div className="text-sm font-semibold opacity-90">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">15+</div>
              <div className="text-sm font-semibold opacity-90">Years of Memories</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaChevronLeft className="text-xl" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <FaChevronRight className="text-xl" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-red-500 to-red-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <FaFistRaised className="text-8xl mb-6 opacity-50" />
                    <h3 className="text-3xl font-bold mb-4">{currentImage.title}</h3>
                    <p className="text-lg opacity-80">{currentImage.description}</p>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white font-bold text-xl mb-2">{currentImage.title}</h3>
                <p className="text-white/80">{currentImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}