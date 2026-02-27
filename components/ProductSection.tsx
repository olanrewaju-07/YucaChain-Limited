"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
    {
        id: "yucachain",
        title: "YucaChain App",
        description: "The digital pulse of our network. Our platform connects farm-gate supply with real-time industrial demand. Features end-to-end traceability, transparent pricing, and data-driven logistics to ensure every ton finds its market.",
        features: [
            "Farm registration",
            "Yield tracking",
            "Market price visibility",
            "End-to-end value chain actors bridge",
            "Direct buyer connection"
        ],
        cta: "Download App",
    },
    {
        id: "yucavault",
        title: "YucaVault (The IoT Storage)",
        description: "Engineering the end of rot. YucaVault is an IoT-enabled, solar-powered unit that regulates temperature and humidity to arrest starch degradation. We extend cassava shelf life from 48 hours to several weeks.",
        features: [
            "Solar-powered off-grid cooling",
            "Extends cassava shelf life",
            "Prevents post-harvest spoilage",
            "Mobile preservation unit",
            "Maintains optimal temperature"
        ],
        cta: null,
    },
    {
        id: "yucahub",
        title: "YucaHub (Aggregation & Certification)",
        description: "The physical trust-layer of the value chain. YucaHubs are community-based centers for grading, quality verification, and bulk-loading, ensuring industrial processors receive standardized, factory-ready raw materials.",
        features: [
            "Aggregation",
            "Logistics tracking",
            "Bulk trading",
            "Inventory monitoring"
        ],
        cta: null,
    }
];

export default function ProductSection() {
    return (
        <section id="products" className="py-24 bg-white dark:bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Our Core Products</h2>
                    <div className="mt-6 h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-32">
                    {products.map((product, idx) => (
                        <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                            {/* Text Column */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
                            >
                                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max mb-4 bg-green-100 text-green-800">
                                    {product.title}
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                                    {product.title}
                                </h3>

                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {product.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-base text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {product.cta && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.8 }}
                                    >
                                        <Button className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white rounded-full px-8 py-6 text-base shadow-lg shadow-gray-200 dark:shadow-none transition-all hover:-translate-y-1">
                                            {product.cta}
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Image Placeholder Column */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 !== 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`relative w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} group`}
                            >
                                {/* Simulated Mockup Background Graphic (Substitute this block with your Next/Image once you load real assets) */}
                                <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8 overflow-hidden">
                                    {product.id === "yucachain" && (
                                        <div className="w-full h-full overflow-hidden rounded-xl">
                                            <img
                                                src="/YucaApp.png"
                                                alt="YucaChain App"
                                                className="w-full h-full object-cover object-center drop-shadow-md hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}

                                    {product.id === "yucavault" && (
                                        <div className="relative z-10 w-full h-full overflow-hidden rounded-xl">
                                            <img
                                                src="/YucaVault.jpeg"
                                                alt="YucaVault Transportation Cooling System"
                                                className="w-full h-full object-cover object-center drop-shadow-md hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    {product.id === "yucahub" && (
                                        <div className="relative z-10 w-full h-full overflow-hidden rounded-xl">
                                            <img
                                                src="/YucaHub.jpeg"
                                                alt="YucaHub Assembly"
                                                className="w-full h-full object-cover object-center drop-shadow-md hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
