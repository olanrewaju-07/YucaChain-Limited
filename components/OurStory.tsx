"use client";

import { useState } from "react";
import { X, MapPin } from "lucide-react";

// Modal data based on your specific content
const countryData = [
    {
        id: "nigeria",
        name: "Nigeria",
        rank: 1,
        production: "~60–61 million tonnes",
        color: "text-green-500",
        tonnes: "61.0M tonnes",
        globalRank: "#1 Producer Worldwide",
        facts: [
            "Nigeria alone produces more cassava than Thailand and Indonesia combined — yet Thailand dominates global cassava exports.",
            "80–90% of cassava in Nigeria is consumed locally as food (garri, fufu, lafun).",
            "Less than 10% is processed into industrial-grade starch or HQCF.",
            "30–40% post-harvest loss due to poor storage and delayed processing.",
            "Nigeria imports industrial starch annually despite being the worlds largest cassava producer."
        ],
        gap: {
            title: "Industrial Gap",
            content: "Massive potential for pharmaceutical starch, ethanol, adhesives, paper binders, and textiles. Underutilized by-product streams (peels, pulp) that could power bioenergy or animal feed industries."
        },
        opportunity: {
            title: "Hidden Opportunity",
            content: "If just 20% of Nigerias production were industrialized efficiently, it could unlock billions in non-oil GDP contribution."
        }
    },
    {
        id: "drc",
        name: "DR Congo",
        rank: 2,
        production: "~48 million tonnes",
        tonnes: "48.0M tonnes",
        color: "text-green-500",
        globalRank: "Top 3",
        facts: [
            "Cassava is the primary calorie source for millions.",
            "Extremely low mechanization levels in cultivation and processing.",
            "Industrial cassava processing capacity is minimal compared to output.",
            "Infrastructure constraints (roads, logistics) significantly inflate farm-to-market cost.",
            "Informal market dominance reduces traceability and value-chain financing access."
        ],
        gap: {
            title: "Structural Constraint",
            content: "High production. Low industrial absorption."
        },
        opportunity: {
            title: "Hidden Opportunity",
            content: "With improved value-chain infrastructure, DRC could become a regional starch powerhouse for Central Africa."
        }
    },
    {
        id: "ghana",
        name: "Ghana",
        rank: 3,
        production: "~25–26 million tonnes",
        tonnes: "25.5M tonnes",
        color: "text-green-500",
        globalRank: "Top 5–7 range",
        facts: [
            "Ghana has stronger policy support for cassava industrialization compared to many peers.",
            "Industrial conversion remains low relative to potential.",
            "Fragmented smallholder production reduces consistency for processors.",
            "High youth unemployment — yet cassava value addition could absorb thousands in processing and logistics."
        ],
        gap: {
            title: "Industrial Leverage Point",
            content: "HQCF substitution for imported wheat flour remains underexploited."
        },
        opportunity: {
            title: "Hidden Opportunity",
            content: "If supply chain coordination improves, Ghana scale export-grade cassava starch and derivatives."
        }
    },
    {
        id: "angola",
        name: "Angola",
        rank: 4,
        production: "~10–11 million tonnes",
        tonnes: "10.5M tonnes",
        color: "text-green-500",
        globalRank: "Top 10",
        facts: [
            "Cassava is a staple in rural diets.",
            "Processing networks are underdeveloped.",
            "Limited cold-chain or storage systems.",
            "Post-harvest deterioration severely reduces monetizable yield.",
            "Oil-dependent economy with strong need for agricultural diversification."
        ],
        gap: {
            title: "Structural Constraint",
            content: "Weak aggregation and limited industrial processing facilities."
        },
        opportunity: {
            title: "Hidden Opportunity",
            content: "Angola could diversify from oil by investing in cassava ethanol and starch industries for domestic substitution."
        }
    },
    {
        id: "mozambique",
        name: "Mozambique",
        rank: 5,
        production: "~6–7 million tonnes",
        tonnes: "6.4M tonnes",
        color: "text-green-400",
        globalRank: "Top 10",
        facts: [
            "Cassava is critical for food security in drought-prone regions.",
            "Significant post-harvest losses from transport gaps.",
            "Limited downstream processing capacity.",
            "High vulnerability to climate shocks.",
            "Large rural labor base dependent on low-margin production."
        ],
        gap: {
            title: "Structural Constraint",
            content: "Production resilience exists — industrial integration does not."
        },
        opportunity: {
            title: "Hidden Opportunity",
            content: "Localized storage hubs could drastically reduce loss and stabilize rural incomes."
        }
    }
];

export default function OurStory() {
    const [selectedCountry, setSelectedCountry] = useState<typeof countryData[0] | null>(null);

    return (
        <section id="story" className="py-24 bg-white dark:bg-[#0a0f16] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 dark:bg-green-500/5 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 dark:bg-green-500/5 rounded-full blur-[100px] opacity-50 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Intro Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-green-600 dark:text-green-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Africa & Cassava</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-serif leading-tight">
                        The <span className="text-green-600 dark:text-green-500 italic">Pain & Gain</span><br /> of Cassava in Africa
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                        Africa produces over 208 million tonnes of cassava annually — feeding 300 million people.
                        Yet post-harvest losses, poor infrastructure, and limited industrial processing keep the
                        continent&apos;s most vital crop far below its true potential.
                    </p>

                    {/* Stats Box */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 px-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d131f] max-w-3xl mx-auto mb-8 shadow-xl">
                        <div className="text-center px-4 w-full md:w-auto">
                            <div className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-500 mb-2">208.6M</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">Tonnes / Year</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 md:hidden"></div>
                        <div className="text-center px-4 w-full md:w-auto">
                            <div className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-500 mb-2">300M</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">People Dependent</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 md:hidden"></div>
                        <div className="text-center px-4 w-full md:w-auto">
                            <div className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-500 mb-2">Top 5</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">Producers Below</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <p>Click any highlighted country on the map or a button below</p>
                    </div>
                </div>

                {/* Map Area */}
                <div className="w-full max-w-3xl mx-auto mb-20 relative flex justify-center items-center py-6 px-3 min-h-[300px] border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0d131f] hover:bg-gray-50 dark:hover:bg-[#111822] transition-all cursor-pointer group shadow-lg">
                    {/* 👇 YOU WILL REPLACE THIS IMAGE TAG WITH YOUR MAP IMAGE 👇 */}
                    <img
                        src="/AfricaMap.png"
                        alt="Map showing top African Cassava Producers"
                        className="max-w-full h-auto object-contain relative z-10 w-full md:w-3/4 mx-auto hidden dark:block rounded-3xl"
                    />
                    <img
                        src="/AfricaMap.png"
                        alt="Map showing top African Cassava Producers"
                        className="max-w-full h-auto object-contain relative z-10 w-full md:w-3/4 mx-auto block dark:hidden rounded-3xl"
                    />

                </div>

                {/* Cards Section */}
                <div className="text-center mb-10">
                    <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Explore By Country</span>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">Top 5 Cassava Producers — Ranked</h3>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {countryData.map((country) => (
                        <button
                            key={country.id}
                            onClick={() => setSelectedCountry(country)}
                            className="flex flex-col items-center justify-center p-6 w-[160px] md:w-[170px] rounded-[32px] border border-gray-200 hover:border-green-500/50 dark:border-gray-800/80 bg-white dark:bg-[#0d131f] hover:bg-gray-50 dark:hover:bg-[#111822] transition-all cursor-pointer group shadow-lg"
                        >
                            <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest mb-6">RANK #{country.rank}</div>

                            {/* Shape placeholder representing abstract country shape */}
                            <div className="w-16 h-20 mb-6 bg-green-100 dark:bg-green-600/10 rounded-md group-hover:bg-green-500 dark:group-hover:bg-green-500/90 border border-transparent transition-all duration-300 flex items-center justify-center relative overflow-hidden" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
                                <MapPin className="text-green-600 dark:text-green-500 group-hover:text-white dark:group-hover:text-[#111822] z-10 w-6 h-6 transition-colors" />
                            </div>

                            <h4 className="text-lg font-bold font-serif mb-1 text-gray-900 dark:text-white">{country.name}</h4>
                            <div className="text-[11px] font-bold tracking-wide text-green-600 dark:text-green-400">{country.tonnes}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal Overlay Component */}
            {selectedCountry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
                    <div
                        className="fixed inset-0 bg-gray-900/40 dark:bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedCountry(null)}
                    ></div>

                    <div className="relative bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-gray-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col">

                        {/* Modal Header (Sticky) */}
                        <div className="bg-white dark:bg-[#0d131f] p-6 md:p-8 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start shrink-0 relative">
                            <div>
                                <span className="text-green-600 dark:text-green-500 font-bold tracking-widest uppercase text-[10px] block mb-2">Rank #{selectedCountry.rank}</span>
                                <h2 className="text-3xl md:text-4xl font-black mb-3 font-serif text-gray-900 dark:text-white">{selectedCountry.name}</h2>
                                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full">{selectedCountry.globalRank}</span>
                                    <span className="bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-500/20">{selectedCountry.production}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCountry(null)}
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors absolute top-6 right-6"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body (Scrollable) */}
                        <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-5 bg-green-500 rounded-sm"></span>
                                    Mind-Blowing Facts
                                </h3>
                                <ul className="space-y-4">
                                    {selectedCountry.facts.map((fact, idx) => (
                                        <li key={idx} className="flex gap-4 text-gray-700 dark:text-gray-300">
                                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
                                            <p className="leading-relaxed text-sm md:text-base">{fact}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-2xl p-5">
                                    <h3 className="text-red-700 dark:text-red-400 font-bold text-sm mb-2 uppercase tracking-wide">{selectedCountry.gap.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{selectedCountry.gap.content}</p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-500/5 border border-green-100 dark:border-green-500/10 rounded-2xl p-5">
                                    <h3 className="text-green-700 dark:text-green-400 font-bold text-sm mb-2 uppercase tracking-wide">{selectedCountry.opportunity.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{selectedCountry.opportunity.content}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}
