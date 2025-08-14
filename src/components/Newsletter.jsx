'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="subscribe-section pt-20 pb-20 bg-red-600 relative overflow-hidden">
      <div className="subscribe-element absolute top-0 right-0 opacity-10">
        <div className="w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="subscribe-area bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="subscribe-thumb p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaEnvelope className="text-5xl text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-gray-600">
                    Get the latest updates about our classes and events
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 bg-gray-50">
              <div className="subscribe-content p-8 lg:p-12">
                <div className="section-header white mb-8">
                  <h2 className="section-title text-3xl font-bold mb-4 text-gray-800">
                    SUBSCRIBE NOW
                  </h2>
                  <p className="text-gray-600">
                    Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
                  </p>
                </div>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                  <div className="relative">
                    <label className="subscribe-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaEnvelope />
                    </label>
                    <input 
                      type="email" 
                      className="form--control w-full pl-12 pr-32 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className="btn--base absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105"
                    >
                      GET ALERT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}