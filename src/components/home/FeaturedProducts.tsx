
import React from "react";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ProductCardProps } from "@/components/ProductCard";

interface FeaturedProductsProps {
  products: ProductCardProps[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Популярные товары
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Откройте для себя наши самые популярные товары этого сезона. Каждый
          предмет тщательно отобран для вашего гардероба.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          Смотреть все товары
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
