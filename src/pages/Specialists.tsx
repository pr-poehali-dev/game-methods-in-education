import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Specialists() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Профессиональное развитие</Badge>
          <h1 className="text-4xl font-bold">Для специалистов</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Материалы для повышения квалификации логопедов и дефектологов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <CardTitle>Методическая литература</CardTitle>
              <CardDescription>Современные подходы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Подборка актуальных книг и статей по игровым методам в логопедии
              </p>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-muted rounded">
                  Филичева Т.Б. «Коррекция ОНР у дошкольников»
                </div>
                <div className="p-2 bg-muted rounded">
                  Нищева Н.В. «Система коррекционной работы»
                </div>
                <div className="p-2 bg-muted rounded">
                  Жукова Н.С. «Преодоление ОНР»
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Список литературы</Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Video" size={24} className="text-secondary" />
              </div>
              <CardTitle>Вебинары и курсы</CardTitle>
              <CardDescription>Обучение онлайн</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Программы повышения квалификации и мастер-классы от ведущих специалистов
              </p>
              <div className="space-y-2 text-sm">
                <Badge variant="outline">72 часа</Badge>
                <Badge variant="outline">144 часа</Badge>
                <Badge variant="outline">С сертификатом</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full">Посмотреть курсы</Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <CardTitle>Профессиональное сообщество</CardTitle>
              <CardDescription>Обмен опытом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Форумы, чаты, конференции для обмена методиками и материалами
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Профессиональный чат</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users2" size={16} />
                  <span>Ежемесячные встречи</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Присоединиться</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Download" className="text-primary" />
              Профессиональные материалы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Методические пособия</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Картотека игр для развития фонематического слуха</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Конспекты фронтальных занятий</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Диагностические материалы</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Речевые карты обследования</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Наглядные материалы</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Демонстрационные картинки (500+ шт)</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Схемы для составления рассказов</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Символы для звукового анализа</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-muted rounded transition-colors">
                    <span>Артикуляционные профили звуков</span>
                    <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" className="text-primary" />
                Сертификация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Получите официальный сертификат о повышении квалификации
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Государственный образец</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Внесение в реестр</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Дистанционное обучение</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Presentation" className="text-secondary" />
                Консультации
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Индивидуальные консультации по сложным случаям
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Разбор клинических случаев</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Помощь в составлении программ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Супервизия специалистов</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" className="text-accent" />
                Публикации
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Публикуйте свои разработки в профессиональных изданиях
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Рецензирование статей</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Помощь в оформлении</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Издание методичек</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
