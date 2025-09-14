# 🚀 Portafolio Personal Moderno

¡Bienvenido! Este es un portafolio web moderno y completamente funcional, perfecto para desarrolladores que quieren mostrar sus proyectos de manera profesional. **¿Vienes de TikTok?** ¡Genial! Este proyecto está diseñado para que puedas personalizarlo fácilmente y crear tu propio portafolio impresionante.

## ✨ ¿Qué hace especial a este portafolio?

- 🌍 **Multiidioma**: Español e Inglés incluidos
- 🌙 **Modo oscuro/claro**: Cambia entre temas con un clic
- 📱 **Totalmente responsive**: Se ve perfecto en móviles, tablets y desktop
- ⚡ **Súper rápido**: Construido con Vite y React para máximo rendimiento
- 🎨 **Animaciones suaves**: Efectos visuales modernos con partículas de fondo
- 📧 **Formulario de contacto**: Los visitantes pueden contactarte directamente
- 🎯 **SEO optimizado**: Preparado para aparecer en Google

## 🛠️ Tecnologías utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Para código más seguro
- **Tailwind CSS** - Estilos modernos y responsive
- **Vite** - Herramienta de desarrollo súper rápida

### Características especiales
- **Zustand** - Gestión de estado simple y efectiva
- **React Intersection Observer** - Animaciones al hacer scroll
- **Typewriter Effect** - Efecto de máquina de escribir
- **TSParticles** - Fondo animado con partículas
- **Lucide React** - Iconos modernos y elegantes

## 🚀 Instalación rápida

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para instalar

1. **Clona el repositorio**
   ```bash
   git clone [URL-DE-TU-REPO]
   cd project
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Configura las variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto con:
   ```env
   VITE_MAKE_WEBHOOK_URL=tu_webhook_url_de_make
   ```

5. **¡Listo!** Abre tu navegador en `http://localhost:5173`

## ⚙️ Variables de entorno

Este proyecto utiliza variables de entorno para configurar servicios externos:

- `VITE_MAKE_WEBHOOK_URL`: URL del webhook de Make.com para el formulario de contacto
  - Obtén tu webhook desde [Make.com](https://make.com)
  - Configura un escenario que reciba datos del formulario
  - Copia la URL del webhook y agrégala al archivo `.env`

**Nota**: Las variables que empiezan con `VITE_` son accesibles desde el frontend.

## 🎨 Personalización para tu portafolio

### 1. Información personal
Edita el archivo `src/locales/translations.ts` para cambiar:
- Tu nombre
- Descripción profesional
- Información de contacto
- Experiencia laboral

### 2. Proyectos
Modifica `src/data/projects.ts` para agregar tus propios proyectos:
- Títulos y descripciones
- Tecnologías utilizadas
- Enlaces a demos y repositorios
- Imágenes de tus proyectos

### 3. Habilidades
Actualiza `src/data/skills.ts` con tus tecnologías:
- Frontend, Backend, Bases de datos
- Herramientas y metodologías
- Iconos personalizados

### 4. Imágenes
Reemplaza las imágenes en la carpeta `public/images/` con capturas de tus proyectos.

### 5. CV
Coloca tu CV en `public/documents/` y actualiza la referencia en el código.

## 📁 Estructura del proyecto

```
project/
├── public/
│   ├── documents/          # Tu CV aquí
│   └── images/            # Capturas de tus proyectos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── data/             # Datos de proyectos y habilidades
│   ├── locales/          # Traducciones (ES/EN)
│   ├── store/            # Estado global (tema, idioma)
│   └── styles/           # Estilos personalizados
└── package.json
```

## 🌟 Características principales

### Secciones incluidas
- **Hero**: Presentación con efecto typewriter
- **Sobre mí**: Descripción profesional
- **Experiencia**: Timeline de tu carrera
- **Habilidades**: Grid de tecnologías con iconos
- **Proyectos**: Carousel de tus mejores trabajos
- **Contacto**: Formulario funcional

### Funcionalidades
- Navegación suave entre secciones
- Cambio de idioma dinámico
- Toggle de tema oscuro/claro
- Animaciones al hacer scroll
- Formulario de contacto (requiere backend)

## 🚀 Despliegue

### Netlify (Recomendado)
1. Haz build del proyecto: `npm run build`
2. Sube la carpeta `dist` a Netlify
3. ¡Tu portafolio estará online!

### Vercel
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente la configuración
3. Deploy automático en cada push

## 💡 Tips para personalizar

1. **Colores**: Modifica `src/styles/theme.css` para cambiar la paleta
2. **Fuentes**: Agrega Google Fonts en `index.html`
3. **Animaciones**: Ajusta las configuraciones en los componentes
4. **SEO**: Actualiza meta tags en `index.html`
5. **Analytics**: Agrega Google Analytics o similar

## 🤝 ¿Necesitas ayuda?

Si tienes dudas o quieres mostrar tu versión personalizada:
- Deja un comentario en el video de TikTok
- Abre un issue en GitHub
- Comparte tu portafolio usando el hashtag #PortafolioModerno

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo, modificarlo y compartirlo para crear tu propio portafolio.

---

**¿Te gustó este proyecto?** ¡Dale una ⭐ al repositorio y comparte tu versión personalizada!

*Hecho con ❤️ para la comunidad de desarrolladores*