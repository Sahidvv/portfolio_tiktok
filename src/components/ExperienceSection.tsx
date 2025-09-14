// components/ExperienceSection.tsx
import { useLanguageStore } from '../store/languageStore';
import { translations } from '../locales/translations';

export const ExperienceSection = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className="mt-8 md:mt-12">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-purple-500 text-center md:text-left">{t.experienceTitle}</h3>
      <div className="space-y-4 md:space-y-8">
        {t.experienceItems.map((item, index) => (
          <div
            key={index}
            className="bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
              <h4 className="text-lg md:text-xl font-semibold text-purple-500 mb-1 md:mb-0">{item.role}</h4>
              <span className="text-cyan-400 text-sm md:text-base">{item.period}</span>
            </div>
            <div className="text-base md:text-lg font-medium mb-2 text-center md:text-left">{item.company}</div>
            <div className="opacity-80 text-sm md:text-base">
              {Array.isArray(item.description) ? (
                <ul className="list-disc pl-4 md:pl-5 space-y-1">
                  {item.description.map((line, i) => (
                    <li key={i} className="leading-relaxed">{line}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
