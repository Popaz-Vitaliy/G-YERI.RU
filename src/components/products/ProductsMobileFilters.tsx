
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductsFilters, { ProductsFiltersProps } from './ProductsFilters';

const ProductsMobileFilters: React.FC<ProductsFiltersProps> = (props) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full mb-4">
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] overflow-auto">
          <h2 className="text-lg font-medium mb-6">Фильтры</h2>
          <ProductsFilters {...props} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductsMobileFilters;
