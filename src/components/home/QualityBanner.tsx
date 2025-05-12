
import React from "react";

interface Feature {
  title: string;
  icon: string;
}

const features: Feature[] = [
  { title: "Высокое качество", icon: "✨" },
  { title: "Быстрая доставка", icon: "🚚" },
  { title: "Поддержка 24/7", icon: "💬" },
];

const QualityBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#6E59A5] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Качество и стиль
          </h2>
          <p className="max-w-md opacity-90">
            Мы предлагаем только лучшие материалы и дизайн, чтобы вы
            чувствовали себя уверенно в любой ситуации.
          </p>
        </div>
        <div className="flex gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityBanner;
