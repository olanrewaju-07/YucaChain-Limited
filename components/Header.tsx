"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "about" },
        { name: "Our Story", href: "story" },
        { name: "Products", href: "products" },
        { name: "Team", href: "team" },
        { name: "FAQ", href: "faq" },
        { name: "News", href: "news" },
    ];

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex flex-row items-center gap-2">
                        <img src="/Logo.png" alt="YucaChain" className="w-10 h-10" />
                        <Link href="/" onClick={() => scrollToSection('top')} className="text-2xl font-bold text-green-700 cursor-pointer">
                            YucaChain
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer focus:outline-none"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <ThemeToggle />
                            <Button onClick={() => window.open('https://chat.whatsapp.com/JXaHxCV3G489gJHMC4OeXR', '_blank')}
                                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600 rounded-full px-6 transition-all duration-300 shadow-sm hover:shadow-md">
                                Join the Network
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button & Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-xl pb-4">
                    <div className="px-4 pt-4 pb-4 space-y-2 sm:px-3 flex flex-col">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gray-600 hover:text-green-600 hover:bg-green-50 px-3 py-3 rounded-md text-base font-medium text-left w-full transition-colors focus:outline-none"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="px-3 pt-4">
                            <Button onClick={() => window.open('https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE', '_blank')} className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6 text-lg">
                                Join the Network
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
