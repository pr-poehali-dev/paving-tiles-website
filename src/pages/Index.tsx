import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showQuickOrder, setShowQuickOrder] = useState(false);

  const products = [
    {
      id: 1,
      name: "Тротуарная плитка Классик",
      price: "1200 ₽/м²",
      image: "/img/1f30d3f5-0e74-4ad0-8f9e-3889124f05a8.jpg",
      description: "Прочная и долговечная плитка для пешеходных зон",
      colors: ["Серый", "Красный", "Желтый"],
      category: "Плитка"
    },
    {
      id: 2,
      name: "Бордюр дорожный БР 100.30.15",
      price: "280 ₽/шт",
      image: "/img/323ea8e5-6095-45bb-bb3c-de80a2dbad0c.jpg",
      description: "Железобетонный бордюр для дорожных работ",
      colors: ["Серый"],
      category: "Бордюры"
    },
    {
      id: 3,
      name: "Тротуарная плитка Брусчатка",
      price: "1450 ₽/м²",
      image: "/img/a9f66d92-1a7d-4f4c-b1de-a6b6bafbdee2.jpg",
      description: "Элегантная плитка с текстурой натурального камня",
      colors: ["Серый", "Коричневый", "Бежевый"],
      category: "Плитка"
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Алексей М.",
      rating: 5,
      text: "Отличное качество плитки, быстрая доставка!",
      avatar: "AM",
      date: "15.07.2025"
    },
    {
      id: 2,
      author: "Мария К.",
      rating: 5,
      text: "Профессиональный подход, рекомендую!",
      avatar: "МК",
      date: "12.07.2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold font-roboto text-primary">ТашПлитка</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
            <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Заказать звонок</DialogTitle>
                  <DialogDescription>
                    Выберите удобный способ связи
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Button className="w-full" onClick={() => window.open('https://wa.me/79788244502', '_blank')}>
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => window.open('https://t.me/+79788244502', '_blank')}>
                    <Icon name="Send" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Ваш номер телефона</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    <Button className="w-full">Заказать звонок</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={20} />
              <Badge variant="secondary" className="ml-1">{cartItems.length}</Badge>
            </Button>
            
            <Avatar className="cursor-pointer">
              <AvatarFallback>ПП</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-dark-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-roboto mb-6 animate-fade-in">
            Производство тротуарной плитки и бордюров в Крыму
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Высококачественные материалы для благоустройства от производителя. 
            Собственное производство, быстрая доставка, гарантия качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-scale-in">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary animate-scale-in">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Собственное производство</h3>
              <p className="text-gray-600">Контроль качества на каждом этапе</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">По всему Крыму в кратчайшие сроки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Соответствие ГОСТ и европейским стандартам</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Консультации и помощь в выборе</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-roboto text-center mb-12">Каталог продукции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="flex space-x-1">
                      {product.colors.map((color) => (
                        <div key={color} className="w-4 h-4 rounded-full bg-gray-400 border"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                          <div className="space-y-4">
                            <p>{product.description}</p>
                            <div className="text-2xl font-bold text-primary">{product.price}</div>
                            <div>
                              <Label>Цвета:</Label>
                              <div className="flex space-x-2 mt-1">
                                {product.colors.map((color) => (
                                  <Button key={color} variant="outline" size="sm">{color}</Button>
                                ))}
                              </div>
                            </div>
                            <Button 
                              className="w-full"
                              onClick={() => setShowQuickOrder(true)}
                            >
                              <Icon name="ShoppingCart" size={16} className="mr-2" />
                              Купить в 1 клик
                            </Button>
                            <Button variant="outline" className="w-full">
                              <Icon name="Calculator" size={16} className="mr-2" />
                              Рассчитать стоимость
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order Dialog */}
      <Dialog open={showQuickOrder} onOpenChange={setShowQuickOrder}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Купить в 1 клик</DialogTitle>
            <DialogDescription>
              Заполните форму и мы свяжемся с вами для уточнения деталей заказа
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">ФИО</Label>
              <Input id="name" placeholder="Введите ваше ФИО" />
            </div>
            <div>
              <Label htmlFor="phone">Номер телефона</Label>
              <Input id="phone" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <Label htmlFor="address">Адрес доставки</Label>
              <Textarea id="address" placeholder="Введите адрес доставки" />
            </div>
            <div>
              <Label>Способ оплаты</Label>
              <div className="flex space-x-2 mt-2">
                <Button variant="outline" size="sm">При получении</Button>
                <Button variant="outline" size="sm">Онлайн</Button>
              </div>
            </div>
            <Button className="w-full">
              Оформить заказ
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-roboto text-center mb-12">Отзывы клиентов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{review.author}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{review.text}</p>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-roboto mb-6">О компании ТашПлитка</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на производстве высококачественной тротуарной плитки и бордюров 
                в Республике Крым. Наша компания работает уже более 5 лет, предоставляя клиентам 
                надёжные и долговечные материалы для благоустройства.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-primary mr-3" />
                  Современное оборудование и технологии
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-primary mr-3" />
                  Сертифицированная продукция по ГОСТ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-primary mr-3" />
                  Индивидуальный подход к каждому заказу
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-primary mr-3" />
                  Конкурентные цены от производителя
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/img/a9f66d92-1a7d-4f4c-b1de-a6b6bafbdee2.jpg" 
                alt="О компании" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-roboto text-center mb-12">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p>Республика Крым<br />Джанкойский район<br />пер. Луначарского 1</p>
            </div>
            
            <div className="text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефоны</h3>
              <p className="space-y-1">
                <a href="tel:+79788244502" className="block hover:underline">+7 (978) 824-45-02</a>
                <a href="tel:+79786076302" className="block hover:underline">+7 (978) 607-63-02</a>
              </p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p>Пн-Сб: 8:00 - 17:00<br />Воскресенье: выходной</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-4">Почта: <a href="mailto:tash-2021@mail.ru" className="hover:underline">tash-2021@mail.ru</a></p>
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">ТашПлитка</h3>
              </div>
              <p className="text-gray-400">Производство тротуарной плитки и бордюров в Крыму</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Главная</a></li>
                <li><a href="#catalog" className="hover:text-white">Каталог</a></li>
                <li><a href="#about" className="hover:text-white">О компании</a></li>
                <li><a href="#contacts" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Тротуарная плитка</a></li>
                <li><a href="#" className="hover:text-white">Бордюры</a></li>
                <li><a href="#" className="hover:text-white">Водостоки</a></li>
                <li><a href="#" className="hover:text-white">Портфолио работ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Калькулятор стоимости</a></li>
                <li><a href="#" className="hover:text-white">Консультации</a></li>
                <li><a href="#" className="hover:text-white">Гарантия</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ТашПлитка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;