"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { contactUsApi } from "@/lib/api/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isHovered, setIsHovered] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const response = await contactUsApi(formData);
      if (response && response.status === "success") {
        toast.success("Message sent successfully!");
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error(
          response.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements with brand colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-3 blur-3xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black mb-8 text-gradient-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get in Touch
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
              style={{ color: "var(--color-text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to transform your industrial operations? Fill in your
              details below and let&apos;s start building the future together.
            </motion.p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="card backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 hover-lift"
              style={{
                backgroundColor: "var(--color-surface)",
                border: `1px solid var(--color-border-subtle)`,
                boxShadow: "0 25px 50px -12px rgba(0, 163, 255, 0.25)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-bold mb-3"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name)
                          setErrors({ ...errors, name: undefined });
                      }}
                      className="w-full px-5 py-4 rounded-2xl transition-all duration-300 focus:outline-none text-lg font-medium"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        border: errors.name
                          ? `2px solid var(--color-error)`
                          : `2px solid var(--color-border-default)`,
                        color: "var(--color-text-primary)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor =
                          "var(--color-border-focus)";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(0, 163, 255, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.name
                          ? "var(--color-error)"
                          : "var(--color-border-default)";
                        e.target.style.boxShadow = "none";
                      }}
                      required
                    />
                    {errors.name && (
                      <motion.p
                        className="mt-2 text-sm font-medium"
                        style={{ color: "var(--color-error)" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-bold mb-3"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Email Address{" "}
                      <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email)
                          setErrors({ ...errors, email: undefined });
                      }}
                      className="w-full px-5 py-4 rounded-2xl transition-all duration-300 focus:outline-none text-lg font-medium"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        border: errors.email
                          ? `2px solid var(--color-error)`
                          : `2px solid var(--color-border-default)`,
                        color: "var(--color-text-primary)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor =
                          "var(--color-border-focus)";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(0, 163, 255, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.email
                          ? "var(--color-error)"
                          : "var(--color-border-default)";
                        e.target.style.boxShadow = "none";
                      }}
                      required
                    />
                    {errors.email && (
                      <motion.p
                        className="mt-2 text-sm font-medium"
                        style={{ color: "var(--color-error)" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-bold mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Your Message{" "}
                    <span style={{ color: "var(--color-error)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl transition-all duration-300 focus:outline-none resize-none text-lg font-medium"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: errors.message
                        ? `2px solid var(--color-error)`
                        : `2px solid var(--color-border-default)`,
                      color: "var(--color-text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-border-focus)";
                      e.target.style.boxShadow =
                        "0 0 0 4px rgba(0, 163, 255, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.message
                        ? "var(--color-error)"
                        : "var(--color-border-default)";
                      e.target.style.boxShadow = "none";
                    }}
                    required
                  />
                  {errors.message && (
                    <motion.p
                      className="mt-2 text-sm font-medium"
                      style={{ color: "var(--color-error)" }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 px-8 rounded-2xl font-bold text-xl shadow-2xl ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "transition-all duration-300"
                  }`}
                  style={{
                    background: loading
                      ? "var(--color-text-muted)"
                      : isHovered
                      ? `linear-gradient(135deg, var(--color-primary-hover), var(--color-accent))`
                      : `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                    color: "var(--color-text-inverse)",
                    pointerEvents: loading ? "none" : "auto",
                  }}
                  whileHover={
                    !loading
                      ? {
                          scale: 1.02,
                          boxShadow: "0 25px 50px -12px rgba(0, 163, 255, 0.4)",
                        }
                      : undefined
                  }
                  whileTap={!loading ? { scale: 0.98 } : undefined}
                  onMouseEnter={() => !loading && setIsHovered(true)}
                  onMouseLeave={() => !loading && setIsHovered(false)}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-4 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ color: "var(--color-text-inverse)" }}
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Success Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50 p-4"
            style={{ backgroundColor: "rgba(10, 15, 28, 0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="rounded-3xl shadow-2xl p-10 md:p-12 max-w-lg w-full text-center"
              style={{
                backgroundColor: "var(--color-surface)",
                border: `3px solid var(--color-success)`,
              }}
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                style={{ backgroundColor: "var(--color-success)" }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <svg
                  className="w-12 h-12"
                  style={{ color: "var(--color-text-inverse)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>

              <motion.h2
                className="text-4xl font-black mb-6"
                style={{ color: "var(--color-text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Message Sent Successfully!
              </motion.h2>

              <motion.p
                className="mb-10 text-xl leading-relaxed font-medium"
                style={{ color: "var(--color-text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Thank you for reaching out! Our team will review your message
                and get back to you soon.
              </motion.p>

              <motion.button
                onClick={() => setShowPopup(false)}
                className="py-4 px-10 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                  color: "var(--color-text-inverse)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(0, 163, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Perfect!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
