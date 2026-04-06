"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export interface ProductModalData {
    id: string;
    title: string;
    image: string;
}

const productDetails: Record<string, {
    subtitle: string;
    sections: {
        heading: string;
        paragraphs: string[];
        bullets?: string[];
    }[];
}> = {
    yucachain: {
        subtitle: "The Mobile and Web Platform",
        sections: [
            {
                heading: "Connecting farmers, buyers, and processors through one transparent digital system",
                paragraphs: [
                    "At the centre of the ecosystem is the YucaChain platform. It is a mobile-first, offline-capable digital application that connects farmers, aggregators, processors, and buyers in one place, making the movement of agricultural produce visible, coordinated, and verifiable from end to end."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Farmers across Nigeria make pricing and selling decisions with almost no market information available to them. They sell to whoever is standing nearby, at whatever price is offered, with no way of knowing what the same produce is fetching ten kilometres away. Buyers and processors, on the other side of the chain, struggle to find reliable supply in consistent volume and quality. Middlemen profit from the information gap that exists between both parties, and neither side has the tools to change that.",
                    "The YucaChain platform exists to close this gap directly."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "The platform gives farmers the tools to take control of how they sell. Using the app, farmers can:"
                ],
                bullets: [
                    "Register their farm and create a verified profile",
                    "List available produce with quantity, variety, and harvest date",
                    "View current market prices in real time",
                    "Connect directly with verified buyers and processors",
                    "Track the movement of their produce from farm to destination",
                    "Receive payments and transaction records in one place"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "Every batch of cassava that moves through the YucaChain ecosystem carries a QR-coded digital record. This record captures where the produce came from, when it was harvested, how it was stored, what quality parameters it met, and who handled it at each stage. This is what makes the platform more than just a marketplace. It is a traceability system that creates trust between every party in the chain."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Farmers sell faster and at better prices because they have information and direct access to buyers",
                    "Buyers and processors access verified, documented supply before the truck even arrives",
                    "Middlemen who add cost without adding value are no longer the only option",
                    "Every transaction generates a data record that builds a verifiable history for each farm and each batch",
                    "The entire supply chain becomes legible to investors, regulators, and international markets for the first time"
                ]
            }
        ]
    },
    yucavault: {
        subtitle: "Solar Cold Chain",
        sections: [
            {
                heading: "Keeping cassava fresh longer, without electricity, without refrigerants, and without the costs that make conventional cold chain inaccessible",
                paragraphs: [
                    "YucaVault is a solar-powered evaporative cooling unit designed to extend cassava shelf life from 24 to 48 hours to 7 to 14 days. It is built to sit on the back of a transport truck and operate entirely on solar energy, making first-mile cold chain possible in rural farming communities that have never had access to it before."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Cassava begins to deteriorate within hours of harvest. This biological reality, known as post-harvest physiological deterioration, forces farmers into a selling position they cannot win. The produce must be sold immediately, at whatever price the first buyer offers, or it will be unsellable by tomorrow morning.",
                    "Conventional cold chain solutions exist but they are not designed for smallholders. A refrigerated truck costs between 80,000 and 150,000 naira per trip. It requires grid electricity that does not reach most farm gates. The maintenance demands specialist knowledge and imported parts. For the average cassava farmer in Kwara or Oyo State, conventional cold chain is not an option. YucaVault is designed to be exactly that option."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "YucaVault uses evaporative cooling, a proven and energy-efficient process that reduces temperature by converting heat into water vapour. Inside the vault, a closed-loop IoT system monitors the environment continuously and makes automatic adjustments to keep the produce in the best possible condition throughout the journey.",
                    "The sensors inside YucaVault track:"
                ],
                bullets: [
                    "Internal air temperature and relative humidity",
                    "Cassava core temperature at multiple points",
                    "Carbon dioxide levels, which signal the health of the stored produce",
                    "Solar power generation and battery status"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "The system follows a two-phase biological protocol. During the first phase, it maintains warm, humid conditions that allow cassava wounds from harvest to heal naturally and form a protective layer. During the second phase, it shifts to cooler, stable conditions that slow down further deterioration. This is not just cooling. It is a scientifically designed preservation environment built around the specific biology of cassava.",
                    "Everything the vault records is transmitted to the YucaChain platform, creating a temperature and condition history that travels with every batch to its destination."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Farmers no longer have to sell immediately at unfair prices",
                    "Cassava arrives at its destination in verifiable condition, with a documented record attached",
                    "Processors receive raw material that has been handled properly from the moment of harvest",
                    "The cold chain gap that has made fresh cassava logistics unreliable for decades becomes bridgeable without industrial infrastructure",
                    "Rural farming communities gain access to cold chain technology for the first time, running entirely on solar power"
                ]
            }
        ]
    },
    yucahub: {
        subtitle: "Aggregation and Food Safety Certification",
        sections: [
            {
                heading: "A trusted physical hub where produce is verified, certified, and prepared for formal commercial buyers",
                paragraphs: [
                    "YucaHub is a container-based cassava aggregation and food safety certification centre. It sits at a strategic point in the supply chain between smallholder farmers and industrial processors, and serves as the physical infrastructure that makes verified, bulk, quality-certified trade possible."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Industrial processors need large volumes of consistent, quality-verified raw material delivered reliably and on a predictable schedule. Smallholder farmers produce in small quantities, without grading, without documentation, and without the certification that formal buyers require. The trust gap between these two groups has persisted for decades because there was no infrastructure to bridge it. YucaHub is that infrastructure."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "Farmers bring their produce to the YucaHub, where it goes through a structured intake and certification process. The process includes:"
                ],
                bullets: [
                    "Visual quality assessment and grading by trained field agents",
                    "HCN cyanide field testing to ensure safe levels for processing",
                    "Moisture content measurement to confirm product suitability",
                    "Weight recording and batch assignment",
                    "QR-code generation that links the batch to its full history"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "Once certified, produce is aggregated with other verified batches into bulk volumes ready for processor purchase. It is held in IoT-monitored multi-zone cold storage until collection, with temperature and condition data continuing to be logged throughout the storage period.",
                    "The hub also serves as a community touchpoint for the YucaChain ecosystem. Farmers can access market price information, platform support, and quality training from hub staff. Field agents use the hub as a base for farmer onboarding and co-design engagement.",
                    "The food safety certification framework used at YucaHub is developed in collaboration with the National Agency for Food and Drug Administration and Control (NAFDAC) and the Standards Organisation of Nigeria (SON), giving the certification national regulatory credibility."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Smallholder farmers access formal commercial buyers they could not reach independently",
                    "Processors receive documented, certified supply that reduces incoming quality rejection rates",
                    "Buyers can purchase with confidence because every batch comes with a verifiable food safety record",
                    "A national standard for cassava quality documentation is established that benefits the entire sector",
                    "Farmers earn more because their produce is graded and valued by quality, not just by weight"
                ]
            }
        ]
    },
    yucamills: {
        subtitle: "Near-Farm Processing",
        sections: [
            {
                heading: "Bringing processing closer to the farm so more value stays in the farming community",
                paragraphs: [
                    "YucaMills are modular processing units positioned near high-density cassava farming zones to convert fresh cassava into stable, higher-value products close to where it was grown. The principle is simple. The closer processing happens to the farm, the less cassava is wasted in transit, and the more value farmers and their communities retain."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Fresh cassava is bulky, heavy, and highly perishable. The economics of transporting it over long distances to reach processing facilities in urban centres are difficult. High transport costs eat into already thin margins. Spoilage during the journey destroys produce that was in good condition when it left the farm. And by the time the raw material reaches a distant processor, the farmer has already received the lowest possible price for it.",
                    "Processing should happen near the source, not far from it."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "Farmers supply their cassava directly to a nearby YucaMills unit, either independently or through a connected YucaHub. The cassava is processed on-site or close to the farm into more stable intermediate products. These include:"
                ],
                bullets: [
                    "High-quality cassava flour for food and industrial use",
                    "Native and modified starch for food manufacturing and pharmaceutical applications",
                    "Dried cassava chips for animal feed and ethanol production",
                    "Cassava pellets for livestock feed"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "These processed products have a significantly longer shelf life than fresh cassava roots and are easier to transport, store, and sell at higher prices. Processing happens quickly after harvest, when the raw material is at its highest quality and nutrient content."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Significantly less spoilage because processing happens before long-distance transport",
                    "Higher-value products leaving farming communities instead of low-value raw commodities",
                    "More income per kilogram of cassava for the farmers who grew it",
                    "A more reliable and higher-quality raw material supply for industrial processors and food manufacturers",
                    "New employment opportunities in processing and logistics within farming communities",
                    "Reduced pressure on farmers to accept low farmgate prices because their produce has already been converted into something more valuable"
                ]
            }
        ]
    },
    yucafoods: {
        subtitle: "Consumer Food Products",
        sections: [
            {
                heading: "From the farm to the table, with safety and traceability built in every step of the way",
                paragraphs: [
                    "YucaFoods is the consumer-facing arm of the YucaChain ecosystem. It takes cassava from a raw agricultural commodity and turns it into finished, packaged food products that are safe, accessible, clearly labelled, and ready for everyday use in Nigerian homes and beyond."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Cassava is eaten daily in millions of Nigerian households in the form of garri, fufu, lafun, and other staples. It is Nigeria\u2019s most important food crop. Yet most cassava consumed in the country is processed informally, without standardised hygiene controls, quality certification, or consistent product characteristics.",
                    "At the same time, a growing number of urban consumers are looking for packaged, traceable food products with known provenance and verified safety. That demand is currently served largely by imported products. YucaFoods is the answer to that gap from within Nigeria\u2019s own agricultural sector."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "YucaFoods sources its raw material directly through the YucaChain supply chain, meaning every product starts with cassava that has already been grown, harvested, transported, certified, and processed under the YucaChain quality framework. This means full traceability is built into every product from the beginning.",
                    "The production process includes:"
                ],
                bullets: [
                    "Sourcing from YucaChain-certified farmers and aggregation hubs",
                    "Processing into finished food products using clean, controlled facilities",
                    "Quality testing at every stage of production",
                    "Packaging that is hygienic, clearly labelled, and designed for Nigerian retail and export markets",
                    "Full traceability documentation linking the product back to its farm of origin"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "Products are designed to meet the everyday cooking needs of Nigerian households, making meal preparation faster, safer, and more convenient without asking consumers to change what they eat."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Safe, clean, and properly packaged cassava food products available to Nigerian consumers",
                    "Full farm-to-shelf traceability on every product, giving consumers and retailers confidence in what they are buying",
                    "Increased demand for cassava that flows back through the value chain, directly benefiting farmers",
                    "A competitive Nigerian food brand that can stand alongside imported alternatives and beat them on authenticity, freshness, and traceability",
                    "A pathway for cassava-based food products to enter formal retail channels, institutional catering, and eventually export markets"
                ]
            }
        ]
    },
    yucaexports: {
        subtitle: "International Market Access",
        sections: [
            {
                heading: "Taking verified Nigerian cassava products to the world",
                paragraphs: [
                    "YucaExports is the international trade arm of the YucaChain ecosystem. It connects documented, quality-verified Nigerian cassava products with buyers in global markets, using the traceability infrastructure built across the entire YucaChain ecosystem to meet the documentation requirements that international trade demands."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Nigeria is the world\u2019s largest cassava producer. The global demand for cassava-derived products including starch, high-quality flour, sorbitol, and ethanol is growing steadily. The export opportunity for Nigerian cassava is enormous.",
                    "But the barrier has never been product quality. The barrier is documentation.",
                    "International buyers, food manufacturers, and regulatory bodies require full supply chain traceability before they will accept agricultural products from any source. They need to know where the product came from, how it was handled, what safety tests it passed, and what its condition was throughout its journey. Without that documentation infrastructure, Nigerian cassava cannot access export premium prices regardless of how good the product actually is. With it, the door opens to markets that most Nigerian producers have never been able to reach."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "YucaExports leverages the complete documentation trail that is generated at every stage of the YucaChain ecosystem. This includes:"
                ],
                bullets: [
                    "QR-coded batch records created at YucaHub, capturing quality test results, certifications, and lot information",
                    "Temperature and condition logs from YucaVault, providing a verified cold chain history for every shipment",
                    "Processing records from YucaMills, documenting how raw cassava was converted and at what standards",
                    "Traceability reports from the YucaChain platform, linking the entire journey from farm to export"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "These records are compiled into export documentation packages that meet EU, UK, and international food safety and traceability standards. This includes compliance with the EU Deforestation Regulation (EUDR), which requires documented, deforestation-free sourcing for agricultural products entering European markets."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "Access to international premium markets for Nigerian cassava products",
                    "Higher earnings per kilogram for producers because export markets pay significantly more than domestic informal markets",
                    "A replicable export compliance model that can be applied to other Nigerian agricultural commodities beyond cassava",
                    "A Nigerian agricultural export brand built on verified quality, documented safety, and transparent traceability rather than on price alone",
                    "Expansion of the YucaChain ecosystem beyond Nigeria as international demand for verified African agricultural products continues to grow"
                ]
            }
        ]
    },
    yucabuild: {
        subtitle: "Agricultural Machinery Fabrication",
        sections: [
            {
                heading: "Building the hardware that makes the ecosystem possible, in Nigeria, from Nigerian materials, for Nigerian conditions",
                paragraphs: [
                    "YucaBuild is the machinery fabrication arm of YucaChain. It is the manufacturing capability that translates engineering designs into physical agricultural infrastructure built specifically for the operating conditions of Nigerian farming communities."
                ]
            },
            {
                heading: "The gap it closes",
                paragraphs: [
                    "Agricultural technology in Africa has a persistent hardware problem. Too many solutions are designed outside the continent, manufactured outside the continent, and priced beyond the reach of the communities they are supposed to serve. When the equipment breaks down in a rural field environment, spare parts are unavailable, repair expertise is absent, and the technology becomes idle. The result is wasted investment and communities no better off than before.",
                    "YucaBuild exists because the best agricultural infrastructure for Nigeria is infrastructure built in Nigeria. Built with materials available in Nigerian markets. Built by fabricators who understand the roads, the weather, the dust, and the humidity. Built to be repaired by someone in the next town, not by a technician flown in from overseas."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "YucaBuild oversees the design, fabrication, quality assurance, and deployment of all physical YucaChain hardware. This currently includes the YucaVault cold chain unit and the YucaHub container conversion, and will expand to include YucaMills processing equipment and other infrastructure as the ecosystem grows.",
                    "The fabrication process involves:"
                ],
                bullets: [
                    "Engineering design developed by the YucaChain technical team",
                    "Design review and technical validation by the National Centre for Agricultural Mechanisation (NCAM)",
                    "Fabrication carried out through a network of certified Nigerian fabricators",
                    "Quality assurance checks at each stage of the build process",
                    "Field testing before deployment to confirm performance under real operating conditions"
                ]
            },
            {
                heading: "",
                paragraphs: [
                    "Every piece of hardware built through YucaBuild is designed with three non-negotiable principles. It must be repairable using locally available components. It must be maintainable by field-trained technicians without specialist imported tools. And it must be replicable at production scale without depending on overseas manufacturing."
                ]
            },
            {
                heading: "What it makes possible",
                paragraphs: [],
                bullets: [
                    "A domestic hardware supply chain that keeps manufacturing value inside Nigeria",
                    "Equipment that can be repaired and maintained in the communities where it operates",
                    "Cost-appropriate technology that smallholder farming communities can actually access and sustain",
                    "A replicable fabrication model that can be applied to new products as the ecosystem expands",
                    "A growing network of Nigerian fabricators with the skills and certification to build agricultural infrastructure at scale"
                ]
            }
        ]
    }
};

interface ProductModalProps {
    product: ProductModalData | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const details = product ? productDetails[product.id] : null;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && product && details && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-start justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 w-full max-w-4xl max-h-[90vh] my-[5vh] mx-4 bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800"
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200 shadow-lg"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto overscroll-contain">
                            {/* Hero Image */}
                            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-green-500/20 text-green-400 backdrop-blur-sm border border-green-500/30">
                                        {details.subtitle}
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                        {product.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 sm:p-8 md:p-10 space-y-8">
                                {details.sections.map((section, idx) => (
                                    <div key={idx}>
                                        {section.heading && (
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 relative">
                                                {(section.heading === "The gap it closes" || section.heading === "How it works" || section.heading === "What it makes possible") && (
                                                    <span className="inline-block w-1 h-6 bg-green-500 rounded-full mr-3 align-middle" />
                                                )}
                                                {section.heading}
                                            </h3>
                                        )}

                                        {section.paragraphs.map((para, pIdx) => (
                                            <p key={pIdx} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                                {para}
                                            </p>
                                        ))}

                                        {section.bullets && (
                                            <ul className="space-y-3 mt-4">
                                                {section.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="flex items-start">
                                                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                        <span className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                                                            {bullet}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
