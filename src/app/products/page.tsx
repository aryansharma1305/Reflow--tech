"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { products } from "../data/products";
import Footer from "../components/Footer";

const categoryColors: Record<string, { bg: string; text: string; label: string }> = {
    hardware: { bg: "bg-blue-600/20", text: "text-blue-400", label: "Hardware" },
    service: { bg: "bg-purple-600/20", text: "text-purple-400", label: "Service" },
};

export default function ProductsPage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            headerRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        tl.fromTo(
            cardsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
            },
            "-=0.4"
        );
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-muted)]">
            <div className="max-w-7xl mx-auto">
                <div ref={headerRef} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-4 tracking-tight">
                        Our <span className="text-[var(--color-primary)]">Products & Services</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
                        Industrial-grade hardware, intelligent software, and expert services
                        to transform your operations with AI-driven insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        const cat = categoryColors[product.category] || categoryColors.service;
                        return (
                            <div
                                key={product.id}
                                ref={addToRefs}
                                className="bg-[var(--color-surface)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--color-border-subtle)] group flex flex-col h-full"
                            >
                                <div className="relative w-full h-64 overflow-hidden bg-[var(--color-surface-muted)] flex items-center justify-center">
                                    {product.image ? (
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="text-[var(--color-text-muted)] opacity-30 text-6xl font-black select-none">
                                            {product.name.substring(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2 opacity-80">
                                        <span
                                            className={`text-xs font-bold px-2 py-1 rounded ${cat.bg} ${cat.text} uppercase tracking-wider`}
                                        >
                                            {cat.label}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {product.name}
                                    </h2>
                                    <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        {product.price && (
                                            <div className="flex items-baseline mb-4">
                                                <span className="text-xl font-bold text-[var(--color-text-primary)]">
                                                    {product.price}
                                                </span>
                                            </div>
                                        )}
                                        <Link href={`/products/${product.id}`} className="block w-full">
                                            <button className="w-full py-3 px-6 rounded-xl bg-[var(--color-primary)] text-white font-semibold shadow-lg hover:bg-[var(--color-primary-hover)] hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group-hover:gap-3">
                                                View Details
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 transition-all"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
