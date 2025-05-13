import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryLinks } from "./navbarConfig";

const NavbarMobileMenu: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 pt-8">
      <Link to="/" className="text-sm hover:text-primary transition-colors">
        Главная
      </Link>

      <div className="space-y-2">
        <p className="text-sm font-medium">Каталог</p>
        <div className="pl-2 space-y-3">
          {/* Мужская одежда с подкатегориями */}
          <div>
            <p className="text-sm font-medium">Мужская одежда</p>
            <div className="pl-2 space-y-2 mt-1">
              {categoryLinks.mens.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Женская одежда с подкатегориями */}
          <div>
            <p className="text-sm font-medium">Женская одежда</p>
            <div className="pl-2 space-y-2 mt-1">
              {categoryLinks.womens.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Простые категории */}
          {categoryLinks.other.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="/guide"
        className="text-sm hover:text-primary transition-colors"
      >
        Руководство
      </Link>

      <Link
        to="/about"
        className="text-sm hover:text-primary transition-colors"
      >
        О нас
      </Link>

      <div className="pt-6">
        <Button variant="outline" className="w-full">
          <Search className="h-4 w-4 mr-2" />
          Поиск
        </Button>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
