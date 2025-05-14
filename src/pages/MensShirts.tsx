import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import CategoryBreadcrumbs from "@/components/categories/CategoryBreadcrumbs";
import FilterSection from "@/components/categories/FilterSection";
import MobileFilters from "@/components/categories/MobileFilters";
import NewProductsSection from "@/components/categories/NewProductsSection";
import ProductList from "@/components/categories/ProductList";
import { mensShirtsData } from "@/data/mensShirtsData";
import { filtersData, breadcrumbsData } from "@/data/filtersData";

const MensShirts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Хлебные крошки и заголовок */}
      <div className="bg-neutral-100 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryBreadcrumbs items={breadcrumbsData} />

          <h1 className="text-3xl font-playfair font-bold">Мужские футболки</h1>
          <p className="text-muted-foreground mt-2">
            {mensShirtsData.length} товаров
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Боковая панель с фильтрами (десктоп) */}
          <aside className="w-full md:w-64 shrink-0 hidden md:block">
            <FilterSection filters={filtersData} />
          </aside>

          {/* Мобильные фильтры */}
          <MobileFilters filters={filtersData} />

          {/* Основной контент */}
          <div className="flex-1">
            {/* Секция новинок */}
            <NewProductsSection products={mensShirtsData} />

            <Separator className="my-6" />

            {/* Все футболки */}
            <ProductList products={mensShirtsData} title="Все футболки" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MensShirts;
