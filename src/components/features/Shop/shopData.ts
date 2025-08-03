import { Product } from "@/types/product";
import { SHOP_CONFIG } from "@/config/shopConfig";
import constructionMaterials from "./constructionData";

// Electronics data (keeping for flexibility)
const electronicsData: Product[] = [
  {
    title: "Havit HV-G69 USB Gamepad",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 1,
    image: "/images/products/product-1-sm-1.png",
    category: "Gaming",
    rating: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: [
        "/images/products/product-1-bg-1.png",
        "/images/products/product-1-bg-2.png",
      ],
    },
  },
  {
    title: "iPhone 14 Plus , 6/128GB",
    reviews: 5,
    price: 899.0,
    discountedPrice: 99.0,
    id: 2,
    image: "/images/products/product-2-sm-1.png",
    category: "Electronics",
    rating: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: [
        "/images/products/product-2-bg-1.png",
        "/images/products/product-2-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iMac M1 24-inch 2021",
    reviews: 5,
    price: 59.0,
    discountedPrice: 29.0,
    id: 3,
    image: "/images/products/product-3-sm-1.png",
    category: "Computers",
    rating: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: [
        "/images/products/product-3-bg-1.png",
        "/images/products/product-3-bg-2.png",
      ],
    },
  },
  {
    title: "MacBook Air M1 chip, 8/256GB",
    reviews: 6,
    price: 59.0,
    discountedPrice: 29.0,
    id: 4,
    image: "/images/products/product-4-sm-1.png",
    category: "Computers",
    rating: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-4-sm-1.png",
        "/images/products/product-4-sm-2.png",
      ],
      previews: [
        "/images/products/product-4-bg-1.png",
        "/images/products/product-4-bg-2.png",
      ],
    },
  },
  {
    title: "Apple Watch Ultra",
    reviews: 3,
    price: 99.0,
    discountedPrice: 29.0,
    id: 5,
    image: "/images/products/product-5-sm-1.png",
    category: "Wearables",
    rating: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-5-sm-1.png",
        "/images/products/product-5-sm-2.png",
      ],
      previews: [
        "/images/products/product-5-bg-1.png",
        "/images/products/product-5-bg-2.png",
      ],
    },
  },
  {
    title: "Logitech MX Master 3 Mouse",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 6,
    image: "/images/products/product-6-sm-1.png",
    category: "Accessories",
    rating: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-6-sm-1.png",
        "/images/products/product-6-sm-2.png",
      ],
      previews: [
        "/images/products/product-6-bg-1.png",
        "/images/products/product-6-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iPad Air 5th Gen - 64GB",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 7,
    image: "/images/products/product-7-sm-1.png",
    category: "Tablets",
    rating: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-7-sm-1.png",
        "/images/products/product-7-sm-2.png",
      ],
      previews: [
        "/images/products/product-7-bg-1.png",
        "/images/products/product-7-bg-2.png",
      ],
    },
  },
  {
    title: "Asus RT Dual Band Router",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 8,
    image: "/images/products/product-8-sm-1.png",
    category: "Networking",
    rating: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-8-sm-1.png",
        "/images/products/product-8-sm-2.png",
      ],
      previews: [
        "/images/products/product-8-bg-1.png",
        "/images/products/product-8-bg-2.png",
      ],
    },
  },
];

// Clothing data (example for flexibility)
const clothingData: Product[] = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    reviews: 124,
    price: 29.99,
    discountedPrice: 24.99,
    image: "/images/products/clothing-01.jpg",
    category: "mens-clothing",
    rating: 4.5,
    imgs: {
      thumbnails: [
        "/images/products/clothing-01.jpg",
        "/images/products/clothing-02.jpg",
        "/images/products/clothing-03.jpg",
      ],
      previews: [
        "/images/products/clothing-01.jpg",
        "/images/products/clothing-02.jpg",
        "/images/products/clothing-03.jpg",
      ],
    },
  },
  // Add more clothing items as needed
];

// Function to get products based on current shop type
export function getShopProducts(): Product[] {
  switch (SHOP_CONFIG.shopType) {
    case 'construction':
      return constructionMaterials;
    case 'electronics':
      return electronicsData;
    case 'clothing':
      return clothingData;
    default:
      return constructionMaterials; // Default to construction materials
  }
}

// Main export - dynamically returns products based on shop configuration
const shopData = getShopProducts();
export default shopData;

// Named exports for specific data sets (for flexibility)
export { constructionMaterials, electronicsData, clothingData };
