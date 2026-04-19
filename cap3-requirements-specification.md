### 3.1. User Stories
En esta sección se verán las historias de usuario que ayudarán en el desarrollo de la plataforma Vantage, enfocándonos en resolver la fragmentación de la información y mejorar el control estratégico.

## 1. Landing Page (Presentación y Conversión)
| ID | Título | Descripción | Criterios de Aceptación (Gherkin) | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| **US20** | Autenticación (Acceso) | **Como** usuario, **quiero** iniciar sesión **para** acceder a mis proyectos de forma segura. | **Dado que** el usuario ingresa credenciales, **cuando** son válidas, **entonces** se redirige al dashboard principal. | **EP07: User** |
| **US31** | Perfil de Empresa (Demo) | **Como** Emprendedor, **quiero** ver cómo se vería mi marca **para** convencerme de usar la plataforma. | **Dado que** el usuario está en la Landing, **cuando** ve la sección de personalización, **entonces** se muestra un preview del dashboard con logos cambiables. | **EP13: Customization** |
| **US02** | Visualización de Portafolio (Intro) | **Como** visitante, **quiero** entender cómo se listan los proyectos **para** saber si me sirve. | **Dado que** el usuario navega la landing, **cuando** llega a "Funciones", **entonces** ve una captura de pantalla del portafolio. | **EP02: Portafolio** |

---

## 2. Web Application (Frontend Interactivo)
| ID | Título | Descripción | Criterios de Aceptación (Gherkin) | Relacionado con |
| :--- | :--- | :--- | :--- | :--- |
| **US56** | Formulario Web | **Como** usuario, **quiero** llenar campos validados **para** no enviar errores al servidor. | **Dado que** el campo es obligatorio, **cuando** se deja vacío, **entonces** el botón "Guardar" se deshabilita. | **EP01: Project** |
| **US57** | UI Cards Proyectos | **Como** usuario, **quiero** ver tarjetas visuales **para** entender el portafolio de un vistazo. | **Dado que** se carga la página, **cuando** llegan los datos, **entonces** se renderizan componentes tipo Card. | **EP02: Portafolio** |
| **US33** | Tablero Kanban | **Como** usuario, **quiero** mover tareas entre columnas **para** gestionar mi flujo visualmente. | **Dado que** se arrastra una tarea, **cuando** se suelta en otra columna, **entonces** el estado cambia automáticamente. | **EP03: Manager** |
| **US58** | Checkbox Click | **Como** usuario operativo, **quiero** marcar tareas con un clic **para** agilizar mi trabajo diario. | **Dado que** la tarea está pendiente, **cuando** se clickea, **entonces** la interfaz tacha el texto. | **EP03: Manager** |
| **US59** | Drag & Drop Upload | **Como** usuario, **quiero** arrastrar archivos al navegador **para** subirlos de forma intuitiva. | **Dado que** el archivo está en el escritorio, **cuando** se suelta en la zona de carga, **entonces** inicia la barra de progreso. | **EP04: Document** |
| **US61** | Progress Bar | **Como** Líder, **quiero** ver barras de progreso **para** medir el avance de los proyectos rápidamente. | **Dado que** la tarea es completada, **cuando** cambia el estado, **entonces** la barra del proyecto aumenta proporcionalmente. | **EP08: Dashboard** |
| **US62** | Chat/Comments UI | **Como** usuario, **quiero** ver el feed de comentarios **para** leer el historial de la conversación en la tarea. | **Dado que** hay mensajes previos, **cuando** se abre la tarea, **entonces** se visualizan burbujas de texto con autor. | **EP09: Status** |
| **US63** | Campanita Avisos | **Como** usuario, **quiero** un icono de notificaciones **para** ver alertas de vencimientos pendientes. | **Dado que** llega una alerta, **cuando** el usuario ve el header, **entonces** la campana muestra un punto rojo. | **EP10: Alert** |
| **US64** | Risk Table | **Como** Gerente, **quiero** una tabla con filas resaltadas **para** identificar los riesgos críticos de inmediato. | **Dado que** el riesgo es crítico, **cuando** se renderiza la fila, **entonces** el fondo de la fila se pinta de rojo. | **EP12: Risk** |
| **US65** | Color Picker | **Como** Emprendedor, **quiero** elegir mi color de marca **para** que el dashboard se adapte a mi empresa. | **Dado que** se abre configuración, **cuando** se elige un color, **entonces** los botones y headers cambian de tono. | **EP13: Customization** |
| **US11** | Edición Visual | **Como** PM, **quiero** un botón de editar en cada proyecto **para** corregir datos desde la interfaz. | **Dado que** el usuario presiona "Editar", **cuando** modifica el texto y guarda, **entonces** la UI se actualiza sin recargar. | **EP01: Project** |
| **US39** | Calendario Mensual | **Como** usuario, **quiero** ver un calendario interactivo **para** organizar mis fechas límite. | **Dado que** hay hitos registrados, **cuando** se abre el calendario, **entonces** aparecen eventos clickeables en los días. | **EP06: Meeting** |

---
