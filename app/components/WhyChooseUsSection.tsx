// components/WhyChooseUsSection.tsx
import React, { useState } from 'react';
import { HoverEffect } from './Card-Hover-Effect';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUsSection: React.FC = () => {
    const features = [
        {
            title: 'Experienced Team',
            description: 'Our team has over 30 years of combined experience in providing the best care for pets.',
            link: '/team',
            icon: '/icons/team.svg'
        },
        {
            title: 'Top Quality Products',
            description: 'We use only the highest quality products that meet rigorous standards.',
            link: '/products',
            icon: '/icons/products.svg'
        },
        {
            title: 'Personalized Care',
            description: 'Each pet receives personalized care tailored to their specific needs.',
            link: '/care',
            icon: '/icons/care.svg'
        }
    ];

    const { scrollYProgress } = useViewportScroll();
    const [isHovered, setIsHovered] = useState<number | null>(null);

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-custom-pink-lightest text-center py-20 px-4 relative overflow-hidden"
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    scaleX: scale,
                    scaleY: scale,
                }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-custom-pink-darkest mb-10">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -90 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onHoverStart={() => setIsHovered(index)}
                            onHoverEnd={() => setIsHovered(null)}
                            className={`bg-custom-pink-lightest p-8 rounded-lg shadow-md ${
                                index === 1 ? 'md:scale-110' : ''
                            } ${isHovered === index ? 'z-10 shadow-xl' : ''}`}
                            style={{
                                perspective: 1000,
                                rotateY: isHovered === index ? 10 : 0,
                                translateZ: isHovered === index ? 50 : 0,
                            }}
                        >
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={48}
                                height={48}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-custom-pink-darkest mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                            <a
                                href={feature.link}
                                className="text-custom-pink-dark hover:text-custom-pink-darkest mt-4 inline-block"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute inset-0 z-0 flex justify-center items-center"
            >
                <div className="w-64 h-64 rounded-full bg-custom-pink-dark opacity-20 blur-3xl" />
            </motion.div>
        </motion.div>
    );
};

export default WhyChooseUsSection;