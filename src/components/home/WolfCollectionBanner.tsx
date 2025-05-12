
import React from "react";
import { Link } from "react-router-dom";

const WolfCollectionBanner: React.FC = () => {
  return (
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
          <Link
            to="/products"
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
          </Link>
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
  );
};

export default WolfCollectionBanner;
