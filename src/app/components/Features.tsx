'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const chevron1Ref = useRef<HTMLDivElement>(null);
    const chevron2Ref = useRef<HTMLDivElement>(null);
    const chevron3Ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && sectionRef.current) {
            const tl = gsap.timeline();
            
            tl.from(chevron1Ref.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .from(chevron2Ref.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .from(chevron3Ref.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4");
        }
    }, [isInView]);

    return (
        <motion.section
            ref={sectionRef}
            id="features"
            className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-10"
                    animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full opacity-8"
                    animate={{
                        scale: [1.08, 1, 1.08],
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
                <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 lg:gap-16">
                    {/* Chevron 1 - Smart Process Analytics */}
                    <motion.div
                        ref={chevron1Ref}
                        className="relative flex flex-col items-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative" style={{ width: '340px', height: '180px' }}>
                            <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 320 140" preserveAspectRatio="none">
                                {/* Sleeker Blue Parallelogram */}
                                <path
                                    d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                                    fill="#0083e6"
                                />
                                {/* Taller Teal Chevron - Full Height */}
                                <path
                                    d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                                    fill="#00a3c4"
                                />
                            </svg>
                            {/* Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ marginLeft: '-15px' }}>
                                <Image 
                                    src="/icons/1.png" 
                                    alt="Smart Process Analytics"
                                    width={110}
                                    height={110}
                                    className="drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <h3 className="mt-6 text-lg md:text-xl font-bold text-gray-900 text-center leading-tight" style={{ fontFamily: 'var(--font-poppins-bold)' }}>
                            Smart Process<br />Analytics
                        </h3>
                    </motion.div>

                    {/* Chevron 2 - Data-Driven Decisions */}
                    <motion.div
                        ref={chevron2Ref}
                        className="relative flex flex-col items-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative" style={{ width: '340px', height: '180px' }}>
                            <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 320 140" preserveAspectRatio="none">
                                <path
                                    d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                                    fill="#0083e6"
                                />
                                <path
                                    d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                                    fill="#00a3c4"
                                />
                            </svg>
                            {/* Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ marginLeft: '-15px' }}>
                                <Image 
                                    src="/icons/2.png" 
                                    alt="Data-Driven Decisions"
                                    width={110}
                                    height={110}
                                    className="drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <h3 className="mt-6 text-lg md:text-xl font-bold text-gray-900 text-center leading-tight" style={{ fontFamily: 'var(--font-poppins-bold)' }}>
                            Data-Driven<br />Decisions
                        </h3>
                    </motion.div>

                    {/* Chevron 3 - Zero Downtime */}
                    <motion.div
                        ref={chevron3Ref}
                        className="relative flex flex-col items-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative" style={{ width: '340px', height: '180px' }}>
                            <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 320 140" preserveAspectRatio="none">
                                <path
                                    d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                                    fill="#0083e6"
                                />
                                <path
                                    d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                                    fill="#00a3c4"
                                />
                            </svg>
                            {/* Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ marginLeft: '-15px' }}>
                                <Image 
                                    src="/icons/3.png" 
                                    alt="Zero Downtime"
                                    width={110}
                                    height={110}
                                    className="drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <h3 className="mt-6 text-lg md:text-xl font-bold text-gray-900 text-center leading-tight" style={{ fontFamily: 'var(--font-poppins-bold)' }}>
                            Zero Downtime
                        </h3>
                    </motion.div>
                </div>
            </div>

            {/* Seamless Transition to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white z-10"></div>
        </motion.section>
    );
}
