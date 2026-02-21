"use client";


export default function Partners() {
    const logos = [
        "European Commission",
        "FS4Africa",
        "reframe.food",
        "International Institute of Tropical Agriculture",
        "Agbeyewa Farms",
        "ACT Foundation",
        "Federal Government of Nigeria"
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
                            <span key={idx} className="mx-8 text-2xl font-black text-gray-300 dark:text-gray-700 uppercase shrink-0 hover:text-green-600 dark:hover:text-green-500 transition-colors cursor-default">
                                {logo}
                            </span>
                        ))}
                        {/* Duplicate for seamless infinite loop */}
                        {logos.map((logo, idx) => (
                            <span key={`dup-${idx}`} className="mx-8 text-2xl font-black text-gray-300 dark:text-gray-700 uppercase shrink-0 hover:text-green-600 dark:hover:text-green-500 transition-colors cursor-default">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
