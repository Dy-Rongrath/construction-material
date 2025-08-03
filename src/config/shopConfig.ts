// Shop Configuration - Easily change the shop type and settings
export const SHOP_CONFIG = {
  // Shop Type - Change this to switch between different shop types
  shopType: 'construction' as 'construction' | 'electronics' | 'clothing',
  
  // Shop Information
  shopName: 'Construction Material Shop',
  shopDescription: 'Your trusted partner for all construction materials and supplies',
  shopLogo: '/images/logo/logo.svg',
  
  // Categories based on shop type
  categories: {
    construction: [
      { name: 'Cement & Concrete', slug: 'cement-concrete', products: 25 },
      { name: 'Steel & Rebar', slug: 'steel-rebar', products: 18 },
      { name: 'Bricks & Blocks', slug: 'bricks-blocks', products: 22 },
      { name: 'Roofing Materials', slug: 'roofing-materials', products: 15 },
      { name: 'Electrical Supplies', slug: 'electrical-supplies', products: 30 },
      { name: 'Plumbing Fixtures', slug: 'plumbing-fixtures', products: 20 },
      { name: 'Power Tools', slug: 'power-tools', products: 35 },
      { name: 'Safety Equipment', slug: 'safety-equipment', products: 28 },
    ],
    electronics: [
      { name: 'Smartphones', slug: 'smartphones', products: 45 },
      { name: 'Laptops', slug: 'laptops', products: 32 },
      { name: 'Tablets', slug: 'tablets', products: 18 },
      { name: 'Gaming', slug: 'gaming', products: 25 },
      { name: 'Accessories', slug: 'accessories', products: 60 },
    ],
    clothing: [
      { name: 'Men\'s Clothing', slug: 'mens-clothing', products: 120 },
      { name: 'Women\'s Clothing', slug: 'womens-clothing', products: 150 },
      { name: 'Kids Clothing', slug: 'kids-clothing', products: 80 },
      { name: 'Shoes', slug: 'shoes', products: 90 },
      { name: 'Accessories', slug: 'accessories', products: 45 },
    ],
  },
  
  // Filters based on shop type
  filters: {
    construction: {
      brands: ['HILTI', 'Makita', 'DeWalt', 'Bosch', 'Caterpillar', 'JCB', 'Stanley', 'Milwaukee'],
      sizes: ['Small', 'Medium', 'Large', 'Extra Large', 'Custom'],
      materials: ['Steel', 'Concrete', 'Wood', 'PVC', 'Aluminum', 'Copper'],
      applications: ['Residential', 'Commercial', 'Industrial', 'Infrastructure'],
    },
    electronics: {
      brands: ['Apple', 'Samsung', 'Sony', 'LG', 'HP', 'Dell', 'ASUS', 'Lenovo'],
      sizes: ['Compact', 'Standard', 'Large', 'Extra Large'],
      features: ['Wireless', 'Bluetooth', 'USB-C', '5G', 'Fast Charging'],
    },
    clothing: {
      brands: ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Levi\'s', 'Gap', 'H&M'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Blue', 'Red', 'Green', 'Gray'],
    },
  },
  
  // Currency
  currency: {
    symbol: '$',
    code: 'USD',
    position: 'before' as 'before' | 'after',
  },
  
  // Features enabled for this shop type
  features: {
    wishlist: true,
    quickView: true,
    productComparison: false,
    productReviews: true,
    guestCheckout: true,
    multiplePaymentMethods: true,
    inventory: true,
    promotions: true,
  },
};

// Helper function to get current shop configuration
export const getCurrentShopConfig = () => {
  return {
    ...SHOP_CONFIG,
    currentCategories: SHOP_CONFIG.categories[SHOP_CONFIG.shopType],
    currentFilters: SHOP_CONFIG.filters[SHOP_CONFIG.shopType],
  };
};

// Helper function to change shop type
export const changeShopType = (newType: typeof SHOP_CONFIG.shopType) => {
  // In a real application, this would update the configuration
  // For now, it returns the new configuration
  const newConfig = { ...SHOP_CONFIG };
  newConfig.shopType = newType;
  
  // Update shop name and description based on type
  switch (newType) {
    case 'construction':
      newConfig.shopName = 'Construction Material Shop';
      newConfig.shopDescription = 'Your trusted partner for all construction materials and supplies';
      break;
    case 'electronics':
      newConfig.shopName = 'Electronics Store';
      newConfig.shopDescription = 'Latest electronics and gadgets at competitive prices';
      break;
    case 'clothing':
      newConfig.shopName = 'Fashion Store';
      newConfig.shopDescription = 'Trendy clothing and accessories for all occasions';
      break;
  }
  
  return newConfig;
};
