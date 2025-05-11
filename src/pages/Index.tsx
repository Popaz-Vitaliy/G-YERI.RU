import React from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";

const featuredProducts: ProductCardProps[] = [
  {
    id: "1",
    name: "Шерстяное пальто",
    price: 12900,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Верхняя одежда",
  },
  {
    id: "2",
    name: "Классический костюм",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1580420876983-fac51969b564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Костюмы",
  },
  {
    id: "3",
    name: "Трикотажный свитер",
    price: 4590,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Трикотаж",
  },
  {
    id: "4",
    name: "Джинсы прямого кроя",
    price: 5900,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Джинсы",
  },
];

const IndexPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HomeHero />

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Популярные товары
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя наши самые популярные товары этого сезона. Каждый
            предмет тщательно отобран для вашего гардероба.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Смотреть все товары
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Wolf Collection Banner */}
      <section className="py-16 px-4 md:px-8 bg-neutral-800 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Коллекция "Дикая природа"
            </h2>
            <p className="text-white/90 mb-6">
              Откройте для себя нашу новую коллекцию, вдохновленную силой и
              красотой дикой природы. Прочные материалы, натуральные текстуры и
              уникальный дизайн, который выделит вас из толпы.
            </p>
            <a
              href="/products"
              className="inline-flex items-center bg-white text-neutral-900 hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Подробнее о коллекции
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.poehali.dev/files/235720c7-3137-445a-a6fc-a36e186930bb.jpeg"
              alt="Волк из коллекции Дикая природа"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
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
            {[
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
            ].map((category, index) => (
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
                  <a
                    href="/products"
                    className="mt-2 inline-block text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Посмотреть коллекцию →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
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
            {[
              { title: "Высокое качество", icon: "✨" },
              { title: "Быстрая доставка", icon: "🚚" },
              { title: "Поддержка 24/7", icon: "💬" },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-neutral-900 text-neutral-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">G.YERI</h3>
            <p className="text-sm">
              Создавая уникальные образы для тех, кто ценит качество и стиль.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Категории</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Женская одежда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мужская одежда
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аксессуары
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика возврата
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>ул. Примерная, 123</li>
              <li>Москва, Россия</li>
              <li>info@gyeri.ru</li>
              <li>+7 (123) 456-78-90</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-800 text-sm text-center">
          © 2025 G.YERI. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
