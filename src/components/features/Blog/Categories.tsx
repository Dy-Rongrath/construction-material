import React from "react";
import { SHOP_CONFIG } from "@/config/shopConfig";

interface Category {
  name: string;
  products: number;
}

interface CategoriesProps {
  categories?: Category[];
}

const Categories = ({ categories = [] }: CategoriesProps) => {
  // Get categories from shop config if none provided
  const displayCategories = categories.length > 0 
    ? categories 
    : SHOP_CONFIG.categories[SHOP_CONFIG.shopType].slice(0, 6);
  
  // Get title based on shop type
  const getCategoryTitle = () => {
    switch (SHOP_CONFIG.shopType) {
      case 'construction':
        return 'Popular Materials';
      case 'electronics':
        return 'Popular Category';
      case 'clothing':
        return 'Popular Styles';
      default:
        return 'Popular Category';
    }
  };

  return (
    <div className="shadow-1 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">{getCategoryTitle()}</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-3">
          {displayCategories.map((category, index) => (
            <button 
              key={index}
              className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue"
            >
              {category.name}
              <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                {category.products}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
