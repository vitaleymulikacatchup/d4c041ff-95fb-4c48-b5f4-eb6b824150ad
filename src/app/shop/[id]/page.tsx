"use client";

import { use, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import ProductDetailCard from "@/components/ecommerce/productDetail/ProductDetailCard";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

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
        selectedQuantity,
        createCartItem,
    } = useProductDetail(id);

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        addItem,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { buyNow, checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleAddToCart = useCallback(() => {
        const item = createCartItem();
        if (item) {
            addItem(item);
        }
    }, [createCartItem, addItem]);

    const handleBuyNow = useCallback(() => {
        if (product) {
            buyNow(product, selectedQuantity);
        }
    }, [product, selectedQuantity, buyNow]);

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

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
                                {"name":"Home","id":"/"},
                                {"name":"About","id":"about"},
                                {"name":"Menu","id":"menu"},
                                {"name":"Brew Process","id":"process"},
                                {"name":"Contact","id":"contact"},
                                {"name":"Shop","id":"/shop"}
                            ]}
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading product...</p>
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

    if (!product) {
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
                                {"name":"Home","id":"/"},
                                {"name":"About","id":"about"},
                                {"name":"Menu","id":"menu"},
                                {"name":"Brew Process","id":"process"},
                                {"name":"Contact","id":"contact"},
                                {"name":"Shop","id":"/shop"}
                            ]}
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
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
                            {"name":"Home","id":"/"},
                            {"name":"About","id":"about"},
                            {"name":"Menu","id":"menu"},
                            {"name":"Brew Process","id":"process"},
                            {"name":"Contact","id":"contact"},
                            {"name":"Shop","id":"/shop"}
                        ]}
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>
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
                            { text: "Add To Cart", onClick: handleAddToCart },
                            { text: "Buy Now", onClick: handleBuyNow },
                        ]}
                    />
                </div>
                <div id="productCart" data-section="productCart">
                    <ProductCart
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                        items={cartItems}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        total={`$${cartTotal}`}
                        buttons={[
                            {
                                text: isCheckoutLoading ? "Processing..." : "Check Out",                                onClick: handleCheckout,
                            },
                        ]}
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