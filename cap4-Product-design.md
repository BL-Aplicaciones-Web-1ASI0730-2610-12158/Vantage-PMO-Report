# 4.1. Style Guidelines.

El diseño se enfoca en una interfaz intuitiva que garantiza la seguridad y escalabilidad del sistema siendo capaz de manejar múltiples proyectos con alta disponibilidad y un control de acceso estrictamente definido por roles.

## 4.1.1. General Style Guidelines.

## 4.1.2. Web Style Guidelines.

# 4.2. Information Architecture.

Se enfoca en la forma crítica de salud de los proyectos (KPIs y semáforos) sea siempre el punto de partida de la navegación.

## 4.2.1. Organization Systems.

## 4.2.2. Labeling Systems.

## 4.2.3. SEO Tags and Meta Tags.

Para asegurar que la plataforma *Vantage PMO* sea funcional por los motores de búsqueda y presente un buen diseño, se han configurado los siguientes meta tags técnicos:

* **Title Tag:** en html: 
    `<title>Vantage PMO | Gestión Estratégica de Proyectos y Portafolios B2B</title>`

* **Description:** en html:
    `<meta name="description" content="Optimice la toma de decisiones con Vantage PMO. Plataforma SaaS para la centralización, monitoreo en tiempo real y reporteo automático de proyectos empresariales.">`

* **Keywords:** en html:
    `<meta name="keywords" content="PMO, Gestión de Proyectos, SaaS Perú, MDEPS, Dashboard de Proyectos, Eficiencia Operativa, Control de Riesgos">`

* **Open Graph (Optimización para redes sociales):**
    * `<meta property="og:title" content="Vantage PMO: De la gestión reactiva a la estratégica">`

    * `<meta property="og:description" content="Centralice su información y elimine la fricción operativa con nuestra solución especializada en PMO.">`

    * `<meta property="og:image" content="https://vantagepmo.com/assets/og-preview.png">`

    * `<meta property="og:url" content="https://vantagepmo.com">`

* **Robots:** en html:
    `<meta name="robots" content="index, follow">`

## 4.2.4. Searching Systems.

El sistema de búsqueda está diseñado  para poder reducir el tiempo de localización de datos críticos:

1.  **Barra de Búsqueda Global:** Implementada en la parte superior del Dashboard. Permite en la búsqueda rápida por:
    * Nombre o código del proyecto.
    * Nombre del responsable asignado.
    * Etiquetas de tareas específicas.
2.  **Filtro de Avances:** En los módulos de backlog y el portafolio, los usuarios pueden segmentar la información mediante:
    * **Indicadores de Salud:** Filtrado por semáforos (Verde, Amarillo, Rojo).
    * **Estado Operativo:** (En curso, Detenido, Finalizado).
    * **Prioridad y Carga:** Según el impacto en el negocio.
3.  **Búsqueda Documental:** Capacidad de búsqueda dentro del repositorio central de documentos para localizar actas, PDFs de reportes generados anteriormente y archivos de colaboración mediante palabras clave en el título y metadatos.

## 4.2.5. Navigation Systems.

La navegación se estructura para que el usuario nunca este a más de tres clics de la información que necesita:

1.  **Navegación Global (Menú Lateral):** es el slidebar persistente con acceso directo a los pilares del sistema:
    * **Dashboard:** Resumen ejecutivo y KPIs.
    * **Proyectos:** Vista de portafolio y CRUD.
    * **Reportes:** Módulo de generación de informes automáticos.
    * **Riesgos:** Matriz de clasificación y alertas tempranas.

2.  **Navegación de Contexto:** Sistema que facilitan en la orientación del usuario dentro de subsecciones (*Portafolio > Proyecto Logistica > Gestión de Riesgos*).

3.  **Navegación Local:** Se utilizan pestañas para navegar entre el Tablero Kanban, los indicadores de salud, gestión de recursos y el repositorio de documentos.

4.  **Acciones Rápidas:** Botones de acción flotante y accesos directos para la creación inmediata de proyectos o registro de riesgos, condicionados por los permisos del usuario.


# 4.3. Landing Page UI Design.

Este capítulo se centra en las guías de estilo, la arquitectura de información, los prototipos de interfaz y la estructura de software.

## 4.3.1. Landing Page Wireframe.

## 4.3.2. Landing Page Mock-up.

# 4.4. Web Applications UX/UI Design.

Se enfoca en los dashboards, en  flujos para la generación de reportes. Se detalla el diseño de experiencia para asegurar que los Project Managers gestionen múltiples proyectos.

## 4.4.1. Web Applications Wireframes.

## 4.4.2. Web Applications Wireflow Diagrams.

## 4.4.2. Web Applications Mock-ups.

## 4.4.3. Web Applications User Flow Diagrams.

# 4.5. Web Applications Prototyping.

Este apartado detalla los diagramas de flujo, wireframes  y el prototipo interactivo final. Se valida la experiencia de gestión de portafolios, la generación automática de reportes y la visualización de KPIs en tiempo real.


# 4.6. Domain-Driven Software Architecture.
Se enfoca en la organización de la lógica del software, la delimitación de contextos y el uso de diagramas.

## 4.6.1. Design-Level EventStorming.

## 4.6.2. Software Architecture Context Diagram.

## 4.6.3. Software Architecture Container Diagrams.

## 4.6.4. Software Architecture Components Diagrams.

# 4.7. Software Object-Oriented Design.

Se centra en la definición de diagramas de clases, la interacción entre objetos y la aplicación de principios.

## 4.7.1. Class Diagrams.

# 4.8. Database Design.

Se centra en el diagrama entidad-relación, la normalización de las tablas y la arquitectura de persistencia.

## 4.8.1. Database Diagrams.