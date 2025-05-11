
import React from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

const GuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">Руководство</h1>
          <p className="text-muted-foreground mt-2">Полезная информация о подборе размеров и уходе за одеждой</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Tabs defaultValue="sizes" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="sizes" className="flex-1">Размеры</TabsTrigger>
            <TabsTrigger value="care" className="flex-1">Уход</TabsTrigger>
            <TabsTrigger value="faq" className="flex-1">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sizes" className="mt-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold mb-6">Как подобрать правильный размер</h2>
              
              <p className="mb-6">
                Правильно подобранный размер одежды обеспечивает не только комфорт, но и уверенность в своем образе. 
                Используйте наши таблицы для точного определения вашего размера.
              </p>
              
              <h3 className="text-xl font-medium mb-4">Женская одежда</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead className="bg-neutral-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">Российский</th>
                      <th className="border px-4 py-2 text-left">Международный</th>
                      <th className="border px-4 py-2 text-left">Обхват груди (см)</th>
                      <th className="border px-4 py-2 text-left">Обхват талии (см)</th>
                      <th className="border px-4 py-2 text-left">Обхват бедер (см)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">40-42</td>
                      <td className="border px-4 py-2">XS</td>
                      <td className="border px-4 py-2">80-84</td>
                      <td className="border px-4 py-2">60-64</td>
                      <td className="border px-4 py-2">86-90</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">44-46</td>
                      <td className="border px-4 py-2">S</td>
                      <td className="border px-4 py-2">84-88</td>
                      <td className="border px-4 py-2">65-69</td>
                      <td className="border px-4 py-2">90-94</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">48-50</td>
                      <td className="border px-4 py-2">M</td>
                      <td className="border px-4 py-2">89-93</td>
                      <td className="border px-4 py-2">70-74</td>
                      <td className="border px-4 py-2">95-99</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">52-54</td>
                      <td className="border px-4 py-2">L</td>
                      <td className="border px-4 py-2">94-98</td>
                      <td className="border px-4 py-2">75-79</td>
                      <td className="border px-4 py-2">100-104</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">56-58</td>
                      <td className="border px-4 py-2">XL</td>
                      <td className="border px-4 py-2">99-103</td>
                      <td className="border px-4 py-2">80-84</td>
                      <td className="border px-4 py-2">105-109</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Мужская одежда</h3>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead className="bg-neutral-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">Российский</th>
                      <th className="border px-4 py-2 text-left">Международный</th>
                      <th className="border px-4 py-2 text-left">Обхват груди (см)</th>
                      <th className="border px-4 py-2 text-left">Обхват талии (см)</th>
                      <th className="border px-4 py-2 text-left">Обхват шеи (см)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">44-46</td>
                      <td className="border px-4 py-2">S</td>
                      <td className="border px-4 py-2">90-94</td>
                      <td className="border px-4 py-2">78-82</td>
                      <td className="border px-4 py-2">37-38</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">48-50</td>
                      <td className="border px-4 py-2">M</td>
                      <td className="border px-4 py-2">95-99</td>
                      <td className="border px-4 py-2">83-87</td>
                      <td className="border px-4 py-2">39-40</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">52-54</td>
                      <td className="border px-4 py-2">L</td>
                      <td className="border px-4 py-2">100-104</td>
                      <td className="border px-4 py-2">88-92</td>
                      <td className="border px-4 py-2">41-42</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">56-58</td>
                      <td className="border px-4 py-2">XL</td>
                      <td className="border px-4 py-2">105-109</td>
                      <td className="border px-4 py-2">93-97</td>
                      <td className="border px-4 py-2">43-44</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">60-62</td>
                      <td className="border px-4 py-2">XXL</td>
                      <td className="border px-4 py-2">110-114</td>
                      <td className="border px-4 py-2">98-102</td>
                      <td className="border px-4 py-2">45-46</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Как измерить себя</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium mb-2">Обхват груди</h4>
                  <p className="text-sm text-muted-foreground">
                    Измерьте самую выступающую часть груди горизонтально, держа сантиметровую ленту параллельно полу.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Обхват талии</h4>
                  <p className="text-sm text-muted-foreground">
                    Измерьте самую узкую часть талии, обычно примерно на 2-3 см выше пупка.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Обхват бедер</h4>
                  <p className="text-sm text-muted-foreground">
                    Измерьте самую широкую часть бедер, обычно примерно на 15-20 см ниже талии.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Обхват шеи (для мужчин)</h4>
                  <p className="text-sm text-muted-foreground">
                    Измерьте вокруг основания шеи, чуть выше ключицы. Для комфорта добавьте 1 см.
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-sm">
                  Примечание: Размеры могут варьироваться в зависимости от модели и производителя. 
                  При сомнениях выбирайте размер побольше.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="care" className="mt-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold mb-6">Уход за одеждой</h2>
              
              <p className="mb-6">
                Правильный уход за одеждой продлевает срок ее службы и сохраняет первоначальный внешний вид. 
                Следуйте нашим рекомендациям, чтобы ваши вещи оставались как новые долгое время.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Шерстяные изделия</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Стирать вручную или в режиме "Шерсть" при температуре не выше 30°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Использовать специальные моющие средства для шерсти</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Не выкручивать, отжимать мягко</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Сушить в горизонтальном положении на полотенце</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Хранить в сложенном виде, защищая от моли</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Хлопковые изделия</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Стирать при температуре до 40°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Перед стиркой выворачивать наизнанку</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Белые хлопковые вещи можно стирать при 60°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Гладить при средней или высокой температуре</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Хранить в хорошо проветриваемом месте</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Шелковые изделия</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Стирать только вручную в прохладной воде (до 30°C)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Использовать специальные моющие средства для деликатных тканей</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Не выкручивать, отжимать в полотенце</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Сушить в тени, вдали от прямых солнечных лучей</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Гладить с изнаночной стороны при низкой температуре</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Джинсовые изделия</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Стирать вывернутыми наизнанку при температуре до 40°C</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Использовать специальные средства для джинсовой ткани</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Избегать отбеливателей</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Сушить естественным образом</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#6E59A5] mr-2">•</span>
                        <span>Гладить с изнаночной стороны при средней температуре</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Общие рекомендации</h3>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#6E59A5] font-bold mr-2">1.</span>
                  <span>Всегда следуйте инструкциям на этикетке одежды</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6E59A5] font-bold mr-2">2.</span>
                  <span>Сортируйте одежду по цвету и типу ткани перед стиркой</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6E59A5] font-bold mr-2">3.</span>
                  <span>Застегивайте молнии и пуговицы перед стиркой, чтобы избежать повреждений</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6E59A5] font-bold mr-2">4.</span>
                  <span>Выворачивайте одежду наизнанку, чтобы сохранить цвет и принты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6E59A5] font-bold mr-2">5.</span>
                  <span>Используйте специальные мешки для стирки для деликатных вещей</span>
                </li>
              </ul>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-sm">
                  Помните, что правильный уход за одеждой — это не только забота о ваших вещах, 
                  но и экологичный подход к потреблению, так как качественные вещи с правильным уходом прослужат дольше.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-playfair font-bold mb-6">Часто задаваемые вопросы</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как оформить заказ?</AccordionTrigger>
                  <AccordionContent>
                    Для оформления заказа добавьте товары в корзину, перейдите в корзину, нажав на иконку корзины 
                    в правом верхнем углу страницы. Проверьте содержимое корзины и нажмите "Оформить заказ". 
                    Заполните необходимые поля с информацией о доставке и оплате, подтвердите заказ.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какие способы оплаты доступны?</AccordionTrigger>
                  <AccordionContent>
                    Мы принимаем оплату банковскими картами Visa, MasterCard, МИР, а также через электронные 
                    кошельки ЮMoney, QIWI. При получении заказа доступна оплата наличными или картой курьеру 
                    (для Москвы и Санкт-Петербурга) или в пункте выдачи.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Как узнать статус моего заказа?</AccordionTrigger>
                  <AccordionContent>
                    Вы можете отслеживать статус вашего заказа в личном кабинете на сайте. После оформления 
                    заказа вам будет отправлено письмо с номером заказа и ссылкой для отслеживания. 
                    Также вы будете получать уведомления об изменении статуса заказа на электронную почту.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Каковы сроки доставки?</AccordionTrigger>
                  <AccordionContent>
                    Сроки доставки зависят от вашего региона. В Москве и Санкт-Петербурге доставка 
                    осуществляется в течение 1-2 рабочих дней. Для других городов России срок доставки 
                    составляет от 3 до 10 рабочих дней в зависимости от удаленности населенного пункта.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Как вернуть или обменять товар?</AccordionTrigger>
                  <AccordionContent>
                    Вы можете вернуть или обменять товар в течение 14 дней с момента получения, если 
                    он не был в употреблении, сохранены его товарный вид, потребительские свойства, 
                    пломбы, фабричные ярлыки. Для возврата или обмена необходимо заполнить форму возврата 
                    в личном кабинете или связаться с нашей службой поддержки.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Есть ли у вас программа лояльности?</AccordionTrigger>
                  <AccordionContent>
                    Да, у нас действует программа лояльности. За каждую покупку вы получаете бонусные баллы, 
                    которые можно использовать для оплаты до 50% стоимости следующих покупок. Также мы регулярно 
                    проводим акции и предлагаем специальные скидки для постоянных клиентов.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>Как ухаживать за одеждой из натуральных тканей?</AccordionTrigger>
                  <AccordionContent>
                    Для каждого типа ткани мы рекомендуем свой способ ухода. Общие рекомендации: стирать при 
                    температуре не выше указанной на этикетке, использовать мягкие моющие средства, не 
                    отбеливать, сушить естественным образом, гладить с изнаночной стороны. Более подробные 
                    рекомендации вы можете найти в разделе "Уход" на нашем сайте.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger>Можно ли заказать примерку перед покупкой?</AccordionTrigger>
                  <AccordionContent>
                    Да, для жителей Москвы и Санкт-Петербурга доступна услуга примерки перед покупкой. 
                    При оформлении заказа выберите опцию "Примерка". Курьер привезет заказ в удобное для 
                    вас время, вы сможете примерить вещи и оплатить только те, которые вам подошли.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-10 p-6 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Не нашли ответ на свой вопрос?</h3>
                <p className="mb-4">
                  Свяжитесь с нашей службой поддержки, и мы с радостью вам поможем.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6E59A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@mystyle.ru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6E59A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+7 (123) 456-78-90</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GuidePage;
