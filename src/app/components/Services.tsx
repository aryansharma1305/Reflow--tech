"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isVideoInView = useInView(sectionRef, { margin: "-200px" });
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useEffect(() => {
    if (videoElementRef.current) {
      if (isVideoInView) {
        videoElementRef.current.play().catch(console.log);
        setIsPlaying(true);
      } else {
        videoElementRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isVideoInView]);
  useEffect(() => {
    const video = videoElementRef.current;
    if (!video) return;
    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
      }
    };
    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadeddata", () => setIsLoading(false));
    video.addEventListener("play", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadeddata", () => setIsLoading(false));
      video.removeEventListener("play", () => setIsPlaying(true));
      video.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, []);
  useEffect(() => {
    if (isHovered) {
      setHasInteracted(true);
      setShowControls(true);
    } else if (isPlaying && hasInteracted) {
      const timer = setTimeout(() => setShowControls(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setShowControls(false);
    }
  }, [isHovered, isPlaying, hasInteracted]);
  const togglePlay = () => {
    setHasInteracted(true);
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
        setIsPlaying(false);
      } else {
        videoElementRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoElementRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoElementRef.current.currentTime =
        percent * videoElementRef.current.duration;
    }
  };
  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };
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
          paragraph1Ref.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          paragraph2Ref.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  }, [isInView]);
  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-15"
          style={{ backgroundColor: "var(--color-surface-muted)" }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-accent)" }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            ref={textRef}
            className="space-y-6 lg:col-span-5 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2
              ref={titleRef}
              className="text-4xl lg:text-5xl font-black leading-tight mb-4"
              style={{
                fontFamily: "var(--font-poppins-bold)",
                color: "var(--color-primary)",
              }}
            >
              <span className="block">Services</span>
              <div
                className="w-24 h-1 rounded-full mt-4"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            </h2>
            <div ref={paragraph1Ref} className="relative">
              <div
                className="absolute -left-4 top-0 w-1 h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-primary), var(--color-accent))",
                }}
              ></div>
              <p
                className="text-base lg:text-lg leading-relaxed font-medium pl-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                <span
                  className="font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Use data
                </span>{" "}
                to increase yield, make production faster, and cheaper with
                fewer resources than ever before.
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {" "}
                  ReFlowMetrics
                </span>
                , Capture and analyse real-time data from your production to
                deliver actionable insights to drive the decisions that matter.
              </p>
            </div>
            <div ref={paragraph2Ref} className="relative">
              <div
                className="absolute -left-4 top-0 w-1 h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-accent), var(--color-primary))",
                }}
              ></div>
              <p
                className="text-base lg:text-lg leading-relaxed font-medium pl-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                <span
                  className="font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  No expensive integrators
                </span>
                , no custom development, no physical configuration.
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {" "}
                  Finally, the production monitoring and analytics platform you
                  deserve.
                </span>
              </p>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center space-x-3 p-3 rounded-lg"
                style={{ backgroundColor: "var(--color-surface-muted)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color: "var(--color-text-inverse)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Real-time Analytics
                </span>
              </div>
              <div
                className="flex items-center space-x-3 p-3 rounded-lg"
                style={{ backgroundColor: "var(--color-surface-muted)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color: "var(--color-text-inverse)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  AI-Powered
                </span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={videoRef}
            className="relative w-full lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              ref={videoContainerRef}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-700/30 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
            >
              <video
                ref={videoElementRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                poster="/translogo.png"
                onClick={togglePlay}
              >
                <source src="/reflow-console-tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <AnimatePresence>
                {(showControls || isHovered) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"
                  >
                    <div
                      ref={progressBarRef}
                      className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group/progress"
                      onClick={handleProgressClick}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative overflow-hidden"
                        style={{ width: `${progress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"></div>
                      </motion.div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.button
                          onClick={togglePlay}
                          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {isPlaying ? (
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          ) : (
                            <svg
                              className="w-6 h-6 text-white ml-0.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </motion.button>
                        <div className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                          <span>
                            {Math.floor(currentTime / 60)}:
                            {String(Math.floor(currentTime % 60)).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.button
                          onClick={toggleFullscreen}
                          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-white text-xs font-semibold uppercase tracking-wide">
                  Demo Video
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
