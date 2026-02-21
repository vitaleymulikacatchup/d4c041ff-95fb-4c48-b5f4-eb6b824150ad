"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    if (isLoading) {
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
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleCentered
                            brandName="Bakteria"
                            navItems={[
                                { name: "Home", id: "/" },
                                { name: "About", id: "/#about" },
                                { name: "Menu", id: "/#menu" },
                                { name: "Brew Process", id: "/#process" },
                                { name: "Blog", id: "/blog" },
                                { name: "Shop", id: "/shop" },
                                { name: "Contact", id: "/#contact" }
                            ]}
                            button={{ text: "Order Now", href: "/#contact" }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
                    <div id="footer" data-section="footer">
                        <FooterCard
                            logoText="Bakteria"
                            copyrightText="© 2025 Bakteria Coffee Roastery. All rights reserved."
                            socialLinks={[
                                {"icon":Instagram,"href":"https://instagram.com/bakteriacoffee","ariaLabel":"Instagram"},
                                {"icon":Twitter,"href":"https://twitter.com/bakteriacoffee","ariaLabel":"Twitter"},
                                {"icon":Facebook,"href":"https://facebook.com/bakteriacoffee","ariaLabel":"Facebook"}
                            ]}
                        />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

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
                <div id="navbar" data-section="navbar">
                    <NavbarStyleCentered
                        brandName="Bakteria"
                        navItems={[
                            { name: "Home", id: "/" },
                            { name: "About", id: "/#about" },
                            { name: "Menu", id: "/#menu" },
                            { name: "Brew Process", id: "/#process" },
                            { name: "Blog", id: "/blog" },
                            { name: "Shop", id: "/shop" },
                            { name: "Contact", id: "/#contact" }
                        ]}
                        button={{ text: "Order Now", href: "/#contact" }}
                    />
                </div>
                <div id="productCatalog" data-section="productCatalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterCard
                        logoText="Bakteria"
                        copyrightText="© 2025 Bakteria Coffee Roastery. All rights reserved."
                        socialLinks={[
                            {"icon":Instagram,"href":"https://instagram.com/bakteriacoffee","ariaLabel":"Instagram"},
                            {"icon":Twitter,"href":"https://twitter.com/bakteriacoffee","ariaLabel":"Twitter"},
                            {"icon":Facebook,"href":"https://facebook.com/bakteriacoffee","ariaLabel":"Facebook"}
                        ]}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
