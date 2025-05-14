
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";

interface NewProductsSectionProps {
  products: ProductCardProps[];
}

const NewProductsSection: React.FC<NewProductsSectionProps> = ({ products }) => {
  const newProducts = products.filter(product => product.isNew);
  
  if (newProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Новинки</h2>
        <Button variant="link" size="sm" asChild>
          <Link to="/products?category=new">Все новинки</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newProducts.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard {...product} />
            <Badge className="absolute top-2 right-2 bg-red-500">NEW</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductsSection;
