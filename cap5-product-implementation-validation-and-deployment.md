## 5.1. Software Configuration Management
### 5.1.1. Software Development Environment Configuration
### 5.1.2. Source Code Management
### 5.1.3. Source Code Style Guide & Conventions
### 5.1.4. Software Deployment Configuration
## 5.2. Landing Page, Services & Applications Implementation.
### 5.2.1. Sprint 1
##### 5.2.1.1. Sprint Planning 1
En esta sección, se presentará la planificación de nuestro Sprint 1.

| **Sprint #** |                 **Sprint 1**              |
|--------------|-------------------------------------------|
|**Sprint Planning Background**                            |
| Date         | 2026/04/15                                |
| Time         | 16:00 pm                                  |
| Location     | Reunión virtual mediante discord          |
| Prepared By  | Esquicha Alcántara, Diego Alonso          |
| Attendees    |Rocha Cotrina, Alvaro / Esquicha Alcántara, Diego Alonso / Quispe llacsahuanga, César Agusto / Guillen Giraldo, Mike Dylan / Teran Zavala, Mauricio Alejandro|
| Sprint n-1 Review Summary |  No aplica                   |
| Sprint n-1 Retrospective Summary |  No aplica            |
| **Sprint Goal & User Stories**                           |
|**Sprint 1**  |Nos enfocamos en implementar la estructura principal y las funcionalidades clave de la plataforma de presentación y acceso de Vantage PMO. Creemos que esto aportará una percepción más sólida del producto y despertará un mayor interés entre los líderes de proyectos y empresarios corporativos, al comunicar de forma clara el valor de la gestión centralizada y la gobernanza de portafolios. Esto se confirmará cuando los usuarios potenciales puedan navegar de manera fluida por la interfaz inicial, comprendan fácilmente cómo la solución optimiza la supervisión de múltiples proyectos y muestren una clara intención de interactuar con el sistema o gestionar sus credenciales de acceso.|
| Sprint 1 Velocity   | 18  Story Points                   |
| Sum of Story Points | 18  Story Points                   |

##### 5.2.1.2. Aspect Leaders and Collaborators
En el marco del Sprint 1, se han priorizado los componentes fundamentales del sistema, centrando los esfuerzos en la entrega de funcionalidades críticas: la visualización de información estratégica, una arquitectura de navegación intuitiva, el diseño responsivo de la interfaz y el flujo de seguridad para la autenticación de usuarios.

A fin de garantizar la trazabilidad y una ejecución coordinada, se ha implementado la Matriz de Liderazgo y Colaboración (LACX). En esta herramienta de gestión, se han designado responsables de liderazgo (L) y equipos de apoyo (C) para cada área técnica, optimizando así la sinergia y la calidad de los entregables

| Team Member (Last Name, First Name) | GitHub Username    | Hero | Pillars | Platform  | Features | Ai | About | Onboarding | Testimonials | Blog
| :---------------------------------- | :----------------- | :--------------------- | :------- | :------- | :----------- | :------------------- | :---------------- | :---------------- | :---------------- | :------------------
| Rocha Cotrina, Alvaro | alvarorc24     | L                      | C        | C        | C            | L                   | C | C   | C| C
| Esquicha Alcántara, Diego Alonso    | DiegoEsquich          | C                      | L        | C        | C            | C                   | L   | C| C| C
| Quispe llacsahuanga, César Agusto | user20-bit        | C                      | C        | L        | C            |    C   | C| L| C| C                  |
| Guillen Giraldo, Mike Dylan       | FulLHous          | C                      | C        | C        | L            | C                    |C| C| L| C  
| Teran Zavala, Mauricio Alejandro    | mau-tz | C                      | C        | C        | C            | L                    |C| C| C| L

##### 5.2.1.3. Sprint Backlog 1

El objetivo principal de este sprint consiste en establecer el núcleo funcional y de confianza de la plataforma Vantage PMO, transformando la Landing Page de un sitio informativo en una herramienta interactiva, segura y profesional. Para lograrlo, el equipo se enfocará en consolidar un sistema de autenticación robusto que no solo gestione el acceso, sino que cumpla estrictamente con los estándares legales de privacidad e internacionalización (i18n), eliminando barreras de entrada para mercados globales. Asimismo, se busca potenciar el compromiso del usuario mediante la implementación de un simulador de marca interactivo y un dashboard de portafolio dinámico, desarrollados bajo principios avanzados de UX y Branding para tangibilizar el valor del producto a través de recursos multimedia y micro-interacciones. Finalmente, se garantizará una experiencia de navegación omnicanal y de alto rendimiento mediante un diseño responsivo impecable y la integración de un sistema de notificaciones push, asegurando una comunicación persistente y una transición fluida hacia el ecosistema interno de gestión de proyectos.

**Screenshot del Board**

![Sprint-Backlog-01](assets/images/chapter-5/sprint-backlog-01/sprint-backlog-01.PNG)

*Trello:* https://trello.com/b/9yf99IHI/vantage-pmo-sprint-backlog

<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Sprint #</th>
    <th>Sprint 01</th>
    <th colspan="7"></th>
  </tr>
  <tr>
    <th colspan="2">User Story</th>
    <th colspan="2">Work-item / Task</th>
    <th colspan="5"></th>
  </tr>
  <tr>
    <th>Id</th>
    <th>Title</th>
    <th>Id</th>
    <th>Title</th>
    <th>Description</th>
    <th>Estimation (hours)</th>
    <th>Assigned To</th>
    <th>Status</th>
  </tr>

  <!-- US-020 -->
  <tr>
    <td>US-020</td>
    <td>Autenticación</td>
    <td>T001</td>
    <td>Formulario de inicio de sesión</td>
    <td>Permite iniciar sesión mediante un formulario con validación de credenciales y estados de carga/error.</td>
    <td>2h</td>
    <td>Alvaro Rocha</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T002</td>
    <td>Integración con proveedor de autenticación</td>
    <td>Permite la conexión con el proveedor de Auth (Firebase/Auth0/JWT) e implementa la redirección segura.</td>
    <td>2h</td>
    <td>Diego Esquicha</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T003</td>
    <td>Protección de rutas del dashboard</td>
    <td>Permite proteger las rutas del dashboard mediante middleware, redirigiendo usuarios no autorizados.</td>
    <td>1.5h</td>
    <td>Diego Esquicha</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T004</td>
    <td>Soporte multi-idioma (i18n)</td>
    <td>Permite la localización (i18n) de etiquetas y mensajes de error para una experiencia multi-idioma.</td>
    <td>1h</td>
    <td>Dylan Guillen</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T005</td>
    <td>Integración de privacidad y consentimiento</td>
    <td>Permite cumplir con el soporte legal integrando vínculos de privacidad y consentimiento en el acceso.</td>
    <td>1h</td>
    <td>Dylan Guillen</td>
    <td>Done</td>
  </tr>

  <!-- US-031 -->
  <tr>
    <td>US-031</td>
    <td>Perfil de Empresa</td>
    <td>T001</td>
    <td>Preview interactivo de marca</td>
    <td>Permite previsualizar en tiempo real el nombre y colores de la marca en un widget interactivo de demo.</td>
    <td>2.5h</td>
    <td>Alvaro Rocha</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T002</td>
    <td>Carga local de logos</td>
    <td>Permite cargar y visualizar logos localmente para la demostración sin requerir persistencia en base de datos.</td>
    <td>1.5h</td>
    <td>Mauricio Teran</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T003</td>
    <td>Mejoras UX y micro-interacciones</td>
    <td>Permite mejorar el UX y Branding mediante micro-interacciones y transiciones fluidas en el simulador.</td>
    <td>1h</td>
    <td>Dylan Guillen</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T004</td>
    <td>Optimización de recursos multimedia</td>
    <td>Permite optimizar el rendimiento multimedia mediante la compresión y carga eficiente de activos visuales.</td>
    <td>1.5h</td>
    <td>Alvaro Rocha</td>
    <td>Done</td>
  </tr>

  <!-- US-002 -->
  <tr>
    <td>US-002</td>
    <td>Visión de Portafolio</td>
    <td>T001</td>
    <td>Galería de funciones con progreso</td>
    <td>Permite visualizar la galería de funciones con estados de proyectos y barras de progreso dinámicas.</td>
    <td>2h</td>
    <td>Mauricio Teran</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T002</td>
    <td>Animaciones de scroll</td>
    <td>Permite una navegación visual atractiva mediante animaciones de scroll para revelar las funciones clave.</td>
    <td>1h</td>
    <td>Alvaro Rocha</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T003</td>
    <td>Diseño responsive</td>
    <td>Permite una navegación fluida en cualquier dispositivo gracias al diseño responsive optimizado para móvil y tablet.</td>
    <td>2h</td>
    <td>Cesar Quispe</td>
    <td>Done</td>
  </tr>

  <!-- US-037 -->
  <tr>
    <td>US-037</td>
    <td>Notificaciones Push</td>
    <td>T001</td>
    <td>Configuración de Service Workers</td>
    <td>Permite la suscripción a alertas mediante la configuración de Service Workers y sincronización en segundo plano.</td>
    <td>2h</td>
    <td>Dylan Guillen</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T002</td>
    <td>Gestión de consentimiento</td>
    <td>Permite gestionar el consentimiento del usuario mediante un modal de "soft-prompt" con propuesta de valor.</td>
    <td>1h</td>
    <td>Cesar Quispe</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T003</td>
    <td>Almacenamiento de tokens</td>
    <td>Permite el almacenamiento seguro de los tokens de suscripción en el backend para el envío de notificaciones.</td>
    <td>1.5h</td>
    <td>Cesar Quispe</td>
    <td>Done</td>
  </tr>
  <tr>
    <td></td><td></td>
    <td>T004</td>
    <td>Cumplimiento legal de notificaciones</td>
    <td>Permite garantizar el cumplimiento legal y la gestión de privacidad en el sistema de alertas del sitio.</td>
    <td>1h</td>
    <td>Dylan Guillen</td>
    <td>Done</td>
  </tr>
</table>

##### 5.2.1.4. Development Evidence for Sprint Review
##### 5.2.1.5. Execution Evidence for Sprint Review
##### 5.2.1.6. Services Documentation Evidence for Sprint Review
##### 5.2.1.7. Software Deployment Evidence for Sprint Review
##### 5.2.1.8. Team Collaboration Insights during Sprint