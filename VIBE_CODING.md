# 🌿 Bitácora de Desarrollo: Metodología Vibe Coding (EcoTracker)

Este documento detalla el proceso de diseño, arquitectura, resolución de incidencias técnicas y estructuración de la aplicación web **EcoTracker**, desarrollada bajo la metodología iterativa **Vibe Coding** utilizando Next.js 16 (App Router), TypeScript y Tailwind CSS.

---

## 🛠️ 1. Enfoque y Metodología (Vibe Coding)

El desarrollo de EcoTracker se centró en un flujo ágil, intuitivo y conversacional asistido por IA, priorizando:
* **Estructura limpia desde la raíz:** Configuración directa de carpetas App Router de Next.js (`app/`) sin redundancias y separación de componentes globales y específicos (`components/`).
* **Optimización de componentes del cliente y servidor:** Uso estricto de Server Components para rendimiento estático y Client Components (`"use client"`) únicamente donde se requiriera interactividad (`localStorage`, manejo de estados y eventos).
* **Robustez ante versiones modernas de Next.js (v16):** Adaptación proactiva de arquitecturas asíncronas para parámetros de rutas dinámicas y componentes de fecha.

---

## 🚀 2. Fases de Implementación y Rutas del Proyecto

1. **Ruta Raíz / Inicio (`/app/page.tsx`):**
   - Interfaz visual de bienvenida con componentes semánticos y llamada a la acción (CTA) para explorar reservas.
   - Listado estético de parques destacados con tarjetas responsivas basadas en Tailwind CSS.

2. **Ruta Catálogo de Parques (`/app/parques/page.tsx`):**
   - Sistema de filtrado en tiempo real por categoría ecosistémica (Geotérmico, Montaña, Sabana, etc.) y búsqueda por texto (nombre o país).
   - Incorporación de interfaz de carga dedicada (`loading.tsx`) mediante esqueletos animados (Skeletons).

3. **Ruta Detalle Dinámico (`/app/parques/[id]/page.tsx`):**
   - Arquitectura dinámica basada en identificadores únicos (`params`), gestionada de forma asíncrona y blindada con límites de `<Suspense>` para cumplir con los estándares de rendimiento de Next.js 16.
   - Integración de pantallas de error amigables (`not-found.tsx`) para recursos inexistentes.

4. **Ruta de Favoritos con Persistencia (`/app/favoritos/page.tsx`):**
   - Conexión nativa con la API de almacenamiento local (`localStorage`) del navegador mediante componentes dedicados de cliente (`BotonFavorito.tsx`).
   - Gestión reactiva para añadir o retirar parques de la lista personal de forma instantánea.

---

## 🐛 3. Resolución de Incidencias Técnicas Notables

Durante el ciclo de desarrollo bajo Next.js 16, se diagnosticaron y solucionaron desafíos técnicos clave:
* **Uso de `new Date()`:** Resuelto mediante inicialización diferida en estados del ciclo de vida (`useEffect`) dentro de Client Components (`Footer.tsx`), evitando conflictos de prerenderizado estático del servidor.
* **Acceso asíncrono a parámetros dinámicos (`params`):** Ajuste de la arquitectura de la ruta dinámica `/parques/[id]` envolviendo el consumo de datos de la URL en componentes internos estructurados bajo límites de `<Suspense>`, eliminando los avisos de navegación instantánea del shell.

---
