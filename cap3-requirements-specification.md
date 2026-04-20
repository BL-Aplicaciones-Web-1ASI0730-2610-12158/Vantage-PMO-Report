## 3.1. User Stories
En esta sección se verán las historias de usuario que ayudarán en el desarrollo de la plataforma Vantage, enfocándonos en resolver la fragmentación de la información y mejorar el control estratégico.

### 1. Landing Page (Presentación y Conversión)
| ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID)|
| :--- | :--- | :--- | :--- | :--- |
| **US20** | Autenticación (Acceso) | **Como** usuario, **quiero** iniciar sesión **para** acceder a mis proyectos de forma segura. | **Dado que** el usuario ingresa credenciales, **cuando** son válidas, **entonces** se redirige al dashboard principal. | **EP07: User** |
| **US31** | Perfil de Empresa (Demo) | **Como** Emprendedor, **quiero** ver cómo se vería mi marca **para** convencerme de usar la plataforma. | **Dado que** el usuario está en la Landing, **cuando** ve la sección de personalización, **entonces** se muestra un preview del dashboard con logos cambiables. | **EP13: Customization** |
| **US02** | Visualización de Portafolio (Intro) | **Como** visitante, **quiero** entender cómo se listan los proyectos **para** saber si me sirve. | **Dado que** el usuario navega la landing, **cuando** llega a "Funciones", **entonces** ve una captura de pantalla del portafolio. | **EP02: Portafolio** |

---

### 2. Web Application (Frontend Interactivo)
| ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID)|
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

### 3. RESTful API (Backend & Lógica de Negocio)
| ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID)|
| :--- | :--- | :--- | :--- | :--- |
| **US41** | Auth JWT | **Como** Backend, **quiero** generar tokens JWT **para** asegurar todas las peticiones a la API. | **Dado que** el login es exitoso, **cuando** se genera la respuesta, **entonces** se incluye un Bearer token válido. | **EP16 / EP07** |
| **US42** | Swagger/Docs | **Como** Frontend, **quiero** ver la documentación de la API **para** integrarme de forma autónoma. | **Dado que** el servidor corre, **cuando** se accede a /swagger-ui, **entonces** se muestran los modelos y endpoints. | **EP16: API** |
| **US43** | CRUD Proyectos API | **Como** Dev, **quiero** endpoints GET/POST/PUT/DELETE **para** gestionar la persistencia de proyectos. | **Dado que** se llama al endpoint, **cuando** el método es correcto, **entonces** devuelve JSON con status 200/201. | **EP16 / EP01** |
| **US44** | Paginación API | **Como** Frontend, **quiero** resultados paginados **para** optimizar el rendimiento de las listas. | **Dado que** hay >10 registros, **cuando** se pide size=10, **entonces** la API devuelve solo la página solicitada. | **EP16: API** |
| **US45** | Upload API | **Como** Dev, **quiero** un endpoint multipart **para** subir archivos binarios a la nube. | **Dado que** se envía un binario válido, **cuando** se procesa, **entonces** devuelve una URL de acceso al archivo. | **EP16 / EP04** |
| **US49** | Validador de Doc | **Como** motor de reglas, **quiero** verificar documentos **para** bloquear el cierre de hitos si faltan archivos. | **Dado que** se evalúa el hito, **cuando** el contador de documentos < requerido, **entonces** devuelve un error 400. | **EP04: Document** |
| **US51** | Hash Password | **Como** seguridad, **quiero** cifrar contraseñas con BCrypt **para** proteger la base de datos de filtraciones. | **Dado que** se crea un usuario, **cuando** se guarda el password, **entonces** se almacena el hash y nunca el texto plano. | **EP16 / EP07** |
| **US52** | Calc Salud | **Como** API, **quiero** calcular el % de retraso matemático **para** determinar el color de alerta. | **Dado que** se pide la salud, **cuando** tareas_vencidas > 20%, **entonces** devuelve el estado "RED". | **EP08: Dashboard** |
| **US53** | Job de Inactividad | **Como** proceso de fondo, **quiero** identificar proyectos estancados **para** disparar avisos automáticos. | **Dado que** es medianoche, **cuando** corre el job, **entonces** marca proyectos sin cambios en las últimas 72h. | **EP10: Alert** |
| **US54** | JSON a PDF | **Como** API, **quiero** estructurar un JSON de reporte **para** alimentar el motor de generación de PDF. | **Dado que** se pide el reporte, **cuando** se genera, **entonces** incluye datos agregados de hitos y costos. | **EP11: Report** |
| **US55** | Sorter de Riesgos | **Como** servicio, **quiero** ordenar riesgos por impacto y probabilidad **para** el frontend. | **Dado que** se listan riesgos, **cuando** se aplica el sort, **entonces** los riesgos con severidad "Crítica" aparecen primero. | **EP12: Risk** |
| **US50** | Rate Limiting | **Como** Admin, **quiero** limitar peticiones por IP **para** evitar ataques DoS a la infraestructura. | **Dado que** una IP supera 100 req/min, **cuando** hace una nueva petición, **entonces** la API devuelve un status 429. | **EP16: API** |

---

### 4. Requerimientos de Negocio Compartidos (Fullstack)
| ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID)|
| :--- | :--- | :--- | :--- | :--- |
| **US14** | Asignación de Recursos | **Como** PMO, **quiero** vincular miembros a proyectos **para** gestionar la carga laboral. | **Dado que** el usuario elige un miembro, **cuando** guarda la asignación, **entonces** la API actualiza la tabla intermedia. | **EP05: Resource** |
| **US23** | Actas de Reunión | **Como** PM, **quiero** registrar minutas de reuniones **para** trazabilidad del proyecto. | **Dado que** finaliza la sesión, **cuando** se guardan las notas, **entonces** el sistema las vinculas al ID del proyecto. | **EP06: Meeting** |
| **US25** | Acuerdos a Tareas | **Como** PM, **quiero** transformar un acuerdo en tarea **para** asegurar que se ejecute. | **Dado que** existe un acuerdo, **cuando** se clickea "Convertir", **entonces** se crea una tarea vinculada automáticamente. | **EP06: Meeting** |
| **US28** | Registro de Riesgos | **Como** PMO, **quiero** documentar riesgos potenciales **para** mitigarlos a tiempo. | **Dado que** se detecta una amenaza, **cuando** se registra impacto/probabilidad, **entonces** el sistema calcula la severidad. | **EP12: Risk** |
| **US21** | Documentos Obligatorios | **Como** PMO, **quiero** marcar qué archivos son indispensables **para** estandarizar el proceso. | **Dado que** se define el proyecto, **cuando** se marca "Requerido", **entonces** el sistema bloquea hitos si el archivo falta. | **EP04: Document** |

---

### 3.2. Impact Mapping

El Impact Mapping es una herramienta que nos permitió estructurar y visualizar de manera clara la relación entre los objetivos del proyecto, los actores involucrados y las funcionalidades propuestas en la solución. A partir de la información recopilada en las entrevistas y el análisis de necesidades, se identificaron los principales problemas que enfrentan los usuarios.
## IMPACT MAPPING 1
![Impact Mapping](img-cap3/Impact1.png)
## IMPACT MAPPING 2
![Impact Mapping](img-cap3/Impact2.png)
### 3.3. Product Backlog

| # Orden | User Story Id | Título | Descripción | Story Points (1/2/3/5/8) |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **US02** | Visualización de Portafolio (Landing) | **Como** visitante, **quiero** entender cómo se listan los proyectos **para** conocer la propuesta de valor. | 3 |
| **2** | **US31** | Perfil de Empresa (Landing) | **Como** Emprendedor, **quiero** ver un preview de personalización de marca **para** decidir el uso de la plataforma. | 5 |
| **3** | **US56** | Formulario de Nuevo Proyecto | **Como** usuario, **quiero** un formulario web con validaciones básicas **para** registrar mis proyectos iniciales. | 3 |
| **4** | **US57** | Interfaz de Tarjetas (Cards) | **Como** usuario, **quiero** visualizar mis proyectos en tarjetas dinámicas **para** una navegación intuitiva. | 2 |
| **5** | **US43** | Endpoint CRUD Proyectos | **Como** desarrollador, **quiero** una API para crear y listar proyectos **para** conectar el frontend con la base de datos. | 5 |
| **6** | **US01** | Registro de Cliente y Fechas | **Como** PMO Lead, **quiero** asignar datos maestros a cada proyecto **para** mantener el orden administrativo. | 2 |
| **7** | **US04** | Asignación de Responsables | **Como** Coordinadora, **quiero** asignar miembros a tareas **para** delegar responsabilidades. | 3 |
| **8** | **US14** | Vinculación de Recursos | **Como** PMO, **quiero** gestionar la carga laboral de los miembros **para** optimizar el equipo. | 5 |
| **9** | **US33** | Tablero Kanban Visual | **Como** usuario, **quiero** un tablero interactivo **para** gestionar el flujo de trabajo mediante drag-and-drop. | 8 |
| **10** | **US58** | Checkbox de Tareas | **Como** usuario, **quiero** marcar tareas completadas con un clic **para** actualizar el progreso diario. | 1 |
| **11** | **US26** | Actualización de Estado | **Como** usuario, **quiero** cambiar la fase del proyecto **para** reflejar el avance real ante los stakeholders. | 2 |
| **12** | **US61** | Barra de Progreso Visual | **Como** Líder, **quiero** ver indicadores gráficos de avance **para** monitorear el rendimiento sin leer tablas. | 3 |
| **13** | **US05** | Adjuntar Documentación | **Como** miembro, **quiero** subir archivos a mis tareas **para** centralizar las evidencias del proyecto. | 5 |
| **14** | **US59** | Carga Drag & Drop | **Como** usuario, **quiero** arrastrar archivos a la interfaz **para** agilizar la subida de documentos. | 3 |
| **15** | **US45** | API de Almacenamiento | **Como** desarrollador, **quiero** un servicio de subida de archivos binarios **para** persistirlos en la nube. | 5 |
| **16** | **US21** | Definición de Obligatorios | **Como** PMO, **quiero** marcar documentos como requeridos **para** estandarizar los procesos de entrega. | 3 |
| **17** | **US49** | Validación Logística de Hitos | **Como** motor de reglas, **quiero** bloquear el cierre de hitos si faltan documentos **para** asegurar la calidad. | 5 |
| **18** | **US28** | Registro de Riesgos | **Como** PMO, **quiero** documentar amenazas potenciales **para** anticipar planes de mitigación. | 3 |
| **19** | **US64** | Visualización de Riesgos Críticos | **Como** Gerente, **quiero** una tabla resaltada con riesgos de alto impacto **para** priorizar mi atención. | 2 |
| **20** | **US55** | Ordenamiento de Riesgos | **Como** servicio, **quiero** clasificar los riesgos por severidad **para** facilitar el análisis de datos. | 3 |
| **21** | **US23** | Registro de Actas de Reunión | **Como** PM, **quiero** guardar minutas de sesiones **para** mantener la trazabilidad de los acuerdos. | 3 |
| **22** | **US25** | Conversión de Acuerdos a Tareas | **Como** PM, **quiero** crear tareas automáticamente desde actas **para** asegurar la ejecución de compromisos. | 5 |
| **23** | **US39** | Calendario de Hitos | **Como** usuario, **quiero** una vista de calendario global **para** evitar cruces de fechas entre proyectos. | 8 |
| **24** | **US06** | Comentarios en Tiempo Real | **Como** usuario, **quiero** dejar feedback en las tareas **para** mejorar la colaboración del equipo. | 5 |
| **25** | **US62** | Interfaz de Historial de Chat | **Como** usuario, **quiero** ver burbujas de texto cronológicas **para** entender el contexto de una tarea. | 3 |
| **26** | **US07** | Indicadores de Salud (Dashboard) | **Como** PMO Lead, **quiero** ver semáforos de salud del portafolio **para** identificar proyectos en crisis. | 5 |
| **27** | **US52** | Cálculo Matemático de Salud | **Como** API, **quiero** procesar el % de tareas vencidas **para** determinar el color del indicador. | 3 |
| **28** | **US08** | Generación de Reporte PDF | **Como** Gerente, **quiero** descargar un resumen ejecutivo en PDF **para** mis reuniones de directorio. | 8 |
| **29** | **US54** | Estructuración de Datos para Reporte | **Como** API, **quiero** consolidar información en JSON **para** alimentar el motor de reportes. | 5 |
| **30** | **US09** | Alerta de Vencimiento Próximo | **Como** usuario, **quiero** notificaciones 24h antes del límite **para** organizar mis prioridades. | 3 |
| **31** | **US63** | Icono de Notificaciones (UI) | **Como** usuario, **quiero** un indicador visual de alertas nuevas **para** no perder actualizaciones críticas. | 2 |
| **32** | **US10** | Alerta de Inactividad (72h) | **Como** PMO Lead, **quiero** saber si un proyecto se ha estancado **para** intervenir oportunamente. | 5 |

---