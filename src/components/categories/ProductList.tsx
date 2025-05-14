
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";

interface ProductListProps {
  products: ProductCardProps[];
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard {...product} />
            {product.isNew && (
              <Badge className="absolute top-2 right-2 bg-red-500">NEW</Badge>
            )}
          </div>
        ))}
      </div>
      
      {/* Пагинация */}
      {products.length > 6 && (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="mr-2">1</Button>
          <Button variant="outline" className="mr-2">2</Button>
          <Button variant="outline">3</Button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
