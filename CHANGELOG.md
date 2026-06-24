# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y el proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

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
