
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterSection from "./FilterSection";

interface MobileFiltersProps {
  filters: {
    sizes: any[];
    colors: any[];
    price: any[];
    material: any[];
  };
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ filters }) => {
  return (
    <div className="md:hidden mb-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full">
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] overflow-auto">
          <h2 className="text-lg font-medium mb-6">Фильтры</h2>
          <FilterSection filters={filters} isMobile={true} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;
