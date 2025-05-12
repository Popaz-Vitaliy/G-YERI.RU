
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavbarDesktopMenu from "./navbar/NavbarDesktopMenu";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";
import CartIndicator from "./navbar/CartIndicator";

const Navbar: React.FC = () => {
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
          <NavbarDesktopMenu />
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
          <CartIndicator count={0} />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <NavbarMobileMenu />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
