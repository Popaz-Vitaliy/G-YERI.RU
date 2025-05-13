
import React from "react";

interface AiHeadingProps {
  className?: string;
}

const AiHeading: React.FC<AiHeadingProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-start`}>
      {/* Первая строка с декоративным элементом */}
      <div className="relative">
        <div className="absolute -left-2 -top-2 w-16 h-8 border-b-4 border-[#0037FF] rounded-bl-[50px]"></div>
        <h1 className="text-[#0037FF] text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] font-bold relative z-10">
          ARTIFICIAL
        </h1>
      </div>
      
      {/* Вторая и третья строки */}
      <h1 className="text-[#0037FF] text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] font-bold">
        INTELLIGENCE IN
      </h1>
      <h1 className="text-[#0037FF] text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] font-bold">
        EVERY DETAIL
      </h1>
    </div>
  );
};

export default AiHeading;
</current-code>

<pp-write filepath="src/components/WolfHero.tsx" partial>
import React from "react";
import { Button } from "@/components/ui/button";
import AiHeading from "./AiHeading";

const WolfHero: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-sky-100 to-amber-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Текстовая часть */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <AiHeading className="mx-auto md:mx-0" />
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
