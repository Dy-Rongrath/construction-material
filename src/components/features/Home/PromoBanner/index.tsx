import React from "react";
import Image from "next/image";
import { SHOP_CONFIG } from "@/config/shopConfig";

const PromoBanner = () => {
  // Get promo content based on shop type
  const getPromoContent = () => {
    switch (SHOP_CONFIG.shopType) {
      case 'construction':
        return {
          main: {
            title: "Premium Steel Rebar",
            offer: "UP TO 25% OFF",
            description: "High-strength reinforcing steel bars for concrete structures. Perfect for residential and commercial construction projects.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
          },
          left: {
            title: "Concrete Mix",
            offer: "Save $50",
            description: "Ready-to-use concrete mix for foundations and structural work.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center"
          },
          right: {
            title: "Power Tools",
            offer: "Bundle Deal",
            description: "Professional-grade tools for construction projects.",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop&crop=center"
          }
        };
      case 'electronics':
        return {
          main: {
            title: "Apple iPhone 14 Plus",
            offer: "UP TO 30% OFF",
            description: "iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro, A15 Bionic, with a 5‑core GPU, powers all the latest features.",
            image: "/images/promo/promo-01.png"
          },
          left: {
            title: "Gaming Console",
            offer: "Save $100",
            description: "Latest gaming console with amazing graphics and performance.",
            image: "/images/promo/promo-02.png"
          },
          right: {
            title: "Smart Watch",
            offer: "Limited Time",
            description: "Track your fitness and stay connected with our smart watch.",
            image: "/images/promo/promo-03.png"
          }
        };
      case 'clothing':
        return {
          main: {
            title: "Designer Collection",
            offer: "UP TO 40% OFF",
            description: "Explore our latest designer collection featuring premium fabrics and contemporary styles perfect for any occasion.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center"
          },
          left: {
            title: "Summer Styles",
            offer: "Buy 2 Get 1",
            description: "Comfortable and stylish summer collection for the season.",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center"
          },
          right: {
            title: "Accessories",
            offer: "Special Deal",
            description: "Complete your look with our premium accessories collection.",
            image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop&crop=center"
          }
        };
      default:
        return {
          main: {
            title: "Featured Product",
            offer: "UP TO 30% OFF",
            description: "Amazing deals on our featured products. Don't miss out on these limited-time offers.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center"
          },
          left: {
            title: "Special Offer",
            offer: "Save Now",
            description: "Great savings on popular items.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center"
          },
          right: {
            title: "Best Deals",
            offer: "Limited Time",
            description: "Don't miss these amazing deals.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center"
          }
        };
    }
  };

  const content = getPromoContent();
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
                <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              {content.main.title}
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              {content.main.offer}
            </h2>

            <p>
              {content.main.description}
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Buy Now
            </a>
          </div>

          <Image
            src={content.main.image}
            alt="promo img"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src={content.left.image}
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                {content.left.title}
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                {content.left.offer}
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                {content.left.description}
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                Grab Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src={content.right.image}
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                {content.right.title}
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                {content.right.offer}
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                {content.right.description}
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
