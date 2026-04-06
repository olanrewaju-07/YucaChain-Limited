"use client";

import { motion } from "framer-motion";
import { Smartphone, Network, Building2, ShoppingCart, Truck, Box, Sprout, Carrot, Package2, Workflow } from "lucide-react";

const componentsList = [
    { name: "YucaChain", desc: "Digital Platform – Web & Mobile", icon: Smartphone },
    { name: "YucaVault", desc: "Preservation Infrastructure", icon: Building2 },
    { name: "YucaHub", desc: "Aggregation / Processing Support", icon: Network }
];

const lifecycleSteps = [
    { name: "Planted", icon: Sprout },
    { name: "Harvested", icon: Carrot },
    { name: "Assigned to Vault", icon: Building2 },
    { name: "Stored", icon: Box },
    { name: "Sold", icon: ShoppingCart },
    { name: "Processed", icon: Workflow },
    { name: "Packaged", icon: Package2 },
    { name: "Picked Up", icon: Truck }
];


export default function Ecosystem() {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50/50 via-gray-50 to-gray-50 dark:from-green-900/10 dark:via-background dark:to-background -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
                    >
                        Our Integrated Ecosystem
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1.5 w-24 bg-green-600 mx-auto rounded-full mb-8"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 w-full text-left leading-relaxed space-y-5"
                    >
                        <p>
                            Nigeria produces more cassava than any other country on earth. Yet a significant portion of every harvest never reaches a market, a processor, or a table. It spoils on roadsides, rots in makeshift storage, or sells for a fraction of its real value because a farmer had no choice but to accept whatever price was offered that morning.
                        </p>
                        <p>
                            The problem is not production. Nigeria&apos;s farmers are productive, hardworking, and experienced. The problem is everything that happens after harvest. The infrastructure gap between the farm gate and the market causes value to leak out at every single stage of the journey. Cassava that could feed families, supply factories, and earn foreign exchange is instead lost to spoilage, poor handling, and a broken chain of coordination between the people who grow food and the people who need it.
                        </p>
                        <p className="text-green-700 dark:text-green-400 font-semibold text-xl md:text-2xl text-center">
                            YucaChain is building the infrastructure to close that gap.
                        </p>
                        <p>
                            The YucaChain ecosystem is a set of integrated products and services, each one designed to serve a specific stage of the agricultural value chain. They can work independently. A farmer can use just the app. A processor can use just the hub. But when the full ecosystem is connected, from digital platform to cold storage to processing to food production to export, the entire value chain becomes more efficient, more transparent, and more profitable for every person in it.
                        </p>
                        <p className="font-medium text-gray-700 dark:text-gray-200">
                            This is what we are building, and this is why each part of it matters.
                        </p>
                    </motion.div>
                </div>

                {/* Animated Ecosystem Diagram Layer */}
                <div className="relative w-full max-w-5xl mx-auto h-auto md:h-[400px] mb-24 rounded-3xl bg-white dark:bg-gray-950 shadow-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row items-center justify-between md:overflow-hidden gap-10 md:gap-0">
                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ filter: 'drop-shadow(0px 4px 6px rgba(34, 197, 94, 0.2))' }}>
                        <motion.path
                            d="M 250 200 L 500 120 L 750 200"
                            fill="transparent"
                            stroke="url(#gradientGreen)"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M 250 200 L 500 280 L 750 200"
                            fill="transparent"
                            stroke="url(#gradientGreen)"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                        <motion.path
                            d="M 500 120 L 500 280"
                            fill="transparent"
                            stroke="rgba(34, 197, 94, 0.5)"
                            strokeWidth="2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                        <defs>
                            <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22c55e" />
                                <stop offset="50%" stopColor="#16a34a" />
                                <stop offset="100%" stopColor="#22c55e" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes */}
                    {componentsList.map((comp, idx) => (
                        <motion.div
                            key={comp.name}
                            className={`relative z-10 flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transform cursor-pointer w-full max-w-sm mx-auto md:max-w-none md:w-64 ${idx === 1 ? 'md:-translate-y-16' : idx === 2 ? 'md:translate-y-16' : ''}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 text-green-600 dark:text-green-500">
                                <comp.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{comp.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">{comp.desc}</p>

                            {/* Pulsing indicator */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                            <div className="absolute top-4 right-4 w-3 h-3 bg-green-600 rounded-full" />
                        </motion.div>
                    ))}
                </div>

                {/* The Lifecycle Banner */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Product Lifecycle</h3>
                    <p className="text-gray-600 dark:text-gray-300">Enhancing traceability and food safety  by tracking from origin to packaged state.</p>
                </div>

                <div className="relative">
                    {/* Progress Bar Background */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-green-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 relative z-10">
                        {lifecycleSteps.map((step, index) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-gray-900 rounded-full shadow-md border-2 border-gray-100 dark:border-gray-800 flex items-center justify-center mb-4 group-hover:border-green-500 group-hover:scale-110 group-hover:shadow-green-500/20 transition-all duration-300">
                                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 text-center tracking-tight group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                                    {step.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
