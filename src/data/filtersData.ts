
// Подготовленные данные для фильтров
export const filtersData = {
  sizes: [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" }
  ],
  
  colors: [
    { id: "white", label: "Белый", color: "white" },
    { id: "black", label: "Черный", color: "black" },
    { id: "gray", label: "Серый", color: "gray" },
    { id: "blue", label: "Синий", color: "blue" },
    { id: "red", label: "Красный", color: "red" }
  ],
  
  price: [
    { id: "under2000", label: "До 2000 ₽" },
    { id: "2000-3000", label: "2000 ₽ - 3000 ₽" },
    { id: "3000-5000", label: "3000 ₽ - 5000 ₽" },
    { id: "over5000", label: "Свыше 5000 ₽" }
  ],
  
  material: [
    { id: "cotton", label: "Хлопок" },
    { id: "cotton-elastane", label: "Хлопок + эластан" },
    { id: "knit", label: "Трикотаж" },
    { id: "linen", label: "Лён" }
  ]
};

// Пути для хлебных крошек
export const breadcrumbsData = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/products" },
  { label: "Мужская одежда", href: "/products?category=mens-all" },
  { label: "Футболки", href: "/mens-shirts", isCurrentPage: true }
];
