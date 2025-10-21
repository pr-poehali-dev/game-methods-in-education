import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AgeGroups() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Возрастная специфика</Badge>
          <h1 className="text-4xl font-bold">Работа по возрастным группам</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Особенности применения игровых методов для разных возрастов
          </p>
        </div>

        <Tabs defaultValue="3-4" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-2/3 mx-auto mb-8">
            <TabsTrigger value="3-4">3-4 года</TabsTrigger>
            <TabsTrigger value="4-5">4-5 лет</TabsTrigger>
            <TabsTrigger value="5-6">5-6 лет</TabsTrigger>
            <TabsTrigger value="6-7">6-7 лет</TabsTrigger>
          </TabsList>

          <TabsContent value="3-4" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Baby" className="text-primary" />
                  Младшая группа (3-4 года)
                </CardTitle>
                <CardDescription>Начальный этап речевого развития</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Основные задачи
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Развитие понимания речи</li>
                      <li>Расширение словаря (предметы, действия)</li>
                      <li>Формирование простой фразы</li>
                      <li>Развитие слухового внимания</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Gamepad2" size={18} className="text-secondary" />
                      Рекомендуемые игры
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Звукоподражательные игры</li>
                      <li>Простые подвижные игры</li>
                      <li>Игры с предметами</li>
                      <li>Пальчиковые игры</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-l-4 border-l-accent bg-accent/5 rounded-r">
                  <h4 className="font-semibold mb-2">Особенности возраста</h4>
                  <p className="text-sm text-muted-foreground">
                    Короткая продолжительность занятий (10-15 мин), частая смена видов деятельности, 
                    использование ярких наглядных пособий, многократные повторения.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="4-5" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" className="text-primary" />
                  Средняя группа (4-5 лет)
                </CardTitle>
                <CardDescription>Активное развитие речи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Основные задачи
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Расширение активного словаря</li>
                      <li>Формирование фонематического слуха</li>
                      <li>Развитие грамматического строя</li>
                      <li>Простые формы связной речи</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Gamepad2" size={18} className="text-secondary" />
                      Рекомендуемые игры
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Дидактические игры с картинками</li>
                      <li>Простые сюжетно-ролевые игры</li>
                      <li>Игры на классификацию</li>
                      <li>Речевые подвижные игры</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-l-4 border-l-accent bg-accent/5 rounded-r">
                  <h4 className="font-semibold mb-2">Особенности возраста</h4>
                  <p className="text-sm text-muted-foreground">
                    Продолжительность занятий 15-20 минут, возможность работы в малых группах, 
                    интерес к ролевым играм, развитие произвольного внимания.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="5-6" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" />
                  Старшая группа (5-6 лет)
                </CardTitle>
                <CardDescription>Подготовка к школе</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Основные задачи
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Автоматизация поставленных звуков</li>
                      <li>Развитие сложных форм фонем. анализа</li>
                      <li>Совершенствование грамматики</li>
                      <li>Развернутая связная речь</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Gamepad2" size={18} className="text-secondary" />
                      Рекомендуемые игры
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Сложные дидактические игры</li>
                      <li>Развернутые сюжетно-ролевые игры</li>
                      <li>Игры с правилами</li>
                      <li>Словесные игры</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-l-4 border-l-accent bg-accent/5 rounded-r">
                  <h4 className="font-semibold mb-2">Особенности возраста</h4>
                  <p className="text-sm text-muted-foreground">
                    Занятия 20-25 минут, способность к длительному сосредоточению, интерес к соревнованиям, 
                    развитое воображение, готовность к обучающим заданиям.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="6-7" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" />
                  Подготовительная группа (6-7 лет)
                </CardTitle>
                <CardDescription>Подготовка к школьному обучению</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Основные задачи
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Подготовка к обучению грамоте</li>
                      <li>Совершенствование всех речевых компонентов</li>
                      <li>Развитие монологической речи</li>
                      <li>Формирование учебных навыков</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Gamepad2" size={18} className="text-secondary" />
                      Рекомендуемые игры
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Игры на звукобуквенный анализ</li>
                      <li>Интеллектуальные игры</li>
                      <li>Игры-драматизации</li>
                      <li>Проектные игры</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border-l-4 border-l-accent bg-accent/5 rounded-r">
                  <h4 className="font-semibold mb-2">Особенности возраста</h4>
                  <p className="text-sm text-muted-foreground">
                    Занятия 25-30 минут, хорошая концентрация внимания, способность работать по инструкции, 
                    интерес к познавательным играм, формирование учебной мотивации.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Lightbulb" className="text-primary" />
              Общие рекомендации
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-accent" />
                  Постепенное усложнение
                </h4>
                <p className="text-muted-foreground">
                  Плавный переход от простых игр к сложным с учетом зоны ближайшего развития
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="Heart" size={18} className="text-accent" />
                  Эмоциональный комфорт
                </h4>
                <p className="text-muted-foreground">
                  Создание доброжелательной атмосферы и ситуации успеха для каждого ребенка
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-accent" />
                  Индивидуальный подход
                </h4>
                <p className="text-muted-foreground">
                  Учет темпа развития, особенностей характера и интересов каждого ребенка
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
