import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <section className="text-center max-w-4xl mx-auto space-y-6 mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-2">Профессиональная платформа</Badge>
          <h2 className="text-5xl font-bold text-foreground leading-tight">
            Особенности использования игровых методов в работе с детьми с ОНР
          </h2>
          <p className="text-xl text-muted-foreground">
            Комплексный ресурс для логопедов и специалистов по коррекции речевых нарушений
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" asChild className="gap-2">
              <Link to="/methods">
                <Icon name="BookOpen" size={20} />
                Изучить методы
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link to="/games">
                <Icon name="Gamepad2" size={20} />
                Примеры игр
              </Link>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Brain" size={24} className="text-primary" />
              </div>
              <CardTitle>Методики коррекции</CardTitle>
              <CardDescription>Проверенные игровые методы</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Систематизированные подходы к развитию речи через коммуникативные, дидактические и сюжетно-ролевые игры.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/methods">
                  Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Gamepad2" size={24} className="text-secondary" />
              </div>
              <CardTitle>Практические игры</CardTitle>
              <CardDescription>Готовые к применению</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Библиотека игр и упражнений с подробными инструкциями для разных возрастных групп.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/games">
                  Смотреть игры <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name="LineChart" size={24} className="text-accent" />
              </div>
              <CardTitle>Научная база</CardTitle>
              <CardDescription>Исследования эффективности</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Актуальные данные и статистика применения игровых методов в логопедической практике.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/research">
                  Изучить данные <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="bg-card rounded-2xl p-8 border mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Ключевые направления работы</h3>
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

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ClipboardList" size={20} className="text-primary" />
                Диагностика
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Методики оценки речевого развития</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/diagnostics">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-primary" />
                Планирование
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Составление программ занятий</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/planning">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users2" size={20} className="text-primary" />
                Возрастные группы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Особенности работы по возрастам</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/age-groups">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={20} className="text-primary" />
                Кейсы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Примеры успешной работы</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/case-studies">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Heart" size={20} className="text-primary" />
                Для родителей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Рекомендации для домашних занятий</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/parents">Перейти</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="GraduationCap" size={20} className="text-primary" />
                Для специалистов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Профессиональные материалы</p>
              <Button size="sm" variant="outline" asChild className="w-full">
                <Link to="/specialists">Перейти</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
