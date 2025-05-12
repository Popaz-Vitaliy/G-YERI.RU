
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { categoryLinks } from "./navbarConfig";

const NavbarDesktopMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-sm hover:text-primary transition-colors flex items-center gap-1">
        Каталог <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        {/* Мужская одежда с подкатегориями */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Мужская одежда</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {categoryLinks.mens.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link to={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Женская одежда с подкатегориями */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Женская одежда</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {categoryLinks.womens.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link to={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Простые категории */}
        {categoryLinks.other.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link 
              to={item.href} 
              className={`w-full ${item.highlight ? "font-medium" : ""}`}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDesktopMenu;
