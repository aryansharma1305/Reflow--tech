'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);


    return (
        <motion.section
            ref={sectionRef}
            id="features"
            className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden -mt-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Animated top border glow */}
            <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-15"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full opacity-10"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Simple Headings Grid */}
                <motion.div
                    ref={cardsRef}
                    className="grid md:grid-cols-3 gap-8 lg:gap-12 py-16"
                >
                    {/* Smart Process Analytics */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 leading-tight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Smart Process Analytics
                        </motion.h2>
                    </motion.div>

                    {/* Zero Downtime */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 leading-tight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Zero Downtime
                        </motion.h2>
                    </motion.div>

                    {/* Data-Driven Decisions */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 leading-tight"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Data-Driven Decisions
                        </motion.h2>
                    </motion.div>
                </motion.div>
            </div>

            {/* Seamless Transition to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white z-10"></div>
        </motion.section>
    );
}