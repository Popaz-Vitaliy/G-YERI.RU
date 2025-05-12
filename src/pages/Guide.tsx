
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-6 text-center md:text-left">Таблица размеров</h2>
              
              <Alert className="mb-6 bg-amber-50 border-amber-200">
                <AlertDescription className="flex items-start gap-2">
                  <Icon name="Info" className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Важно измерять себя в нижнем белье. Используйте мягкую измерительную ленту. 
                    Не затягивайте ленту слишком сильно — она должна прилегать к телу.
                  </span>
                </AlertDescription>
              </Alert>
              
              <h3 className="text-lg font-medium mb-3">Мужская одежда</h3>
              <div className="overflow-x-auto mb-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Размер</TableHead>
                      <TableHead>Российский</TableHead>
                      <TableHead>Грудь (см)</TableHead>
                      <TableHead>Талия (см)</TableHead>
                      <TableHead>Бедра (см)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">XS</TableCell>
                      <TableCell>44</TableCell>
                      <TableCell>86-89</TableCell>
                      <TableCell>74-77</TableCell>
                      <TableCell>87-90</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">S</TableCell>
                      <TableCell>46-48</TableCell>
                      <TableCell>90-95</TableCell>
                      <TableCell>78-83</TableCell>
                      <TableCell>91-96</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">M</TableCell>
                      <TableCell>48-50</TableCell>
                      <TableCell>96-101</TableCell>
                      <TableCell>84-89</TableCell>
                      <TableCell>97-102</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">L</TableCell>
                      <TableCell>50-52</TableCell>
                      <TableCell>102-107</TableCell>
                      <TableCell>90-95</TableCell>
                      <TableCell>103-108</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">XL</TableCell>
                      <TableCell>52-54</TableCell>
                      <TableCell>108-113</TableCell>
                      <TableCell>96-101</TableCell>
                      <TableCell>109-114</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">XXL</TableCell>
                      <TableCell>54-56</TableCell>
                      <TableCell>114-119</TableCell>
                      <TableCell>102-107</TableCell>
                      <TableCell>115-120</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Женская одежда</h3>
              <div className="overflow-x-auto mb-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Размер</TableHead>
                      <TableHead>Российский</TableHead>
                      <TableHead>Грудь (см)</TableHead>
                      <TableHead>Талия (см)</TableHead>
                      <TableHead>Бедра (см)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">XS</TableCell>
                      <TableCell>42</TableCell>
                      <TableCell>82-85</TableCell>
                      <TableCell>63-66</TableCell>
                      <TableCell>89-92</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">S</TableCell>
                      <TableCell>44-46</TableCell>
                      <TableCell>86-89</TableCell>
                      <TableCell>67-70</TableCell>
                      <TableCell>93-96</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">M</TableCell>
                      <TableCell>46-48</TableCell>
                      <TableCell>90-93</TableCell>
                      <TableCell>71-74</TableCell>
                      <TableCell>97-100</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">L</TableCell>
                      <TableCell>48-50</TableCell>
                      <TableCell>94-97</TableCell>
                      <TableCell>75-78</TableCell>
                      <TableCell>101-104</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">XL</TableCell>
                      <TableCell>50-52</TableCell>
                      <TableCell>98-103</TableCell>
                      <TableCell>79-84</TableCell>
                      <TableCell>105-110</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">XXL</TableCell>
                      <TableCell>52-54</TableCell>
                      <TableCell>104-109</TableCell>
                      <TableCell>85-90</TableCell>
                      <TableCell>111-116</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <h3 className="text-lg font-medium mb-3">Как измерить</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Грудь</h4>
                    <p className="text-sm text-muted-foreground">
                      Измерьте самую выступающую часть груди, держа ленту горизонтально.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Талия</h4>
                    <p className="text-sm text-muted-foreground">
                      Измерьте самую узкую часть талии, обычно на уровне пупка.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Бедра</h4>
                    <p className="text-sm text-muted-foreground">
                      Измерьте самую широкую часть бедер, примерно на 20 см ниже талии.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="care" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-6 text-center md:text-left">Уход за одеждой</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Icon name="Shirt" className="h-5 w-5 mr-2 text-neutral-700" />
                    Общие рекомендации
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Перед стиркой всегда проверяйте этикетку с инструкциями по уходу.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Стирайте одежду наизнанку, чтобы сохранить цвет и принты.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Сортируйте одежду по цвету и типу ткани перед стиркой.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Используйте деликатный режим стирки для тонких тканей.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Храните одежду в проветриваемом месте, защищенном от прямых солнечных лучей.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Icon name="Ban" className="h-5 w-5 mr-2 text-neutral-700" />
                    Чего следует избегать
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Не используйте отбеливатель на цветных тканях.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Избегайте высоких температур при стирке и сушке — они могут привести к усадке.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Не перегружайте стиральную машину — одежде нужно пространство для качественной стирки.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Не сушите деликатные ткани на прямом солнце.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="h-4 w-4 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>Избегайте длительного хранения одежды в сложенном виде без проветривания.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-4">Рекомендации по типам тканей</h3>
              <div className="space-y-4 mb-10">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="cotton">
                    <AccordionTrigger>Хлопок</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Хлопок — это прочный и дышащий материал, но склонен к усадке при неправильном уходе.</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Стирайте при температуре до 40°C.</li>
                        <li>Можно сушить в машине на низкой или средней температуре.</li>
                        <li>Гладьте при высокой температуре с паром.</li>
                        <li>Для предотвращения усадки стирайте в прохладной воде.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="wool">
                    <AccordionTrigger>Шерсть</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Шерсть требует особого ухода для предотвращения усадки и сохранения формы.</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Стирайте вручную или используйте режим для шерсти в стиральной машине.</li>
                        <li>Используйте специальные моющие средства для шерсти.</li>
                        <li>Не отжимайте и не выкручивайте, аккуратно отожмите лишнюю воду.</li>
                        <li>Сушите в горизонтальном положении на полотенце.</li>
                        <li>Гладьте через влажную ткань при средней температуре.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="synthetic">
                    <AccordionTrigger>Синтетические ткани</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Синтетические материалы (полиэстер, нейлон, акрил) обычно просты в уходе и быстро сохнут.</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Стирайте при температуре до 30°C.</li>
                        <li>Используйте деликатный режим стирки.</li>
                        <li>Можно сушить в машине на низкой температуре.</li>
                        <li>Гладьте при низкой температуре без пара.</li>
                        <li>Избегайте контакта с грубыми поверхностями во избежание затяжек.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="leather">
                    <AccordionTrigger>Кожа и замша</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Кожаные и замшевые изделия требуют особого ухода для сохранения внешнего вида и долговечности.</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Не стирайте в воде, используйте специальные средства для чистки кожи.</li>
                        <li>Регулярно применяйте средства для защиты и увлажнения кожи.</li>
                        <li>Храните в прохладном, сухом месте с хорошей вентиляцией.</li>
                        <li>Для замши используйте специальную щетку с резиновой подушечкой.</li>
                        <li>При попадании влаги немедленно просушите естественным путем вдали от обогревателей.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <h3 className="text-lg font-medium mb-4">Условные обозначения на ярлыках</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6L10.5 13.5M10.5 13.5L18 6M10.5 13.5V22.5M18 6H3M18 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm font-medium">Машинная стирка</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6L10.5 13.5M10.5 13.5L18 6M10.5 13.5V22.5M18 6H3M18 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm font-medium">Не стирать</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm font-medium">Отбеливание</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm font-medium">Не отжимать</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 17.7279C9.48815 18.5741 11.1998 19 13 19C17.4183 19 21 16.0899 21 12.5C21 8.91015 17.4183 6 13 6C8.58172 6 5 8.91015 5 12.5C5 13.5425 5.35719 14.5233 6 15.379" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 15L8 18L5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm font-medium">Химчистка</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 20L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm font-medium">Сушить на плечиках</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.91309 12.5C4.52196 11.5464 4 9.8472 4 8.5C4 7.1528 5.15623 6 6.5 6C7.84377 6 8.5 7.1528 8.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 8.5H21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M19.0869 12.5C19.478 11.5464 20 9.8472 20 8.5C20 7.1528 18.8438 6 17.5 6C16.1562 6 15.5 7.1528 15.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm font-medium">Гладить</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex flex-col items-center pt-4">
                    <svg className="h-8 w-8 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.91309 12.5C4.52196 11.5464 4 9.8472 4 8.5C4 7.1528 5.15623 6 6.5 6C7.84377 6 8.5 7.1528 8.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 8.5H21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M19.0869 12.5C19.478 11.5464 20 9.8472 20 8.5C20 7.1528 18.8438 6 17.5 6C16.1562 6 15.5 7.1528 15.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-sm font-medium">Не гладить</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-6 text-center md:text-left">Часто задаваемые вопросы</h2>
              
              <Accordion type="single" collapsible className="w-full mb-10">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как выбрать правильный размер?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Для выбора правильного размера мы рекомендуем:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Измерить себя согласно нашей инструкции в разделе "Размеры".</li>
                      <li>Сравнить ваши измерения с таблицей размеров.</li>
                      <li>Обратить внимание на особенности посадки модели в описании товара.</li>
                      <li>Если ваши измерения находятся между размерами, лучше выбрать больший размер.</li>
                    </ol>
                    <p className="mt-2">
                      Помните, что размеры могут немного различаться в зависимости от модели и стиля одежды.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какие способы доставки вы предлагаете?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Мы предлагаем несколько способов доставки:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Курьерская доставка (1-3 дня, в зависимости от региона)</li>
                      <li>Доставка в пункты выдачи заказов (2-5 дней)</li>
                      <li>Почта России (5-14 дней)</li>
                      <li>Экспресс-доставка в день заказа (доступна для Москвы и Санкт-Петербурга)</li>
                    </ul>
                    <p className="mt-2">
                      Точные сроки и стоимость доставки рассчитываются при оформлении заказа и зависят от региона доставки.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Как оформить возврат товара?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Возврат товара надлежащего качества возможен в течение 14 дней с момента получения. Для оформления возврата:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Заполните заявление на возврат в личном кабинете.</li>
                      <li>Упакуйте товар в оригинальную упаковку с бирками и ярлыками.</li>
                      <li>Приложите чек и заявление на возврат.</li>
                      <li>Отправьте посылку через выбранную транспортную компанию или принесите в наш магазин.</li>
                    </ol>
                    <p className="mt-2">
                      Возврат денежных средств осуществляется в течение 10 дней после получения нами товара. Стоимость доставки при возврате товара надлежащего качества не возмещается.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Какие способы оплаты вы принимаете?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Мы принимаем следующие способы оплаты:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Банковские карты (Visa, MasterCard, МИР)</li>
                      <li>Оплата при получении (наложенный платеж)</li>
                      <li>Электронные кошельки (ЮMoney, QIWI)</li>
                      <li>Система быстрых платежей (СБП)</li>
                      <li>Рассрочка и кредит (при заказе от 3000 рублей)</li>
                    </ul>
                    <p className="mt-2">
                      Все платежи обрабатываются в безопасном режиме с использованием шифрования данных.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Есть ли у вас программа лояльности?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Да, у нас действует накопительная программа лояльности:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Начальный уровень: 3% кэшбэк с каждой покупки</li>
                      <li>Серебряный уровень (после покупок на сумму от 20 000 ₽): 5% кэшбэк</li>
                      <li>Золотой уровень (после покупок на сумму от 50 000 ₽): 7% кэшбэк</li>
                      <li>VIP-уровень (после покупок на сумму от 100 000 ₽): 10% кэшбэк и персональный менеджер</li>
                    </ul>
                    <p className="mt-2">
                      Дополнительно, участники программы получают ранний доступ к новым коллекциям и специальные предложения на день рождения.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Как ухаживать за шерстяными изделиями?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Шерстяные изделия требуют особого ухода для сохранения их качества и внешнего вида:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Стирайте вручную или в машине на деликатном режиме при температуре не выше 30°C.</li>
                      <li>Используйте специальные моющие средства для шерсти.</li>
                      <li>Не выкручивайте и не отжимайте — аккуратно выдавите лишнюю воду.</li>
                      <li>Сушите в горизонтальном положении на плоской поверхности, расправив изделие.</li>
                      <li>Храните в сложенном виде на полке, а не на вешалке, чтобы избежать растяжения.</li>
                      <li>Для защиты от моли используйте натуральные репелленты (лаванду, кедр).</li>
                    </ol>
                    <p className="mt-2">
                      Более подробные рекомендации по уходу за шерстяными изделиями можно найти в разделе "Уход".
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>Как часто выходят новые коллекции?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Мы выпускаем 4 основные сезонные коллекции в год:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Весенняя коллекция — февраль-март</li>
                      <li>Летняя коллекция — май-июнь</li>
                      <li>Осенняя коллекция — август-сентябрь</li>
                      <li>Зимняя коллекция — ноябрь-декабрь</li>
                    </ul>
                    <p className="mt-2">
                      Дополнительно, мы регулярно выпускаем капсульные коллекции и лимитированные серии. Чтобы всегда быть в курсе новинок, подпишитесь на нашу рассылку или следите за обновлениями в социальных сетях.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Не нашли ответ на свой вопрос?</h3>
                <p className="mb-4">
                  Свяжитесь с нашей службой поддержки любым удобным способом:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" className="h-4 w-4 text-neutral-700" />
                    <span>+7 (915) 169-47-11</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" className="h-4 w-4 text-neutral-700" />
                    <span>evox.org@mail.ru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MessageSquare" className="h-4 w-4 text-neutral-700" />
                    <span>Чат на сайте (круглосуточно)</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default GuidePage;
