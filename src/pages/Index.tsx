
import React from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WolfCollectionBanner from "@/components/home/WolfCollectionBanner";
import CategoriesSection from "@/components/home/CategoriesSection";
import QualityBanner from "@/components/home/QualityBanner";
import { featuredProducts } from "@/data/featuredProducts";

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomeHero />
      <FeaturedProducts products={featuredProducts} />
      <WolfCollectionBanner />
      <CategoriesSection />
      <QualityBanner />
      <Footer />
    </div>
  );
};

export default IndexPage;
