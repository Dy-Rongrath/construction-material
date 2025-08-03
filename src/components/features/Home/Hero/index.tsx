import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import { SHOP_CONFIG } from "@/config/shopConfig";

const Hero = () => {
  // Get hero content based on shop type
  const getHeroContent = () => {
    switch (SHOP_CONFIG.shopType) {
      case 'construction':
        return {
          product1: {
            title: "Premium Portland Cement",
            offer: "bulk order discount",
            price: "$299",
            originalPrice: "$399",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center"
          },
          product2: {
            title: "Steel Rebar Bundle",
            offer: "professional grade",
            price: "$89",
            originalPrice: "$129",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
          }
        };
      case 'electronics':
        return {
          product1: {
            title: "iPhone 14 Plus & 14 Pro Max",
            offer: "limited time offer",
            price: "$699",
            originalPrice: "$999",
            image: "/images/hero/hero-02.png"
          },
          product2: {
            title: "Wireless Headphone",
            offer: "limited time offer",
            price: "$699",
            originalPrice: "$999",
            image: "/images/hero/hero-01.png"
          }
        };
      case 'clothing':
        return {
          product1: {
            title: "Summer Collection 2024",
            offer: "seasonal sale",
            price: "$99",
            originalPrice: "$149",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center"
          },
          product2: {
            title: "Designer Jacket",
            offer: "winter special",
            price: "$199",
            originalPrice: "$299",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center"
          }
        };
      default:
        return {
          product1: {
            title: "Featured Product",
            offer: "special offer",
            price: "$99",
            originalPrice: "$149",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center"
          },
          product2: {
            title: "Popular Item",
            offer: "best seller",
            price: "$79",
            originalPrice: "$99",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
          }
        };
    }
  };

  const heroContent = getHeroContent();
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> {heroContent.product1.title} </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        {heroContent.product1.offer}
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          {heroContent.product1.price}
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          {heroContent.product1.originalPrice}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src={heroContent.product1.image}
                      alt="product image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> {heroContent.product2.title} </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        {heroContent.product2.offer}
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          {heroContent.product2.price}
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          {heroContent.product2.originalPrice}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src={heroContent.product2.image}
                      alt="product image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
