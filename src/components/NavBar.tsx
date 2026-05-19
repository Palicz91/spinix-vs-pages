import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { en: 'Home', hu: 'Fooldal', href: 'https://spinix.so/' },
  { en: 'Use Cases', hu: 'Felhasznalasi modok', href: 'https://spinix.so/use-cases/restaurants' },
  { en: 'Pricing', hu: 'Arak', href: 'https://spinix.so/pricing' },
  { en: 'Blog', hu: 'Blog', href: 'https://spinix.so/blog' },
  { en: 'Review Manager', hu: 'Review Manager', href: 'https://spinix.so/revix' },
];

export default function NavBar({ lang = 'en' }: { lang?: string }) {
  const [open, setOpen] = useState(false);
  const isHu = lang === 'hu';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://spinix.so/" className="flex items-center gap-2">
            <img src="https://spinix.so/favicon.png" alt="SpiniX" width={32} height={32} />
            <span className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>SpiniX</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                {isHu ? link.hu : link.en}
              </a>
            ))}
            <a
              href="https://spinix.so/auth?mode=login"
              className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition"
            >
              {isHu ? 'Bejelentkezes' : 'Sign In'}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                {isHu ? link.hu : link.en}
              </a>
            ))}
            <a href="https://spinix.so/auth?mode=login" className="block px-3 py-2 text-sm font-medium text-sky-600">
              {isHu ? 'Bejelentkezes' : 'Sign In'}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
