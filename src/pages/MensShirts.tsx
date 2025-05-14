
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Пример данных мужских футболок
const mensShirts = [
  {
    id: "tshirt1",
    name: "G.YERI NEW COOL",
    price: 2500,
    image: "https://cdn.poehali.dev/files/24ff4a55-9938-427c-a3d9-77456e67ea71.png",
    category: "Футболки",
    isNew: true,
  },
  {
    id: "tshirt2",
    name: "Базовая хлопковая футболка",
    price: 1800,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
  {
    id: "tshirt3",
    name: "Футболка с принтом",
    price: 2200,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
  {
    id: "tshirt4",
    name: "Поло из хлопка-пике",
    price: 3500,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
  {
    id: "tshirt5",
    name: "Спортивная футболка",
    price: 2100,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
  {
    id: "tshirt6",
    name: "Лонгслив базовый",
    price: 2700,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Футболки",
  },
];

// Фильтры для футболок
const filters = {
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Белый", "Черный", "Серый", "Синий", "Красный"],
  price: ["До 2000 ₽", "2000 ₽ - 3000 ₽", "3000 ₽ - 5000 ₽", "Свыше 5000 ₽"],
  material: ["Хлопок", "Хлопок + эластан", "Трикотаж", "Лён"],
};

const MensShirts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Хлебные крошки и заголовок */}
      <div className="bg-neutral-100 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/products">Каталог</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/products?category=mens-all">Мужская одежда</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Футболки</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-3xl font-playfair font-bold">Мужские футболки</h1>
          <p className="text-muted-foreground mt-2">
            {mensShirts.length} товаров
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Боковая панель с фильтрами (десктоп) */}
          <aside className="w-full md:w-64 shrink-0 hidden md:block">
            <div className="sticky top-4">
              <h3 className="font-medium mb-4">Фильтры</h3>
              
              {/* Фильтр: Размеры */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Размер</h4>
                <div className="space-y-2">
                  {filters.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={`size-${size}`} />
                      <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Фильтр: Цвета */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Цвет</h4>
                <div className="space-y-2">
                  {filters.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox id={`color-${color}`} />
                      <label htmlFor={`color-${color}`} className="text-sm cursor-pointer flex items-center gap-2">
                        <span 
                          className="inline-block w-4 h-4 rounded-full border"
                          style={{ 
                            backgroundColor: color === 'Белый' ? 'white' : 
                                          color === 'Черный' ? 'black' : 
                                          color === 'Серый' ? 'gray' :
                                          color === 'Синий' ? 'blue' :
                                          color === 'Красный' ? 'red' : color.toLowerCase()
                          }}
                        ></span>
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Фильтр: Цена */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Цена</h4>
                <div className="space-y-2">
                  {filters.price.map((range) => (
                    <div key={range} className="flex items-center space-x-2">
                      <Checkbox id={`price-${range}`} />
                      <label htmlFor={`price-${range}`} className="text-sm cursor-pointer">
                        {range}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {/* Фильтр: Материал */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Материал</h4>
                <div className="space-y-2">
                  {filters.material.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox id={`material-${material}`} />
                      <label htmlFor={`material-${material}`} className="text-sm cursor-pointer">
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Применить</Button>
                <Button variant="outline" className="w-full mt-2">Сбросить</Button>
              </div>
            </div>
          </aside>
          
          {/* Мобильные фильтры */}
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
                
                {/* Фильтр: Размеры */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Размер</h4>
                  <div className="space-y-2">
                    {filters.sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox id={`mobile-size-${size}`} />
                        <label htmlFor={`mobile-size-${size}`} className="text-sm cursor-pointer">
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Фильтр: Цвета */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Цвет</h4>
                  <div className="space-y-2">
                    {filters.colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox id={`mobile-color-${color}`} />
                        <label htmlFor={`mobile-color-${color}`} className="text-sm cursor-pointer flex items-center gap-2">
                          <span 
                            className="inline-block w-4 h-4 rounded-full border"
                            style={{ 
                              backgroundColor: color === 'Белый' ? 'white' : 
                                            color === 'Черный' ? 'black' : 
                                            color === 'Серый' ? 'gray' :
                                            color === 'Синий' ? 'blue' :
                                            color === 'Красный' ? 'red' : color.toLowerCase()
                            }}
                          ></span>
                          {color}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Остальные мобильные фильтры... */}
                <div className="flex space-x-2 mt-8">
                  <Button className="flex-1">Применить</Button>
                  <Button variant="outline" className="flex-1">Сбросить</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Основной контент */}
          <div className="flex-1">
            {/* Секция новинок */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Новинки</h2>
                <Button variant="link" size="sm" asChild>
                  <Link to="/products?category=new">Все новинки</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mensShirts.filter(shirt => shirt.isNew).map((shirt) => (
                  <div key={shirt.id} className="relative">
                    <ProductCard {...shirt} />
                    <Badge className="absolute top-2 right-2 bg-red-500">NEW</Badge>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Все футболки */}
            <div>
              <h2 className="text-xl font-medium mb-4">Все футболки</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mensShirts.map((shirt) => (
                  <div key={shirt.id} className="relative">
                    <ProductCard {...shirt} />
                    {shirt.isNew && (
                      <Badge className="absolute top-2 right-2 bg-red-500">NEW</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Пагинация */}
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="mr-2">1</Button>
              <Button variant="outline" className="mr-2">2</Button>
              <Button variant="outline">3</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MensShirts;
