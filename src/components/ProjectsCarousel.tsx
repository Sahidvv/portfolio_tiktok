// components/ProjectsCarousel.tsx
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  languages: ReadonlyArray<string>;
  images: ReadonlyArray<string>;
  demoLink: string;
  repoLink: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ImageCarousel: React.FC<{ images: ReadonlyArray<string>; demoLink: string }> = ({ images, demoLink }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(imageTimer);
  }, [images]);

  return (
    <div className="overflow-hidden rounded-lg relative">
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <img
          src={images[imgIndex]}
          alt=""
          className="w-full h-48 md:h-64 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </a>

      {images.length > 1 && (
        <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === imgIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const getLanguageIcon = (lang: string): string | null => {
  const mapping: Record<string, string> = {
    React: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    MySQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'Next.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    i18next: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/I18next_logo.svg',
    SEO: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/SEO_icon.svg/512px-SEO_icon.svg.png',
  };
  return mapping[lang] || null;
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  useEffect(() => {
    const projectTimer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 25000);
    return () => clearInterval(projectTimer);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  if (!Array.isArray(projects) || projects.length === 0) return null;

  return (
    <div className="relative w-full md:px-16"> {/* padding en vez de margin */}
      {/* Botones de navegación - Desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex items-center justify-center
                   absolute left-4 md:left-8 top-1/2 -translate-y-1/2
                   bg-gray-800/70 text-white p-3 rounded-full
                   hover:bg-gray-800/90 transition-all duration-300 focus:outline-none z-30 shadow-lg"
        aria-label="Proyecto anterior"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex items-center justify-center
                   absolute right-4 md:right-8 top-1/2 -translate-y-1/2
                   bg-gray-800/70 text-white p-3 rounded-full
                   hover:bg-gray-800/90 transition-all duration-300 focus:outline-none z-30 shadow-lg"
        aria-label="Siguiente proyecto"
      >
        &#10095;
      </button>

      {/* Contenedor del carrusel (sin overflow que recorte el contenido de texto/botones) */}
      <div className="relative w-full min-h-[28rem] md:min-h-[30rem] overflow-visible py-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 flex flex-col items-center
              transition-opacity duration-700 ease-in-out
              ${index === current ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}
            `}
          >
            {/* Columna de contenido compartida (titulo + botones alineados) */}
            <div className="w-full max-w-2xl md:max-w-3xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-purple-500 text-left">
                {project.title}
              </h3>

              {/* Carrusel de imágenes */}
              <div className="w-full">
                <ImageCarousel images={project.images} demoLink={project.demoLink} />
              </div>

              <p className="opacity-80 mt-3 md:mt-4 text-left text-sm md:text-base">
                {project.description}
              </p>

              {/* Lenguajes */}
              <div className="mt-3 md:mt-4 flex flex-wrap justify-start gap-1 md:gap-2">
                {project.languages.map((lang, idx) => {
                  const icon = getLanguageIcon(lang);
                  return (
                    <div
                      key={idx}
                      className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs md:text-sm"
                    >
                      {icon && <img src={icon} alt={lang} className="w-3 h-3 md:w-4 md:h-4 mr-1" />}
                      <span>{lang}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA: alineados con el título (mismo contenedor y alineación a la izquierda) */}
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-full transition-colors duration-300 text-center text-sm md:text-base w-full sm:w-auto"
                >
                  Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 md:px-6 py-2 rounded-full transition-colors duration-300 text-center text-sm md:text-base w-full sm:w-auto"
                >
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles móviles */}
      <div className="md:hidden flex justify-center items-center mt-6 gap-4 px-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800/70 text-white p-3 rounded-full hover:bg-gray-800/90 transition-all duration-300 focus:outline-none shadow-lg flex-shrink-0"
          aria-label="Proyecto anterior"
        >
          &#10094;
        </button>

        <div className="flex gap-2 flex-shrink-0">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-purple-500 w-6' : 'bg-gray-400'
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-gray-800/70 text-white p-3 rounded-full hover:bg-gray-800/90 transition-all duration-300 focus:outline-none shadow-lg flex-shrink-0"
          aria-label="Siguiente proyecto"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
