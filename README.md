# 🌲 EcoTracker - Explorador de Parques Nacionales

EcoTracker es una aplicación web moderna desarrollada como proyecto práctico bajo la metodología **Vibe Coding**, utilizando tecnologías punteras del ecosistema web actual. Su objetivo principal es permitir a los usuarios descubrir reservas naturales y parques nacionales alrededor del mundo, consultar fichas técnicas detalladas y gestionar una lista personal de destinos favoritos.

---

## 🚀 Tecnologías Utilizadas

- **Next.js 16 (App Router)** — Framework de React para renderizado híbrido y optimización de rutas.
- **TypeScript** — Tipado estático para mayor robustez y escalabilidad del código.
- **Tailwind CSS** — Framework CSS utility-first para un diseño responsive y elegante.
- **LocalStorage API** — Persistencia local de datos del lado del cliente para la gestión de favoritos.

---

## 📂 Estructura del Proyecto

El proyecto está configurado directamente en la raíz utilizando la carpeta `app` nativa de Next.js y componentes reutilizables:

```text
ecotracker/
├── app/
│   ├── page.tsx               # Página principal (Home)
│   ├── layout.tsx             # Layout global con Navbar y Footer
│   ├── globals.css            # Estilos globales y configuración de Tailwind
│   ├── parques/
│   │   ├── page.tsx           # Catálogo general con buscador y filtros
│   │   ├── loading.tsx        # UI de carga (Skeleton)
│   │   └── [id]/
│   │       └── page.tsx       # Detalle dinámico del parque
│   └── favoritos/
│       └── page.tsx           # Gestión de favoritos con localStorage
├── components/
│   ├── Navbar.tsx             # Barra de navegación responsive
│   ├── Footer.tsx             # Pie de página dinámico con manejo de fecha
│   └── BotonFavorito.tsx      # Componente interactivo de favoritos
├── public/                    # Archivos estáticos e imágenes
├── package.json
└── README.md
```

---

## 🛠️ Cómo Ejecutar el Proyecto Localmente

1. Clonar este repositorio en tu entorno local.
2. Instala las dependencias necesarias ejecutando:
   `npm install`
3. Inicia el servidor de desarrollo:
   `npm run dev`
4. Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000).

---

## ✨ Características Principales

- **Navegación Fluida:** Diseñado con el App Router de Next.js y rutas dinámicas (`/parques/[id]`).
- **Filtrado Avanzado:** Búsqueda en tiempo real por texto y categorización de ecosistemas en la sección de parques.
- **Interactividad con Estado Local:** Capacidad de añadir y quitar parques de favoritos de manera persistente utilizando `localStorage`.
- **Manejo de Errores y Carga:** Pantallas dedicadas de `loading.tsx` y `not-found.tsx` para una experiencia de usuario óptima.