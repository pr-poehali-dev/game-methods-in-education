import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Methods() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Методология</Badge>
          <h1 className="text-4xl font-bold">Игровые методы коррекции</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Систематизированные подходы к использованию игр в логопедической практике
          </p>
        </div>

        <Tabs defaultValue="communicative" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-2/3 mx-auto mb-8">
            <TabsTrigger value="communicative">Коммуникативные</TabsTrigger>
            <TabsTrigger value="didactic">Дидактические</TabsTrigger>
            <TabsTrigger value="role">Сюжетно-ролевые</TabsTrigger>
          </TabsList>
          
          <TabsContent value="communicative" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" className="text-primary" />
                  Коммуникативные игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Направлены на развитие диалогической и монологической речи, формирование навыков общения и взаимодействия.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-secondary" />
                      Основные цели
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Развитие диалогической речи</li>
                      <li>Расширение активного словаря</li>
                      <li>Формирование фразовой речи</li>
                      <li>Улучшение понимания речи</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="CheckCircle" size={18} className="text-accent" />
                      Преимущества
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Естественная мотивация</li>
                      <li>Снижение речевой тревожности</li>
                      <li>Активное вовлечение</li>
                      <li>Практическая направленность</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold">Примеры коммуникативных игр:</h4>
                  <div className="grid gap-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Интервью</h5>
                      <p className="text-sm text-muted-foreground">Дети берут интервью друг у друга, задавая вопросы и отвечая на них</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Телефонный разговор</h5>
                      <p className="text-sm text-muted-foreground">Моделирование ситуации телефонного общения с соблюдением этикета</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Угадай кто я</h5>
                      <p className="text-sm text-muted-foreground">Описание персонажа или предмета через характеристики</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="didactic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" />
                  Дидактические игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Обучающие игры с четкими правилами и структурой, направленные на формирование конкретных речевых навыков и умений.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Layers" size={18} className="text-secondary" />
                      Виды игр
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Фонематические</li>
                      <li>Лексические</li>
                      <li>Грамматические</li>
                      <li>Звукопроизносительные</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={18} className="text-accent" />
                      Эффективность
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Четкая структурированность</li>
                      <li>Измеримый результат</li>
                      <li>Системность подхода</li>
                      <li>Быстрая обратная связь</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold">Популярные дидактические игры:</h4>
                  <div className="grid gap-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Звуковое лото</h5>
                      <p className="text-sm text-muted-foreground">Развитие фонематического слуха через подбор картинок по звукам</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Четвертый лишний</h5>
                      <p className="text-sm text-muted-foreground">Классификация предметов и развитие логического мышления</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Подбери слово</h5>
                      <p className="text-sm text-muted-foreground">Работа с синонимами, антонимами и словообразованием</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="role" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Drama" className="text-primary" />
                  Сюжетно-ролевые игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Игры, в которых дети принимают на себя различные социальные роли и воспроизводят жизненные ситуации.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Users2" size={18} className="text-secondary" />
                      Социальный аспект
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Понимание социальных ролей</li>
                      <li>Развитие эмпатии</li>
                      <li>Навыки кооперации</li>
                      <li>Социальная адаптация</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Sparkle" size={18} className="text-accent" />
                      Речевое развитие
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                      <li>Спонтанная речь</li>
                      <li>Контекстные фразы</li>
                      <li>Интонационная выразительность</li>
                      <li>Диалогическое взаимодействие</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold">Типичные сюжетно-ролевые игры:</h4>
                  <div className="grid gap-3">
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Больница</h5>
                      <p className="text-sm text-muted-foreground">Роли врача, пациента, медсестры с типичными диалогами</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Магазин</h5>
                      <p className="text-sm text-muted-foreground">Продавец и покупатели, развитие вежливых форм общения</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h5 className="font-medium mb-1">Семья</h5>
                      <p className="text-sm text-muted-foreground">Воспроизведение семейных ситуаций и отношений</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
