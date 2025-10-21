import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Games() {
  const games = [
    {
      title: 'Звуковое лото',
      icon: 'Ear',
      category: 'Фонематика',
      age: '4-6 лет',
      goal: 'Различение звуков в начале слова',
      participants: '2-4 ребенка',
      duration: '15-20 минут',
      materials: 'Карточки с картинками, фишки',
      description: 'Логопед называет звук, дети находят картинки, начинающиеся на этот звук. За правильный ответ - фишка.',
      complexity: 'Поиск звука в середине или конце слова'
    },
    {
      title: 'Магазин',
      icon: 'ShoppingCart',
      category: 'Лексика',
      age: '5-7 лет',
      goal: 'Использование слов-обобщений, вежливые формы',
      participants: '3-6 детей',
      duration: '20-30 минут',
      materials: 'Игрушечные продукты, касса, деньги',
      description: 'Распределение ролей: продавец, покупатели, кассир. Диалоги с описанием товара.',
      complexity: 'Добавление ситуаций возврата товара, оплаты картой'
    },
    {
      title: 'Собери предложение',
      icon: 'Puzzle',
      category: 'Грамматика',
      age: '5-7 лет',
      goal: 'Правильное согласование слов в предложении',
      participants: 'Индивидуально или пары',
      duration: '10-15 минут',
      materials: 'Карточки со словами или картинками',
      description: 'Ребенок составляет предложения из разрозненных слов, соблюдая правильный порядок и согласование.',
      complexity: 'Усложнение длины предложений, работа с предлогами'
    },
    {
      title: 'Расскажи историю',
      icon: 'BookMarked',
      category: 'Связная речь',
      age: '6-8 лет',
      goal: 'Последовательное изложение событий',
      participants: 'Индивидуально или малая группа',
      duration: '15-25 минут',
      materials: 'Сюжетные картинки, схемы-опоры',
      description: 'Составление рассказа по серии картинок, пересказ с использованием вопросов и речевых клише.',
      complexity: 'Творческое продолжение истории, придумывание концовки'
    },
    {
      title: 'Что изменилось',
      icon: 'Eye',
      category: 'Внимание и память',
      age: '4-6 лет',
      goal: 'Развитие зрительной памяти и речи-описания',
      participants: '2-5 детей',
      duration: '10-15 минут',
      materials: 'Набор предметов или игрушек',
      description: 'Дети запоминают расположение предметов, затем один предмет убирается или перемещается.',
      complexity: 'Увеличение количества предметов, изменение нескольких позиций'
    },
    {
      title: 'Угадай по описанию',
      icon: 'Search',
      category: 'Лексика',
      age: '5-7 лет',
      goal: 'Развитие описательной речи и понимания',
      participants: '3-6 детей',
      duration: '15-20 минут',
      materials: 'Картинки с предметами, животными, людьми',
      description: 'Один ребенок описывает предмет, не называя его, остальные угадывают.',
      complexity: 'Описание абстрактных понятий, эмоций'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Практика</Badge>
          <h1 className="text-4xl font-bold">Примеры игр и упражнений</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовые к применению игровые методики для работы с детьми с ОНР
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {games.map((game, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name={game.icon as any} className="text-primary" />
                    {game.title}
                  </CardTitle>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{game.category}</Badge>
                  <Badge variant="outline">{game.age}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {game.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Target" size={16} className="text-accent mt-1" />
                    <div>
                      <strong>Цель:</strong> {game.goal}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Users" size={16} className="text-accent mt-1" />
                    <div>
                      <strong>Участники:</strong> {game.participants}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" size={16} className="text-accent mt-1" />
                    <div>
                      <strong>Длительность:</strong> {game.duration}
                    </div>
                  </div>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details" className="border-0">
                    <AccordionTrigger className="text-sm font-medium">
                      Подробные детали
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground space-y-2">
                      <p><strong>Материалы:</strong> {game.materials}</p>
                      <p><strong>Усложнение:</strong> {game.complexity}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Star" className="text-primary" />
              Рекомендации по применению
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">1</span>
              </div>
              <p className="text-sm pt-1">
                Адаптируйте сложность игры под индивидуальный уровень развития каждого ребенка
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-secondary-foreground font-bold text-sm">2</span>
              </div>
              <p className="text-sm pt-1">
                Комбинируйте разные типы игр для комплексного воздействия на все компоненты речи
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-sm">3</span>
              </div>
              <p className="text-sm pt-1">
                Поддерживайте позитивную атмосферу и поощряйте любые речевые попытки ребенка
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
