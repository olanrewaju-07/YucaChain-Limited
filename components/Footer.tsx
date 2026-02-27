import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-transparent border-t border-gray-800 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-bold text-green-500 mb-6">YucaChain</h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed text-lg mb-8">
                            We are building an integrated digital ecosystem transforming cassava farming, processing, trade, and export. Through integrated IoT storage and decentralized infrastructure, we make agricultural trade reliable, transparent, and significantly more profitable for Africa.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://x.com/yucachain" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/yucachain/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://www.facebook.com/share/1Byyq5Jupq/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/yucachain" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.youtube.com/@YucaChainLtd" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
                            <li><Link href="#story" className="text-gray-400 hover:text-green-400 transition-colors">Our Story</Link></li>
                            <li><Link href="#team" className="text-gray-400 hover:text-green-400 transition-colors">Join Us</Link></li>
                            <li><Link href="#news" className="text-gray-400 hover:text-green-400 transition-colors">News</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 tracking-wider uppercase text-sm">Products</h4>
                        <ul className="space-y-4">
                            <li><Link href="#products" className="text-gray-400 hover:text-green-400 transition-colors">YucaChain App</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-green-400 transition-colors">YucaVault</Link></li>
                            <li><Link href="#products" className="text-gray-400 hover:text-green-400 transition-colors">YucaHub</Link></li>
                            <li><span className="text-gray-500 cursor-not-allowed">YucaMills (Coming Soon)</span></li>
                            <li><span className="text-gray-500 cursor-not-allowed">YucaFoods (Coming Soon)</span></li>
                            <li><span className="text-gray-500 cursor-not-allowed">YucaExports (Coming Soon)</span></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2026 YucaChain Limited. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
