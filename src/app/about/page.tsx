"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
      label: "Operational In-Field",
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
            className="absolute top-20 right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full md:w-[48%] lg:w-[45%] flex justify-center order-2 md:order-1"
            >
              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-none"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 relative z-10 leading-tight text-center md:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div style={{ color: "var(--color-text-primary)" }}>
                    We Digitize
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
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 md:space-y-7 lg:space-y-8 w-full md:w-[48%] lg:w-[45%] order-1 md:order-2"
            >
              <div>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-5 lg:mb-6 break-words text-center md:text-left"
                  style={{ color: "var(--color-primary)" }}
                >
                  About Us
                </h2>
              </div>
              <motion.div
                className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className="text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-5 lg:mb-6 break-words"
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
                  className="text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-5 lg:mb-6 break-words"
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
                <div
                  className="p-5 sm:p-6 md:p-7 rounded-2xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-primary-hover))",
                  }}
                >
                  <p
                    className="text-lg sm:text-xl md:text-xl font-bold"
                    style={{ color: "var(--color-text-inverse)" }}
                  >
                    Our vision is a future where every factory operates at peak
                    performance, setting new standards in operational
                    excellence.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section 
        className="py-12 sm:py-16 md:py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl text-center"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                  >
                    <IconComponent
                      className="text-2xl sm:text-2xl md:text-3xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </div>
                  <h3
                    className="text-3xl sm:text-3xl md:text-4xl font-black mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {stat.number}
                  </h3>
                  <p
                    className="text-base sm:text-base md:text-lg font-semibold break-words"
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
        className="py-12 sm:py-16 md:py-20 pb-16 sm:pb-20 md:pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-14 md:mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-6 break-words">
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
              className="h-1.5 w-32 sm:w-36 md:w-40 rounded-full mx-auto"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl relative overflow-hidden group"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border-subtle)",
                    border: "1px solid",
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full blur-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), transparent)",
                      opacity: 0.1,
                    }}
                  />
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg relative z-10"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-primary-hover))",
                    }}
                  >
                    <IconComponent
                      className="text-xl sm:text-xl md:text-2xl"
                      style={{ color: "var(--color-text-inverse)" }}
                    />
                  </div>
                  <h3
                    className="text-xl sm:text-xl md:text-2xl font-black mb-3 sm:mb-3 md:mb-4 relative z-10 break-words"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm sm:text-sm md:text-base leading-relaxed relative z-10 break-words"
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
      <motion.section
        className="py-12 sm:py-16 md:py-20 pb-16 sm:pb-20 md:pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-20 right-20 w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-[500px] h-[500px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-14 md:mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-6 break-words">
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Founders
              </span>
            </h2>
            <div
              className="h-1.5 w-32 sm:w-36 md:w-40 rounded-full mx-auto"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9 md:gap-10 lg:gap-12">
            <motion.div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-subtle)",
                border: "1px solid",
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full blur-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, var(--color-primary), transparent)",
                  opacity: 0.1,
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.a
                  href="https://www.linkedin.com/in/chakreesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Chakreesh on LinkedIn"
                  className="relative mb-5 sm:mb-6 md:mb-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-accent))",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="relative rounded-full p-1 transition-all duration-300 group-hover:p-1.5"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-accent))",
                    }}
                  >
                    <div
                      className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden transition-transform duration-300"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <Image
                        src="/founder21.jpeg"
                        alt="Chakreesh - Click to view LinkedIn"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                      />
                    </div>
                  </div>
                </motion.a>
                <h3
                  className="text-2xl sm:text-2xl md:text-3xl font-black mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Chakreesh
                </h3>
                <p
                  className="text-base sm:text-base md:text-lg font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Co-Founder
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-xl relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-subtle)",
                border: "1px solid",
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full blur-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom right, var(--color-accent), transparent)",
                  opacity: 0.1,
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.a
                  href="https://www.linkedin.com/in/rajkumar-m13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with RajKumar on LinkedIn"
                  className="relative mb-5 sm:mb-6 md:mb-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-accent))",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="relative rounded-full p-1 transition-all duration-300 group-hover:p-1.5"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-primary), var(--color-accent))",
                    }}
                  >
                    <div
                      className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden transition-transform duration-300"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <Image
                        src="/founder3.jpeg"
                        alt="RajKumar - Click to view LinkedIn"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                      />
                    </div>
                  </div>
                </motion.a>
                <h3
                  className="text-2xl sm:text-2xl md:text-3xl font-black mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  RajKumar
                </h3>
                <p
                  className="text-base sm:text-base md:text-lg font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Co-Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
