'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does ReFlow Technologies specialize in?",
      answer: "ReFlow Technologies specializes in enhancing industrial processes through advanced Industrial IoT (IIoT) 4.0 solutions. Our cutting-edge products and services focus on real-time data acquisition, comprehensive monitoring, and intelligent analysis to optimize operational efficiency, reduce costs, and drive innovation. We transform traditional manufacturing into smart, connected ecosystems that deliver measurable results and competitive advantages."
    },
    {
      question: "What is the ReFlow Alpha X series?",
      answer: "The ReFlow Alpha X series represents the pinnacle of IIoT innovation—a comprehensive suite of intelligent devices engineered to collect, transmit, and analyze data from industrial sensors with unprecedented precision. These state-of-the-art devices offer seamless integration with existing infrastructure, real-time analytics capabilities, and advanced online calibration features. The Alpha X series empowers industries to monitor, optimize, and control their processes with minimal downtime, maximum efficiency, and intelligent automation."
    },
    {
      question: "How does ReFlow Technologies help industries reduce downtime and maintenance costs?",
      answer: "Our revolutionary solutions leverage real-time monitoring and predictive analytics to enable early detection of potential issues before they escalate into costly problems. This proactive, data-driven approach dramatically minimizes unplanned downtime, optimizes maintenance schedules, and reduces both the frequency and cost of repairs. By transforming reactive maintenance into predictive intelligence, we help industries achieve unprecedented operational reliability and significant cost savings."
    },
    {
      question: "What makes ReFlow Technologies' solutions unique?",
      answer: "We deliver a powerful combination of robust, industrial-grade hardware and intelligent, AI-powered software that seamlessly integrates with your existing systems. Our solutions stand out through cost-effective installations, minimal maintenance requirements, and comprehensive data analysis capabilities. This unique approach ensures industries can operate smoothly, efficiently, and profitably while maintaining the highest standards of quality and performance."
    },
    {
      question: "What kind of industries benefit from ReFlow Technologies' solutions?",
      answer: "Our innovative solutions cater to a diverse spectrum of industries, including advanced manufacturing, pharmaceutical production, food & beverage processing, chemical processing, utilities, and energy sectors. Essentially, any industry that relies on accurate data collection, real-time monitoring, and intelligent analysis to optimize operations, ensure quality, and maximize efficiency can benefit from our cutting-edge offerings. We're transforming industries one smart solution at a time."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-5 py-2 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            style={{ fontFamily: 'var(--font-poppins-bold)', backgroundColor: '#0083e6' }}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Frequently Asked Questions
          </motion.div>
          <h2 
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ fontFamily: 'var(--font-poppins-bold)', color: '#0083e6' }}
          >
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p 
            className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-poppins-bold)' }}
          >
            Everything you need to know about ReFlow Technologies and our revolutionary IIoT solutions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: '#0083e6', fontFamily: 'var(--font-poppins-bold)' }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className="w-6 h-6 text-blue-600"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-blue-100 pt-6">
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden" style={{ backgroundColor: '#0083e6' }}>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">Still Have Questions?</h3>
              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Our expert team is ready to help you transform your industrial operations with cutting-edge IIoT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
