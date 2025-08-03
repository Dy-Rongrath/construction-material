import { Testimonial } from "@/types/testimonial";
import { SHOP_CONFIG } from "@/config/shopConfig";

// Generate testimonials based on shop type
const generateTestimonialsData = (): Testimonial[] => {
  switch (SHOP_CONFIG.shopType) {
    case 'construction':
      return [
        {
          review: `Outstanding quality materials! We've been using their cement and steel for our commercial projects. The bulk pricing and delivery service is excellent.`,
          authorName: "Mike Johnson",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Construction Manager",
        },
        {
          review: `Reliable supplier with consistent quality. Their rebar and concrete blocks have helped us complete projects on time and within budget.`,
          authorName: "Sarah Chen",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "Project Engineer",
        },
        {
          review: `Best prices in the market for premium materials. The customer service team is knowledgeable and always ready to help with technical specifications.`,
          authorName: "Robert Martinez",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Contractor",
        },
        {
          review: `Fast delivery and professional handling. Their insulation and roofing materials are top-notch quality that we trust for all our builds.`,
          authorName: "Emily Davis",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Architect",
        },
        {
          review: `Competitive pricing on bulk orders. We've saved significantly on our material costs while maintaining the quality our clients expect.`,
          authorName: "James Wilson",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "Building Contractor",
        },
        {
          review: `Professional grade materials that meet all industry standards. Their technical support team helped us choose the right products for our project.`,
          authorName: "Lisa Thompson",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Site Supervisor",
        },
      ];

    case 'electronics':
      return [
        {
          review: `Amazing electronics store! Fast shipping and genuine products. Got my iPhone and headphones at great prices with excellent customer service.`,
          authorName: "Alex Turner",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Tech Enthusiast",
        },
        {
          review: `Best place for tech gadgets. Their product range is impressive and the warranty service is outstanding. Highly recommend for all electronics needs.`,
          authorName: "Maria Garcia",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "Software Developer",
        },
        {
          review: `Competitive prices and authentic products. The delivery was fast and packaging was secure. Will definitely shop here again for my tech needs.`,
          authorName: "David Park",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Digital Marketing Manager",
        },
        {
          review: `Excellent customer support and quality products. They helped me choose the right laptop for my needs and provided great after-sales service.`,
          authorName: "Jennifer Lee",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Graphic Designer",
        },
        {
          review: `Trusted electronics retailer with competitive pricing. Their product descriptions are accurate and shipping is always on time.`,
          authorName: "Michael Brown",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "IT Consultant",
        },
        {
          review: `Great shopping experience with wide product selection. The online store is user-friendly and customer service is responsive and helpful.`,
          authorName: "Amanda Kim",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Tech Blogger",
        },
      ];

    case 'clothing':
      return [
        {
          review: `Love the fashion collection! Quality fabrics and trendy designs at reasonable prices. Fast shipping and easy returns make shopping here a pleasure.`,
          authorName: "Sophie Williams",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Fashion Blogger",
        },
        {
          review: `Great clothing store with excellent fit and quality. The seasonal collections are always on-trend and the customer service is top-notch.`,
          authorName: "Emma Johnson",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "Fashion Designer",
        },
        {
          review: `Perfect for both casual and formal wear. The size guide is accurate and the fabric quality exceeds expectations for the price point.`,
          authorName: "Rachel Green",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Style Consultant",
        },
        {
          review: `Affordable fashion with premium quality. The online shopping experience is smooth and the clothing arrives exactly as pictured.`,
          authorName: "Olivia Davis",
          authorImg: "/images/users/user-01.jpg",
          authorRole: "Fashion Influencer",
        },
        {
          review: `Impressed with the sustainable fashion options. Great variety for different occasions and the commitment to eco-friendly materials is admirable.`,
          authorName: "Isabella Martinez",
          authorImg: "/images/users/user-02.jpg",
          authorRole: "Environmental Advocate",
        },
        {
          review: `Excellent wardrobe essentials at competitive prices. The styling suggestions and outfit combinations help create complete looks effortlessly.`,
          authorName: "Grace Taylor",
          authorImg: "/images/users/user-03.jpg",
          authorRole: "Personal Stylist",
        },
      ];

    default:
      return [];
  }
};

const testimonialsData = generateTestimonialsData();

export default testimonialsData;
