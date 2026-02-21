"use client";

import { motion } from "framer-motion";

const futureProducts = [
    {
        title: "YucaMills",
        desc: " Advanced milling facilities located at the source to convert fresh tubers into high-quality starch, flour, and ethanol with zero transit-waste.",
        image: "/YucaMill.jpeg"
    },
    {
        title: "YucaFoods",
        desc: "Bridging the gap between the farm and the table with packaged, safe, and nutritious cassava-based staples for the modern African kitchen.",
        image: "/YucaFood.jpg"
    },
    {
        title: "YucaExports",
        desc: "Taking Nigerian excellence to the world. Leveraging our traceability data to meet international food safety standards for global industrial markets.",
        image: "/YucaExport.png"
    }
];

export default function ComingSoon() {
    return (
        <section className="py-24 bg-white dark:bg-transparent relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute left-0 top-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-amber-50 via-white to-white dark:from-amber-900/10 dark:via-background dark:to-background opacity-40 dark:opacity-100" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-500 font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                            Coming Soon
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Expanding the Ecosystem</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            We are expanding our footprint from preservation to high-value processing and global trade.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {futureProducts.map((prod, idx) => (
                        <motion.div
                            key={prod.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 relative group flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden shrink-0">
                                <img
                                    src={prod.image}
                                    alt={prod.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{prod.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-grow">
                                    {prod.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
