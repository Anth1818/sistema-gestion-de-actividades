# Sistema de Gestión de Actividades

Este proyecto es un sistema de gestión de actividades que permite a los usuarios agendar, ver y registrar actividades, así como ver métricas y logros.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseño rápido.
- **Radix UI**: Componentes accesibles y sin estilo para React.
- **TanStack React Query**: Librería para el manejo de datos en React.
- **Axios**: Cliente HTTP basado en promesas.
- **Framer Motion**: Librería para animaciones en React.
- **Lucide React**: Iconos para React.
- **HTML2Canvas**: Captura de pantallas en el navegador.
- **jsPDF**: Generación de archivos PDF.
- **Zod**: Validación de esquemas.
- **Sharp**: Procesamiento de imágenes.
- **XLSX**: Manipulación de archivos Excel.
- **ESLint**: Herramienta de análisis estático para encontrar problemas en el código JavaScript.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.

## Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── globals.css
│   ├── denied/
│   │   └── page.tsx
│   └── ...
├── components/
│   ├── Navigation.tsx
│   ├── ScheduleTable.tsx
│   ├── ThemeProvider.tsx
│   └── ui/
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── chart.tsx
│       ├── drawer.tsx
│       ├── select.tsx
│       ├── table.tsx
│       ├── textarea.tsx
│       └── toast.tsx
├── context/
│   └── updateActivitie.ts
├── lib/
│   └── utils.ts
└── ...
```

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (versión 8 o superior)

### Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd sistema-de-gestion-actividades
```

## Instalar Dependencias y ejecutar el proyecto en local

```bash
pnpm install
pnpm run dev
```

## Scripts Disponibles

```bash
Inicia la aplicación en modo de desarrollo.
pnpm run dev

Ejecuta las pruebas unitarias utilizando Jest.
pnpm test

Construye la aplicación para producción
pnpm run build

Iniciar el servidor
pnpm start
```

## Agregar nuevas features al proyecto:

1. Haz un fork(clonar) del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Haz push a la rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.