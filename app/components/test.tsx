// components/HeroSection.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

const Test: React.FC = () => {
    // Access scroll values
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to opacity values for the text section
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const textScale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1]);

    return (
        <div className="hero-container" style={{ height: '200vh' }}> {/* Set a high height for scroll effect */}
            <div style={{ height: '100vh', position: 'sticky', top: 0 }}>

            </div>
            <motion.div
                style={{
                    opacity: textOpacity,
                    scale: textScale,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                We use posh products
            </motion.div>
        </div>
    );
};

export default Test;
