"use client";
import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <WhyChooseUsSection />

            {/* Other sections of my homepage */}
        </div>
    );
};

export default Home;
