# 3.2. User Stories

En esta sección se veran las historias de usuario que ayudaran en el desarrollo de la plataforma Vantage, enfocadandonos en resolver la fragmentación de la información y mejorar el control estratégico.

# 3.2. User Stories

## EP01: Gestión de Portafolio y Proyectos.

| **Epic / Story ID** | **EP01 / US01** |
| :--- | :--- |
| **Título** | **Creación de Proyectos Centralizada** |
| **Descripción** | **Como** PMO Lead, **quiero** crear nuevos proyectos asignando cliente, fechas y prioridad **para** tener un registro único de todos los avances de trabajo. |
| **Relacionado con** | **EP01: Gestión de Portafolio** |
| **Criterios de Aceptación** | **Scenario 1: Registro de proyecto con éxito**<br> **Dado que** el PMO Lead se encuentra en el formulario de "Nuevo Proyecto"<br> **Cuando** ingresa el nombre, cliente y fechas válidas y hace clic en "Guardar"<br> **Entonces** el sistema registra el proyecto y lo muestra en la lista de portafolio.<br><br> **Scenario 2: Validación de fechas**<br> **Dado que** el PMO Lead está creando un proyecto<br> **Cuando** selecciona una fecha de fin anterior a la fecha de inicio<br> **Entonces** el sistema muestra un mensaje de alerta "La fecha de fin debe ser posterior" y bloquea el botón de guardado. |
###
| **Epic / Story ID** | **EP01 / US02** |
| :--- | :--- |
| **Título** | **Visualización de Portafolio (Vista 360°)** |
| **Descripción** | **Como** Ingenierío Tecnológico, **quiero** visualizar una lista de todos los proyectos activos con su estado actual **para** identificarlo de manera rápida. |
| **Relacionado con** | **EP01: Gestión de Portafolio** |
| **Criterios de Aceptación** | **Scenario 1: Visualización de lista de proyectos**<br> **Dado que** el usuario ingresa a la plataforma<br> **Cuando** navega a la sección "Portafolio"<br> **Entonces** el sistema muestra una tabla con todos los proyectos, indicando su estado con colores (Verde, Amarillo, Rojo). |
###
| **Epic / Story ID** | **EP01 / US03** |
| :--- | :--- |
| **Título** | **Estandarización mediante Plantillas** |
| **Descripción** | **Como** Líder de gestión, **quiero** utilizar plantillas predefinidas al crear proyectos **para** asegurar que todos los equipos sigan el mismo estándar de documentación. |
| **Relacionado con** | **EP01: Gestión de Portafolio** |
| **Criterios de Aceptación** | **Scenario 1: Aplicación de plantilla**<br> **Dado que** el usuario está configurando un nuevo proyecto<br> **Cuando** selecciona la plantilla "Desarrollo de Software"<br> **Entonces** el sistema carga automáticamente las fases, hitos y carpetas de documentos predeterminadas. |
## EP02: Seguimiento y Colaboración
| **Epic / Story ID** | **EP02 / US04** |
| :--- | :--- |
| **Título** | **Asignación de Tareas con Responsables** |
| **Descripción** | **Como** Coordinadora de Operaciones, **quiero** asignar tareas específicas a miembros del equipo con fechas límite **para** que cada persona tenga claridad sobre sus responsabilidades. |
| **Relacionado con** | **EP02: Seguimiento y Colaboración** |
| **Criterios de Aceptación** | **Scenario 1: Asignación exitosa**<br> **Dado que** la Coordinadora crea una nueva tarea<br> **Cuando** selecciona a un miembro del equipo del menú desplegable y asigna una fecha<br> **Entonces** el sistema guarda la tarea y notifica al responsable asignado. |
###
| **Epic / Story ID** | **EP02 / US05** |
| :--- | :--- |
| **Título** | **Repositorio de Documentos por Proyecto** |
| **Descripción** | **Como** miembro del equipo, **quiero** adjuntar documentos directamente a una tarea o proyecto **para** evitar que la información se pierda en correos o chats. |
| **Relacionado con** | **EP02: Seguimiento y Colaboración** |
| **Criterios de Aceptación** | **Scenario 1: Subida de archivo soportado**<br> **Dado que** el usuario está en los detalles de una tarea<br> **Cuando** sube un archivo PDF o Excel menor a 10MB<br> **Entonces** el sistema adjunta el archivo y permite su visualización al resto del equipo. |
###
| **Epic / Story ID** | **EP02 / US06** |
| :--- | :--- |
| **Título** | **Comentarios en Tiempo Real** |
| **Descripción** | **Como** usuario de la plataforma, **quiero** dejar comentarios en las tareas **para** mantener una comunicación fluida sobre los avances sin salir del sistema. |
| **Relacionado con** | **EP02: Seguimiento y Colaboración** |
| **Criterios de Aceptación** | **Scenario 1: Publicación de comentario**<br> **Dado que** el usuario visualiza una tarea activa<br> **Cuando** escribe un mensaje en la caja de comentarios y presiona "Enviar"<br> **Entonces** el comentario aparece inmediatamente con la fecha, hora y nombre del autor. |
## EP03: Dashboards y Toma de Decisiones
| **Epic / Story ID** | **EP03 / US07** |
| :--- | :--- |
| **Título** | **Dashboard Ejecutivo de Salud** |
| **Descripción** | **Como** PMO Lead, **quiero** ver un gráfico de salud del portafolio basado en el cumplimiento de plazos **para** tomar decisiones preventivas sobre proyectos en riesgo. |
| **Relacionado con** | **EP03: Dashboards y Toma de Decisiones** |
| **Criterios de Aceptación** | **Scenario 1: Actualización de salud en riesgo**<br> **Dado que** un proyecto tiene tareas vencidas<br> **Cuando** el PMO Lead ingresa al Dashboard Ejecutivo<br> **Entonces** el sistema muestra el indicador de salud en color "Amarillo" o "Rojo" según la gravedad. |
###
| **Epic / Story ID** | **EP03 / US08** |
| :--- | :--- |
| **Título** | **Reporte Automático de Avance (PDF)** |
| **Descripción** | **Como** Gerente, **quiero** generar un reporte consolidado en PDF del estado de los proyectos **para** presentarlo en reuniones sin consolidar datos manualmente. |
| **Relacionado con** | **EP03: Dashboards y Toma de Decisiones** |
| **Criterios de Aceptación** | **Scenario 1: Generación de reporte exitosa**<br> **Dado que** el Gerente visualiza el resumen de un proyecto<br> **Cuando** hace clic en el botón "Exportar PDF"<br> **Entonces** el sistema descarga un documento con el avance actual y el logo de la empresa. |
## EP04: Alertas y Notificaciones
| **Epic / Story ID** | **EP04 / US09** |
| :--- | :--- |
| **Título** | **Notificación de Vencimiento de Tarea** |
| **Descripción** | **Como** usuario operativo, **quiero** recibir una notificación antes de que venza una tarea asignada **para** priorizar mi jornada y evitar retrasos. |
| **Relacionado con** | **EP04: Alertas y Notificaciones** |
| **Criterios de Aceptación** | **Scenario 1: Envío de alerta preventiva**<br> **Dado que** una tarea está a 24 horas de su fecha límite<br> **Cuando** el sistema realiza la validación automática<br> **Entonces** envía una alerta visual al centro de notificaciones del usuario responsable. |
###
| **Epic / Story ID** | **EP04 / US10** |
| :--- | :--- |
| **Título** | **Alerta de Inactividad de Proyecto** |
| **Descripción** | **Como** PMO Lead, **quiero** recibir una alerta si un proyecto no ha tenido actualizaciones en 3 días **para** intervenir y conocer la causa de la detención. |
| **Relacionado con** | **EP04: Alertas y Notificaciones** |
| **Criterios de Aceptación** | **Scenario 1: Detección de inactividad**<br> **Dado que** un proyecto activo no registra cambios<br> **Cuando** pasan 72 horas sin actividad en tareas o comentarios<br> **Entonces** el sistema envía un aviso al correo del administrador del proyecto. |