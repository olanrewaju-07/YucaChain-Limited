"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section id="top" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Parallax Image with Overlay */}
            <motion.div
                className="absolute inset-0 z-0 bg-[url('/hero-bg.png')] bg-cover bg-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, ease: "easeOut" }}
            />
            {/* Smooth Dark Overlay */}
            <div className="absolute inset-0 z-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 max-w-5xl drop-shadow-lg"
                >
                    Powering Africa’s <span className="text-green-400">Cassava Economy</span> Through Technology
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md"
                >
                    We are building an integrated digital ecosystem transforming cassava farming, processing, trade, and export.Through integrated IoT storage and decentralized infrastructure, we make agricultural trade reliable, transparent, and significantly more profitable for Africa.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white rounded-full px-10 py-7 text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] font-semibold border-none animate-[pulse_3s_ease-in-out_infinite] hover:animate-none transition-all duration-300"
                        >
                            Explore Our Ecosystem
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto rounded-full px-10 py-7 text-lg border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-semibold transition-all duration-300 backdrop-blur-md bg-black/20 shadow-lg"
                        >
                            Join the Network
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
