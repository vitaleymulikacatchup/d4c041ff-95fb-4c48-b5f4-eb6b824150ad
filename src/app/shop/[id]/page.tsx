"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import ProductDetailCard from "@/components/ecommerce/productDetail/ProductDetailCard";
import { useProductDetail } from "@/hooks/useProductDetail";
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/#about" },
    { name: "Menu", id: "/#menu" },
    { name: "Brew Process", id: "/#process" },
    { name: "Contact", id: "/#contact" }
];

export default function ProductPage({ params }: ProductPageProps) {
    const { id } = use(params);
    const router = useRouter();

    const {
        product,
        isLoading,
        images,
        meta,
        variants,
        quantityVariant,
    } = useProductDetail(id);

    const renderContent = () => {
        if (isLoading) {
            return (
                <main className="min-h-screen flex items-center justify-center pt-20">
                    <p className="text-foreground">Loading product...</p>
                </main>
            );
        }

        if (!product) {
            return (
                <main className="min-h-screen flex items-center justify-center pt-20">
                    <div className="text-center">
                        <p className="text-foreground mb-4">Product not found</p>
                        <button
                            onClick={() => router.push("/shop")}
                            className="primary-button px-6 py-2 rounded-theme"
                        >
                            Back to Shop
                        </button>
                    </div>
                </main>
            );
        }

        return (
            <div id="productDetailCard" data-section="productDetailCard">
                <ProductDetailCard
                    layout="page"
                    name={product.name}
                    price={product.price}
                    salePrice={meta.salePrice}
                    rating={product.rating || 0}
                    description={product.description}
                    images={images}
                    variants={variants.length > 0 ? variants : undefined}
                    quantity={quantityVariant}
                    ribbon={meta.ribbon}
                    inventoryStatus={meta.inventoryStatus}
                    inventoryQuantity={meta.inventoryQuantity}
                    sku={meta.sku}
                    buttons={[
                        { text: "Learn More", onClick: () => router.push('/#process') },
                    ]}
                />
            </div>
        );
    };

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
            {renderContent()}
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
