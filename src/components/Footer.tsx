import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { translations } from '../locales/translations';

export const Footer = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <footer className="py-12 mt-20" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com/Sahidvv" className="hover:text-cyan-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sahidvilic/" className="hover:text-cyan-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sahidvilic.wh@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <p className="flex items-center text-sm">
            {t.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500" /> {t.by} SahidScript
          </p>
        </div>
      </div>
    </footer>
  );
};