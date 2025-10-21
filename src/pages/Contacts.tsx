import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Связь с нами</Badge>
          <h1 className="text-4xl font-bold">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для получения консультации или сотрудничества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" />
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Электронная почта</h4>
                    <a href="mailto:info@logopedy.ru" className="text-sm text-muted-foreground hover:text-primary">
                      info@logopedy.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-primary">
                      +7 (495) 123-45-67
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-sm text-muted-foreground">
                      г. Москва, ул. Логопедическая, д. 10<br />
                      офис 301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-sm text-muted-foreground">
                      Понедельник - Пятница: 9:00 - 18:00<br />
                      Суббота: 10:00 - 15:00<br />
                      Воскресенье: выходной
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Социальные сети</h4>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Youtube" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Send" className="text-secondary" />
                Форма обратной связи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Тема обращения</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Консультация специалиста</option>
                    <option>Вопрос о методиках</option>
                    <option>Сотрудничество</option>
                    <option>Техническая поддержка</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea
                    rows={5}
                    placeholder="Расскажите подробнее о вашем вопросе..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="HelpCircle" size={24} className="text-primary" />
              </div>
              <CardTitle>Консультации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Бесплатная первичная консультация по вопросам коррекции речи</p>
              <Button variant="outline" size="sm" className="w-full">Записаться</Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <CardTitle>Сотрудничество</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Приглашаем к сотрудничеству логопедов и дефектологов</p>
              <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookOpen" size={24} className="text-accent" />
              </div>
              <CardTitle>Обучение</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Курсы повышения квалификации для специалистов</p>
              <Button variant="outline" size="sm" className="w-full">Узнать больше</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" className="text-primary" />
              Как нас найти
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Карта офиса</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Общественный транспорт</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Train" size={16} />
                    <span>м. Проспект Мира (5 мин пешком)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Bus" size={16} />
                    <span>Автобусы: 12, 47, 84</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Парковка</h4>
                <p className="text-muted-foreground">
                  Бесплатная парковка для посетителей во дворе здания
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
