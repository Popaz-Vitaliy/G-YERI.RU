
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WolfCollectionBanner from "@/components/home/WolfCollectionBanner";
import CategoriesSection from "@/components/home/CategoriesSection";
import QualityBanner from "@/components/home/QualityBanner";
import { featuredProducts } from "@/data/featuredProducts";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * Главная страница сайта
 */
const IndexPage: React.FC = () => {
  const [showFeaturedProducts, setShowFeaturedProducts] = useState(false);

  const toggleFeaturedProducts = () => {
    setShowFeaturedProducts(!showFeaturedProducts);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomeHero />

      {/* Кнопка для показа/скрытия популярных товаров */}
      <div className="w-full py-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Button 
            onClick={toggleFeaturedProducts} 
            variant="outline" 
            className="mx-auto flex items-center gap-2"
          >
            {showFeaturedProducts ? "Скрыть популярные товары" : "Показать популярные товары"}
            {showFeaturedProducts ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Условный рендеринг раздела популярных товаров */}
      {showFeaturedProducts && <FeaturedProducts products={featuredProducts} />}
      
      <WolfCollectionBanner />
      <CategoriesSection />
      <QualityBanner />
      <Footer />
    </div>
  );
};

export default IndexPage;
