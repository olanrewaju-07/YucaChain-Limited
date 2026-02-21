"use client";

import { motion } from "framer-motion";
import { Database, Fingerprint, LockKeyhole, Smartphone, Network, Building2, LeafyGreen, ShieldCheck, ShoppingCart, Truck, CheckCircle, Activity, Box } from "lucide-react";

const componentsList = [
    { name: "YucaChain", desc: "Digital Platform – Web & Mobile", icon: Smartphone },
    { name: "YucaVault", desc: "Preservation Infrastructure", icon: Building2 },
    { name: "YucaHub", desc: "Aggregation / Processing Support", icon: Network }
];

const lifecycleSteps = [
    { name: "Created", icon: Fingerprint },
    { name: "Harvested", icon: LeafyGreen },
    { name: "Assigned to Vault", icon: Building2 },
    { name: "Stored", icon: Box },
    { name: "Reserved", icon: LockKeyhole },
    { name: "Sold", icon: ShoppingCart },
    { name: "Picked Up", icon: Truck },
    { name: "Closed", icon: CheckCircle }
];

const architectureFeatures = [
    "Asset Tracking",
    "Batch ID System",
    "Timestamp Logs",
    "Status Updates",
    "Multi-role Permissions"
];

const appCapabilities = [
    "Track cassava into YucaVault",
    "Monitor storage duration",
    "Show condition updates",
    "Trigger pickup notifications",
    "Log buyer transactions",
    "Record traceability history"
];

export default function Ecosystem() {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50/50 via-gray-50 to-gray-50 dark:from-green-900/10 dark:via-background dark:to-background -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
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
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                        A closed-loop system designed to stabilize supply, verify quality, and eliminate post-harvest losses.
                    </motion.p>
                </div>

                {/* Animated Ecosystem Diagram Layer */}
                <div className="relative w-full max-w-5xl mx-auto h-[400px] mb-24 rounded-3xl bg-white dark:bg-gray-950 shadow-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden">
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
                            className={`relative z-10 flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-50 dark:border-gray-800 transform cursor-pointer w-full md:w-64 mb-6 md:mb-0 ${idx === 1 ? 'md:-translate-y-16' : idx === 2 ? 'md:translate-y-16' : ''}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", borderColor: "#22c55e" }}
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

                {/* App Connectivity & Capabilities Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How YucaChain Interconnects</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            The application is not standalone. It acts as the neural network for your physical assets, providing real-time synchronization between the farm, the vault, and the hub.
                        </p>
                        <ul className="space-y-4">
                            {appCapabilities.map((cap, i) => (
                                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                                    <Activity className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                                    <span className="text-lg">{cap}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900 p-8 sm:p-12 rounded-3xl shadow-2xl text-white border border-gray-800 relative overflow-hidden group"
                    >
                        <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex items-center space-x-4 mb-8">
                            <Database className="w-8 h-8 text-green-400" />
                            <h4 className="text-2xl font-bold">Architectural Requirements</h4>
                        </div>
                        <p className="text-gray-400 mb-8 text-lg">
                            To support this vast ecosystem, our data architecture strictly enforces:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {architectureFeatures.map((feat, i) => (
                                <div key={i} className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors">
                                    <ShieldCheck className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                                    <span className="font-semibold text-sm sm:text-base">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* The Lifecycle Banner */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Asset Lifecycle</h3>
                    <p className="text-gray-600 dark:text-gray-300">Total traceability from emergence to closure.</p>
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
