"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaBook,
  FaTimesCircle,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Footer from "../components/Footer";

const ImageSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };
  return (
    <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/30 via-transparent to-transparent z-10" />
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
      >
        <FaChevronLeft className="text-xl text-[var(--color-primary)]" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
      >
        <FaChevronRight className="text-xl text-[var(--color-primary)]" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-8 h-2" : "bg-white/50 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default function BreweryPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-surface-muted)] to-[var(--color-surface-hover)]" />

        {/* Subtle static background orbs */}
        <div className="absolute top-[10%] right-[15%] w-[800px] h-[800px] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/15 rounded-full blur-3xl" />
        <div className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-accent)]/15 to-[var(--color-primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[700px] h-[700px] bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/10 rounded-full blur-3xl" />

        {/* Professional grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(var(--color-primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.section
        className="pt-32 pb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black mb-8 relative inline-block">
              <span className="text-[var(--color-primary)]">
                Digitise Brewery
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] font-bold max-w-4xl mx-auto mt-8">
              Transform your brewing operations with AI-powered smart analytics
              and real-time monitoring
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl" />
              <ImageSlideshow
                images={[
                  "/brewery/pexels-cottonbro-5532664.jpg",
                  "/brewery/pexels-cottonbro-5532837.jpg",
                ]}
                alt="Fermentation Tanks"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <h2 className="text-5xl font-black mb-6 relative">
                  <span className="text-[var(--color-primary)]">
                    FERMENTATION TANKS
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Brewers thrive on control and consistency. A single misstep
                    can be the difference between a great batch or a substandard
                    one. The urge to check, double check and triple check is
                    real.
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold">
                      With our{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        smart analytics platform
                      </span>{" "}
                      you will be able to monitor and regulate Temperature,
                      monitor Pressure, Specific gravity, pH, DO in real-time.
                      Our AI-driven analytics deliver actionable insights
                      helping new and existing breweries digitise, modernise and
                      most importantly give peace of mind to Brewers.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <h2 className="text-5xl font-black mb-6 relative">
                  <span className="text-[var(--color-primary)]">
                    BATCH CONSISTENCY
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Customers trust your brand and brew to deliver. Nobody likes
                    to have a beer that tastes funny or unfamiliar in some way.
                    A single bad batch can send the brand value out the window.
                    Manual sampling steals your time; Insights are restricted by
                    fermentation data that lives in notebooks.
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold mb-4">
                      With our{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        AI insights
                      </span>{" "}
                      every batch becomes more predictable and more profitable.
                      By understanding the trends and analysing historical data,
                      batch to batch consistency improves in a scientific
                      manner.
                    </p>
                    <p className="text-lg">
                      Keep track of your batches and flavour profiles easily by
                      digitising them. Trying a new recipe? Get detailed records
                      on the entire fermentation process, revisit the recipe,
                      make few changes – everything is logged for your
                      convenience and insight.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { text: "Fewer Notebooks", icon: FaBook },
                      { text: "Fewer Lost Batches", icon: FaTimesCircle },
                      { text: "Increased Margins", icon: FaChartLine },
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] p-4 rounded-xl text-white text-center shadow-lg"
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex justify-center mb-2">
                            <IconComponent className="text-2xl" />
                          </div>
                          <div className="text-sm font-bold">{item.text}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl" />
              <ImageSlideshow
                images={[
                  "/brewery/pexels-cottonbro-5532841.jpg",
                  "/brewery/pexels-cottonbro-5532845.jpg",
                ]}
                alt="Batch Consistency"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl" />
              <ImageSlideshow
                images={[
                  "/brewery/pexels-cottonbro-5532995.jpg",
                  "/brewery/pexels-cottonbro-5532996.jpg",
                ]}
                alt="Utilities"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <h2 className="text-5xl font-black mb-6 relative">
                  <span className="text-[var(--color-primary)]">UTILITIES</span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Beer brewing is a science transforming raw ingredients into
                    liquid gold. Behind this captivating process lies a critical
                    foundation that might go unnoticed: the utility requirements
                    - providing essential inputs such as{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      water, electricity, steam, natural gas, compressed air,
                      and refrigeration
                    </span>
                    .
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold mb-3">
                      <span className="font-bold text-[var(--color-primary)]">
                        Water quality and quantity
                      </span>{" "}
                      are essential factors in brewing. This element constitutes
                      your beer&apos;s composition, taste, and consistency.
                      Checking pH, mineral content, etc.
                    </p>
                    <p className="text-lg font-semibold">
                      <span className="font-bold text-[var(--color-primary)]">
                        Compressed Air
                      </span>{" "}
                      is useful for moving ingredients, cleaning, and bottling.
                      Any bottling issues might cause (pun intended) Bottleneck
                      problems!
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-bold text-white relative z-10">
                      With complete visibility into each utility, breweries can
                      anticipate demand and ensure that resources—whether
                      compressed air or steam are available when needed. Early
                      detection of utility fluctuations allows brewers to
                      intervene before they impact processes, proactive rather
                      than reactive.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <h2 className="text-5xl font-black mb-6 relative">
                  <span className="text-[var(--color-primary)]">
                    POST PRODUCTION
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    As a Master brewer after painstakingly ensuring each
                    parameter is in order, what if your distributers don&apos;t
                    maintain SOPs? Once again, your brand value goes for a
                    toss….
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold">
                      We monitor your{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        supply chain and distribution points
                      </span>{" "}
                      to ensure that your brew is being kept at the right
                      temperature so that it tastes exactly as it did when it
                      left your facility. Any distributers trying to cut corners
                      with sub-par refrigerators can&apos;t do that to your
                      product!
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl" />
              <ImageSlideshow
                images={[
                  "/brewery/pexels-cottonbro-5532998.jpg",
                  "/brewery/pexels-daniel-dan-47825192-7598915.jpg",
                ]}
                alt="Post Production"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[{ src: "/Pharma/ETP1.png" }, { src: "/Pharma/ETP2.png" }].map(
                (img, idx) => (
                  <motion.div
                    key={idx}
                    className="relative h-72 rounded-2xl overflow-hidden shadow-xl group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img.src}
                      alt={`ETP ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                )
              )}
              <motion.div
                className="relative h-72 rounded-2xl overflow-hidden shadow-xl col-span-2 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Pharma/ETP3.jpeg"
                  alt="ETP Plant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <h2 className="text-5xl font-black mb-6 relative">
                  <span className="text-[var(--color-primary)]">
                    REGULATORY REQUIREMENTS
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Breweries must adhere to local and national regulations
                    related to brewery utility requirements and environmental
                    standards. Effluent release is regulated according to the
                    notification of the Ministry of Environment, Forest, and
                    Climate Change.
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold">
                      Our systems monitor the impurity levels of treated
                      effluent, including{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        pH, Biological Oxygen Demand (BOD), Chemical Oxygen
                        Demand (COD), Total Suspended Solids (TSS), Ammonia,
                        Nitrate, Chlorine
                      </span>
                      , etc.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-bold text-white relative z-10">
                      <span className="text-3xl"></span>
                      Ensuring that your manufacturing plant is compliant with
                      the Pollution Control Board&apos;s requirements. This
                      ensures less harm to the environment and reduction in
                      water pollution.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-primary)]">Our Clientele</span>
            <div className="h-1.5 w-40 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-6" />
          </motion.h2>
          <div className="flex justify-center">
            <motion.div
              className="relative group max-w-md w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              <motion.div
                className="relative bg-[var(--color-surface)]/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-[var(--color-border-subtle)] h-40 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/brewery/2Pints.jpg"
                  alt="2Pints"
                  fill
                  className="object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="text-2xl font-bold text-[var(--color-primary)]">2Pints</div>';
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
