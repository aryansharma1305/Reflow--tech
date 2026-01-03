'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaIndustry, FaChartLine, FaCog, FaRocket, FaAward, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { number: '2022', label: 'Founded', icon: FaRocket },
    { number: '100+', label: 'Industries Served', icon: FaIndustry },
    { number: 'Zero', label: 'Downtime Goal', icon: FaAward },
  ];

  const values = [
    {
      icon: FaChartLine,
      title: 'Data-Driven',
      description: 'We transform raw data into actionable insights that drive operational excellence.'
    },
    {
      icon: FaCog,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions that keep you ahead of the competition.'
    },
    {
      icon: FaUsers,
      title: 'Partnership',
      description: 'We work closely with our clients to understand and solve their unique challenges.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-24 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-br from-blue-300/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              x: [0, -30, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center min-h-[600px]">
            {/* Left Side - Slogan */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-[45%] flex justify-center"
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Wavy Patterns */}
                <motion.svg
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    d="M20,50 Q30,20 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-blue-600"
                  />
                </motion.svg>
                <motion.svg
                  className="absolute bottom-0 left-0 w-40 h-40 opacity-20"
                  viewBox="0 0 100 100"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    d="M20,50 Q30,80 50,50 T80,50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-blue-600"
                  />
                </motion.svg>

                <motion.h1 
                  className="text-6xl lg:text-8xl font-black mb-4 relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-gray-900">We Automate</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                    Industries
                  </span>
                </motion.h1>
              </motion.div>
            </motion.div>

            {/* Right Side - About Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8 w-full lg:w-[45%]"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  About Us
                </motion.div>
                
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                    About Us
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              >
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  In the age of <span className="font-bold text-blue-600">Industry 4.0</span>, staying ahead requires a competitive edge. Since our founding in <span className="font-bold text-blue-600">2022</span>, We at ReFlow Technologies have been at the forefront of driving digital transformation in factories.
                </p>
                
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  We specialize in the automated capture, transformation, and contextualization of process data, empowering businesses to achieve <span className="font-bold text-blue-600">zero downtime</span>, <span className="font-bold text-blue-600">zero resource wastage</span>, and <span className="font-bold text-blue-600">maximum efficiency</span>.
                </p>
                
                <motion.div
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 rounded-2xl shadow-lg relative overflow-hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent"
                    animate={{ x: [-100, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-xl font-bold text-white relative z-10">
                    Our vision is a future where every factory operates at peak performance, setting new standards in operational excellence.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  <motion.h3
                    className="text-4xl font-black text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-lg font-semibold text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-16 pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <motion.div
              className="h-1.5 w-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
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

