'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductImageSwitcher from './ProductImageSwitcher';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

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
        .from(modelContainerRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4")
        .from(paragraph1Ref.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4")
        .from(paragraph2Ref.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3")
        .from(buttonRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.2");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      id="our-product"
      className="py-16 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-15"
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
          className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full opacity-10"
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
        {/* Title */}
        <motion.h2
          ref={titleRef}
          className="text-4xl lg:text-5xl font-black text-center text-gray-900 mb-12"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Our Product
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - 3D Model / Image Switcher */}
          <motion.div
            ref={modelContainerRef}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-blue-100"
            style={{ minHeight: '400px' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProductImageSwitcher />
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* First Paragraph */}
            <motion.div
              ref={paragraph1Ref}
              className="relative"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed font-medium pl-6">
                The Alpha X package offers a comprehensive solution designed to enhance operational efficiency and data management for industrial processes. It includes a powerful device with 90 days of free software, AI-generated reports on demand, monthly reports, and three months of secure data storage, enabling continuous improvement and efficiency.
              </p>
            </motion.div>

            {/* Second Paragraph */}
            <motion.div
              ref={paragraph2Ref}
              className="relative"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-300 to-blue-500 rounded-full"></div>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed font-medium pl-6">
                The cornerstone of any factory&apos;s digital transformation begins with automated capture, transformation and interpretation of process data. ALPHA - X Series provides a scalable solution for chemical and manufacturing industries that can be self-installed to easily collect data from any piece of equipment and enable actionable machine insights in a matter of minutes.
              </p>
            </motion.div>

            {/* View More Button */}
            <motion.button
              ref={buttonRef}
              className="group relative inline-flex items-center px-8 py-3 bg-white border-2 border-gray-800 text-gray-900 rounded-xl font-bold text-base uppercase tracking-wide hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10">View More</span>
              <motion.div
                className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

