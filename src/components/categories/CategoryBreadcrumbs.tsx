
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryBreadcrumbsProps {
  items: Array<{
    label: string;
    href: string;
    isCurrentPage?: boolean;
  }>;
}

const CategoryBreadcrumbs: React.FC<CategoryBreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbLink>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbLink as={Link} to={item.href}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CategoryBreadcrumbs;
