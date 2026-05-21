# Alexandru Nechita — Portfolio

Portfolio personal desarrollado con Vite + React + TypeScript + Tailwind CSS v4.

## Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 6
- **Estilos:** Tailwind CSS v4
- **Routing:** React Router DOM v6
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Deploy:** Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Configuración detectada automáticamente (Vite)
3. El archivo `vercel.json` ya gestiona el routing SPA

No se necesita ninguna variable de entorno para el deploy base.

## Estructura

```
src/
├── components/
│   ├── atoms/       # Button, Tag, Avatar, NavLink, SocialLink, FadeIn
│   ├── molecules/   # ProjectCard, SkillBar, TimelineItem, StatCard
│   ├── organisms/   # Navbar, Hero, FeaturedProjects, ProjectGrid, SkillsGrid, ExperienceTimeline, Footer
│   └── templates/   # PageLayout
├── data/            # projects.ts, skills.ts, experience.ts
├── pages/           # HomePage, ProjectsPage, SkillsPage, ExperiencePage
└── index.css        # Design tokens (@theme)
```
