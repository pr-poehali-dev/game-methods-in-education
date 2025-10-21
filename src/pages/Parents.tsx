import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Parents() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Для родителей</Badge>
          <h1 className="text-4xl font-bold">Рекомендации для домашних занятий</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Как помочь ребенку развивать речь в домашних условиях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <CardTitle>Чтение вслух</CardTitle>
              <CardDescription>Развитие слухового восприятия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Читайте ребенку каждый день по 15-20 минут, обсуждайте прочитанное, задавайте вопросы.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Выбирайте яркие книги с картинками</li>
                <li>Читайте с выражением</li>
                <li>Просите пересказать услышанное</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </div>
              <CardTitle>Разговоры по дороге</CardTitle>
              <CardDescription>Расширение словаря</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Используйте время прогулок для развития речи, обсуждая всё вокруг.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Называйте предметы, цвета, формы</li>
                <li>Описывайте действия людей</li>
                <li>Придумывайте истории</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Mic" size={24} className="text-accent" />
              </div>
              <CardTitle>Пение и стихи</CardTitle>
              <CardDescription>Ритм и интонация</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Разучивайте песенки, потешки, стихи для развития памяти и артикуляции.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Начинайте с простых четверостиший</li>
                <li>Используйте жесты и движения</li>
                <li>Повторяйте многократно</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Utensils" size={24} className="text-primary" />
              </div>
              <CardTitle>Бытовые ситуации</CardTitle>
              <CardDescription>Практическое применение</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Привлекайте ребенка к домашним делам, комментируя действия.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Готовка: названия продуктов, действий</li>
                <li>Уборка: предметы, их назначение</li>
                <li>Одевание: части одежды, действия</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Gamepad2" size={24} className="text-secondary" />
              </div>
              <CardTitle>Настольные игры</CardTitle>
              <CardDescription>Игровое обучение</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Играйте в лото, домино, простые настольные игры с речевым сопровождением.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Проговаривайте правила</li>
                <li>Обсуждайте ход игры</li>
                <li>Радуйтесь успехам</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Palette" size={24} className="text-accent" />
              </div>
              <CardTitle>Творчество</CardTitle>
              <CardDescription>Развитие моторики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Рисуйте, лепите, делайте аппликации с речевым сопровождением.
              </p>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Описывайте процесс создания</li>
                <li>Называйте цвета, материалы</li>
                <li>Придумывайте истории про рисунки</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="AlertTriangle" className="text-destructive" />
              Чего следует избегать
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не ругайте за ошибки</h4>
                    <p className="text-sm text-muted-foreground">Это снижает мотивацию и вызывает страх говорить</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не торопите ребенка</h4>
                    <p className="text-sm text-muted-foreground">Дайте время сформулировать мысль</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не сравнивайте с другими</h4>
                    <p className="text-sm text-muted-foreground">Каждый ребенок развивается в своем темпе</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не заканчивайте за ребенка</h4>
                    <p className="text-sm text-muted-foreground">Позвольте самостоятельно выразить мысль</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не перегружайте занятиями</h4>
                    <p className="text-sm text-muted-foreground">Лучше короткие, но регулярные упражнения</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="X" size={18} className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Не игнорируйте неправильное произношение</h4>
                    <p className="text-sm text-muted-foreground">Мягко поправляйте, показывая образец</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" className="text-primary" />
              Часто задаваемые вопросы родителей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Как часто заниматься дома?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Рекомендуется заниматься каждый день по 10-15 минут. Лучше короткие регулярные занятия, 
                    чем редкие, но долгие. Главное — системность и позитивный настрой.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Когда ждать результатов?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Первые результаты можно заметить через 1-2 месяца регулярных занятий. Значительный прогресс 
                    обычно виден через 3-6 месяцев. Важно помнить, что каждый ребенок индивидуален.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Что делать, если ребенок не хочет заниматься?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Превращайте занятия в игру, найдите мотивацию через интересы ребенка. Не настаивайте насильно, 
                    лучше сделать перерыв и вернуться позже. Хвалите за любые успехи.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Нужно ли исправлять все ошибки сразу?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Нет, концентрируйтесь на 1-2 конкретных задачах за раз. Переход к новому только после 
                    освоения предыдущего. Не перебивайте ребенка постоянными исправлениями.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
