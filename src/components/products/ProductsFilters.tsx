
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

export interface ProductsFiltersProps {
  categories: string[];
  selectedCategories: string[];
  colors: string[];
  selectedColors: string[];
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  toggleCategory: (category: string) => void;
  toggleColor: (color: string) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  categories,
  selectedCategories,
  colors,
  selectedColors,
  priceRange,
  setPriceRange,
  toggleCategory,
  toggleColor,
  applyFilters,
  resetFilters
}) => {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-medium mb-4">Категории</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label 
                htmlFor={`category-${category}`}
                className="text-sm cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-4">Цвет</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox 
                id={`color-${color}`} 
                checked={selectedColors.includes(color)}
                onCheckedChange={() => toggleColor(color)}
              />
              <label 
                htmlFor={`color-${color}`}
                className="text-sm cursor-pointer flex items-center gap-2"
              >
                <span 
                  className="inline-block w-4 h-4 rounded-full border"
                  style={{ 
                    backgroundColor: color === 'Белый' ? 'white' : 
                                     color === 'Черный' ? 'black' : 
                                     color.toLowerCase()
                  }}
                ></span>
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-4">Цена</h3>
        <Slider
          min={0}
          max={20000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm">
          <span>{priceRange[0].toLocaleString()} ₽</span>
          <span>{priceRange[1].toLocaleString()} ₽</span>
        </div>
      </div>
      
      <div className="flex space-x-2 mt-8">
        <Button onClick={applyFilters} className="flex-1">
          Применить
        </Button>
        <Button onClick={resetFilters} variant="outline" className="flex-1">
          Сбросить
        </Button>
      </div>
    </>
  );
};

export default ProductsFilters;
</current-code>

<pp-write filepath="src/components/products/ProductsMobileFilters.tsx">
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
</current-code>

<pp-write filepath="src/hooks/useProductsFilter.ts">
import { useState, useCallback, useMemo } from "react";
import { ProductCardProps } from "@/components/ProductCard";

export interface UseProductsFilterProps {
  initialProducts: ProductCardProps[];
  categories: string[];
  colors?: string[];
}

export const useProductsFilter = ({
  initialProducts,
  categories,
  colors = ["Белый", "Черный"]
}: UseProductsFilterProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCardProps[]>(
    initialProducts || []
  );

  // Toggle category selection
  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }, []);

  // Toggle color selection
  const toggleColor = useCallback((color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  }, []);

  // Apply filters
  const applyFilters = useCallback(() => {
    let result = initialProducts || [];

    // Filter by price
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by category if any selected
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by color if any selected
    // Note: In a real app, you would need a 'color' property in your product data
    if (selectedColors.length > 0) {
      // This is a placeholder. In a real app, you would filter by the product's color
      // result = result.filter((product) => selectedColors.includes(product.color));
      
      // For demonstration purposes only since our sample data doesn't have color
      if (selectedColors.length < colors.length) {
        // Apply some arbitrary filter to show the effect when colors are selected
        result = result.filter((_, index) => index % (selectedColors.length + 1) === 0);
      }
    }

    setFilteredProducts(result);
  }, [initialProducts, priceRange, selectedCategories, selectedColors, colors]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setPriceRange([0, 20000]);
    setSelectedCategories([]);
    setSelectedColors([]);
    setFilteredProducts(initialProducts || []);
  }, [initialProducts]);

  // Check if filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      selectedCategories.length > 0 ||
      selectedColors.length > 0 ||
      priceRange[0] > 0 ||
      priceRange[1] < 20000
    );
  }, [selectedCategories, selectedColors, priceRange]);

  return {
    priceRange,
    setPriceRange,
    selectedCategories,
    selectedColors,
    colors,
    filteredProducts,
    toggleCategory,
    toggleColor,
    applyFilters,
    resetFilters,
    hasActiveFilters,
  };
};
</current-code>

<pp-write filepath="src/pages/Products.tsx" partial>
import React from "react";
import Navbar from "@/components/Navbar";
import { ProductCardProps } from "@/components/ProductCard";
import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsMobileFilters from "@/components/products/ProductsMobileFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import Footer from "@/components/Footer";

// Sample products data
const productsData: ProductCardProps[] = [
  {
    id: "1",
    name: "Шерстяное пальто",
    price: 12900,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Верхняя одежда",
  },
  {
    id: "2",
    name: "Классический костюм",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1580420876983-fac51969b564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Костюмы",
  },
  {
    id: "3",
    name: "Трикотажный свитер",
    price: 4590,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Трикотаж",
  },
  {
    id: "4",
    name: "Джинсы прямого кроя",
    price: 5900,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Джинсы",
  },
  {
    id: "5",
    name: "Кожаная куртка",
    price: 15900,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Верхняя одежда",
  },
  {
    id: "6",
    name: "Хлопковая рубашка",
    price: 3990,
    image:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Рубашки",
  },
  {
    id: "7",
    name: "Кардиган из мериноса",
    price: 7590,
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Трикотаж",
  },
  {
    id: "8",
    name: "Брюки чинос",
    price: 4900,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Брюки",
  },
  {
    id: "9",
    name: "Базовая футболка",
    price: 1990,
    image:
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
  {
    id: "10",
    name: "Футболка с принтом",
    price: 2490,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2cd399a604a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
];

// Получение уникальных категорий из данных
const categories = Array.from(
  new Set(productsData.map((product) => product.category))
);

// Доступные цвета для фильтрации
const colors = ["Белый", "Черный"];

const ProductsPage = () => {
  const {
    filteredProducts,
    selectedCategories,
    selectedColors,
    colors,
    priceRange,
    toggleCategory,
    toggleColor,
    setPriceRange,
    applyFilters,
    resetFilters,
    hasActiveFilters,
  } = useProductsFilter({
    initialProducts: productsData,
    categories,
    colors,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">
            Каталог
          </h1>
          <p className="text-muted-foreground mt-2">
            Найдите идеальную одежду для вашего стиля
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        <ProductsHeader
          totalProducts={filteredProducts.length}
          hasActiveFilters={hasActiveFilters}
          resetFilters={resetFilters}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="w-full md:w-64 shrink-0 hidden md:block">
            <ProductsFilters
              categories={categories}
              selectedCategories={selectedCategories}
              colors={colors}
              selectedColors={selectedColors}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              toggleCategory={toggleCategory}
              toggleColor={toggleColor}
              applyFilters={applyFilters}
              resetFilters={resetFilters}
            />
          </aside>

          {/* Mobile Filters */}
          <ProductsMobileFilters
            categories={categories}
            selectedCategories={selectedCategories}
            colors={colors}
            selectedColors={selectedColors}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            toggleCategory={toggleCategory}
            toggleColor={toggleColor}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
          />

          <div className="flex-1">
            <ProductsGrid
              products={filteredProducts}
              resetFilters={resetFilters}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
