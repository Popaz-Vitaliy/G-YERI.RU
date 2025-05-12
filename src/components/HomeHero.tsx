
import React from "react";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Стиль, который вдохновляет
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Откройте для себя нашу коллекцию одежды и аксессуаров, созданных с заботой о качестве и стиле.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Смотреть коллекции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              О нас
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
