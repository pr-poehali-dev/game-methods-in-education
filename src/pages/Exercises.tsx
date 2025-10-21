import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Exercises() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Практические задания</Badge>
          <h1 className="text-4xl font-bold">Упражнения для развития речи</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексы упражнений для коррекции различных компонентов речи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Volume2" size={24} className="text-primary" />
              </div>
              <CardTitle>Артикуляционная гимнастика</CardTitle>
              <CardDescription>Подготовка речевого аппарата</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Улыбка-Трубочка:</strong> чередование широкой улыбки и вытягивания губ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Часики:</strong> движения языка вправо-влево</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Качели:</strong> движения языка вверх-вниз</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">Выполнять ежедневно по 5-7 минут перед занятиями</p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Wind" size={24} className="text-secondary" />
              </div>
              <CardTitle>Дыхательные упражнения</CardTitle>
              <CardDescription>Формирование речевого дыхания</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Задуй свечу:</strong> долгий плавный выдох</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Фокус:</strong> сдувание ватки с носа</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Буря в стакане:</strong> дутье через трубочку</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">По 3-5 повторений, избегать головокружения</p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Hand" size={24} className="text-accent" />
              </div>
              <CardTitle>Пальчиковая гимнастика</CardTitle>
              <CardDescription>Развитие мелкой моторики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Замок:</strong> переплетение пальцев рук</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Колечки:</strong> соединение большого пальца с остальными</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Человечек:</strong> «ходьба» пальцами</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">Сопровождать стихами и потешками</p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Music" size={24} className="text-primary" />
              </div>
              <CardTitle>Фонематический слух</CardTitle>
              <CardDescription>Различение звуков речи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Поймай звук:</strong> хлопок при услышанном звуке</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Цепочка слов:</strong> подбор слов на заданный звук</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-primary" />
                  <span><strong>Где звук:</strong> определение позиции звука в слове</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">От простых гласных к сложным согласным</p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Type" size={24} className="text-secondary" />
              </div>
              <CardTitle>Слоговая структура</CardTitle>
              <CardDescription>Работа со слогами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Прошагай слово:</strong> деление на слоги с шагами</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Телеграф:</strong> отстукивание слоговой структуры</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-secondary" />
                  <span><strong>Собери слово:</strong> синтез слова из слогов</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">Постепенное усложнение слоговой структуры</p>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookA" size={24} className="text-accent" />
              </div>
              <CardTitle>Словарный запас</CardTitle>
              <CardDescription>Расширение лексикона</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Назови одним словом:</strong> обобщающие понятия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Скажи наоборот:</strong> подбор антонимов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Dot" size={16} className="mt-1 text-accent" />
                  <span><strong>Скажи по-другому:</strong> синонимы и описания</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground italic">Работа по лексическим темам</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" className="text-primary" />
              Принципы эффективных упражнений
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="CheckCircle" size={18} className="text-accent" />
                  Систематичность
                </h4>
                <p className="text-sm text-muted-foreground">
                  Регулярное выполнение упражнений дает лучший результат, чем редкие интенсивные занятия
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="CheckCircle" size={18} className="text-accent" />
                  Постепенность
                </h4>
                <p className="text-sm text-muted-foreground">
                  Переход от простого к сложному с учетом зоны ближайшего развития ребенка
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="CheckCircle" size={18} className="text-accent" />
                  Игровая форма
                </h4>
                <p className="text-sm text-muted-foreground">
                  Включение упражнений в игровой сюжет повышает мотивацию и эффективность
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon name="CheckCircle" size={18} className="text-accent" />
                  Положительное подкрепление
                </h4>
                <p className="text-sm text-muted-foreground">
                  Похвала и поддержка даже за небольшие успехи стимулируют прогресс
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
