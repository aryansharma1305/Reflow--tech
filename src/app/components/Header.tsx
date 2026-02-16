"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.display = "block";
      headerRef.current.style.visibility = "visible";
      headerRef.current.style.opacity = "1";
      headerRef.current.style.transform = "translateY(0)";
    }
  }, [pathname]);
  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, {
        opacity: 1,
        visibility: "visible",
        display: "block",
        y: 0,
      });
    }
    if (logoRef.current) {
      gsap.set(logoRef.current, {
        opacity: 1,
        x: 0,
      });
    }
    if (navRef.current && navRef.current.children) {
      Array.from(navRef.current.children).forEach((child) => {
        gsap.set(child, {
          opacity: 1,
          y: 0,
        });
      });
    }
  }, [pathname]);
  return (
    <header
      ref={headerRef}
      className="reflow-header fixed top-0 left-0 right-0 w-full z-[9999] shadow-md"
      style={{
        backgroundColor: "var(--color-surface)",
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border-subtle)",
        opacity: 1,
        visibility: "visible",
        display: "block",
        transform: "translateY(0)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 gap-4">
          <motion.div
            ref={logoRef}
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/translogo.png"
              alt="ReFlow Logo"
              width={150}
              height={50}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 hover:drop-shadow-lg"
              priority
            />
          </motion.div>
          <motion.nav
            ref={navRef}
            className="hidden lg:flex space-x-4 flex-1 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "For Pharma", href: "/pharma" },
              { label: "For Brewery", href: "/brewery" },
              { label: "For EV", href: "/ev" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((item, index) => (
              <Link key={item.label} href={item.href}>
                <motion.div
                  className="font-bold text-xs uppercase tracking-wide transition-all duration-300 relative group px-2 py-2 rounded-lg whitespace-nowrap cursor-pointer"
                  style={{
                    color: "var(--color-text-primary)",
                    fontWeight: 700,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    color: "var(--color-primary)",
                    backgroundColor: "var(--color-surface-hover)",
                  }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "calc(100% - 1rem)", opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </Link>
            ))}
          </motion.nav>
          <div
            className="hidden md:flex items-center gap-2 flex-shrink-0 ml-4"
            style={{ minWidth: "200px", justifyContent: "flex-end" }}
          >
            <a href="https://login.reflowtech.in/login" className="block">
              <div
                className="px-5 py-2.5 border-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform whitespace-nowrap cursor-pointer hover:scale-105"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-surface)",
                  minWidth: "90px",
                  textAlign: "center",
                  display: "inline-block",
                  borderRadius: "9999px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
              >
                LOGIN
              </div>
            </a>
            <Link
              href="/register"
              className="block register-button-link"
              style={{ textDecoration: "none" }}
            >
              <div
                className="px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform whitespace-nowrap cursor-pointer register-button hover:scale-105"
                style={{
                  background: "var(--color-primary)",
                  backgroundColor: "var(--color-primary)",
                  minWidth: "110px",
                  textAlign: "center",
                  display: "inline-block",
                  fontWeight: "600",
                  position: "relative",
                  zIndex: 10,
                  borderRadius: "9999px",
                }}
              >
                <span
                  style={{
                    color: "var(--color-text-inverse)",
                    display: "block",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    position: "relative",
                    zIndex: 11,
                  }}
                >
                  REGISTER
                </span>
              </div>
            </Link>
          </div>
          <motion.button
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            style={{
              color: "var(--color-text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--color-surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
                initial={false}
                animate={{
                  d: isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="py-4 border-t"
                style={{
                  borderColor: "var(--color-border-default)",
                  backgroundColor: "var(--color-surface)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.nav className="flex flex-col space-y-3">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Products", href: "/products" },
                    { label: "For Pharma", href: "/pharma" },
                    { label: "For Brewery", href: "/brewery" },
                    { label: "For EV", href: "/ev" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((item, index) => (
                    <Link key={item.label} href={item.href}>
                      <motion.div
                        className="font-bold text-sm uppercase tracking-wide transition-all duration-300 py-2 px-4 rounded-lg hover:pl-6 cursor-pointer"
                        style={{
                          color: "var(--color-text-primary)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--color-primary)";
                          e.currentTarget.style.backgroundColor =
                            "var(--color-surface-hover)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "var(--color-text-primary)";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}
                </motion.nav>
                <motion.div
                  className="mt-4 pt-3 border-t flex flex-col space-y-2"
                  style={{
                    borderColor: "var(--color-border-default)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="https://login.reflowtech.in/login">
                    <motion.div
                      className="w-full px-4 py-2 border-2 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform text-center cursor-pointer block"
                      style={{
                        borderColor: "var(--color-primary)",
                        color: "var(--color-primary)",
                        backgroundColor: "var(--color-surface)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-text-inverse)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </motion.div>
                  </a>
                  <Link href="/register">
                    <motion.div
                      className="w-full px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform text-center cursor-pointer block"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-text-inverse)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        backgroundColor: "var(--color-primary-hover)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
