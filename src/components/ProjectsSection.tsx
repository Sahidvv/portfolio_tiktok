// components/ProjectsSection.tsx
import ProjectsCarousel from './ProjectsCarousel';
import { useLanguageStore } from '../store/languageStore';
import { getProjectsData } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const projectsData = getProjectsData(language);

  return (
    <div className="space-y-16">
      {/* Proyectos Web */}
      <div>
        <h3 className="text-3xl font-semibold mb-10 text-cyan-400">
          {language === 'en' ? 'Web Projects' : 'Proyectos Web'}
        </h3>
        <ProjectsCarousel projects={projectsData.webProjects} />
      </div>

      {/* Páginas Web Empresariales */}
      <div>
        <h3 className="text-3xl font-semibold mb-12 text-cyan-400">
          {language === 'en' ? 'Business Websites' : 'Páginas Web Empresariales'}
        </h3>
        <ProjectsCarousel projects={projectsData.businessWebsites} />
      </div>
    </div>
  );
};

export default ProjectsSection;
