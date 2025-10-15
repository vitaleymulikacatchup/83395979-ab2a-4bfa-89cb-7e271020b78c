"use client";

import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-car", "url": "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Elegant white luxury car parked in an urban alley, exuding sophistication and style." },
  { "id": "about-us-img", "url": "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Neatly arranged wrenches and tools on a workshop wall, ideal for mechanics." },
  { "id": "classic-car", "url": "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A beautifully restored classic car on a sunny road in Havana, Cuba, with lush foliage and a vibrant sky." },
  { "id": "team-photo", "url": "https://images.pexels.com/photos/7018500/pexels-photo-7018500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Mechanics working on a truck in a workshop, focused on repair and maintenance." },
  { "id": "testimonials-background", "url": "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Luxury cars lined up at an outdoor dealership, showcasing sleek designs." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"slide-background"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Car Shop"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Drive Your Dream"
            description="Explore our exclusive collection of luxury cars"
            imageSrc={assetMap.find(a => a.id === 'hero-car')?.url}
            buttons={[
              { text: "View Inventory", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
            className="bg-pink-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Experience, Quality, Commitment"
            buttons={[
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-pink-100"
            titleClassName="text-gray-900"
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: "1",
                brand: "Luxury Motors",
                name: "Sleek Model X",
                price: "$75,000",
                rating: 4,
                reviewCount: "1.2k",
                imageSrc: assetMap.find(a => a.id === 'classic-car')?.url
              },
              {
                id: "2",
                brand: "Speedy Auto",
                name: "Fastback 2023",
                price: "$60,000",
                rating: 5,
                reviewCount: "3.4k",
                imageSrc: assetMap.find(a => a.id === 'classic-car')?.url
              },
              {
                id: "3",
                brand: "EcoDrive",
                name: "Eco Cruiser",
                price: "$45,000",
                rating: 4.5,
                reviewCount: "2.7k",
                imageSrc: assetMap.find(a => a.id === 'classic-car')?.url
              }
            ]}
            title="Our Exclusive Cars"
            className="bg-pink-100"
            textBoxTitleClassName="text-gray-900"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Let's Connect"
            title="Interested in a Test Drive?"
            description="Reach out to our team to book a test drive or learn more about our cars."
            imageSrc={assetMap.find(a => a.id === 'team-photo')?.url}
            inputPlaceholder="Your email address"
            buttonText="Book Now"
            termsText="We respect your privacy. Unsubscribe at any time."
            className="bg-pink-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] },
              { title: "Inventory", items: [{ label: "Browse Cars", href: "products" }, { label: "Special Offers", href: "offers" }] }
            ]}
            copyrightText="© 2025 Car Shop"
            className="bg-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
