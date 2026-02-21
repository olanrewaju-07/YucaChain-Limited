"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://formsubmit.co/ajax/yucachain@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-transparent border-t border-transparent dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Get In Touch</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            Interested in partnering, investing, or joining the YucaChain ecosystem? We would love to hear from you.
                        </p>
                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800/50">
                            <h3 className="font-bold text-green-900 dark:text-green-400 mb-2">Direct Inquiries</h3>
                            <p className="text-green-800 dark:text-green-500">yucachain@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
                    >
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 bg-green-600 text-white flex flex-col items-center justify-center p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                                    <span className="text-3xl text-green-600">✓</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent</h3>
                                <p className="text-green-100">Thank you for reaching out. A member of our team will contact you shortly.</p>
                            </motion.div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                <Input
                                    id="name"
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full py-6 rounded-xl bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 dark:text-white"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full py-6 rounded-xl bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 dark:text-white"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <Textarea
                                    id="message"
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full min-h-[150px] rounded-xl bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 dark:text-white"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6 text-lg">
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
