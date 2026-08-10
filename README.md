# Pipeline de Reclutamiento

[![Version](https://img.shields.io/badge/version-2.2.0-blue)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![Windows](https://img.shields.io/badge/Windows-supported-blue?style=flat&logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-supported-blue?style=flat&logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-supported-blue?style=flat&logo=linux&logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Vanilla-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Backend](https://img.shields.io/badge/backend-none-lightgrey)](#stack-técnico)

Herramienta de pipeline de reclutamiento que corre entera en el navegador (`index.html` + `styles.css` + `app.js`, sin paso de build), pensada para que una persona reclutadora tenga una base de candidatos precisa, filtrable, y un dashboard de métricas para reportar a su superior — sin instalar nada ni depender de un servidor.

---

## Índice

- [Características](#características)
- [Cómo usarla](#cómo-usarla)
- [Estructura de datos del candidato](#estructura-de-datos-del-candidato)
- [Dashboard y métricas](#dashboard-y-métricas)
- [Alertas](#alertas)
- [Idioma](#idioma)
- [Respaldo y persistencia de datos](#respaldo-y-persistencia-de-datos)
- [Reclutadores y clientes](#reclutadores-y-clientes)
- [Stack técnico](#stack-técnico)
- [Limitaciones conocidas](#limitaciones-conocidas)
- [Roadmap / ideas a futuro](#roadmap--ideas-a-futuro)
- [Versionado](#versionado)
- [Licencia](#licencia)

---

## Características

- **Base de datos de candidatos** con los 25 campos del pipeline (datos personales, perfil profesional, condiciones, estado del proceso, fechas y notas).
- **Búsqueda y filtros combinables** por título profesional, posición, estado, etapa, reclutador/a y cliente.
- **Dashboard ejecutivo** con KPIs, embudo de selección, distribución por estado/posición/reclutador/cliente, resultados de procesos cerrados y tendencia mensual.
- **Panel de alertas** configurable: detecta seguimientos vencidos, candidatos sin contacto reciente y procesos estancados en una etapa.
- **Gestores de Reclutadores y Clientes**, reutilizables como listas desplegables en cada candidato.
- **Bilingüe** (Español / English), con un selector que traduce toda la interfaz al vuelo.
- **Exportación e importación CSV**, manual o automática por intervalo de tiempo configurable.
- **Persistencia local en el navegador**: los datos no se pierden al cerrar o recargar la pestaña.
- **Sin instalación, sin backend, sin costos**: se abre `index.html` en cualquier navegador moderno y listo.

---

## Cómo usarla

1. Abrí `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari), manteniendo `styles.css` y `app.js` en la misma carpeta.
2. Cargá candidatos desde **Base de Datos → + Nuevo candidato**, o importá un CSV existente desde **Configuración → Importar CSV**.
3. Consultá las métricas en **Dashboard**, ajustando los filtros superiores (posición, reclutador/a, cliente, rango de fechas) según lo que necesites mostrar.
4. Configurá reclutadores, clientes, alertas y respaldo automático desde **Configuración**.

No requiere conexión a internet para funcionar (salvo para cargar las fuentes del sistema, que ya vienen incluidas por defecto en el navegador).

---

## Estructura de datos del candidato

| Campo | Descripción |
|---|---|
| Nombre completo | Obligatorio |
| Mail / Celular | Datos de contacto |
| Posición / Equipo / Seniority | Perfil del rol buscado |
| Ubicación / Universidad / Nivel de inglés | Datos personales relevantes para el proceso |
| Años de experiencia / Empresa actual | Trayectoria |
| Pretensión salarial / Moneda / Disponibilidad | Condiciones |
| Fuente / Reclutador/a / Cliente | Origen y responsables del proceso |
| Estado / Etapa / Resultado | Estado del proceso de selección |
| Fecha de entrevista / Último contacto / Próximo seguimiento / Envío a cliente | Fechas clave |
| Feedback del cliente / Notas | Información cualitativa |

---

## Dashboard y métricas

El dashboard se recalcula en vivo según los filtros seleccionados (posición, reclutador/a, cliente y rango de fechas):

- **KPIs**: total de candidatos, en proceso, contratados (con % de conversión), en espera, rechazados y retirados.
- **Tendencia mensual**: candidatos entrevistados/enviados a cliente vs. contratados, mostrando los 12 meses del año (enero a diciembre) de forma constante.
- **Embudo de selección**: cantidad de candidatos por etapa.
- **Distribución por estado, posición, reclutador/a y cliente.**
- **Resultados de procesos cerrados** (contratado, rechazado por cliente, oferta rechazada, etc.).
- **Seguimientos pendientes**, con marca visual de los vencidos.

---

## Alertas

Desde **Configuración → Umbrales de alerta** se definen los disparadores (en días). El panel de alertas del dashboard marca, solo para procesos activos:

- **Seguimiento vencido**: la fecha de próximo seguimiento ya pasó.
- **Sin contacto prolongado**: no hay contacto registrado hace más del umbral configurado.
- **Estancamiento de etapa**: el candidato lleva en la misma etapa más del umbral configurado.

El menú lateral muestra un contador con la cantidad total de candidatos con alertas activas.

---

## Idioma

El selector ES / EN, ubicado en la esquina superior derecha, traduce toda la interfaz: navegación, columnas, formularios, listas desplegables y mensajes del sistema. El cambio es inmediato y no requiere recargar la página.

---

## Respaldo y persistencia de datos

Esta herramienta es 100% client-side: no hay servidor ni base de datos externa. El guardado funciona como en un programa de escritorio:

- **Destino obligatorio**: la app no se puede usar sin un lugar donde guardar. Al abrirla sin destino configurado —o si se pierde el acceso al que había— aparece un modal que no se puede cerrar hasta elegir uno. Es a propósito: sin destino, todo el trabajo de la sesión quedaría solamente en la copia de emergencia del navegador.
- **Carpeta (recomendado)**: desde Configuración → Guardado → "Elegir carpeta...", se elige una carpeta una sola vez. La app mantiene ahí un único `pipeline.json`, siempre el mismo archivo, y una subcarpeta `backups/` con copias fechadas de la que conserva las 10 más recientes y borra el resto. Se genera una copia en cada guardado manual y, en el automático, como mucho una por hora; como el nombre de la copia llega hasta el minuto, dos guardados dentro del mismo minuto comparten la misma.
- **Archivo suelto**: "Guardar como..." conecta un `.json` puntual en vez de una carpeta. Funciona igual para el guardado, pero sin copias de respaldo. "Abrir..." carga un archivo guardado previamente.
- **Integridad**: antes de sobrescribir, la app compara la fecha de modificación del archivo con la que dejó ella; si alguien lo tocó por afuera (otra pestaña, otra persona, una carpeta sincronizada con Drive/OneDrive) pregunta antes de pisarlo. Después de escribir, relee el archivo y verifica que sea un JSON válido con la misma cantidad de candidatos: si no coincide, avisa en vez de reportar un "Guardado" que no fue.
- **Guardado automático**: activado por defecto. Los cambios se guardan al archivo conectado unos segundos después de cada edición, y además hay un guardado periódico de referencia (intervalo configurable) para sesiones largas e inactivas.
- **Compatibilidad de navegadores**: el guardado directo a un archivo elegido usa la File System Access API, soportada en Chrome, Edge y navegadores basados en Chromium. En navegadores que no la soportan (Firefox, Safari), la herramienta cae automáticamente a un modo de compatibilidad: "Guardar" descarga el `.json` a la carpeta de Descargas cada vez, y "Abrir" usa el selector de archivos tradicional. La funcionalidad es la misma; solo cambia si hace falta volver a elegir el archivo en cada guardado.
- **Red de seguridad local**: además del archivo, cada cambio se guarda también como copia de emergencia en el propio navegador (IndexedDB). Se conservan las 5 últimas versiones, separadas por al menos 5 minutos entre sí, y se recuperan automáticamente si el archivo no se puede leer. La app además pide al navegador que marque ese almacenamiento como persistente, para que no lo borre por falta de espacio.
- **Aviso de cambios sin guardar**: si pasan más de 10 minutos con cambios pendientes, aparece un banner rojo visible en todas las pantallas con un botón para guardar en el momento.
- **Reconexión**: los navegadores pueden pedir reconfirmar el permiso de escritura sobre el archivo conectado (por ejemplo tras reiniciar el navegador). Cuando eso pasa, aparece un aviso con un botón "Reconectar" — un clic y se retoma el guardado normal.
- **Exportación / importación CSV**: aparte del archivo principal, sigue disponible exportar/importar CSV desde Configuración, pensado para compartir datos puntuales o abrirlos en Excel — no reemplaza al archivo de guardado principal.

---

## Reclutadores y clientes

Desde **Configuración** se administran dos listas maestras:

- **Reclutadores/as**: quién lleva cada proceso.
- **Clientes**: empresas que solicitan cada búsqueda.

Ambas listas alimentan los menús desplegables del formulario de candidato y los filtros de Base de Datos y Dashboard, evitando texto libre inconsistente (ej. "Globant" vs "Globant SA" vs "globant"). Eliminar un reclutador/a o cliente en uso pide confirmación y deja sin asignar a los candidatos afectados.

---

## Stack técnico

- HTML5 + CSS3 (variables CSS, grid y flexbox) + JavaScript vanilla (ES6+).
- Sin frameworks, sin librerías externas, sin paso de build.
- Gráfico de tendencia renderizado en SVG nativo.
- Persistencia mediante almacenamiento clave-valor del navegador.
- Tres archivos en una misma carpeta: `index.html` (estructura), `styles.css` (estilos) y `app.js` (lógica), enlazados con rutas relativas.

---

## Limitaciones conocidas

- Los datos viven en el archivo `.json` que cada persona usuaria elige guardar en su computadora; no se sincronizan automáticamente entre dispositivos ni entre personas usuarias.
- En Firefox y Safari (sin soporte de File System Access API), "Guardar" descarga una copia nueva cada vez en vez de reescribir un único archivo — no es una limitación del guardado en sí, solo cambia el paso manual de reemplazar el archivo anterior con el descargado.
- No hay control de usuarios ni permisos: cualquier persona con acceso al archivo puede ver y editar todos los datos.

---

## Roadmap / ideas a futuro

- Historial de cambios de etapa por candidato, para medir tiempo promedio de cierre.
- Carga masiva de candidatos desde Excel además de CSV.
- Vista de "mis candidatos" por reclutador/a.
- Sincronización opcional vía API de Google Drive (requiere autenticación OAuth).

---

## Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/): `MAYOR.MENOR.PARCHE`, donde MAYOR es un cambio que rompe compatibilidad (por ejemplo, con los archivos guardados), MENOR es funcionalidad nueva compatible hacia atrás y PARCHE es una corrección.

La **única fuente de verdad** de la versión es la constante `APP_VERSION` en [`app.js`](app.js). De ahí salen:

- el número que se muestra en el pie de página, junto a la fecha de publicación (`APP_RELEASE_DATE`) — hacer clic ahí reabre el modal de novedades;
- el modal de **Novedades**, que aparece solo una vez por versión, cuando la persona usuaria abre una versión más nueva que la última que vio;
- el campo `appVersion` que queda estampado dentro de cada archivo `.json` guardado.

### Checklist para publicar una versión

1. **`app.js`** — subir `APP_VERSION` y `APP_RELEASE_DATE`, y reescribir `RELEASE_NOTES` (español e inglés) con lo que cambió en esta versión, en lenguaje de persona usuaria.
2. **`index.html`** — actualizar el `?v=` de `styles.css` y `app.js` al nuevo número. Es lo que fuerza al navegador a bajar los archivos nuevos en vez de servir los cacheados.
3. **`CHANGELOG.md`** — agregar la entrada de la versión con su fecha, siguiendo el formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) (Agregado / Cambiado / Corregido).
4. **`README.md`** — actualizar el badge de versión del encabezado.
5. Etiquetar el commit: `git tag -a v2.2.0 -m "v2.2.0"` y `git push --tags`.

Los cuatro números (constante, `?v=`, changelog y badge) tienen que coincidir siempre.

---

## Licencia

Distribuido bajo licencia MIT. Ver [`LICENSE`](LICENSE) para el texto completo.

---

Lautaro Benitez · 2026
