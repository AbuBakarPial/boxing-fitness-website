'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaChevronDown, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      title: 'HOME',
      submenu: ['HOME ONE', 'HOME TWO']
    },
    { title: 'ABOUT US' },
    {
      title: 'TRAINING',
      submenu: ['TRAINING', 'TRAINING DETAILS']
    },
    {
      title: 'PAGES',
      submenu: ['EVENTS', 'EVENT DETAILS', 'PRICING PLAN', 'FAQ', 'GALLERY', 'APPLY', 'SIGN UP', 'SIGN IN', '404 PAGE']
    },
    {
      title: 'MASTERS',
      submenu: ['MASTERS', 'MASTERS DETAILS']
    },
    {
      title: 'NEWS',
      submenu: ['NEWS', 'NEWS CLASSIC', 'NEWS DETAILS']
    },
    { title: 'CONTACT US' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-gray-900 text-white py-2 hidden lg:block">
        <div className="container-fluid mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <FaMapMarkerAlt className="text-red-500" />
                <span>350 5th Ave, New York, NY 10118</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FaPhone className="text-red-500" />
                <span>+1 (800)-123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="social-links flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaGooglePlusG />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header-section header-section-two transition-all duration-300 ${isScrolled ? 'sticky top-0 z-50 bg-white shadow-lg' : ''}`}>
        <div className="header">
          <div className="header-bottom-area">
            <div className="container-fluid mx-auto px-4">
              <div className="header-menu-content">
                <nav className="navbar navbar-expand-xl p-0">
                  <a href="#" className="site-logo site-title d-block d-xl-none">
                    <div className="w-32 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SWORD</span>
                    </div>
                  </a>
                  <button 
                    className="navbar-toggler ml-auto text-gray-700 hover:text-red-600 transition-colors"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <FaBars className="text-xl" />
                  </button>
                  <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav main-menu ml-auto mr-auto flex flex-col xl:flex-row xl:items-center space-y-2 xl:space-y-0 xl:space-x-1">
                      {menuItems.map((item, index) => (
                        <li key={index} className="relative menu_has_children">
                          <a 
                            href="#" 
                            className="text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                            onClick={(e) => {
                              e.preventDefault();
                              if (item.submenu) toggleDropdown(index);
                            }}
                          >
                            {item.title}
                            {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                          </a>
                          {item.submenu && (
                            <ul className={`sub-menu absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 ${activeDropdown === index ? 'block' : 'hidden'}`}>
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                      <li className="d-none d-xl-block">
                        <a href="#" className="site-logo site-title">
                          <div className="w-40 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-4">
                            <span className="text-white font-bold text-2xl">SWORD</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}