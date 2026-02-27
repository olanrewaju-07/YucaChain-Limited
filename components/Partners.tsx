"use client";

import Image from "next/image";

export default function Partners() {
    const logos = [
        { name: "European Commission", src: "/European_Commission.svg.png" },
        { name: "FS4Africa", src: "/FS4AFRICA_LOGO.png" },
        { name: "reframe.food", src: "/REFRAME_FOOD.png" },
        { name: "International Institute of Tropical Agriculture", src: "/IITA.png" },
        { name: "Agbeyewa Farms", src: "/AGBEYEWA.png" },
        { name: "ACT Foundation", src: "/ACT_FOUNDATION.jpeg" },
        { name: "Federal Government of Nigeria", src: "/FG_IMAGE.jpeg" },
        { name: "Kwara State Govt", src: "/states-kwara.png" },
        { name: "Ilorin Innovation Hub", src: "/IIH.png" },
        { name: "Cavista Holdings", src: "/Cavista_Holdings.png" },
        { name: "NCIA", src: "/NCIA.png" },
        { name: "IHS", src: "/ihs-logo.png" },
        { name: "CcHub", src: "/Cchub.png" }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-transparent overflow-hidden border-y border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 dark:bg-transparent">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
                    Backed By
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    We collaborate with institutions, foundations, and innovation platforms committed to strengthening Africa’s food systems.
                </p>

                {/* Marquee Animation */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee-reverse whitespace-nowrap flex items-center group-hover:[animation-play-state:paused] py-4">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="mx-8 shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 ">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={160}
                                    height={80}
                                    className="object-contain h-16 w-auto"
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless infinite loop */}
                        {logos.map((logo, idx) => (
                            <div key={`dup-${idx}`} className="mx-8 shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={160}
                                    height={80}
                                    className="object-contain h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
