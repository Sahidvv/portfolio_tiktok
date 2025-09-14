import { Globe } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="fixed top-4 right-4 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
      aria-label="Switch Language"
    >
      <Globe className="w-6 h-6 text-gray-200" />
      <span className="ml-2 text-gray-200">{language.toUpperCase()}</span>
    </button>
  );
};