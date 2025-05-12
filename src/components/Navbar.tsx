import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-playfair font-bold tracking-tight"
        >
          G.YERI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm hover:text-primary transition-colors">
            Главная
          </Link>

          {/* Каталог с выпадающим меню */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              Каталог <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {/* Мужская одежда с подкатегориями */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Мужская одежда</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products?category=mens-tshirts"
                      className="w-full"
                    >
                      Футболки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products?category=mens-shirts"
                      className="w-full"
                    >
                      Рубашки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products?category=mens-pants" className="w-full">
                      Брюки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products?category=mens-all" className="w-full">
                      Вся мужская одежда
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Женская одежда с подкатегориями */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Женская одежда</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products?category=womens-tshirts"
                      className="w-full"
                    >
                      Футболки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products?category=womens-dresses"
                      className="w-full"
                    >
                      Платья
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products?category=womens-skirts"
                      className="w-full"
                    >
                      Юбки
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/products?category=womens-all" className="w-full">
                      Вся женская одежда
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuItem asChild>
                <Link to="/products?category=accessories" className="w-full">
                  Аксессуары
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products?category=new" className="w-full">
                  Новинки
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/products" className="w-full font-medium">
                  Все товары
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/guide"
            className="text-sm hover:text-primary transition-colors"
          >
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
                <Link
                  to="/"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Главная
                </Link>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Каталог</p>
                  <div className="pl-2 space-y-3">
                    {/* Мужская одежда с подкатегориями */}
                    <div>
                      <p className="text-sm font-medium">Мужская одежда</p>
                      <div className="pl-2 space-y-2 mt-1">
                        <Link
                          to="/products?category=mens-tshirts"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Футболки
                        </Link>
                        <Link
                          to="/products?category=mens-shirts"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Рубашки
                        </Link>
                        <Link
                          to="/products?category=mens-pants"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Брюки
                        </Link>
                        <Link
                          to="/products?category=mens-all"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Вся мужская одежда
                        </Link>
                      </div>
                    </div>

                    {/* Женская одежда с подкатегориями */}
                    <div>
                      <p className="text-sm font-medium">Женская одежда</p>
                      <div className="pl-2 space-y-2 mt-1">
                        <Link
                          to="/products?category=womens-tshirts"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Футболки
                        </Link>
                        <Link
                          to="/products?category=womens-dresses"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Платья
                        </Link>
                        <Link
                          to="/products?category=womens-skirts"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Юбки
                        </Link>
                        <Link
                          to="/products?category=womens-all"
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          Вся женская одежда
                        </Link>
                      </div>
                    </div>

                    <Link
                      to="/products?category=accessories"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      Аксессуары
                    </Link>
                    <Link
                      to="/products?category=new"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      Новинки
                    </Link>
                    <Link
                      to="/products"
                      className="block text-sm hover:text-primary transition-colors"
                    >
                      Все товары
                    </Link>
                  </div>
                </div>

                <Link
                  to="/guide"
                  className="text-sm hover:text-primary transition-colors"
                >
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
