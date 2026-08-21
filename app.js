(function(){

  // ======================================================================
  // I18N
  // ======================================================================
  const I18N = {
    es: {
      appTitle:"Pipeline de Reclutamiento",
      appSubtitle:"Base de candidatos y métricas de selección",
      navDashboard:"Dashboard", navDatabase:"Base de Datos", navConfig:"Configuración",
      sidebarFoot:"Los datos se guardan en este navegador.",
      expandNav:"Expandir menú",
      dashSubtitle:"Métricas del pipeline en base a los filtros seleccionados",
      dbSubtitle:"Todos los candidatos del pipeline, filtrables y exportables",
      configSubtitle:"Respaldo de datos, alertas y listas maestras",
      filtersLabel:"Filtros:", allPositions:"Posición: todas", allRecruiters:"Reclutador/a: todos",
      allClients:"Cliente: todos", allStatuses:"Estado: todos", allStages:"Etapa: todas",
      allJobTitles:"Título profesional: todos",
      dateFromLabel:"Desde", dateToLabel:"Hasta", clearFilters:"Limpiar filtros",
      printReport:"Imprimir reporte", reportTitle:"Reporte de pipeline",
      exportFiltered:"Exportar filtrado (CSV)", noFilteredToExport:"No hay candidatos que coincidan con los filtros actuales.",
      reportGeneratedOn:"Generado el", reportFilters:"Filtros aplicados", reportNoFilters:"Sin filtros (toda la base)",
      reportFilterPosition:"Posición", reportFilterRecruiter:"Reclutador/a", reportFilterClient:"Cliente",
      reportFilterJobTitle:"Título profesional",
      reportFilterStatus:"Estado", reportFilterStage:"Etapa",
      reportFilterPeriod:"Período",
      trendTitle:"Tendencia mensual", alertsTitle:"Alertas",
      funnelTitle:"Embudo de selección", statusTitle:"Estado actual",
      byPositionTitle:"Candidatos por posición", byRecruiterTitle:"Candidatos por reclutador/a",
      byClientTitle:"Candidatos por cliente", outcomeTitle:"Resultado de procesos cerrados",
      bySourceTitle:"Efectividad por fuente de contratación",
      colCandidates:"Candidatos", colHired:"Contratados", colHireRate:"% Contratación",
      followupTitle:"Seguimientos pendientes",
      colCandidate:"Candidato", colNextFollowUp:"Próximo seguimiento", colStatus:"Estado",
      searchPlaceholder:"Buscar por nombre, empresa, universidad, notas...",
      newCandidateBtn:"+ Nuevo candidato",
      colFirstName:"Nombre", colLastName:"Apellido", colJobTitle:"Título profesional",
      colEmail:"Mail", colPhone:"Celular", colPosition:"Posición",
      colClient:"Cliente", colTeam:"Equipo", colSeniority:"Seniority", colLocation:"Ubicación",
      colUniversity:"Universidad", colExperience:"Años exp.", colCurrentCompany:"Empresa actual",
      colSalaryExpectation:"Pretensión salarial", colCurrency:"Moneda", colAvailability:"Disponibilidad",
      colSource:"Fuente", colRecruiter:"Reclutador/a", colStage:"Etapa", colOutcome:"Resultado",
      colEnglishLevel:"Nivel inglés", colInterviewDate:"Fecha entrevista", colLastContact:"Último contacto",
      colClientSubmissionDate:"Envío a cliente", colClientFeedback:"Feedback cliente", colNotes:"Notas",
      colActions:"Acciones", rowHint:"Clic en una fila para editar el registro completo",
      newCandidateTitle:"Nuevo candidato", editCandidateTitle:"Editar candidato",
      whatsNewTitle:"Novedades de esta versión", whatsNewGotIt:"Entendido",
      footerVersionHint:"Ver las novedades de esta versión",
      sectionPersonal:"Datos personales", lblFirstName:"Nombre *", lblLastName:"Apellido *",
      lblJobTitle:"Título profesional", phJobTitle:"ej. Analista de Finanzas Senior",
      lblEmail:"Mail", lblPhone:"Celular",
      lblLocation:"Ubicación", lblUniversity:"Universidad", lblEnglishLevel:"Nivel de inglés",
      sectionProfile:"Perfil profesional", lblPosition:"Posición", lblTeam:"Equipo", lblSeniority:"Seniority",
      lblExperience:"Años de experiencia", lblCurrentCompany:"Empresa actual", lblAvailability:"Disponibilidad",
      phAvailability:"ej. 30 días",
      sectionConditions:"Condiciones", lblSalaryExpectation:"Pretensión salarial", lblCurrency:"Moneda",
      lblSource:"Fuente", phSource:"ej. LinkedIn Recruiter", lblRecruiter:"Reclutador/a",
      sectionClient:"Cliente", lblClient:"Cliente (empresa que solicita la búsqueda)",
      sectionStatus:"Estado del proceso", lblOutcome:"Resultado",
      lblCurrentStatusStage:"Estado y etapa actuales (calculado)", lblStatusHistory:"Historial del proceso",
      phHistoryNote:"Nota (opcional)", addEventBtn:"+ Agregar",
      noHistoryYet:"Todavía no hay eventos en el historial.",
      historyMinOneEvent:"El candidato debe tener al menos un evento en el historial.",
      deleteHistoryEventConfirm:"¿Eliminar este evento del historial?",
      historyNeedsStatusOrStage:"Elegí un estado o una etapa para el nuevo evento.",
      lblClientFeedback:"Feedback del cliente",
      sectionDates:"Fechas", lblInterviewDate:"Fecha de entrevista", lblLastContact:"Último contacto",
      lblNextFollowUp:"Próximo seguimiento", lblClientSubmissionDate:"Envío a cliente",
      sectionNotes:"Notas", lblNotes:"Notas",
      deleteCandidateBtn:"Eliminar candidato", cancelBtn:"Cancelar", saveBtn:"Guardar",
      optNone:"—",
      optBasic:"Basic", optIntermediate:"Intermediate", optUpperIntermediate:"Upper Intermediate",
      optAdvanced:"Advanced", optFluent:"Fluent", optNative:"Native",
      statInProgress:"En proceso", statOnHold:"En espera", statRejected:"Rechazado", statWithdrawn:"Retirado", statHired:"Contratado",
      stgSourced:"Sourcing", stgContacted:"Contactado", stgScreening:"Screening",
      stgRecruiterInterview:"Entrevista reclutador/a", stgClientInterview1:"Entrevista cliente 1",
      stgClientInterview2:"Entrevista cliente 2", stgFinalInterview:"Entrevista final",
      stgOffer:"Oferta", stgOfferAccepted:"Oferta aceptada", stgOfferRejected:"Oferta rechazada",
      stgHired:"Contratado", stgRejected:"Rechazado",
      outInProcess:"En proceso", outRejectedByRecruiter:"Rechazado por reclutador/a",
      outRejectedByClient:"Rechazado por cliente", outCandidateDeclined:"Candidato/a declinó",
      outOfferAccepted:"Oferta aceptada", outOfferRejected:"Oferta rechazada", outHired:"Contratado",
      cfgGroupData:"Datos y respaldo", cfgGroupDataDesc:"Respaldo, exportación e importación de la base de datos.",
      cfgGroupLists:"Listas maestras", cfgGroupListsDesc:"Reclutadores y clientes disponibles al asignar candidatos.",
      cfgGroupAlerts:"Alertas", cfgGroupAlertsDesc:"Umbrales que definen cuándo un candidato se marca como atrasado.",
      manageRecruitersTitle:"Reclutadores/as", manageClientsTitle:"Clientes",
      manageRecruitersDesc:"Lista de reclutadores/as disponible al asignar candidatos.",
      manageClientsDesc:"Empresas que solicitan búsquedas, disponibles al asignar candidatos.",
      phNewRecruiter:"Nombre del/la nuevo/a reclutador/a", phNewClient:"Nombre de la empresa cliente",
      addBtn:"Agregar", deleteConfirm:"¿Eliminar este candidato del pipeline? Esta acción no se puede deshacer.",
      nameRequired:"El nombre y el apellido son obligatorios.", noResults:"Sin resultados",
      noResultsSub:"Probá ajustar los filtros o la búsqueda.", noDataYet:"Todavía no hay datos suficientes.",
      noFollowups:"No hay seguimientos programados.", overdue:"(vencido)",
      resultsCount:(n,t)=>`${n} de ${t} candidatos`, candidatesInPipeline:"en la base",
      activeToday:"activos hoy", ofTotal:(p)=>`${p}% del total`, onHoldSub:"on hold",
      discardedSub:"descartados", declinedSub:"declinaron",
      kpiTotal:"Total candidatos", kpiActive:"En proceso", kpiHired:"Contratados",
      kpiOnHold:"En espera", kpiRejected:"Rechazados", kpiWithdrawn:"Retirados",
      candidatesFunnel:(n)=>`${n} candidatos`, manageRecruitersInUse:(n)=>`${n} en uso`,
      deleteInUseWarning:"Este reclutador/a tiene candidatos asignados. ¿Eliminar igual? Los registros quedarán sin reclutador/a asignado.",
      deleteClientInUseWarning:"Este cliente tiene candidatos asignados. ¿Eliminar igual? Los registros quedarán sin cliente asignado.",
      noDataLabel:"— sin dato —",
      saveSystemTitle:"Guardado",
      saveSystemDesc:"El pipeline se guarda en un archivo en tu computadora, como en un programa de escritorio. Elegí dónde guardarlo una vez y la app lo va a mantener actualizado sola.",
      noFileConnected:"Ningún archivo conectado todavía",
      noFileConnectedSub:"Usá \"Guardar como...\" para elegir dónde guardar",
      fileConnectedSub:"Conectado — se guarda solo en este archivo",
      fileConnectedSubFallback:"Se descarga a Descargas cada vez que guardás (tu navegador no permite guardar directo a carpeta)",
      reconnectNeeded:"Se perdió el acceso al archivo conectado.",
      reconnectBtn:"Reconectar",
      saveNowBtn:"Guardar", saveAsBtn:"Guardar como...", openFileBtn:"Abrir...",
      backupEnableLabel:"Guardado automático", backupIntervalLabel:"Intervalo (minutos)",
      lastExport:(time)=>`Última exportación: ${time}`, neverExported:"Todavía no se exportó ningún archivo",

      // ---- Sistema de guardado: estados, toasts, modales de error ----
      saveStateIdle:"Sin datos guardados todavía",
      saveStateSaving:"Guardando…",
      saveStateSaved:(time,name)=>`Guardado ${time}`,
      saveStateSavedNoName:(time)=>`Guardado ${time}`,
      saveStateDownloaded:(name)=>`Descargado como ${name}`,
      saveStateUnsaved:"Cambios sin guardar",
      saveStateNoFile:"Sin archivo conectado — guardá para elegir uno",
      saveStateDisconnected:"Se perdió el acceso al archivo — reconectá",
      saveStateError:"Error al guardar",
      confirmOpenTitle:"Tenés cambios sin guardar",
      confirmOpenMsg:"Si abrís otro archivo ahora, los cambios sin guardar de este pipeline se van a perder. ¿Qué querés hacer?",
      confirmOpenDiscard:"Descartar y abrir", confirmOpenSaveFirst:"Guardar y abrir",
      errorGenericTitle:"Ocurrió un error",
      errorModalDetailToggle:"Detalle técnico", errorModalClose:"Cerrar",
      errorSaveTitle:"No se pudo guardar", errorSaveMsg:"Hubo un problema al guardar el archivo. Tus datos siguen en pantalla; probá guardar de nuevo o usá \"Guardar como...\" para elegir otro archivo.",
      errorSaveAsTitle:"No se pudo elegir el archivo", errorSaveAsMsg:"No se pudo crear o abrir el archivo elegido para guardar. Probá de nuevo.",
      errorOpenTitle:"No se pudo abrir el archivo", errorOpenMsg:"Hubo un problema al abrir el archivo elegido. Probá de nuevo.",
      errorOpenParseTitle:"El archivo está dañado", errorOpenParseMsg:"El archivo elegido no es un JSON válido de esta aplicación. Verificá que sea el archivo correcto.",
      errorOpenFormatTitle:"Formato no reconocido", errorOpenFormatMsg:"El archivo se pudo leer pero no tiene la estructura esperada de un pipeline. Verificá que sea el archivo correcto.",
      errorReconnectTitle:"No se pudo reconectar", errorReconnectMsg:"No se pudo recuperar el acceso al archivo. Probá con \"Guardar como...\" para elegir un archivo nuevo.",
      toastSaved:(name)=>`Guardado en ${name}`,
      toastDownloaded:(name)=>`Descargado como ${name}`,
      toastOpened:(name)=>`Se abrió ${name}`,
      toastReconnected:(name)=>`Reconectado a ${name}`,
      toastReconnectNeeded:"Se perdió el acceso al archivo. Los cambios se guardan localmente hasta que reconectes.",
      toastNoFileToReconnect:"No hay ningún archivo previo para reconectar.",
      toastPermissionDenied:"No se concedió permiso para acceder al archivo.",
      toastAutoSaveFailed:"El guardado automático falló. Tus datos siguen en pantalla.",
      toastFallbackMode:"Tu navegador no permite guardar directo a una carpeta. Vas a poder guardar igual, descargando el archivo cada vez (funciona mejor en Chrome o Edge).",

      // ---- Guardado en carpeta, copias de respaldo e integridad ----
      chooseFolderBtn:"Elegir carpeta...",
      folderConnectedSub:(max)=>`Conectado — se guarda solo en esta carpeta, con las últimas ${max} copias en backups/`,
      toastFolderConnected:(name)=>`Carpeta conectada: ${name}`,
      toastNoFolderSupport:"Tu navegador no permite conectar una carpeta. Usá \"Guardar como...\" para elegir un archivo, o abrí la app en Chrome o Edge.",
      toastReloadedFromFile:"Se recargaron los datos del archivo guardado.",
      errorFolderTitle:"No se pudo conectar la carpeta",
      errorFolderMsg:"No se pudo acceder a la carpeta elegida. Probá de nuevo o elegí otra.",
      folderHasFileTitle:"Esa carpeta ya tiene un pipeline guardado",
      folderHasFileMsg:(enArchivo, enPantalla)=>`El archivo de esa carpeta tiene ${enArchivo} candidatos y en pantalla tenés ${enPantalla}. ¿Qué querés hacer?`,
      folderHasFileLoad:"Abrir el de la carpeta",
      folderHasFileOverwrite:"Pisarlo con lo que tengo",
      errorVerifyTitle:"El archivo guardado no quedó bien",
      errorVerifyMsg:"La app guardó el archivo pero al releerlo no coincide con lo que hay en pantalla. Tus datos siguen acá y hay una copia en el navegador: probá \"Guardar como...\" en otra ubicación antes de cerrar.",
      conflictTitle:"El archivo cambió por fuera de la app",
      conflictMsg:"Alguien modificó el archivo desde la última vez que lo guardaste acá — puede ser otra pestaña abierta, otra persona, o una carpeta sincronizada. Si lo pisás, esos cambios se pierden.",
      conflictOverwrite:"Guardar lo mío igual",
      conflictReload:"Descartar lo mío y recargar",
      saveStateConflict:"El archivo cambió por fuera — decidí qué hacer",
      staleSaveWarning:(min)=>`Hace ${min} minutos que tenés cambios sin guardar.`,

      // ---- Gate: la app necesita un destino de guardado ----
      gateTitle:"Elegí dónde guardar el pipeline",
      gateMsg:"Antes de empezar necesitás decirle a la app dónde guardar los datos. Lo recomendado es una carpeta: siempre escribe el mismo archivo y va dejando copias de respaldo fechadas.",
      gateLostTitle:"Se perdió el acceso al lugar de guardado",
      gateLostMsg:"La app no puede escribir donde venía guardando, así que tus cambios no se están guardando en ningún archivo. Reconectá o elegí otro destino para seguir.",
      gateFallbackMsg:"Tu navegador no permite guardar directo a una carpeta, así que la app no puede mantener un archivo actualizado sola: cada guardado descarga una copia que tenés que reemplazar a mano. Para el modo automático, abrí la app en Chrome o Edge.",
      gateFolderBtn:"Elegir carpeta (recomendado)",
      gateOpenBtn:"Abrir un archivo existente",
      gateFileBtn:"Guardar como archivo suelto",
      gateFallbackBtn:"Descargar el archivo ahora",
      healthDestLabel:"Destino", healthLastSaveLabel:"Último guardado",
      healthLastSnapshotLabel:"Última copia en el navegador", healthCountLabel:"Candidatos guardados",
      healthDestNone:"Sin configurar",
      healthDestFolder:(folder, file)=>`Carpeta ${folder} · ${file}`,
      healthDestFile:(name)=>`Archivo ${name}`,
      healthDestDownloads:"Descargas (manual)",
      healthNever:"Nunca",
      toastDbReset:"Base de datos restaurada.",
      toastDbResetWithFile:(name)=>`Base de datos restaurada. Esto también se va a guardar en ${name}.`,
      manualBackupTitle:"Exportar / Importar manual",
      manualBackupDesc:"Descargá un CSV en cualquier momento, o restaurá el pipeline desde un archivo exportado previamente.",
      exportCsvNow:"Exportar CSV ahora", importCsv:"Importar CSV",
      importSuccess:(n)=>`Se importaron ${n} candidatos.`, importError:"No se pudo leer el archivo CSV.",
      importConfirm:"Importar agregará los candidatos del archivo a la base actual. ¿Continuar?",
      resetDbTitle:"Restaurar base de datos", resetDbBtn:"Restaurar base de datos",
      resetDbDesc:"Elimina todos los candidatos, reclutadores y clientes para empezar de cero. Esta acción no se puede deshacer.",
      resetDbConfirm:"¿Seguro que querés borrar TODA la base de datos (candidatos, reclutadores y clientes)? Esta acción no se puede deshacer.",
      alertsConfigTitle:"Umbrales de alerta", alertsConfigDesc:"Definí cuándo un candidato se marca como atrasado en el dashboard.",
      staleContactLabel:"Sin contacto hace más de (días)", staleStageLabel:"En la misma etapa hace más de (días)",
      noAlerts:"No hay candidatos con alertas activas.",
      remindersBadgeTitle:(n)=>`${n} candidato${n===1?'':'s'} con seguimiento pendiente o atrasado`,
      alertOverdueFollowup:(days)=>`Seguimiento vencido hace ${days} días`,
      alertStaleContact:(days)=>`Sin contacto desde hace ${days} días`,
      alertStaleStage:(days)=>`En "${'%STAGE%'}" desde hace ${days} días`,
    },
    en: {
      appTitle:"Recruitment Pipeline",
      appSubtitle:"Candidate database and recruitment metrics",
      navDashboard:"Dashboard", navDatabase:"Database", navConfig:"Settings",
      sidebarFoot:"Data is saved in this browser.",
      expandNav:"Expand menu",
      dashSubtitle:"Pipeline metrics based on the selected filters",
      dbSubtitle:"All candidates in the pipeline, filterable and exportable",
      configSubtitle:"Data backup, alerts and master lists",
      filtersLabel:"Filters:", allPositions:"Position: all", allRecruiters:"Recruiter: all",
      allClients:"Client: all", allStatuses:"Status: all", allStages:"Stage: all",
      allJobTitles:"Job title: all",
      dateFromLabel:"From", dateToLabel:"To", clearFilters:"Clear filters",
      printReport:"Print report", reportTitle:"Pipeline report",
      exportFiltered:"Export filtered (CSV)", noFilteredToExport:"No candidates match the current filters.",
      reportGeneratedOn:"Generated on", reportFilters:"Applied filters", reportNoFilters:"No filters (full database)",
      reportFilterPosition:"Position", reportFilterRecruiter:"Recruiter", reportFilterClient:"Client",
      reportFilterJobTitle:"Job title",
      reportFilterStatus:"Status", reportFilterStage:"Stage",
      reportFilterPeriod:"Period",
      trendTitle:"Monthly trend", alertsTitle:"Alerts",
      funnelTitle:"Hiring funnel", statusTitle:"Current status",
      byPositionTitle:"Candidates by position", byRecruiterTitle:"Candidates by recruiter",
      byClientTitle:"Candidates by client", outcomeTitle:"Closed process outcomes",
      bySourceTitle:"Hiring source effectiveness",
      colCandidates:"Candidates", colHired:"Hired", colHireRate:"Hire rate",
      followupTitle:"Pending follow-ups",
      colCandidate:"Candidate", colNextFollowUp:"Next follow-up", colStatus:"Status",
      searchPlaceholder:"Search by name, company, university, notes...",
      newCandidateBtn:"+ New candidate",
      colFirstName:"First name", colLastName:"Last name", colJobTitle:"Job title",
      colEmail:"Email", colPhone:"Cellphone", colPosition:"Position",
      colClient:"Client", colTeam:"Team", colSeniority:"Seniority", colLocation:"Location",
      colUniversity:"University", colExperience:"Years exp.", colCurrentCompany:"Current company",
      colSalaryExpectation:"Salary expectation", colCurrency:"Currency", colAvailability:"Availability",
      colSource:"Source", colRecruiter:"Recruiter", colStage:"Stage", colOutcome:"Outcome",
      colEnglishLevel:"English level", colInterviewDate:"Interview date", colLastContact:"Last contact",
      colClientSubmissionDate:"Client submission", colClientFeedback:"Client feedback", colNotes:"Notes",
      colActions:"Actions", rowHint:"Click a row to edit the full record",
      newCandidateTitle:"New candidate", editCandidateTitle:"Edit candidate",
      whatsNewTitle:"What's new in this version", whatsNewGotIt:"Got it",
      footerVersionHint:"See what's new in this version",
      sectionPersonal:"Personal information", lblFirstName:"First name *", lblLastName:"Last name *",
      lblJobTitle:"Job title", phJobTitle:"e.g. Senior Financial Analyst",
      lblEmail:"Email", lblPhone:"Cellphone",
      lblLocation:"Location", lblUniversity:"University", lblEnglishLevel:"English level",
      sectionProfile:"Professional profile", lblPosition:"Position", lblTeam:"Team", lblSeniority:"Seniority",
      lblExperience:"Years of experience", lblCurrentCompany:"Current company", lblAvailability:"Availability",
      phAvailability:"e.g. 30 days",
      sectionConditions:"Conditions", lblSalaryExpectation:"Salary expectation", lblCurrency:"Currency",
      lblSource:"Source", phSource:"e.g. LinkedIn Recruiter", lblRecruiter:"Recruiter",
      sectionClient:"Client", lblClient:"Client (company requesting the search)",
      sectionStatus:"Process status", lblOutcome:"Outcome",
      lblCurrentStatusStage:"Current status and stage (calculated)", lblStatusHistory:"Process history",
      phHistoryNote:"Note (optional)", addEventBtn:"+ Add",
      noHistoryYet:"No history events yet.",
      historyMinOneEvent:"The candidate must keep at least one history event.",
      deleteHistoryEventConfirm:"Delete this history event?",
      historyNeedsStatusOrStage:"Pick a status or a stage for the new event.",
      lblClientFeedback:"Client feedback",
      sectionDates:"Dates", lblInterviewDate:"Interview date", lblLastContact:"Last contact",
      lblNextFollowUp:"Next follow-up", lblClientSubmissionDate:"Client submission date",
      sectionNotes:"Notes", lblNotes:"Notes",
      deleteCandidateBtn:"Delete candidate", cancelBtn:"Cancel", saveBtn:"Save",
      optNone:"—",
      optBasic:"Basic", optIntermediate:"Intermediate", optUpperIntermediate:"Upper Intermediate",
      optAdvanced:"Advanced", optFluent:"Fluent", optNative:"Native",
      statInProgress:"In Progress", statOnHold:"On Hold", statRejected:"Rejected", statWithdrawn:"Withdrawn", statHired:"Hired",
      stgSourced:"Sourced", stgContacted:"Contacted", stgScreening:"Screening",
      stgRecruiterInterview:"Recruiter Interview", stgClientInterview1:"Client Interview 1",
      stgClientInterview2:"Client Interview 2", stgFinalInterview:"Final Interview",
      stgOffer:"Offer", stgOfferAccepted:"Offer Accepted", stgOfferRejected:"Offer Rejected",
      stgHired:"Hired", stgRejected:"Rejected",
      outInProcess:"In Process", outRejectedByRecruiter:"Rejected by Recruiter",
      outRejectedByClient:"Rejected by Client", outCandidateDeclined:"Candidate Declined",
      outOfferAccepted:"Offer Accepted", outOfferRejected:"Offer Rejected", outHired:"Hired",
      cfgGroupData:"Data & backup", cfgGroupDataDesc:"Backup, export and import of the database.",
      cfgGroupLists:"Master lists", cfgGroupListsDesc:"Recruiters and clients available when assigning candidates.",
      cfgGroupAlerts:"Alerts", cfgGroupAlertsDesc:"Thresholds that define when a candidate is flagged as overdue.",
      manageRecruitersTitle:"Recruiters", manageClientsTitle:"Clients",
      manageRecruitersDesc:"List of recruiters available when assigning candidates.",
      manageClientsDesc:"Companies requesting searches, available when assigning candidates.",
      phNewRecruiter:"New recruiter's name", phNewClient:"Client company name",
      addBtn:"Add", deleteConfirm:"Delete this candidate from the pipeline? This action cannot be undone.",
      nameRequired:"First name and last name are required.", noResults:"No results",
      noResultsSub:"Try adjusting the filters or search.", noDataYet:"Not enough data yet.",
      noFollowups:"No follow-ups scheduled.", overdue:"(overdue)",
      resultsCount:(n,t)=>`${n} of ${t} candidates`, candidatesInPipeline:"in the database",
      activeToday:"active today", ofTotal:(p)=>`${p}% of total`, onHoldSub:"on hold",
      discardedSub:"discarded", declinedSub:"declined",
      kpiTotal:"Total candidates", kpiActive:"In progress", kpiHired:"Hired",
      kpiOnHold:"On hold", kpiRejected:"Rejected", kpiWithdrawn:"Withdrawn",
      candidatesFunnel:(n)=>`${n} candidates`, manageRecruitersInUse:(n)=>`${n} in use`,
      deleteInUseWarning:"This recruiter has candidates assigned. Delete anyway? Those records will be left without a recruiter.",
      deleteClientInUseWarning:"This client has candidates assigned. Delete anyway? Those records will be left without a client.",
      noDataLabel:"— no data —",
      saveSystemTitle:"Saving",
      saveSystemDesc:"The pipeline is saved to a file on your computer, like a desktop program. Pick where to save it once and the app will keep that file up to date on its own.",
      noFileConnected:"No file connected yet",
      noFileConnectedSub:"Use \"Save as...\" to choose where to save",
      fileConnectedSub:"Connected — saving directly to this file",
      fileConnectedSubFallback:"Downloaded to your Downloads folder each time you save (your browser doesn't allow saving straight to a folder)",
      reconnectNeeded:"Access to the connected file was lost.",
      reconnectBtn:"Reconnect",
      saveNowBtn:"Save", saveAsBtn:"Save as...", openFileBtn:"Open...",
      backupEnableLabel:"Automatic saving", backupIntervalLabel:"Interval (minutes)",
      lastExport:(time)=>`Last export: ${time}`, neverExported:"No file exported yet",

      // ---- Save system: states, toasts, error modals ----
      saveStateIdle:"No data saved yet",
      saveStateSaving:"Saving…",
      saveStateSaved:(time,name)=>`Saved ${time}`,
      saveStateSavedNoName:(time)=>`Saved ${time}`,
      saveStateDownloaded:(name)=>`Downloaded as ${name}`,
      saveStateUnsaved:"Unsaved changes",
      saveStateNoFile:"No file connected — save to pick one",
      saveStateDisconnected:"File access lost — reconnect",
      saveStateError:"Save error",
      confirmOpenTitle:"You have unsaved changes",
      confirmOpenMsg:"If you open another file now, the unsaved changes in this pipeline will be lost. What do you want to do?",
      confirmOpenDiscard:"Discard and open", confirmOpenSaveFirst:"Save and open",
      errorGenericTitle:"An error occurred",
      errorModalDetailToggle:"Technical detail", errorModalClose:"Close",
      errorSaveTitle:"Couldn't save", errorSaveMsg:"There was a problem saving the file. Your data is still on screen; try saving again or use \"Save as...\" to pick another file.",
      errorSaveAsTitle:"Couldn't pick the file", errorSaveAsMsg:"The chosen file couldn't be created or opened for saving. Please try again.",
      errorOpenTitle:"Couldn't open the file", errorOpenMsg:"There was a problem opening the chosen file. Please try again.",
      errorOpenParseTitle:"The file is damaged", errorOpenParseMsg:"The chosen file isn't a valid JSON file for this app. Check that it's the right file.",
      errorOpenFormatTitle:"Unrecognized format", errorOpenFormatMsg:"The file could be read but doesn't have the expected pipeline structure. Check that it's the right file.",
      errorReconnectTitle:"Couldn't reconnect", errorReconnectMsg:"Access to the file couldn't be recovered. Try \"Save as...\" to pick a new file.",
      toastSaved:(name)=>`Saved to ${name}`,
      toastDownloaded:(name)=>`Downloaded as ${name}`,
      toastOpened:(name)=>`Opened ${name}`,
      toastReconnected:(name)=>`Reconnected to ${name}`,
      toastReconnectNeeded:"Access to the file was lost. Changes are being saved locally until you reconnect.",
      toastNoFileToReconnect:"There's no previous file to reconnect to.",
      toastPermissionDenied:"Permission to access the file wasn't granted.",
      toastAutoSaveFailed:"Automatic save failed. Your data is still on screen.",
      toastFallbackMode:"Your browser doesn't support saving directly to a folder. You can still save by downloading the file each time (works best in Chrome or Edge).",

      // ---- Folder saving, backups and integrity ----
      chooseFolderBtn:"Choose folder...",
      folderConnectedSub:(max)=>`Connected — saving to this folder, keeping the last ${max} copies in backups/`,
      toastFolderConnected:(name)=>`Folder connected: ${name}`,
      toastNoFolderSupport:"Your browser can't connect a folder. Use \"Save as...\" to pick a file, or open the app in Chrome or Edge.",
      toastReloadedFromFile:"Data reloaded from the saved file.",
      errorFolderTitle:"Couldn't connect the folder",
      errorFolderMsg:"The chosen folder couldn't be accessed. Try again or pick another one.",
      folderHasFileTitle:"That folder already has a saved pipeline",
      folderHasFileMsg:(inFile, onScreen)=>`The file in that folder has ${inFile} candidates and you have ${onScreen} on screen. What do you want to do?`,
      folderHasFileLoad:"Open the folder's one",
      folderHasFileOverwrite:"Overwrite it with mine",
      errorVerifyTitle:"The saved file didn't come out right",
      errorVerifyMsg:"The app wrote the file but reading it back doesn't match what's on screen. Your data is still here and there's a copy in the browser: try \"Save as...\" to another location before closing.",
      conflictTitle:"The file changed outside the app",
      conflictMsg:"Someone modified the file since you last saved it here — it could be another open tab, another person, or a synced folder. Overwriting it will discard those changes.",
      conflictOverwrite:"Save mine anyway",
      conflictReload:"Discard mine and reload",
      saveStateConflict:"File changed outside — decide what to do",
      staleSaveWarning:(min)=>`You've had unsaved changes for ${min} minutes.`,

      // ---- Gate: the app needs a save destination ----
      gateTitle:"Choose where to save the pipeline",
      gateMsg:"Before you start, the app needs to know where to save your data. A folder is recommended: it always writes the same file and keeps dated backup copies.",
      gateLostTitle:"Lost access to the save location",
      gateLostMsg:"The app can't write where it was saving, so your changes aren't being saved to any file. Reconnect or pick another destination to continue.",
      gateFallbackMsg:"Your browser doesn't support saving directly to a folder, so the app can't keep a file updated on its own: each save downloads a copy you have to replace by hand. For automatic saving, open the app in Chrome or Edge.",
      gateFolderBtn:"Choose folder (recommended)",
      gateOpenBtn:"Open an existing file",
      gateFileBtn:"Save as a standalone file",
      gateFallbackBtn:"Download the file now",
      healthDestLabel:"Destination", healthLastSaveLabel:"Last save",
      healthLastSnapshotLabel:"Last in-browser copy", healthCountLabel:"Candidates saved",
      healthDestNone:"Not configured",
      healthDestFolder:(folder, file)=>`Folder ${folder} · ${file}`,
      healthDestFile:(name)=>`File ${name}`,
      healthDestDownloads:"Downloads (manual)",
      healthNever:"Never",
      toastDbReset:"Database reset.",
      toastDbResetWithFile:(name)=>`Database reset. This will also be saved to ${name}.`,
      manualBackupTitle:"Manual export / import",
      manualBackupDesc:"Download a CSV at any time, or restore the pipeline from a previously exported file.",
      exportCsvNow:"Export CSV now", importCsv:"Import CSV",
      importSuccess:(n)=>`${n} candidates imported.`, importError:"Could not read the CSV file.",
      importConfirm:"Importing will add the candidates from the file to the current database. Continue?",
      resetDbTitle:"Reset database", resetDbBtn:"Reset database",
      resetDbDesc:"Deletes all candidates, recruiters and clients to start fresh. This action cannot be undone.",
      resetDbConfirm:"Are you sure you want to delete the ENTIRE database (candidates, recruiters and clients)? This action cannot be undone.",
      alertsConfigTitle:"Alert thresholds", alertsConfigDesc:"Define when a candidate is flagged as overdue on the dashboard.",
      staleContactLabel:"No contact for more than (days)", staleStageLabel:"Same stage for more than (days)",
      noAlerts:"No candidates with active alerts.",
      remindersBadgeTitle:(n)=>`${n} candidate${n===1?'':'s'} with pending or overdue follow-up`,
      alertOverdueFollowup:(days)=>`Follow-up overdue by ${days} days`,
      alertStaleContact:(days)=>`No contact for ${days} days`,
      alertStaleStage:(days)=>`In "${'%STAGE%'}" for ${days} days`,
    }
  };

  let currentLang = 'en';
  function t(key, ...args){
    const dict = I18N[currentLang];
    const v = dict[key];
    if(typeof v === 'function') return v(...args);
    return v !== undefined ? v : key;
  }

  function applyStaticTranslations(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.dataset.i18n;
      const val = t(key);
      if(typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const key = el.dataset.i18nPh;
      const val = t(key);
      if(typeof val === 'string') el.placeholder = val;
    });
    document.documentElement.lang = currentLang;
    renderFooterVersion();
    if(sidebarEl && sidebarEl.classList.contains('collapsed')){
      document.querySelectorAll('.nav-btn[data-i18n-title]').forEach(btn=>{
        btn.title = t(btn.dataset.i18nTitle);
      });
      sidebarCollapseBtn.title = t('expandNav');
    }
  }

  // Pie de página: versión + fecha de publicación. Es clickeable y reabre
  // el modal de novedades, así se pueden consultar los cambios cuando sea.
  function renderFooterVersion(){
    const el = document.getElementById('appFooterVersion');
    if(!el) return;
    el.textContent = `v${APP_VERSION} · ${fmtDate(APP_RELEASE_DATE)}`;
    el.title = t('footerVersionHint');
  }

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentLang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b===btn));
      applyStaticTranslations();
      setSaveState(isDirty ? (hasDestination() ? 'unsaved' : 'unsaved-nofile') : (connectedFileName ? 'saved' : 'idle'));
      updateConnectedFileDisplay();
      updateStorageHealth();
      checkStaleSave();
      updateLastExportLine();
      renderAll();
    });
  });

  // ======================================================================
  // DATA / CONSTANTS
  // ----------------------------------------------------------------------
  // Estado, Etapa y Resultado comparten la misma forma: una lista de
  // pares [valor crudo, clave de traducción]. En vez de tener 3 listas
  // sueltas más 3 funciones de etiqueta casi idénticas, se modelan una
  // sola vez con createLookup() y se instancian para cada caso.
  // ======================================================================
  function createLookup(pairs){
    return {
      pairs,
      label(raw){
        const found = pairs.find(([r])=>r===raw);
        return found ? t(found[1]) : raw;
      },
      usedBy(list, getField){
        return pairs.filter(([raw])=>list.some(item=>getField(item)===raw));
      }
    };
  }

  const Lookups = {
    status: createLookup([
      ["In Progress","statInProgress"],["On Hold","statOnHold"],["Rejected","statRejected"],
      ["Withdrawn","statWithdrawn"],["Hired","statHired"]
    ]),
    stage: createLookup([
      ["Sourced","stgSourced"],["Contacted","stgContacted"],["Screening","stgScreening"],
      ["Recruiter Interview","stgRecruiterInterview"],["Client Interview 1","stgClientInterview1"],
      ["Client Interview 2","stgClientInterview2"],["Final Interview","stgFinalInterview"],
      ["Offer","stgOffer"],["Offer Accepted","stgOfferAccepted"],["Offer Rejected","stgOfferRejected"],
      ["Hired","stgHired"],["Rejected","stgRejected"]
    ]),
    outcome: createLookup([
      ["In Process","outInProcess"],["Rejected by Recruiter","outRejectedByRecruiter"],
      ["Rejected by Client","outRejectedByClient"],["Candidate Declined","outCandidateDeclined"],
      ["Offer Accepted","outOfferAccepted"],["Offer Rejected","outOfferRejected"],["Hired","outHired"]
    ])
  };

  // Alias retrocompatibles (mismo array [raw,key] que antes, por si se
  // itera directamente sobre la lista en otras partes del archivo).
  const STATUS_KEYS = Lookups.status.pairs;
  const STAGE_KEYS = Lookups.stage.pairs;
  const OUTCOME_KEYS = Lookups.outcome.pairs;

  const STATUS_BADGE_CLASS = {
    "In Progress":"badge-progress","On Hold":"badge-hold","Rejected":"badge-rejected",
    "Withdrawn":"badge-withdrawn","Hired":"badge-hired"
  };

  const FIELDS = ["firstName","lastName","jobTitle","email","phone","position","client","team","seniority","location","university",
    "experience","currentCompany","salaryExpectation","currency","availability","source","recruiter",
    "outcome","englishLevel","interviewDate","lastContact","nextFollowUp",
    "clientSubmissionDate","clientFeedback","notes"];

  const CSV_HEADERS = ["First Name","Last Name","Job Title","Mail","Cellphone","Position","Client","Team","Seniority","Location","University",
      "Years of Experience","Current Company","Salary Expectation","Currency","Availability","Source","Recruiter",
      "Status","Stage","Outcome","English Level","Interview Date","Last Contact","Next Follow-Up",
      "Client Submission Date","Client Feedback","Notes"];

  // CSV_FIELDS está alineado 1:1 con CSV_HEADERS. Incluye "status" y
  // "stage" aunque ya no sean inputs directos del formulario (ahora se
  // calculan desde el historial), para que el CSV exportado siga
  // teniendo esas columnas y los archivos viejos se puedan reimportar.
  const CSV_FIELDS = ["firstName","lastName","jobTitle","email","phone","position","client","team","seniority","location","university",
    "experience","currentCompany","salaryExpectation","currency","availability","source","recruiter",
    "status","stage","outcome","englishLevel","interviewDate","lastContact","nextFollowUp",
    "clientSubmissionDate","clientFeedback","notes"];

  // ----------------------------------------------------------------------
  // VERSIONADO
  // ----------------------------------------------------------------------
  // Única fuente de verdad de la versión: se muestra en el pie de página,
  // se estampa en el archivo .json que guarda la persona usuaria y decide
  // cuándo aparece el modal de novedades.
  //
  // Al publicar una versión nueva (el proceso completo está en README.md):
  //   1. Subir APP_VERSION y APP_RELEASE_DATE acá.
  //   2. Actualizar RELEASE_NOTES (es/en) con lo que cambió.
  //   3. Agregar la entrada correspondiente en CHANGELOG.md.
  //   4. Actualizar el ?v= de styles.css y app.js en index.html.
  const APP_VERSION = '2.4.0';
  const APP_RELEASE_DATE = '2026-08-21'; // AAAA-MM-DD; se muestra formateada en el pie

  // Notas de la versión actual, mostradas en el modal de novedades cuando
  // el sistema detecta un cambio de versión. Mantener sincronizado con CHANGELOG.md.
  const RELEASE_NOTES = {
    version: APP_VERSION,
    es: [
      { title:"Nuevo", items:[
        "Dropdowns Custom: Reemplazamos los aburridos menús selectores nativos por menús desplegables 100% personalizados y estilizados.",
        "Calendario (Datepicker): Se creó un motor de calendario desde cero en Vanilla JS para unificar la experiencia al elegir fechas en lugar de usar el calendario por defecto del sistema.",
        "El campo principal de búsqueda ahora incluye un elegante ícono de lupa."
      ]},
      { title:"Mejorado", items:[
        "Arquitectura de Estilos: Refactorización completa del sistema de estilos migrando a la metodología ITCSS y Diseño Atómico (OOCSS/BEM). Todo el CSS es modular ahora.",
        "El código HTML fue limpiado eliminando estilos integrados para adoptar un sistema de clases utilitarias."
      ]}
    ],
    en: [
      { title:"New", items:[
        "Custom Dropdowns: We replaced the boring native select menus with 100% custom and styled dropdown menus.",
        "Calendar (Datepicker): A calendar engine was built from scratch in Vanilla JS to unify the date picking experience instead of using the system's default calendar.",
        "The main search field now includes an elegant magnifying glass icon."
      ]},
      { title:"Improved", items:[
        "Styles Architecture: Complete refactoring of the styles system, migrating to the ITCSS methodology and Atomic Design (OOCSS/BEM). All CSS is modular now.",
        "The HTML code was cleaned by removing inline styles to adopt a utility class system."
      ]}
    ]
  };

  function cryptoId(){ return 'c'+Math.random().toString(36).slice(2,10)+Date.now().toString(36); }

  // ----------------------------------------------------------------------
  // Historial de Estado/Etapa
  // ----------------------------------------------------------------------
  // En vez de que "Estado" y "Etapa" sean campos sueltos que se
  // sobreescriben al editar, cada candidato guarda un historial de
  // eventos (fecha + estado + etapa + nota). El estado/etapa "actuales"
  // que se ven en tabla, dashboard y alertas son siempre el evento más
  // reciente del historial — nunca se editan a mano por separado, así
  // no hay forma de que queden desincronizados.
  function makeHistoryEvent(date, status, stage, note){
    return {id:cryptoId(), date: date || todayISO(), status: status || '', stage: stage || '', note: note || ''};
  }

  function sortedHistory(candidate){
    // Reutiliza el ordenador genérico para no duplicar la lógica de sort.
    return sortedHistoryArray(candidate.statusHistory || []);
  }

  function recomputeCurrentStatusStage(candidate){
    const history = sortedHistory(candidate);
    if(history.length===0){
      candidate.status = candidate.status || '';
      candidate.stage = candidate.stage || '';
      return;
    }
    const latest = history[history.length-1];
    candidate.status = latest.status || '';
    candidate.stage = latest.stage || '';
    candidate.stageChangedAt = latest.date || todayISO();
  }

  let recruiters = [];
  let clients = [];
  let candidates = [];
  candidates.forEach(recomputeCurrentStatusStage);


  let settings = {
    autoBackupEnabled:true,
    autoBackupIntervalMin:5,
    staleContactDays:14,
    staleStageDays:21,
    lastBackupAt:null,
    lastSeenVersion:null
  };

  let editingId = null;
  let sortKey = null, sortDir = 1;

  function todayISO(){ const d=new Date(); d.setHours(0,0,0,0); return d.toISOString().slice(0,10); }
  function fullNameOf(c){
    return [c.firstName, c.lastName].filter(Boolean).join(' ').trim();
  }
  function daysBetween(isoA, isoB){
    const a = new Date(isoA), b = new Date(isoB);
    return Math.round((b-a)/86400000);
  }

  // ======================================================================
  // TOASTS
  // ======================================================================
  function showToast(message, type, opts){
    type = type || 'info';
    opts = opts || {};
    const container = document.getElementById('toastContainer');
    if(!container) return null;
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    const iconTxt = {success:'✓', error:'!', warning:'!', info:'i'}[type] || 'i';
    const iconSpan = document.createElement('span');
    iconSpan.className = 'toast-icon';
    iconSpan.textContent = iconTxt;
    const msgSpan = document.createElement('span');
    msgSpan.className = 'toast-msg';
    msgSpan.textContent = message;
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', 'Cerrar');
    closeBtn.innerHTML = '&times;';
    el.appendChild(iconSpan); el.appendChild(msgSpan); el.appendChild(closeBtn);
    container.appendChild(el);
    (window.requestAnimationFrame || (fn=>setTimeout(fn,16)))(()=>el.classList.add('show'));
    const duration = opts.duration != null ? opts.duration : (type==='error' ? 7000 : 4000);
    let timer = null;
    const remove = ()=>{
      el.classList.remove('show');
      setTimeout(()=>{ if(el.parentNode) el.parentNode.removeChild(el); }, 200);
    };
    if(duration > 0) timer = setTimeout(remove, duration);
    closeBtn.addEventListener('click', ()=>{ if(timer) clearTimeout(timer); remove(); });
    return el;
  }

  // ======================================================================
  // MODAL DE ERROR
  // ======================================================================
  function reportError(title, message, err){
    try{ console.error(title, err); }catch(e){}
    const titleEl = document.getElementById('errorModalTitleText');
    const msgEl = document.getElementById('errorModalMessageText');
    const detailEl = document.getElementById('errorModalDetailText');
    if(titleEl) titleEl.textContent = title;
    if(msgEl) msgEl.textContent = message;
    if(detailEl){
      const detail = (err && (err.stack || err.message)) || (err ? String(err) : '');
      detailEl.textContent = detail;
    }
    const overlay = document.getElementById('errorModalOverlay');
    if(overlay) overlay.classList.add('active');
    showToast(message, 'error');
  }
  document.getElementById('errorModalCloseBtn').addEventListener('click', ()=>{
    document.getElementById('errorModalOverlay').classList.remove('active');
  });
  document.getElementById('errorModalXBtn').addEventListener('click', ()=>{
    document.getElementById('errorModalOverlay').classList.remove('active');
  });
  document.getElementById('errorModalOverlay').addEventListener('click', (e)=>{
    if(e.target===document.getElementById('errorModalOverlay')) document.getElementById('errorModalOverlay').classList.remove('active');
  });

  // ======================================================================
  // INDEXEDDB — almacén local de respaldo (handle del archivo + snapshot)
  // ======================================================================
  // Este almacén NUNCA es la fuente principal de datos: es una red de
  // seguridad para (a) recordar qué archivo estaba conectado entre
  // sesiones, y (b) tener una copia de emergencia si el archivo real no
  // se puede leer/escribir en algún momento. La fuente de verdad es
  // siempre el archivo que el usuario eligió con "Guardar como...".
  const IDB_NAME = 'pipeline_app_store';
  const IDB_STORE = 'kv';
  const IDB_KEY_HANDLE = 'lastFileHandle';
  const IDB_KEY_FILENAME = 'lastFileName';
  const IDB_KEY_SNAPSHOT = 'lastSnapshot';      // histórico: una sola copia (se sigue leyendo al migrar)
  const IDB_KEY_SNAPSHOTS = 'snapshotHistory';  // actual: las últimas N copias, de la más nueva a la más vieja
  const IDB_KEY_DIR = 'lastDirHandle';
  let idbUnavailable = false;

  function idbOpen(){
    return new Promise((resolve, reject)=>{
      if(typeof indexedDB === 'undefined'){ reject(new Error('NO_IDB')); return; }
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = ()=>{
        const db = req.result;
        if(!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE);
      };
      req.onsuccess = ()=>resolve(req.result);
      req.onerror = ()=>reject(req.error || new Error('IDB_OPEN_FAILED'));
    });
  }
  async function idbGet(key){
    if(idbUnavailable) return undefined;
    try{
      const db = await idbOpen();
      return await new Promise((resolve, reject)=>{
        const tx = db.transaction(IDB_STORE, 'readonly');
        const req = tx.objectStore(IDB_STORE).get(key);
        req.onsuccess = ()=>resolve(req.result);
        req.onerror = ()=>reject(req.error);
      });
    }catch(e){ idbUnavailable = true; return undefined; }
  }
  async function idbSet(key, value){
    if(idbUnavailable) return false;
    try{
      const db = await idbOpen();
      return await new Promise((resolve, reject)=>{
        const tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).put(value, key);
        tx.oncomplete = ()=>resolve(true);
        tx.onerror = ()=>reject(tx.error);
      });
    }catch(e){ idbUnavailable = true; return false; }
  }
  async function idbDelete(key){
    if(idbUnavailable) return false;
    try{
      const db = await idbOpen();
      return await new Promise((resolve, reject)=>{
        const tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).delete(key);
        tx.oncomplete = ()=>resolve(true);
        tx.onerror = ()=>reject(tx.error);
      });
    }catch(e){ idbUnavailable = true; return false; }
  }

  // ======================================================================
  // PERSISTENCE — guardado en archivo (File System Access API) con
  // reserva automática a modo de descarga manual donde el navegador no
  // soporte esa API (por ejemplo Firefox o Safari a la fecha de esto).
  // ======================================================================
  const FS_SUPPORTED = !!(window.showSaveFilePicker && window.showOpenFilePicker);
  const DIR_SUPPORTED = !!window.showDirectoryPicker;

  // Destino de guardado. Hay tres modos posibles, en orden de preferencia:
  //   'dir'      carpeta elegida por la persona usuaria. La app escribe
  //              siempre el mismo archivo (MAIN_FILE_NAME) y mantiene copias
  //              fechadas en una subcarpeta. Es el modo recomendado.
  //   'file'     un archivo suelto elegido con "Guardar como...". Sigue
  //              funcionando para quien ya lo tenía configurado.
  //   'fallback' navegador sin File System Access API: cada guardado descarga
  //              una copia. No hay destino fijo posible.
  const MAIN_FILE_NAME = 'pipeline.json';
  const BACKUP_DIR_NAME = 'backups';
  const MAX_BACKUPS = 10;            // copias fechadas que se conservan en backups/
  const BACKUP_MIN_MINUTES = 60;     // no se genera más de una copia por hora
  const SNAPSHOT_HISTORY_MAX = 5;    // copias de emergencia guardadas en el navegador
  const SNAPSHOT_SPACING_MINUTES = 5;// separación mínima entre copias de emergencia
  const STALE_SAVE_MINUTES = 10;     // sin guardar más de esto ⇒ aviso persistente

  let dirHandle = null;
  let fileHandle = null;
  let connectedFileName = null;
  let connectedFolderName = null;
  let isDirty = false;
  let dirtySince = null;
  let isSaving = false;
  let lastSavedAt = null;
  let lastBackupAt = null;
  let lastSnapshotAt = null;
  // Marca de tiempo del archivo tal como lo dejó la app. Si al ir a guardar
  // no coincide con la del disco, alguien lo editó por afuera (otra pestaña,
  // otra persona, o una carpeta sincronizada tipo Drive/OneDrive).
  let lastKnownModified = null;
  let saveDebounceTimer = null;
  let staleCheckTimer = null;
  let pendingFallbackFileName = null;

  function storageMode(){
    if(dirHandle) return 'dir';
    if(fileHandle) return 'file';
    if(!FS_SUPPORTED) return 'fallback';
    return 'none';
  }
  function hasDestination(){
    const m = storageMode();
    // En modo fallback no existe un destino fijo: lo más cercano es que la
    // persona ya haya descargado el archivo al menos una vez.
    return m === 'dir' || m === 'file' || (m === 'fallback' && !!connectedFileName);
  }

  function defaultJsonFileName(){
    const d = new Date();
    const ymd = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    return `pipeline_reclutamiento_${ymd}.json`;
  }

  function buildStatePayload(){
    return {
      appVersion: APP_VERSION,
      savedAt: new Date().toISOString(),
      candidates, recruiters, clients, settings
    };
  }

  function applyStatePayload(payload){
    if(!payload || typeof payload !== 'object') throw new Error('INVALID_FORMAT');
    if(!Array.isArray(payload.candidates)) throw new Error('INVALID_FORMAT');
    candidates = payload.candidates || [];
    recruiters = Array.isArray(payload.recruiters) ? payload.recruiters : [];
    clients = Array.isArray(payload.clients) ? payload.clients : [];
    settings = {...settings, ...(payload.settings || {})};
    candidates.forEach(recomputeCurrentStatusStage);
  }

  // ---------- Indicador de estado de guardado (topbar + tarjeta config) ----------
  function setSaveState(state){
    const dotEls = [document.getElementById('saveStatusDot'), document.getElementById('topSaveDot')];
    const textEls = [document.getElementById('saveStatusText'), document.getElementById('topSaveText')];
    const cfg = {
      idle:        {cls:'', text: t('saveStateIdle')},
      saving:      {cls:'saving', text: t('saveStateSaving')},
      saved:       {cls:'saved', text: connectedFileName ? t('saveStateSaved', fmtDateTime(lastSavedAt), connectedFileName) : t('saveStateSavedNoName', fmtDateTime(lastSavedAt))},
      'saved-fallback': {cls:'saved', text: connectedFileName ? t('saveStateDownloaded', connectedFileName) : t('saveStateSaved', fmtDateTime(lastSavedAt), '')},
      unsaved:     {cls:'unsaved', text: t('saveStateUnsaved')},
      'unsaved-nofile': {cls:'unsaved', text: t('saveStateNoFile')},
      disconnected:{cls:'error', text: t('saveStateDisconnected')},
      conflict:    {cls:'error', text: t('saveStateConflict')},
      error:       {cls:'error', text: t('saveStateError')},
    };
    const c = cfg[state] || cfg.idle;
    dotEls.forEach(d=>{ if(d){ d.className = 'save-dot ' + c.cls; } });
    textEls.forEach(el=>{ if(el) el.textContent = c.text; });
    const indicator = document.getElementById('topSaveIndicator');
    if(indicator) indicator.title = connectedFileName ? connectedFileName : '';
  }
  function fmtTime(date){
    if(!date) return '';
    return date.toLocaleTimeString(currentLang==='es'?'es-AR':'en-US', {hour:'2-digit', minute:'2-digit'});
  }
  // Igual que fmtTime, pero agrega la fecha cuando no es de hoy: un
  // "Guardado 14:32" es engañoso si ese guardado fue la semana pasada.
  function fmtDateTime(date){
    if(!date) return '';
    const locale = currentLang==='es'?'es-AR':'en-US';
    const now = new Date();
    const sameDay = date.getFullYear()===now.getFullYear()
      && date.getMonth()===now.getMonth()
      && date.getDate()===now.getDate();
    const time = fmtTime(date);
    return sameDay ? time : `${date.toLocaleDateString(locale, {day:'2-digit', month:'2-digit'})} ${time}`;
  }

  function updateConnectedFileDisplay(){
    const nameEl = document.getElementById('connectedFileName');
    const subEl = document.getElementById('connectedFileSub');
    if(!nameEl || !subEl) return;
    const mode = storageMode();
    if(mode === 'dir'){
      nameEl.textContent = `${connectedFolderName}/${MAIN_FILE_NAME}`;
      nameEl.removeAttribute('data-i18n');
      subEl.textContent = t('folderConnectedSub', MAX_BACKUPS);
      subEl.removeAttribute('data-i18n');
    } else if(connectedFileName){
      nameEl.textContent = connectedFileName;
      nameEl.removeAttribute('data-i18n');
      subEl.textContent = FS_SUPPORTED
        ? t('fileConnectedSub')
        : t('fileConnectedSubFallback');
      subEl.removeAttribute('data-i18n');
    } else {
      nameEl.textContent = t('noFileConnected');
      subEl.textContent = t('noFileConnectedSub');
    }
  }

  function showReconnectBanner(show){
    const banner = document.getElementById('reconnectBanner');
    if(banner) banner.style.display = show ? 'flex' : 'none';
  }

  // ---------- Escritura / lectura de archivo real ----------
  async function writeJsonToHandle(handle, payload){
    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(payload, null, 2));
    await writable.close();
  }
  async function ensureHandlePermissionSilent(handle){
    try{
      const q = await handle.queryPermission({mode:'readwrite'});
      return q === 'granted';
    }catch(e){ return false; }
  }
  async function ensureHandlePermission(handle){
    try{
      if((await handle.queryPermission({mode:'readwrite'})) === 'granted') return true;
      return (await handle.requestPermission({mode:'readwrite'})) === 'granted';
    }catch(e){ return false; }
  }

  // ---------- Escritura con guardas ----------
  // Toda escritura al destino pasa por acá. Dos protecciones:
  //   1. Conflicto: si el archivo en disco no es el que la app dejó la última
  //      vez, alguien lo tocó por afuera (otra pestaña, otra persona, una
  //      carpeta sincronizada). No se pisa sin preguntar.
  //   2. Verificación: se relee lo recién escrito y se confirma que es un
  //      JSON válido con la misma cantidad de candidatos. Un "Guardado" que
  //      miente es peor que un error visible.
  async function writeGuarded(handle, payload, opts){
    opts = opts || {};
    if(!opts.force && lastKnownModified != null){
      try{
        const before = await handle.getFile();
        if(before.size > 0 && before.lastModified !== lastKnownModified){
          return {status:'conflict'};
        }
      }catch(e){ /* si no se puede leer, sigue el flujo normal de escritura */ }
    }
    await writeJsonToHandle(handle, payload);
    try{
      const file = await handle.getFile();
      const parsed = JSON.parse(await file.text());
      if(!parsed || !Array.isArray(parsed.candidates)) return {status:'corrupt', detail:'INVALID_FORMAT'};
      if(parsed.candidates.length !== payload.candidates.length) return {status:'corrupt', detail:'COUNT_MISMATCH'};
      lastKnownModified = file.lastModified;
    }catch(e){
      return {status:'corrupt', detail:(e && e.message) || 'READ_BACK_FAILED'};
    }
    return {status:'ok'};
  }

  // ---------- Modo carpeta ----------
  function getMainFileHandle(create){
    return dirHandle.getFileHandle(MAIN_FILE_NAME, {create: !!create});
  }

  function backupStamp(d){
    const p = n=>String(n).padStart(2,'0');
    return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
  }

  // Copias fechadas dentro de backups/. No se genera una por cada guardado
  // automático (serían cientos por día): como mucho una por hora, más una
  // cada vez que se guarda a mano.
  async function rotateBackups(payload, opts){
    opts = opts || {};
    if(!dirHandle) return;
    const now = Date.now();
    if(!opts.force && lastBackupAt && (now - lastBackupAt) < BACKUP_MIN_MINUTES*60000) return;
    try{
      const backupsDir = await dirHandle.getDirectoryHandle(BACKUP_DIR_NAME, {create:true});
      const handle = await backupsDir.getFileHandle(`pipeline_${backupStamp(new Date())}.json`, {create:true});
      await writeJsonToHandle(handle, payload);
      lastBackupAt = now;
      await pruneBackups(backupsDir);
    }catch(e){
      // Que falle una copia de respaldo no puede romper el guardado principal.
    }
  }

  async function pruneBackups(backupsDir){
    try{
      const names = [];
      for await (const [name, entry] of backupsDir.entries()){
        if(entry.kind === 'file' && /^pipeline_.*\.json$/.test(name)) names.push(name);
      }
      // El nombre lleva la fecha en formato ordenable, así que alcanza con ordenar.
      names.sort();
      for(const name of names.slice(0, Math.max(0, names.length - MAX_BACKUPS))){
        try{ await backupsDir.removeEntry(name); }catch(e){}
      }
    }catch(e){}
  }

  async function readMainFile(){
    const handle = await getMainFileHandle(false);
    const file = await handle.getFile();
    const parsed = JSON.parse(await file.text());
    if(!parsed || !Array.isArray(parsed.candidates)) throw new Error('INVALID_FORMAT');
    return {payload: parsed, lastModified: file.lastModified};
  }

  async function adoptFolder(handle){
    dirHandle = handle;
    fileHandle = null;
    connectedFolderName = handle.name;
    connectedFileName = MAIN_FILE_NAME;
    await idbSet(IDB_KEY_DIR, handle);
    await idbDelete(IDB_KEY_HANDLE);
    await idbSet(IDB_KEY_FILENAME, MAIN_FILE_NAME);
    showReconnectBanner(false);
    updateConnectedFileDisplay();
  }

  // Conecta una carpeta como destino. Si ya hay un pipeline.json adentro,
  // decide (o pregunta) entre abrirlo o pisarlo con lo que hay en pantalla.
  async function connectFolder(){
    if(!DIR_SUPPORTED){ showToast(t('toastNoFolderSupport'), 'warning', {duration:8000}); return false; }
    let handle;
    try{
      handle = await window.showDirectoryPicker({mode:'readwrite', id:'pipelineFolder'});
    }catch(e){
      if(e && e.name==='AbortError') return false;
      reportError(t('errorFolderTitle'), t('errorFolderMsg'), e);
      return false;
    }
    if(!(await ensureHandlePermission(handle))){
      showToast(t('toastPermissionDenied'), 'error');
      return false;
    }

    let existing = null;
    try{
      const fh = await handle.getFileHandle(MAIN_FILE_NAME);
      const file = await fh.getFile();
      const parsed = JSON.parse(await file.text());
      if(parsed && Array.isArray(parsed.candidates)) existing = {payload: parsed, lastModified: file.lastModified};
    }catch(e){ existing = null; }

    if(existing && existing.payload.candidates.length && candidates.length){
      const choice = await askChoice({
        title: t('folderHasFileTitle'),
        message: t('folderHasFileMsg', existing.payload.candidates.length, candidates.length),
        options: [
          {key:'load', label:t('folderHasFileLoad'), primary:true},
          {key:'overwrite', label:t('folderHasFileOverwrite'), danger:true},
          {key:'cancel', label:t('cancelBtn')}
        ]
      });
      if(choice === 'cancel') return false;
      await adoptFolder(handle);
      if(choice === 'load'){
        applyStatePayload(existing.payload);
        lastKnownModified = existing.lastModified;
        lastSavedAt = existing.payload.savedAt ? new Date(existing.payload.savedAt) : new Date();
        isDirty = false;
        renderAll();
        setSaveState('saved');
        updateStorageHealth();
        showToast(t('toastFolderConnected', handle.name), 'success');
        return true;
      }
      lastKnownModified = null; // se decidió pisar: no hay conflicto que reportar
    } else if(existing && existing.payload.candidates.length){
      await adoptFolder(handle);
      applyStatePayload(existing.payload);
      lastKnownModified = existing.lastModified;
      lastSavedAt = existing.payload.savedAt ? new Date(existing.payload.savedAt) : new Date();
      isDirty = false;
      renderAll();
      setSaveState('saved');
      updateStorageHealth();
      showToast(t('toastFolderConnected', handle.name), 'success');
      return true;
    } else {
      await adoptFolder(handle);
      lastKnownModified = null;
    }

    await performSave({isAuto:false, force:true});
    showToast(t('toastFolderConnected', handle.name), 'success');
    return true;
  }

  // Vuelve a leer el destino y descarta lo que hay en pantalla.
  async function reloadFromDestination(){
    try{
      let payload = null, modified = null;
      if(dirHandle){
        const r = await readMainFile();
        payload = r.payload; modified = r.lastModified;
      } else if(fileHandle){
        const file = await fileHandle.getFile();
        payload = JSON.parse(await file.text());
        modified = file.lastModified;
      }
      if(!payload || !Array.isArray(payload.candidates)) throw new Error('INVALID_FORMAT');
      applyStatePayload(payload);
      lastKnownModified = modified;
      lastSavedAt = payload.savedAt ? new Date(payload.savedAt) : null;
      isDirty = false;
      dirtySince = null;
      renderAll();
      setSaveState('saved');
      updateStorageHealth();
      showToast(t('toastReloadedFromFile'), 'success');
    }catch(e){
      reportError(t('errorOpenTitle'), t('errorOpenMsg'), e);
    }
  }

  function downloadJsonFallback(){
    try{
      const payload = buildStatePayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const name = connectedFileName || defaultJsonFileName();
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
      connectedFileName = name;
      markSaved();
      idbSet(IDB_KEY_FILENAME, name);
      setSaveState('saved-fallback');
      updateConnectedFileDisplay();
      updateStorageHealth();
      closeStorageGateIfReady();
      showToast(t('toastDownloaded', name), 'success');
    }catch(e){
      setSaveState('error');
      reportError(t('errorSaveTitle'), t('errorSaveMsg'), e);
    }
  }

  async function saveAs(){
    if(!FS_SUPPORTED){ downloadJsonFallback(); return; }
    try{
      const handle = await window.showSaveFilePicker({
        suggestedName: connectedFileName || defaultJsonFileName(),
        types: [{ description:'Pipeline JSON', accept:{'application/json':['.json']} }]
      });
      // "Guardar como..." conecta un archivo suelto: deja de haber carpeta.
      fileHandle = handle;
      dirHandle = null;
      connectedFolderName = null;
      connectedFileName = handle.name;
      lastKnownModified = null;
      await idbDelete(IDB_KEY_DIR);
      await idbSet(IDB_KEY_HANDLE, handle);
      await idbSet(IDB_KEY_FILENAME, handle.name);
      showReconnectBanner(false);
      updateConnectedFileDisplay();
      await performSave({isAuto:false, force:true});
    }catch(e){
      if(e && e.name==='AbortError') return; // el usuario canceló el selector, no es un error
      reportError(t('errorSaveAsTitle'), t('errorSaveAsMsg'), e);
    }
  }

  function markSaved(){
    isDirty = false;
    dirtySince = null;
    lastSavedAt = new Date();
    showStaleBanner(false);
  }

  // Se separa el guardado en sí (performSaveInner) de las decisiones que
  // requieren preguntarle algo a la persona usuaria (performSave). Si no,
  // el diálogo de conflicto quedaría atrapado dentro del bloqueo isSaving.
  async function performSave(opts){
    opts = opts || {};
    const res = await performSaveInner(opts);
    if(res === 'conflict') await handleConflict();
    else if(res === 'no-destination') await openStorageGate('missing');
    else if(res === 'lost-access') await openStorageGate('lost');
    return res;
  }

  async function performSaveInner(opts){
    opts = opts || {};
    const isAuto = !!opts.isAuto;
    if(isSaving) return 'busy';
    isSaving = true;
    if(!isAuto) setSaveState('saving');
    try{
      const payload = buildStatePayload();
      // Copia de emergencia local, siempre, independientemente del archivo.
      await saveSnapshot(payload);

      const mode = storageMode();

      if(mode === 'dir' || mode === 'file'){
        const target = mode === 'dir' ? dirHandle : fileHandle;
        if(!(await ensureHandlePermissionSilent(target))){
          setSaveState('disconnected');
          showReconnectBanner(true);
          if(!isAuto) showToast(t('toastReconnectNeeded'), 'warning');
          return 'lost-access';
        }
        const handle = mode === 'dir' ? await getMainFileHandle(true) : fileHandle;
        const res = await writeGuarded(handle, payload, {force: !!opts.force});
        if(res.status === 'conflict'){
          setSaveState('conflict');
          return 'conflict';
        }
        if(res.status === 'corrupt'){
          setSaveState('error');
          reportError(t('errorVerifyTitle'), t('errorVerifyMsg'), new Error(res.detail));
          return 'corrupt';
        }
        markSaved();
        setSaveState('saved');
        updateConnectedFileDisplay();
        updateStorageHealth();
        if(mode === 'dir') await rotateBackups(payload, {force: !isAuto});
        if(!isAuto) showToast(t('toastSaved', connectedFileName), 'success');
        return 'ok';
      }

      if(mode === 'fallback'){
        if(!isAuto){ downloadJsonFallback(); return 'ok'; }
        setSaveState('unsaved-nofile');
        return 'no-destination';
      }

      // mode === 'none': hay soporte de archivos pero nadie eligió destino.
      setSaveState('unsaved-nofile');
      return 'no-destination';
    }catch(e){
      setSaveState('error');
      if(!isAuto) reportError(t('errorSaveTitle'), t('errorSaveMsg'), e);
      else showToast(t('toastAutoSaveFailed'), 'error');
      return 'error';
    } finally {
      isSaving = false;
    }
  }

  async function handleConflict(){
    const choice = await askChoice({
      title: t('conflictTitle'),
      message: t('conflictMsg'),
      options: [
        {key:'overwrite', label:t('conflictOverwrite'), primary:true},
        {key:'reload', label:t('conflictReload'), danger:true},
        {key:'cancel', label:t('cancelBtn')}
      ]
    });
    if(choice === 'overwrite') await performSave({isAuto:false, force:true});
    else if(choice === 'reload') await reloadFromDestination();
    else setSaveState('unsaved');
  }

  function scheduleSave(){
    if(!isDirty) dirtySince = Date.now();
    isDirty = true;
    setSaveState(hasDestination() ? 'unsaved' : 'unsaved-nofile');
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(()=>{ performSave({isAuto:true}); }, 1500);
  }

  // ---------- Aviso de "hace mucho que no se guarda" ----------
  function showStaleBanner(show, minutes){
    const banner = document.getElementById('staleSaveBanner');
    if(!banner) return;
    if(show){
      const textEl = document.getElementById('staleSaveText');
      if(textEl) textEl.textContent = t('staleSaveWarning', minutes);
    }
    banner.style.display = show ? 'flex' : 'none';
  }

  function checkStaleSave(){
    if(!isDirty || !dirtySince){ showStaleBanner(false); return; }
    const minutes = Math.floor((Date.now() - dirtySince) / 60000);
    showStaleBanner(minutes >= STALE_SAVE_MINUTES, minutes);
  }

  function startStaleWatch(){
    clearInterval(staleCheckTimer);
    staleCheckTimer = setInterval(checkStaleSave, 60000);
  }

  // ---------- Modal genérico de decisión ----------
  // Devuelve una promesa con la clave de la opción elegida ('cancel' si se
  // cierra sin elegir). Lo usan el conflicto de archivo y la conexión de
  // carpeta, que necesitan una respuesta antes de seguir.
  let choiceResolver = null;
  function askChoice(cfg){
    const overlay = document.getElementById('choiceOverlay');
    if(!overlay) return Promise.resolve('cancel');
    document.getElementById('choiceTitle').textContent = cfg.title;
    document.getElementById('choiceMessage').textContent = cfg.message;
    const foot = document.getElementById('choiceActions');
    foot.innerHTML = '';
    (cfg.options || []).forEach(opt=>{
      const b = document.createElement('button');
      b.className = 'btn' + (opt.primary ? ' btn-primary' : (opt.danger ? ' btn-danger' : ''));
      b.textContent = opt.label;
      b.addEventListener('click', ()=>resolveChoice(opt.key));
      foot.appendChild(b);
    });
    overlay.classList.add('active');
    return new Promise(resolve=>{ choiceResolver = resolve; });
  }
  function resolveChoice(key){
    const overlay = document.getElementById('choiceOverlay');
    if(overlay) overlay.classList.remove('active');
    const resolve = choiceResolver;
    choiceResolver = null;
    if(resolve) resolve(key);
  }

  // ---------- Gate de destino de guardado ----------
  // La app no puede usarse sin un lugar donde guardar: si no hay destino
  // configurado (o se perdió el acceso), este modal bloquea la pantalla
  // hasta que se elija uno. No tiene X ni se cierra clickeando afuera.
  let gateOpen = false;
  function openStorageGate(reason){
    const overlay = document.getElementById('storageGateOverlay');
    if(!overlay || gateOpen) return Promise.resolve();
    gateOpen = true;
    const lost = reason === 'lost';
    document.getElementById('storageGateTitle').textContent = lost ? t('gateLostTitle') : t('gateTitle');
    document.getElementById('storageGateMsg').textContent = FS_SUPPORTED
      ? (lost ? t('gateLostMsg') : t('gateMsg'))
      : t('gateFallbackMsg');
    const show = (id, visible)=>{
      const el = document.getElementById(id);
      if(el) el.style.display = visible ? '' : 'none';
    };
    show('gateFolderBtn', FS_SUPPORTED && DIR_SUPPORTED);
    show('gateFileBtn', FS_SUPPORTED);
    show('gateOpenBtn', FS_SUPPORTED);
    show('gateReconnectBtn', lost);
    show('gateFallbackBtn', !FS_SUPPORTED);
    overlay.classList.add('active');
    return Promise.resolve();
  }
  function closeStorageGateIfReady(){
    if(!hasDestination()) return false;
    const overlay = document.getElementById('storageGateOverlay');
    if(overlay) overlay.classList.remove('active');
    gateOpen = false;
    return true;
  }

  // ---------- Copias de emergencia en el navegador ----------
  // Se guardan las últimas SNAPSHOT_HISTORY_MAX, de la más nueva a la más
  // vieja, para poder volver atrás si lo último que se guardó vino mal.
  async function saveSnapshot(payload){
    const entry = {
      json: JSON.stringify(payload),
      savedAt: payload.savedAt,
      count: Array.isArray(payload.candidates) ? payload.candidates.length : 0
    };
    let list = await idbGet(IDB_KEY_SNAPSHOTS);
    if(!Array.isArray(list)) list = [];
    // El guardado automático dispara cada pocos segundos: si cada uno
    // agregara una copia, las 5 cubrirían medio minuto y no servirían de
    // nada. Se agrega una copia nueva sólo cada SNAPSHOT_SPACING_MINUTES;
    // en el medio se reemplaza la más reciente.
    const newest = list[0];
    const spaced = !newest || !newest.savedAt
      || (Date.parse(entry.savedAt) - Date.parse(newest.savedAt)) >= SNAPSHOT_SPACING_MINUTES*60000;
    if(spaced) list.unshift(entry); else list[0] = entry;
    await idbSet(IDB_KEY_SNAPSHOTS, list.slice(0, SNAPSHOT_HISTORY_MAX));
    lastSnapshotAt = new Date(entry.savedAt);
  }

  async function readSnapshots(){
    const list = await idbGet(IDB_KEY_SNAPSHOTS);
    if(Array.isArray(list) && list.length) return list;
    const legacy = await idbGet(IDB_KEY_SNAPSHOT); // formato de versiones anteriores
    if(legacy && legacy.json) return [legacy];
    return [];
  }

  async function requestPersistentStorage(){
    try{
      if(navigator.storage && navigator.storage.persist){
        if(!(await navigator.storage.persisted())) await navigator.storage.persist();
      }
    }catch(e){}
  }

  // ---------- Panel de estado del guardado (Configuración) ----------
  function updateStorageHealth(){
    const set = (id, value)=>{
      const el = document.getElementById(id);
      if(el) el.textContent = value;
    };
    const mode = storageMode();
    let dest = t('healthDestNone');
    if(mode === 'dir') dest = t('healthDestFolder', connectedFolderName || '', MAIN_FILE_NAME);
    else if(mode === 'file') dest = t('healthDestFile', connectedFileName || '');
    else if(mode === 'fallback') dest = t('healthDestDownloads');
    set('healthDest', dest);
    set('healthLastSave', lastSavedAt ? fmtDateTime(lastSavedAt) : t('healthNever'));
    set('healthLastSnapshot', lastSnapshotAt ? fmtDateTime(lastSnapshotAt) : t('healthNever'));
    set('healthCount', String(candidates.length));
  }

  async function reconnectFile(){
    if(!dirHandle && !fileHandle){
      dirHandle = await idbGet(IDB_KEY_DIR);
      if(dirHandle) connectedFolderName = dirHandle.name;
      if(!dirHandle) fileHandle = await idbGet(IDB_KEY_HANDLE);
    }
    const target = dirHandle || fileHandle;
    if(!target){ showToast(t('toastNoFileToReconnect'), 'warning'); return; }
    try{
      if(await ensureHandlePermission(target)){
        connectedFileName = dirHandle ? MAIN_FILE_NAME : fileHandle.name;
        showReconnectBanner(false);
        updateConnectedFileDisplay();
        closeStorageGateIfReady();
        showToast(t('toastReconnected', target.name), 'success');
        await performSave({isAuto:false});
      } else {
        showToast(t('toastPermissionDenied'), 'error');
      }
    }catch(e){
      reportError(t('errorReconnectTitle'), t('errorReconnectMsg'), e);
    }
  }

  // ---------- Abrir archivo ----------
  function pickFileViaInput(){
    return new Promise((resolve, reject)=>{
      const input = document.getElementById('fileOpenJsonInput');
      input.value = '';
      const handler = (e)=>{
        const file = e.target.files[0];
        input.removeEventListener('change', handler);
        if(!file){ reject(Object.assign(new Error('canceled'), {name:'AbortError'})); return; }
        pendingFallbackFileName = file.name;
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = ()=>reject(reader.error);
        reader.readAsText(file);
      };
      input.addEventListener('change', handler);
      input.click();
    });
  }

  async function proceedOpenFile(){
    try{
      let text, handle = null, name = null;
      if(FS_SUPPORTED){
        const [h] = await window.showOpenFilePicker({
          types: [{ description:'Pipeline JSON', accept:{'application/json':['.json']} }]
        });
        handle = h;
        const file = await handle.getFile();
        text = await file.text();
        name = handle.name;
      } else {
        text = await pickFileViaInput();
        name = pendingFallbackFileName;
      }
      let payload;
      try{ payload = JSON.parse(text); }
      catch(parseErr){ throw Object.assign(new Error('PARSE_ERROR'), {cause:parseErr}); }
      if(!payload || !Array.isArray(payload.candidates)) throw new Error('INVALID_FORMAT');

      applyStatePayload(payload);
      lastSavedAt = payload.savedAt ? new Date(payload.savedAt) : new Date();
      if(handle){
        fileHandle = handle;
        dirHandle = null;
        connectedFolderName = null;
        connectedFileName = handle.name;
        lastKnownModified = (await handle.getFile()).lastModified;
        await idbDelete(IDB_KEY_DIR);
        await idbSet(IDB_KEY_HANDLE, handle);
        await idbSet(IDB_KEY_FILENAME, handle.name);
      } else if(name){
        connectedFileName = name;
        fileHandle = null;
        await idbSet(IDB_KEY_FILENAME, name);
      }
      isDirty = false;
      dirtySince = null;
      showReconnectBanner(false);
      showStaleBanner(false);
      closeStorageGateIfReady();
      setSaveState(FS_SUPPORTED && fileHandle ? 'saved' : 'saved-fallback');
      updateConnectedFileDisplay();
      updateStorageHealth();
      renderAll();
      showToast(t('toastOpened', connectedFileName || ''), 'success');
    }catch(e){
      if(e && e.name==='AbortError') return;
      if(e.message==='PARSE_ERROR') reportError(t('errorOpenParseTitle'), t('errorOpenParseMsg'), e);
      else if(e.message==='INVALID_FORMAT') reportError(t('errorOpenFormatTitle'), t('errorOpenFormatMsg'), e);
      else reportError(t('errorOpenTitle'), t('errorOpenMsg'), e);
    }
  }

  async function openFile(){
    if(isDirty){
      document.getElementById('confirmOpenOverlay').classList.add('active');
      return;
    }
    await proceedOpenFile();
  }

  document.getElementById('confirmOpenCancelBtn').addEventListener('click', ()=>{
    document.getElementById('confirmOpenOverlay').classList.remove('active');
  });
  document.getElementById('confirmOpenXBtn').addEventListener('click', ()=>{
    document.getElementById('confirmOpenOverlay').classList.remove('active');
  });
  document.getElementById('confirmOpenOverlay').addEventListener('click', (e)=>{
    if(e.target===document.getElementById('confirmOpenOverlay')) document.getElementById('confirmOpenOverlay').classList.remove('active');
  });
  document.getElementById('confirmOpenDiscardBtn').addEventListener('click', async ()=>{
    document.getElementById('confirmOpenOverlay').classList.remove('active');
    await proceedOpenFile();
  });
  document.getElementById('confirmOpenSaveBtn').addEventListener('click', async ()=>{
    document.getElementById('confirmOpenOverlay').classList.remove('active');
    await performSave({isAuto:false});
    if(!isDirty){ await proceedOpenFile(); }
  });

  document.getElementById('saveNowBtn').addEventListener('click', ()=>performSave({isAuto:false}));
  document.getElementById('saveAsBtn').addEventListener('click', ()=>saveAs());
  document.getElementById('openFileBtn').addEventListener('click', ()=>openFile());
  document.getElementById('reconnectBtn').addEventListener('click', ()=>reconnectFile());
  document.getElementById('chooseFolderBtn').addEventListener('click', async ()=>{
    if(await connectFolder()) closeStorageGateIfReady();
  });
  document.getElementById('staleSaveBtn').addEventListener('click', ()=>performSave({isAuto:false}));

  // El gate no se cierra solo: cada acción intenta dejar un destino válido.
  document.getElementById('gateFolderBtn').addEventListener('click', async ()=>{
    if(await connectFolder()) closeStorageGateIfReady();
  });
  document.getElementById('gateFileBtn').addEventListener('click', async ()=>{
    await saveAs();
    closeStorageGateIfReady();
  });
  document.getElementById('gateOpenBtn').addEventListener('click', async ()=>{
    await proceedOpenFile();
    closeStorageGateIfReady();
  });
  document.getElementById('gateReconnectBtn').addEventListener('click', async ()=>{
    await reconnectFile();
    closeStorageGateIfReady();
  });
  document.getElementById('gateFallbackBtn').addEventListener('click', ()=>{
    downloadJsonFallback();
    closeStorageGateIfReady();
  });
  document.getElementById('choiceOverlay').addEventListener('click', (e)=>{
    if(e.target===document.getElementById('choiceOverlay')) resolveChoice('cancel');
  });

  window.addEventListener('beforeunload', (e)=>{
    if(isDirty){ e.preventDefault(); e.returnValue = ''; }
  });

  async function recoverFromSnapshot(){
    try{
      const [snap] = await readSnapshots();
      if(snap && snap.json){
        const payload = JSON.parse(snap.json);
        if(payload && Array.isArray(payload.candidates) && payload.candidates.length){
          applyStatePayload(payload);
          lastSnapshotAt = snap.savedAt ? new Date(snap.savedAt) : null;
        }
      }
    }catch(e){ /* no hay nada que recuperar, se arranca vacío */ }
  }

  async function initPersistence(){
    if(!FS_SUPPORTED){
      try{
        if(!localStorage.getItem('pipeline_fs_notice_shown')){
          showToast(t('toastFallbackMode'), 'info', {duration:9000});
          localStorage.setItem('pipeline_fs_notice_shown', '1');
        }
      }catch(e){}
    }

    requestPersistentStorage();

    let lostAccess = false;
    try{
      const savedDir = await idbGet(IDB_KEY_DIR);
      const savedFile = savedDir ? null : await idbGet(IDB_KEY_HANDLE);

      if(savedDir){
        dirHandle = savedDir;
        connectedFolderName = savedDir.name;
        connectedFileName = MAIN_FILE_NAME;
        if(await ensureHandlePermissionSilent(savedDir)){
          try{
            const {payload, lastModified} = await readMainFile();
            applyStatePayload(payload);
            lastKnownModified = lastModified;
            lastSavedAt = payload.savedAt ? new Date(payload.savedAt) : null;
            setSaveState('saved');
          }catch(readErr){
            // La carpeta sigue accesible pero el archivo no está o no se
            // puede leer: se recupera lo local y se reescribe al guardar.
            await recoverFromSnapshot();
            setSaveState(candidates.length ? 'unsaved' : 'idle');
          }
        } else {
          await recoverFromSnapshot();
          lostAccess = true;
        }
      } else if(savedFile){
        fileHandle = savedFile;
        connectedFileName = savedFile.name;
        if(await ensureHandlePermissionSilent(savedFile)){
          try{
            const file = await savedFile.getFile();
            const payload = JSON.parse(await file.text());
            if(payload && Array.isArray(payload.candidates)){
              applyStatePayload(payload);
              lastKnownModified = file.lastModified;
              lastSavedAt = payload.savedAt ? new Date(payload.savedAt) : null;
              setSaveState('saved');
            }
          }catch(readErr){
            await recoverFromSnapshot();
            lostAccess = true;
          }
        } else {
          await recoverFromSnapshot();
          lostAccess = true;
        }
      } else {
        const savedName = await idbGet(IDB_KEY_FILENAME);
        if(savedName && !FS_SUPPORTED) connectedFileName = savedName;
        await recoverFromSnapshot();
        setSaveState(candidates.length ? 'unsaved-nofile' : 'idle');
      }
    }catch(e){
      await recoverFromSnapshot();
    }

    if(lostAccess){
      setSaveState('disconnected');
      showReconnectBanner(true);
    }

    applySettingsToUI();
    setupAutoBackupTimer();
    startStaleWatch();
    renderAll();
    maybeShowWhatsNew();
    updateConnectedFileDisplay();
    updateStorageHealth();

    // Sin destino no hay dónde guardar: se exige elegir uno antes de seguir.
    if(lostAccess) openStorageGate('lost');
    else if(!hasDestination()) openStorageGate('missing');
  }

  // ---------- Modal de novedades ----------
  function renderWhatsNew(){
    document.getElementById('whatsNewVersion').textContent = `v${RELEASE_NOTES.version}`;
    const groups = RELEASE_NOTES[currentLang] || RELEASE_NOTES.en;
    document.getElementById('whatsNewBody').innerHTML = groups.map(g=>`
      <div class="whatsnew-group">
        <h4>${escapeHtml(g.title)}</h4>
        <ul class="whatsnew-list">
          ${g.items.map(it=>`<li>${escapeHtml(it)}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
  function openWhatsNew(){
    renderWhatsNew();
    document.getElementById('whatsNewOverlay').classList.add('active');
  }
  function closeWhatsNew(){
    document.getElementById('whatsNewOverlay').classList.remove('active');
    // Al cerrarlo, recién marca la versión como vista (y persiste). Si ya
    // estaba vista —por ejemplo si se abrió desde el pie de página— no
    // vuelve a guardar ni ensucia el archivo.
    if(settings.lastSeenVersion === APP_VERSION) return;
    settings.lastSeenVersion = APP_VERSION;
    scheduleSave();
  }
  function maybeShowWhatsNew(){
    // Muestra el modal solo si la versión vista difiere de la actual.
    // En una instalación nueva (sin versión previa) no molesta: se marca
    // como vista en silencio.
    if(settings.lastSeenVersion === APP_VERSION) return;
    if(settings.lastSeenVersion == null){
      settings.lastSeenVersion = APP_VERSION;
      scheduleSave();
      return;
    }
    openWhatsNew();
  }
  document.getElementById('whatsNewCloseBtn').addEventListener('click', closeWhatsNew);
  document.getElementById('whatsNewOkBtn').addEventListener('click', closeWhatsNew);
  document.getElementById('whatsNewOverlay').addEventListener('click', (e)=>{
    if(e.target===document.getElementById('whatsNewOverlay')) closeWhatsNew();
  });

  function updateLastExportLine(){
    const dot = document.getElementById('lastExportDot');
    const text = document.getElementById('lastExportText');
    if(!dot || !text) return;
    if(settings.lastBackupAt){
      dot.classList.remove('off');
      const time = new Date(settings.lastBackupAt).toLocaleString(currentLang==='es'?'es-AR':'en-US');
      text.textContent = t('lastExport', time);
    } else {
      dot.classList.add('off');
      text.textContent = t('neverExported');
    }
  }

  // ======================================================================
  // NAVIGATION (sidebar)
  // ======================================================================
  const VIEW_TITLES = {
    dashboard: {title:'navDashboard', sub:'dashSubtitle'},
    database:  {title:'navDatabase',  sub:'dbSubtitle'},
    config:    {title:'navConfig',    sub:'configSubtitle'}
  };
  function updateViewTitle(view){
    const cfg = VIEW_TITLES[view] || VIEW_TITLES.dashboard;
    const el = document.getElementById('viewTitle');
    el.querySelector('h2').setAttribute('data-i18n', cfg.title);
    el.querySelector('h2').textContent = t(cfg.title);
    el.querySelector('p').setAttribute('data-i18n', cfg.sub);
    el.querySelector('p').textContent = t(cfg.sub);
  }

  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('view-'+btn.dataset.view).classList.add('active');
      updateViewTitle(btn.dataset.view);
      if(btn.dataset.view==='dashboard') renderDashboard();
    });
  });

  function goToConfig(){
    document.querySelector('.nav-btn[data-view="config"]').click();
  }
  document.getElementById('goToConfigFromRecruiter').addEventListener('click', ()=>{ closeModal(); goToConfig(); });
  document.getElementById('goToConfigFromClient').addEventListener('click', ()=>{ closeModal(); goToConfig(); });

  // ---------- Sidebar collapse ----------
  const SIDEBAR_COLLAPSE_KEY = 'pipeline-sidebar-collapsed';
  const sidebarEl = document.getElementById('sidebar');
  const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');

  function setSidebarCollapsed(collapsed){
    sidebarEl.classList.toggle('collapsed', collapsed);
    document.querySelectorAll('.nav-btn[data-i18n-title]').forEach(btn=>{
      btn.title = collapsed ? t(btn.dataset.i18nTitle) : '';
    });
    sidebarCollapseBtn.title = collapsed ? t('expandNav') : '';
    try{ localStorage.setItem(SIDEBAR_COLLAPSE_KEY, collapsed ? '1' : '0'); }catch(e){}
    // El ancho disponible cambió: el gráfico de tendencia debe re-renderizarse.
    setTimeout(()=>{
      const dashView = document.getElementById('view-dashboard');
      if(dashView.classList.contains('active')) renderTrendChart(getDashboardFiltered());
    }, 200);
  }

  sidebarCollapseBtn.addEventListener('click', ()=>{
    setSidebarCollapsed(!sidebarEl.classList.contains('collapsed'));
  });

  (function initSidebarCollapseState(){
    let stored = '0';
    try{ stored = localStorage.getItem(SIDEBAR_COLLAPSE_KEY) || '0'; }catch(e){}
    setSidebarCollapsed(stored==='1');
  })();

  // ======================================================================
  // RECRUITERS / CLIENTS MANAGEMENT (now in Config view)
  // ----------------------------------------------------------------------
  // Reclutadores y Clientes son dos "listas maestras" con el mismo
  // comportamiento (agregar, listar con conteo de uso, eliminar con
  // confirmación si está en uso, alimentar un <select>). En vez de
  // duplicar esa lógica dos veces, se modela una sola vez con una
  // factory y se instancia con los datos propios de cada lista.
  // ======================================================================
  function createListManager(config){
    const { getItems, setItems, fieldName, listElId, inputElId, addBtnId, selectElId } = config;

    function usageCount(name){
      return candidates.filter(c=>c[fieldName]===name).length;
    }

    function render(){
      const list = document.getElementById(listElId);
      const items = getItems();
      if(items.length===0){
        list.innerHTML = `<div style="color:var(--ink-soft);font-size:13px;">${t('noDataYet')}</div>`;
        return;
      }
      list.innerHTML = items.map(name=>`
        <div class="manage-row">
          <span>${escapeHtml(name)}</span>
          <span class="manage-count">${t('manageRecruitersInUse', usageCount(name))}</span>
          <button class="btn-x btn-x-sm manage-remove" data-name="${escapeHtml(name)}" title="Eliminar">${ICON_X}</button>
        </div>
      `).join('');
      list.querySelectorAll('.manage-remove').forEach(btn=>{
        btn.addEventListener('click', ()=>remove(btn.dataset.name));
      });
    }

    function add(rawName){
      const name = (rawName || '').trim();
      if(!name) return;
      const items = getItems();
      if(!items.includes(name)) setItems([...items, name]);
      render();
      refreshSelect();
      scheduleSave();
    }

    function remove(name){
      const count = usageCount(name);
      const warningKey = fieldName==='client' ? 'deleteClientInUseWarning' : 'deleteInUseWarning';
      if(count>0 && !confirm(t(warningKey))) return;
      setItems(getItems().filter(x=>x!==name));
      candidates.forEach(c=>{ if(c[fieldName]===name) c[fieldName]=''; });
      render();
      refreshSelect();
      scheduleSave();
      renderAll();
    }

    function refreshSelect(){
      fillPlainSelect(document.getElementById(selectElId), getItems(), t('optNone'));
    }

    const addBtn = document.getElementById(addBtnId);
    const input = document.getElementById(inputElId);
    addBtn.addEventListener('click', ()=>{ add(input.value); input.value=''; });
    input.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); addBtn.click(); } });

    return { render, refreshSelect, add, remove };
  }

  const recruitersManager = createListManager({
    getItems: ()=>recruiters,
    setItems: (v)=>{ recruiters = v; },
    fieldName: 'recruiter',
    listElId: 'recruitersList',
    inputElId: 'newRecruiterInput',
    addBtnId: 'addRecruiterBtn',
    selectElId: 'f-recruiter'
  });

  const clientsManager = createListManager({
    getItems: ()=>clients,
    setItems: (v)=>{ clients = v; },
    fieldName: 'client',
    listElId: 'clientsList',
    inputElId: 'newClientInput',
    addBtnId: 'addClientBtn',
    selectElId: 'f-client'
  });

  function renderRecruitersList(){ recruitersManager.render(); }
  function renderClientsList(){ clientsManager.render(); }
  function refreshAllRecruiterSelects(){ recruitersManager.refreshSelect(); }
  function refreshAllClientSelects(){ clientsManager.refreshSelect(); }

  function fillPlainSelect(sel, values, noneLabel){
    const current = sel.value;
    sel.innerHTML = `<option value="">${noneLabel}</option>` + values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
    if(values.includes(current)) sel.value = current;
    if(sel._customDropdown) sel._customDropdown.updateOptions();
  }

  // ======================================================================
  // CANDIDATE MODAL
  // ======================================================================
  const overlay = document.getElementById('overlay');
  const form = document.getElementById('candidateForm');

  // Historial "de trabajo" mientras el modal está abierto. Se confirma
  // (se copia al candidato real) solo al presionar Guardar.
  let workingHistory = [];
  let originalHistoryCount = 0;
  let editingHistoryEventId = null;

  function openModal(candidate){
    editingId = candidate ? candidate.id : null;
    document.getElementById('modalTitle').textContent = candidate ? t('editCandidateTitle') : t('newCandidateTitle');
    document.getElementById('deleteBtn').style.display = candidate ? 'inline-block' : 'none';
    refreshAllRecruiterSelects();
    refreshAllClientSelects();
    FIELDS.forEach(f=>{
      const el = document.getElementById('f-'+f);
      el.value = candidate ? (candidate[f] ?? '') : '';
    });

    workingHistory = candidate && candidate.statusHistory
      ? candidate.statusHistory.map(ev=>({...ev}))
      : [];
    originalHistoryCount = workingHistory.length;
    editingHistoryEventId = null;
    document.getElementById('historyNewDate').value = todayISO();
    document.getElementById('historyNewStatus').value = '';
    document.getElementById('historyNewStage').value = '';
    document.getElementById('historyNewNote').value = '';
    renderHistoryPanel();

    overlay.classList.add('active');
  }
  function closeModal(){ overlay.classList.remove('active'); editingId=null; workingHistory=[]; editingHistoryEventId=null; form.reset(); }

  document.getElementById('addCandidateBtn').addEventListener('click', ()=>openModal(null));
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) closeModal(); });

  // ---------- History panel rendering ----------
  function renderHistoryPanel(){
    const list = document.getElementById('statusHistoryList');
    const ordered = sortedHistoryArray(workingHistory);

    if(ordered.length===0){
      list.innerHTML = `<div class="history-empty">${t('noHistoryYet')}</div>`;
    } else {
      list.innerHTML = ordered.map(ev=>{
        if(ev.id===editingHistoryEventId){
          return historyEditRowHtml(ev);
        }
        return historyDisplayRowHtml(ev);
      }).join('');
    }

    wireHistoryRowEvents();
    renderCurrentStatusStageDisplay();
  }

  function sortedHistoryArray(history){
    // Orden cronológico ascendente; si la fecha es igual, respeta el orden de inserción.
    return history.slice().sort((a,b)=> (a.date||'').localeCompare(b.date||''));
  }

  function historyDisplayRowHtml(ev){
    return `
      <div class="history-row" data-event-id="${ev.id}">
        <span class="history-date">${fmtDate(ev.date)}</span>
        <span class="history-badges">
          ${ev.status ? statusBadge(ev.status) : ''}
          ${ev.stage ? `<span class="badge badge-withdrawn">${escapeHtml(stageLabel(ev.stage))}</span>` : ''}
        </span>
        <span class="history-actions">
          <button type="button" class="icon-btn-xs history-edit-btn" title="Editar">${ICON_EDIT}</button>
          <button type="button" class="btn-x btn-x-sm history-delete-btn" title="Eliminar">${ICON_X}</button>
        </span>
        ${ev.note ? `<span class="history-note">${escapeHtml(ev.note)}</span>` : ''}
      </div>
    `;
  }

  function historyEditRowHtml(ev){
    return `
      <div class="history-row editing" data-event-id="${ev.id}">
        <div class="history-edit-fields">
          <input type="date" class="history-edit-date" value="${escapeHtml(ev.date||'')}">
          <select class="history-edit-status">
            <option value="">—</option>
            ${Lookups.status.pairs.map(([raw,key])=>`<option value="${raw}" ${raw===ev.status?'selected':''}>${escapeHtml(t(key))}</option>`).join('')}
          </select>
          <select class="history-edit-stage">
            <option value="">—</option>
            ${Lookups.stage.pairs.map(([raw,key])=>`<option value="${raw}" ${raw===ev.stage?'selected':''}>${escapeHtml(t(key))}</option>`).join('')}
          </select>
          <input type="text" class="history-edit-note" value="${escapeHtml(ev.note||'')}" placeholder="${t('phHistoryNote')}">
          <button type="button" class="btn btn-primary btn-sm history-save-btn">${t('saveBtn')}</button>
          <button type="button" class="btn btn-sm history-cancel-btn">${t('cancelBtn')}</button>
        </div>
      </div>
    `;
  }

  function wireHistoryRowEvents(){
    document.querySelectorAll('#statusHistoryList .history-edit-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        editingHistoryEventId = btn.closest('.history-row').dataset.eventId;
        renderHistoryPanel();
      });
    });
    document.querySelectorAll('#statusHistoryList .history-delete-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.closest('.history-row').dataset.eventId;
        if(workingHistory.length<=1){ alert(t('historyMinOneEvent')); return; }
        if(!confirm(t('deleteHistoryEventConfirm'))) return;
        workingHistory = workingHistory.filter(ev=>ev.id!==id);
        renderHistoryPanel();
      });
    });
    document.querySelectorAll('#statusHistoryList .history-cancel-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{ editingHistoryEventId=null; renderHistoryPanel(); });
    });
    document.querySelectorAll('#statusHistoryList .history-save-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const row = btn.closest('.history-row');
        const id = row.dataset.eventId;
        const date = row.querySelector('.history-edit-date').value || todayISO();
        const status = row.querySelector('.history-edit-status').value;
        const stage = row.querySelector('.history-edit-stage').value;
        const note = row.querySelector('.history-edit-note').value.trim();
        const ev = workingHistory.find(e=>e.id===id);
        if(ev){ ev.date=date; ev.status=status; ev.stage=stage; ev.note=note; }
        editingHistoryEventId = null;
        renderHistoryPanel();
      });
    });
  }

  function renderCurrentStatusStageDisplay(){
    const display = document.getElementById('currentStatusStageDisplay');
    const ordered = sortedHistoryArray(workingHistory);
    if(ordered.length===0){
      display.innerHTML = `<span class="history-empty">${t('noHistoryYet')}</span>`;
      return;
    }
    const latest = ordered[ordered.length-1];
    display.innerHTML = `
      ${latest.status ? statusBadge(latest.status) : ''}
      ${latest.stage ? `<span class="badge badge-withdrawn">${escapeHtml(stageLabel(latest.stage))}</span>` : ''}
      <span class="history-date">${fmtDate(latest.date)}</span>
    `;
  }

  document.getElementById('addHistoryEventBtn').addEventListener('click', ()=>{
    const date = document.getElementById('historyNewDate').value || todayISO();
    const status = document.getElementById('historyNewStatus').value;
    const stage = document.getElementById('historyNewStage').value;
    const note = document.getElementById('historyNewNote').value.trim();
    if(!status && !stage){ alert(t('historyNeedsStatusOrStage')); return; }
    workingHistory.push(makeHistoryEvent(date, status, stage, note));
    document.getElementById('historyNewStatus').value = '';
    document.getElementById('historyNewStage').value = '';
    document.getElementById('historyNewNote').value = '';
    renderHistoryPanel();
  });

  document.getElementById('saveBtn').addEventListener('click', ()=>{
    const firstName = document.getElementById('f-firstName').value.trim();
    const lastName = document.getElementById('f-lastName').value.trim();
    if(!firstName || !lastName){ alert(t('nameRequired')); return; }
    if(workingHistory.length===0){
      // Toda alta necesita al menos un evento; si no se agregó ninguno,
      // se crea uno "Sourced" con la fecha de hoy para no dejar el
      // proceso sin estado/etapa.
      workingHistory.push(makeHistoryEvent(todayISO(), 'In Progress', 'Sourced', ''));
    }
    const data = {};
    FIELDS.forEach(f=>{
      let v = document.getElementById('f-'+f).value;
      if(f==='experience' || f==='salaryExpectation'){ v = v===''? '' : parseFloat(v); }
      data[f]=v;
    });
    data.statusHistory = workingHistory.map(ev=>({...ev}));
    // Si se registraron nuevos eventos en el historial, eso cuenta como
    // actividad/contacto reciente: actualiza "Último contacto" a la fecha
    // del evento más reciente (si es posterior), para que las alertas de
    // "sin contacto" se resuelvan al registrar avances del proceso.
    if(workingHistory.length > originalHistoryCount){
      const latestDate = sortedHistoryArray(workingHistory).slice(-1)[0]?.date;
      if(latestDate && (!data.lastContact || data.lastContact < latestDate)){
        data.lastContact = latestDate;
      }
    }
    if(data.recruiter && !recruiters.includes(data.recruiter)) recruiters.push(data.recruiter);
    if(data.client && !clients.includes(data.client)) clients.push(data.client);
    let target;
    if(editingId){
      const idx = candidates.findIndex(c=>c.id===editingId);
      candidates[idx] = {...candidates[idx], ...data};
      target = candidates[idx];
    } else {
      target = {id:cryptoId(), ...data};
      candidates.push(target);
    }
    recomputeCurrentStatusStage(target);
    closeModal();
    scheduleSave();
    renderAll();
  });

  document.getElementById('deleteBtn').addEventListener('click', ()=>{
    if(!editingId) return;
    if(confirm(t('deleteConfirm'))){
      candidates = candidates.filter(c=>c.id!==editingId);
      closeModal();
      scheduleSave();
      renderAll();
    }
  });

  // ======================================================================
  // DATABASE FILTERS
  // ======================================================================
  const searchInput = document.getElementById('searchInput');
  const filterJobTitle = document.getElementById('filterJobTitle');
  const filterPosition = document.getElementById('filterPosition');
  const filterStatus = document.getElementById('filterStatus');
  const filterStage = document.getElementById('filterStage');
  const filterRecruiter = document.getElementById('filterRecruiter');
  const filterClient = document.getElementById('filterClient');

  [searchInput].forEach(el=>el.addEventListener('input', renderTable));
  [filterJobTitle, filterPosition, filterStatus, filterStage, filterRecruiter, filterClient].forEach(el=>el.addEventListener('change', renderTable));

  function uniqueValues(key){
    return Array.from(new Set(candidates.map(c=>c[key]).filter(v=>v!=='' && v!=null))).sort();
  }

  function rebuildFilterOptions(){
    fillSelectKeyed(filterJobTitle, uniqueValues('jobTitle'), t('allJobTitles'));
    fillSelectKeyed(filterPosition, uniqueValues('position'), t('allPositions'));
    fillSelectKeyed(filterStatus, Lookups.status.usedBy(candidates, c=>c.status), t('allStatuses'), true);
    fillSelectKeyed(filterStage, Lookups.stage.usedBy(candidates, c=>c.stage), t('allStages'), true);
    fillSelectKeyed(filterRecruiter, uniqueValues('recruiter'), t('allRecruiters'));
    fillSelectKeyed(filterClient, uniqueValues('client'), t('allClients'));

    fillSelectKeyed(document.getElementById('dashFilterJobTitle'), uniqueValues('jobTitle'), t('allJobTitles'));
    fillSelectKeyed(document.getElementById('dashFilterPosition'), uniqueValues('position'), t('allPositions'));
    fillSelectKeyed(document.getElementById('dashFilterStatus'), Lookups.status.usedBy(candidates, c=>c.status), t('allStatuses'), true);
    fillSelectKeyed(document.getElementById('dashFilterStage'), Lookups.stage.usedBy(candidates, c=>c.stage), t('allStages'), true);
    fillSelectKeyed(document.getElementById('dashFilterRecruiter'), uniqueValues('recruiter'), t('allRecruiters'));
    fillSelectKeyed(document.getElementById('dashFilterClient'), uniqueValues('client'), t('allClients'));
  }
  function fillSelectKeyed(sel, values, placeholder, isKeyed){
    const current = sel.value;
    let opts;
    if(isKeyed){
      opts = values.map(([raw,key])=>`<option value="${escapeHtml(raw)}">${escapeHtml(t(key))}</option>`).join('');
    } else {
      opts = values.map(v=>`<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
    }
    sel.innerHTML = `<option value="">${placeholder}</option>` + opts;
    if(current) sel.value = current;
    if(sel._customDropdown) sel._customDropdown.updateOptions();
  }

  function getFiltered(){
    const q = searchInput.value.trim().toLowerCase();
    return candidates.filter(c=>{
      if(filterJobTitle.value && c.jobTitle!==filterJobTitle.value) return false;
      if(filterPosition.value && c.position!==filterPosition.value) return false;
      if(filterStatus.value && c.status!==filterStatus.value) return false;
      if(filterStage.value && c.stage!==filterStage.value) return false;
      if(filterRecruiter.value && c.recruiter!==filterRecruiter.value) return false;
      if(filterClient.value && c.client!==filterClient.value) return false;
      if(q){
        const hay = [fullNameOf(c),c.jobTitle,c.email,c.currentCompany,c.university,c.notes,c.position,c.location,c.client]
          .filter(Boolean).join(' ').toLowerCase();
        if(!hay.includes(q)) return false;
      }
      return true;
    });
  }

  document.querySelectorAll('#dbTable thead th[data-key]').forEach(th=>{
    th.addEventListener('click', ()=>{
      const key = th.dataset.key;
      if(sortKey===key){ sortDir*=-1; } else { sortKey=key; sortDir=1; }
      renderTable();
    });
  });

  function statusBadge(status){
    if(!status) return '';
    const cls = STATUS_BADGE_CLASS[status] || 'badge-withdrawn';
    return `<span class="badge ${cls}">${escapeHtml(Lookups.status.label(status))}</span>`;
  }
  function stageLabel(stage){ return Lookups.stage.label(stage); }
  function outcomeLabel(outcome){ return Lookups.outcome.label(outcome); }

  function renderTable(){
    rebuildFilterOptions();
    let rows = getFiltered();
    if(sortKey){
      rows = rows.slice().sort((a,b)=>{
        let av = a[sortKey] ?? '', bv = b[sortKey] ?? '';
        if(typeof av === 'number' || typeof bv === 'number'){ av=parseFloat(av)||0; bv=parseFloat(bv)||0; }
        else { av=String(av).toLowerCase(); bv=String(bv).toLowerCase(); }
        if(av<bv) return -1*sortDir;
        if(av>bv) return 1*sortDir;
        return 0;
      });
    }
    document.querySelectorAll('#dbTable thead th').forEach(th=>th.classList.remove('sorted','sorted-asc'));
    if(sortKey){
      const th = document.querySelector(`#dbTable thead th[data-key="${sortKey}"]`);
      if(th) th.classList.add(sortDir===1?'sorted':'sorted-asc');
    }

    const tbody = document.getElementById('dbTbody');
    if(rows.length===0){
      tbody.innerHTML = `<tr><td colspan="30"><div class="empty-state"><strong>${t('noResults')}</strong>${t('noResultsSub')}</div></td></tr>`;
    } else {
      tbody.innerHTML = rows.map(c=>`
        <tr data-id="${c.id}">
          <td class="cell-name">${escapeHtml(c.firstName)}</td>
          <td class="cell-name">${escapeHtml(c.lastName)}</td>
          <td>${escapeHtml(c.jobTitle)}</td>
          <td class="cell-muted">${escapeHtml(c.email)}</td>
          <td class="cell-muted">${escapeHtml(c.phone)}</td>
          <td>${escapeHtml(c.position)}</td>
          <td>${escapeHtml(c.client)}</td>
          <td>${escapeHtml(c.team)}</td>
          <td>${escapeHtml(c.seniority)}</td>
          <td>${escapeHtml(c.location)}</td>
          <td>${escapeHtml(c.university)}</td>
          <td>${c.experience ?? ''}</td>
          <td>${escapeHtml(c.currentCompany)}</td>
          <td>${c.salaryExpectation ?? ''}</td>
          <td>${escapeHtml(c.currency)}</td>
          <td>${escapeHtml(c.availability)}</td>
          <td>${escapeHtml(c.source)}</td>
          <td>${escapeHtml(c.recruiter)}</td>
          <td>${statusBadge(c.status)}</td>
          <td>${escapeHtml(stageLabel(c.stage))}</td>
          <td>${escapeHtml(outcomeLabel(c.outcome))}</td>
          <td>${escapeHtml(c.englishLevel)}</td>
          <td class="cell-muted">${fmtDate(c.interviewDate)}</td>
          <td class="cell-muted">${fmtDate(c.lastContact)}</td>
          <td class="cell-muted">${fmtDate(c.nextFollowUp)}</td>
          <td class="cell-muted">${fmtDate(c.clientSubmissionDate)}</td>
          <td>${escapeHtml(c.clientFeedback)}</td>
          <td class="cell-muted" title="${escapeHtml(c.notes)}">${truncate(c.notes,28)}</td>
          <td class="actions-cell">
            <button class="btn btn-sm edit-row">${currentLang==='es'?'Editar':'Edit'}</button>
          </td>
        </tr>
      `).join('');
      tbody.querySelectorAll('tr').forEach(tr=>{
        tr.addEventListener('click', ()=>{
          const id = tr.dataset.id;
          const c = candidates.find(x=>x.id===id);
          openModal(c);
        });
      });
    }
    document.getElementById('resultsCount').textContent = t('resultsCount', rows.length, candidates.length);
  }

  function fmtDate(d){
    if(!d) return '';
    const parts = d.split('-');
    if(parts.length!==3) return d;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  function truncate(s,n){ if(!s) return ''; return s.length>n? escapeHtml(s.slice(0,n))+'…' : escapeHtml(s); }
  function escapeHtml(s){
    if(s===null||s===undefined) return '';
    return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  // Iconos SVG reutilizables (un solo lugar para mantener consistencia).
  const ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  const ICON_EDIT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';

  // ======================================================================
  // CSV EXPORT / IMPORT
  // ======================================================================
  function buildCsv(rows){
    const lines = [CSV_HEADERS.join(',')];
    rows.forEach(c=>{
      const line = CSV_FIELDS.map(f=>{
        let v = c[f] ?? '';
        v = String(v).replace(/"/g,'""');
        if(v.includes(',') || v.includes('\n')) v = `"${v}"`;
        return v;
      }).join(',');
      lines.push(line);
    });
    return lines.join('\n');
  }

  function downloadCsv(triggeredByAuto, rows, nameHint){
    const list = rows || candidates;
    const csv = buildCsv(list);
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().slice(0,16).replace(/[:T]/g,'-');
    const base = nameHint || 'pipeline_candidatos';
    a.href = url; a.download = `${base}_${stamp}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    // Solo el respaldo completo cuenta como "última exportación" de la base.
    if(!rows){
      settings.lastBackupAt = new Date().toISOString();
      scheduleSave();
      updateLastExportLine();
    }
  }

  document.getElementById('exportCsvBtn').addEventListener('click', ()=>downloadCsv(false));

  document.getElementById('resetDbBtn').addEventListener('click', ()=>{
    if(!confirm(t('resetDbConfirm'))) return;
    candidates = [];
    recruiters = [];
    clients = [];
    refreshAllRecruiterSelects();
    refreshAllClientSelects();
    scheduleSave();
    renderAll();
    if(connectedFileName){
      showToast(t('toastDbResetWithFile', connectedFileName), 'warning', {duration:6000});
    } else {
      showToast(t('toastDbReset'), 'info');
    }
  });

  document.getElementById('importCsvBtn').addEventListener('click', ()=>{
    document.getElementById('fileImportInput').click();
  });
  document.getElementById('fileImportInput').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    if(!confirm(t('importConfirm'))){ e.target.value=''; return; }
    const reader = new FileReader();
    reader.onload = (ev)=>{
      try{
        const imported = parseCsv(ev.target.result);
        candidates = candidates.concat(imported);
        scheduleSave();
        renderAll();
        renderRecruitersList(); renderClientsList();
        refreshAllRecruiterSelects(); refreshAllClientSelects();
        alert(t('importSuccess', imported.length));
      }catch(err){
        console.error(err);
        alert(t('importError'));
      }
      e.target.value='';
    };
    reader.readAsText(file, 'utf-8');
  });

  function parseCsv(text){
    const lines = text.split(/\r?\n/).filter(l=>l.trim()!=='');
    if(lines.length<2) return [];
    const rows = lines.slice(1).map(line=>splitCsvLine(line));
    return rows.map(cols=>{
      const obj = {id:cryptoId()};
      CSV_FIELDS.forEach((f,i)=>{
        let v = cols[i] !== undefined ? cols[i] : '';
        if(f==='experience' || f==='salaryExpectation'){ v = v===''? '' : parseFloat(v); }
        obj[f]=v;
      });
      // El CSV solo trae el estado/etapa "actuales", no un historial
      // completo. Se genera un único evento de historial con esos
      // valores, fechado hoy, para que el candidato importado quede
      // consistente con el modelo de historial del resto de la app.
      obj.statusHistory = [ makeHistoryEvent(todayISO(), obj.status, obj.stage, '') ];
      if(obj.recruiter && !recruiters.includes(obj.recruiter)) recruiters.push(obj.recruiter);
      if(obj.client && !clients.includes(obj.client)) clients.push(obj.client);
      recomputeCurrentStatusStage(obj);
      return obj;
    });
  }
  function splitCsvLine(line){
    const out = []; let cur=''; let inQuotes=false;
    for(let i=0;i<line.length;i++){
      const ch = line[i];
      if(inQuotes){
        if(ch==='"'){
          if(line[i+1]==='"'){ cur+='"'; i++; } else { inQuotes=false; }
        } else { cur+=ch; }
      } else {
        if(ch==='"'){ inQuotes=true; }
        else if(ch===','){ out.push(cur); cur=''; }
        else { cur+=ch; }
      }
    }
    out.push(cur);
    return out;
  }

  // ======================================================================
  // CONFIG: auto backup + alert thresholds
  // ======================================================================
  let autoBackupTimer = null;

  function applySettingsToUI(){
    document.getElementById('autoBackupToggle').classList.toggle('on', !!settings.autoBackupEnabled);
    document.getElementById('autoBackupInterval').value = settings.autoBackupIntervalMin || 5;
    document.getElementById('staleContactDays').value = settings.staleContactDays || 14;
    document.getElementById('staleStageDays').value = settings.staleStageDays || 21;
    updateLastExportLine();
  }

  document.getElementById('autoBackupToggle').addEventListener('click', ()=>{
    settings.autoBackupEnabled = !settings.autoBackupEnabled;
    applySettingsToUI();
    setupAutoBackupTimer();
    scheduleSave();
  });
  document.getElementById('autoBackupInterval').addEventListener('change', (e)=>{
    let v = parseInt(e.target.value, 10);
    if(isNaN(v) || v<1) v=1;
    if(v>1440) v=1440;
    settings.autoBackupIntervalMin = v;
    e.target.value = v;
    setupAutoBackupTimer();
    scheduleSave();
  });
  document.getElementById('staleContactDays').addEventListener('change', (e)=>{
    let v = parseInt(e.target.value,10); if(isNaN(v)||v<1) v=1;
    settings.staleContactDays = v; e.target.value=v;
    scheduleSave(); renderDashboard();
  });
  document.getElementById('staleStageDays').addEventListener('change', (e)=>{
    let v = parseInt(e.target.value,10); if(isNaN(v)||v<1) v=1;
    settings.staleStageDays = v; e.target.value=v;
    scheduleSave(); renderDashboard();
  });

  function setupAutoBackupTimer(){
    // Guardado "latido": además del guardado rápido tras cada cambio
    // (scheduleSave), este intervalo fuerza un guardado periódico aunque
    // la persona deje la pestaña abierta e inactiva mucho tiempo.
    clearInterval(autoBackupTimer);
    if(settings.autoBackupEnabled){
      const ms = Math.max(1, settings.autoBackupIntervalMin) * 60 * 1000;
      autoBackupTimer = setInterval(()=>{ if(isDirty) performSave({isAuto:true}); }, ms);
    }
  }

  // ======================================================================
  // DASHBOARD (with its own filters)
  // ======================================================================
  const dashFilterJobTitle = document.getElementById('dashFilterJobTitle');
  const dashFilterPosition = document.getElementById('dashFilterPosition');
  const dashFilterStatus = document.getElementById('dashFilterStatus');
  const dashFilterStage = document.getElementById('dashFilterStage');
  const dashFilterRecruiter = document.getElementById('dashFilterRecruiter');
  const dashFilterClient = document.getElementById('dashFilterClient');
  const dashFilterDateFrom = document.getElementById('dashFilterDateFrom');
  const dashFilterDateTo = document.getElementById('dashFilterDateTo');

  [dashFilterJobTitle, dashFilterPosition, dashFilterStatus, dashFilterStage, dashFilterRecruiter, dashFilterClient, dashFilterDateFrom, dashFilterDateTo]
    .forEach(el=>el.addEventListener('change', renderDashboard));

  document.getElementById('dashClearFilters').addEventListener('click', ()=>{
    dashFilterJobTitle.value=''; dashFilterPosition.value=''; dashFilterStatus.value=''; dashFilterStage.value='';
    dashFilterRecruiter.value=''; dashFilterClient.value='';
    dashFilterDateFrom.value=''; dashFilterDateTo.value='';
    renderDashboard();
  });

  function selectedLabel(sel){
    const opt = sel.options[sel.selectedIndex];
    return (sel.value && opt) ? opt.textContent : '';
  }

  function buildReportHeader(){
    const locale = currentLang==='es' ? 'es-AR' : 'en-US';
    const now = new Date().toLocaleDateString(locale, {year:'numeric', month:'long', day:'numeric'});

    const parts = [];
    if(dashFilterJobTitle.value) parts.push(`<b>${t('reportFilterJobTitle')}:</b> ${escapeHtml(selectedLabel(dashFilterJobTitle))}`);
    if(dashFilterPosition.value) parts.push(`<b>${t('reportFilterPosition')}:</b> ${escapeHtml(selectedLabel(dashFilterPosition))}`);
    if(dashFilterStatus.value) parts.push(`<b>${t('reportFilterStatus')}:</b> ${escapeHtml(selectedLabel(dashFilterStatus))}`);
    if(dashFilterStage.value) parts.push(`<b>${t('reportFilterStage')}:</b> ${escapeHtml(selectedLabel(dashFilterStage))}`);
    if(dashFilterRecruiter.value) parts.push(`<b>${t('reportFilterRecruiter')}:</b> ${escapeHtml(selectedLabel(dashFilterRecruiter))}`);
    if(dashFilterClient.value) parts.push(`<b>${t('reportFilterClient')}:</b> ${escapeHtml(selectedLabel(dashFilterClient))}`);
    if(dashFilterDateFrom.value || dashFilterDateTo.value){
      const from = dashFilterDateFrom.value ? fmtDate(dashFilterDateFrom.value) : '…';
      const to = dashFilterDateTo.value ? fmtDate(dashFilterDateTo.value) : '…';
      parts.push(`<b>${t('reportFilterPeriod')}:</b> ${from} – ${to}`);
    }
    const filtersLine = parts.length
      ? `<div><b>${t('reportFilters')}:</b> ${parts.join(' &nbsp;·&nbsp; ')}</div>`
      : `<div>${t('reportNoFilters')}</div>`;

    document.getElementById('reportMeta').innerHTML =
      `<div><b>${t('reportGeneratedOn')}:</b> ${now}</div>${filtersLine}`;
  }

  function reportFileStamp(){
    // Construye un nombre estructurado reflejando el filtro principal activo.
    const d = new Date();
    const ymd = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const scopeParts = [];
    if(dashFilterClient.value) scopeParts.push(selectedLabel(dashFilterClient));
    if(dashFilterRecruiter.value) scopeParts.push(selectedLabel(dashFilterRecruiter));
    if(dashFilterPosition.value) scopeParts.push(selectedLabel(dashFilterPosition));
    const scope = scopeParts.join('_').replace(/[^\w\-]+/g,'-') || (currentLang==='es'?'General':'Overall');
    const base = currentLang==='es' ? 'Reporte_Pipeline' : 'Pipeline_Report';
    return `${base}_${scope}_${ymd}`;
  }

  document.getElementById('dashPrintBtn').addEventListener('click', ()=>{
    // Asegura que el dashboard esté activo y al día antes de imprimir.
    if(!document.getElementById('view-dashboard').classList.contains('active')){
      document.querySelector('.nav-btn[data-view="dashboard"]').click();
    }
    renderDashboard();
    buildReportHeader();
    // El navegador usa document.title como nombre sugerido al "Guardar como PDF".
    const prevTitle = document.title;
    document.title = reportFileStamp();
    const restore = ()=>{ document.title = prevTitle; window.removeEventListener('afterprint', restore); };
    window.addEventListener('afterprint', restore);
    setTimeout(()=>window.print(), 100);
  });

  document.getElementById('dashExportFilteredBtn').addEventListener('click', ()=>{
    const filtered = getDashboardFiltered();
    if(filtered.length===0){ alert(t('noFilteredToExport')); return; }
    const base = currentLang==='es' ? 'pipeline_filtrado' : 'pipeline_filtered';
    downloadCsv(false, filtered, base);
  });

  function candidateRefDate(c){
    return c.interviewDate || c.clientSubmissionDate || c.lastContact || c.nextFollowUp || '';
  }

  function getDashboardFiltered(){
    return candidates.filter(c=>{
      if(dashFilterJobTitle.value && c.jobTitle!==dashFilterJobTitle.value) return false;
      if(dashFilterPosition.value && c.position!==dashFilterPosition.value) return false;
      if(dashFilterStatus.value && c.status!==dashFilterStatus.value) return false;
      if(dashFilterStage.value && c.stage!==dashFilterStage.value) return false;
      if(dashFilterRecruiter.value && c.recruiter!==dashFilterRecruiter.value) return false;
      if(dashFilterClient.value && c.client!==dashFilterClient.value) return false;
      const ref = candidateRefDate(c);
      if(dashFilterDateFrom.value){
        if(!ref || ref < dashFilterDateFrom.value) return false;
      }
      if(dashFilterDateTo.value){
        if(!ref || ref > dashFilterDateTo.value) return false;
      }
      return true;
    });
  }

  function computeAlerts(data){
    const today = todayISO();
    const alerts = [];
    data.forEach(c=>{
      const activeProcess = !['Hired','Rejected','Withdrawn'].includes(c.status);
      if(!activeProcess) return;
      if(c.nextFollowUp && c.nextFollowUp < today){
        alerts.push({c, type:'overdue', days: daysBetween(c.nextFollowUp, today)});
      }
      const lastRef = c.lastContact || c.interviewDate;
      if(lastRef){
        const days = daysBetween(lastRef, today);
        if(days >= settings.staleContactDays){
          alerts.push({c, type:'stale_contact', days});
        }
      }
      if(c.stageChangedAt){
        const days = daysBetween(c.stageChangedAt, today);
        if(days >= settings.staleStageDays){
          alerts.push({c, type:'stale_stage', days});
        }
      }
    });
    alerts.sort((a,b)=>b.days-a.days);
    return alerts;
  }

  function renderDashboard(){
    rebuildFilterOptions();
    const data = getDashboardFiltered();
    const total = data.length;
    const hired = data.filter(c=>c.status==='Hired').length;
    const active = data.filter(c=>c.status==='In Progress').length;
    const rejected = data.filter(c=>c.status==='Rejected').length;
    const withdrawn = data.filter(c=>c.status==='Withdrawn').length;
    const onHold = data.filter(c=>c.status==='On Hold').length;
    const conversionRate = total ? Math.round((hired/total)*100) : 0;

    const alerts = computeAlerts(data);

    const kpis = [
      {label:t('kpiTotal'), value:total, sub:t('candidatesInPipeline'), tone:'neutral'},
      {label:t('kpiActive'), value:active, sub:t('activeToday'), tone:'accent'},
      {label:t('kpiHired'), value:hired, sub:t('ofTotal', conversionRate), tone:'ok'},
      {label:t('kpiOnHold'), value:onHold, sub:t('onHoldSub'), tone:'warn'},
      {label:t('kpiRejected'), value:rejected, sub:t('discardedSub'), tone:'bad'},
      {label:t('kpiWithdrawn'), value:withdrawn, sub:t('declinedSub'), tone:'muted'},
    ];
    document.getElementById('kpiGrid').innerHTML = kpis.map(k=>`
      <div class="kpi-card kpi-${k.tone}">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-sub">${k.sub}</div>
      </div>
    `).join('');

    // Alerts panel (sobre los datos filtrados del dashboard)
    const uniqueAlertCandidates = new Set(alerts.map(a=>a.c.id));
    document.getElementById('alertsCount').textContent = uniqueAlertCandidates.size;

    const alertsList = document.getElementById('alertsList');
    if(alerts.length===0){
      alertsList.innerHTML = `<div style="color:var(--ink-soft);padding:8px 2px;">${t('noAlerts')}</div>`;
    } else {
      alertsList.innerHTML = alerts.slice(0,10).map(a=>{
        let detail, cls;
        if(a.type==='overdue'){ detail = t('alertOverdueFollowup', a.days); cls='badge-alert-overdue'; }
        else if(a.type==='stale_contact'){ detail = t('alertStaleContact', a.days); cls='badge-alert-stale'; }
        else { detail = t('alertStaleStage', a.days).replace('%STAGE%', stageLabel(a.c.stage)); cls='badge-alert-stale'; }
        return `<div class="alert-row">
          <span class="alert-name">${escapeHtml(fullNameOf(a.c))}</span>
          <span class="badge ${cls}">${escapeHtml(detail)}</span>
        </div>`;
      }).join('');
    }

    // Follow-ups
    const today = new Date(); today.setHours(0,0,0,0);
    const followups = data
      .filter(c=>c.nextFollowUp)
      .map(c=>({...c, _d: new Date(c.nextFollowUp)}))
      .sort((a,b)=>a._d-b._d);
    document.getElementById('followupCount').textContent = followups.length;
    const tbody = document.querySelector('#followupTable tbody');
    if(followups.length===0){
      tbody.innerHTML = `<tr><td colspan="3" style="color:var(--ink-soft);padding:14px 4px;">${t('noFollowups')}</td></tr>`;
    } else {
      tbody.innerHTML = followups.slice(0,8).map(c=>{
        const overdue = c._d < today;
        return `<tr>
          <td>${escapeHtml(fullNameOf(c))}</td>
          <td style="${overdue?'color:var(--bad);font-weight:600;':''}">${fmtDate(c.nextFollowUp)}${overdue?' '+t('overdue'):''}</td>
          <td>${statusBadge(c.status)}</td>
        </tr>`;
      }).join('');
    }

    // Funnel
    document.getElementById('funnelTotal').textContent = t('candidatesFunnel', total);
    const stageCounts = STAGE_KEYS.map(([raw,key])=>({label:t(key), count:data.filter(c=>c.stage===raw).length}));
    const maxStage = Math.max(1, ...stageCounts.map(s=>s.count));
    document.getElementById('funnelChart').innerHTML = stageCounts.map(s=>`
      <div class="funnel-row">
        <div class="lbl">${escapeHtml(s.label)}</div>
        <div class="funnel-track"><div class="funnel-fill" style="width:${(s.count/maxStage*100)||0}%"></div></div>
        <div class="val" style="font-family:var(--mono);text-align:right;color:var(--ink-soft);">${s.count}</div>
      </div>
    `).join('');

    // Status
    const statusCounts = STATUS_KEYS.map(([raw,key])=>({raw,label:t(key),count:data.filter(c=>c.status===raw).length}))
      .filter(s=>s.count>0);
    document.getElementById('statusChart').innerHTML = statusCounts.length ? `
      <table class="mini">
        <thead><tr><th>${t('colStatus')}</th><th>${currentLang==='es'?'Candidatos':'Candidates'}</th><th>%</th></tr></thead>
        <tbody>
          ${statusCounts.map(s=>`
            <tr><td>${statusBadge(s.raw)}</td><td style="font-family:var(--mono)">${s.count}</td>
            <td style="font-family:var(--mono);color:var(--ink-soft)">${total?Math.round(s.count/total*100):0}%</td></tr>
          `).join('')}
        </tbody>
      </table>
    ` : emptyMini();

    renderBarBlock('positionChart', countBy(data,'position'));
    renderBarBlock('recruiterChart', countBy(data,'recruiter'));
    renderBarBlock('clientChart', countBy(data,'client'));

    renderSourceChart(data);

    // Outcomes
    const outcomeCounts = OUTCOME_KEYS.map(([raw,key])=>({label:t(key),count:data.filter(c=>c.outcome===raw).length}))
      .filter(o=>o.count>0);
    document.getElementById('outcomeChart').innerHTML = outcomeCounts.length ? `
      <table class="mini">
        <thead><tr><th>${t('colOutcome')}</th><th>${currentLang==='es'?'Candidatos':'Candidates'}</th></tr></thead>
        <tbody>
          ${outcomeCounts.map(o=>`<tr><td>${escapeHtml(o.label)}</td><td style="font-family:var(--mono)">${o.count}</td></tr>`).join('')}
        </tbody>
      </table>
    ` : emptyMini();

    renderTrendChart(data);
  }

  function renderSourceChart(data){
    const el = document.getElementById('sourceChart');
    // Agrupa por fuente: total de candidatos y cuántos terminaron contratados.
    const map = {};
    data.forEach(c=>{
      const src = c.source || t('noDataLabel');
      if(!map[src]) map[src] = {total:0, hired:0};
      map[src].total++;
      if(c.status==='Hired') map[src].hired++;
    });
    const rows = Object.entries(map)
      .map(([src,v])=>({src, total:v.total, hired:v.hired, rate: v.total ? Math.round(v.hired/v.total*100) : 0}))
      .sort((a,b)=> b.hired-a.hired || b.total-a.total);

    if(rows.length===0){ el.innerHTML = emptyMini(); return; }

    el.innerHTML = `
      <table class="mini">
        <thead><tr>
          <th>${t('colSource')}</th>
          <th style="text-align:center">${t('colCandidates')}</th>
          <th style="text-align:center">${t('colHired')}</th>
          <th style="text-align:center">${t('colHireRate')}</th>
        </tr></thead>
        <tbody>
          ${rows.map(r=>`
            <tr>
              <td>${escapeHtml(r.src)}</td>
              <td style="font-family:var(--mono);text-align:center">${r.total}</td>
              <td style="font-family:var(--mono);text-align:center;color:var(--ok);font-weight:600">${r.hired}</td>
              <td style="font-family:var(--mono);text-align:center;color:var(--ink-soft)">${r.rate}%</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  function emptyMini(){
    return `<div style="color:var(--ink-soft);padding:8px 2px;">${t('noDataYet')}</div>`;
  }

  function countBy(data, key){
    const map = {};
    data.forEach(c=>{
      const v = c[key] || t('noDataLabel');
      map[v] = (map[v]||0)+1;
    });
    return Object.entries(map).map(([k,v])=>({label:k,count:v})).sort((a,b)=>b.count-a.count);
  }

  function renderBarBlock(elId, data){
    const el = document.getElementById(elId);
    if(data.length===0){ el.innerHTML = emptyMini(); return; }
    const max = Math.max(...data.map(d=>d.count));
    el.innerHTML = data.slice(0,10).map(d=>`
      <div class="bar-row">
        <div class="lbl" title="${escapeHtml(d.label)}">${escapeHtml(d.label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(d.count/max*100)||0}%"></div></div>
        <div class="val">${d.count}</div>
      </div>
    `).join('');
  }

  // ---------- Monthly trend chart (SVG, no libs) ----------
  function monthKey(iso){ return iso ? iso.slice(0,7) : null; } // "2026-06"
  function monthLabel(key, withYear){
    const [y,m] = key.split('-');
    const names = currentLang==='es'
      ? ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const label = names[parseInt(m,10)-1];
    return withYear ? `${label} ${y.slice(2)}` : label;
  }

  function renderTrendChart(data){
    const wrap = document.getElementById('trendChart');
    // Siempre los 12 meses del año en curso, de enero a diciembre.
    const year = new Date().getFullYear();
    const months = Array.from({length:12}, (_, i)=>`${year}-${String(i+1).padStart(2,'0')}`);
    document.getElementById('trendRange').textContent = String(year);

    const sourced = {}, hiredM = {};
    months.forEach(m=>{ sourced[m]=0; hiredM[m]=0; });
    data.forEach(c=>{
      const sKey = monthKey(c.interviewDate) || monthKey(c.clientSubmissionDate);
      if(sKey && sourced.hasOwnProperty(sKey)) sourced[sKey]++;
      if(c.status==='Hired'){
        const hKey = monthKey(c.clientSubmissionDate) || monthKey(c.interviewDate);
        if(hKey && hiredM.hasOwnProperty(hKey)) hiredM[hKey]++;
      }
    });

    const sourcedVals = months.map(m=>sourced[m]);
    const hiredVals = months.map(m=>hiredM[m]);
    const maxVal = Math.max(1, ...sourcedVals, ...hiredVals);

    const containerWidth = wrap.clientWidth || wrap.parentElement.clientWidth || 760;
    const W = Math.max(480, containerWidth), H = 200, padL = 36, padB = 26, padT = 14, padR = 14;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const stepX = plotW / (months.length - 1 || 1);

    function pointsFor(vals){
      return vals.map((v,i)=>{
        const x = padL + i*stepX;
        const y = padT + plotH - (v/maxVal)*plotH;
        return [x,y];
      });
    }
    function toPath(pts){
      return pts.map((p,i)=>(i===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
    }

    const sourcedPts = pointsFor(sourcedVals);
    const hiredPts = pointsFor(hiredVals);

    const gridLines = [];
    for(let i=0;i<=4;i++){
      const y = padT + (plotH/4)*i;
      gridLines.push(`<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W-padR}" y2="${y.toFixed(1)}" stroke="var(--line-soft)" stroke-width="1"/>`);
    }

    const xLabels = months.map((m,i)=>{
      const x = padL + i*stepX;
      return `<text x="${x.toFixed(1)}" y="${H-6}" font-size="10.5" fill="var(--ink-soft)" text-anchor="middle">${monthLabel(m)}</text>`;
    }).join('');

    const dotsSourced = sourcedPts.map((p,i)=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.2" fill="var(--accent)"><title>${sourcedVals[i]}</title></circle>`).join('');
    const dotsHired = hiredPts.map((p,i)=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.2" fill="var(--ok)"><title>${hiredVals[i]}</title></circle>`).join('');

    const valueLabelsSourced = sourcedPts.map((p,i)=>sourcedVals[i]>0?`<text x="${p[0].toFixed(1)}" y="${(p[1]-8).toFixed(1)}" font-size="10.5" fill="var(--accent)" text-anchor="middle" font-family="var(--mono)">${sourcedVals[i]}</text>`:'').join('');
    const valueLabelsHired = hiredPts.map((p,i)=>hiredVals[i]>0?`<text x="${p[0].toFixed(1)}" y="${(p[1]+16).toFixed(1)}" font-size="10.5" fill="var(--ok)" text-anchor="middle" font-family="var(--mono)">${hiredVals[i]}</text>`:'').join('');

    wrap.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" style="width:100%;height:220px;display:block;">
        ${gridLines.join('')}
        <path d="${toPath(sourcedPts)}" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <path d="${toPath(hiredPts)}" fill="none" stroke="var(--ok)" stroke-width="2"/>
        ${dotsSourced}
        ${dotsHired}
        ${valueLabelsSourced}
        ${valueLabelsHired}
        ${xLabels}
      </svg>
      <div class="trend-legend">
        <span><span class="legend-dot" style="background:var(--accent)"></span>${currentLang==='es'?'Entrevistados / enviados':'Interviewed / submitted'}</span>
        <span><span class="legend-dot" style="background:var(--ok)"></span>${t('kpiHired')}</span>
      </div>
    `;
  }

  function updateGlobalReminders(){
    // El badge del menú refleja TODA la base (no los filtros del dashboard),
    // para que el reclutador no pierda de vista seguimientos pendientes.
    const alerts = computeAlerts(candidates);
    const uniqueIds = new Set(alerts.map(a=>a.c.id));
    const count = uniqueIds.size;
    const navBadge = document.getElementById('navAlertBadge');
    if(count>0){
      navBadge.style.display='inline-block';
      navBadge.textContent = count;
      navBadge.title = t('remindersBadgeTitle', count);
    } else {
      navBadge.style.display='none';
      navBadge.title = '';
    }
  }

  function renderAll(){
    renderTable();
    renderDashboard();
    renderRecruitersList();
    renderClientsList();
    updateGlobalReminders();
  }

  // ======================================================================
  // CUSTOM DROPDOWNS
  // ======================================================================
  class CustomDropdown {
    constructor(selectEl) {
      this.selectEl = selectEl;
      this.selectEl._customDropdown = this;
      this.selectEl.style.display = 'none';

      this.wrapper = document.createElement('div');
      this.wrapper.className = 'custom-select-wrapper';

      this.trigger = document.createElement('div');
      this.trigger.className = 'custom-select-trigger';
      
      this.optionsContainer = document.createElement('div');
      this.optionsContainer.className = 'custom-select-options';

      this.wrapper.appendChild(this.trigger);
      this.wrapper.appendChild(this.optionsContainer);

      this.selectEl.parentNode.insertBefore(this.wrapper, this.selectEl.nextSibling);

      this.trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = this.wrapper.classList.contains('open');
        document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
        if(!isOpen) this.wrapper.classList.add('open');
      });

      this.selectEl.addEventListener('change', () => this.updateTriggerLabel());
      
      this.buildOptions();
    }

    buildOptions() {
      this.optionsContainer.innerHTML = '';
      const options = Array.from(this.selectEl.options);
      options.forEach(opt => {
        const optionEl = document.createElement('div');
        optionEl.className = 'custom-select-option';
        optionEl.textContent = opt.textContent;
        optionEl.dataset.value = opt.value;
        if(opt.selected) optionEl.classList.add('selected');

        optionEl.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectEl.value = opt.value;
          this.wrapper.classList.remove('open');
          this.selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        });
        this.optionsContainer.appendChild(optionEl);
      });
      this.updateTriggerLabel();
    }

    updateTriggerLabel() {
      const selectedOpt = this.selectEl.options[this.selectEl.selectedIndex];
      this.trigger.innerHTML = `<span>${selectedOpt ? escapeHtml(selectedOpt.textContent) : ''}</span>`;
      
      const optionEls = this.optionsContainer.querySelectorAll('.custom-select-option');
      optionEls.forEach(el => {
        if(el.dataset.value === this.selectEl.value) el.classList.add('selected');
        else el.classList.remove('selected');
      });
    }

    updateOptions() {
      this.buildOptions();
    }
  }

  function initCustomDropdowns() {
    const selects = document.querySelectorAll('select:not([multiple])');
    selects.forEach(sel => {
      if(!sel._customDropdown) new CustomDropdown(sel);
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
    });
  }

  // ======================================================================
  // CUSTOM DATEPICKERS
  // ======================================================================
  class CustomDatepicker {
    constructor(inputEl) {
      this.inputEl = inputEl;
      this.inputEl._customDatepicker = this;
      this.inputEl.style.display = 'none';

      this.currentViewDate = new Date(); // Month/Year currently being viewed

      this.wrapper = document.createElement('div');
      this.wrapper.className = 'custom-date-wrapper';

      this.trigger = document.createElement('div');
      this.trigger.className = 'custom-date-trigger';
      
      this.panel = document.createElement('div');
      this.panel.className = 'custom-date-panel';

      this.wrapper.appendChild(this.trigger);
      this.wrapper.appendChild(this.panel);

      this.inputEl.parentNode.insertBefore(this.wrapper, this.inputEl.nextSibling);

      this.trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = this.wrapper.classList.contains('open');
        document.querySelectorAll('.custom-date-wrapper').forEach(w => w.classList.remove('open'));
        if(!isOpen) {
          this.wrapper.classList.add('open');
          if(this.inputEl.value) {
            const [y,m,d] = this.inputEl.value.split('-');
            this.currentViewDate = new Date(parseInt(y,10), parseInt(m,10)-1, parseInt(d,10));
          } else {
            this.currentViewDate = new Date();
          }
          this.renderCalendar();
        }
      });

      this.panel.addEventListener('click', e => e.stopPropagation());
      this.inputEl.addEventListener('change', () => this.updateTriggerLabel());
      
      this.updateTriggerLabel();
    }

    updateTriggerLabel() {
      if(!this.inputEl.value) {
        this.trigger.textContent = currentLang === 'es' ? 'Seleccionar fecha' : 'Select date';
        this.trigger.classList.add('empty');
      } else {
        const [y,m,d] = this.inputEl.value.split('-');
        this.trigger.textContent = `${d}/${m}/${y}`;
        this.trigger.classList.remove('empty');
      }
    }

    renderCalendar() {
      const year = this.currentViewDate.getFullYear();
      const month = this.currentViewDate.getMonth();
      
      const monthNames = currentLang === 'es' 
        ? ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        : ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const weekDays = currentLang === 'es' ? ['Do','Lu','Ma','Mi','Ju','Vi','Sá'] : ['Su','Mo','Tu','We','Th','Fr','Sa'];

      let html = `<div class="dp-header">
        <button type="button" class="dp-prev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
        <div class="dp-month-year">${monthNames[month]} ${year}</div>
        <button type="button" class="dp-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>
      </div>`;

      html += `<div class="dp-grid">`;
      weekDays.forEach(wd => { html += `<div class="dp-weekday">${wd}</div>`; });

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for(let i=0; i<firstDay; i++) {
        html += `<div class="dp-day empty"></div>`;
      }

      const today = new Date();
      let selectedDate = null;
      if(this.inputEl.value) {
        const [y,m,d] = this.inputEl.value.split('-');
        selectedDate = new Date(parseInt(y,10), parseInt(m,10)-1, parseInt(d,10));
      }

      for(let d=1; d<=daysInMonth; d++) {
        let classes = 'dp-day';
        if(today.getFullYear() === year && today.getMonth() === month && today.getDate() === d) classes += ' today';
        if(selectedDate && selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === d) classes += ' selected';
        html += `<div class="${classes}" data-date="${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}">${d}</div>`;
      }

      html += `</div>`;
      
      if(this.inputEl.value) {
        html += `<button type="button" class="dp-clear">${currentLang==='es'?'Borrar fecha':'Clear date'}</button>`;
      }

      this.panel.innerHTML = html;

      this.panel.querySelector('.dp-prev').addEventListener('click', () => {
        this.currentViewDate.setMonth(this.currentViewDate.getMonth() - 1);
        this.renderCalendar();
      });
      this.panel.querySelector('.dp-next').addEventListener('click', () => {
        this.currentViewDate.setMonth(this.currentViewDate.getMonth() + 1);
        this.renderCalendar();
      });

      this.panel.querySelectorAll('.dp-day:not(.empty)').forEach(dayEl => {
        dayEl.addEventListener('click', () => {
          this.inputEl.value = dayEl.dataset.date;
          this.wrapper.classList.remove('open');
          this.inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });

      const clearBtn = this.panel.querySelector('.dp-clear');
      if(clearBtn) {
        clearBtn.addEventListener('click', () => {
          this.inputEl.value = '';
          this.wrapper.classList.remove('open');
          this.inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }
    }
  }

  function initCustomDatepickers() {
    const dates = document.querySelectorAll('input[type="date"]');
    dates.forEach(inp => {
      if(!inp._customDatepicker) new CustomDatepicker(inp);
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.custom-date-wrapper').forEach(w => w.classList.remove('open'));
    });
  }

  // ======================================================================
  // INIT
  // ======================================================================
  document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
  applyStaticTranslations();
  refreshAllRecruiterSelects();
  refreshAllClientSelects();
  let resizeRedrawTimer = null;
  window.addEventListener('resize', ()=>{
    clearTimeout(resizeRedrawTimer);
    resizeRedrawTimer = setTimeout(()=>{
      const dashView = document.getElementById('view-dashboard');
      if(dashView.classList.contains('active')) renderTrendChart(getDashboardFiltered());
    }, 150);
  });

  const footerVersionEl = document.getElementById('appFooterVersion');
  footerVersionEl.addEventListener('click', openWhatsNew);
  footerVersionEl.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); openWhatsNew(); }
  });
  renderFooterVersion();
  initCustomDropdowns();
  initCustomDatepickers();
  initPersistence();
})();
