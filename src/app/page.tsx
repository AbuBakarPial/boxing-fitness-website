'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Training from '@/components/Training';
import Membership from '@/components/Membership';
import Trainers from '@/components/Trainers';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Tutorial from '@/components/Tutorial';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Blog from '@/components/Blog';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Training />
      <Membership />
      <Trainers />
      <Events />
      <Testimonials />
      <Tutorial />
      <Contact />
      <Newsletter />
      <Blog />
      <Sponsors />
      <Footer />
      <ScrollToTop />
    </div>
  );
}