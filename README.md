<div aligne="center">
<img src="assets/images/UPC_logo_transparente.png" alt="Logo-UPC" width="150">
  
## Universidad Peruana de Ciencias Aplicadas

**Ingeniería de Software**

**Ciclo:** 202610
 
1ASI0730 - Aplicaciones Web

**NRC:** 12158

**Profesor:** Villafuerte Bazan, Oscar Ivan 

### Informe de Trabajo Final

**Nombre del startup:** MDEPS

**Nombre del producto:** Vantage PMO 

#### Relación de integrantes

| Integrante                           | Código     |
| ------------------------------------ | ---------- |
| Rocha Cotrina, Alvaro                | U202411243 |
| Esquicha Alcántara, Diego Alonso     | U202411799 |
| Quispe Llacsahuanga, César Agusto    | U202417405 |
| Guillen Giraldo, Mike Dylan          | U202211881 |
| Teran Zavala, Mauricio Alejandro     | U202417423 |


**Mes y Año**: 05/2026

---

</div>

<div class="page"></div>

## Registro de Versiones del Informe
| Versión | Fecha | Autores | Descripción de modificación |
| :--- | :--- | :--- | :--- |
| **AV1** | 25/04/2026 | Rocha, Alvaro<br>Esquicha, Diego<br>Guillen, Dylan<br>Quispe, César<br>Teran Zavala, Mauricio Alejandro | Para la entrega AV1 se consolidó la estructura del informe técnico, incluyendo carátula, registro de versiones, tabla de contenidos y la definición de Student Outcomes.<br><br>**Capítulo I — Introducción:** Se redactó el Startup Profile y el Solution Profile (Vantage PMO), detallando la propuesta de valor para la gestión de portafolios y gobernanza corporativa enfocada en los segmentos de líderes de proyectos y administradores PMO.<br><br>**Capítulo II — Requirements Elicitation & Analysis:** Se realizó el análisis de competidores y el registro de entrevistas a profundidad. Se desarrolló el Needfinding (User Personas, Task Matrix, Journey Mapping), así como el Big Picture EventStorming para identificar los eventos clave del dominio y el Ubiquitous Language basado en los Bounded Contexts definidos.<br><br>**Capítulo III — Requirements Specification:** Se elaboró el Product Backlog priorizando las User Stories críticas. Se aplicó la metodología de Impact Mapping para alinear las funcionalidades con los objetivos estratégicos del negocio.<br><br>**Capítulo IV — Product Design:** Se completaron las Style Guidelines y la Arquitectura de Información. Se desarrolló la Software Architecture bajo el Modelo C4 (Contexto, Contenedores y Componentes), especificando el uso de C# (.NET) para el backend y Vue.js/Vite para el frontend, además del diseño lógico y físico de la base de datos.<br><br>**Capítulo V — Product Implementation:** Se documentó la gestión de configuración de software y la evidencia del Sprint 1. Se incluyó el Sprint Planning, Sprint Backlog (enfocado en US20, US31, US02 y US37), documentación de servicios y evidencias de despliegue inicial.<br><br>Finalmente, se incluyeron las conclusiones preliminares del equipo, la bibliografía técnica y los anexos correspondientes. |
| **TB1** | 15/05/2026 | Rocha, Alvaro<br>Esquicha, Diego<br>Guillen, Dylan<br>Quispe, César<br>Teran Zavala, Mauricio Alejandro | **Capítulo V — Product Implementation:** Para la entrega TB1 se actualizó la documentación del ciclo de desarrollo correspondiente al Sprint 2. Se detalló la implementación y refinamiento de los Bounded Contexts de Reports, Task Collaboration, Project Management, Schedule, Support, Settings, Projects e IAM. <br><br>Se incluyeron las evidencias de la gestión del Sprint 2 en Trello, el Sprint Backlog actualizado y el rastreo de colaboración del equipo. Asimismo, se documentaron los servicios desarrollados y las evidencias de despliegue (Software Deployment Support), incluyendo el frontend en Firebase y Vercel, y el servidor de datos (json-server) en Render. Finalmente, se anexaron las diapositivas de la exposición y los insights obtenidos durante el Sprint Review. |

<div style="page-break-after: always;"></div>

# Project Report Collaboration Insights

# Tabla de Contenidos

## [Capítulo I: Introducción](cap1-introduction.md)

- [1.1. Startup Profile](cap1-introduction.md#1-1-startup-profile)
  - [1.1.1. Descripción de la Startup](cap1-introduction.md#1-1-1-descripcion-de-la-startup)
  - [1.1.2. Perfiles de integrantes del equipo](cap1-introduction.md#1-1-2-perfiles-de-los-miembros-del-equipo)
- [1.2. Solution Profile](cap1-introduction.md#1-2-solution-profile)
  - [1.2.1. Antecedentes y problemática](cap1-introduction.md#1-2-1-antecedentes-y-problematica)
  - [1.2.2. Lean UX Process](cap1-introduction.md#1-2-2-lean-ux-process)
    - [1.2.2.1. Lean UX Problem Statements](cap1-introduction.md#1-2-2-1-lean-ux-problem-statements)
    - [1.2.2.2. Lean UX Assumptions](cap1-introduction.md#1-2-2-2-lean-ux-assumptions)
    - [1.2.2.3. Lean UX Hypothesis Statements](cap1-introduction.md#1-2-2-3-lean-ux-hypothesis-statements)
    - [1.2.2.4. Lean UX Canvas](cap1-introduction.md#1-2-2-4-lean-ux-canvas)
- [1.3. Segmentos objetivo](cap1-introduction.md#1-3-segmentos-objetivos)

---

## [Capítulo II: Requirements Elicitation & Analysis](cap2-requirements-elicitation-and-analysis.md)

- [2.1. Competidores](cap2-requirements-elicitation-and-analysis.md#2-1-competidores)
  - [2.1.1. Análisis competitivo](cap2-requirements-elicitation-and-analysis.md#2-1-1-analisis-competitivo)
  - [2.1.2. Estrategias y tácticas frente a competidores](cap2-requirements-elicitation-and-analysis.md#2-1-2-estrategias-y-tacticas-frente-a-competidores)
- [2.2. Entrevistas](cap2-requirements-elicitation-and-analysis.md#2-2-entrevistas)
  - [2.2.1. Diseño de entrevistas](cap2-requirements-elicitation-and-analysis.md#2-2-1-diseno-de-entrevistas)
  - [2.2.2. Registro de entrevistas](cap2-requirements-elicitation-and-analysis.md#2-2-2-registro-de-entrevistas)
  - [2.2.3. Análisis de entrevistas](cap2-requirements-elicitation-and-analysis.md#2-2-3-analisis-de-entrevistas)
- [2.3. Needfinding](cap2-requirements-elicitation-and-analysis.md#2-3-needfinding)
  - [2.3.1. User Personas](cap2-requirements-elicitation-and-analysis.md#2-3-1-user-personas)
  - [2.3.2. User Task Matrix](cap2-requirements-elicitation-and-analysis.md#2-3-2-user-task-matrix)
  - [2.3.3. User Journey Mapping](cap2-requirements-elicitation-and-analysis.md#2-3-3-user-journey-mapping)
  - [2.3.4. Empathy Mapping](cap2-requirements-elicitation-and-analysis.md#2-3-4-empathy-mapping)
- [2.4. Big Picture Event Storming](cap2-requirements-elicitation-and-analysis.md#2-4-big-picture-eventstorming)
- [2.5. Ubiquitous Language](cap2-requirements-elicitation-and-analysis.md#2-5-ubiquitous-language)

---

## [Capítulo III: Requirements Specification](cap3-requirements-specification.md)

- [3.1. User Stories](cap3-requirements-specification.md#3-1-user-stories)
- [3.2. Impact Mapping](cap3-requirements-specification.md#3-2-impact-mapping)
- [3.3. Product Backlog](cap3-requirements-specification.md#3-3-product-backlog)

---

## [Capítulo IV: Product Design](cap4-Product-design.md)

- [4.1. Style Guidelines](cap4-Product-design.md#4-1-style-guidelines)
  - [4.1.1. General Style Guidelines](cap4-Product-design.md#4-1-1-general-style-guidelines)
  - [4.1.2. Web Style Guidelines](cap4-Product-design.md#4-1-2-web-style-guidelines)
- [4.2. Information Architecture](cap4-Product-design.md#4-2-information-architecture)
  - [4.2.1. Organization Systems](cap4-Product-design.md#4-2-1-organization-systems)
  - [4.2.2. Labeling Systems](cap4-Product-design.md#4-2-2-labeling-systems)
  - [4.2.3. SEO Tags and Meta Tags](cap4-Product-design.md#4-2-3-seo-tags-meta-tags)
  - [4.2.4. Searching Systems](cap4-Product-design.md#4-2-4-searching-systems)
  - [4.2.5. Navigation Systems](cap4-Product-design.md#4-2-5-navigation-systems)
- [4.3. Landing Page UI Design](cap4-Product-design.md#4-3-landing-page-ui-design)
  - [4.3.1. Landing Page Wireframe](cap4-Product-design.md#4-3-1-landing-page-wireframe)
  - [4.3.2. Landing Page Mock-up](cap4-Product-design.md#4-3-2-landing-page-mock-up)
- [4.4. Web Applications UX/UI Design](cap4-Product-design.md#4-4-web-applications-ux-ui-design)
  - [4.4.1. Web Applications Wireframes](cap4-Product-design.md#4-4-1-web-applications-wireframes)
  - [4.4.2. Web Applications Wireflow Diagrams](cap4-Product-design.md#4-4-2-web-applications-wireflow-diagrams)
  - [4.4.3. Web Applications Mock-ups](cap4-Product-design.md#4-4-3-web-applications-mock-ups)
  - [4.4.4. Web Applications User Flow Diagrams](cap4-Product-design.md#4-4-4-web-applications-user-flow-diagrams)
- [4.5. Web Applications Prototyping](cap4-Product-design.md#4-5-web-applications-prototyping)
- [4.6. Domain-Driven Software Architecture](cap4-Product-design.md#4-6-domain-driven-software-architecture)
  - [4.6.1. Design-Level Event Storming.](cap4-Product-design.md#4-6-1-design-level-eventstorming)
  - [4.6.2. Software Architecture Context Diagram](cap4-Product-design.md#4-6-2-software-architecture-context-diagram)
  - [4.6.3. Software Architecture Container Diagrams](cap4-Product-design.md#4-6-3-software-architecture-container-diagrams)
  - [4.6.4. Software Architecture Components Diagrams](cap4-Product-design.md#4-6-4-software-architecture-components-diagrams)
- [4.7. Software Object-Oriented Design](cap4-Product-design.md#4-7-software-object-oriented-design)
  - [4.7.1. Class Diagrams](cap4-Product-design.md#4-7-1-class-diagrams)
- [4.8. Database Design](cap4-Product-design.md#4-8-database-design)
  - [4.8.1. Database Diagram](cap4-Product-design.md#4-8-1-database-diagrams)

---

## [Capítulo V: Product Implementation, Validation & Deployment](cap5-product-implementation-validation-and-deployment.md)

- [5.1. Software Configuration Management](cap5-product-implementation-validation-and-deployment.md#5-1-software-configuration-management)
  - [5.1.1. Software Development Environment Configuration](cap5-product-implementation-validation-and-deployment.md#5-1-1-software-development-environment-configuration)
  - [5.1.2. Source Code Management](cap5-product-implementation-validation-and-deployment.md#5-1-2-source-code-management)
  - [5.1.3. Source Code Style Guide & Conventions](cap5-product-implementation-validation-and-deployment.md#5-1-3-source-code-style-guide-conventions)
  - [5.1.4. Software Deployment Configuration](cap5-product-implementation-validation-and-deployment.md#5-1-4-software-deployment-configuration)
- [5.2. Landing Page, Services & Applications Implementation](cap5-product-implementation-validation-and-deployment.md#5-2-landing-page-services-applications-implementation)
  - [5.2.1. Sprint 1](cap5-product-implementation-validation-and-deployment.md#5-2-1-sprint-1)
    - [5.2.1.1. Sprint Planning 1](cap5-product-implementation-validation-and-deployment.md#5-2-1-1-sprint-planning-1)
    - [5.2.1.2. Aspect Leaders and Collaborators](cap5-product-implementation-validation-and-deployment.md#5-2-1-2-aspect-leaders-and-collaborators)
    - [5.2.1.3. Sprint Backlog 1](cap5-product-implementation-validation-and-deployment.md#5-2-1-3-sprint-backlog-1)
    - [5.2.1.4. Development Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-1-4-development-evidence-for-sprint-review)
    - [5.2.1.5. Execution Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-1-5-execution-evidence-for-sprint-review)
    - [5.2.1.6. Services Documentation Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-1-6-services-documentation-evidence-for-sprint-review)
    - [5.2.1.7. Software Deployment Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-1-7-software-deployment-evidence-for-sprint-review)
    - [5.2.1.8. Team Collaboration Insights during Sprint](cap5-product-implementation-validation-and-deployment.md#5-2-1-8-team-collaboration-insights-during-sprint)
  - [5.2.2. Sprint 2](cap5-product-implementation-validation-and-deployment.md#5-2-2-sprint-2)
      - [5.2.2.1. Sprint Planning 2](cap5-product-implementation-validation-and-deployment.md#5-2-2-1-sprint-planning-2)
      - [5.2.2.2. Aspect Leaders and Collaborators](cap5-product-implementation-validation-and-deployment.md#5-2-2-2-aspect-leaders-and-collaborators)
      - [5.2.2.3. Sprint Backlog 2](cap5-product-implementation-validation-and-deployment.md#5-2-2-3-sprint-backlog-2)
      - [5.2.2.4. Development Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-2-4-development-evidence-for-sprint-review)
      - [5.2.2.5. Execution Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-2-5-execution-evidence-for-sprint-review)
      - [5.2.2.6. Services Documentation Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-2-6-services-documentation-evidence-for-sprint-review)
      - [5.2.2.7. Software Deployment Evidence for Sprint Review](cap5-product-implementation-validation-and-deployment.md#5-2-2-7-software-deployment-evidence-for-sprint-review)
      - [5.2.2.8. Team Collaboration Insights during Sprint](cap5-product-implementation-validation-and-deployment.md#5-2-2-8-team-collaboration-insights-during-sprint)
  - [5.2.3. Sprint 3]()
      - [5.2.2.1. Sprint Planning 3]()
      - [5.2.2.2. Aspect Leaders and Collaborators]()
      - [5.2.2.3. Sprint Backlog 3]()
      - [5.2.2.4. Development Evidence for Sprint Review]()
      - [5.2.2.5. Execution Evidence for Sprint Review]()
      - [5.2.2.6. Services Documentation Evidence for Sprint Review]()
      - [5.2.2.7. Software Deployment Evidence for Sprint Review]()
      - [5.2.2.8. Team Collaboration Insights during Sprint]()
- [5.3. Validation Interviews](cap5-product-implementation-validation-and-deployment.md#53-validation-interviews)
  - [5.3.1. Diseño de Entrevistas.](cap5-product-implementation-validation-and-deployment.md#531-diseño-de-entrevistas)
  - [5.3.2. Registro de Entrevistas.](cap5-product-implementation-validation-and-deployment.md#532-registro-de-entrevistas)
  - [5.3.3. Evaluaciones según heurísticas.](cap5-product-implementation-validation-and-deployment.md#533-evaluaciones-según-heurísticas)
- [5.4. Video About-the-Product.](cap5-product-implementation-validation-and-deployment.md#54-video-about-the-product)
---

## [Conclusiones](Conclusiones.md)

- [Conclusiones y recomendaciones](Conclusiones.md#conclusiones)
- [Video About-the-Team](Conclusiones.md#recomendaciones)

---

## [Bibliografía](Bibliografia.md#bibliografia)

---

## [Anexos](Anexos.md#anexos)

# ABET – EAC - Student Outcome 5

**Criterio:** *La capacidad de funcionar efectivamente en un
equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de
colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.*

En el siguiente cuadro se describe las acciones realizadas y enunciados de conclusiones por parte del grupo, que permiten sustentar el haber alcanzado el logro del ABET – EAC - Student Outcome 3.


| Criterio específico | Acciones realizadas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Conclusiones                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Trabaja en equipo para proporcionar liderazgo en forma conjunta.** | **Rocha Cotrina, Alvaro** <br />AV1: Elaboración de User Stories y Epics, Web Applications Mock-ups, General y Web Style Guidelines, Desktop Mockups, Organization Systems, Labeling Systems, Navigation Systems, Searching Systems, Ubiquitous Language, Software Configuration Management y Registro de Entrevistas. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> AV1: Registro de Entrevistas, User Stories, Class and Database Diagrams Information, Web Application User Flow Diagram, configuración del entorno de desarrollo, Source Code Style Guide & Conventions y elaboración del PPT grupal. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> AV1: Class Diagram, Database Diagrams, Web Applications Wireframes, Style Guidelines, User Stories, Lean UX, Web Applications Mock-ups, Organization Systems, SEO Tags and Meta Tags, Navigation Systems, Landing Page Mock-up y Registro de Entrevistas.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> AV1: Lean UX Process, Segmentos objetivo, Needfinding, User Personas, User Task Matrix, User Journey Mapping, User Stories, Product Backlog, Navigation Systems, Landing Page UI Design, Wireframes, Mock-ups, EventStorming, Sprint Backlog y evidencias de Sprint Review. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> AV1: Antecedentes y problemática, Registro de Entrevistas, User Personas, User Task Matrix, User Journey Mapping, Empathy Mapping, User Stories, Product Backlog, UX/UI Design, diagramas de arquitectura de software, Sprint Planning y Student Outcome. **Rocha Cotrina, Alvaro** <br />TB1 (Sprint 2): Lideró el reporte de Bounded Contexts, la elaboración del Trello para el Sprint 2 y el seguimiento de la tabla de evidencias de desarrollo y colaboración del equipo. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> TB1 (Sprint 2): Coordinó la colaboración de tareas dentro de los Bounded Contexts, gestionó parte del Sprint Backlog 2 y lideró la elaboración del material visual para la exposición grupal. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> TB1 (Sprint 2): Asumió el liderazgo en la definición de "Aspect Leaders and Collaborators", consolidó los insights de colaboración del equipo y gestionó las evidencias de ejecución para el Sprint Review.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> TB1 (Sprint 2): Responsable del despliegue del Front-End en Firebase, la actualización de tareas e internacionalización (I18n) y la estructuración de los contextos de Schedule y Support. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> TB1 (Sprint 2): Lideró el despliegue del Front-End en Vercel y del servidor de datos (json-server) en Render, además de gestionar la implementación de los Bounded Contexts de Projects e IAM.| **AV1:** El desarrollo del proyecto permitió demostrar la capacidad de trabajar de manera coordinada dentro del equipo, ejerciendo un liderazgo compartido basado en la colaboración, la comunicación efectiva y la toma de decisiones conjunta. Cada integrante asumió responsabilidades específicas, aportando desde su rol al direccionamiento del trabajo, lo que facilitó la organización de actividades, la resolución de problemas y el cumplimiento de los objetivos establecidos de forma colectiva. <br /><br /> **TB1:** Durante el Sprint 2, el equipo consolidó un modelo de liderazgo compartido donde la toma de decisiones técnicas (como la elección de plataformas de despliegue y la estructuración de microservicios) se realizó de forma conjunta. La capacidad de liderazgo se manifestó en la autogestión de los Bounded Contexts, asegurando que cada módulo funcional estuviera alineado con los objetivos del negocio y las metas del Sprint, garantizando una integración fluida entre los componentes desarrollados por cada miembro.|
| **Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos.** | **Rocha Cotrina, Alvaro** <br />AV1: Coordinó la definición de estándares de diseño y lineamientos visuales, promoviendo acuerdos comunes para asegurar coherencia entre los entregables del equipo. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> AV1: Organizó y documentó los flujos de usuario y diagramas técnicos, asegurando que la información estuviera disponible y clara para todos los integrantes del equipo. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> AV1: Planificó y desarrolló diagramas estructurales y wireframes, alineando los aspectos técnicos y visuales con los objetivos definidos por el equipo.<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> AV1: Lideró el proceso de investigación de usuarios y definición de segmentos objetivo, estableciendo metas claras para el diseño centrado en el usuario. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> AV1: Estructuró el análisis del problema y los artefactos de UX, asegurando la alineación entre necesidades del usuario y objetivos del proyecto. **Rocha Cotrina, Alvaro** <br />TB1 (Sprint 2): Estableció el entorno de seguimiento en Trello, definiendo las metas de desarrollo para el soporte de despliegue de software. <br /><br />**Esquicha Alcántara, Diego Alonso**<br /> TB1 (Sprint 2): Planificó la documentación de servicios y aseguró la inclusión de todos los avances técnicos en la presentación final del equipo. <br /><br />**Quispe Llacsahuanga, César Augusto**<br /> TB1 (Sprint 2): Documentó los servicios para el Sprint Review, facilitando un entorno de transparencia informativa sobre el estado del sistema "Bounded system".<br /> <br />**Guillen Giraldo, Mike Dylan**<br /> TB1 (Sprint 2): Ejecutó la planificación de tareas técnicas para los módulos de configuración (Settings) y cronogramas (Schedule), cumpliendo con los tiempos de entrega. <br /> <br />**Teran Zavala, Mauricio Alejandro**<br /> TB1 (Sprint 2): Aseguró la operatividad del entorno colaborativo mediante el despliegue continuo en entornos de producción (Vercel/Render) para las pruebas del equipo.  | **AV1:** El desarrollo del proyecto permitió evidenciar la capacidad del equipo para trabajar de manera colaborativa e inclusiva, estableciendo metas claras desde las etapas iniciales y planificando las tareas de forma organizada y coordinada. A lo largo del trabajo, los integrantes participaron activamente en la definición de responsabilidades, la toma de decisiones y el seguimiento de avances, fomentando un ambiente de respeto, comunicación constante y apoyo mutuo. Esta dinámica permitió integrar diferentes perspectivas técnicas y funcionales, optimizar el uso del tiempo y cumplir de manera efectiva con los objetivos académicos y del proyecto, demostrando un desempeño alineado con los principios del trabajo en equipo establecidos por el Student Outcome. <br /><br />  **TB1:** El equipo fomentó un entorno inclusivo mediante la rotación de responsabilidades técnicas y el apoyo mutuo en las fases de despliegue. Se establecieron metas específicas para el Sprint 2 mediante un Sprint Backlog detallado, lo que permitió una planificación rigurosa de las tareas de codificación y documentación. El cumplimiento de los objetivos se evidenció en la entrega de un producto funcional desplegado en múltiples plataformas y una documentación técnica que refleja fielmente la colaboración y el esfuerzo colectivo por alcanzar los estándares de calidad exigidos.             |
