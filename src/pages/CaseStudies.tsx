import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function CaseStudies() {
  const cases = [
    {
      name: 'Саша, 5 лет',
      diagnosis: 'ОНР II уровня',
      duration: '6 месяцев',
      initial: 'Ограниченный словарь, аграмматизмы, нарушение звукопроизношения (свистящие, шипящие)',
      methods: 'Коммуникативные игры, дидактические игры на расширение словаря, артикуляционная гимнастика',
      result: 'Словарь расширился в 3 раза, поставлены все звуки, сформирована простая фраза',
      icon: 'User',
      color: 'primary'
    },
    {
      name: 'Маша, 6 лет',
      diagnosis: 'ОНР III уровня',
      duration: '4 месяца',
      initial: 'Нарушение связной речи, трудности в словообразовании, неустойчивое произношение звука Р',
      methods: 'Сюжетно-ролевые игры, игры на словообразование, пересказ с опорой на картинки',
      result: 'Автоматизирован звук Р, сформированы навыки пересказа и составления рассказов',
      icon: 'User',
      color: 'secondary'
    },
    {
      name: 'Миша, 4 года',
      diagnosis: 'ОНР I уровня',
      duration: '8 месяцев',
      initial: 'Практически отсутствие речи, использование жестов, звукоподражаний',
      methods: 'Звукоподражательные игры, простые сюжетные игры, пальчиковая гимнастика',
      result: 'Появилась фразовая речь из 2-3 слов, активный словарь около 100 слов',
      icon: 'User',
      color: 'accent'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Практический опыт</Badge>
          <h1 className="text-4xl font-bold">Примеры успешной работы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные кейсы применения игровых методов в коррекции ОНР
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {cases.map((caseItem, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${caseItem.color}/10 rounded-full flex items-center justify-center`}>
                      <Icon name={caseItem.icon as any} size={24} className={`text-${caseItem.color}`} />
                    </div>
                    <div>
                      <CardTitle>{caseItem.name}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{caseItem.diagnosis}</Badge>
                        <Badge variant="outline">Длительность: {caseItem.duration}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="AlertCircle" size={16} className="text-destructive" />
                      Исходное состояние
                    </h4>
                    <p className="text-sm text-muted-foreground">{caseItem.initial}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="Gamepad2" size={16} className="text-secondary" />
                      Применяемые методы
                    </h4>
                    <p className="text-sm text-muted-foreground">{caseItem.methods}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" size={16} className="text-accent" />
                      Достигнутый результат
                    </h4>
                    <p className="text-sm text-muted-foreground">{caseItem.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" className="text-primary" />
                Факторы успеха
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Регулярность занятий</h4>
                  <p className="text-sm text-muted-foreground">Систематические занятия 3-4 раза в неделю</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={16} className="text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Вовлечение родителей</h4>
                  <p className="text-sm text-muted-foreground">Активное участие семьи в коррекционном процессе</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={16} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Индивидуальный подход</h4>
                  <p className="text-sm text-muted-foreground">Учет особенностей и интересов ребенка</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Smile" size={16} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Игровая мотивация</h4>
                  <p className="text-sm text-muted-foreground">Поддержание интереса через разнообразные игры</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" className="text-secondary" />
                Средняя динамика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Словарный запас</span>
                  <span className="text-accent font-bold">+250%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-accent rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Звукопроизношение</span>
                  <span className="text-primary font-bold">+90%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Грамматика</span>
                  <span className="text-secondary font-bold">+75%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Связная речь</span>
                  <span className="text-accent font-bold">+80%</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-full bg-accent rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mt-4">
                *Данные на основе 50 завершенных коррекционных программ за 2023 год
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
