
import React from 'react';
import ProductCard, { ProductCardProps } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

interface ProductsGridProps {
  products: ProductCardProps[];
  resetFilters: () => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, resetFilters }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
        <p className="text-muted-foreground mb-4">
          Попробуйте изменить параметры фильтрации
        </p>
        <Button onClick={resetFilters} variant="outline">Сбросить фильтры</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
