"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        q: "What is YucaChain?",
        a: "YucaChain is an integrated digital ecosystem connecting Africa’s cassava value chain."
    },
    {
        q: "How can farmers join?",
        a: "Farmers can register through the YucaChain App or partner agents."
    },
    {
        q: "Is YucaVault secure?",
        a: "Yes. YucaVault uses industry-standard encryption and secure financial infrastructure to ensure the safety of all transactions."
    },
    {
        q: "Do you operate outside Nigeria?",
        a: "Expansion plans are currently underway across multiple African countries to broaden our agricultural impact."
    },
    {
        q: "How can investors or partners collaborate?",
        a: "Reach out to our team through the contact form or our dedicated partnership email. We welcome collaborations that strengthen food systems."
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
