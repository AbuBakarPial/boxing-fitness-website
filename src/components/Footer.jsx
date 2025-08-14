'use client';

import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  const openingHours = [
    'Monday : 11am-7pm',
    'Tuesday-Friday : 11am-8pm',
    'Saturday : 10am-6pm',
    'Sunday : 11am-6pm'
  ];

  const contactInfo = [
    '350 5th Ave, New York, NY 10118',
    '5th Ave, New York, NY 10118',
    { type: 'Email', value: 'example@email.com' },
    { type: 'Telephone', value: '+1 (800)-123-4567' }
  ];

  const galleryImages = Array.from({ length: 6 }, (_, i) => `/gallery/gallery-${i + 1}.jpg`);

  return (
    <footer className="footer-section footer-section-two pt-20 relative">
      <div className="footer-bg absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gray-900"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="row mb-30-none">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-8">
            <div className="footer-widget">
              <div className="footer-logo mb-6">
                <a href="#" className="site-logo site-title inline-block">
                  <div className="w-32 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">SWORD</span>
                  </div>
                </a>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Fight School has specialized in martial arts since 1986 and has one of the most
              </p>
              <ul className="footer-social flex space-x-4">
                <li>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                    <FaFacebookF className="text-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                    <FaTwitter className="text-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                    <FaGooglePlusG className="text-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300">
                    <FaInstagram className="text-sm" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-6 mb-8">
            <div className="footer-widget">
              <h4 className="title text-white text-xl font-bold mb-6 flex items-center">
                <FaClock className="mr-2 text-red-500" />
                Opening Hours
              </h4>
              <ul className="footer-list space-y-3">
                {openingHours.map((hours, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-6 mb-8">
            <div className="footer-widget">
              <h4 className="title text-white text-xl font-bold mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Contact us
              </h4>
              <ul className="footer-list space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <div>
                      {typeof info === 'string' ? (
                        info
                      ) : (
                        <>
                          <span className="text-red-400 font-medium">{info.type}:</span> {info.value}
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-xl-2 col-lg-2 col-md-6 mb-8">
            <div className="footer-widget">
              <h4 className="title text-white text-xl font-bold mb-6">
                Gallery
              </h4>
              <div className="footer-gallery-area">
                <div className="footer-gallery-wrapper grid grid-cols-3 gap-2">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="footer-gallery-thumb relative group cursor-pointer">
                      <div className="w-full h-20 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Photo</span>
                      </div>
                      <div className="footer-gallery-overlay absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded flex items-center justify-center">
                        <a href="#" className="text-white hover:text-red-400 transition-colors">
                          <FaInstagram className="text-lg" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-800 mt-12 pt-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-bottom-content text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Sword Martial Arts School. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}