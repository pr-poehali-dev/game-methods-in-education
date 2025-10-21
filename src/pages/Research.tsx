import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Research() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Научная база</Badge>
          <h1 className="text-4xl font-bold">Исследования эффективности</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Доказательная база применения игровых методов в логопедии
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
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
                Игровые методы повышают мотивацию детей к логопедическим занятиям на 95% по сравнению с традиционными подходами
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
              <p className="text-sm">
                Комплексное использование различных типов игр дает максимальный эффект в коррекции всех компонентов речи
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
              <p className="text-sm">
                Регулярность применения игровых методик (не менее 3-4 раз в неделю) критически важна для достижения устойчивого результата
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <Icon name="CheckCircle2" className="text-accent mt-1" size={20} />
              <p className="text-sm">
                Индивидуализация игровых заданий с учетом зоны ближайшего развития ребенка повышает эффективность коррекции на 40%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
