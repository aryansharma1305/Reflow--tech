"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { products } from "../../data/products";
import Footer from "../../components/Footer";

const categoryColors: Record<string, { bg: string; text: string; label: string }> = {
    hardware: { bg: "bg-blue-600/20", text: "text-blue-400", label: "Hardware" },
    service: { bg: "bg-purple-600/20", text: "text-purple-400", label: "Service" },
};

export default function ProductDetailPage() {
    const params = useParams();
    const { id } = params;

    const product = products.find((p) => p.id === id);

    const [activeTab, setActiveTab] = useState("specs");
    const [activeServiceId, setActiveServiceId] = useState("");

    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!product) return;

        // Set default active service id if not set
        if (product.services && !activeServiceId) {
            const firstService = product.services.find(s => s.id !== "console");
            if (firstService) {
                setActiveServiceId(firstService.id);
            }
        }

        const tl = gsap.timeline();

        tl.fromTo(
            containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        );

        tl.fromTo(
            imageRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.2"
        );

        tl.fromTo(
            contentRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6"
        );
    }, [product, activeServiceId]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-surface)]">
                <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                    Product Not Found
                </h1>
                <p className="text-[var(--color-text-secondary)] mb-8">
                    The product you are looking for does not exist.
                </p>
                <Link href="/products">
                    <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors">
                        Back to Products
                    </button>
                </Link>
            </div>
        );
    }

    const cat = categoryColors[product.category] || categoryColors.service;
    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in the ${product.name}. Can you provide more details?`
    );
    const whatsappLink = `https://wa.me/917338732904?text=${whatsappMessage}`;

    // Helper to get specific service
    const getService = (svcId: string) => product.services?.find((s) => s.id === svcId);

    // Filter services for the "Services" tab (excluding console)
    const subServices = product.services?.filter((s) => s.id !== "console") || [];
    const consoleService = getService("console");

    return (
        <div className="bg-[var(--color-background)]">
            <div ref={containerRef} className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] mb-8 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>

                    {/* Hero section */}
                    <div className="bg-[var(--color-surface)] rounded-3xl shadow-xl overflow-hidden border border-[var(--color-border-subtle)] mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div ref={imageRef} className="relative h-96 lg:h-auto bg-[var(--color-surface-muted)] flex items-center justify-center p-8">
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        className="p-8"
                                    />
                                ) : (
                                    <div className="text-[var(--color-text-muted)] opacity-20 text-9xl font-black select-none">
                                        {product.name.substring(0, 2).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div ref={contentRef} className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="mb-2 flex items-center gap-2">
                                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${cat.bg} ${cat.text} uppercase tracking-wider`}>
                                        {cat.label}
                                    </span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-4 leading-tight">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                                    {product.longDescription || product.description}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-sm uppercase tracking-wide text-[var(--color-text-muted)] font-bold mb-4">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-[var(--color-text-primary)]">
                                                <svg className="h-6 w-6 text-[var(--color-success)] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
                                    {product.price && (
                                        <div>
                                            <span className="text-sm text-[var(--color-text-secondary)] block">Price</span>
                                            <span className="text-4xl font-bold text-[var(--color-text-primary)]">{product.price}</span>
                                        </div>
                                    )}
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Enquire via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Tabbed Section */}
                    <div className="bg-[var(--color-surface)] rounded-3xl shadow-xl overflow-hidden border border-[var(--color-border-subtle)] mb-16">

                        {/* Level 1 Tabs: Specs | Console | Services */}
                        <div className="flex border-b border-[var(--color-border-subtle)]">
                            {/* 1. Technical Specifications */}
                            {product.specs && (
                                <button
                                    onClick={() => setActiveTab("specs")}
                                    className={`flex-1 py-5 px-6 text-center font-bold text-lg transition-all duration-300 ${activeTab === "specs"
                                            ? "text-[var(--color-primary)] bg-[var(--color-surface)] shadow-inner"
                                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]"
                                        }`}
                                >
                                    Technical Specifications
                                </button>
                            )}

                            {/* 2. Console / Platform */}
                            {consoleService && (
                                <button
                                    onClick={() => setActiveTab("console")}
                                    className={`flex-1 py-5 px-6 text-center font-bold text-lg transition-all duration-300 ${activeTab === "console"
                                            ? "text-[var(--color-primary)] bg-[var(--color-surface)] shadow-inner"
                                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]"
                                        }`}
                                >
                                    Console / Platform
                                </button>
                            )}

                            {/* 3. Services */}
                            {subServices.length > 0 && (
                                <button
                                    onClick={() => setActiveTab("services")}
                                    className={`flex-1 py-5 px-6 text-center font-bold text-lg transition-all duration-300 ${activeTab === "services"
                                            ? "text-[var(--color-primary)] bg-[var(--color-surface)] shadow-inner"
                                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]"
                                        }`}
                                >
                                    Services
                                </button>
                            )}
                        </div>

                        {/* Level 2 Navigation (Only for Services) */}
                        {activeTab === "services" && subServices.length > 0 && (
                            <div className="bg-[var(--color-surface-muted)] border-b border-[var(--color-border-subtle)] overflow-x-auto">
                                <div className="flex px-4 space-x-2 py-2">
                                    {subServices.map((svc) => (
                                        <button
                                            key={svc.id}
                                            onClick={() => setActiveServiceId(svc.id)}
                                            className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${activeServiceId === svc.id
                                                    ? "bg-[var(--color-primary)] text-white shadow-md"
                                                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
                                                }`}
                                        >
                                            {svc.title}
                                            {svc.tag && (
                                                <span className={`ml-2 px-2 py-0.5 text-[10px] uppercase rounded-full font-bold ${activeServiceId === svc.id ? 'bg-white/20 text-white' : 'bg-[var(--color-primary)] text-white'}`}>
                                                    {svc.tag}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Content Area */}
                        <div className="p-8 lg:p-12">

                            {/* Render Technical Specifications */}
                            {activeTab === "specs" && product.specs && (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <tbody>
                                            {Object.entries(product.specs).map(([key, value], idx) => (
                                                <tr
                                                    key={key}
                                                    className={
                                                        idx % 2 === 0
                                                            ? "bg-[var(--color-surface-muted)]"
                                                            : "bg-[var(--color-surface)]"
                                                    }
                                                >
                                                    <td className="px-6 py-4 font-semibold text-[var(--color-text-primary)] whitespace-nowrap w-1/3 border-b border-[var(--color-border-subtle)]">
                                                        {key}
                                                    </td>
                                                    <td className="px-6 py-4 text-[var(--color-text-secondary)] border-b border-[var(--color-border-subtle)]">
                                                        {value}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Render Console / Platform */}
                            {activeTab === "console" && consoleService && (
                                <div>
                                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                                        {consoleService.title}
                                    </h2>
                                    <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed text-lg">
                                        {consoleService.description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {consoleService.features.map((feat, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)] hover:shadow-md hover:border-[var(--color-primary)] transition-all duration-300 group"
                                            >
                                                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-[var(--color-text-primary)] text-base leading-relaxed pt-1">
                                                    {feat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Render Other Services */}
                            {activeTab === "services" && (
                                <div>
                                    {(() => {
                                        const currentService = subServices.find(s => s.id === activeServiceId);
                                        if (!currentService) return null;
                                        return (
                                            <div>
                                                <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] p-8 rounded-2xl mb-8 text-white">
                                                    <h2 className="text-2xl font-bold mb-3">
                                                        {currentService.title}
                                                    </h2>
                                                    <p className="text-white/90 text-lg leading-relaxed">
                                                        {currentService.description}
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {currentService.features.map((feat, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)] hover:shadow-md transition-all duration-300"
                                                        >
                                                            <svg className="h-6 w-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-[var(--color-text-primary)] text-lg">
                                                                {feat}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
