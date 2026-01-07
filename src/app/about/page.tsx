"use client";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  FaIndustry,
  FaChartLine,
  FaCog,
  FaRocket,
  FaAward,
  FaUsers,
} from "react-icons/fa";
export default function AboutPage() {
  const stats = [
    { number: "2022", label: "Founded", icon: FaRocket },
    {
      number: "25+ Devices",
      label: "Operational In-Fieldit",
      icon: FaIndustry,
    },
    { number: "2+ Years", label: "In-field Deplyment", icon: FaAward },
  ];
  const values = [
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description:
        "We transform raw data into actionable insights that drive operational excellence.",
    },
    {
      icon: FaCog,
      title: "Innovation",
      description:
        "Cutting-edge technology solutions that keep you ahead of the competition.",
    },
    {
      icon: FaUsers,
      title: "Partnership",
      description:
        "We work closely with our clients to understand and solve their unique challenges.",
    },
  ];
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <motion.section
        className="pt-24 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-[700px] h-[700px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full lg:w-[45%] flex justify-center order-2 lg:order-1"
            >
              <motion.div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden w-full max-w-md lg:max-w-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-20"
                  viewBox="0 0 100 100"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M20,50 Q30,20 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    style={{ color: "var(--color-primary)" }}
                  />
                </motion.svg>
                <motion.svg
                  className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-20"
                  viewBox="0 0 100 100"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M20,50 Q30,80 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    style={{ color: "var(--color-primary)" }}
                  />
                </motion.svg>
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 relative z-10 leading-tight text-center lg:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div style={{ color: "var(--color-text-primary)" }}>
                    We Automate
                  </div>
                  <div
                    className="break-words"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Industries
                  </div>
                </motion.h1>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 lg:space-y-8 w-full lg:w-[45%] order-1 lg:order-2"
            >
              <div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6 break-words text-center lg:text-left"
                  style={{ color: "var(--color-primary)" }}
                >
                  About Us
                </h2>
              </div>
              <motion.div
                className="rounded-3xl p-6 sm:p-8 shadow-xl"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6 break-words"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  In the age of{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Industry 4.0
                  </span>
                  , staying ahead requires a competitive edge. Since our
                  founding in{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    2022
                  </span>
                  , We at ReFlow Technologies have been at the forefront of
                  driving digital transformation in factories.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6 break-words"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We specialize in the automated capture, transformation, and
                  contextualization of process data, empowering businesses to
                  achieve{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    zero downtime
                  </span>
                  ,{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    zero resource wastage
                  </span>
                  , and{" "}
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    maximum efficiency
                  </span>
                  .
                </p>
                <motion.div
                  className="p-6 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-primary-hover))",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p
                    className="text-xl font-bold"
                    style={{ color: "var(--color-text-inverse)" }}
                  >
                    Our vision is a future where every factory operates at peak
                    performance, setting new standards in operational
                    excellence.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-12 sm:py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-center"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent
                      className="text-2xl sm:text-3xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </motion.div>
                  <h3
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {stat.number}
                  </h3>
                  <p
                    className="text-base sm:text-lg font-semibold break-words"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-12 sm:py-16 pb-16 sm:pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 break-words">
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Core Values
              </span>
            </h2>
            <div
              className="h-1.5 w-32 sm:w-40 rounded-full mx-auto"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), transparent)",
                      opacity: 0.1,
                    }}
                  />
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent
                      className="text-xl sm:text-2xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </motion.div>
                  <h3
                    className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 relative z-10 break-words"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed relative z-10 break-words"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
