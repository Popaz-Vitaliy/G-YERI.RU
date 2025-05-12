
import React from "react";
import { Link } from "react-router-dom";

interface CategoryItem {
  name: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    name: "Женская одежда",
    image:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Мужская одежда",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Аксессуары",
    image:
      "https://images.unsplash.com/photo-1591321237000-c4d86fa6820b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Категории
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Найдите идеальную одежду по категориям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-medium text-white">
                  {category.name}
                </h3>
                <Link
                  to="/products"
                  className="mt-2 inline-block text-white/80 hover:text-white transition-colors text-sm"
                >
                  Посмотреть коллекцию →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
