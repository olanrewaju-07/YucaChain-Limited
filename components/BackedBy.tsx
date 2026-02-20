"use client";

import { motion } from "framer-motion";

export default function BackedBy() {
    const backers = [
        { name: "AgriTech VC", short: "ATV" },
        { name: "Global Innovation Fund", short: "GIF" },
        { name: "Africa Growth Partners", short: "AGP" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Backed By</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    YucaChain Limited has received support and recognition from global institutions that believe in scalable agricultural innovation.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {backers.map((backer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center space-x-4"
                        >
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center font-black text-gray-400 dark:text-gray-500 text-2xl">
                                {backer.short}
                            </div>
                            <span className="font-bold text-gray-700 dark:text-gray-300 text-lg hidden sm:block">{backer.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
