"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useBlogPosts } from "@/hooks/useBlogPosts";

const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/#about" },
    { name: "Menu", id: "/#menu" },
    { name: "Brew Process", id: "/#process" },
    { name: "Contact", id: "/#contact" }
];

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
            <div id="nav" data-section="nav">
                <NavbarStyleCentered
                    brandName="Bakteria"
                    navItems={navItems}
                    button={{ text: "Order Now", href: "/#contact" }}
                />
            </div>

            {isLoading ? (
                <div className="w-full mx-auto py-20 text-center">
                    <p className="text-foreground">Loading posts...</p>
                </div>
            ) : (
                <div id="blog" data-section="blog">
                    <BlogCardOne
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
                            href: "https://instagram.com/bakteriacoffee",                            ariaLabel: "Instagram"
                        },
                        {
                            icon: Twitter,
                            href: "https://twitter.com/bakteriacoffee",                            ariaLabel: "Twitter"
                        },
                        {
                            icon: Facebook,
                            href: "https://facebook.com/bakteriacoffee",                            ariaLabel: "Facebook"
                        }
                    ]}
                />
            </div>
        </ThemeProvider>
    );
}
