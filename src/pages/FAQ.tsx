import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function FAQ() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Помощь</Badge>
          <h1 className="text-4xl font-bold">Часто задаваемые вопросы</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы об игровых методах в логопедии
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="HelpCircle" className="text-primary" />
                Общие вопросы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>Что такое ОНР?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      ОНР (общее недоразвитие речи) — это сложное речевое расстройство, при котором нарушены все 
                      компоненты речевой системы: звукопроизношение, фонематический слух, словарь, грамматический строй 
                      и связная речь при нормальном слухе и интеллекте.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>В каком возрасте начинать коррекцию?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Начинать коррекционную работу рекомендуется как можно раньше, оптимально с 3-4 лет. Ранняя 
                      диагностика и своевременное начало занятий значительно повышают эффективность коррекции и 
                      улучшают прогноз.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>Почему именно игровые методы?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Игра — ведущий вид деятельности дошкольника. Игровые методы обеспечивают естественную 
                      мотивацию, снижают тревожность, создают эмоционально комфортную обстановку и делают процесс 
                      обучения более эффективным. Дети не устают на занятиях и с удовольствием выполняют задания.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4">
                  <AccordionTrigger>Сколько длится коррекция?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Длительность зависит от уровня ОНР и индивидуальных особенностей ребенка. В среднем: ОНР I уровня 
                      — 1,5-2 года, II уровня — 1-1,5 года, III уровня — 6-10 месяцев при регулярных занятиях 
                      3-4 раза в неделю.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Gamepad2" className="text-secondary" />
                Об играх и методах
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="m1">
                  <AccordionTrigger>Какие игры самые эффективные?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Нет универсально эффективных игр. Выбор зависит от целей занятия, возраста и особенностей ребенка. 
                      Наиболее результативен комплексный подход с сочетанием коммуникативных, дидактических и 
                      сюжетно-ролевых игр.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="m2">
                  <AccordionTrigger>Как часто менять игры?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Рекомендуется варьировать игры на каждом занятии, но при этом периодически возвращаться к уже 
                      знакомым для закрепления навыков. Оптимально использовать 3-4 разные игры за одно занятие с 
                      обновлением материала каждые 2-3 недели.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="m3">
                  <AccordionTrigger>Можно ли заниматься только дома?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Домашние занятия очень важны, но не могут полностью заменить профессиональную помощь логопеда. 
                      Оптимальный вариант — сочетание регулярных занятий со специалистом и ежедневных игровых упражнений 
                      дома под руководством родителей.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="m4">
                  <AccordionTrigger>Что делать, если ребенок не хочет играть?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Найдите то, что интересно именно вашему ребенку. Используйте любимые игрушки, персонажей мультфильмов. 
                      Не настаивайте насильно, сделайте перерыв. Пробуйте разные виды игр. Хвалите за любые, даже 
                      минимальные успехи.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" className="text-accent" />
                Для родителей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="p1">
                  <AccordionTrigger>Как поддерживать ребенка дома?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Создайте благоприятную речевую среду: много общайтесь, читайте, комментируйте действия. 
                      Выполняйте рекомендации логопеда, играйте в речевые игры ежедневно по 10-15 минут. 
                      Хвалите ребенка, радуйтесь каждому успеху, не акцентируйте внимание на неудачах.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="p2">
                  <AccordionTrigger>Нужны ли специальные пособия дома?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Необязательно покупать дорогие пособия. Достаточно иметь детские книги с картинками, простые 
                      настольные игры (лото, домино), цветную бумагу, пластилин. Многие материалы можно изготовить 
                      самостоятельно или скачать из интернета и распечатать.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="p3">
                  <AccordionTrigger>Как не навредить самостоятельными занятиями?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Следуйте рекомендациям логопеда, не пытайтесь самостоятельно ставить звуки. Не ругайте за ошибки, 
                      не передразнивайте неправильное произношение. Не перегружайте ребенка занятиями. Если что-то не 
                      получается, обратитесь за консультацией к специалисту.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="GraduationCap" className="text-primary" />
                Для специалистов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="s1">
                  <AccordionTrigger>Как подбирать игры для конкретного ребенка?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Основывайтесь на результатах диагностики, учитывайте зону ближайшего развития. Выбирайте игры, 
                      соответствующие возрасту и интересам ребенка. Адаптируйте сложность под текущий уровень. 
                      Наблюдайте за реакцией и корректируйте план занятий.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="s2">
                  <AccordionTrigger>Сколько времени уделять игре на занятии?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Для дошкольников игра должна составлять 70-90% времени занятия. Чем младше ребенок, тем больше 
                      доля игровых методов. Даже традиционные упражнения следует подавать в игровой форме. Чередуйте 
                      активные и спокойные игры.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="s3">
                  <AccordionTrigger>Как документировать игровые занятия?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      В конспекте указывайте: название игры, цель, оборудование, ход игры. В дневнике отмечайте 
                      реакцию ребенка, трудности, успехи. Периодически фиксируйте динамику в речевой карте. 
                      Фотографируйте результаты творческих работ для портфолио.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" className="text-primary" />
              Не нашли ответ на свой вопрос?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Свяжитесь с нами, и мы обязательно поможем!
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="text-primary" />
                <span>info@logopedy.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageSquare" size={18} className="text-primary" />
                <span>Онлайн-консультация</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
