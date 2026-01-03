'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);


  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && sectionRef.current) {
      // GSAP animations for smooth entrance
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
        .from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");


    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="pt-32 pb-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/95 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent z-15"></div>
      <motion.div
        className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-300/10 z-5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-100/20 via-blue-200/30 to-blue-100/20 z-5"
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Background Effects - Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <main className="text-center max-w-5xl mx-auto">

          {/* Main Title */}
          <motion.h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 leading-tight mb-6 px-4 sm:px-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ReFlow: A Platform to Digitise your Factory
            </span>
          </motion.h1>
          <motion.p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl mx-auto mb-12 font-bold px-4 sm:px-6"
          >
            Empowering manufacturers with smart process analytics, zero downtime and data-driven decisions.
          </motion.p>


        </main>
      </div>

    </motion.section>
  );
}
