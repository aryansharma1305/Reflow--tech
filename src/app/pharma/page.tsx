'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PharmaPage() {
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
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Digitise Pharma
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-800 font-bold max-w-4xl mx-auto mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your pharmaceutical manufacturing with AI-powered smart analytics
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Reactor Rooms Section */}
      <motion.section 
        className="py-16 relative -mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Animated Glow */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/pharma/7xm68f1e18f9cd86.jpg"
                  alt="Reactor Rooms"
                  fill
                  className="object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Corner Accents */}
                <motion.div 
                  className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-blue-400 rounded-br-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Glassmorphism Card */}
              <motion.div 
                className="bg-white/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-transparent rounded-full blur-2xl"></div>
                
                <motion.h2 
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                    REACTOR ROOMS
                  </span>
                  <motion.div 
                    className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                
                <div className="space-y-6 text-gray-800 relative z-10">
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Did a batch fail? Why did it happen? When did it happen? What were the events that could have warned that a batch was about to fail? Was the cooling/heating curve maintained?
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ x: 5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <p className="text-lg font-semibold relative z-10">
                      These are all questions that can be answered by using our <span className="text-blue-600 font-bold">smart analytics platform</span>. You will get access to real-time and historical data on batches running in reactor rooms.
                    </p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    By placing sensors, we are able to digitise all the processes running in reactors. Real-time data on the <span className="font-bold text-blue-600">temperature, pressure, vacuum and other process parameters</span> are captured, thereby making sure that the recipes are being followed to the highest standards.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Utility Rooms Section */}
      <motion.section 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Orb */}
        <motion.div 
          className="absolute top-40 left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side (Left) */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                className="bg-white/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-transparent rounded-full blur-2xl"></div>
                
                <motion.h2 
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                    UTILITY ROOMS
                  </span>
                  <motion.div 
                    className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                
                <div className="space-y-6 text-gray-800 relative z-10">
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Utility rooms act as the <span className="font-bold text-blue-600">heart of the industry</span>, supplying the required utilities such as steam, chilled water, vacuum, pressurised air, etc., which are critical for the proper operations of the pharmaceutical industry.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Sudden unprecedented drops in the supply of any of these will result in the bottlenecking of reactor operations in the plant premises, thereby reducing yield quantity and quality.
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 rounded-2xl shadow-xl relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(37, 99, 235, 0.4)" }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent"
                      animate={{ x: [-100, 400] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-xl font-bold text-white relative z-10 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      On average our clients have seen their utilities improve to more than 90% adherence to demand.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Side (Right) */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/pharma/1200px-Chiller.jpg"
                  alt="Utility Rooms"
                  fill
                  className="object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-blue-400 rounded-tr-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-blue-400 rounded-bl-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ETP Section */}
      <motion.section 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { src: '/pharma/ETP1.png', delay: 0.1 },
                { src: '/pharma/ETP2.png', delay: 0.2 }
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
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100"
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
                  src="/pharma/WhatsApp Image 2025-07-26 at 1.11.27 PM.jpeg"
                  alt="ETP Plant"
                  fill
                  className="object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                className="bg-white/70 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-transparent rounded-full blur-2xl"></div>
                
                <motion.h2 
                  className="text-5xl font-black mb-6 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                    EFFLUENT TREATMENT PLANTS
                  </span>
                  <motion.div 
                    className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                </motion.h2>
                
                <div className="space-y-6 text-gray-800 relative z-10">
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Just as utility rooms are critical to ensure the pharma reactors are functional, <span className="font-bold text-blue-600">effluent treatment plants or ETPs</span>, are critical to process the waste byproducts of the chemical reactions.
                  </motion.p>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-lg font-semibold">
                      Our systems monitor the impurity levels of treated effluent, including <span className="font-bold text-blue-600">pH, BOD, COD, TSS, Ammonia, Nitrate, Chlorine</span>, etc.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 rounded-2xl shadow-xl relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent"
                      animate={{ x: [-100, 400] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-lg font-bold text-white relative z-10 flex items-center gap-3">
                      <span className="text-3xl"></span>
                      This ensures less harm to the environment and reduction in water pollution.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clientele Section */}
      <motion.section 
        className="py-16 pb-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-5xl lg:text-6xl font-black text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              Our Clientele
            </span>
            <motion.div 
              className="h-1.5 w-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/pharma/Malladi.png', alt: 'Malladi', delay: 0.1 },
              { src: '/pharma/Proventus.png', alt: 'Proventus', delay: 0.2 },
              { src: '/pharma/SaiSupreme.png', alt: 'Sai Supreme', delay: 0.3 }
            ].map((client) => (
              <motion.div
                key={client.alt}
                className="relative group"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: client.delay, duration: 0.5, type: "spring" }}
              >
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 h-40 flex items-center justify-center"
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
