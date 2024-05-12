"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";


const Home = () => {
  return (
      <div className="flex flex-col min-h-screen pt-20">
        <HeroSection />
        <WhyChooseUsSection />

        {/* Other sections of my homepage */}
      </div>
  );
};

export default Home;
