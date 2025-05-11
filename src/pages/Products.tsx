
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard, { ProductCardProps } from '@/components/ProductCard';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Sample products data
const productsData: ProductCardProps[] = [
  {
    id: '1',
    name: 'Шерстяное пальто',
    price: 12900,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Верхняя одежда'
  },
  {
    id: '2',
    name: 'Классический костюм',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1580420876983-fac51969b564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Костюмы'
  },
  {
    id: '3',
    name: 'Трикотажный свитер',
    price: 4590,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Трикотаж'
  },
  {
    id: '4',
    name: 'Джинсы прямого кроя',
    price: 5900,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Джинсы'
  },
  {
    id: '5',
    name: 'Кожаная куртка',
    price: 15900,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Верхняя одежда'
  },
  {
    id: '6',
    name: 'Хлопковая рубашка',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Рубашки'
  },
  {
    id: '7',
    name: 'Кардиган из мериноса',
    price: 7590,
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Трикотаж'
  },
  {
    id: '8',
    name: 'Брюки чинос',
    price: 4900,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Брюки'
  },
];

const categories = [
  'Верхняя одежда',
  'Костюмы',
  'Трикотаж',
  'Джинсы',
  'Рубашки',
  'Брюки',
  'Аксессуары',
];

const ProductsPage = () => {
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Apply filters
  const applyFilters = () => {
    let result = productsData;
    
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
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 20000]);
    setSelectedCategories([]);
    setFilteredProducts(productsData);
  };

  // Filtering component - shared between desktop and mobile
  const FiltersContent = () => (
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">Каталог</h1>
          <p className="text-muted-foreground mt-2">Найдите идеальную одежду для вашего гардероба</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <aside className="w-full md:w-64 shrink-0 hidden md:block">
          <FiltersContent />
        </aside>
        
        {/* Filters - Mobile */}
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
              <FiltersContent />
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Показано {filteredProducts.length} товаров
            </p>
            {selectedCategories.length > 0 && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="text-sm flex items-center">
                <X className="h-3 w-3 mr-1" />
                Очистить фильтры
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-4">
                Попробуйте изменить параметры фильтрации
              </p>
              <Button onClick={resetFilters} variant="outline">Сбросить фильтры</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
