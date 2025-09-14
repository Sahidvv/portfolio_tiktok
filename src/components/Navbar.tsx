// components/navbar.tsx
import React, { useState, useEffect, ReactNode } from 'react';
import { Moon, Sun, Globe, Menu, X, FileDown } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { useLanguageStore } from '../store/languageStore';
import { translations } from '../locales/translations';

type NavItem = 'inic' |'about' | 'skills' | 'projects' | 'certificates' | 'contact';

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { theme, toggleTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => { 
    const element = document.getElementById(id);
    const navbarHeight = 10; // 4rem
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const cvUrl = language === 'en' 
      ? 'documents/SasaVilic_CV_en.pdf' 
      : 'documents/SasaVilic_CV.pdf';
  
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = language === 'en' 
      ? 'SasaVilic_CV_en.pdf' 
      : 'SasaVilic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navItems: NavItem[] = ['inic', 'about', 'skills', 'projects', 'certificates', 'contact'];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-lg' : 'bg-opacity-0'
        }`}
        style={{ backgroundColor: 'var(--navbar-bg)' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold">Sahid Vilic</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {t[section]}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-cyan-500 transition-colors duration-300 flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                {t.downloadCV}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Switch Language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label={t.menu}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
                >
                  {t[section]}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-cyan-500 transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <FileDown className="w-4 h-4" />
                {t.downloadCV}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children && <div>{children}</div>}
    </>
  );
};
