
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

export interface ProductsFiltersProps {
  categories: string[];
  selectedCategories: string[];
  colors?: string[];
  selectedColors?: string[];
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  toggleCategory: (category: string) => void;
  toggleColor?: (color: string) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  categories,
  selectedCategories,
  colors = ["Белый", "Черный"],
  selectedColors = [],
  priceRange,
  setPriceRange,
  toggleCategory,
  toggleColor = () => {},
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
