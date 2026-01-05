'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TypingAnimation = ({ text, speed = 50, delay = 0, loop = false, pauseTime = 2000, className = '' }: { text: string; speed?: number; delay?: number; loop?: boolean; pauseTime?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let intervalId: NodeJS.Timeout | null = null;
    
    const startTyping = () => {
      setIsDeleting(false);
      setIsTyping(true);
      currentIndex = 0;
      
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          if (intervalId) clearInterval(intervalId);
          
          if (loop) {
            timeoutId = setTimeout(() => {
              startDeleting();
            }, pauseTime);
          }
        }
      }, speed);
    };

    const startDeleting = () => {
      setIsDeleting(true);
      setIsTyping(false);
      currentIndex = text.length;
      
      intervalId = setInterval(() => {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          setIsDeleting(false);
          if (intervalId) clearInterval(intervalId);
          
          timeoutId = setTimeout(() => {
            startTyping();
          }, 500);
        }
      }, speed / 2);
    };

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay, loop, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      {(isTyping || isDeleting) && <span className="inline-block w-0.5 h-[1em] bg-blue-600 ml-1 animate-pulse align-middle">|</span>}
    </span>
  );
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && sectionRef.current) {
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
      className="pt-20 pb-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ fontFamily: 'var(--font-poppins-bold)' }}>
        <main>
          <motion.div
            ref={titleRef}
            className="mb-6 text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: '#0083e6' }}
            >
              <TypingAnimation text="ReFlow Console" speed={100} delay={300} loop={false} />
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 font-normal"
              style={{ color: '#0083e6', fontWeight: 400 }}
            >
              <TypingAnimation text="A Platform to Digitise your Factory." speed={70} delay={2000} loop={false} />
            </motion.h2>
          </motion.div>
          <motion.p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed max-w-5xl mb-12 font-bold text-center mx-auto"
          >
            Empowering manufacturers with smart process analytics, zero downtime and data-driven decisions.
          </motion.p>
        </main>
      </div>
    </motion.section>
  );
}
