export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceFormatted: string;
  image: string;
  badge?: "Best Seller" | "New" | "Limited";
  category: "bread" | "pastry" | "cake" | "drink";
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectClass: string;
}
