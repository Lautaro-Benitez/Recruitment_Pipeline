# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y el proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [2.4.0] - 2026-08-21

### Agregado
- **Custom Dropdowns**: Reemplazo de los menús desplegables nativos (`<select>`) por componentes de interfaz gráfica personalizados 100% en Vanilla JS.
- **Custom Datepicker**: Nuevo calendario integrado construido desde cero para reemplazar los inputs nativos `<input type="date">`, garantizando uniformidad en todos los navegadores.
- Ícono de búsqueda "Lupa" en el campo principal de búsqueda.

## [2.3.0] - 2026-08-21

### Agregado
- **Arquitectura de Estilos**: Refactorización completa del sistema de estilos migrando a la metodología ITCSS y Diseño Atómico (OOCSS/BEM). Todo el CSS es ahora modular y está organizado en carpetas lógicas.

### Cambiado
- El código HTML fue limpiado eliminando todos los estilos integrados (`style="..."`) para adoptar un sistema de clases utilitarias (`css/utilities/`).
- La interfaz general ha recibido ligeros ajustes de márgenes, paddings y colores gracias al nuevo sistema de variables centralizado.

## [2.2.0] - 2026-08-10

### Agregado
- **Guardado en carpeta**: se elige una carpeta una sola vez y la app mantiene ahí un único `pipeline.json`, siempre el mismo archivo, más una subcarpeta `backups/` con copias fechadas: una por cada guardado manual y, en el guardado automático, como mucho una por hora (dos guardados dentro del mismo minuto comparten copia). Se conservan las 10 más recientes y las viejas se borran solas.
- **Destino de guardado obligatorio**: si no hay ninguno configurado, o se perdió el acceso al que había, un modal bloqueante pide elegir uno antes de poder seguir usando la app. Antes se podía trabajar toda una sesión sin que los datos llegaran a ningún archivo.
- **Detección de conflictos**: antes de sobrescribir se compara la fecha de modificación del archivo con la que dejó la app. Si lo cambiaron por fuera (otra pestaña, otra persona, una carpeta sincronizada), se pregunta entre pisar el archivo o descartar los cambios locales y recargar.
- **Verificación post-escritura**: después de guardar, la app relee el archivo y confirma que sea un JSON válido con la misma cantidad de candidatos. Si no coincide, avisa en vez de reportar un guardado exitoso.
- **Aviso de cambios sin guardar**: banner visible en todas las pantallas cuando pasan más de 10 minutos con cambios pendientes, con botón para guardar en el momento.
- **Panel de estado del guardado** en Configuración: destino actual, último guardado, última copia en el navegador y cantidad de candidatos guardados.

### Cambiado
- La copia de emergencia del navegador pasa de una sola versión a las 5 últimas, separadas por al menos 5 minutos entre sí, para que sirvan como historial y no como cinco copias del mismo instante.
- La app pide al navegador almacenamiento persistente (`navigator.storage.persist()`), para que la copia de emergencia no sea desalojada por falta de espacio.
- "Reconectar" ahora también restablece el permiso de una carpeta conectada, no solo el de un archivo suelto.

### Corregido
- El indicador de guardado mostraba "Guardado" sin hora al abrir la app, porque la hora era una variable de sesión que arrancaba vacía. Ahora se toma del `savedAt` del propio archivo y se muestra con la fecha cuando el guardado no es de hoy.

## [2.1.0] - 2026-08-10

### Agregado
- Filtro de "Título profesional" (job title) en el módulo de Base de datos: se completa automáticamente con los títulos cargados en los candidatos y se combina con los filtros ya existentes, la búsqueda y la exportación de la vista filtrada.
- El pie de página ahora muestra la fecha de publicación junto al número de versión, y al hacer clic reabre el modal de novedades para consultar los cambios cuando se quiera.

### Cambiado
- El CSS y el JavaScript se separaron del HTML en archivos propios (`styles.css` y `app.js`), enlazados con rutas relativas desde `index.html`. Sin cambios de comportamiento: es la misma aplicación repartida en tres archivos.
- Los enlaces a `styles.css` y `app.js` llevan la versión como parámetro (`?v=2.1.0`), para que al publicar una versión nueva el navegador no siga usando los archivos viejos que tenía en caché.
- El proceso de publicación de versiones quedó documentado en el README, con la checklist de los cuatro lugares donde hay que actualizar el número.

## [2.0.0] - 2026-07-18

### Agregado
- **Nuevo sistema de guardado en archivo**, similar a un programa de escritorio: "Guardar", "Guardar como...", "Abrir..." y guardado automático a un archivo `.json` elegido por la persona usuaria, en su propia computadora. Reemplaza al guardado silencioso en el navegador, que no era confiable fuera del entorno de desarrollo y se perdía con facilidad (reinicios, limpieza de caché, cambio de navegador).
- **Modo de compatibilidad automático** para navegadores que no soportan el guardado directo a carpeta (Firefox, Safari): "Guardar" descarga el archivo a Descargas y "Abrir" usa un selector de archivo tradicional, sin perder funcionalidad.
- **Red de seguridad local**: además del archivo elegido, la app guarda una copia de emergencia en el propio navegador (IndexedDB). Si se cierra la pestaña sin haber guardado a un archivo, al volver a abrir la app esos datos se recuperan igual.
- **Indicador de estado de guardado** siempre visible arriba a la derecha (Guardando / Guardado / Cambios sin guardar / Error / Reconectar).
- **Avisos (toasts)** para confirmar acciones (guardado exitoso, archivo abierto, reconexión) y errores.
- **Ventanas de confirmación y error**: se pregunta antes de abrir otro archivo si hay cambios sin guardar (con opción de guardar primero), y se muestra el detalle técnico si algo falla al guardar o abrir un archivo, sin perder los datos en pantalla.
- Aviso antes de cerrar la pestaña si hay cambios sin guardar.
- Banner de "Reconectar" cuando el navegador pierde el permiso de escritura sobre el archivo conectado (por ejemplo tras reiniciarlo), con reconexión en un clic.

### Cambiado
- La tarjeta "Respaldo automático (CSV)" de Configuración fue reemplazada por la nueva tarjeta "Guardado", que controla el archivo principal del pipeline.
- La tarjeta de CSV pasa a llamarse "Exportar / Importar CSV" y queda explícitamente como herramienta para compartir datos o abrirlos en Excel, no como mecanismo de guardado.
- El guardado automático ahora está activado por defecto, con un intervalo de referencia de 5 minutos (además del guardado rápido que ocurre unos segundos después de cada cambio).

## [1.6.0] - 2026-06-24

### Agregado
- Aviso de novedades: un modal que aparece automáticamente cuando el sistema se actualiza a una nueva versión, resumiendo los cambios.

### Cambiado
- La impresión y exportación a PDF ahora conserva los colores del dashboard y distribuye el contenido en hojas A4 con márgenes laterales y superiores, lista para imprimir.
- El contador de seguimientos pendientes se movió del botón de Configuración al de Dashboard, y ahora se actualiza correctamente al registrar avances en el historial de un candidato (la alerta de "sin contacto" se resuelve al registrar actividad).
- Los valores numéricos de la tabla "Efectividad por fuente de contratación" quedaron centrados para mejor lectura.

## [1.5.0] - 2026-06-24

### Agregado
- Panel de "Efectividad por fuente de contratación" en el Dashboard: por cada canal muestra candidatos totales, contratados y tasa de contratación.
- Recordatorios de seguimiento más visibles: el contador del menú lateral ahora refleja toda la base (no los filtros del dashboard), con un tooltip que detalla cuántos candidatos tienen seguimiento pendiente o atrasado.
- Botón "Exportar filtrado (CSV)" en el Dashboard, que exporta solo los candidatos que cumplen los filtros activos.

### Cambiado
- Al imprimir o guardar el reporte como PDF, el navegador sugiere un nombre de archivo estructurado (ej. `Pipeline_Report_Overall_2026-06-24`), que incorpora el filtro principal activo.

## [1.4.1] - 2026-06-24

### Limpieza interna (sin cambios funcionales)
- Eliminadas reglas CSS huérfanas (`.alert-detail`, `.modal-sm`, `.config-card.full`).
- Eliminada la función vacía `setSaveStatus` y sus llamadas sin efecto.
- Consolidada la lógica de ordenamiento del historial en una única función, eliminando código duplicado.
- Eliminadas claves de traducción sin uso (`collapseNav`, `exportCsv`, `lastSavedLocal`, `savingLocal`, `lblStatus`, `lblStage`).

## [1.4.0] - 2026-06-24

### Agregado
- Filtros de Estado y Etapa en el Dashboard, que también se reflejan en el encabezado del reporte impreso.
- Visualización de la fecha y hora de la última exportación en la tarjeta de exportación manual.

### Cambiado
- El título de cada vista ahora se muestra a la misma altura que el selector de idioma, eliminando el espacio vacío superior.
- El módulo de Configuración se reorganizó en grupos por tipo: "Datos y respaldo", "Listas maestras" y "Alertas".

## [1.3.0] - 2026-06-24

### Agregado
- Botón "Imprimir reporte" en el Dashboard: genera una versión imprimible (o "Guardar como PDF") del dashboard ya filtrado, lista para compartir con un superior. Incluye un encabezado con la fecha de generación y los filtros aplicados, y oculta el menú lateral, los controles y el pie de página para una salida limpia en papel.

## [1.2.1] - 2026-06-24

### Cambiado
- Idioma por defecto cambiado a inglés.
- Paleta de grises pasada a un tono neutro puro (sin tinte azulado) en menú lateral, fondos y contenedores; el azul queda reservado solo para la acción primaria.
- Botón de colapsar el menú reubicado al encabezado del menú lateral, ahora compacto y solo con icono.
- Centrado correcto de los iconos del menú cuando está colapsado.

### Quitado
- Barra de acento lateral de color en las tarjetas de KPI (se conserva el valor coloreado por métrica).

## [1.2.0] - 2026-06-24

### Cambiado
- Rediseño visual integral con una paleta de grises neutra y profesional: menú lateral oscuro, contenedores y fondos en escala de grises, y acentos controlados (azul para acción primaria, rojo para destructivo, gris para cancelar).
- Tarjetas de KPI rediseñadas con color temático por métrica (barra de acento y valor coloreado) para lectura más rápida del dashboard.
- Iconos de la interfaz reemplazados por SVG nítidos y proporcionados (menú, base de datos, configuración, colapso, cerrar, eliminar, editar, engranaje).
- Menú lateral colapsable con transición más suave y mejor comportamiento del estado contraído.
- Pie de página fijado al fondo de la pantalla.
- Modales sin líneas divisorias, con sombras suaves y campos de formulario más limpios.

### Unificado
- Todos los botones de cerrar y eliminar ("X") comparten ahora un único componente de estilo, eliminando definiciones duplicadas para un mismo elemento.

## [1.1.0] - 2026-06-24

### Agregado
- Historial de Estado/Etapa por candidato: cada cambio de proceso se registra como un evento con fecha, en vez de sobrescribir un único campo. El estado y la etapa "actuales" se calculan automáticamente como el evento más reciente del historial, y son editables/eliminables desde el formulario del candidato.
- Campos **Nombre** y **Apellido** separados (antes "Nombre completo" único).
- Campo **Título profesional** del candidato.
- Menú lateral colapsable, con preferencia recordada entre sesiones.
- Pie de página global con versión del sistema y crédito, sincronizado con este changelog.

### Cambiado
- El gráfico de tendencia mensual ahora ocupa siempre el ancho completo de su panel y se redibuja al cambiar el tamaño de la ventana o al colapsar el menú lateral.
- El gráfico de tendencia muestra siempre los 12 meses del año en curso (enero a diciembre), reemplazando la ventana móvil de 6 meses.
- El botón de cerrar ventana modal (X) y los botones de eliminar de listas ahora usan color rojo para mayor claridad visual.
- Refactor interno: gestores de Reclutadores/Clientes y las listas de Estado/Etapa/Resultado se consolidaron en factories reutilizables, reduciendo duplicación de código sin cambiar el comportamiento.

## [1.0.0] - 2026-06-24

### Agregado
- Dashboard con KPIs, embudo de selección, distribución por estado, posición, reclutador/a y cliente.
- Gráfico de tendencia mensual (enero a diciembre) de candidatos entrevistados/enviados vs. contratados.
- Panel de alertas: seguimiento vencido, sin contacto prolongado y estancamiento en una etapa, con umbrales configurables.
- Base de datos de candidatos con los 25 campos del pipeline original, búsqueda libre, filtros combinables y orden por columna.
- Formulario completo de alta/edición de candidato, organizado en secciones (datos personales, perfil profesional, condiciones, estado del proceso, fechas, notas).
- Gestores de **Reclutadores/as** y de **Clientes** con listas reutilizables en los formularios y conteo de uso.
- Selector de idioma Español / English aplicado a toda la interfaz.
- Navegación lateral (Dashboard / Base de Datos / Configuración) con indicador de alertas activas.
- Exportación a CSV manual y respaldo automático configurable (intervalo en minutos) descargado a la carpeta de Descargas del navegador.
- Importación de candidatos desde un archivo CSV exportado previamente.
- Persistencia local en el navegador: los datos no se pierden al cerrar o recargar la página.

### Notas técnicas
- Aplicación 100% client-side (HTML + CSS + JavaScript), sin dependencias externas ni backend.
- El respaldo automático no usa la API de Google Drive; descarga el CSV al navegador, por lo que requiere sincronización manual de carpetas si se quiere reflejar en Drive.
