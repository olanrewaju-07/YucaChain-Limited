"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        q: "What exactly is YucaChain?",
        a: "YucaChain is an integrated ecosystem designed to eliminate post-harvest losses in the cassava value chain. It combines IoT-powered storage (YucaVault), physical aggregation centers (YucaHub), and a digital marketplace (YucaChain App) to connect farmers directly to industrial buyers."
    },
    {
        q: "How can farmers join?",
        a: "Farmers can register through the YucaChain App or partner agents."
    },
    {
        q: "How does YucaVault keep cassava fresh for longer than 48 hours?",
        a: "Traditional cassava spoils within 48–72 hours due to physiological deterioration. YucaVault uses proprietary IoT technology to regulate temperature and humidity, slowing down the biological breakdown of the tubers and extending shelf life for several weeks to prevent"
    },
    {
        q: "What is the role of a YucaHub?",
        a: "YucaHubs serve as community aggregation and certification centers. They ensure that all cassava collected from farmers is properly graded, verified for quality, and safely handled before being delivered to industrial processors, ensuring high food safety standards."
    },
    {
        q: "How does using the YucaChain app increase my income as farmer?",
        a: "By using the app, you bypass exploitative middlemen and connect directly with industrial factories. The ability to store your harvest in a YucaVault means you no longer have to sell at low prices just to avoid rot; you can wait for the best market offer."
    },
    {
        q: "Do I need a smartphone to participate?",
        a: "While the YucaChain app is built for smartphones, our YucaHub managers are trained to assist farmers who use basic feature phones to ensure no one is left out of the digital marketplace."
    },
    {
        q: "Is there a fee to use the storage or the app?",
        a: "We use a sustainability-driven cost-recovery model. Farmers pay a small service fee for storage or a transaction commission when they successfully sell their produce through the platform, ensuring the infrastructure remains maintained for the community."
    },
    {
        q: "How do you guarantee the quality of the cassava delivered?",
        a: "Every ton of cassava passing through a YucaHub undergoes a certification process. We provide end-to-end traceability, allowing you to see exactly when and where the cassava was harvested and how it was stored."
    },
    {
        q: "Can I schedule recurring bulk deliveries?",
        a: "Yes. The YucaChain app allows industrial processors to manage their supply chains in real-time, matching their factory demand with the live inventory available in our YucaVaults and YucaHubs."
    },
    {
        q: "Is my data safe on the YucaChain platform?",
        a: "Yes. We prioritize transparency and security. The platform creates a digital footprint of your transactions, which can also help farmers build the credit history needed to access formal loans and insurance."
    },
    {
        q: "What is the long-term goal of the project?",
        a: "We aim to scale this model from a TRL 4 prototype to a TRL 6 real-world operational system within 12 months. Our vision is to create a safer, more reliable, and waste-free cassava value chain across Nigeria and the broader African continent. Maybe then, we can transfer impact to other crops, Bi Idhni Llah."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="py-24 bg-gray-50 dark:bg-transparent border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
                    <div className="mt-6 h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b-gray-100 dark:border-b-gray-800 last:border-0 last:pb-0">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors py-6">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 dark:text-gray-300 text-base leading-relaxed pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
