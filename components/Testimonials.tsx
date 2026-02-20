"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Before YucaChain, accessing buyers was difficult. Now I know the market price and who I am selling to. The transparency is incredible.",
        author: "Oluwaseun Adewale",
        location: "Ogun State, Nigeria",
        image: "https://images.unsplash.com/photo-1595825833446-2d1ae6cdfdff?w=200&h=200&fit=crop"
    },
    {
        quote: "The platform has made our harvest more structured and profitable. I can track the entire process right from my mobile phone.",
        author: "Chinedu Eze",
        location: "Enugu, Nigeria",
        image: "https://images.unsplash.com/photo-1542868722-19e072eb9dc8?w=200&h=200&fit=crop"
    },
    {
        quote: "With YucaVault, my cassava stays fresh much longer, giving me the flexibility to sell when prices are right instead of rushing to market.",
        author: "Amina Yusuf",
        location: "Kano State, Nigeria",
        image: "https://images.unsplash.com/photo-1531123414780-f7424ad37314?w=200&h=200&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-green-900 dark:bg-transparent border-y border-transparent dark:border-gray-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 dark:bg-green-900/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800 dark:bg-green-900/30 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">What Farmers Say About Us</h2>
                    <p className="text-lg text-green-100/80">
                        Our impact is measured by the success of the farmers we serve.
                    </p>
                </div>

                <div className="relative flex overflow-x-hidden group pb-8">
                    {/* The animate-marquee class performs a continuous translation to -50% */}
                    <div className="animate-marquee flex w-max items-stretch group-hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((testi, idx) => (
                            <div key={idx} className="flex-shrink-0 px-4">
                                {/* Wrap the card in px-4 to give it uniform spacing that gets calculated into the container's width */}
                                <div className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 dark:border-gray-800 flex flex-col justify-between w-[320px] sm:w-[400px] h-full whitespace-normal hover:border-green-500/50 transition-colors duration-300">
                                    <Quote className="text-green-400 w-10 h-10 mb-6 opacity-40 shrink-0" />
                                    <p className="text-lg italic font-medium leading-relaxed mb-8 flex-grow">&quot;{testi.quote}&quot;</p>

                                    <div className="flex items-center">
                                        <div className="w-14 h-14 bg-green-800 rounded-full overflow-hidden mr-4 shrink-0 border-2 border-green-500/30">
                                            <img src={testi.image} alt={testi.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">{testi.author}</h4>
                                            <p className="text-green-300 text-sm">{testi.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
