"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamData = [
    {
        name: "Aisha Okafor",
        role: "Chief Executive Officer",
        bio: "Technologist with over a decade of experience in agritech. Aisha leads our strategic vision to transform Africa's cassava supply chain into a digital-first ecosystem.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
        name: "Samuel Mensah",
        role: "Head of Agronomy",
        bio: "Expert in tropical agriculture and sustainable farming practices. Responsible for our direct integration with farmer cooperatives across different regions.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
        name: "Dr. Chioma Eze",
        role: "Chief Technology Officer",
        bio: "Former fintech lead engineer. Dr. Eze built the foundational architecture for YucaVault and integration APIs for global markets.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
        name: "Tunde Bakare",
        role: "Operations Director",
        bio: "Logistics specialist driving our on-ground aggregator network. Operations management across multiple regions to ensure zero post-harvest loss.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-gray-50 dark:bg-transparent border-y border-transparent dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We are technologists, agricultural experts, and ecosystem builders committed to transforming Africa’s agricultural economy.
                    </p>
                    <div className="mt-8 h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 text-center flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] transition-all duration-300 ease-out"
                        >
                            <div className="w-28 h-28 mx-auto bg-green-100 dark:bg-green-900/40 rounded-full mb-6 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm shrink-0 overflow-hidden relative group-hover:border-green-500/50 transition-colors duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top filter group-hover:brightness-110 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
                            <p className="text-green-600 dark:text-green-400 text-sm font-semibold mb-6 uppercase tracking-wider">{member.role}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">{member.bio}</p>

                            <div className="flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-green-600 hover:scale-110 transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
