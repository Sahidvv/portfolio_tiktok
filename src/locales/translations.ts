//locales/translatiosn.ts

export const translations = {
  en: {
    greeting: "Hi, I'm",
    name: "Sahid Vilic",
    role: "Full Stack Developer",
    description: "Passionate about creating beautiful and functional web applications",
    inic: "Home",
    about: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    webProjects: "Web Projects",
    businessWebsites: "Business Websites",
    project1: {
      title: "Inventor System",
      description:
        "Inventory management system developed with React on the frontend and Node.js on the backend, complemented with a Python module for generating reports and PDF files. Uses MySQL for efficient data storage and management.",
      languages: ["React", "Node.js", "Python", "MySQL"] as const,
      images: [
        "/images/inventor1.png",
        "/images/inventor2.png",
        "/images/inventor3.png"
      ],
      demoLink: "https://inventor-system.netlify.app/",
      repoLink: "https://www.linkedin.com/in/sahidvilic/"
    },
    project2: {
      title: "Arduino Panel",
      description:
        "Real-time temperature and humidity monitoring system, created with React for the frontend, Node.js for the backend and MySQL as the database. Includes functionality to generate PDF reports with historical data.",
      languages: ["React", "Node.js", "MySQL"] as const,
      images: [
        "/images/arduino1.png",
        "/images/arduino2.png",
        "/images/arduino3.png"
      ],
      demoLink: "https://frontarduino.netlify.app/",
      repoLink: "https://github.com/Sahidvv/arduino-fs"
    },
    businessWebsite1: {
      title: "Newton San Miguel",
      description:
        "Institutional website for Colegio Newton, developed with Next.js and optimized for SEO. Offers content in three languages and uses modern libraries to ensure optimal performance and a smooth experience.",
      languages: ["Next.js", "React", "i18next", "SEO"] as const,
      images: [
        "/images/newton1.png",
        "/images/newton2.png",
        "/images/newton3.png"
      ],
      demoLink: "https://www.newtonsanmiguel.com.pe/",
      repoLink: "https://www.linkedin.com/in/sahidvilic/"
    },
    businessWebsite2: {
      title: "3G Tech",
      description:
        "Beta landing page for a technology company, designed with Next.js and integrated with modern libraries. Provides an attractive and functional interface to showcase services and capture potential clients.",
      languages: ["Next.js", "React"] as const,
      images: [
        "/images/3gtech1.png",
        "/images/3gtech2.png",
        "/images/3gtech3.png"
      ],
      demoLink: "https://3gtech.vercel.app/",
      repoLink: "https://github.com/Sahidvv/3gtech"
    },
    contact: "Contact",
    certificates: "Certificates",
    downloadCV: "Download CV",
    aboutDescription: "I am a full stack developer passionate about creating interactive and functional web applications. I specialize in React and Node.js, and I'm constantly learning new technologies to improve my skills. My approach combines technical expertise with creative problem-solving to deliver efficient and user-friendly solutions.",
    experienceTitle: "Professional Experience",
    experienceItems: [
      {
        period: "Oct 2024 - Present",
        role: "IT Intern",
        company: "TDP Corp - Internship",
        description: [
          "Streamlined SAP Business One by organizing fields and optimizing table forms.",
          "Participation in the implementation of a CRM system that enhanced client and project management.",
          "Designed and developed a system to improve the workflow of a microservice dedicated to campaign creation.",
          "Technologies: Django/Python, SAP Business One, CRM platforms, microservices, process optimization."
        ]
      },
      {
        period: "Dec 2024 - Jan 2025",
        role: "Web Development",
        company: "Colegio Newton de San Miguel",
        description: [
          "Developed the school's website from scratch focusing on an intuitive structure and engaging educational content.",
          "Implemented SEO strategies to improve online visibility and designed a responsive site.",
          "Ensured intuitive navigation, appealing content, mobile compatibility, and fast load times.",
          "Technologies: Next.js, React, i18next, TypeScript, SEO and analysis."
        ]
      },
      {
        period: "Aug 2024 - Oct 2024",
        role: "FullStack Dev - Temperature and hhumidity Monitoring System",
        company: "University Project",
        description: [
          "Developed a real-time monitoring system using React and Node.js, integrating data from an Arduino into a database.",
          "Configured Arduino communication to capture and display temperature and humidity data.",
          "Implemented interactive charts and PDF report generation.",
          "Technologies: React, Node.js, Arduino, Recharts. Optimized user interfaces."
        ]
      },
      {
        period: "Jan 2024 - Jun 2024",
        role: "Technical Support",
        company: "Colegio Newton de San Miguel",
        description: [
          "Provided support to 12 users, resolving software issues, optimizing system performance, and ensuring operational continuity in the educational environment.",
          "Efficient problem solving, clear communication with non-technical users, and preventive maintenance.",
          "Technologies: Windows, Office, Excel (Macros), hardware diagnostics and repairs."
        ]
      }
    ],
    contactForm: {
      nameLabel: "Name",
      numberLabel: "Number",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send",
      submitting: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "There was an error sending the form. Please try again.",
    },
    madeWith: "Made with",
    by: "by",
    menu: "Menu"
  },
  es: {
    greeting: "Hola, soy",
    name: "Sahid Vilic",
    role: "Desarrollador Full Stack",
    description: "Apasionado por crear aplicaciones web hermosas y funcionales",
    about: "Sobre Mí",
    experience: "Experiencia",
    inic: "Inicio",
    skills: "Habilidades",
    projects: "Proyectos",
    webProjects: "Proyectos Web",
    businessWebsites: "Páginas Web Empresariales",
    project1: {
      title: "Inventor System",
      description:
        "Sistema de gestión de inventarios desarrollado con React en el frontend y Node.js en el backend, complementado con un módulo en Python para generar reportes y archivos PDF. Utiliza MySQL como base de datos para almacenar y gestionar información de forma eficiente.",
      languages: ["React", "Node.js", "Python", "MySQL"] as const,
      images: [
        "/images/inventor1.png",
        "/images/inventor2.png",
        "/images/inventor3.png"
      ],
      demoLink: "https://inventor-system.netlify.app/",
      repoLink: "https://www.linkedin.com/in/sahidvilic/"
    },
    project2: {
      title: "Arduino Panel",
      description:
        "Sistema de monitoreo en tiempo real de temperatura y humedad, creado con React para el frontend, Node.js para el backend y MySQL como base de datos. Incluye funcionalidad para generar reportes en PDF con datos históricos.",
      languages: ["React", "Node.js", "MySQL"] as const,
      images: [
        "/images/arduino1.png",
        "/images/arduino2.png",
        "/images/arduino3.png"
      ],
      demoLink: "https://frontarduino.netlify.app/",
      repoLink: "https://github.com/Sahidvv/arduino-fs"
    },
    businessWebsite1: {
      title: "Newton San Miguel",
      description:
        "Sitio web institucional del Colegio Newton, desarrollado con Next.js y optimizado para SEO. Ofrece contenido en tres idiomas y utiliza librerías modernas para garantizar un rendimiento óptimo y una experiencia fluida.",
      languages: ["Next.js", "React", "i18next", "SEO"] as const,
      images: [
        "/images/newton1.png",
        "/images/newton2.png",
        "/images/newton3.png"
      ],
      demoLink: "https://www.newtonsanmiguel.com.pe/",
      repoLink: "https://www.linkedin.com/in/sahidvilic/"
    },
    businessWebsite2: {
      title: "3G Tech",
      description:
        "Landing page en versión beta para una empresa tecnológica, diseñada con Next.js e integrada con librerías modernas. Proporciona una interfaz atractiva y funcional para presentar servicios y captar clientes potenciales.",
      languages: ["Next.js", "React"] as const,
      images: [
        "/images/3gtech1.png",
        "/images/3gtech2.png",
        "/images/3gtech3.png"
      ],
      demoLink: "https://3gtech.vercel.app/",
      repoLink: "https://github.com/Sahidvv/3gtech"
    },
    contact: "Contacto",
    certificates: "Certificados",
    downloadCV: "Descargar CV",
    aboutDescription: "Soy un desarrollador fullstack con pasión por crear aplicaciones web interactivas y funcionales. Me especializo en React y Node.js, y estoy siempre aprendiendo nuevas tecnologías para mejorar mis habilidades. Mi enfoque combina experiencia técnica con resolución creativa de problemas para entregar soluciones eficientes y amigables para el usuario.",
    experienceTitle: "Experiencia Profesional",
    experienceItems: [
      {
        period: "Oct 2024 - Actualidad",
        role: "Practicante de TI",
        company: "TDP Corp - Practicas Pre.",
        description: [
          "Organicé campos en SAP Business One y optimicé formularios de tablas para mejorar la eficiencia del sistema.",
          "Participacion en la implementacion de un sistema CRM que fortaleció la gestión de clientes y proyectos.",
          "Diseñé y desarrollé un sistema para mejorar el flujo de un microservicio destinado a la creación de campañas.",
          "Tecnologías: Django/Python, SAP Business One, plataformas CRM, microservicios, optimización de procesos."
        ]
      },
      {
        period: "Dic 2024 - Ene 2025",
        role: "Desarrollo Web",
        company: "Colegio Newton de San Miguel",
        description: [
          "Desarrollé desde cero el sitio web del Colegio Newton, enfocándome en una estructura intuitiva y contenido educativo atractivo.",
          "Implementé estrategias SEO para mejorar la visibilidad online y diseñé un sitio responsivo.",
          "Aseguré una navegación intuitiva, contenido atractivo, compatibilidad con dispositivos móviles y velocidad de carga óptima.",
          "Tecnologías: Next.js, React, i18next, TypeScript, SEO y análisis."
        ]
      },
      {
        period: "Ago 2024 - Oct 2024",
        role: "FullStack Dev - Sistema de Monitoreo de Temperatura y humedad",
        company: "Proyecto Universitario",
        description: [
          "Creé un sistema de monitoreo en tiempo real con React y Node.js, integrando datos de un Arduino a una base de datos.",
          "Configuré la comunicación con Arduino para capturar y visualizar datos de temperatura y humedad.",
          "Implementé gráficos interactivos y generación de reportes en PDF.",
          "Tecnologías: React, Node.js, Arduino, Recharts, optimización de interfaces de usuario."
        ]
      },
      
      {
        period: "Ene 2024 - Jun 2024",
        role: "Soporte Técnico",
        company: "Colegio Newton de San Miguel",
        description: [
          "Proporcioné soporte a doce usuarios, resolviendo incidencias de software, optimizando el rendimiento de sistemas y asegurando la continuidad operativa del entorno educativo.",
          "Resolución eficiente de problemas técnicos, comunicación clara con usuarios no técnicos y mantenimiento preventivo de equipos.",
          "Tecnologías: Windows, Office, Excel (Macros), diagnóstico y reparación de hardware."
        ]
      }
    ],
    contactForm: {
      nameLabel: "Nombre",
      numberLabel: "Número",
      emailLabel: "Correo Electrónico",
      messageLabel: "Mensaje",
      submitButton: "Enviar",
      submitting: "Enviando...",
      successMessage: "¡Mensaje enviado exitosamente!",
      errorMessage: "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.",
    },
    madeWith: "Hecho con",
    by: "por",
    menu: "Menú"
  },
} as const;
