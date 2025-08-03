# 🏗️ Flexible E-commerce Platform

This is a flexible e-commerce platform built with Next.js 15 that can be easily adapted for different types of businesses. Currently configured as a **Construction Material Shop**, but can be quickly changed to electronics, clothing, or any other type of store.

## 🚀 Features

- **Flexible Shop Configuration**: Easy switching between different shop types
- **Construction Materials Focus**: Currently set up for construction materials and supplies
- **Redux State Management**: Complete cart functionality with add/remove items
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Product Management**: Comprehensive product data structure

## 🛠️ How to Change Shop Type

The platform is designed to be easily adaptable. To switch from construction materials to another type of shop:

### 1. Update Shop Configuration

Edit `src/config/shopConfig.ts`:

```typescript
export const SHOP_CONFIG = {
  // Change this line to switch shop types
  shopType: 'electronics' as 'construction' | 'electronics' | 'clothing',
  
  // The rest will update automatically based on shopType
  shopName: 'Electronics Store', // Auto-updates
  shopDescription: 'Latest electronics and gadgets', // Auto-updates
  // ...
};
```

Available shop types:
- `'construction'` - Construction Material Shop
- `'electronics'` - Electronics Store
- `'clothing'` - Fashion/Clothing Store

### 2. Product Data

The system automatically switches product data based on the shop type:

- **Construction**: `src/components/features/Shop/constructionData.ts`
- **Electronics**: Embedded in `shopData.ts`
- **Clothing**: Basic structure in `shopData.ts` (can be expanded)

### 3. Categories & Filters

Categories and filters automatically update based on the shop type:

```typescript
// Construction categories
- Cement & Concrete
- Steel & Rebar  
- Bricks & Blocks
- Roofing Materials
- Electrical Supplies
- Plumbing Fixtures
- Power Tools
- Safety Equipment

// Electronics categories  
- Smartphones
- Laptops
- Tablets
- Gaming
- Accessories

// Clothing categories
- Men's Clothing
- Women's Clothing
- Kids Clothing
- Shoes
- Accessories
```

## 🎨 Theming

The platform includes automatic theme switching based on shop type:

- **Construction**: Orange primary color (#FF6B00) with industrial theme
- **Electronics**: Blue primary color (#2196F3) with modern theme  
- **Clothing**: Pink primary color (#E91E63) with fashion theme

## 🛒 Cart Functionality

The cart system is fully functional with Redux:

- ✅ Add items to cart
- ✅ Remove items from cart
- ✅ Update quantities
- ✅ Persistent cart state
- ✅ Cart sidebar modal

## 📦 Current Product Data

### Construction Materials (12 products)
1. Portland Cement (50kg) - $8.50
2. Steel Rebar 12mm (6m) - $15.75
3. Red Clay Bricks (1000 pcs) - $85.00
4. Roofing Sheets - Galvanized (3m) - $22.50
5. Electrical Cable 2.5mm² (100m) - $45.00
6. PVC Pipe 4 inch (6m) - $18.75
7. Makita Drill Machine 13mm - $125.00
8. Safety Helmet with Visor - $15.50
9. Concrete Mixer 150L - $350.00
10. Waterproof Membrane Roll - $75.00
11. Ceramic Floor Tiles (Box of 10) - $45.00
12. Paint Primer White (5L) - $25.50

All products include:
- Multiple product images
- Customer reviews and ratings
- Discount pricing
- Category classification
- Detailed specifications

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🔧 Development

### Adding New Products

1. **For Construction Materials**:
   Edit `src/components/features/Shop/constructionData.ts`

2. **For Electronics**:
   Edit the `electronicsData` array in `src/components/features/Shop/shopData.ts`

3. **For Clothing**:
   Edit the `clothingData` array in `src/components/features/Shop/shopData.ts`

### Adding New Shop Types

1. **Update the shop configuration**:
   ```typescript
   // Add new type to shopConfig.ts
   shopType: 'construction' | 'electronics' | 'clothing' | 'books'
   ```

2. **Add categories and filters**:
   ```typescript
   categories: {
     books: [
       { name: 'Fiction', slug: 'fiction', products: 150 },
       // ... more categories
     ]
   }
   ```

3. **Create product data**:
   Create a new file like `booksData.ts` and add it to the switch statement in `getShopProducts()`

## 📁 Project Structure

```
src/
├── config/
│   └── shopConfig.ts          # Main shop configuration
├── components/
│   └── features/
│       └── Shop/
│           ├── shopData.ts    # Product data manager
│           └── constructionData.ts # Construction products
├── types/
│   └── product.ts             # Product type definitions
└── components/
    └── ui/
        └── Common/
            └── CartSidebarModal/ # Cart functionality
```

## 🐛 Fixed Issues

- ✅ **Cart Delete Functionality**: Fixed Redux dispatch issue in CartSidebarModal
- ✅ **TypeScript Errors**: Resolved all type conflicts in shop configuration
- ✅ **Product Data Structure**: Aligned with existing Product type interface

## 🔄 How to Switch Shop Types

### Quick Switch Example:

```typescript
// In src/config/shopConfig.ts
// Change from construction to electronics:

shopType: 'electronics' as 'construction' | 'electronics' | 'clothing',

// That's it! The entire shop will switch to electronics mode with:
// - Electronics products
// - Electronics categories  
// - Electronics filters
// - Electronics theme colors
// - Updated shop name and description
```

## 💡 Tips

1. **Product Images**: Update image paths when adding new products
2. **Categories**: Ensure category slugs match your product categories
3. **Pricing**: All prices are in USD by default (configurable in shopConfig)
4. **Themes**: Customize colors in the `getShopTheme()` function

---

**Built with**: Next.js 15, TypeScript, Redux Toolkit, Tailwind CSS

**Deployment Ready**: Configured with Vercel deployment settings
