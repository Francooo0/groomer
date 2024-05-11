// components/HeroSection.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="relative bg-cream z-10">
            <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
                <Spline scene="https://prod.spline.design/KM9rm4ntPwVNIwlG/scene.splinecode" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center" style={{ minHeight: '100vh' }}>
                <div className="pt-20 text-center">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink to-beige"
                    >
                        Best Care For Your Furry Friends
                    </motion.h1>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-5"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-offwhite py-3 px-6 rounded-lg shadow-lg font-medium text-pink hover:bg-pink hover:text-offwhite transition-colors duration-300"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>

                <div ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 90 }}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-beige to-pink"
                        >
                            We Use Posh Products
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-3 text-lg md:text-xl text-cream"
                        >
                            Only the finest shampoos and conditioners for your beloved pets.
                        </motion.p>
                    </div>
                    <div className="flex-1 flex justify-center items-center p-10">
                        <motion.video
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="w-full h-auto rounded-xl"  // Using full width of the container, auto height, and added rounded corners
                            autoPlay
                            loop
                            muted
                            style={{ maxWidth: '500px' }}
                        >
                            <source src="posh.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </motion.video>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
        </div>
    );
};

export default HeroSection;
