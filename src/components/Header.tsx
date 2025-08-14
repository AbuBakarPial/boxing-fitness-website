'use client';

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaTimes, FaFistRaised, FaUser, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { sanitizeUrl, sanitizeInput } from '@/lib/security';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      title: 'HOME',
      submenu: ['HOME ONE', 'HOME TWO', 'HOME THREE']
    },
    { 
      title: 'ABOUT US',
      href: '#about'
    },
    {
      title: 'PROGRAMS',
      submenu: ['BOXING', 'MUAY THAI', 'MMA', 'FITNESS', 'YOGA', 'STRENGTH TRAINING']
    },
    {
      title: 'SCHEDULE',
      submenu: ['CLASS SCHEDULE', 'PERSONAL TRAINING', 'GROUP SESSIONS']
    },
    {
      title: 'TRAINERS',
      submenu: ['OUR TEAM', 'TRAINER PROFILES', 'CERTIFICATIONS']
    },
    {
      title: 'GALLERY',
      href: '#gallery'
    },
    {
      title: 'PRICING',
      submenu: ['MEMBERSHIPS', 'DROP-IN RATES', 'PERSONAL TRAINING', 'CORPORATE PLANS']
    },
    { 
      title: 'CONTACT',
      href: '#contact'
    }
  ] as const;

  // Sanitize href to prevent XSS
  const sanitizeHref = (href: string) => {
    return sanitizeUrl(href);
  };

  // Sanitize text content
  const sanitizeText = (text: string) => {
    return sanitizeInput(text);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-gray-900 text-white py-3 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 text-sm">
                <FaMapMarkerAlt className="text-red-500 text-lg" />
                <span className="font-medium">{sanitizeText('123 Fitness Street, New York, NY 10001')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-red-500 text-lg" />
                <span className="font-medium">{sanitizeText('+1 (555) 123-4567')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-red-500 text-lg" />
                <span className="font-medium">{sanitizeText('info@boxinggym.com')}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="social-links flex space-x-4">
                <a 
                  href={sanitizeHref('#')} 
                  className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a 
                  href={sanitizeHref('#')} 
                  className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a 
                  href={sanitizeHref('#')} 
                  className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
              <div className="border-l border-gray-700 pl-4">
                <a 
                  href={sanitizeHref('#')} 
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center"
                >
                  <FaUser className="mr-2" />
                  Member Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href={sanitizeHref('#')} className="flex items-center group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 shadow-lg">
                    <FaFistRaised className="text-white text-xl" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">{sanitizeText('SWORD')}</span>
                    <span className="block text-xs text-red-600 font-bold tracking-wider uppercase">FITNESS ACADEMY</span>
                  </div>
                </motion.div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <div className="flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.href ? (
                      <a
                        href={sanitizeHref(item.href)}
                        className="text-gray-800 hover:text-red-600 px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors flex items-center group"
                      >
                        <span className="group-hover:scale-105 transition-transform">{sanitizeText(item.title)}</span>
                      </a>
                    ) : (
                      <button
                        className="text-gray-800 hover:text-red-600 px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors flex items-center group"
                        onClick={() => item.submenu && toggleDropdown(sanitizeText(item.title))}
                      >
                        <span className="group-hover:scale-105 transition-transform">{sanitizeText(item.title)}</span>
                        {item.submenu && <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-300" />}
                      </button>
                    )}
                    {item.submenu && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-gray-100">
                        <div className="py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={sanitizeHref('#')}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-300 hover:pl-8"
                            >
                              {sanitizeText(subItem)}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href={sanitizeHref('#')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-red-500/25"
              >
                <FaCalendarAlt className="mr-2" />
                Book Trial
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0">
                      {item.href ? (
                        <a
                          href={sanitizeHref(item.href)}
                          className="w-full text-left px-3 py-4 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between font-bold uppercase"
                        >
                          <span>{sanitizeText(item.title)}</span>
                        </a>
                      ) : (
                        <button
                          className="w-full text-left px-3 py-4 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between font-bold uppercase"
                          onClick={() => item.submenu && toggleDropdown(sanitizeText(item.title))}
                        >
                          <span>{sanitizeText(item.title)}</span>
                          {item.submenu && (
                            <FaChevronDown 
                              className={`text-xs transition-transform duration-300 ${activeDropdown === sanitizeText(item.title) ? 'rotate-180' : ''}`}
                            />
                          )}
                        </button>
                      )}
                      {item.submenu && activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-6 py-2 space-y-1 bg-gray-50"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={sanitizeHref('#')}
                              className="block px-3 py-3 text-sm text-gray-600 hover:text-red-600 hover:bg-white transition-all duration-300 rounded font-medium"
                            >
                              {sanitizeText(subItem)}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <motion.a
                    href={sanitizeHref('#')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold text-center transition-all duration-300 inline-flex items-center justify-center shadow-lg"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Book Trial Class
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}