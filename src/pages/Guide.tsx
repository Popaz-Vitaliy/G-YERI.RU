import React from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const GuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">
            Руководство
          </h1>
          <p className="text-muted-foreground mt-2">
            Полезная информация о подборе размеров и уходе за одеждой
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Tabs defaultValue="sizes" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="sizes" className="flex-1">
              Размеры
            </TabsTrigger>
            <TabsTrigger value="care" className="flex-1">
              Уход
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex-1">
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sizes" className="mt-6">
            {/* Sizes content... */}
          </TabsContent>

          <TabsContent value="care" className="mt-6">
            {/* Care content... */}
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            {/* FAQ content... */}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default GuidePage;
