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
        className="pt-24 pb-16 relative"
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
                Digitise Pharma
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] font-bold max-w-4xl mx-auto mt-8">
              Transform your pharmaceutical manufacturing with AI-powered smart
              analytics
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
              <motion.div
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Pharma/7xm68f1e18f9cd86.jpg"
                  alt="Reactor Rooms"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/30 via-transparent to-transparent" />
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
                    REACTOR ROOMS
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Did a batch fail? Why did it happen? When did it happen?
                    What were the events that could have warned that a batch was
                    about to fail? Was the cooling/heating curve maintained?
                  </p>
                  <motion.div
                    className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-primary)] shadow-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg font-semibold">
                      These are all questions that can be answered by using our{" "}
                      <span className="text-[var(--color-primary)] font-bold">
                        smart analytics platform
                      </span>
                      . You will get access to real-time and historical data on
                      batches running in reactor rooms.
                    </p>
                  </motion.div>
                  <p className="text-lg leading-relaxed">
                    By placing sensors, we are able to digitise all the
                    processes running in reactors. Real-time data on the{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      temperature, pressure, vacuum and other process parameters
                    </span>{" "}
                    are captured, thereby making sure that the recipes are being
                    followed to the highest standards.
                  </p>
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
                    UTILITY ROOMS
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Utility rooms act as the{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      heart of the industry
                    </span>
                    , supplying the required utilities such as steam, chilled
                    water, vacuum, pressurised air, etc., which are critical for
                    the proper operations of the pharmaceutical industry.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Sudden unprecedented drops in the supply of any of these
                    will result in the bottlenecking of reactor operations in
                    the plant premises, thereby reducing yield quantity and
                    quality.
                  </p>
                  <motion.div
                    className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xl font-bold text-white relative z-10">
                      On average our clients have seen their utilities improve
                      to more than 90% adherence to demand.
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
              <motion.div
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Pharma/1200px-Chiller.jpg"
                  alt="Utility Rooms"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/30 via-transparent to-transparent" />
              </motion.div>
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
                    EFFLUENT TREATMENT PLANTS
                  </span>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-4" />
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] relative z-10">
                  <p className="text-lg leading-relaxed">
                    Just as utility rooms are critical to ensure the pharma
                    reactors are functional,{" "}
                    <span className="font-bold text-[var(--color-primary)]">
                      effluent treatment plants or ETPs
                    </span>
                    , are critical to process the waste byproducts of the
                    chemical reactions.
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
                        pH, BOD, COD, TSS, Ammonia, Nitrate, Chlorine
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
                      This ensures less harm to the environment and reduction in
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/Pharma/Malladi.png", alt: "Malladi" },
              { src: "/Pharma/Proventus.png", alt: "Proventus" },
              { src: "/Pharma/SaiSupreme.png", alt: "Sai Supreme" },
            ].map((client) => (
              <motion.div
                key={client.alt}
                className="relative group"
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
