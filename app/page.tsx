"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import Test from "@/app/components/test";
import {OurServices} from "@/app/components/OurServices";

const Home = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <OurServices />
<Test />
        {/* Other sections of my homepage */}
      </div>
  );
};

export default Home;
