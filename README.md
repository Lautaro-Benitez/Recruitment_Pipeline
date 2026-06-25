# Pipeline de Reclutamiento

[![Version](https://img.shields.io/badge/version-1.6.0-blue)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-informational)](#stack-técnico)
[![Backend](https://img.shields.io/badge/backend-none-lightgrey)](#stack-técnico)

Herramienta de pipeline de reclutamiento de un solo archivo HTML, pensada para que una persona reclutadora tenga una base de candidatos precisa, filtrable, y un dashboard de métricas para reportar a su superior — sin instalar nada ni depender de un servidor.

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
- **Búsqueda y filtros combinables** por posición, estado, etapa, reclutador/a y cliente.
- **Dashboard ejecutivo** con KPIs, embudo de selección, distribución por estado/posición/reclutador/cliente, resultados de procesos cerrados y tendencia mensual.
- **Panel de alertas** configurable: detecta seguimientos vencidos, candidatos sin contacto reciente y procesos estancados en una etapa.
- **Gestores de Reclutadores y Clientes**, reutilizables como listas desplegables en cada candidato.
- **Bilingüe** (Español / English), con un selector que traduce toda la interfaz al vuelo.
- **Exportación e importación CSV**, manual o automática por intervalo de tiempo configurable.
- **Persistencia local en el navegador**: los datos no se pierden al cerrar o recargar la pestaña.
- **Sin instalación, sin backend, sin costos**: es un único archivo `.html` que corre en cualquier navegador moderno.

---

## Cómo usarla

1. Abrí el archivo `.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
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

Esta herramienta es 100% client-side: no hay servidor ni base de datos externa. Para evitar pérdida de información:

- **Persistencia local**: cada cambio se guarda automáticamente en el almacenamiento del navegador. Cerrar o recargar la pestaña no borra los datos.
- **Exportación manual**: botón "Exportar CSV ahora" en Configuración, disponible en cualquier momento.
- **Respaldo automático**: se puede activar una descarga periódica de CSV con un intervalo (en minutos) definido por la persona usuaria. El archivo se descarga a la carpeta de Descargas del navegador.
- **Importación**: permite restaurar o fusionar candidatos desde un CSV exportado previamente.

> **Nota sobre Google Drive:** no existe una forma de escribir directamente en Google Drive desde una página HTML sin autenticación OAuth contra la API de Drive. Si la carpeta de Descargas del navegador está sincronizada con Drive (por ejemplo, con Google Drive para escritorio), los respaldos automáticos van a aparecer ahí sin pasos adicionales — pero esa sincronización debe configurarse del lado del sistema operativo, no desde la herramienta.

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
- Un único archivo `.html` autocontenido.

---

## Limitaciones conocidas

- Los datos viven en el navegador donde se usa la herramienta; no se sincronizan automáticamente entre dispositivos ni entre personas usuarias.
- El respaldo automático no permite elegir carpeta de destino (restricción de seguridad de los navegadores): siempre va a la carpeta de Descargas configurada.
- No hay control de usuarios ni permisos: cualquier persona con acceso al archivo puede ver y editar todos los datos.

---

## Roadmap / ideas a futuro

- Historial de cambios de etapa por candidato, para medir tiempo promedio de cierre.
- Carga masiva de candidatos desde Excel además de CSV.
- Vista de "mis candidatos" por reclutador/a.
- Sincronización opcional vía API de Google Drive (requiere autenticación OAuth).

---

## Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/). Los cambios de cada versión están documentados en [`CHANGELOG.md`](CHANGELOG.md). La versión vigente se muestra también en el pie de página de la propia aplicación.

---

## Licencia

Distribuido bajo licencia MIT. Ver [`LICENSE`](LICENSE) para el texto completo.

---

Lautaro Benitez · 2026
