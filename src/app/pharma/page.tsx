"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

export default function PharmaPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-surface-muted)] to-[var(--color-surface-hover)]" />

        {/* Animated background orbs */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-[800px] h-[800px] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-accent)]/15 to-[var(--color-primary)]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[20%] w-[700px] h-[700px] bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-accent)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -25, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />

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
        className="pt-24 pb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-black mb-8 relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-[var(--color-primary)]">
                Digitise Pharma
              </span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-[var(--color-text-secondary)] font-bold max-w-4xl mx-auto mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your pharmaceutical manufacturing with AI-powered smart
              analytics
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Pharma/7xm68f1e18f9cd86.jpg"
                  alt="Reactor Rooms"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-[var(--color-accent)] rounded-tl-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-[var(--color-accent)] rounded-br-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <motion.h2
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[var(--color-primary)]">
                    REACTOR ROOMS
                  </span>
                  <motion.div
                    className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Did a batch fail? Why did it happen? When did it happen?
                    What were the events that could have warned that a batch was
                    about to fail? Was the cooling/heating curve maintained?
                  </motion.p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{
                      x: 5,
                      boxShadow: "0 20px 40px rgba(0, 163, 255, 0.3)",
                    }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <p className="text-lg font-semibold relative z-10">
                      These are all questions that can be answered by using our{" "}
                      <span className="text-[var(--color-primary)] font-bold">
                        smart analytics platform
                      </span>
                      . You will get access to real-time and historical data on
                      batches running in reactor rooms.
                    </p>
                  </motion.div>
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    By placing sensors, we are able to digitise all the
                    processes running in reactors. Real-time data on the{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      temperature, pressure, vacuum and other process parameters
                    </span>{" "}
                    are captured, thereby making sure that the recipes are being
                    followed to the highest standards.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <motion.h2
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[var(--color-primary)]">
                    UTILITY ROOMS
                  </span>
                  <motion.div
                    className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Utility rooms act as the{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      heart of the industry
                    </span>
                    , supplying the required utilities such as steam, chilled
                    water, vacuum, pressurised air, etc., which are critical for
                    the proper operations of the pharmaceutical industry.
                  </motion.p>
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Sudden unprecedented drops in the supply of any of these
                    will result in the bottlenecking of reactor operations in
                    the plant premises, thereby reducing yield quantity and
                    quality.
                  </motion.p>
                  <motion.div
                    className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 163, 255, 0.4)",
                    }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent"
                      animate={{ x: [-100, 400] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <p className="text-xl font-bold text-white relative z-10 flex items-center gap-3">
                      On average our clients have seen their utilities improve
                      to more than 90% adherence to demand.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Pharma/1200px-Chiller.jpg"
                  alt="Utility Rooms"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-[var(--color-accent)] rounded-tr-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-[var(--color-accent)] rounded-bl-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { src: "/Pharma/ETP1.png", delay: 0.1 },
                { src: "/Pharma/ETP2.png", delay: 0.2 },
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative h-72 rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ delay: img.delay, duration: 0.5 }}
                >
                  <Image
                    src={img.src}
                    alt={`ETP ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
              <motion.div
                className="relative h-72 rounded-2xl overflow-hidden shadow-xl col-span-2 group"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Image
                  src="/Pharma/ETP3.jpeg"
                  alt="ETP Plant"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>
                <motion.h2
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[var(--color-primary)]">
                    EFFLUENT TREATMENT PLANTS
                  </span>
                  <motion.div
                    className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Just as utility rooms are critical to ensure the pharma
                    reactors are functional,{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      effluent treatment plants or ETPs
                    </span>
                    , are critical to process the waste byproducts of the
                    chemical reactions.
                  </motion.p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-lg font-semibold">
                      Our systems monitor the impurity levels of treated
                      effluent, including{" "}
                      <span className="font-bold text-[var(--color-primary)]">
                        pH, BOD, COD, TSS, Ammonia, Nitrate, Chlorine
                      </span>
                      , etc.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent"
                      animate={{ x: [-100, 400] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <p className="text-lg font-bold text-white relative z-10 flex items-center gap-3">
                      This ensures less harm to the environment and reduction in
                      water pollution.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-primary)]">Our Clientele</span>
            <motion.div
              className="h-1.5 w-40 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/Pharma/Malladi.png", alt: "Malladi", delay: 0.1 },
              { src: "/Pharma/Proventus.png", alt: "Proventus", delay: 0.2 },
              { src: "/Pharma/SaiSupreme.png", alt: "Sai Supreme", delay: 0.3 },
            ].map((client) => (
              <motion.div
                key={client.alt}
                className="relative group"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: client.delay,
                  duration: 0.5,
                  type: "spring",
                }}
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="relative bg-[var(--color-surface)]/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-[var(--color-border-subtle)] h-40 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
