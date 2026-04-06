"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductModal, { type ProductModalData } from "@/components/ProductModal";

const futureProducts = [
    {
        id: "yucamills",
        title: "YucaMills",
        desc: "Advanced milling facilities located at the source to convert fresh tubers into high-quality starch, flour, and ethanol with zero transit-waste.",
        image: "/YucaMill_New.png"
    },
    {
        id: "yucafoods",
        title: "YucaFoods",
        desc: "Bridging the gap between the farm and the table with packaged, safe, and nutritious cassava-based staples for the modern African kitchen.",
        image: "/YucaFood_New.png"
    },
    {
        id: "yucaexports",
        title: "YucaExports",
        desc: "Taking Nigerian excellence to the world. Leveraging our traceability data to meet international food safety standards for global industrial markets.",
        image: "/YucaExport_New.png"
    },
    {
        id: "yucabuild",
        title: "YucaBuild",
        desc: "Building the hardware that makes the ecosystem possible — in Nigeria, from Nigerian materials, for Nigerian conditions. Local fabrication for lasting impact.",
        image: "/YucaBuild.png"
    }
];

export default function ComingSoon() {
    const [modalProduct, setModalProduct] = useState<ProductModalData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (prod: typeof futureProducts[0]) => {
        setModalProduct({ id: prod.id, title: prod.title, image: prod.image });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setModalProduct(null), 300);
    };

    return (
        <>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {futureProducts.map((prod, idx) => (
                            <motion.div
                                key={prod.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 relative group flex flex-col"
                            >
                                <div className="relative h-56 w-full overflow-hidden shrink-0">
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{prod.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                                        {prod.desc}
                                    </p>
                                    <button
                                        onClick={() => openModal(prod)}
                                        className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300 w-fit"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductModal product={modalProduct} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
