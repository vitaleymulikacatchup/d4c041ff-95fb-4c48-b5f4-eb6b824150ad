"use client";

import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="background-highlight"
            borderRadius="rounded"
            contentWidth="smallMedium"
            sizing="large"
            background="grid"
            cardStyle="solid"
            primaryButtonStyle="double-inset"
            secondaryButtonStyle="glass"
            headingFontWeight="extrabold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleCentered
                        brandName="Bakteria"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "About", id: "about" },
                            { name: "Menu", id: "menu" },
                            { name: "Brew Process", id: "process" },
                            { name: "Contact", id: "contact" }
                        ]}
                        button={{ text: "Order Now", href: "contact" }}
                    />
                </div>

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <div id="blog" data-section="blog">
                        <BlogCardTwo
                            blogs={posts}
                            title="Coffee Stories & Insights"
                            description="Discover the art of coffee roasting, brewing techniques, and the stories behind our exceptional beans"
                            textboxLayout="default"
                            useInvertedBackground={false}
                            animationType="slide-up"
                            carouselMode="buttons"
                            tag="Blog"
                        />
                    </div>
                )}

                <div id="footer" data-section="footer">
                    <FooterCard
                        logoText="Bakteria"
                        copyrightText="© 2025 Bakteria Coffee Roastery. All rights reserved."
                        socialLinks={[
                            {
                                icon: Instagram,
                                href: "https://instagram.com/bakteriacoffee",                                ariaLabel: "Instagram"
                            },
                            {
                                icon: Twitter,
                                href: "https://twitter.com/bakteriacoffee",                                ariaLabel: "Twitter"
                            },
                            {
                                icon: Facebook,
                                href: "https://facebook.com/bakteriacoffee",                                ariaLabel: "Facebook"
                            }
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
