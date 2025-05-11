
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-playfair font-bold tracking-tight">
          СТИЛЬ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link to="/guide" className="text-sm hover:text-primary transition-colors">
            Руководство
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col space-y-4 pt-8">
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link to="/products" className="text-sm hover:text-primary transition-colors">
                  Каталог
                </Link>
                <Link to="/guide" className="text-sm hover:text-primary transition-colors">
                  Руководство
                </Link>
                <div className="pt-6">
                  <Button variant="outline" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Поиск
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
