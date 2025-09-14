import { translations } from '../locales/translations';

interface Project {
  title: string;
  description: string;
  languages: ReadonlyArray<string>;
  images: ReadonlyArray<string>;   // Cambiado a ReadonlyArray<string>
  demoLink: string;
  repoLink: string;
}

interface ProjectsData {
  webProjects: Project[];
  businessWebsites: Project[];
}

export const getProjectsData = (
  language: keyof typeof translations
): ProjectsData => ({
  webProjects: [
    {
      title: translations[language].project1.title,
      description: translations[language].project1.description,
      languages: translations[language].project1.languages,
      images: translations[language].project1.images,
      demoLink: translations[language].project1.demoLink,
      repoLink: translations[language].project1.repoLink,
    },
    {
      title: translations[language].project2.title,
      description: translations[language].project2.description,
      languages: translations[language].project2.languages,
      images: translations[language].project2.images,
      demoLink: translations[language].project2.demoLink,
      repoLink: translations[language].project2.repoLink,
    },
    // Agrega aquí más proyectos web si lo deseas
  ],
  businessWebsites: [
    {
      title: translations[language].businessWebsite1.title,
      description: translations[language].businessWebsite1.description,
      languages: translations[language].businessWebsite1.languages,
      images: translations[language].businessWebsite1.images,
      demoLink: translations[language].businessWebsite1.demoLink,
      repoLink: translations[language].businessWebsite1.repoLink,
    },
    {
      title: translations[language].businessWebsite2.title,
      description: translations[language].businessWebsite2.description,
      languages: translations[language].businessWebsite2.languages,
      images: translations[language].businessWebsite2.images,
      demoLink: translations[language].businessWebsite2.demoLink,
      repoLink: translations[language].businessWebsite2.repoLink,
    },
    // Agrega aquí más páginas web empresariales si lo deseas
  ],
});
