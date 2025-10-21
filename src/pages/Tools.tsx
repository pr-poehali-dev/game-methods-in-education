import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Tools() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Рабочие инструменты</Badge>
          <h1 className="text-4xl font-bold">Инструменты логопеда</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Необходимые пособия и оборудование для эффективной работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Mirror" size={24} className="text-primary" />
              </div>
              <CardTitle>Зеркало</CardTitle>
              <CardDescription>Для артикуляционных упражнений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Настенное или настольное зеркало для контроля артикуляции</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Image" size={24} className="text-secondary" />
              </div>
              <CardTitle>Предметные картинки</CardTitle>
              <CardDescription>Для развития словаря</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Наборы по темам: животные, транспорт, одежда, посуда и др.</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookImage" size={24} className="text-accent" />
              </div>
              <CardTitle>Сюжетные картинки</CardTitle>
              <CardDescription>Для связной речи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Серии картинок для составления рассказов и пересказа</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Blocks" size={24} className="text-primary" />
              </div>
              <CardTitle>Кубики и конструктор</CardTitle>
              <CardDescription>Для моторики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Развитие мелкой моторики, пространственных представлений</p>
              <Badge variant="outline">Рекомендуется</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Shapes" size={24} className="text-secondary" />
              </div>
              <CardTitle>Мозаика и пазлы</CardTitle>
              <CardDescription>Развитие внимания</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Тренировка концентрации, мелкой моторики, усидчивости</p>
              <Badge variant="outline">Рекомендуется</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Dices" size={24} className="text-accent" />
              </div>
              <CardTitle>Дидактические игры</CardTitle>
              <CardDescription>Готовые комплекты</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Лото, домино, игры на классификацию и обобщение</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Music" size={24} className="text-primary" />
              </div>
              <CardTitle>Музыкальные инструменты</CardTitle>
              <CardDescription>Для ритма и слуха</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Бубен, барабан, колокольчик для развития фонем. восприятия</p>
              <Badge variant="outline">Рекомендуется</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Wind" size={24} className="text-secondary" />
              </div>
              <CardTitle>Дыхательные тренажеры</CardTitle>
              <CardDescription>Для речевого дыхания</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Вертушки, дудочки, мыльные пузыри, султанчики</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Hand" size={24} className="text-accent" />
              </div>
              <CardTitle>Массажные мячики</CardTitle>
              <CardDescription>Для пальчиковой гимнастики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Су-джок, массажные шарики для развития мелкой моторики</p>
              <Badge variant="outline">Рекомендуется</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Palette" size={24} className="text-primary" />
              </div>
              <CardTitle>Материалы для творчества</CardTitle>
              <CardDescription>Арт-терапия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Пластилин, краски, цветная бумага для комплексных занятий</p>
              <Badge variant="outline">Рекомендуется</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Drama" size={24} className="text-secondary" />
              </div>
              <CardTitle>Игрушки и куклы</CardTitle>
              <CardDescription>Для сюжетных игр</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Персонажи для ролевых игр, пальчиковый театр</p>
              <Badge variant="outline">Обязательно</Badge>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Timer" size={24} className="text-accent" />
              </div>
              <CardTitle>Песочные часы</CardTitle>
              <CardDescription>Для контроля времени</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Визуализация времени выполнения заданий (1, 3, 5 минут)</p>
              <Badge variant="outline">Полезно</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="ShoppingCart" className="text-primary" />
              Базовый набор для начинающего специалиста
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Минимально необходимое:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Настольное зеркало</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Набор предметных картинок (500+ шт)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Сюжетные картинки (10-15 серий)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>3-4 дидактические игры</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Материалы для дыхательных упражнений</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-accent" />
                    <span>Базовый набор игрушек</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Рекомендуется добавить:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Массажные мячики и шарики</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Музыкальные инструменты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Конструктор и мозаика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Материалы для творчества</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Пальчиковый театр</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Plus" size={16} />
                    <span>Песочные часы</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
