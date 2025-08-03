import { SHOP_CONFIG } from "@/config/shopConfig";

// Generate category data based on shop type
const generateCategoryData = () => {
  const currentCategories = SHOP_CONFIG.categories[SHOP_CONFIG.shopType];
  
  // Construction material category images
  const constructionImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%236366f1'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3ECement%3C/text%3E%3C/svg%3E", // Cement & Concrete
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%238b5cf6'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3ESteel%3C/text%3E%3C/svg%3E", // Steel & Rebar
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2306b6d4'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3EBricks%3C/text%3E%3C/svg%3E", // Bricks & Blocks
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f59e0b'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3ERoofing%3C/text%3E%3C/svg%3E", // Roofing Materials
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ef4444'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3EElectric%3C/text%3E%3C/svg%3E", // Electrical Supplies
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2310b981'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3EPlumbing%3C/text%3E%3C/svg%3E", // Plumbing Fixtures
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2384cc16'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3ETools%3C/text%3E%3C/svg%3E", // Power Tools
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f97316'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='16' font-family='Arial'%3ESafety%3C/text%3E%3C/svg%3E"  // Safety Equipment
  ];

  // Electronics category images
  const electronicsImages = [
    "https://dummyimage.com/200x200/3b82f6/ffffff&text=Computer", // Computers
    "https://dummyimage.com/200x200/6366f1/ffffff&text=Phone", // Smartphones
    "https://dummyimage.com/200x200/8b5cf6/ffffff&text=Audio", // Headphones
    "https://dummyimage.com/200x200/06b6d4/ffffff&text=Gaming", // Gaming
    "https://dummyimage.com/200x200/f59e0b/ffffff&text=Laptop", // Laptops
    "https://dummyimage.com/200x200/ef4444/ffffff&text=Tablet", // Tablets
    "https://dummyimage.com/200x200/10b981/ffffff&text=Access", // Accessories
    "https://dummyimage.com/200x200/84cc16/ffffff&text=Electronics"  // Electronics
  ];

  // Clothing category images
  const clothingImages = [
    "https://dummyimage.com/200x200/3b82f6/ffffff&text=Shirts", // Shirts
    "https://dummyimage.com/200x200/6366f1/ffffff&text=Dresses", // Dresses
    "https://dummyimage.com/200x200/8b5cf6/ffffff&text=Shoes", // Shoes
    "https://dummyimage.com/200x200/06b6d4/ffffff&text=Bags", // Bags
    "https://dummyimage.com/200x200/f59e0b/ffffff&text=Jackets", // Jackets
    "https://dummyimage.com/200x200/ef4444/ffffff&text=Access", // Accessories
    "https://dummyimage.com/200x200/10b981/ffffff&text=Casual", // Casual
    "https://dummyimage.com/200x200/84cc16/ffffff&text=Formal"  // Formal
  ];

  // Base images for different shop types
  const getImageForCategory = (index: number) => {
    switch (SHOP_CONFIG.shopType) {
      case 'construction':
        return constructionImages[index] || constructionImages[0];
      case 'electronics':
        return electronicsImages[index] || electronicsImages[0];
      case 'clothing':
        return clothingImages[index] || clothingImages[0];
      default:
        return constructionImages[index] || constructionImages[0];
    }
  };

  return currentCategories.map((category, index) => ({
    title: category.name,
    id: index + 1,
    img: getImageForCategory(index),
    slug: category.slug
  }));
};

const data = generateCategoryData();

export default data;
