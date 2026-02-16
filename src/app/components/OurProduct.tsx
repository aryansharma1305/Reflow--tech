"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductImageSwitcher from "./ProductImageSwitcher";

export default function OurProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);
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
          modelContainerRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
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
      id="our-product"
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-15"
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
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-10"
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
        <h2
          ref={titleRef}
          className="text-4xl lg:text-5xl font-black text-center mb-12"
          style={{
            fontFamily: "var(--font-poppins-bold)",
            color: "var(--color-primary)",
          }}
        >
          Our Product
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            ref={modelContainerRef}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              minHeight: "400px",
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-subtle)",
              border: "2px solid",
            }}
          >
            <ProductImageSwitcher />
          </div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
                The Alpha X package offers a comprehensive solution designed to
                enhance operational efficiency and data management for
                industrial processes. It includes a powerful device with 30 days
                of free software, AI-generated reports on demand, monthly
                reports, and three months of secure data storage, enabling
                continuous improvement and efficiency.
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
                The cornerstone of any factory&apos;s digital transformation
                begins with automated capture, transformation and interpretation
                of process data. ALPHA - X Series provides a scalable solution
                for chemical and manufacturing industries that can be
                self-installed to easily collect data from any piece of
                equipment and enable actionable machine insights in a matter of
                minutes.
              </p>
            </div>
            <button
              ref={buttonRef}
              className="group relative inline-flex items-center px-8 py-3 rounded-xl font-bold text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-primary)",
                border: "2px solid",
                color: "var(--color-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-primary)";
                e.currentTarget.style.color = "var(--color-text-inverse)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
                e.currentTarget.style.color = "var(--color-primary)";
              }}
            >
              <span className="relative z-10">View More</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
