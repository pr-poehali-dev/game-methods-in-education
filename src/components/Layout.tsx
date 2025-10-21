import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/methods', label: 'Методы' },
    { path: '/games', label: 'Игры' },
    { path: '/exercises', label: 'Упражнения' },
    { path: '/materials', label: 'Материалы' },
    { path: '/research', label: 'Исследования' },
    { path: '/diagnostics', label: 'Диагностика' },
    { path: '/planning', label: 'Планирование' },
    { path: '/age-groups', label: 'Возрастные группы' },
    { path: '/case-studies', label: 'Кейсы' },
    { path: '/parents', label: 'Для родителей' },
    { path: '/specialists', label: 'Для специалистов' },
    { path: '/tools', label: 'Инструменты' },
    { path: '/faq', label: 'Вопросы и ответы' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Игровые методы в логопедии</h1>
                <p className="text-xs text-muted-foreground">Для специалистов по работе с детьми с ОНР</p>
              </div>
            </Link>

            <nav className="hidden lg:flex gap-1 items-center flex-wrap justify-end max-w-2xl">
              {navItems.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" />
                О проекте
              </h3>
              <p className="text-sm text-muted-foreground">
                Профессиональный ресурс для логопедов и специалистов по работе с детьми с общим недоразвитием речи.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/methods" className="text-muted-foreground hover:text-primary">Методы</Link></li>
                <li><Link to="/games" className="text-muted-foreground hover:text-primary">Игры</Link></li>
                <li><Link to="/materials" className="text-muted-foreground hover:text-primary">Материалы</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@logopedy.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t">
            <p>© 2024 Игровые методы в логопедии. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
