import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Игровые методы в логопедии</h1>
                <p className="text-xs text-muted-foreground">Для специалистов по работе с детьми с ОНР</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => setActiveSection('methods')} className="text-sm font-medium hover:text-primary transition-colors">Методы</button>
              <button onClick={() => setActiveSection('materials')} className="text-sm font-medium hover:text-primary transition-colors">Материалы</button>
              <button onClick={() => setActiveSection('research')} className="text-sm font-medium hover:text-primary transition-colors">Исследования</button>
              <button onClick={() => setActiveSection('games')} className="text-sm font-medium hover:text-primary transition-colors">Примеры игр</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-5xl font-bold text-foreground leading-tight">
                Особенности использования игровых методов в работе с детьми с ОНР
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональная платформа для логопедов и специалистов по коррекции речевых нарушений
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button size="lg" onClick={() => setActiveSection('methods')} className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Изучить методы
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('games')} className="gap-2">
                  <Icon name="Gamepad2" size={20} />
                  Примеры игр
                </Button>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/7c48b961-fc93-4f30-aeab-bbc1e9630fbb/files/32ab0d28-a449-4bca-b1cd-a3bcbd0fb935.jpg" 
                    alt="Игровые методы в работе с детьми"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Игровой подход</CardTitle>
                  <CardDescription>Эффективные методы коррекции через игру</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Игровые методы позволяют создать комфортную среду для развития речевых навыков у детей с общим недоразвитием речи.
                  </p>
                  <Button variant="link" className="p-0" onClick={() => setActiveSection('methods')}>
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/7c48b961-fc93-4f30-aeab-bbc1e9630fbb/files/18f5ff59-23be-447d-b9bf-f204ed9fd952.jpg" 
                    alt="Результаты исследований"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Научная база</CardTitle>
                  <CardDescription>Исследования и доказательная практика</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Методики основаны на современных исследованиях и многолетнем опыте ведущих специалистов.
                  </p>
                  <Button variant="link" className="p-0" onClick={() => setActiveSection('research')}>
                    Изучить данные <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <section className="bg-card rounded-2xl p-8 border">
              <h3 className="text-3xl font-bold mb-8 text-center">Ключевые направления</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Brain" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold">Когнитивное развитие</h4>
                  <p className="text-sm text-muted-foreground">Стимуляция мышления через игровые задания</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MessageCircle" size={32} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold">Развитие речи</h4>
                  <p className="text-sm text-muted-foreground">Коррекция речевых нарушений</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <h4 className="font-semibold">Социализация</h4>
                  <p className="text-sm text-muted-foreground">Развитие коммуникативных навыков</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Smile" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold">Мотивация</h4>
                  <p className="text-sm text-muted-foreground">Повышение интереса к занятиям</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'methods' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="mb-2">Методология</Badge>
              <h2 className="text-4xl font-bold">Игровые методы коррекции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Систематизированные подходы к использованию игр в логопедической практике
              </p>
            </div>

            <Tabs defaultValue="communicative" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-2/3 mx-auto">
                <TabsTrigger value="communicative">Коммуникативные</TabsTrigger>
                <TabsTrigger value="didactic">Дидактические</TabsTrigger>
                <TabsTrigger value="role">Сюжетно-ролевые</TabsTrigger>
              </TabsList>
              
              <TabsContent value="communicative" className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" className="text-primary" />
                      Коммуникативные игры
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Направлены на развитие диалогической и монологической речи, формирование навыков общения.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Target" size={18} className="text-secondary" />
                          Цели
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                          <li>Развитие диалога</li>
                          <li>Расширение словарного запаса</li>
                          <li>Формирование фразовой речи</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="CheckCircle" size={18} className="text-accent" />
                          Преимущества
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                          <li>Естественная мотивация</li>
                          <li>Снижение тревожности</li>
                          <li>Активное вовлечение</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="didactic" className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" />
                      Дидактические игры
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Обучающие игры с четкими правилами, направленные на формирование конкретных речевых навыков.
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
                        </ul>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Zap" size={18} className="text-accent" />
                          Эффективность
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                          <li>Структурированность</li>
                          <li>Измеримый результат</li>
                          <li>Системность</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="role" className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Drama" className="text-primary" />
                      Сюжетно-ролевые игры
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Игры, в которых дети примеряют различные социальные роли и моделируют жизненные ситуации.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Users2" size={18} className="text-secondary" />
                          Социальный аспект
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                          <li>Понимание ролей</li>
                          <li>Эмпатия</li>
                          <li>Кооперация</li>
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
                          <li>Интонирование</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'materials' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="mb-2">Ресурсы</Badge>
              <h2 className="text-4xl font-bold">Материалы для специалистов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Практические инструменты и пособия для эффективной работы
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Методические пособия</CardTitle>
                  <CardDescription>Руководства и инструкции</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Подробные описания методик с примерами применения и конспектами занятий.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Скачать PDF</Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Image" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Наглядные материалы</CardTitle>
                  <CardDescription>Карточки и иллюстрации</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Готовые к печати наборы карточек для различных типов игр и упражнений.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Просмотреть</Button>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Video" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Видеоматериалы</CardTitle>
                  <CardDescription>Демонстрация методик</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Записи занятий и мастер-классы от ведущих специалистов в области логопедии.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Смотреть</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" className="text-primary" />
                  Комплект материалов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Полный набор инструментов для организации игровых занятий с детьми с ОНР
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Методички</Badge>
                  <Badge variant="secondary">Карточки</Badge>
                  <Badge variant="outline">Чек-листы</Badge>
                  <Badge>Планы занятий</Badge>
                </div>
                <Button className="gap-2">
                  <Icon name="Download" size={18} />
                  Скачать весь комплект
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'research' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="mb-2">Научная база</Badge>
              <h2 className="text-4xl font-bold">Исследования эффективности</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Доказательная база применения игровых методов в логопедии
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-accent" />
                    Статистика результатов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Улучшение фонематического слуха</span>
                      <span className="text-sm font-bold text-accent">87%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Расширение словарного запаса</span>
                      <span className="text-sm font-bold text-primary">92%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Развитие связной речи</span>
                      <span className="text-sm font-bold text-secondary">78%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Мотивация к занятиям</span>
                      <span className="text-sm font-bold text-accent">95%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" />
                    Ключевые исследования
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="study1">
                      <AccordionTrigger className="text-left">
                        Эффективность игровых методов (2023)
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Лонгитюдное исследование 200 детей с ОНР показало значительное улучшение речевых показателей при систематическом использовании игровых методик.
                        </p>
                        <Badge variant="outline" className="mr-2">Клиническое</Badge>
                        <Badge variant="outline">n=200</Badge>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="study2">
                      <AccordionTrigger className="text-left">
                        Мотивация и игровой подход (2022)
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Исследование выявило прямую корреляцию между использованием игр и уровнем вовлеченности детей в коррекционный процесс.
                        </p>
                        <Badge variant="outline" className="mr-2">Педагогическое</Badge>
                        <Badge variant="outline">n=150</Badge>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="study3">
                      <AccordionTrigger className="text-left">
                        Социализация через игру (2021)
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-2">
                          Анализ показал, что сюжетно-ролевые игры значительно улучшают коммуникативные навыки и социальную адаптацию.
                        </p>
                        <Badge variant="outline" className="mr-2">Психологическое</Badge>
                        <Badge variant="outline">n=120</Badge>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-secondary" />
                  Научные выводы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3 items-start">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <p className="text-sm">
                    Игровые методы повышают мотивацию детей к логопедическим занятиям на 95%
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <p className="text-sm">
                    Комплексное использование различных типов игр дает максимальный эффект
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
                  <p className="text-sm">
                    Регулярность применения игровых методик критически важна для достижения результата
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'games' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="mb-2">Практика</Badge>
              <h2 className="text-4xl font-bold">Примеры игр и упражнений</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Готовые к применению игровые методики для работы с детьми с ОНР
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Icon name="Ear" className="text-primary" />
                        Звуковое лото
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">Фонематика</Badge>
                        <Badge variant="outline">4-6 лет</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Игра на развитие фонематического слуха и звукового анализа слов.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Target" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Цель:</strong> различение звуков в начале слова
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Users" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Участники:</strong> 2-4 ребенка
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Длительность:</strong> 15-20 минут
                      </div>
                    </div>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger className="text-sm font-medium">
                        Подробное описание
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Материалы:</strong> карточки с картинками, фишки</p>
                        <p><strong>Ход игры:</strong> Логопед называет звук, дети находят картинки, начинающиеся на этот звук. За правильный ответ - фишка.</p>
                        <p><strong>Усложнение:</strong> поиск звука в середине или конце слова</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Icon name="ShoppingCart" className="text-primary" />
                        Магазин
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">Лексика</Badge>
                        <Badge variant="outline">5-7 лет</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Сюжетно-ролевая игра для расширения словарного запаса и развития диалогической речи.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Target" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Цель:</strong> использование слов-обобщений, вежливые формы
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Users" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Участники:</strong> 3-6 детей
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Длительность:</strong> 20-30 минут
                      </div>
                    </div>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger className="text-sm font-medium">
                        Подробное описание
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Материалы:</strong> игрушечные продукты, касса, деньги</p>
                        <p><strong>Роли:</strong> продавец, покупатели, кассир</p>
                        <p><strong>Речевые задачи:</strong> просьбы, описание товара, диалог</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Icon name="Puzzle" className="text-primary" />
                        Собери предложение
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">Грамматика</Badge>
                        <Badge variant="outline">5-7 лет</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Дидактическая игра для формирования грамматического строя речи.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Target" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Цель:</strong> правильное согласование слов в предложении
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Users" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Участники:</strong> индивидуально или пары
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Длительность:</strong> 10-15 минут
                      </div>
                    </div>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger className="text-sm font-medium">
                        Подробное описание
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Материалы:</strong> карточки со словами или картинками</p>
                        <p><strong>Ход игры:</strong> ребенок составляет предложения из разрозненных слов, соблюдая правильный порядок и согласование</p>
                        <p><strong>Варианты:</strong> усложнение длины предложений, работа с предлогами</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Icon name="BookMarked" className="text-primary" />
                        Расскажи историю
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="secondary">Связная речь</Badge>
                        <Badge variant="outline">6-8 лет</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Игра для развития навыков построения связного высказывания и пересказа.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Target" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Цель:</strong> последовательное изложение событий
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Users" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Участники:</strong> индивидуально или малая группа
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={16} className="text-accent mt-1" />
                      <div>
                        <strong>Длительность:</strong> 15-25 минут
                      </div>
                    </div>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-0">
                      <AccordionTrigger className="text-sm font-medium">
                        Подробное описание
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground space-y-2">
                        <p><strong>Материалы:</strong> сюжетные картинки, схемы-опоры</p>
                        <p><strong>Задачи:</strong> составление рассказа по серии картинок, пересказ услышанного</p>
                        <p><strong>Поддержка:</strong> использование вопросов, речевых клише</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
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
                    Адаптируйте сложность игры под уровень развития конкретного ребенка
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold text-sm">2</span>
                  </div>
                  <p className="text-sm pt-1">
                    Комбинируйте разные типы игр для комплексного воздействия
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold text-sm">3</span>
                  </div>
                  <p className="text-sm pt-1">
                    Поддерживайте позитивную атмосферу и поощряйте любые попытки ребенка
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2024 Игровые методы в логопедии</p>
            <p>Профессиональный ресурс для специалистов по работе с детьми с ОНР</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
