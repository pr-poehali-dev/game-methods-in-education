import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Materials() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-2">Ресурсы</Badge>
          <h1 className="text-4xl font-bold">Материалы для специалистов</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Практические инструменты и пособия для эффективной работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0 mb-8">
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
              <Badge variant="secondary">Диагностические материалы</Badge>
            </div>
            <Button className="gap-2">
              <Icon name="Download" size={18} />
              Скачать весь комплект
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Тематические наборы карточек</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Фрукты и овощи</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Животные</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Профессии</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Транспорт</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Конспекты занятий</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Развитие фонематического слуха</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Формирование лексики</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Грамматический строй</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-muted rounded">
                <span className="text-sm">Связная речь</span>
                <Button size="sm" variant="ghost"><Icon name="Download" size={16} /></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
