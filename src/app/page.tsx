"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Instagram, Twitter, Facebook } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" },
  { name: "Menu", id: "/#menu" },
  { name: "Brew Process", id: "/#process" },
  { name: "Contact", id: "/#contact" }
];

export default function LandingPage() {
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
          button={{
            text: "Order Now",            href: "/#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          tag="Premium Coffee Roastery"
          title="Experience Crafted Coffee Excellence"
          description="Discover Bakteria, where every cup tells a story of passion, precision, and premium quality. From bean to brew, we celebrate the art of coffee."
          background={{ variant: "animated-grid" }}
          mediaItems={[
            { imageSrc: "https://img.b2bpic.net/free-photo/coffee-beans-glass-jar-black-background-closeup-selective-focus-vertical-frame-roasting-preparing-coffee-vertical-frame_166373-2289.jpg?_wi=1", imageAlt: "Coffee beans in a jar" },
            { imageSrc: "https://img.b2bpic.net/free-photo/high-angle-barista-leveling-coffee-level-machine-cup_23-2148523052.jpg?_wi=1", imageAlt: "Barista preparing coffee" }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="Loved by coffee enthusiasts"
          buttons={[
            { text: "Explore Our Menu", href: "/#menu" },
            { text: "Learn More", href: "/#about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          title="Rooted in passion, perfected through precision"
          description="Founded in 2018"
          subdescription="Bakteria Coffee Roastery"
          icon={Coffee}
          videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1771409435358-37r0e5p4.mp4"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Featured Coffee Selection"
          description="Handpicked beans from around the world, roasted to perfection in our roastery"
          tag="Our Blends"
          products={[
            {
              id: "1",              name: "Ethiopian Yirgacheffe",              price: "$16",              variant: "Bright & Floral",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-brown-bag-with-red-coffee-beans-it_181624-18802.jpg",              imageAlt: "Ethiopian Yirgacheffe"
            },
            {
              id: "2",              name: "Colombian Geisha",              price: "$18",              variant: "Smooth & Rich",              imageSrc: "https://img.b2bpic.net/free-photo/coffee-beans-glass-jar-black-background-closeup-selective-focus-vertical-frame-roasting-preparing-coffee-vertical-frame_166373-2289.jpg?_wi=2",              imageAlt: "Colombian Geisha"
            },
            {
              id: "3",              name: "Sumatra Mandheling",              price: "$15",              variant: "Deep & Full-bodied",              imageSrc: "https://img.b2bpic.net/free-photo/coffee-beans-black-background-with-pralines_114579-16619.jpg",              imageAlt: "Sumatra Mandheling"
            },
            {
              id: "4",              name: "Bacteria House Blend",              price: "$14",              variant: "Our Signature",              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-barista-leveling-coffee-level-machine-cup_23-2148523052.jpg?_wi=2",              imageAlt: "Bacteria House Blend"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardSix
          title="Our Brew Process"
          description="A meticulous journey from sourcing to your cup"
          tag="Craftsmanship"
          features={[
            {
              id: 1,
              title: "Sourcing",              description: "We partner directly with sustainable farms to source the finest beans from coffee-producing regions around the world.",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-male-hands-sorting-harvested-coffee-fruits-before-drying_181624-58904.jpg"
            },
            {
              id: 2,
              title: "Roasting",              description: "Each batch is roasted in small quantities using traditional methods to develop complex flavors and optimal aromatic profiles.",              imageSrc: "https://img.b2bpic.net/free-photo/mature-asian-man-apron-standing-coffee-roasting-equipment-checking-controls_1098-20597.jpg"
            },
            {
              id: 3,
              title: "Grinding",              description: "Precision grinding ensures the perfect extraction, bringing out the unique characteristics of each coffee blend.",              imageSrc: "https://img.b2bpic.net/free-photo/crop-hands-grinding-coffee-into-portafilter_23-2147775912.jpg"
            },
            {
              id: 4,
              title: "Brewing",              description: "Our baristas craft each cup with expertise, using precise water temperature and brewing techniques for the perfect taste.",              imageSrc: "https://img.b2bpic.net/free-photo/closeup-coffee-machine-making-espresso-drink_53876-33548.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Sarah Martinez",              imageSrc: "https://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg"
            },
            {
              id: "2",              name: "James Chen",              imageSrc: "https://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg"
            },
            {
              id: "3",              name: "Elena Rodriguez",              imageSrc: "https://img.b2bpic.net/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg"
            },
            {
              id: "4",              name: "Michael Thompson",              imageSrc: "https://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg"
            },
            {
              id: "5",              name: "Lisa Anderson",              imageSrc: "https://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-looks-camera_141793-103873.jpg"
            },
            {
              id: "6",              name: "David Kim",              imageSrc: "https://img.b2bpic.net/free-photo/young-handsome-man-wearing-casual-clothes-with-happy-cool-smile-face-lucky-person_839833-3198.jpg"
            }
          ]}
          cardTitle="Trusted by coffee enthusiasts worldwide"
          cardTag="Join our community"
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Connected"
          description="Subscribe to our newsletter for exclusive coffee releases, brewing tips, and special offers delivered straight to your inbox."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://img.b2bpic.net/free-photo/black-coffee-cookies-with-laptop-note-book_1339-8140.jpg"
          imageAlt="Coffee Newsletter"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Bakteria"
          copyrightText="© 2025 Bakteria Coffee Roastery. All rights reserved."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/bakteriacoffee",              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bakteriacoffee",              ariaLabel: "Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/bakteriacoffee",              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
