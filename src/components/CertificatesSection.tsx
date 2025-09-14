import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Google Data Analytics",
    issuer: "Google",
    date: "Ago. 2025",
    image: "/certificates/google-data-analytics.jpeg",
    description: "Certificación en análisis de datos con Google, cubriendo herramientas y técnicas de análisis."
  },
  {
    id: 2,
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "Jul. 2025",
    image: "/certificates/foundations-project-management.jpeg",
    description: "Fundamentos de gestión de proyectos con metodologías y herramientas profesionales."
  },
  {
    id: 3,
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Jul. 2025",
    image: "/certificates/js-algorithms-legacy.png",
    description: "Algoritmos y estructuras de datos en JavaScript con enfoque en programación funcional."
  },
  {
    id: 4,
    title: "Project Initiation: Starting a Successful Project",
    issuer: "Google",
    date: "Jul. 2025",
    image: "/certificates/project-initiation.jpeg",
    description: "Iniciación de proyectos exitosos con planificación estratégica y gestión de stakeholders."
  },
  {
    id: 5,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jul. 2025",
    image: "/certificates/responsive-web-design.png",
    description: "Diseño web responsivo con HTML5, CSS3 y técnicas modernas de desarrollo frontend."
  },
  {
    id: 6,
    title: "Google Project Management",
    issuer: "Google",
    date: "2025",
    image: "/certificates/google-project-management.png",
    description: "Certificación completa en gestión de proyectos con metodologías ágiles y tradicionales."
  }
];

const CertificatesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Navigation Arrows - Desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/3 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <ChevronLeftIcon className="w-6 h-6 text-purple-500" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/3 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <ChevronRightIcon className="w-6 h-6 text-purple-500" />
        </button>

        {/* Certificate Display */}
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((certificate) => (
              <div key={certificate.id} className="w-full flex-shrink-0">
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => openModal(certificate)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3MCAyMDBIMjMwTDIwMCAxNTBaIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiMzNzQxNTEiLz4KPHRleHQgeD0iMjAwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VydGlmaWNhdGU8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                  
                  {/* Overlay with certificate info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                      <p className="text-sm opacity-90">{certificate.issuer} • {certificate.date}</p>
                      <p className="text-xs mt-2 opacity-75">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Info Below Image */}
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
            {certificates[currentIndex].title}
          </h3>
          <p className="text-lg opacity-80" style={{ color: 'var(--text)' }}>
            {certificates[currentIndex].issuer} • {certificates[currentIndex].date}
          </p>
          {certificates[currentIndex].description && (
            <p className="text-sm mt-3 opacity-70 max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              {certificates[currentIndex].description}
            </p>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center mt-4 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronLeftIcon className="w-5 h-5 text-purple-500" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <ChevronRightIcon className="w-5 h-5 text-purple-500" />
          </button>
        </div>
      </div>

      {/* Modal for Certificate Details */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-300"
            >
              <XMarkIcon className="w-6 h-6 text-purple-500" />
            </button>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3MCAyMDBIMjMwTDIwMCAxNTBaIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiMzNzQxNTEiLz4KPHRleHQgeD0iMjAwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VydGlmaWNhdGU8L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-lg text-white/80 mb-2">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
                {selectedCertificate.credentialId && (
                  <p className="text-sm text-white/60 mb-4">
                    ID de credencial: {selectedCertificate.credentialId}
                  </p>
                )}
                {selectedCertificate.description && (
                  <p className="text-white/70">
                    {selectedCertificate.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;