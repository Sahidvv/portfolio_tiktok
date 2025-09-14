// App.tsx
import { useEffect, useState } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SkillCard } from './components/SkillCard';
import { Section } from './components/Section';
import { SocialLinks } from './components/SocialLinks';
import { useLanguageStore } from './store/languageStore';
import { useThemeStore } from './store/themeStore';
import { translations } from './locales/translations';
import { skillsData } from './data/skills';
import { ExperienceSection } from './components/ExperienceSection';
import ContactForm from './components/ContactForm';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';

import Typewriter from 'typewriter-effect';

import './styles/theme.css';

function App() {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();
  const t = translations[language];

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setShouldAnimate(false);
    const timer = setTimeout(() => {
      setShouldAnimate(true); 
    }, 50); 

    return () => clearTimeout(timer); 
  }, [language]);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
    >
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4" id="inic">
          <div className="text-center">
            {shouldAnimate && (
              <>
                <p className="text-xl mb-2 text-cyan-400">
                  <Typewriter
                    options={{
                      strings: [t.greeting],
                      autoStart: true,
                      loop: false, 
                      deleteSpeed: Infinity, 
                      delay: 75, 
                    }}
                  />
                </p>
                <h1 className="text-6xl font-bold mb-4 text-purple-500">
                  <Typewriter
                    options={{
                      strings: [t.name],
                      autoStart: true,
                      loop: false,
                      deleteSpeed: Infinity, 
                    }}
                  />
                </h1>
              </>
            )}
            <h2 className="text-3xl text-cyan-400 mb-6">{t.role}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">{t.description}</p>
            <SocialLinks />
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-28">
          <Section id="about" title={t.about}>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-justify" style={{ color: 'var(--text)' }}>
              {t.aboutDescription}
            </p>
            <ExperienceSection />
          </Section>

          <Section id="skills" title={t.skills}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {Object.values(skillsData).map((category) => (
                <SkillCard key={category.title} title={category.title} skills={category.skills} />
              ))}
            </div>
          </Section>

          <Section id="projects" title={t.projects}>
            <ProjectsSection />
          </Section>

          <Section id="certificates" title={t.certificates}>
            <CertificatesSection />
          </Section>

          <Section id="contact" title={t.contact}>
            <ContactForm />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
