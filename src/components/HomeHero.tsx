
import React from 'react';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-neutral-100">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          filter: "brightness(0.9)"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
            Новая коллекция осень-зима
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Откройте для себя стильную одежду, которая сочетает комфорт и элегантность для любого случая.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Смотреть коллекцию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
