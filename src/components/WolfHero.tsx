import React from "react";
import { Button } from "@/components/ui/button";

const WolfHero: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-sky-100 to-amber-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Текстовая часть */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-spacex text-[#0037FF] text-4xl md:text-5xl uppercase tracking-wider">
            Artificial intelligence
            <span className="block">in every detail</span>
          </h1>
          <p className="text-lg text-neutral-700">
            Вдохновленные искусственным интеллектом, мы создаем одежду, которая
            сочетает в себе стиль, комфорт и уникальность.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-neutral-800 hover:bg-neutral-700">
              Смотреть коллекции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-800 text-neutral-800 hover:bg-neutral-800/10"
            >
              О нас
            </Button>
          </div>
        </div>

        {/* Изображение волка */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://cdn.poehali.dev/files/fc0462f0-7c23-4377-ac9f-04625217b868.png"
              alt="Волк в горах"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WolfHero;
