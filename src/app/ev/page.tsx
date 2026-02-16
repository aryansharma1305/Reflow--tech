"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

export default function EVPage() {
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

      {/* Hero Section with Kart -> Arrow -> Display */}
      <motion.section
        className="pt-32 pb-16 relative min-h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-left mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-[var(--color-text-primary)]">DRIVER RACING PERFORMANCE IN</span>
            <span className="block text-[var(--color-primary)]">ELECTRIC GO-KARTS</span>
          </motion.h1>

          {/* Kart -> Arrow -> Display Layout */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Kart Image */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-slate-700 rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/ev/1.png"
                  alt="Electric Go-Kart"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </motion.div>

            {/* Arrow - Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <motion.div
                className="relative w-48 h-36"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Image
                  src="/ev/3.png"
                  alt="Flow Arrow"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Arrow - Mobile */}
            <div className="lg:hidden flex justify-center w-full">
              <motion.div
                className="relative w-28 h-24 rotate-90"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Image
                  src="/ev/3.png"
                  alt="Flow Arrow"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Display Image + Metrics */}
            <div className="relative flex-shrink-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-primary-hover)] to-[var(--color-primary)] rounded-3xl opacity-20 blur-2xl" />
                <div className="relative w-80 h-72 md:w-[420px] md:h-[360px] bg-slate-600 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[var(--color-accent)]/30">
                  <Image
                    src="/ev/2.png"
                    alt="HD Display Interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Metrics Text */}
              <motion.div
                className="mt-8 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-semibold leading-relaxed">
                  Speed, RPM, Braking, Steering Input,
                </p>
                <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-semibold">
                  BMS and Cell Health
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Racing Performance Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[var(--color-primary)]">RACING PERFORMANCE</span>
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-[var(--color-text-secondary)] font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Precision Data for Faster, Smarter Driving
          </motion.p>

          <motion.div
            className="max-w-4xl mx-auto space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Understand which corners you are missing, when you are braking too early, and when you are braking too late. Our advanced telemetry solution converts every lap into clear, actionable performance insights.
            </p>
            <p>
              We have adapted our industrial-grade devices for electric go-karts, ensuring performance drivers and manufacturers receive reliable, high-accuracy data in real time.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Engineered for Electric Go-Karts */}
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 md:p-14 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              <span className="text-[var(--color-primary)]">
                Engineered for Electric Go-Karts
              </span>
              <div className="h-1.5 w-48 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-4" />
            </h2>

            <p className="text-center text-[var(--color-text-secondary)] mb-10 max-w-3xl mx-auto text-lg">
              Our devices are compatible with the latest electric motor control units and battery management systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Real-time motor performance data",
                "Battery health and efficiency monitoring",
                "Throttle, braking, and cornering analysis",
                "Lap-by-lap performance comparison",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-5 rounded-xl border border-[var(--color-border-subtle)]"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl mt-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg md:text-xl font-bold text-white text-center">
                All analytics are delivered live to both the race driver and the manufacturer.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Live Analytics & Remote Connectivity */}
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--color-primary)]">Live Analytics & Remote Connectivity</span>
            <div className="h-1.5 w-48 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-4" />
          </motion.h2>

          <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto text-lg">
            The system supports remote 4G connectivity with an integrated WiFi option, enabling uninterrupted data flow during testing, training, and race conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Live Dashboards", desc: "Real-time performance monitoring" },
              { title: "Cloud Analytics", desc: "Cloud-based reporting & insights" },
              { title: "Remote Tuning", desc: "Diagnostics & tuning support" },
              { title: "Fleet Monitoring", desc: "Driver & fleet performance tracking" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <motion.div
                  className="relative bg-[var(--color-surface)]/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-[var(--color-border-subtle)] h-full text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xl font-bold text-[var(--color-primary)] mb-3">{item.title}</div>
                  <div className="text-[var(--color-text-secondary)]">{item.desc}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-6 rounded-2xl border-l-4 border-[var(--color-accent)] shadow-lg max-w-3xl mx-auto mt-12"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-lg font-semibold text-[var(--color-text-secondary)] text-center">
              Critical data is accessible from{" "}
              <span className="text-[var(--color-primary)] font-bold">anywhere, at any time</span>.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Onboard Driver Displays */}
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 md:p-14 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              <span className="text-[var(--color-primary)]">
                Custom Onboard Driver Displays
              </span>
              <div className="h-1.5 w-48 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-4" />
            </h2>

            <p className="text-center text-[var(--color-text-secondary)] mb-10 max-w-3xl mx-auto text-lg">
              We provide onboard HMI displays designed specifically for drivers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Live speed, battery status, and lap information",
                "Customizable layouts based on driver preference",
                "Programmable alerts and indicators",
                "Optimized for clarity with minimal distraction",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-5 rounded-xl border border-[var(--color-border-subtle)]"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] p-6 rounded-2xl shadow-xl mt-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-lg md:text-xl font-bold text-white text-center">
                Each display can be configured to suit individual driving styles, race formats, or manufacturer requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Built for Performance and Scalability */}
      <motion.section
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-surface)]/70 backdrop-blur-2xl p-10 md:p-14 rounded-3xl shadow-2xl border border-[var(--color-border-subtle)] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-transparent rounded-full blur-2xl"></div>

            <h2 className="text-4xl md:text-5xl font-black text-center mb-10">
              <span className="text-[var(--color-primary)]">
                Built for Performance and Scalability
              </span>
              <div className="h-1.5 w-48 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mt-4" />
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Industrial reliability adapted for motorsport",
                "Designed for electric racing platforms",
                "Driver-focused insights beyond raw telemetry",
                "Manufacturer-ready analytics & data reports",
                "Scalable across fleets, academies, and championships",
                "Compatible with latest EV motor and BMS systems",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 bg-gradient-to-br from-[var(--color-surface-muted)] via-[var(--color-surface-hover)] to-[var(--color-surface-muted)] p-5 rounded-xl border border-[var(--color-border-subtle)]"
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

            <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Turn Data Into Lap Time
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mb-8">
                From driver development to vehicle optimization, our platform bridges the gap between telemetry data and measurable performance improvement.
              </p>
              <p className="text-xl md:text-2xl font-black text-white tracking-wide uppercase">
                Drive smarter. Analyze deeper. Perform better.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clientele Section - Only the FZero Logo */}
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
                  src="/ev/FZero Logo.png"
                  alt="Formula Zero"
                  fill
                  className="object-contain p-4"
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
