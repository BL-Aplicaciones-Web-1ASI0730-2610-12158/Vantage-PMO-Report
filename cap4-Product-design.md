# 4.1. Style Guidelines.

El diseño se enfoca en una interfaz intuitiva que garantiza la seguridad y escalabilidad del sistema siendo capaz de manejar múltiples proyectos con alta disponibilidad y un control de acceso estrictamente definido por roles.

## 4.1.1. General Style Guidelines.

## 4.1.2. Web Style Guidelines.

# 4.2. Information Architecture.

Se enfoca en la forma crítica de salud de los proyectos (KPIs y semáforos) sea siempre el punto de partida de la navegación.

## 4.2.1. Organization Systems.

En la plataforma Vantage PMO, se emplea principalmente la organización jerárquica para resaltar la información crítica relacionada con la salud de los proyectos y portafolios. Elementos como KPIs clave, semáforos de estado, alertas de riesgo y desviaciones de cronograma o presupuesto se presentan con mayor jerarquía visual dentro de los dashboards. Esta priorización permite que los usuarios identifiquen de forma inmediata los proyectos que requieren atención o toma de decisiones.

Asimismo, se aplica una organización secuencial en procesos que requieren una guía paso a paso, como la creación de proyectos, la configuración de portafolios, la asignación de responsables, o la generación de reportes ejecutivos. Estos flujos siguen una progresión lógica y controlada para reducir errores, estandarizar procesos y facilitar la experiencia de uso, especialmente para usuarios con distintos niveles de madurez en gestión de proyectos.

En cuanto a los esquemas de categorización, Vantage PMO no utiliza una organización alfabética como criterio principal. En su lugar, se emplea una organización cronológica para el seguimiento de información histórica, como el avance del proyecto en el tiempo, hitos cumplidos, desviaciones acumuladas y evolución de indicadores.
Adicionalmente, el contenido se clasifica según el rol del usuario, permitiendo que Project Managers, PMO Leads y Stakeholders accedan a vistas, niveles de detalle y funcionalidades adaptadas a sus responsabilidades y necesidades de información.
## 4.2.2. Labeling Systems.

A continuación, se presenta el sistema de etiquetado (labeling system) diseñado para la plataforma Vantage PMO. Este sistema busca representar la información de forma clara y consistente, utilizando etiquetas cortas, precisas y alineadas al lenguaje de la gestión de proyectos, con el objetivo de minimizar la carga cognitiva, facilitar la navegación y mantener coherencia visual con la guía de diseño establecida.

Se ha priorizado la claridad semántica, el uso de términos familiares para profesionales de proyectos y la coherencia con el tono de comunicación profesional y orientado a resultados de la plataforma.

**Landing Page**

* Inicio: Sección principal de presentación de Vantage PMO. Comunica la propuesta de valor y permite el acceso a la plataforma.
* Características: Descripción de las funcionalidades clave del sistema, como gestión de proyectos, control de portafolios y automatización de reportes.
* Beneficios: Explicación de los beneficios estratégicos para Project Managers, PMOs y Stakeholders.
* Casos de Uso: Ejemplos de aplicación de Vantage PMO en empresas medianas y grandes.
* Contacto: Canal para solicitudes de información, demostraciones o soporte comercial.

**Aplicación Web - Project Managers y PMO Leads**

* Dashboard: Vista general con indicadores clave del estado de proyectos y portafolios, semáforos, alertas y métricas críticas.
* Proyectos: Listado y gestión de proyectos registrados. Incluye estado, responsables, cronograma y presupuesto.
* Portafolios: Visualización y control agrupado de proyectos estratégicos.
* KPIs: Seguimiento detallado de indicadores de desempeño relacionados a tiempo, costo, alcance y riesgos.
* Riesgos: Registro y monitoreo de riesgos, con niveles de impacto y probabilidad.
* Reportes: Generación y descarga de reportes ejecutivos y operativos.
* Configuración: Gestión de parámetros del sistema, usuarios y roles.

**Aplicación Web – Stakeholders**

* Resumen Ejecutivo: Vista simplificada del estado general de los proyectos y portafolios.
* Indicadores Clave: KPIs relevantes para la toma de decisiones estratégicas.
* Alertas: Notificaciones sobre desviaciones críticas o riesgos relevantes.
* Reportes Ejecutivos: Acceso a reportes consolidados para evaluación y seguimiento.

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