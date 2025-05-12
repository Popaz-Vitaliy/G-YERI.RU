
interface CategoryLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface CategoryConfig {
  mens: CategoryLink[];
  womens: CategoryLink[];
  other: CategoryLink[];
}

// Конфигурация категорий для навигации
export const categoryLinks: CategoryConfig = {
  mens: [
    { label: "Футболки", href: "/products?category=mens-tshirts" },
    { label: "Рубашки", href: "/products?category=mens-shirts" },
    { label: "Брюки", href: "/products?category=mens-pants" },
    { label: "Вся мужская одежда", href: "/products?category=mens-all" }
  ],
  womens: [
    { label: "Футболки", href: "/products?category=womens-tshirts" },
    { label: "Платья", href: "/products?category=womens-dresses" },
    { label: "Юбки", href: "/products?category=womens-skirts" },
    { label: "Вся женская одежда", href: "/products?category=womens-all" }
  ],
  other: [
    { label: "Аксессуары", href: "/products?category=accessories" },
    { label: "Новинки", href: "/products?category=new" },
    { label: "Все товары", href: "/products", highlight: true }
  ]
};
