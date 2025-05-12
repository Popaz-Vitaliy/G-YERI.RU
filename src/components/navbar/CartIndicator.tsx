
import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartIndicatorProps {
  count: number;
}

const CartIndicator: React.FC<CartIndicatorProps> = ({ count }) => {
  return (
    <Button variant="ghost" size="icon">
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </Button>
  );
};

export default CartIndicator;
