"use client";

import { Twitter, Linkedin, Facebook, ArrowRight, ExternalLink, Link as LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";

function LinkPreview({ url }: { url: string }) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPreview() {
            try {
                // Try our custom API first, if it fails or requires another tool, 
                // we'll rely on our endpoint. We append timestamp to avoid caching issues during development.
                const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                } else {
                    // Fallback to microlink API if our API fails (e.g. for LinkedIn)
                    const microRes = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
                    if (microRes.ok) {
                        const microJson = await microRes.json();
                        if (microJson.data) setData(microJson.data);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch preview:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPreview();
    }, [url]);

    if (loading) {
        return (
            <div className="w-full h-40 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse mb-4 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <LinkIcon className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-2" />
            </div>
        );
    }

    if (!data) return null;

    // Handle both link-preview-js and microlink data formats
    const image = data.images?.[0] || data.image?.url || data.logo?.url || data.favicons?.[0];
    const title = data.title;
    const description = data.description;
    const siteName = data.siteName || data.publisher || new URL(url).hostname;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-green-500 transition-colors mb-4 group/preview bg-gray-50 dark:bg-gray-800/30"
        >
            {image && (
                <div className="w-full h-32 overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 relative">
                    <img src={image} alt={title || "Link preview"} className="w-full h-full object-cover group-hover/preview:scale-105 transition-transform duration-300" />
                </div>
            )}
            <div className="p-3">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1 mb-1">{title || data.url}</h4>
                {description && (
                    <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">{description}</p>
                )}
                {siteName && (
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 truncate font-medium uppercase tracking-wider">
                        {siteName}
                    </div>
                )}
            </div>
        </a>
    );
}

const newsItems = [
    {
        link: "https://www.linkedin.com/posts/abdulmuminsolihu_worldcassavaday-cassavachangemakers-agbeyewafarms-activity-7349176017531367424-MQzp?utm_source=share&utm_medium=member_android&rcm=ACoAADTW25MB9flAtY-RfaCfuN7IdZ4qoZJJkZQ",
        color: "text-blue-400"
    },
    {
        link: "https://devpost.com/software/yucachain",
        color: "text-blue-600"
    },
    {
        link: "https://www.agbeyewa.com/",
        color: "text-blue-500"
    },
    {
        link: "https://www.instagram.com/reel/DP3ZXM2DsJW/?igsh=M3Y5ZHJmdHByNnc0",
        color: "text-blue-400"
    }
];

export default function YucaNews() {
    return (
        <section id="news" className="py-24 bg-gray-50 dark:bg-[#0B1120] border-y border-transparent dark:border-gray-800 text-gray-900 dark:text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 dark:bg-green-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 dark:bg-green-900/20 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">About Us In The News</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        See what people, organizations, and the community are saying about Us across the web and social media.
                    </p>
                </div>

                <div className="relative flex overflow-x-hidden group pb-8">
                    <div className="animate-marquee flex w-max items-stretch group-hover:[animation-play-state:paused]">
                        {[...newsItems, ...newsItems].map((item, idx) => {

                            return (
                                <div key={idx} className="flex-shrink-0 px-4">
                                    <div className="bg-white dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-800 flex flex-col justify-between w-[320px] sm:w-[400px] h-full whitespace-normal hover:border-green-500/50 dark:hover:border-green-500/50 transition-colors duration-300 shadow-sm dark:shadow-none">

                                        <div className="flex items-center justify-between mb-4">
                                        </div>

                                        {item.link && (
                                            <LinkPreview url={item.link} />
                                        )}

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group/link"
                                            >
                                                Read more
                                                <ExternalLink className="w-4 h-4 ml-1.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
