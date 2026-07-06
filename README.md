<div align="center">

<img src="assets/images/UPC_logo_transparente.png" alt="Logo-UPC" width="150">

**Universidad Peruana de Ciencias Aplicadas**<br>
**Carrera de Ingeniería de Software**

**1ASI0730**<br>
**Aplicaciones Web**<br>
NRC<br>
**12158**<br>
**Informe del Trabajo Final**<br>
Docente<br>
**Villafuerte Bazan, Oscar Ivan**<br>
Equipo<br>
**MDEPS**

Proyecto<br>
**Vantage PMO**

<br>**Integrantes**
| Código      | Apellidos y Nombres              |
|-------------|----------------------------------|
| U202411243  | Rocha Cotrina, Alvaro            |
| U202411799  | Esquicha Alcántara, Diego Alonso |
| U202417405  | Quispe Llacsahuanga, César Agusto|
| U202211881  | Guillen Giraldo, Mike Dylan      |
| U202417423  | Teran Zavala, Mauricio Alejandro |

**Período 202610**  

**Junio 2026**

</div>

---

</div>

<div class="page"></div>

## Registro de Versiones del Informe
| Versión | Fecha | Autores | Descripción de modificación |
| :--- | :--- | :--- | :--- |
| **AV1** | 25/04/2026 | Rocha, Alvaro<br>Esquicha, Diego<br>Guillen, Dylan<br>Quispe, César<br>Teran Zavala, Mauricio Alejandro | Para la entrega AV1 se consolidó la estructura del informe técnico, incluyendo carátula, registro de versiones, tabla de contenidos y la definición de Student Outcomes.<br><br>**Capítulo I — Introducción:** Se redactó el Startup Profile y el Solution Profile (Vantage PMO), detallando la propuesta de valor para la gestión de portafolios y gobernanza corporativa enfocada en los segmentos de líderes de proyectos y administradores PMO.<br><br>**Capítulo II — Requirements Elicitation & Analysis:** Se realizó el análisis de competidores y el registro de entrevistas a profundidad. Se desarrolló el Needfinding (User Personas, Task Matrix, Journey Mapping), así como el Big Picture EventStorming para identificar los eventos clave del dominio y el Ubiquitous Language basado en los Bounded Contexts definidos.<br><br>**Capítulo III — Requirements Specification:** Se elaboró el Product Backlog priorizando las User Stories críticas. Se aplicó la metodología de Impact Mapping para alinear las funcionalidades con los objetivos estratégicos del negocio.<br><br>**Capítulo IV — Product Design:** Se completaron las Style Guidelines y la Arquitectura de Información. Se desarrolló la Software Architecture bajo el Modelo C4 (Contexto, Contenedores y Componentes), especificando el uso de C# (.NET) para el backend y Vue.js/Vite para el frontend, además del diseño lógico y físico de la base de datos.<br><br>**Capítulo V — Product Implementation:** Se documentó la gestión de configuración de software y la evidencia del Sprint 1. Se incluyó el Sprint Planning, Sprint Backlog (enfocado en US20, US31, US02 y US37), documentación de servicios y evidencias de despliegue inicial.<br><br>Finalmente, se incluyeron las conclusiones preliminares del equipo, la bibliografía técnica y los anexos correspondientes. |
| **TB1** | 15/05/2026 | Rocha, Alvaro<br>Esquicha, Diego<br>Guillen, Dylan<br>Quispe, César<br>Teran Zavala, Mauricio Alejandro | **Capítulo V — Product Implementation:** Para la entrega TB1 se actualizó la documentación del ciclo de desarrollo correspondiente al Sprint 2. Se detalló la implementación y refinamiento de los Bounded Contexts de Reports, Task Collaboration, Project Management, Schedule, Support, Settings, Projects e IAM. <br><br>Se incluyeron las evidencias de la gestión del Sprint 2 en Trello, el Sprint Backlog actualizado y el rastreo de colaboración del equipo. Asimismo, se documentaron los servicios desarrollados y las evidencias de despliegue (Software Deployment Support), incluyendo el frontend en Firebase y Vercel, y el servidor de datos (json-server) en Render. Finalmente, se anexaron las diapositivas de la exposición y los insights obtenidos durante el Sprint Review. |
| **AV2** | 20/06/2026 | Rocha, Alvaro<br>Esquicha, Diego<br>Guillen, Dylan<br>Quispe, César<br>Teran Zavala, Mauricio Alejandro | **Capítulo V — Product Implementation:** Para la entrega AV2 se consolidó la documentación del ciclo de desarrollo correspondiente al Sprint 3, enfocada en la implementación e integración de funcionalidades clave del sistema Vantage PMO. Se desarrollaron y documentaron las User Stories asociadas a la gestión de proyectos mediante la API (US-43), la autenticación segura mediante JWT (US-41) y la visualización del tablero Kanban para la gestión de tareas (US-33).<br><br>Asimismo, se incorporaron funcionalidades orientadas a la experiencia del usuario y al seguimiento del proyecto, incluyendo la visualización de comentarios y chat en tareas (US-62), la barra de progreso de proyectos (US-61), la tabla de riesgos dinámica (US-64), el calendario mensual de actividades (US-39), el sistema de notificaciones mediante campana de avisos (US-63) y la generación de reportes en formato PDF a partir de datos JSON (US-54).<br><br>Se documentó el Sprint Planning 3, el Sprint Backlog 3, la medición de la velocidad del sprint (Sprint Velocity) y la evidencia de desarrollo basada en commits del repositorio, asegurando la trazabilidad entre User Stories, tareas técnicas y resultados implementados. Finalmente, se incluyeron las conclusiones del equipo, las evidencias del Sprint Review y la actualización de los Student Outcomes ABET, demostrando el avance funcional del producto y el trabajo colaborativo del equipo durante esta fase del proyecto. |

<div style="page-break-after: always;"></div>

# Project Report Collaboration Insights

# Tabla de Contenidos

## [Capítulo I: Introducción](#introduccion)

- [1.1. Startup Profile](#1-1-startup-profile)
  - [1.1.1. Descripción de la Startup](#1-1-1-descripcion-de-la-startup)
  - [1.1.2. Perfiles de integrantes del equipo](#1-1-2-perfiles-de-los-miembros-del-equipo)
- [1.2. Solution Profile](#1-2-solution-profile)
  - [1.2.1. Antecedentes y problemática](#1-2-1-antecedentes-y-problematica)
  - [1.2.2. Lean UX Process](#1-2-2-lean-ux-process)
    - [1.2.2.1. Lean UX Problem Statements](#1-2-2-1-lean-ux-problem-statements)
    - [1.2.2.2. Lean UX Assumptions](#1-2-2-2-lean-ux-assumptions)
    - [1.2.2.3. Lean UX Hypothesis Statements](#1-2-2-3-lean-ux-hypothesis-statements)
    - [1.2.2.4. Lean UX Canvas](#1-2-2-4-lean-ux-canvas)
- [1.3. Segmentos objetivo](#1-3-segmentos-objetivos)

---

## [Capítulo II: Requirements Elicitation & Analysis](#2-requirements-elicitation-analysis)

- [2.1. Competidores](#2-1-competidores)
  - [2.1.1. Análisis competitivo](#2-1-1-analisis-competitivo)
  - [2.1.2. Estrategias y tácticas frente a competidores](#2-1-2-estrategias-y-tacticas-frente-a-competidores)
- [2.2. Entrevistas](#2-2-entrevistas)
  - [2.2.1. Diseño de entrevistas](#2-2-1-diseno-de-entrevistas)
  - [2.2.2. Registro de entrevistas](#2-2-2-registro-de-entrevistas)
  - [2.2.3. Análisis de entrevistas](#2-2-3-analisis-de-entrevistas)
- [2.3. Needfinding](#2-3-needfinding)
  - [2.3.1. User Personas](#2-3-1-user-personas)
  - [2.3.2. User Task Matrix](#2-3-2-user-task-matrix)
  - [2.3.3. User Journey Mapping](#2-3-3-user-journey-mapping)
  - [2.3.4. Empathy Mapping](#2-3-4-empathy-mapping)
- [2.4. Big Picture Event Storming](#2-4-big-picture-eventstorming)
- [2.5. Ubiquitous Language](#2-5-ubiquitous-language)

---

## [Capítulo III: Requirements Specification](#3-requirements-specification)

- [3.1. User Stories](#3-1-user-stories)
- [3.2. Impact Mapping](#3-2-impact-mapping)
- [3.3. Product Backlog](#3-3-product-backlog)

---

## [Capítulo IV: Product Design](#4-product-design)

- [4.1. Style Guidelines](#4-1-style-guidelines)
  - [4.1.1. General Style Guidelines](#4-1-1-general-style-guidelines)
  - [4.1.2. Web Style Guidelines](#4-1-2-web-style-guidelines)
- [4.2. Information Architecture](#4-2-information-architecture)
  - [4.2.1. Organization Systems](#4-2-1-organization-systems)
  - [4.2.2. Labeling Systems](#4-2-2-labeling-systems)
  - [4.2.3. SEO Tags and Meta Tags](#4-2-3-seo-tags-meta-tags)
  - [4.2.4. Searching Systems](#4-2-4-searching-systems)
  - [4.2.5. Navigation Systems](#4-2-5-navigation-systems)
- [4.3. Landing Page UI Design](#4-3-landing-page-ui-design)
  - [4.3.1. Landing Page Wireframe](#4-3-1-landing-page-wireframe)
  - [4.3.2. Landing Page Mock-up](#4-3-2-landing-page-mock-up)
- [4.4. Web Applications UX/UI Design](#4-4-web-applications-ux-ui-design)
  - [4.4.1. Web Applications Wireframes](#4-4-1-web-applications-wireframes)
  - [4.4.2. Web Applications Wireflow Diagrams](#4-4-2-web-applications-wireflow-diagrams)
  - [4.4.3. Web Applications Mock-ups](#4-4-3-web-applications-mock-ups)
  - [4.4.4. Web Applications User Flow Diagrams](#4-4-4-web-applications-user-flow-diagrams)
- [4.5. Web Applications Prototyping](#4-5-web-applications-prototyping)
- [4.6. Domain-Driven Software Architecture](#4-6-domain-driven-software-architecture)
  - [4.6.1. Design-Level Event Storming.](#4-6-1-design-level-eventstorming)
  - [4.6.2. Software Architecture Context Diagram](#4-6-2-software-architecture-context-diagram)
  - [4.6.3. Software Architecture Container Diagrams](#4-6-3-software-architecture-container-diagrams)
  - [4.6.4. Software Architecture Components Diagrams](#4-6-4-software-architecture-components-diagrams)
- [4.7. Software Object-Oriented Design](#4-7-software-object-oriented-design)
  - [4.7.1. Class Diagrams](#4-7-1-class-diagrams)
- [4.8. Database Design](#4-8-database-design)
  - [4.8.1. Database Diagram](#4-8-1-database-diagrams)

---

## [Capítulo V: Product Implementation, Validation & Deployment](#product-implementation-validation-deployment)

- [5.1. Software Configuration Management](#5-1-software-configuration-management)
  - [5.1.1. Software Development Environment Configuration](#5-1-1-software-development-environment-configuration)
  - [5.1.2. Source Code Management](#5-1-2-source-code-management)
  - [5.1.3. Source Code Style Guide & Conventions](#5-1-3-source-code-style-guide-conventions)
  - [5.1.4. Software Deployment Configuration](#5-1-4-software-deployment-configuration)
- [5.2. Landing Page, Services & Applications Implementation](#5-2-landing-page-services-applications-implementation)
  - [5.2.1. Sprint 1](#5-2-1-sprint-1)
    - [5.2.1.1. Sprint Planning 1](#5-2-1-1-sprint-planning-1)
    - [5.2.1.2. Aspect Leaders and Collaborators](#5-2-1-2-aspect-leaders-and-collaborators)
    - [5.2.1.3. Sprint Backlog 1](#5-2-1-3-sprint-backlog-1)
    - [5.2.1.4. Development Evidence for Sprint Review](#5-2-1-4-development-evidence-for-sprint-review)
    - [5.2.1.5. Execution Evidence for Sprint Review](#5-2-1-5-execution-evidence-for-sprint-review)
    - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5-2-1-6-services-documentation-evidence-for-sprint-review)
    - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5-2-1-7-software-deployment-evidence-for-sprint-review)
    - [5.2.1.8. Team Collaboration Insights during Sprint](#5-2-1-8-team-collaboration-insights-during-sprint)
  - [5.2.2. Sprint 2](#5-2-2-sprint-2)
      - [5.2.2.1. Sprint Planning 2](#5-2-2-1-sprint-planning-2)
      - [5.2.2.2. Aspect Leaders and Collaborators](#5-2-2-2-aspect-leaders-and-collaborators)
      - [5.2.2.3. Sprint Backlog 2](#5-2-2-3-sprint-backlog-2)
      - [5.2.2.4. Development Evidence for Sprint Review](#5-2-2-4-development-evidence-for-sprint-review)
      - [5.2.2.5. Execution Evidence for Sprint Review](#5-2-2-5-execution-evidence-for-sprint-review)
      - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5-2-2-6-services-documentation-evidence-for-sprint-review)
      - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5-2-2-7-software-deployment-evidence-for-sprint-review)
      - [5.2.2.8. Team Collaboration Insights during Sprint](#5-2-2-8-team-collaboration-insights-during-sprint)
  - [5.2.3. Sprint 3](#5-2-3-sprint-3)
      - [5.2.3.1. Sprint Planning 3](#5-2-3-1-sprint-planning-3)
      - [5.2.3.2. Aspect Leaders and Collaborators](#5-2-3-2-aspect-leaders-and-collaborators)
      - [5.2.3.3. Sprint Backlog 3](#5-2-3-3-sprint-backlog-3)
      - [5.2.3.4. Development Evidence for Sprint Review](#5-2-3-4-development-evidence-for-sprint-review)
      - [5.2.3.5. Execution Evidence for Sprint Review](#5-2-3-5-execution-evidence-for-sprint-review)
      - [5.2.3.6. Services Documentation Evidence for Sprint Review](#5-2-3-6-services-documentation-evidence-for-sprint-review)
      - [5.2.3.7. Software Deployment Evidence for Sprint Review](#5-2-3-7-software-deployment-evidence-for-sprint-review)
      - [5.2.3.8. Team Collaboration Insights during Sprint](#5-2-3-8-team-collaboration-insights-during-sprint)
- [5.3. Validation Interviews](#53-validation-interviews)
  - [5.3.1. Diseño de Entrevistas.](#531-diseño-de-entrevistas)
  - [5.3.2. Registro de Entrevistas.](#532-registro-de-entrevistas)
  - [5.3.3. Evaluaciones según heurísticas.](#533-evaluaciones-según-heurísticas)
- [5.4. Video About-the-Product.](#54-video-about-the-product)
---

## [Conclusiones](#conclusiones)

- [Conclusiones y recomendaciones](#conclusiones)
- [Video About-the-Team](#recomendaciones)

---

## [Bibliografía](#bibliografia)

---

## [Anexos](#anexos)

# ABET – EAC - Student Outcome 5

**Criterio:** *La capacidad de funcionar efectivamente en un
equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de
colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.*

En el siguiente cuadro se describe las acciones realizadas y enunciados de conclusiones por parte del grupo, que permiten sustentar el haber alcanzado el logro del ABET – EAC - Student Outcome 3.


| Criterio específico | Acciones realizadas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Conclusiones                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Trabaja en equipo para proporcionar liderazgo en forma conjunta.** | **Rocha Cotrina, Alvaro** <br />AV1: Elaboración de User Stories y Epics, Web Applications Mock-ups, General y Web Style Guidelines, Desktop Mockups, Organization Systems, Labeling Systems, Navigation Systems, Searching Systems, Ubiquitous Language, Software Configuration Management y Registro de Entrevistas. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> AV1: Registro de Entrevistas, User Stories, Class and Database Diagrams Information, Web Application User Flow Diagram, configuración del entorno de desarrollo, Source Code Style Guide & Conventions y elaboración del PPT grupal. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> AV1: Class Diagram, Database Diagrams, Web Applications Wireframes, Style Guidelines, User Stories, Lean UX, Web Applications Mock-ups, Organization Systems, SEO Tags and Meta Tags, Navigation Systems, Landing Page Mock-up y Registro de Entrevistas.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> AV1: Lean UX Process, Segmentos objetivo, Needfinding, User Personas, User Task Matrix, User Journey Mapping, User Stories, Product Backlog, Navigation Systems, Landing Page UI Design, Wireframes, Mock-ups, EventStorming, Sprint Backlog y evidencias de Sprint Review. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> AV1: Antecedentes y problemática, Registro de Entrevistas, User Personas, User Task Matrix, User Journey Mapping, Empathy Mapping, User Stories, Product Backlog, UX/UI Design, diagramas de arquitectura de software, Sprint Planning y Student Outcome. <br><br>**Rocha Cotrina, Alvaro** <br />TB1 (Sprint 2): Lideró el reporte de Bounded Contexts, la elaboración del Trello para el Sprint 2 y el seguimiento de la tabla de evidencias de desarrollo y colaboración del equipo. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> TB1 (Sprint 2): Coordinó la colaboración de tareas dentro de los Bounded Contexts, gestionó parte del Sprint Backlog 2 y lideró la elaboración del material visual para la exposición grupal. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> TB1 (Sprint 2): Asumió el liderazgo en la definición de "Aspect Leaders and Collaborators", consolidó los insights de colaboración del equipo y gestionó las evidencias de ejecución para el Sprint Review.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> TB1 (Sprint 2): Responsable del despliegue del Front-End en Firebase, la actualización de tareas e internacionalización (I18n) y la estructuración de los contextos de Schedule y Support. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> TB1 (Sprint 2): Lideró el despliegue del Front-End en Vercel y del servidor de datos (json-server) en Render, además de gestionar la implementación de los Bounded Contexts de Projects e IAM. <br><br> **Rocha Cotrina, Alvaro** <br /> AV2: Participó activamente en la planificación y seguimiento del Sprint 3, apoyando la organización del tablero Trello, validando el cumplimiento de las User Stories asignadas y colaborando en la revisión de evidencias técnicas para el Sprint Review. <br /><br /> **Esquicha Alcántara, Diego Alonso** <br /> AV2: Asumió un rol de liderazgo técnico durante el Sprint 3, coordinando la implementación del frontend, la integración de funcionalidades visuales (login, vistas de progreso, notificaciones) y la consolidación del Sprint Backlog, asegurando la alineación con los objetivos del sprint. <br /><br /> **Quispe Llacsahuanga, César Augusto** <br /> AV2: Contribuyó al liderazgo compartido mediante el apoyo en la validación de componentes funcionales, revisión de historias de usuario implementadas y colaboración en la organización de tareas técnicas dentro del equipo. <br /><br /> **Guillen Giraldo, Mike Dylan** <br /> AV2: Lideró la estructuración y verificación de evidencias del Sprint Review, apoyando la validación del cumplimiento de las User Stories y colaborando en la planificación de actividades técnicas relacionadas con la interfaz y experiencia de usuario. <br /><br /> **Teran Zavala, Mauricio Alejandro** <br /> AV2: Ejerció liderazgo técnico en la coordinación de tareas backend y de despliegue, apoyando la correcta integración de servicios, asegurando la estabilidad del entorno y colaborando en la toma de decisiones técnicas del Sprint 3.| **AV1:** El desarrollo del proyecto permitió demostrar la capacidad de trabajar de manera coordinada dentro del equipo, ejerciendo un liderazgo compartido basado en la colaboración, la comunicación efectiva y la toma de decisiones conjunta. Cada integrante asumió responsabilidades específicas, aportando desde su rol al direccionamiento del trabajo, lo que facilitó la organización de actividades, la resolución de problemas y el cumplimiento de los objetivos establecidos de forma colectiva. <br /><br /> **TB1:** Durante el Sprint 2, el equipo consolidó un modelo de liderazgo compartido donde la toma de decisiones técnicas (como la elección de plataformas de despliegue y la estructuración de microservicios) se realizó de forma conjunta. La capacidad de liderazgo se manifestó en la autogestión de los Bounded Contexts, asegurando que cada módulo funcional estuviera alineado con los objetivos del negocio y las metas del Sprint, garantizando una integración fluida entre los componentes desarrollados por cada miembro.<br /><br /> **AV2:** En este entregable, el equipo evidenció un entorno colaborativo e inclusivo, basado en la planificación clara de objetivos y la asignación equilibrada de tareas. La comunicación constante y el apoyo mutuo permitieron cumplir con las metas del Sprint 3 dentro del tiempo establecido. La coordinación entre los integrantes facilitó la integración de funcionalidades, el seguimiento del progreso y la entrega de un producto funcional, reflejando un desempeño alineado con los principios del trabajo en equipo definidos por el Student Outcome.|
| **Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos.** | **Rocha Cotrina, Alvaro** <br />AV1: Coordinó la definición de estándares de diseño y lineamientos visuales, promoviendo acuerdos comunes para asegurar coherencia entre los entregables del equipo. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> AV1: Organizó y documentó los flujos de usuario y diagramas técnicos, asegurando que la información estuviera disponible y clara para todos los integrantes del equipo. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> AV1: Planificó y desarrolló diagramas estructurales y wireframes, alineando los aspectos técnicos y visuales con los objetivos definidos por el equipo.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> AV1: Lideró el proceso de investigación de usuarios y definición de segmentos objetivo, estableciendo metas claras para el diseño centrado en el usuario. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> AV1: Estructuró el análisis del problema y los artefactos de UX, asegurando la alineación entre necesidades del usuario y objetivos del proyecto.<br><br> **Rocha Cotrina, Alvaro** <br />TB1 (Sprint 2): Estableció el entorno de seguimiento en Trello, definiendo las metas de desarrollo para el soporte de despliegue de software. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> TB1 (Sprint 2): Planificó la documentación de servicios y aseguró la inclusión de todos los avances técnicos en la presentación final del equipo. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> TB1 (Sprint 2): Documentó los servicios para el Sprint Review, facilitando un entorno de transparencia informativa sobre el estado del sistema "Bounded system".<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> TB1 (Sprint 2): Ejecutó la planificación de tareas técnicas para los módulos de configuración (Settings) y cronogramas (Schedule), cumpliendo con los tiempos de entrega. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> TB1 (Sprint 2): Aseguró la operatividad del entorno colaborativo mediante el despliegue continuo en entornos de producción (Vercel/Render) para las pruebas del equipo. <br><br> **Rocha Cotrina, Alvaro** <br /> AV2: Colaboró en la definición de metas del Sprint 3 y en la organización de tareas dentro del tablero Trello, promoviendo una comunicación constante y un entorno de trabajo ordenado. <br /><br /> **Esquicha Alcántara, Diego Alonso** <br /> AV2: Planificó y documentó las actividades técnicas del Sprint 3, asegurando que todos los integrantes contaran con información clara sobre el alcance, prioridades y avances de las User Stories implementadas. <br /><br /> **Quispe Llacsahuanga, César Augusto** <br /> AV2: Apoyó la ejecución de tareas técnicas asignadas, colaborando activamente con el equipo para resolver dudas y mantener un entorno de trabajo inclusivo y cooperativo. <br /><br /> **Guillen Giraldo, Mike Dylan** <br /> AV2: Contribuyó a la planificación y seguimiento del sprint mediante la validación del avance de las tareas UI/UX y la verificación del cumplimiento de los objetivos definidos para el Sprint Review. <br /><br /> **Teran Zavala, Mauricio Alejandro** <br /> AV2: Garantizó la continuidad del entorno colaborativo mediante el soporte técnico y la integración de componentes, permitiendo que el equipo pudiera probar y validar funcionalidades de manera conjunta.| **AV1:** El desarrollo del proyecto permitió evidenciar la capacidad del equipo para trabajar de manera colaborativa e inclusiva, estableciendo metas claras desde las etapas iniciales y planificando las tareas de forma organizada y coordinada. A lo largo del trabajo, los integrantes participaron activamente en la definición de responsabilidades, la toma de decisiones y el seguimiento de avances, fomentando un ambiente de respeto, comunicación constante y apoyo mutuo. Esta dinámica permitió integrar diferentes perspectivas técnicas y funcionales, optimizar el uso del tiempo y cumplir de manera efectiva con los objetivos académicos y del proyecto, demostrando un desempeño alineado con los principios del trabajo en equipo establecidos por el Student Outcome. <br /><br />  **TB1:** El equipo fomentó un entorno inclusivo mediante la rotación de responsabilidades técnicas y el apoyo mutuo en las fases de despliegue. Se establecieron metas específicas para el Sprint 2 mediante un Sprint Backlog detallado, lo que permitió una planificación rigurosa de las tareas de codificación y documentación. El cumplimiento de los objetivos se evidenció en la entrega de un producto funcional desplegado en múltiples plataformas y una documentación técnica que refleja fielmente la colaboración y el esfuerzo colectivo por alcanzar los estándares de calidad exigidos. <br /><br /> **AV2:** En este entregable, el equipo evidenció un entorno colaborativo e inclusivo, basado en la planificación clara de objetivos y la asignación equilibrada de tareas. La comunicación constante y el apoyo mutuo permitieron cumplir con las metas del Sprint 3 dentro del tiempo establecido. La coordinación entre los integrantes facilitó la integración de funcionalidades, el seguimiento del progreso y la entrega de un producto funcional, reflejando un desempeño alineado con los principios del trabajo en equipo definidos por el Student Outcome.          |
