import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Destek', href: '/destek' },
    { name: 'Proje Danışmanlığı', href: '/proje-danismanligi' },
    { name: 'Anahtar Teslim Sera', href: '/anahtar-teslim-sera' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-text-primary">SeraGPT</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-link-hover ${
                    location.pathname === item.href
                      ? 'text-text-primary border-b-2 border-text-primary pb-4'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-text-secondary hover:text-text-primary p-2"
                aria-label="Open main menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-background-muted border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <span className="text-xl font-bold text-text-primary">SeraGPT</span>
              </Link>
              <p className="text-text-secondary text-sm leading-relaxed">
                Yapay zeka destekli sera teknolojileri ve danışmanlık hizmetleri ile tarımsal verimliliğinizi artırın.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2">
                <li><Link to="/proje-danismanligi" className="text-sm text-text-secondary hover:text-link-hover">Proje Danışmanlığı</Link></li>
                <li><Link to="/anahtar-teslim-sera" className="text-sm text-text-secondary hover:text-link-hover">Anahtar Teslim Sera</Link></li>
                <li><Link to="/destek" className="text-sm text-text-secondary hover:text-link-hover">Teknik Destek</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Kaynaklar</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-sm text-text-secondary hover:text-link-hover">Blog</Link></li>
                <li><Link to="/destek" className="text-sm text-text-secondary hover:text-link-hover">Destek Merkezi</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li className="text-sm text-text-secondary">info@seragpt.com</li>
                <li className="text-sm text-text-secondary">+90 XXX XXX XX XX</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-text-secondary text-center">
              © 2024 SeraGPT. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
