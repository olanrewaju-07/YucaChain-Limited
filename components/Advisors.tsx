"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const advisors = [
    {
        name: "Engr. (Dr.) Olanrewaju Taofiq Olayinka",
        role: "Extension Specialist and Lecturer",
        org: "National Agricultural Extension and Research Liaison Services (NAERLS)",
        value: "Guiding our outreach approach to enhance farmer education, adoption of digital tools, and the effective delivery of agricultural extension services.",
        image: "/olanrewaju.jpeg",
        linkedin: "https://www.linkedin.com/in/taofiq-olanrewaju-136ba023",
        email: "mailto:taofiqolanrewaju13@yahoo.com"
    },
    {
        name: "Engr. (Dr.) Michael Ayodele Omodara",
        role: "Assistant Director, Research",
        org: "Nigerian Stored Products Research Institute (NSPRI)",
        value: "Providing expert insights into post-harvest crop management, storage technologies, and strategies to minimize losses across the value chain.",
        image: "/omolara.jpeg",
        linkedin: "https://linkedin.com/",
        email: "mailto:maomodara@nspri.gov.ng"
    },
];

export default function Advisors() {
    return (
        <section className="py-24 bg-white dark:bg-transparent border-y border-transparent dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Strategic Advisors</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Our advisors bring global experience in agriculture, finance, and innovation.
                    </p>
                    <div className="mt-8 h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {advisors.map((advisor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center group"
                        >
                            <div className="w-28 h-28 mx-auto bg-green-100 dark:bg-green-900/40 rounded-full mb-6 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm shrink-0 overflow-hidden relative group-hover:border-green-500/50 transition-colors duration-300">
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover object-top filter group-hover:brightness-110 transition-all duration-300"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{advisor.name}</h3>
                            <p className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400 uppercase tracking-wider">{advisor.role}</p>
                            <p className="text-green-600 dark:text-green-500 font-bold mb-6">{advisor.org}</p>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow mb-8">
                                {advisor.value}
                            </p>

                            <div className="flex justify-center space-x-6 border-t border-gray-200 dark:border-gray-800 pt-6 mt-auto w-full">
                                <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href={advisor.email} className="text-gray-400 hover:text-green-600 hover:scale-110 transition-all duration-300">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
