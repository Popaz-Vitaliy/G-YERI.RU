
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
  id: string;
  label: string;
  color?: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  type?: "color" | "default";
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, options, type = "default" }) => {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-medium mb-3">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox id={option.id} />
            <label htmlFor={option.id} className="text-sm cursor-pointer flex items-center gap-2">
              {type === "color" && (
                <span 
                  className="inline-block w-4 h-4 rounded-full border"
                  style={{ 
                    backgroundColor: option.color || 'transparent'
                  }}
                ></span>
              )}
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FilterSectionProps {
  filters: {
    sizes: FilterOption[];
    colors: FilterOption[];
    price: FilterOption[];
    material: FilterOption[];
  };
  isMobile?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, isMobile = false }) => {
  const prefix = isMobile ? "mobile-" : "";
  
  return (
    <div className="sticky top-4">
      <h3 className="font-medium mb-4">Фильтры</h3>
      
      <FilterGroup 
        title="Размер" 
        options={filters.sizes.map(size => ({
          ...size,
          id: `${prefix}size-${size.id}`
        }))}
      />
      
      <Separator className="my-4" />
      
      <FilterGroup 
        title="Цвет" 
        options={filters.colors.map(color => ({
          ...color,
          id: `${prefix}color-${color.id}`
        }))}
        type="color"
      />
      
      <Separator className="my-4" />
      
      <FilterGroup 
        title="Цена" 
        options={filters.price.map(price => ({
          ...price,
          id: `${prefix}price-${price.id}`
        }))}
      />
      
      <Separator className="my-4" />
      
      <FilterGroup 
        title="Материал" 
        options={filters.material.map(material => ({
          ...material,
          id: `${prefix}material-${material.id}`
        }))}
      />
      
      <div className="mt-6">
        <Button className="w-full">Применить</Button>
        <Button variant="outline" className="w-full mt-2">Сбросить</Button>
      </div>
    </div>
  );
};

export default FilterSection;
