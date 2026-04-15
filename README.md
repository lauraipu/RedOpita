# RedOpita  - Conectando Voluntades

**RedOpita** es una plataforma digital diseñada para fortalecer el tejido social en Neiva, Huila. Nuestra misión es conectar a ciudadanos comprometidos con organizaciones sociales y fundaciones locales, facilitando la logística de voluntariado y la distribución de ayudas en sectores vulnerables.

## 🚀 Características Principales

- **Landing Page Informativa:** Secciones de Misión, Visión y "¿Quiénes Somos?" para generar confianza y transparencia.
- **Sistema de Autenticación Dinámico:** Login y Registro integrados mediante modales de Bootstrap para una experiencia de usuario fluida.
- **Gestión de Comunidades:** Foros de discusión en tiempo real para coordinar la logística de iniciativas como "Huertas Urbanas" y "Logística de Comedores".
- **Postulación Directa:** Interfaz intuitiva para que los voluntarios se unan a causas específicas con un solo clic.

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando un stack moderno para garantizar escalabilidad y rendimiento:

* **Frontend:** [Angular](https://angular.io/) (Arquitectura de Standalone Components).
* **Estilos:** [Bootstrap 5](https://getbootstrap.com/) (Diseño responsivo y componentes dinámicos).
* **Iconografía:** [Bootstrap Icons](https://icons.getbootstrap.com/).
* **Herramientas de Desarrollo:** Angular CLI, TypeScript, HTML5 y CSS3.



## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── features/
│   │   └── auth/           # Lógica de Login y Registro (Modales)
│   ├── shared/
│   │   └── footer/         # Componentes reutilizables
│   ├── inicio/             # Página principal y secciones de impacto
│   ├── comunidades/        # Foros y grupos de discusión
│   └── app.routes.ts       # Configuración de navegación
└── assets/                 # Imágenes y recursos estáticos
