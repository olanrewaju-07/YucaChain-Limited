"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamData = [
    {
        name: "Abdulmumin Solihu",
        role: "Chief Executive Officer",
        bio: "Agricultural and Biosystems Engineer with a lot of experience in agritech. Abdulmumin leads our strategic vision to transform Africa's cassava supply chain into a digital-first ecosystem.",
        image: "abdulmumin.png",
        linkedin: "https://www.linkedin.com/in/abdulmuminsolihu",
        email: "mailto:abdulmuminsolihu@gmail.com",
        twitter: "https://www.x.com/pee5ivepen"
    },
    {
        name: "Abdulbasit Issa Titilope",
        role: "Chief Technology Officer",
        bio: "An Agricultural and Biosystems Engineer with a strong background in software development. Abdulbasit is passionate about leveraging technology to solve real-world problems in the agricultural sector.",
        image: "/abdulbasit.jpeg",
        linkedin: "https://www.linkedin.com/in/abdulbasit-issa",
        email: "mailto:issabasheet@gmail.com",
        twitter: "https://x.com/basitisa78850?s=21"
    },
    {
        name: "Shukurah Sulaimon",
        role: "Chief Marketing Officer",
        bio: "Food technologist and communications expert leading our brand identity. She scales our impact and outreach across rural and industrial markets.",
        image: "/shukroh1.jpeg",
        linkedin: "https://www.linkedin.com/in/shukurah-sulaimon-41aa76237",
        email: "mailto:mojisolasulaimon563@gmail.com",
        twitter: "https://x.com/Shuab234"
    },
    {
        name: "Abiola Khashiah",
        role: "Human Resource Manager",
        bio: "Dedicated to building a thriving workplace culture. Abiola oversees talent acquisition, organizational development, and employee welfare.",
        image: "khasiat.jpeg",
        linkedin: "https://www.linkedin.com/in/khashiat-abiola-2542663b2",
        email: "mailto:abiolakhashiat@gmail.com",
        twitter: "https://twitter.com/abiolakhashiah"
    },
    {
        name: "Ibrahim Taiye Ridwanullah",
        role: "Research Analyst",
        bio: "Data-driven researcher focusing on market trends, agricultural policies, and supply chain insights to inform our strategic decisions.",
        image: "taiwo1.jpeg",
        linkedin: "https://www.linkedin.com/in/ridwan-ibrahim-7585193b2",
        email: " mailto:Ibrahimridwan3002@gmail.com",
        twitter: "https://x.com/ridwani11075762?s=11"
    },
    {
        name: "Damilare Muhammad",
        role: "Senior UI/UX Designer",
        bio: "Creative problem solver bridging the gap between user needs and business goals. Damilare crafts intuitive and engaging digital experiences for our platforms.",
        image: "muhammad.png",
        linkedin: "https://www.linkedin.com/in/damilare-muhammed-9b2a27184",
        email: "mailto:muhammeddamilare99@gmail.com",
        twitter: "https://x.com/darey_SA"
    },
    {
        name: "Abdulraheem MuhammadFatihu",
        role: "Brand Identity Designer",
        bio: "Visual storyteller responsible for shaping our brand's look and feel. Abdulraheem crafts compelling narratives through impactful design.",
        image: "essfive.jpeg",
        linkedin: "https://www.linkedin.com/in/abdulraheem-muhammadfatihu-a58172278",
        email: "mailto:muhammadfatihu2023@gmail.com",
        twitter: "https://x.com/Shinavisuals"
    },
    {
        name: "Maryam Abdullateef",
        role: "Technical Documentation Writer",
        bio: "Skilled communicator who translates complex technical concepts into clear, accessible documentation for our users and development teams.",
        image: "maryam.jpeg",
        linkedin: "https://www.linkedin.com/in/maryam-abdullateef",
        email: "mailto:abdullateefmaryamidowu@gmail.com",
        twitter: "https://x.com/Thegurl_ID"
    },
    {
        name: "Abdulganiy Abdulsomad Olaitan",
        role: "Frontend Engineer",
        bio: "Passionate about creating seamless user interfaces. Abdulganiy builds responsive, accessible, and performant web applications for our ecosystem.",
        image: "abdulsomad.jpeg",
        linkedin: "https://www.linkedin.com/in/abdulganiy-abdulsomad-olaitan-831160242",
        email: "mailto:abdulganiyola6@gmail.com",
        twitter: "https://www.x.com/ola_abdulganiy"
    },
    {
        name: "Sikiru Oluwakemi",
        role: "Structural Engineer",
        bio: "Engineering professional focused on designing robust infrastructure and physical assets that support our on-the-ground agricultural operations.",
        image: "sikiru.jpeg",
        linkedin: "https://www.linkedin.com/in/sikiru-oluwakemi-96a5b6274",
        email: "mailto: rashidasikiru11@gmail.com",
        twitter: "https://www.x.com/sikiru_oluwakemi"
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-gray-50 dark:bg-transparent border-y border-transparent dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We are a multidisciplinary powerhouse combining Agricultural & Biosystems Engineering with experts in Mechanical Design, UI/UX, Food Science, and Market Communications to solve complex ag-tech challenges. </p>
                    <div className="mt-8 h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {teamData.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 text-center flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)] transition-all duration-300 ease-out"
                        >
                            <div className="w-28 h-28 mx-auto bg-green-100 dark:bg-green-900/40 rounded-full mb-6 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-sm shrink-0 overflow-hidden relative group-hover:border-green-500/50 transition-colors duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top filter group-hover:brightness-110 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
                            <p className="text-green-600 dark:text-green-400 text-sm font-semibold mb-6 uppercase tracking-wider">{member.role}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 flex-grow">{member.bio}</p>

                            <div className="flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={member.twitter} className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href={member.email} className="text-gray-400 hover:text-green-600 hover:scale-110 transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
