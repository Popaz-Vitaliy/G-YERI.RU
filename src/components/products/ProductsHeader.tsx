
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ProductsHeaderProps {
  totalProducts: number;
  hasActiveFilters: boolean;
  resetFilters: () => void;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({ 
  totalProducts, 
  hasActiveFilters, 
  resetFilters 
}) => {
  return (
    <div className="mb-6 flex justify-between items-center">
      <p className="text-sm text-muted-foreground">
        Показано {totalProducts} товаров
      </p>
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-sm flex items-center">
          <X className="h-3 w-3 mr-1" />
          Очистить фильтры
        </Button>
      )}
    </div>
  );
};

export default ProductsHeader;
