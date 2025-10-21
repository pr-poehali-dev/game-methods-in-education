import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Planning() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Организация работы</Badge>
          <h1 className="text-4xl font-bold">Планирование занятий</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Методические рекомендации по составлению программ коррекционных занятий
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" className="text-primary" />
                Структура программы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border-l-4 border-l-primary bg-muted/30 rounded-r">
                  <h4 className="font-semibold mb-1">1. Диагностический этап</h4>
                  <p className="text-sm text-muted-foreground">
                    Первичное обследование, выявление уровня развития речи, постановка целей (1-2 недели)
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-secondary bg-muted/30 rounded-r">
                  <h4 className="font-semibold mb-1">2. Подготовительный этап</h4>
                  <p className="text-sm text-muted-foreground">
                    Развитие фонематического слуха, артикуляционной моторики, дыхания (2-4 недели)
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-accent bg-muted/30 rounded-r">
                  <h4 className="font-semibold mb-1">3. Основной этап</h4>
                  <p className="text-sm text-muted-foreground">
                    Постановка звуков, развитие лексики, грамматики, связной речи (4-6 месяцев)
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-primary bg-muted/30 rounded-r">
                  <h4 className="font-semibold mb-1">4. Закрепляющий этап</h4>
                  <p className="text-sm text-muted-foreground">
                    Автоматизация навыков, работа над беглостью речи (2-3 месяца)
                  </p>
                </div>
                <div className="p-4 border-l-4 border-l-secondary bg-muted/30 rounded-r">
                  <h4 className="font-semibold mb-1">5. Оценочный этап</h4>
                  <p className="text-sm text-muted-foreground">
                    Итоговая диагностика, анализ результатов, рекомендации (1-2 недели)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ClipboardList" className="text-secondary" />
                Структура занятия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Организационный момент (2-3 мин)</h4>
                    <p className="text-sm text-muted-foreground">Приветствие, настрой на занятие</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Артикуляционная гимнастика (5-7 мин)</h4>
                    <p className="text-sm text-muted-foreground">Подготовка речевого аппарата</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Основная часть (15-20 мин)</h4>
                    <p className="text-sm text-muted-foreground">Игры и упражнения по теме занятия</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Физкультминутка (3-5 мин)</h4>
                    <p className="text-sm text-muted-foreground">Динамическая пауза с речевым сопровождением</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Закрепление материала (5-7 мин)</h4>
                    <p className="text-sm text-muted-foreground">Повторение через игру</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Итог занятия (2-3 мин)</h4>
                    <p className="text-sm text-muted-foreground">Рефлексия, похвала, домашнее задание</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <CardTitle>Постановка целей</CardTitle>
              <CardDescription>SMART-подход</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span><strong>S</strong>pecific - Конкретные</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span><strong>M</strong>easurable - Измеримые</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span><strong>A</strong>chievable - Достижимые</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span><strong>R</strong>elevant - Релевантные</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span><strong>T</strong>ime-bound - Ограниченные во времени</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Lightbulb" size={24} className="text-secondary" />
              </div>
              <CardTitle>Принципы планирования</CardTitle>
              <CardDescription>Основные правила</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-secondary mt-1" />
                <span>Учет индивидуальных особенностей</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-secondary mt-1" />
                <span>Постепенное усложнение материала</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-secondary mt-1" />
                <span>Систематичность и последовательность</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-secondary mt-1" />
                <span>Наглядность и доступность</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-secondary mt-1" />
                <span>Активное вовлечение ребенка</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BarChart" size={24} className="text-accent" />
              </div>
              <CardTitle>Мониторинг прогресса</CardTitle>
              <CardDescription>Отслеживание динамики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-accent mt-1" />
                <span>Входная диагностика</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-accent mt-1" />
                <span>Промежуточный контроль (каждые 2-3 месяца)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-accent mt-1" />
                <span>Итоговая оценка результатов</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-accent mt-1" />
                <span>Ведение дневника наблюдений</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="text-accent mt-1" />
                <span>Корректировка программы по результатам</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileCheck" className="text-primary" />
              Документация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold">Обязательные документы:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Индивидуальная программа коррекции
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Планы занятий (на месяц/неделю)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Протоколы диагностики
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Дневник наблюдений
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Рекомендуемые материалы:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Картотека игр и упражнений
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Консультации для родителей
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Отчеты о проделанной работе
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="FileText" size={14} />
                    Рекомендации по дальнейшей работе
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
