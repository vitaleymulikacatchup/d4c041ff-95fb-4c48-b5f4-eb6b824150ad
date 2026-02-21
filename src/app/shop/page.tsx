"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { Instagram, Twitter, Facebook } from 'lucide-react';

const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/#about" },
    { name: "Menu", id: "/#menu" },
    { name: "Brew Process", id: "/#process" },
    { name: "Contact", id: "/#contact" }
];

export default function ShopPage() {
    const {
        products,
        isLoading,
    } = useProductCatalog({ basePath: "/shop" });

    const formattedProducts = products.map((p: any) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        variant: p.meta?.variant || 'Coffee Beans',
        imageSrc: p.images?.[0]?.src || '/placeholders/placeholder.webp',
        imageAlt: p.images?.[0]?.alt || p.name,
    }));

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
                <main className="min-h-screen flex items-center justify-center pt-20">
                    <p className="text-foreground">Loading products...</p>
                </main>
            ) : (
                <div id="product-catalog" data-section="product-catalog">
                    <ProductCardFour
                        title="Our Products"
                        description="Handpicked beans from around the world, roasted to perfection in our roastery."
                        tag="Shop"
                        products={formattedProducts}
                        gridVariant="uniform-all-items-equal"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                    />
                </div>
            )}
            <div id="footer" data-section="footer">
                <FooterCard
                    logoText="Bakteria"
                    copyrightText="© 2025 Bakteria Coffee Roastery. All rights reserved."
                    socialLinks={[
                        { icon: Instagram, href: "https://instagram.com/bakteriacoffee", ariaLabel: "Instagram" },
                        { icon: Twitter, href: "https://twitter.com/bakteriacoffee", ariaLabel: "Twitter" },
                        { icon: Facebook, href: "https://facebook.com/bakteriacoffee", ariaLabel: "Facebook" }
                    ]}
                />
            </div>
        </ThemeProvider>
    );
}
