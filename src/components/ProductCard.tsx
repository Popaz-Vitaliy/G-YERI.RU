
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button className="w-full gap-2">
            <ShoppingBag className="h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium text-base line-clamp-1">{name}</h3>
        <div className="mt-1 font-medium">{price.toLocaleString()} ₽</div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
