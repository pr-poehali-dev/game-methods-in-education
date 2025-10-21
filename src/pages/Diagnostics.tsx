import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Diagnostics() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Оценка развития</Badge>
          <h1 className="text-4xl font-bold">Диагностика речевого развития</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Методики и инструменты для оценки уровня речевого развития детей с ОНР
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Mic" size={24} className="text-primary" />
              </div>
              <CardTitle>Звукопроизношение</CardTitle>
              <CardDescription>Оценка артикуляции звуков</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Проверка произношения всех групп звуков в различных позициях: изолированно, в слогах, словах и фразах.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Свистящие: С, СЬ, З, ЗЬ, Ц</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Шипящие: Ш, Ж, Ч, Щ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Сонорные: Л, ЛЬ, Р, РЬ</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Ear" size={24} className="text-secondary" />
              </div>
              <CardTitle>Фонематический слух</CardTitle>
              <CardDescription>Различение звуков речи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Оценка способности различать звуки, определять наличие и позицию звука в слове.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Повторение слоговых рядов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Выделение звука из ряда</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Определение позиции звука</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookA" size={24} className="text-accent" />
              </div>
              <CardTitle>Словарный запас</CardTitle>
              <CardDescription>Объем и качество лексики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Проверка активного и пассивного словаря по различным лексическим темам.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Называние предметов и действий</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Обобщающие понятия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Синонимы и антонимы</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Puzzle" size={24} className="text-primary" />
              </div>
              <CardTitle>Грамматический строй</CardTitle>
              <CardDescription>Согласование и словообразование</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Оценка навыков словоизменения, словообразования и построения предложений.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Множественное число</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Предложно-падежные формы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Образование прилагательных</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="MessageSquare" size={24} className="text-secondary" />
              </div>
              <CardTitle>Связная речь</CardTitle>
              <CardDescription>Построение высказываний</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Оценка умения составлять рассказы, пересказывать тексты, отвечать на вопросы.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Пересказ короткого текста</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Рассказ по картинке</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Составление рассказа по серии</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Hand" size={24} className="text-accent" />
              </div>
              <CardTitle>Моторика</CardTitle>
              <CardDescription>Общая и мелкая моторика</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Оценка координации движений, мелкой моторики и артикуляционной моторики.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Общая координация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Мелкая моторика рук</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-accent" />
                  <span>Артикуляционная моторика</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" className="text-primary" />
              Принципы диагностики
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={24} className="text-primary-foreground" />
                </div>
                <h4 className="font-semibold">Индивидуальный подход</h4>
                <p className="text-sm text-muted-foreground">
                  Учет особенностей каждого ребенка при проведении обследования
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Layers" size={24} className="text-secondary-foreground" />
                </div>
                <h4 className="font-semibold">Комплексность</h4>
                <p className="text-sm text-muted-foreground">
                  Оценка всех компонентов речевого развития в системе
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Repeat" size={24} className="text-accent-foreground" />
                </div>
                <h4 className="font-semibold">Динамичность</h4>
                <p className="text-sm text-muted-foreground">
                  Регулярная оценка прогресса для коррекции программы
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
