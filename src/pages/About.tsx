
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiHeading from "@/components/AiHeading";
import { Separator } from "@/components/ui/separator";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Заголовок страницы */}
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold">
            О нас
          </h1>
          <p className="text-muted-foreground mt-2">
            Узнайте больше о философии и миссии G.YERI
          </p>
        </div>
      </div>
      
      {/* Основное содержимое */}
      <div className="flex-1 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">
                Добро пожаловать в G.YERI
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Добро пожаловать в G.YERI — ваш идеальный магазин одежды, где стиль встречается с качеством! 
                Мы стремимся предложить нашим клиентам уникальные и современные решения в мире моды. 
                Наша команда состоит из профессионалов, которые следят за последними тенденциями и готовы 
                предложить вам только лучшее.
              </p>
              
              <AiHeading className="mt-12 mb-6" />
            </div>
            <div className="relative">
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Команда G.YERI" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Миссия */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold mb-6">
              Наша миссия
            </h2>
            <p className="text-neutral-700 mb-6 leading-relaxed max-w-3xl">
              Наша миссия — сделать моду доступной для каждого. Мы верим, что каждый человек 
              заслуживает носить одежду, которая подчеркивает его индивидуальность и стиль. 
              Мы предлагаем разнообразные коллекции, которые подходят для любого случая — 
              от повседневной одежды до вечерних нарядов.
            </p>
          </div>
          
          <Separator className="my-16" />
          
          {/* Что мы предлагаем */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold mb-10 text-center">
              Что мы предлагаем
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-8 rounded-lg">
                <div className="text-3xl text-[#0037FF] mb-4">01</div>
                <h3 className="text-xl font-medium mb-4">Широкий ассортимент</h3>
                <p className="text-neutral-600">
                  У нас вы найдете одежду для мужчин, женщин и детей. Мы предлагаем все — 
                  от базовых вещей до ярких аксессуаров.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-8 rounded-lg">
                <div className="text-3xl text-[#0037FF] mb-4">02</div>
                <h3 className="text-xl font-medium mb-4">Качество</h3>
                <p className="text-neutral-600">
                  Мы тщательно отбираем материалы и следим за качеством каждой вещи, 
                  чтобы вы могли наслаждаться своей покупкой долгое время.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-8 rounded-lg">
                <div className="text-3xl text-[#0037FF] mb-4">03</div>
                <h3 className="text-xl font-medium mb-4">Уникальный стиль</h3>
                <p className="text-neutral-600">
                  Наша команда дизайнеров создает уникальные коллекции, 
                  которые помогут вам выделиться из толпы.
                </p>
              </div>
            </div>
          </div>
          
          {/* Почему выбирают нас */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold mb-10 text-center">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-[#0037FF] text-white p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Индивидуальный подход</h3>
                <p className="text-neutral-600">
                  Мы ценим каждого клиента и готовы предложить 
                  персонализированные рекомендации.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-[#0037FF] text-white p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Доступные цены</h3>
                <p className="text-neutral-600">
                  Мы стремимся сделать моду доступной, 
                  поэтому наши цены остаются конкурентоспособными.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-[#0037FF] text-white p-4 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Удобный шопинг</h3>
                <p className="text-neutral-600">
                  Наш интернет-магазин предлагает удобный интерфейс и быструю доставку, 
                  чтобы вы могли легко и быстро совершать покупки.
                </p>
              </div>
            </div>
          </div>
          
          {/* Присоединяйтесь к нам */}
          <div className="bg-gradient-to-r from-[#0037FF]/10 to-purple-100 p-8 md:p-12 rounded-lg mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-playfair font-bold mb-6">
                Присоединяйтесь к нам
              </h2>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Следите за нашими новинками и акциями, подписавшись на нашу рассылку и социальные сети. 
                Мы всегда рады видеть вас в нашем магазине и готовы помочь вам найти идеальный наряд!
              </p>
              <p className="text-xl font-playfair font-medium italic">
                G.YERI — это не просто магазин одежды, это место, где начинается ваша модная история.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
