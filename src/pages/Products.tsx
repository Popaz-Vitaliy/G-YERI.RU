import React from "react";
import Navbar from "@/components/Navbar";
import { ProductCardProps } from "@/components/ProductCard";
import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsMobileFilters from "@/components/products/ProductsMobileFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useProductsFilter } from "@/hooks/useProductsFilter";

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
];

const ProductsPage = () => {
  const {
    filteredProducts,
    selectedCategories,
    priceRange,
    toggleCategory,
    setPriceRange,
    applyFilters,
    resetFilters,
  } = useProductsFilter(productsData);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ProductsHeader
        count={filteredProducts.length}
        showClear={selectedCategories.length > 0}
        onClear={resetFilters}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0 hidden md:block">
          <ProductsFilters
            priceRange={priceRange}
            selectedCategories={selectedCategories}
            onPriceChange={setPriceRange}
            onToggleCategory={toggleCategory}
            onApply={applyFilters}
            onReset={resetFilters}
          />
        </aside>
        <div className="md:hidden">
          <ProductsMobileFilters
            priceRange={priceRange}
            selectedCategories={selectedCategories}
            onPriceChange={setPriceRange}
            onToggleCategory={toggleCategory}
            onApply={applyFilters}
            onReset={resetFilters}
          />
        </div>
        <ProductsGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
