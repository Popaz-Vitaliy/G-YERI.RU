
import { useState, useCallback, useMemo } from 'react';
import { ProductCardProps } from '@/components/ProductCard';

export interface UseProductsFilterProps {
  initialProducts: ProductCardProps[];
  categories: string[];
}

export const useProductsFilter = ({ initialProducts, categories }: UseProductsFilterProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>(initialProducts);

  // Toggle category selection
  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  // Apply filters
  const applyFilters = useCallback(() => {
    let result = initialProducts;
    
    // Filter by price
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by category if any selected
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    setFilteredProducts(result);
  }, [initialProducts, priceRange, selectedCategories]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setPriceRange([0, 20000]);
    setSelectedCategories([]);
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  // Check if filters are active
  const hasActiveFilters = useMemo(() => {
    return selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 20000;
  }, [selectedCategories, priceRange]);

  return {
    priceRange,
    setPriceRange,
    selectedCategories,
    filteredProducts,
    toggleCategory,
    applyFilters,
    resetFilters,
    hasActiveFilters,
  };
};
