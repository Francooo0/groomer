"use client";
import React from 'react';
import HeroSection from './components/HeroSection';
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";


const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <WhyChooseUsSection />

            {/* Other sections of my homepage */}
        </div>
    );
};

export default About;
