"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const TypingAnimation = ({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  pauseTime = 2000,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseTime?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
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
      {(isTyping || isDeleting) && (
        <span
          className="inline-block w-0.5 h-[1em] ml-1 animate-pulse align-middle"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const chevron1Ref = useRef<HTMLDivElement>(null);
  const chevron2Ref = useRef<HTMLDivElement>(null);
  const chevron3Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    if (isInView && sectionRef.current) {
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          chevron1Ref.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          chevron2Ref.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          chevron3Ref.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }
  }, [isInView]);
  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="pt-32 pb-16 relative overflow-hidden"
      style={{ background: "var(--color-background)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-surface), rgba(255,255,255,0.95), transparent)",
        }}
      ></div>
      <motion.div
        className="absolute top-0 left-0 right-0 h-48 z-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 179, 255, 0.05) 0%, transparent 50%, rgba(56, 217, 255, 0.08) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ backgroundColor: "var(--color-surface-muted)" }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15"
          style={{ backgroundColor: "var(--color-accent)" }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-primary)" }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ fontFamily: "var(--font-poppins-bold)" }}
      >
        <main>
          <div ref={titleRef} className="mb-6 text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              ReFlow Console
            </h1>
            <h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 font-normal"
              style={{ color: "var(--color-text-secondary)", fontWeight: 400 }}
            >
              <TypingAnimation
                text="A Platform to Digitise your Factory."
                speed={70}
                delay={2000}
                loop={false}
              />
            </h2>
          </div>
        </main>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 lg:gap-16">
          <motion.div
            ref={chevron1Ref}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative"
              style={{ width: "340px", height: "180px" }}
            >
              <svg
                className="w-full h-full drop-shadow-xl"
                viewBox="0 0 320 140"
                preserveAspectRatio="none"
              >
                <path
                  d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                  fill="var(--color-accent)"
                />
              </svg>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ marginLeft: "-15px" }}
              >
                <Image
                  src="/icons/1.png"
                  alt="Smart Process Analytics"
                  width={110}
                  height={110}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <h3
              className="mt-6 text-lg md:text-xl font-bold text-center leading-tight"
              style={{
                fontFamily: "var(--font-poppins-bold)",
                color: "var(--color-text-primary)",
              }}
            >
              Smart Process
              <br />
              Analytics
            </h3>
          </motion.div>
          <motion.div
            ref={chevron2Ref}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative"
              style={{ width: "340px", height: "180px" }}
            >
              <svg
                className="w-full h-full drop-shadow-xl"
                viewBox="0 0 320 140"
                preserveAspectRatio="none"
              >
                <path
                  d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                  fill="var(--color-accent)"
                />
              </svg>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ marginLeft: "-15px" }}
              >
                <Image
                  src="/icons/2.png"
                  alt="Data-Driven Decisions"
                  width={110}
                  height={110}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <h3
              className="mt-6 text-lg md:text-xl font-bold text-center leading-tight"
              style={{
                fontFamily: "var(--font-poppins-bold)",
                color: "var(--color-text-primary)",
              }}
            >
              Data-Driven
              <br />
              Decisions
            </h3>
          </motion.div>
          <motion.div
            ref={chevron3Ref}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative"
              style={{ width: "340px", height: "180px" }}
            >
              <svg
                className="w-full h-full drop-shadow-xl"
                viewBox="0 0 320 140"
                preserveAspectRatio="none"
              >
                <path
                  d="M 30 15 L 240 15 L 265 70 L 240 125 L 30 125 L 55 70 Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M 255 15 L 285 15 L 310 70 L 285 125 L 255 125 L 280 70 Z"
                  fill="var(--color-accent)"
                />
              </svg>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ marginLeft: "-15px" }}
              >
                <Image
                  src="/icons/3.png"
                  alt="Zero Downtime"
                  width={110}
                  height={110}
                  className="drop-shadow-lg"
                />
              </div>
            </div>
            <h3
              className="mt-6 text-lg md:text-xl font-bold text-center leading-tight"
              style={{
                fontFamily: "var(--font-poppins-bold)",
                color: "var(--color-text-primary)",
              }}
            >
              Zero Downtime
            </h3>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
