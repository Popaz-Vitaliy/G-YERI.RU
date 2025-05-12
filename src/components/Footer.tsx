import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
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
              <Link to="#" className="hover:text-white transition-colors">
                Женская одежда
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Мужская одежда
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Аксессуары
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Новинки
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Информация</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                О нас
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Доставка
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Контакты
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Политика возврата
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-medium mb-4">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>ул. Осенняя, дом 16</li>
            <li>Москва, Россия</li>
            <li>evox.org@mail.ru</li>
            <li>+7(915)169-47-11</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-neutral-800 text-sm text-center">
        © {new Date().getFullYear()} G.YERI. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
