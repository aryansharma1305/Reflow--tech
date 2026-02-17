"use client";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        color: "var(--color-text-primary)",
        background:
          "linear-gradient(180deg, var(--color-background) 0%, var(--color-surface-muted) 50%, var(--color-surface-hover) 100%)",
      }}
    >
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/3"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="transition-all duration-300 hover:scale-105">
                <Image
                  src="/translogo.png"
                  alt="ReFlow Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto drop-shadow-sm"
                />
              </div>
            </div>
            <p
              className="leading-relaxed text-base font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Increasing Manufacturing Performance of Pharma Industries using AI
              Devices
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/917338732904"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Chat on WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/reflowtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Connect on LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/reflowtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border-subtle)",
                  border: "1px solid",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-text-inverse)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-surface)";
                  e.currentTarget.style.borderColor =
                    "var(--color-border-subtle)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Follow us on Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  style={{ color: "var(--color-primary)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href="https://wa.me/917338732904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold transition-colors duration-300"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  +91 733 873 2904
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Support Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Products
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#our-product"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Alpha X Series
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Platform
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/login"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  Reflow Console
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-xl font-bold mb-6 flex items-center"
              style={{ color: "var(--color-text-primary)" }}
            >
              Applications
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/pharma"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  For Pharma
                </a>
              </li>
              <li>
                <a
                  href="/brewery"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  For Breweries
                </a>
              </li>
              <li>
                <a
                  href="/ev"
                  className="transition-all duration-300 text-base font-medium hover:translate-x-2 block"
                  style={{ color: "var(--color-text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  For EV Manufacturers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className="text-center text-xs sm:text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Copyright © {currentYear} ReFlow Technologies Pvt Ltd. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
