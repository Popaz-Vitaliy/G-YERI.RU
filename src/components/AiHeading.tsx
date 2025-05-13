
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
          ARTIFICIAL INTELLIGENCE
        </h1>
      </div>
      
      {/* Вторая строка */}
      <h1 className="text-[#0037FF] text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] font-bold">
        IN EVERY DETAIL
      </h1>
    </div>
  );
};

export default AiHeading;
