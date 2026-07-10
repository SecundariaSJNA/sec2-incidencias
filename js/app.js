/* SEC2_APP_V28_HISTORIAL_PDF_COMPLETO_20260710 */
/* Base: V27 + botón Historial en PDF y generación PDF en teléfono */
/* Base funcional: V26, sin cambios lógicos; ajustes visuales van en index V28 */
/* Base: V25 + iconos miniatura corregidos */
/* SEC2_APP_V24_ICONOS_UNIFICADOS_TIPO_INCIDENCIA_20260710 */
/* SEC2_APP_V17_REGLAS_DIAS_HABILES_USOS_BACK_PERFIL_20260710 */
/* SEC2_APP_V18_FECHAS_MMM_BACK_PERFIL_ORDEN_DIRECCION_20260710 */
const TEST_USERS = {
  "Direccion": "D001",
  "Correspondencia": "C001",
  "Prefectura": "P001",
  "Docente": "M001"
};

const TURNOS_TEXTO = {
  "A": "Ambos",
  "M": "Matutino",
  "V": "Vespertino"
};

const SVG = {
  director: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="18" r="10" fill="currentColor"/><path d="M13 58c2-16 12-24 19-24s17 8 19 24H13Z" fill="currentColor"/><path d="M27 36h10l-3 8 3 14H27l3-14-3-8Z" fill="#fff"/></svg>`,
  edit: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 7h29l9 9v40H16V7Z" fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/><path d="M44 7v12h10" fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/><path d="M24 28h18M24 38h13" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
  group: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="22" r="9" fill="currentColor"/><circle cx="16" cy="27" r="7" fill="currentColor"/><circle cx="48" cy="27" r="7" fill="currentColor"/><path d="M18 57c1-12 8-19 14-19s13 7 14 19H18Z" fill="currentColor"/><path d="M3 57c1-10 6-15 12-15 4 0 7 2 9 5-3 3-5 6-6 10H3ZM46 57c-1-4-3-7-6-10 2-3 5-5 9-5 6 0 11 5 12 15H46Z" fill="currentColor"/></svg>`,
  book: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 13c8 0 14 3 18 9 4-6 10-9 18-9v39c-8 0-14 3-18 9-4-6-10-9-18-9V13Z" fill="currentColor"/><path d="M22 23c4 .5 7 2 9 5M42 23c-4 .5-7 2-9 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  report: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M14 8h36v48H14V8Z" fill="currentColor"/><path d="M23 20h18M23 30h12" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M25 47V37M33 47V31M41 47V25" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>`,
  history: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M19 19a21 21 0 1 1-5 22" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M18 11v16H4" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 20v14l10 6" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  calendar: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="14" width="44" height="40" rx="6" fill="currentColor"/><path d="M10 25h44" stroke="#fff" stroke-width="5"/><path d="M21 8v12M43 8v12" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><rect x="19" y="32" width="7" height="7" fill="#fff"/><rect x="29" y="32" width="7" height="7" fill="#fff"/><rect x="39" y="32" width="7" height="7" fill="#fff"/><rect x="19" y="43" width="7" height="7" fill="#fff"/><rect x="29" y="43" width="7" height="7" fill="#fff"/></svg>`,
  "file-plus": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M16 7h27l9 9v40H16V7Z" fill="currentColor"/><path d="M42 7v12h10" fill="#fff" opacity=".95"/><path d="M25 28h14M25 38h10" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M47 39v14M40 46h14" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
  bell: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 58a7 7 0 0 0 7-7H25a7 7 0 0 0 7 7Z" fill="currentColor"/><path d="M13 45h38l-5-7V26c0-8-5-14-14-14S18 18 18 26v12l-5 7Z" fill="currentColor"/></svg>`,
  shield: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 54 14v15c0 15-9 26-22 30C19 55 10 44 10 29V14L32 5Z" fill="currentColor"/><path d="m24 33 6 6 13-15" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  user: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="20" r="12" fill="currentColor"/><path d="M10 58c2-15 13-23 22-23s20 8 22 23H10Z" fill="currentColor"/></svg>`,
  message: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M10 12h44v32H26L13 55V44h-3V12Z" fill="currentColor"/><path d="M21 25h22M21 35h16" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>`,
  "permiso-oficial": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="14" width="38" height="38" rx="7" fill="currentColor"/><path d="M22 8v12M42 8v12" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><rect x="21" y="30" width="9" height="9" rx="1.5" fill="#fff"/><rect x="34" y="30" width="9" height="9" rx="1.5" fill="#fff"/><rect x="42" y="33" width="12" height="12" rx="2" fill="currentColor"/><path d="M45 39h6" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>`,
  incapacidad: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 55 15v16c0 15-9 26-23 30C18 57 9 46 9 31V15L32 5Z" fill="currentColor"/></svg>`,
  "humanitario-sindical": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="19" r="10" fill="currentColor"/><circle cx="14" cy="27" r="8" fill="currentColor"/><circle cx="50" cy="27" r="8" fill="currentColor"/><path d="M17 58c1.5-15 9-23 15-23s13.5 8 15 23H17Z" fill="currentColor"/><path d="M2 58c1-11 6.5-17 13-17 4 0 7.5 2 10 5.5-3.5 3-5.5 7-6.5 11.5H2ZM45.5 58c-1-4.5-3-8.5-6.5-11.5C41.5 43 45 41 49 41c6.5 0 12 6 13 17H45.5Z" fill="currentColor"/></svg>`,
  "humanitario-oficial": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 10c13 0 24 10 24 22s-11 22-24 22S8 44 8 32 19 10 32 10Z" fill="currentColor"/><path d="M21 35c4 7 8 10 11 10s7-3 11-10" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
  "comision-sindical": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="m32 4 8 17 19 3-14 13 3 19-16-9-16 9 3-19L5 24l19-3 8-17Z" fill="currentColor"/><path d="M20 58h24l-6-9H26l-6 9Z" fill="currentColor"/></svg>`,
  "comision-oficial": `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="22" width="48" height="34" rx="6" fill="currentColor"/><path d="M23 22v-8h18v8" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><rect x="26" y="15" width="12" height="6" fill="#fff" opacity=".9"/></svg>`,
  especial: `<svg class="icon-svg" viewBox="0 0 64 64" aria-hidden="true"><path d="m32 5 8.5 17.5L60 25.5 46 39l3.5 20L32 49.5 14.5 59 18 39 4 25.5l19.5-3L32 5Z" fill="currentColor"/></svg>`
};

const PERMISSION_TYPES = [
  { nombre: "Permiso oficial", descripcion: "Registro de hasta tres fechas independientes.", color: "purple", icono: "permiso-oficial", medico: false, oficial: true },
  { nombre: "Incapacidad", descripcion: "Ausencia médica por uno o varios días.", color: "blue", icono: "incapacidad", medico: true, oficial: false },
  { nombre: "Humanitario sindical", descripcion: "Permiso humanitario autorizado por representación sindical.", color: "green", icono: "humanitario-sindical", medico: false, oficial: false },
  { nombre: "Humanitario oficial", descripcion: "Permiso humanitario autorizado por la institución.", color: "orange", icono: "humanitario-oficial", medico: false, oficial: false },
  { nombre: "Comisión sindical", descripcion: "Actividad oficial asignada por representación sindical.", color: "purple-soft", icono: "comision-sindical", medico: false, oficial: false },
  { nombre: "Comisión oficial", descripcion: "Actividad oficial asignada por la institución.", color: "blue-soft", icono: "comision-oficial", medico: false, oficial: false },
  { nombre: "Especial", descripcion: "Incidencia extraordinaria no clasificada en categorías anteriores.", color: "gold", icono: "especial", medico: false, oficial: false }
];

const MODULES = {
  "Direccion": {
    titulo: "Módulo Dirección",
    subtitulo: "Administración General",
    avatar: "director",
    avatarColor: "blue",
    importante: "Dirección cuenta con acceso completo para registrar, consultar, editar y eliminar incidencias.",
    acceso: "Permisos completos de administración y gestión.",
    opciones: [
      { nombre: "Mi perfil", descripcion: "Consulta personal e historial propio.", color: "gold", icono: "user" },
      { nombre: "Consulta de fechas", descripcion: "Análisis por fecha o rango.", color: "orange", icono: "calendar" },
      { nombre: "Otorgar incidencia", descripcion: "Crear nueva incidencia.", color: "purple", icono: "file-plus" },
      { nombre: "Historial general", descripcion: "Consulta por docente.", color: "green", icono: "history" },
      { nombre: "Reporte del día", descripcion: "Incidencias activas del día actual.", color: "blue-light", icono: "report" },
      { nombre: "Reporte semanal", descripcion: "Vista automática semanal.", color: "blue", icono: "calendar" },
      { nombre: "Notificaciones", descripcion: "Centro de mensajes.", color: "cyan", icono: "bell" }
    ]
  },
  "Correspondencia": {
    titulo: "Módulo Correspondencia",
    subtitulo: "Captura y consulta",
    avatar: "edit",
    avatarColor: "green",
    importante: "Correspondencia puede consultar información y revisar notificaciones.",
    acceso: "Permisos de consulta.",
    opciones: [
      { nombre: "Mi perfil", descripcion: "Consulta personal e historial propio.", color: "gold", icono: "user" },
      { nombre: "Consulta de fechas", descripcion: "Análisis por fecha o rango.", color: "orange", icono: "calendar" },
      { nombre: "Historial", descripcion: "Consulta por docente.", color: "green", icono: "history" },
      { nombre: "Notificaciones", descripcion: "Ver mensajes recibidos.", color: "blue", icono: "bell" }
    ]
  },
  "Prefectura": {
    titulo: "Módulo Prefectura",
    subtitulo: "Consulta y supervisión",
    avatar: "group",
    avatarColor: "orange",
    importante: "Prefectura únicamente puede consultar información según su turno.",
    acceso: "Permisos de consulta operativa.",
    opciones: [
      { nombre: "Mi perfil", descripcion: "Consulta personal e historial propio.", color: "gold", icono: "user" },
      { nombre: "Reporte del día", descripcion: "Incidencias activas del día actual.", color: "blue-light", icono: "report" },
      { nombre: "Reporte semanal", descripcion: "Análisis semanal.", color: "blue", icono: "calendar" },
      { nombre: "Notificaciones", descripcion: "Ver mensajes y avisos.", color: "cyan", icono: "bell" }
    ]
  },
  "Docente": {
    titulo: "Módulo Docente",
    subtitulo: "Consulta personal",
    avatar: "book",
    avatarColor: "purple",
    importante: "Usted únicamente puede consultar su información personal.",
    acceso: "Consulta exclusiva de información propia.",
    opciones: [
      { nombre: "Mi Perfil", descripcion: "Ver mi resumen personal.", color: "gold", icono: "user" },
      { nombre: "Notificaciones", descripcion: "Ver mensajes y avisos.", color: "purple", icono: "bell" }
    ]
  }
};

let currentModule = "";
let selectedType = null;
let selectedPersonID = "";
let selectedDetailPersonID = "";
let selectedIncidentID = "";
let selectedNotificationID = "";
let profileMode = false;
let currentScreen = "loginScreen";
let navigationStack = [];
let detailBackOverride = "";

window.addEventListener("load", () => {
  inyectarEstilosEstadisticaMensualSEC2();
  inicializarIconos();
  const llaveAcceso = sessionStorage.getItem("userIDAcceso");
  if (llaveAcceso) {
    currentModule = sessionStorage.getItem("currentActiveModule") || "Direccion";
    showScreen("main", false);
  } else {
    showScreen("loginScreen", false);
  }
});


function inyectarEstilosEstadisticaMensualSEC2() {
  if (document.getElementById("sec2MonthlyTypeChartStyles")) return;

  const style = document.createElement("style");
  style.id = "sec2MonthlyTypeChartStyles";
  style.textContent = `
    .sec2-type-chart-wrap {
      padding: 18px 10px 20px;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .sec2-type-chart {
      min-width: 680px;
      min-height: 250px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 16px;
      align-items: end;
      padding: 18px 12px 8px;
      border-left: 2px solid var(--border);
      border-bottom: 2px solid var(--border);
    }

    .sec2-type-bar-item {
      display: grid;
      grid-template-rows: 24px 160px 28px 44px;
      align-items: end;
      justify-items: center;
      min-width: 78px;
    }

    .sec2-type-bar-value {
      font-size: 20px;
      font-weight: 900;
      color: var(--primary);
      line-height: 1;
    }

    .sec2-type-bar {
      width: 48px;
      border-radius: 13px 13px 4px 4px;
      box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);
    }

    .sec2-type-bar-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;
    }

    .sec2-type-bar-icon .icon-svg {
      width: 22px;
      height: 22px;
    }

    .sec2-type-bar-label {
      color: var(--text);
      font-size: 12px;
      line-height: 1.08;
      font-weight: 900;
      text-align: center;
      max-width: 84px;
    }
  `;

  document.head.appendChild(style);
}

function ejecutarLogin() {
  const idAcceso = document.getElementById("loginIDAcceso").value.trim();
  const contrasena = document.getElementById("loginContrasena").value.trim();
  const statusBox = document.getElementById("loginStatus");

  if (!idAcceso || !contrasena) {
    statusBox.className = "status-box show error";
    statusBox.textContent = "Por favor, completa ambos campos.";
    return;
  }

  statusBox.className = "status-box show";
  statusBox.textContent = "Validando credenciales seguras...";

  API.iniciarSesion(idAcceso, contrasena, 
    function(respuesta) {
      const usr = respuesta;
      sessionStorage.setItem("userID", usr.ID);
      sessionStorage.setItem("userIDAcceso", idAcceso);
      sessionStorage.setItem("userRol", usr.Rol);
      sessionStorage.setItem("userTurno", usr.Turno);
      sessionStorage.setItem("userName", usr.Nombre);
      
      const rol = usr.Rol.toLowerCase();
      if (rol.includes("dirección") || rol.includes("dir")) {
        currentModule = "Direccion";
      } else if (rol.includes("corresponde") || rol.includes("cor")) {
        currentModule = "Correspondencia";
      } else if (rol.includes("prefectura") || rol.includes("pre")) {
        currentModule = "Prefectura";
      } else {
        currentModule = "Docente";
      }

      sessionStorage.setItem("currentActiveModule", currentModule);
      
      statusBox.className = "status-box show ok";
      statusBox.textContent = "¡Bienvenido, " + usr.Nombre + "!";
      
      setTimeout(function() {
        showScreen("splash", false);
        setTimeout(function() {
          showScreen("main", false);
        }, 1500);
      }, 800);
    },
    function(err) {
      statusBox.className = "status-box show error";
      statusBox.textContent = err || "Usuario o contraseña incorrectos.";
    }
  );
}

function esRolDireccion(rolStr) {
  const r = (rolStr || "").toLowerCase();
  return r.includes("dirección") || r.includes("dir");
}

function esRolCorrespondencia(rolStr) {
  const r = (rolStr || "").toLowerCase();
  return r.includes("corresponde") || r.includes("cor");
}

function esRolPrefectura(rolStr) {
  const r = (rolStr || "").toLowerCase();
  return r.includes("prefectura") || r.includes("pre");
}

function esRolDocente(rolStr) {
  const r = (rolStr || "").toLowerCase();
  return r.includes("doc");
}

function cerrarSesion() {
  sessionStorage.clear();
  document.getElementById("loginIDAcceso").value = "";
  document.getElementById("loginContrasena").value = "";
  document.getElementById("loginStatus").className = "status-box";
  showScreen("loginScreen", false);
}

function showScreen(id, pushHistory = true) {
  if (!id) return;

  if (pushHistory && currentScreen && currentScreen !== id) {
    navigationStack.push(currentScreen);
  }

  document.querySelectorAll(".screen").forEach(function(screen) {
    screen.classList.remove("active");
    limpiarScrollPantallaApp(screen);
  });

  setTimeout(function() {
    const el = document.getElementById(id);

    if (el) {
      el.classList.add("active");
      currentScreen = id;
      prepararScrollPantallaActivaApp(el);
      inicializarIconos();
    }
  }, 35);
}

function limpiarScrollPantallaApp(screen) {
  if (!screen) return;

  screen.style.overflowX = "";
  screen.style.overflowY = "";
  screen.style.webkitOverflowScrolling = "";
  screen.style.touchAction = "";
  screen.style.height = "";
  screen.style.maxHeight = "";
}

function prepararScrollPantallaActivaApp(el) {
  if (!el) return;

  document.documentElement.style.overflowX = "hidden";
  document.documentElement.style.overflowY = "auto";
  document.documentElement.style.height = "auto";

  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
  document.body.style.position = "static";
  document.body.style.height = "auto";
  document.body.style.minHeight = "100dvh";
  document.body.style.touchAction = "pan-y";

  if (el.classList.contains("screen-scroll") || el.id !== "splash") {
    el.style.overflowX = "hidden";
    el.style.overflowY = "auto";
    el.style.webkitOverflowScrolling = "touch";
    el.style.touchAction = "pan-y";
    el.style.height = "100dvh";
    el.style.maxHeight = "100dvh";
    el.style.minHeight = "100dvh";
  }

  const contenedores = el.querySelectorAll(".page-top, .module-menu-wrap, .content, .main-fixed-layout");

  contenedores.forEach(function(contenedor) {
    contenedor.style.overflow = "visible";
    contenedor.style.height = "auto";
    contenedor.style.maxHeight = "none";
    contenedor.style.touchAction = "pan-y";
  });

  requestAnimationFrame(function() {
    try {
      el.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn("No se pudo reiniciar scroll:", error);
    }
  });
}

function goBack() {
  // SEC2_FIX_EDITAR_USO_REGRESA_A_DOCENTE_V16_20260710
  // Al editar fechas de uso de un permiso oficial, Atrás debe volver al resumen del docente,
  // no al detalle técnico del permiso.
  if (currentScreen === "editUseScreen") {
    const personaDestino = selectedDetailPersonID || selectedPersonID || "";
    if (personaDestino) {
      detailBackOverride = "";
      profileMode = false;
      navigationStack = [];
      cargarResumenPersona(personaDestino, false);
      return;
    }
  }

  if (currentScreen === "detailScreen" && detailBackOverride) {
    const destino = detailBackOverride;
    detailBackOverride = "";

    // SEC2_FIX_DETALLE_GUARDADO_REGRESA_PERFIL_V18_20260710
    // Todo detalle abierto justo después de guardar una incidencia debe regresar
    // al resumen del docente para ver naturalmente la incidencia agregada.
    if (destino === "personSummaryScreen" || destino === "resumenDocente") {
      const personaDestino = selectedDetailPersonID || selectedPersonID || "";
      if (personaDestino) {
        profileMode = false;
        navigationStack = [];
        cargarResumenPersona(personaDestino, false);
      } else {
        goMain();
      }
      return;
    }

    showScreen(destino, false);
    return;
  }

  const previous = navigationStack.pop();
  if (!previous || previous === "splash") {
    goMain();
    return;
  }
  showScreen(previous, false);
}

function goMain() {
  profileMode = false;
  navigationStack = [];
  showScreen("main", false);
}

function inicializarIconos() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    const nombre = el.getAttribute("data-icon");
    if (SVG[nombre]) el.innerHTML = SVG[nombre];
  });
}

function cssVar(color) { return `var(--${color})`; }

function obtenerIdSesionSegura() {
  if(!currentModule) {
    currentModule = sessionStorage.getItem("currentActiveModule") || "Direccion";
  }
  return sessionStorage.getItem("userIDAcceso") || sessionStorage.getItem("userID") || TEST_USERS[currentModule] || "D001";
}

function iconMeta(tipo) {
  const texto = String(tipo || "").toLowerCase();
  if (texto.includes("permiso oficial") || texto.includes("permiso personal")) {
    return { color: "purple", icono: "permiso-oficial", name: tipo || "Permiso oficial" };
  }
  if (texto.includes("incapacidad") || texto.includes("licencia médica") || texto.includes("licencia medica")) {
    return { color: "blue", icono: "incapacidad", name: tipo || "Incapacidad" };
  }
  if (texto.includes("humanitario sindical")) {
    return { color: "green", icono: "humanitario-sindical", name: tipo || "Humanitario sindical" };
  }
  if (texto.includes("humanitario oficial")) {
    return { color: "orange", icono: "humanitario-oficial", name: tipo || "Humanitario oficial" };
  }
  if (texto.includes("comisión sindical") || texto.includes("comision sindical")) {
    return { color: "purple-soft", icono: "comision-sindical", name: tipo || "Comisión sindical" };
  }
  if (texto.includes("comisión oficial") || texto.includes("comision oficial")) {
    return { color: "blue-soft", icono: "comision-oficial", name: tipo || "Comisión oficial" };
  }
  if (texto === "comisión" || texto === "comision") {
    return { color: "blue-soft", icono: "comision-oficial", name: tipo || "Comisión oficial" };
  }
  if (texto.includes("especial")) {
    return { color: "gold", icono: "especial", name: tipo || "Especial" };
  }

  return { color: "gold", icono: "especial", name: tipo || "Especial" };
}

function estadoNotificacionMeta(estado) {
  const texto = String(estado || "").toLowerCase();
  if (texto === "leida" || texto === "leída") {
    return { color: "green", texto: "Leída", icono: "shield", clase: "notification-read" };
  }
  return { color: "orange", texto: "No leída", icono: "bell", clase: "notification-unread" };
}

function esNotificacionLeida(est) { return estadoNotificacionMeta(est); }

function mostrarAvisoRolModulo(moduloSolicitado) {
  const rolUsuario = sessionStorage.getItem("userRol") || "Sin rol";
  const mensaje = "Tu rol es " + rolUsuario + ". No puedes entrar al módulo " + moduloSolicitado + ".";

  let aviso = document.getElementById("sec2RoleToast");

  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "sec2RoleToast";
    aviso.style.position = "fixed";
    aviso.style.left = "50%";
    aviso.style.bottom = "28px";
    aviso.style.transform = "translateX(-50%) translateY(18px)";
    aviso.style.zIndex = "99999";
    aviso.style.maxWidth = "min(86vw, 380px)";
    aviso.style.padding = "13px 18px";
    aviso.style.borderRadius = "18px";
    aviso.style.background = "rgba(17, 24, 39, 0.88)";
    aviso.style.color = "#ffffff";
    aviso.style.fontSize = "14px";
    aviso.style.fontWeight = "700";
    aviso.style.lineHeight = "1.35";
    aviso.style.textAlign = "center";
    aviso.style.boxShadow = "0 12px 30px rgba(0,0,0,0.22)";
    aviso.style.backdropFilter = "blur(8px)";
    aviso.style.webkitBackdropFilter = "blur(8px)";
    aviso.style.opacity = "0";
    aviso.style.pointerEvents = "none";
    aviso.style.transition = "opacity .22s ease, transform .22s ease";
    document.body.appendChild(aviso);
  }

  aviso.textContent = mensaje;

  clearTimeout(aviso._sec2Timer);

  requestAnimationFrame(function() {
    aviso.style.opacity = "1";
    aviso.style.transform = "translateX(-50%) translateY(0)";
  });

  aviso._sec2Timer = setTimeout(function() {
    aviso.style.opacity = "0";
    aviso.style.transform = "translateX(-50%) translateY(18px)";
  }, 2300);
}

function openModule(moduleName) {
  const rolUsuario = sessionStorage.getItem("userRol") || "";

  /*
    Regla oficial SEC2:
    Cada usuario solo puede entrar al módulo que corresponde exactamente a su rol.

    Dirección       → Dirección
    Correspondencia → Correspondencia
    Prefectura      → Prefectura
    Docente         → Docente
  */
  if (rolUsuario !== moduleName) {
    mostrarAvisoRolModulo(moduleName);
    return;
  }

  currentModule = moduleName;
  profileMode = false;
  sessionStorage.setItem("currentActiveModule", moduleName);

  const config = MODULES[moduleName];
  const avatar = document.getElementById("moduleAvatar");
  avatar.className = `module-avatar bg-${config.avatarColor} color-${config.avatarColor}`;
  avatar.setAttribute("data-icon", config.avatar);

  document.getElementById("moduleTitle").textContent = config.titulo;
  document.getElementById("moduleTitle").className = `module-hero-title color-${config.avatarColor}`;
  document.getElementById("moduleSubtitle").textContent = config.subtitulo;
  document.getElementById("moduleImportantText").textContent = config.importante;
  document.getElementById("accessTitle").textContent = "Acceso: " + moduleName;
  document.getElementById("accessText").textContent = config.acceso;

  const container = document.getElementById("moduleButtons");
  container.innerHTML = "";

  config.opciones.forEach(option => {
    const button = document.createElement("button");
    button.className = "professional-card";
    button.onclick = () => openOption(option.nombre);
    button.innerHTML = `
      <div class="professional-icon solid-${option.color}" data-icon="${option.icono}"></div>
      <div>
        <h2 class="professional-title color-${option.color}">${option.nombre}</h2>
        <p class="professional-desc">${option.descripcion}</p>
      </div>
      <div class="professional-arrow color-${option.color}">›</div>
    `;
    container.appendChild(button);
  });

  showScreen("moduleMenu");
}
function openOption(optionName) {
  if (optionName === "Mi perfil" || optionName === "Mi Perfil") return abrirMiPerfil();
  if (optionName === "Otorgar incidencia") return openTipoIncidencia();
  if (optionName === "Reporte del día") return cargarReporteDia();
  if (optionName === "Reporte semanal") return cargarReporteSemanal();
  if (optionName === "Consulta de fechas") return abrirConsultaFechas();
  if (optionName === "Historial" || optionName === "Historial general") return abrirSelectorHistorial();
  if (optionName === "Notificaciones") return abrirNotificaciones();
}

function abrirMiPerfil() {
  profileMode = true;
  // Apuntamos al IDAcceso (Columna H) como raíz de sesión para evitar cruces
  selectedPersonID = sessionStorage.getItem("userIDAcceso") || obtenerIdSesionSegura();
  cargarResumenPersona(selectedPersonID);
}

function abrirSelectorHistorial() {
  profileMode = false;
  const select = document.getElementById("historyPersonSelect");
  select.innerHTML = `<option value="">Cargando docentes...</option>`;
  API.obtenerUsuariosParaFormulario(
    usuarios => {
      select.innerHTML = `<option value="">Seleccionar docente</option>`;
      usuarios.forEach(usuario => {
        const option = document.createElement("option");
        option.value = usuario.IDAcceso; // Enlazado unívocamente a IDAcceso (Col H)
        option.textContent = `${usuario.Apellidos} ${usuario.Nombre}`;
        select.appendChild(option);
      });
    },
    error => {
      select.innerHTML = `<option value="">Error al cargar docentes</option>`;
      alert(obtenerMensajeError(error));
    }
  );
  showScreen("historySelectScreen");
}

function continuarHistorialPersona() {
  const id = document.getElementById("historyPersonSelect").value;
  if (!id) { alert("Selecciona un docente."); return; }
  profileMode = false;
  cargarResumenPersona(id);
}

function cargarResumenPersona(idPersona, pushHistory = true) {
  selectedPersonID = idPersona;
  actualizarEncabezadoResumenPersona();
  document.getElementById("personSummaryContent").innerHTML = crearTarjetaSimple("Cargando resumen...", "Consultando base de datos.");
  showScreen("personSummaryScreen", pushHistory);
  
  API.obtenerResumenPersona(idPersona, renderResumenPersona, error => {
    document.getElementById("personSummaryContent").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  });
}

function actualizarEncabezadoResumenPersona() {
  const pantalla = document.getElementById("personSummaryScreen");
  if (!pantalla) return;

  const titulo = pantalla.querySelector(".page-title");
  const subtitulo = pantalla.querySelector(".page-subtitle");
  const icono = pantalla.querySelector(".brand-icon");

  if (profileMode) {
    if (titulo) {
      titulo.textContent = "Mi perfil";
      titulo.className = "page-title color-gold";
    }
    if (subtitulo) subtitulo.textContent = "Información personal e historial propio";
    if (icono) {
      icono.className = "brand-icon solid-gold";
      icono.setAttribute("data-icon", "user");
    }
  } else {
    if (titulo) {
      titulo.textContent = "Docente";
      titulo.className = "page-title color-green";
    }
    if (subtitulo) subtitulo.textContent = "Resumen e historial del docente";
    if (icono) {
      icono.className = "brand-icon solid-green";
      icono.setAttribute("data-icon", "user");
    }
  }
}

function renderResumenPersona(respuesta) {
  const p = respuesta.persona || {};
  const e = normalizarEstadisticasResumen(respuesta.estadisticas, respuesta);
  const ultima = respuesta.ultimaIncidencia ? formatearFecha(respuesta.ultimaIncidencia.FechaInicio) : "Sin registros";
  const tituloOpciones = profileMode ? "Mi historial" : "Opciones de consulta";
  const descripcionHistorial = profileMode ? "Ver mi historial personal completo." : "Ver todas las incidencias registradas.";
  if(!currentModule) currentModule = sessionStorage.getItem("currentActiveModule") || "Direccion";
  
  const html = `
    <article class="data-card">
      <div class="summary-header">
        <div class="big-avatar" data-icon="user"></div>
        <div>
          <h2 class="data-card-title">${escapeHTML(p.Nombre)} ${escapeHTML(p.Apellidos)}</h2>
          <p class="data-card-text"><strong>Turno:</strong> ${TURNOS_TEXTO[p.Turno] || p.Turno || "Sin dato"}</p>
          <p class="data-card-text"><strong>Última incidencia:</strong> ${ultima}</p>
        </div>
      </div>
      <h2 class="section-title">Estadísticas rápidas</h2>
      <section class="stat-grid profile-stat-grid">
        ${statMini(e.total, "Total", "blue", "humanitario-sindical", "total")}
        ${statMini(e.permisoOficial, "Permiso<br>oficial", "purple", "permiso-oficial", "permisoOficial")}
        ${statMini(e.incapacidad, "Incapacidad", "blue", "incapacidad", "incapacidad")}
        ${statMini(e.humanitarioSindical, "Humanitario<br>sindical", "green", "humanitario-sindical", "humanitarioSindical")}
        ${statMini(e.humanitarioOficial, "Humanitario<br>oficial", "orange", "humanitario-oficial", "humanitarioOficial")}
        ${statMini(e.comisionSindical, "Comisión<br>sindical", "purple-soft", "comision-sindical", "comisionSindical")}
        ${statMini(e.comisionOficial, "Comisión<br>oficial", "blue-soft", "comision-oficial", "comisionOficial")}
        ${statMini(e.especial, "Especial", "gold", "especial", "especial")}
      </section>
      <h2 class="section-title">${tituloOpciones}</h2>
      ${optionCard("Historial completo", descripcionHistorial, "green", "history", "cargarHistorialPersona('todas')")}
      ${optionCard("Próximas incidencias", "Consultar incidencias futuras programadas.", "blue", "calendar", "cargarHistorialPersona('proximas')")}
      ${optionCard("Estadística mensual", "Consultar gráfica mensual por tipo de incidencia.", "orange", "report", "abrirEstadisticaMensual()")}
      ${debeMostrarBotonPDFHistorial() ? optionCard("Historial en PDF", "Generar reporte descargable del historial.", "blue", "report", "generarHistorialPDFDocente()") : ""}
    </article>
    <section class="info-card">
      <div class="info-icon">i</div>
      <div>
        <h3 class="info-title">Información</h3>
        <p class="info-text">${profileMode ? "Este apartado es personal y solo de consulta." : "Seleccione una opción para consultar información detallada."}</p>
      </div>
    </section>
    <section class="access-card">
      <div class="access-icon" data-icon="shield"></div>
      <div>
        <h2 class="access-title">Acceso: ${currentModule}</h2>
        <p class="access-text">${profileMode ? "Consulta personal sin edición." : "Consulta de historial e incidencias del docente."}</p>
      </div>
      <button class="logout-fake" onclick="cerrarSesion()">Cerrar<br>sesión</button>
    </section>
  `;
  document.getElementById("personSummaryContent").innerHTML = html;
  inicializarIconos();
  actualizarEstadisticasResumenDesdeHistorial();
}

function statMini(num, label, color, icono, statKey) {
  const attr = statKey ? ` data-profile-stat="${statKey}"` : "";
  return `
    <article class="stat-small bg-${color}">
      <div class="mini-icon solid-${color} sec2-type-icon-unified" data-icon="${icono}"></div>
      <div class="stat-num color-${color}"${attr}>${numeroEnteroSeguro(num)}</div>
      <div class="stat-label">${label}</div>
    </article>
  `;
}

function numeroEnteroSeguro(valor) {
  if (valor === null || valor === undefined || valor === "") return 0;
  const numero = Number(valor);
  return Number.isFinite(numero) ? numero : 0;
}

function normalizarEstadisticasResumen(estadisticas, respuesta) {
  const e = estadisticas || {};
  const conteoLocal = contarTiposIncidenciasResumen(obtenerIncidenciasDesdeRespuestaResumen(respuesta));

  return {
    total: obtenerValorEstadistica(e, ["total", "Total", "totalIncidencias", "total_incidencias"], conteoLocal.total),
    permisoOficial: obtenerValorEstadistica(e, ["permisoOficial", "permisoOficiales", "permisosOficiales", "permiso_oficial", "permisos_oficiales", "Permiso oficial", "Permiso Oficial"], conteoLocal.permisoOficial),
    incapacidad: obtenerValorEstadistica(e, ["incapacidad", "incapacidades", "Incapacidad", "Incapacidades"], conteoLocal.incapacidad),
    humanitarioSindical: obtenerValorEstadistica(e, ["humanitarioSindical", "humanitariosSindicales", "humanitario_sindical", "humanitarios_sindicales", "Humanitario sindical", "Humanitario Sindical"], conteoLocal.humanitarioSindical),
    humanitarioOficial: obtenerValorEstadistica(e, ["humanitarioOficial", "humanitariosOficiales", "humanitario_oficial", "humanitarios_oficiales", "Humanitario oficial", "Humanitario Oficial"], conteoLocal.humanitarioOficial),
    comisionSindical: obtenerValorEstadistica(e, ["comisionSindical", "comisionesSindicales", "comisiónSindical", "comisiones_sindicales", "comision_sindical", "Comisión sindical", "Comision sindical", "Comisión Sindical", "Comision Sindical"], conteoLocal.comisionSindical),
    comisionOficial: obtenerValorEstadistica(e, ["comisionOficial", "comisionesOficiales", "comisiónOficial", "comisiones_oficiales", "comision_oficial", "Comisión oficial", "Comision oficial", "Comisión Oficial", "Comision Oficial"], conteoLocal.comisionOficial),
    especial: obtenerValorEstadistica(e, ["especial", "especiales", "Especial", "Especiales"], conteoLocal.especial)
  };
}

function obtenerValorEstadistica(estadisticas, nombres, respaldo) {
  const e = estadisticas || {};

  for (const nombre of nombres) {
    if (e[nombre] !== undefined && e[nombre] !== null && e[nombre] !== "") {
      return numeroEnteroSeguro(e[nombre]);
    }
  }

  const contenedores = [e.porTipo, e.por_tipo, e.tipos, e.detalle, e.detallePorTipo, e.detalle_por_tipo];

  for (const contenedor of contenedores) {
    const valor = buscarValorEnContenedorEstadisticas(contenedor, nombres);
    if (valor !== null) return valor;
  }

  if (Array.isArray(e)) {
    const valor = buscarValorEnContenedorEstadisticas(e, nombres);
    if (valor !== null) return valor;
  }

  return numeroEnteroSeguro(respaldo);
}

function buscarValorEnContenedorEstadisticas(contenedor, nombres) {
  if (!contenedor) return null;

  if (Array.isArray(contenedor)) {
    for (const item of contenedor) {
      const tipo = normalizarTextoComparacion(item.tipo || item.TipoIncidencia || item.nombre || item.Nombre || item.categoria || item.Categoria);
      if (!tipo) continue;

      const coincide = nombres.some(nombre => normalizarTextoComparacion(nombre) === tipo);
      if (coincide) {
        return numeroEnteroSeguro(item.cantidad ?? item.total ?? item.valor ?? item.count ?? item.dias ?? 0);
      }
    }
    return null;
  }

  if (typeof contenedor === "object") {
    for (const nombre of nombres) {
      if (contenedor[nombre] !== undefined && contenedor[nombre] !== null && contenedor[nombre] !== "") {
        return numeroEnteroSeguro(contenedor[nombre]);
      }
    }

    const claves = Object.keys(contenedor);
    for (const clave of claves) {
      const coincide = nombres.some(nombre => normalizarTextoComparacion(nombre) === normalizarTextoComparacion(clave));
      if (coincide) return numeroEnteroSeguro(contenedor[clave]);
    }
  }

  return null;
}

function obtenerIncidenciasDesdeRespuestaResumen(respuesta) {
  if (!respuesta) return [];
  const posibles = [
    respuesta.incidencias,
    respuesta.historial,
    respuesta.historialCompleto,
    respuesta.historial_completo,
    respuesta.registros,
    respuesta.detalle,
    respuesta.datos
  ];

  for (const posible of posibles) {
    if (Array.isArray(posible)) return posible;
  }

  return [];
}

function contarTiposIncidenciasResumen(incidencias) {
  const conteo = {
    total: 0,
    permisoOficial: 0,
    incapacidad: 0,
    humanitarioSindical: 0,
    humanitarioOficial: 0,
    comisionSindical: 0,
    comisionOficial: 0,
    especial: 0
  };

  if (!Array.isArray(incidencias)) return conteo;

  incidencias.forEach(function(incidencia) {
    conteo.total += 1;
    const tipo = normalizarTextoComparacion(incidencia.TipoIncidencia || incidencia.tipo || incidencia.nombre || "");

    if (tipo.includes("permiso oficial") || tipo.includes("permiso personal")) conteo.permisoOficial += 1;
    else if (tipo.includes("incapacidad") || tipo.includes("licencia medica")) conteo.incapacidad += 1;
    else if (tipo.includes("humanitario sindical")) conteo.humanitarioSindical += 1;
    else if (tipo.includes("humanitario oficial")) conteo.humanitarioOficial += 1;
    else if (tipo.includes("comision sindical")) conteo.comisionSindical += 1;
    else if (tipo.includes("comision oficial") || tipo === "comision") conteo.comisionOficial += 1;
    else if (tipo.includes("especial")) conteo.especial += 1;
  });

  return conteo;
}

function actualizarEstadisticasResumenDesdeHistorial() {
  if (!selectedPersonID || typeof API === "undefined" || typeof API.obtenerHistorialPersona !== "function") return;

  API.obtenerHistorialPersona(selectedPersonID, "todas", function(respuesta) {
    const conteo = contarTiposIncidenciasResumen(respuesta.incidencias || []);
    actualizarNumeroEstadisticaPerfil("total", conteo.total);
    actualizarNumeroEstadisticaPerfil("permisoOficial", conteo.permisoOficial);
    actualizarNumeroEstadisticaPerfil("incapacidad", conteo.incapacidad);
    actualizarNumeroEstadisticaPerfil("humanitarioSindical", conteo.humanitarioSindical);
    actualizarNumeroEstadisticaPerfil("humanitarioOficial", conteo.humanitarioOficial);
    actualizarNumeroEstadisticaPerfil("comisionSindical", conteo.comisionSindical);
    actualizarNumeroEstadisticaPerfil("comisionOficial", conteo.comisionOficial);
    actualizarNumeroEstadisticaPerfil("especial", conteo.especial);
  }, function(error) {
    console.warn("No se pudieron recalcular las estadísticas exactas del perfil:", error);
  });
}

function actualizarNumeroEstadisticaPerfil(clave, valor) {
  const elemento = document.querySelector(`[data-profile-stat="${clave}"]`);
  if (elemento) elemento.textContent = numeroEnteroSeguro(valor);
}

function normalizarTextoComparacion(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function optionCard(title, desc, color, icon, action) {
  return `
    <button class="professional-card" onclick="${action}" style="margin-bottom:8px;">
      <div class="professional-icon solid-${color}" data-icon="${icon}"></div>
      <div>
        <h2 class="professional-title color-${color}">${title}</h2>
        <p class="professional-desc">${desc}</p>
      </div>
      <div class="professional-arrow color-${color}">›</div>
    </button>
  `;
}

function cargarHistorialPersona(filtro) {
  document.getElementById("dataTitle").textContent = filtro === "proximas" ? "Próximas incidencias" : "Historial completo";
  document.getElementById("dataSubtitle").textContent = "Consultando base de datos.";
  document.getElementById("dataStats").innerHTML = ""; document.getElementById("dataList").innerHTML = crearTarjetaSimple("Cargando historial...", "Consultando base de datos.");
  document.getElementById("dataAccessName").textContent = currentModule;
  document.getElementById("dataBrandIcon").className = "brand-icon solid-green";
  document.getElementById("dataBrandIcon").setAttribute("data-icon", "history"); showScreen("dataScreen");
  
  API.obtenerHistorialPersona(selectedPersonID, filtro, respuesta => {
    document.getElementById("dataSubtitle").textContent = `${respuesta.persona.Nombre} ${respuesta.persona.Apellidos}`;
    renderHistorialConDetalles(respuesta.incidencias);
  }, renderError);
}

function renderHistorialConDetalles(incidencias) {
  const container = document.getElementById("dataList"); container.innerHTML = "";
  if (!incidencias || incidencias.length === 0) {
    container.innerHTML = crearTarjetaSimple("Sin registros", "No hay incidencias para mostrar."); return;
  }
  container.innerHTML = `
    <h2 class="section-title">Incidencias registradas</h2>
    <p class="section-subtitle">Fechas cercanas al periodo consultado.</p>
  `;
  incidencias.forEach(incidencia => { container.appendChild(crearCardIncidencia(incidencia, true)); });
  inicializarIconos();
}

function abrirDetalleIncidencia(idIncidencia, regresarA = "") {
  selectedIncidentID = idIncidencia;
  selectedDetailPersonID = "";
  detailBackOverride = regresarA || "";
  document.getElementById("detailContent").innerHTML = crearTarjetaSimple("Cargando detalle...", "Consultando base de datos.");

  if (detailBackOverride) {
    showScreen("detailScreen", false);
  } else {
    showScreen("detailScreen");
  }
  
  API.obtenerDetalleIncidencia(idIncidencia, renderDetalleIncidencia, error => {
    document.getElementById("detailContent").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  });
}

function renderDetalleIncidencia(respuesta) {
  const i = respuesta.incidencia || {};
  const meta = iconMeta(i.TipoIncidencia);
  const andPuedeEditar = respuesta.puedeEditar;
  const andPuedeEliminar = respuesta.puedeEliminar;
  const folioVisible = obtenerFolioVisibleIncidencia(i);
  selectedDetailPersonID = i.IDUsuario || i.IDAcceso || selectedPersonID || "";

  document.getElementById("detailBrandIcon").className = `brand-icon solid-${meta.color}`;
  document.getElementById("detailBrandIcon").setAttribute("data-icon", meta.icono);

  let html = `
    <article class="data-card">
      <div style="display:grid;grid-template-columns:60px 1fr;gap:12px;align-items:center;">
        <div class="mini-icon solid-${meta.color}" data-icon="${meta.icono}"></div>
        <div>
          <h2 class="data-card-title color-${meta.color}">${escapeHTML(i.TipoIncidencia || meta.name)}</h2>
          ${folioVisible ? `<p class="data-card-text"><strong>Folio:</strong> ${escapeHTML(folioVisible)}</p>` : ""}
          <span class="tag" style="background:${cssVar('green')};">${escapeHTML(i.Estado || "Activo")}</span>
        </div>
      </div>
    </article>
    <article class="data-card">
      <h2 class="section-title">Docente</h2>
      <p class="data-card-text"><strong>${escapeHTML(i.Nombre)} ${escapeHTML(i.Apellidos)}</strong></p>
      <p class="data-card-text"><strong>Turno:</strong> ${TURNOS_TEXTO[i.Turno] || i.Turno || "Sin dato"}</p>
    </article>
  `;

  if (esPermisoOficialTexto(i.TipoIncidencia)) {
    html += renderDetallePermisoOficial(i);
  } else {
    html += `
      <article class="data-card">
        <h2 class="section-title">Periodo autorizado</h2>
        <p class="data-card-text"><strong>Fecha inicio:</strong> ${formatearFecha(i.FechaInicio)}</p>
        <p class="data-card-text"><strong>Fecha fin:</strong> ${formatearFecha(i.FechaFin)}</p>
      </article>
    `;
  }

  if (i.LicenciaMedica) {
    html += `
      <article class="data-card">
        <h2 class="section-title">Licencia médica</h2>
        <p class="data-card-text">${escapeHTML(i.LicenciaMedica)}</p>
      </article>
    `;
  }

  html += `
    <article class="data-card">
      <h2 class="section-title">Observaciones</h2>
      <p class="data-card-text">${escapeHTML(i.Observaciones || "Sin observaciones.")}</p>
    </article>
    <article class="data-card">
      <h2 class="section-title">Detalles</h2>
      <p class="data-card-text"><strong>Sello:</strong> ${escapeHTML(i.RegistradoPor || "Sin dato")}</p>
      <p class="data-card-text"><strong>Fecha de captura:</strong> ${formatearFechaHoraDetalle(i.FechaRegistro || i.CreatedAt)}</p>
    </article>
  `;

  if (andPuedeEditar && i.TipoIncidencia && esPermisoOfTexto(i.TipoIncidencia)) {
    html += `<button class="primary-button" onclick="abrirEdicionUsoPermiso()">Editar incidencia</button>`;
  }

  if (andPuedeEliminar) {
    html += `<button class="danger-button" onclick="eliminarIncidenciaActual()">Eliminar incidencia</button>`;
  }

  html += `
    <section class="access-card">
      <div class="access-icon" data-icon="shield"></div>
      <div>
        <h2 class="access-title">Acceso: ${currentModule}</h2>
        <p class="access-text">${profileMode ? "Consulta personal sin edición." : "Consulta y monitoreo de incidencias."}</p>
      </div>
      <button class="logout-fake" onclick="cerrarSesion()">Cerrar<br>sesión</button>
    </section>
  `;
  document.getElementById("detailContent").innerHTML = html;
  inicializarIconos();
}

function obtenerFolioVisibleIncidencia(incidencia) {
  const folio = incidencia.Folio || incidencia.folio || "";
  if (folio) return folio;

  const id = incidencia.IDIncidencia || incidencia.idIncidencia || incidencia.id || "";
  if (!id) return "";

  // No mostrar UUID largo como folio visual.
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id))) {
    return "";
  }

  return id;
}

function formatearFechaHoraDetalle(valor) {
  if (!valor) return "Sin fecha";

  const texto = String(valor);
  const fecha = new Date(texto);

  if (!Number.isNaN(fecha.getTime())) {
    try {
      const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      const dia = String(fecha.getDate()).padStart(2, "0");
      const mes = meses[fecha.getMonth()];
      const anio = fecha.getFullYear();
      const hora = fecha.toLocaleTimeString("es-MX", { hour: "numeric", minute: "2-digit" });
      return `${dia}/${mes}/${anio}, ${hora}`;
    } catch (error) {
      return fecha.toLocaleString();
    }
  }

  if (/^\d{4}-\d{2}-\d{2}/.test(texto)) {
    return formatearFecha(texto.slice(0, 10));
  }

  return texto;
}

function renderDetallePermisoOficial(i) {
  return `
    <article class="data-card">
      <h2 class="section-title">Fechas oficiales autorizadas</h2>
      ${detalleFecha("Fecha Oficial 1", i.FechaOficial1, "Autorizada")}
      ${detalleFecha("Fecha Oficial 2", i.FechaOficial2, "Autorizada")}
      ${detalleFecha("Fecha Oficial 3", i.FechaOficial3, "Autorizada")}
    </article>
    <article class="data-card">
      <h2 class="section-title">Fechas de uso</h2>
      ${detalleFecha("Uso 1", i.Uso1Fecha || "Pendiente", i.Uso1Estado || "Pendiente")}
      ${detalleFecha("Uso 2", i.Uso2Fecha || "Pendiente", i.Uso2Estado || "Pendiente")}
      ${detalleFecha("Uso 3", i.Uso3Fecha || "Pendiente", i.Uso3Estado || "Pendiente")}
    </article>
  `;
}

function detalleFecha(label, fecha, estado) {
  return `
    <div class="official-row" style="border:1px solid var(--border);border-radius:12px;padding:9px;margin-bottom:7px;">
      <div class="official-label">${escapeHTML(label)}</div>
      <div>
        <strong>${fecha === "Pendiente" ? "Pendiente" : formatearFecha(fecha)}</strong>
        <span class="tag" style="background:${estado === "Utilizada" ? cssVar("green") : cssVar("orange")};margin-left:6px;">${escapeHTML(estado)}</span>
      </div>
    </div>
  `;
}

function abrirEdicionUsoPermiso() {
  document.getElementById("editUseContent").innerHTML = crearTarjetaSimple("Cargando edición...", "Consultando permiso oficial.");
  showScreen("editUseScreen");
  
  API.obtenerDetalleIncidencia(selectedIncidentID, respuesta => renderEditarUso(respuesta.incidencia), error => {
    document.getElementById("editUseContent").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  });
}

function renderEditarUso(i) {
  const html = `
    <section class="data-card">
      <h2 class="section-title">Fechas oficiales autorizadas</h2>
      <p class="section-subtitle">Estas fechas no se modifican.</p>
      ${readonlyFecha("Fecha Oficial 1", i.FechaOficial1)}
      ${readonlyFecha("Fecha Oficial 2", i.FechaOficial2)}
      ${readonlyFecha("Fecha Oficial 3", i.FechaOficial3)}
    </section>
    <section class="data-card">
      <h2 class="section-title color-purple">Fechas de uso</h2>
      <p class="section-subtitle">Solo puedes asignar fechas pendientes.</p>
      ${editUsoRow(1, i.Uso1Fecha, i.Uso1Estado)}
      ${editUsoRow(2, i.Uso2Fecha, i.Uso2Estado)}
      ${editUsoRow(3, i.Uso3Fecha, i.Uso3Estado)}
    </section>
    <section class="info-card">
      <div class="info-icon">i</div>
      <div>
        <h3 class="info-title">Información importante</h3>
        <p class="info-text">Las fechas ya utilizadas no pueden modificarse.</p>
      </div>
    </section>
    <button class="primary-button" onclick="guardarEdicionUso()">Guardar cambios</button>
    <div id="editUseStatus" class="status-box"></div>
    <section class="access-card">
      <div class="access-icon" data-icon="shield"></div>
      <div>
        <h2 class="access-title">Acceso: Dirección</h2>
        <p class="access-text">Edición de fechas de uso pendientes.</p>
      </div>
      <button class="logout-fake" onclick="cerrarSesion()">Cerrar<br>sesión</button>
    </section>
  `;
  document.getElementById("editUseContent").innerHTML = html; inicializarIconos();
}

function readonlyFecha(label, fecha) {
  return `
    <div class="official-row">
      <div class="official-label">${label}</div>
      <input type="text" value="${formatearFecha(fecha)}" disabled>
    </div>
  `;
}

function editUsoRow(num, fecha, estado) {
  const utilizada = String(estado || "").toLowerCase() === "utilizada" && fecha;
  return `
    <div class="official-row">
      <div class="official-label color-purple">Uso ${num}</div>
      <input id="editUso${num}" type="${utilizada ? "text" : "date"}" value="${utilizada ? formatearFechaReal(fecha) : ""}" ${utilizada ? "disabled" : ""}>
    </div>
  `;
}

function guardarEdicionUso() {
  if (!confirm("¿Confirmas guardar las fechas de uso pendientes?")) return;
  const status = document.getElementById("editUseStatus");
  status.className = "status-box show"; status.textContent = "Guardando cambios...";
  
  const datos = {
    Uso1Fecha: valorInputEditable("editUso1"),
    Uso2Fecha: valorInputEditable("editUso2"),
    Uso3Fecha: valorInputEditable("editUso3")
  };
  
  API.guardarUsosPermisoOficial(selectedIncidentID, datos, function() {
    status.className = "status-box show ok";
    status.textContent = "Cambios guardados correctamente.";

    // SEC2_FIX_USOS_OFICIALES_GUARDAR_REGRESA_PERFIL_V17_20260710
    // Al guardar usos pendientes, no volver al detalle del permiso oficial.
    // Regresar al resumen del docente para evitar bucle detalle → editar → detalle.
    const personaDestino = selectedDetailPersonID || selectedPersonID || "";
    setTimeout(function() {
      detailBackOverride = "";
      navigationStack = [];
      if (personaDestino) {
        profileMode = false;
        cargarResumenPersona(personaDestino, false);
      } else {
        goMain();
      }
    }, 800);
  }, function(error) {
    status.className = "status-box show error"; status.textContent = obtenerMensajeError(error);
  });
}

function valorInput(id) {
  const el = document.getElementById(id); return el ? el.value : "";
}

function valorInputEditable(id) {
  const el = document.getElementById(id);
  if (!el || el.disabled) return "";
  return el.value || "";
}

function eliminarIncidenciaActual() {
  if(!confirm("¿Estás seguro de eliminar esta incidencia? Esta acción no se puede deshacer.")) return;

  const personaDestino = selectedDetailPersonID || selectedPersonID || "";

  API.eliminarIncidencia(selectedIncidentID, function(res) {
    alert("Incidencia eliminada exitosamente.");

    detailBackOverride = "";
    selectedIncidentID = "";
    navigationStack = [];

    if (personaDestino) {
      profileMode = false;
      cargarResumenPersona(personaDestino, false);
    } else {
      goMain();
    }
  }, function(err) {
    alert("Error eliminando: " + err);
  });
}

function crearCardIncidencia(i, mostrarDetalleBtn = true, opciones = {}) {
  const meta = iconMeta(i.TipoIncidencia); const card = document.createElement("article");
  card.className = "incident-card";
  
  let html = `
    <div class="incident-avatar solid-${meta.color} sec2-type-icon-unified" data-icon="${meta.icono}"></div>
    <div class="person-avatar" data-icon="user"></div>
    <div>
      <h3 class="incident-name">${escapeHTML(i.Nombre)} ${escapeHTML(i.Apellidos)}</h3>
      <p class="incident-detail"><strong>Tipo:</strong> ${escapeHTML(i.TipoIncidencia || "Incidencia")}</p>
      ${opciones.ocultarPeriodo ? "" : `<p class="incident-detail"><strong>Periodo:</strong> ${formatearFecha(i.FechaInicio)} al ${formatearFecha(i.FechaFin)}</p>`}
    </div>
  `;
  if (mostrarDetalleBtn) {
    html += `<button class="detail-button" onclick="abrirDetalleIncidencia('${escapeHTML(i.IDIncidencia)}')">Ver<br>detalle</button>`;
  } else {
    html += `<div></div>`;
  }
  
  card.innerHTML = html; return card;
}

function crearTarjetaSimple(titulo, texto) {
  return `
    <section class="data-card">
      <h2 class="data-card-title">${escapeHTML(titulo)}</h2>
      <p class="data-card-text">${escapeHTML(texto)}</p>
    </section>
  `;
}

function escapeHTML(texto) {
  return String(texto)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function abrirNotificaciones() {
  if (currentModule !== "Direccion") { abrirLeerNotificaciones(); return; }
  showScreen("notifyMenuScreen");
}

function abrirLeerNotificaciones() {
  document.getElementById("notifyReadList").innerHTML = crearTarjetaSimple("Cargando notificaciones...", "Consultando mensajes recibidos.");
  document.getElementById("notifyReadSubtitle").textContent = "Mensajes recibidos (" + currentModule + ")";
  showScreen("notifyReadScreen");
  
  API.obtenerNotificacionesUsuario(respuesta => {
    renderNotificacionesLeidas(respuesta.notificaciones);
  }, error => {
    document.getElementById("notifyReadList").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  });
}

function renderNotificacionesLeidas(notificaciones) {
  const container = document.getElementById("notifyReadList"); container.innerHTML = "";
  if (!notificaciones || notificaciones.length === 0) {
    container.innerHTML = crearTarjetaSimple("Sin notificaciones", "No se encontraron mensajes en su bandeja."); return;
  }
  notificaciones.forEach(n => {
    const meta = estadoNotificacionMeta(n.Estado); const card = document.createElement("article");
    card.className = `notification-card-full ${meta.clase}`;
    card.onclick = () => abrirDetalleNotificacionRecibida(n.IDNotificacion);
    card.innerHTML = `
      <div style="display:grid;grid-template-columns:42px 1fr;gap:10px;align-items:center;margin-bottom:8px;">
        <div class="notification-status-icon solid-${meta.color}" data-icon="${meta.icono}"></div>
        <div>
          <h3 style="margin:0;font-size:11px;font-weight:900;text-transform:uppercase;color:var(--text);">${meta.texto}</h3>
          <p style="margin:0;font-size:10px;color:#4b5563;">Enviado el: ${n.FechaEnvio}</p>
        </div>
      </div>
      <p class="notification-message">${escapeHTML(n.Mensaje)}</p>
      <p class="notification-meta"><strong>Enviado por:</strong> Dirección</p>
    `;
    container.appendChild(card);
  });
  inicializarIconos();
}

function abrirDetalleNotificacionRecibida(idNotificacion) {
  showScreen("notifyDetailScreen");
  document.getElementById("notifyDetailContent").innerHTML = crearTarjetaSimple("Cargando mensaje...", "Actualizando estado de lectura.");
  
  API.obtenerDetalleNotificacion(idNotificacion, respuesta => {
    const n = respuesta.notificacion; const meta = estadoNotificacionMeta(n.Estado);
    document.getElementById("notifyDetailIcon").className = `brand-icon solid-${meta.color}`;
    document.getElementById("notifyDetailIcon").setAttribute("data-icon", "bell");
    document.getElementById("notifyDetailContent").innerHTML = `
      <article class="notification-card-full" style="border-left:7px solid var(--cyan);">
        <p class="notification-date">Recibido: ${escapeHTML(n.FechaEnvio)}</p>
        <p class="notification-message">${escapeHTML(n.Mensaje)}</p>
        <p class="notification-meta"><strong>Estatus:</strong> Leído</p>
        <p class="notification-meta"><strong>Leído el:</strong> ${escapeHTML(n.FechaLectura)}</p>
      </article>
    `;
  }, error => {
    document.getElementById("notifyDetailContent").innerHTML = crearTarjetaSimple("Error al leer", obtenerMensajeError(error));
  });
}

function abrirEnviarNotificacion() {
  const select = document.getElementById("notifyUserSelect"); select.innerHTML = `<option value="">Cargando personas...</option>`;
  showScreen("notifySendScreen"); document.getElementById("notifySendStatus").className = "status-box";
  
  API.obtenerUsuariosParaFormulario(usuarios => {
    select.innerHTML = `<option value="">Seleccionar persona</option>`;
    usuarios.forEach(u => {
      const opt = document.createElement("option"); opt.value = u.IDAcceso;
      opt.textContent = `${u.Apellidos} ${u.Nombre} (${u.Rol})`; select.appendChild(opt);
    });
  }, error => {
    select.innerHTML = `<option value="">Error cargando personal</option>`; alert(obtenerMensajeError(error));
  });
}

function ejecutarEnvioNotificacion() {
  const id = document.getElementById("notifyUserSelect").value;
  const msg = document.getElementById("notifyMessage").value;
  const status = document.getElementById("notifySendStatus");
  if (!id) { alert("Selecciona la persona a notificar."); return; }
  if (!msg.trim()) { alert("Escribe el contenido del mensaje."); return; }
  status.className = "status-box show"; status.textContent = "Enviando notificación...";
  
  API.guardarNotificacion({ IDUsuario: id, Mensaje: msg }, respuesta => {
    status.className = "status-box show ok";
    status.textContent = "Notificación enviada correctamente a " + respuesta.Nombre + " " + respuesta.Apellidos;
    document.getElementById("notifyMessage").value = "";
  }, error => {
    status.className = "status-box show error"; status.textContent = obtenerMensajeError(error);
  });
}

function abrirNotificacionesEnviadas() {
  document.getElementById("notifySentList").innerHTML = crearTarjetaSimple("Cargando notificaciones...", "Consultando historial de mensajes enviados.");
  showScreen("notifySentScreen");
  
  API.obtenerNotificacionesEnviadas(respuesta => {
    renderNotificacionesEnviadasLista(respuesta.notificaciones);
  }, error => {
    document.getElementById("notifySentList").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  });
}

function renderNotificacionesEnviadasLista(notificaciones) {
  const container = document.getElementById("notifySentList"); container.innerHTML = "";
  if (!notificaciones || notificaciones.length === 0) {
    container.innerHTML = crearTarjetaSimple("Sin notificaciones", "No ha enviado notificaciones a ningún docente."); return;
  }
  notificaciones.forEach(n => {
    const meta = estadoNotificacionMeta(n.Estado); const card = document.createElement("article");
    card.className = `notification-card-full ${meta.clase}`;
    card.onclick = () => abrirDetalleNotificacionEnviada(n.IDNotificacion);
    card.innerHTML = `
      <p class="notification-date">Enviado: ${escapeHTML(n.FechaEnvio)} para: ${escapeHTML(n.Nombre)} ${escapeHTML(n.Apellidos)}</p>
      <p class="notification-message">${escapeHTML(n.Mensaje)}</p>
      <p class="notification-meta"><strong>Estatus lectura:</strong> ${meta.texto}</p>
    `;
    container.appendChild(card);
  });
  inicializarIconos();
}

function abrirDetalleNotificacionEnviada(idNotifId) { alert("Revisando estatus de lectura del mensaje: " + NotifId); }

function esPermisoOfTexto(tipo) { return String(tipo || "").toLowerCase() === "permiso oficial"; }

function esPermisoOficialTexto(tipo) { return String(tipo || "").toLowerCase() === "permiso oficial"; }

function renderError(error) {
  document.getElementById("dataList").innerHTML = crearTarjetaSimple("Error", obtenerMensajeError(error));
  showScreen("dataScreen", false);
}

function openTipoIncidencia() {
  const container = document.getElementById("typeList"); container.innerHTML = "";
  document.getElementById("typeAccessName").textContent = currentModule; showScreen("typeScreen");
  
  PERMISSION_TYPES.forEach(tipo => {
    if (currentModule !== "Direccion" && tipo.oficial) return;
    const button = document.createElement("button"); button.className = "type-card";
    button.onclick = () => abrirFormularioIncidencia(tipo);
    button.innerHTML = `
      <div class="type-icon solid-${tipo.color}" data-icon="${tipo.icono}"></div>
      <div>
        <h2 class="type-title color-${tipo.color}">${tipo.nombre}</h2>
        <p class="type-desc">${tipo.descripcion}</p>
      </div>
      <div class="type-arrow color-${tipo.color}">›</div>
    `;
    container.appendChild(button);
  });
  inicializarIconos();
}

function abrirFormularioIncidencia(tipo) {
  selectedType = tipo;
  document.getElementById("formBrandIcon").className = `brand-icon solid-${tipo.color}`;
  document.getElementById("formBrandIcon").setAttribute("data-icon", tipo.icono);
  document.getElementById("formTitle").textContent = tipo.nombre;
  document.getElementById("formSubtitle").textContent = tipo.descripcion;
  document.getElementById("formAccessName").textContent = currentModule;
  document.getElementById("formStatus").className = "status-box";
  document.getElementById("formObservaciones").value = "";
  const select = document.getElementById("formUsuario"); select.innerHTML = `<option value="">Cargando docentes...</option>`;
  
  API.obtenerUsuariosParaFormulario(usuarios => {
    select.innerHTML = `<option value="">Seleccionar docente</option>`;
    usuarios.forEach(u => {
      const opt = document.createElement("option"); opt.value = u.IDAcceso;
      opt.textContent = `${u.Apellidos} ${u.Nombre} (${TURNOS_TEXTO[u.Turno] || u.Turno})`; select.appendChild(opt);
    });
  }, error => {
    select.innerHTML = `<option value="">Error cargando docentes</option>`; alert(obtenerMensajeError(error));
  });

  if (tipo.oficial) {
    document.getElementById("formNormalDates").style.display = "none";
    document.getElementById("formPermisoOficial").style.display = "block";
    document.getElementById("fechaOficial1").value = ""; document.getElementById("fechaOficial2").value = "";
    document.getElementById("fechaOficial3").value = ""; document.getElementById("uso1Fecha").value = "";
    document.getElementById("uso2Fecha").value = ""; document.getElementById("uso3Fecha").value = "";
  } else {
    document.getElementById("formNormalDates").style.display = "block";
    document.getElementById("formPermisoOficial").style.display = "none";
    document.getElementById("formFechaInicio").value = ""; document.getElementById("formFechaFin").value = "";
  }

  if (tipo.medico) {
    document.getElementById("grupoLicenciaMedica").style.display = "grid"; document.getElementById("formLicencia").value = "";
  } else {
    document.getElementById("grupoLicenciaMedica").style.display = "none";
  }

  showScreen("formScreen");
  document.getElementById("formInfoText").textContent = tipo.oficial ? "El permiso oficial requiere tres fechas oficiales. Las fechas de uso pueden quedar pendientes y asignarse después." : "La fecha de inicio y fin pueden ser el mismo día.";
}

function guardarFormulario() {
  const usrIDUsuario = document.getElementById("formUsuario").value;
  const usuarioIDAcceso = sessionStorage.getItem("userIDAcceso");

  if (!selectedType || !selectedType.nombre) {
    mostrarEstadoFormulario("Error: no se detectó el tipo de incidencia seleccionado.", true, false);
    return;
  }

  if (!usrIDUsuario) { alert("Selecciona un docente afectado."); return; }

  const fechasOficiales = [
    valorInput("fechaOficial1"),
    valorInput("fechaOficial2"),
    valorInput("fechaOficial3")
  ].filter(function(fecha) { return Boolean(fecha); }).sort();

  let fechaInicio = valorInput("formFechaInicio");
  let fechaFin = valorInput("formFechaFin");

  if (selectedType && selectedType.oficial) {
    if (fechasOficiales.length !== 3) {
      mostrarEstadoFormulario("El permiso oficial debe tener exactamente tres fechas oficiales autorizadas.", true, false);
      return;
    }

    fechaInicio = fechasOficiales[0];
    fechaFin = fechasOficiales[fechasOficiales.length - 1];
  } else {
    if (!fechaInicio) {
      mostrarEstadoFormulario("La fecha de inicio es obligatoria.", true, false);
      return;
    }

    if (!fechaFin) {
      mostrarEstadoFormulario("La fecha fin es obligatoria.", true, false);
      return;
    }
  }

  if (fechaInicio && fechaFin && fechaInicio > fechaFin) {
    mostrarEstadoFormulario("La fecha de inicio no puede ser posterior a la fecha fin.", true, false);
    return;
  }

  const datos = {
    IDUsuario: usrIDUsuario,
    TipoIncidencia: selectedType.nombre,
    FechaInicio: fechaInicio,
    FechaFin: fechaFin,
    FechaOficial1: valorInput("fechaOficial1"),
    FechaOficial2: valorInput("fechaOficial2"),
    FechaOficial3: valorInput("fechaOficial3"),
    Uso1Fecha: valorInput("uso1Fecha"),
    Uso2Fecha: valorInput("uso2Fecha"),
    Uso3Fecha: valorInput("uso3Fecha"),
    LicenciaMedica: valorInput("formLicencia"),
    Observaciones: valorInput("formObservaciones"),
    RegistradoPor: usuarioIDAcceso
  };

  // SEC2_FIX_PERMISO_OFICIAL_3_FECHAS_USOS_EDITABLES_V15_20260709
  // SEC2_FIX_DETALLE_REGRESO_A_TIPOS_20260709
  // SEC2_FIX_GUARDAR_SIN_SPLASH_20260709
  // No cambiar de pantalla aquí. El estado debe verse dentro del formulario.
  mostrarEstadoFormulario("Guardando incidencia...", false, false);

  API.guardarIncidencia(datos, resultado => {
    mostrarEstadoFormulario("Incidencia guardada correctamente.", false, true);

    const idIncidenciaGuardada = obtenerIDIncidenciaDesdeRespuesta(resultado);

    if (idIncidenciaGuardada) {
      // SEC2_FIX_DETALLE_GUARDADO_REGRESA_PERFIL_V18_20260710
      // Después de crear cualquier incidencia, el detalle se abre como confirmación,
      // pero la flecha Atrás debe volver al resumen del docente afectado.
      selectedPersonID = usrIDUsuario;
      setTimeout(function() { abrirDetalleIncidencia(idIncidenciaGuardada, "personSummaryScreen"); }, 900);
    } else {
      console.warn("La incidencia se guardó, pero la respuesta no incluyó IDIncidencia:", resultado);
      setTimeout(function() {
        mostrarEstadoFormulario("Incidencia guardada correctamente. Consulta el historial para verla.", false, true);
      }, 900);
    }
  }, error => {
    mostrarEstadoFormulario(obtenerMensajeError(error), true, false);
  });
}

function obtenerIDIncidenciaDesdeRespuesta(resultado) {
  if (!resultado) return "";

  return resultado.IDIncidencia ||
    resultado.idIncidencia ||
    resultado.id_incidencia ||
    resultado.id ||
    (resultado.incidencia && (resultado.incidencia.IDIncidencia || resultado.incidencia.idIncidencia || resultado.incidencia.id_incidencia || resultado.incidencia.id)) ||
    (Array.isArray(resultado) && resultado[0] && (resultado[0].IDIncidencia || resultado[0].idIncidencia || resultado[0].id_incidencia || resultado[0].id)) ||
    "";
}

function mostrarEstadoFormulario(mensaje, esError, esOk) {
  const status = document.getElementById("formStatus"); status.className = "status-box show";
  if (esError) status.classList.add("error"); if (esOk) status.classList.add("ok");
  status.textContent = mensaje;
}

function formatearFecha(fechaISO) {
  if (!fechaISO) return "Sin fecha";
  if (fechaISO === "Pendiente") return "Pendiente";

  const texto = fechaISO.toString();
  const partes = texto.slice(0, 10).split("-");

  if (partes.length === 3 && /^\d{4}$/.test(partes[0])) {
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const mes = meses[Number(partes[1]) - 1] || partes[1];
    return `${partes[2]}/${mes}/${partes[0]}`;
  }

  return texto;
}

function formatearFechaReal(fecha) { return formatearFecha(fecha); }

function cargarReporteDia() {
  document.getElementById("dataTitle").textContent = "Reporte del día";
  document.getElementById("dataSubtitle").textContent = "Cargando incidencias...";
  document.getElementById("dataStats").innerHTML = ""; document.getElementById("dataList").innerHTML = "";
  document.getElementById("dataAccessName").textContent = currentModule;
  document.getElementById("dataBrandIcon").className = "brand-icon solid-blue";
  document.getElementById("dataBrandIcon").setAttribute("data-icon", "report"); showScreen("dataScreen");
  
  API.obtenerReporteDia(respuesta => {
    document.getElementById("dataSubtitle").textContent = "Personal activo o con incidencias el " + formatearFecha(respuesta.fecha);
    document.getElementById("dataStats").innerHTML = renderEstadisticaGeneral(respuesta);
    renderListaReportePorDia(respuesta.incidencias, {
      fechaUnica: respuesta.fecha,
      titulo: "Personal con incidencia",
      subtitulo: "Docentes ausentes o con permiso.",
      vacio: "Todo el personal se encuentra sin incidencias registradas en esta fecha."
    });
  }, renderError);
}

function renderEstadisticaGeneral(r) {
  return `
    <section class="summary-stat-row">
      <article class="summary-big-card presentes">
        <div class="summary-big-icon solid-green" data-icon="shield"></div>
        <div>
          <p class="summary-big-title">Presentes</p>
          <p class="summary-big-number color-green">${r.presentes}</p>
        </div>
      </article>
      <article class="summary-big-card ausentes">
        <div class="summary-big-icon solid-red" data-icon="incapacidad"></div>
        <div>
          <p class="summary-big-title">Ausentes</p>
          <p class="summary-big-number color-red">${r.ausentes}</p>
        </div>
      </article>
    </section>
  `;
}

function renderListaIncidencias(incidencias) {
  const container = document.getElementById("dataList"); container.innerHTML = "";
  if (!incidencias || incidencias.length === 0) {
    container.innerHTML = crearTarjetaSimple("Sin incidencias", "Todo el personal se encuentra sin incidencias registradas en esta fecha."); return;
  }
  container.innerHTML = `
    <h2 class="section-title">Personal con incidencia</h2>
    <p class="section-subtitle">Docentes ausentes o con permiso.</p>
  `;
  incidencias.forEach(incidencia => { container.appendChild(crearCardIncidencia(incidencia, true)); });
  inicializarIconos();
}

// SEC2_FIX_REPORTES_SIN_DETALLE_SIN_PERIODO_ORDEN_FECHA_V21_20260710
function renderListaReportePorDia(incidencias, opciones = {}) {
  const container = document.getElementById("dataList");
  container.innerHTML = "";

  const lista = Array.isArray(incidencias) ? incidencias : [];
  const fechasBase = Array.isArray(opciones.fechas) ? opciones.fechas : [];
  const fechas = normalizarFechasReporte(lista, fechasBase, opciones.fechaUnica);

  if (lista.length === 0) {
    container.innerHTML = `
      <h2 class="section-title">${escapeHTML(opciones.titulo || "Personal con incidencia")}</h2>
      ${opciones.fechaUnica ? crearSeparadorFechaReporte(opciones.fechaUnica) : ""}
      ${crearTarjetaSimple("Sin incidencias", opciones.vacio || "No hay incidencias para mostrar.")}
    `;
    inicializarIconos();
    return;
  }

  container.innerHTML = `
    <h2 class="section-title">${escapeHTML(opciones.titulo || "Personal con incidencia")}</h2>
    <p class="section-subtitle">${escapeHTML(opciones.subtitulo || "Docentes ausentes o con permiso.")}</p>
  `;

  fechas.forEach(function(fecha) {
    container.insertAdjacentHTML("beforeend", crearSeparadorFechaReporte(fecha));
    const delDia = lista.filter(function(inc) {
      return obtenerFechaReporteIncidencia(inc) === normalizarFechaISO(fecha);
    });

    if (delDia.length === 0) {
      container.insertAdjacentHTML("beforeend", crearTarjetaSimple("Sin incidencias", "No hay personal ausente o con permiso en este día."));
      return;
    }

    delDia.forEach(function(incidencia) {
      // En reportes operativos no se muestra Ver detalle para ningún rol.
      container.appendChild(crearCardIncidencia(incidencia, false, { ocultarPeriodo: true }));
    });
  });

  inicializarIconos();
}

function normalizarFechasReporte(incidencias, fechasBase, fechaUnica) {
  const set = new Set();

  if (fechaUnica) set.add(normalizarFechaISO(fechaUnica));
  fechasBase.forEach(function(fecha) {
    const f = normalizarFechaISO(fecha);
    if (f) set.add(f);
  });

  incidencias.forEach(function(inc) {
    const f = obtenerFechaReporteIncidencia(inc);
    if (f) set.add(f);
  });

  return Array.from(set).filter(Boolean).sort();
}

function obtenerFechaReporteIncidencia(incidencia) {
  return normalizarFechaISO(
    incidencia.FechaReporte ||
    incidencia.fechaReporte ||
    incidencia.fecha_reporte ||
    incidencia.DiaReporte ||
    incidencia.diaReporte ||
    incidencia.dia_reporte ||
    incidencia.FechaInicio ||
    incidencia.fecha_inicio ||
    incidencia.fechaInicio
  );
}

function normalizarFechaISO(fecha) {
  if (!fecha) return "";
  const texto = String(fecha);
  if (/^\d{4}-\d{2}-\d{2}/.test(texto)) return texto.slice(0, 10);
  const partes = texto.slice(0, 10).split("/");
  if (partes.length === 3 && partes[2].length === 4) {
    return `${partes[2]}-${partes[1].padStart(2, "0")}-${partes[0].padStart(2, "0")}`;
  }
  return texto.slice(0, 10);
}

// SEC2_FIX_REPORTES_BANNER_FECHA_AZUL_FINOS_V21_20260710
function crearSeparadorFechaReporte(fechaISO) {
  const partes = obtenerPartesSeparadorFechaReporte(fechaISO);

  return `
    <div class="report-day-separator">
      <span class="report-day-name">${escapeHTML(partes.dia)}</span>
      <span class="report-day-divider" aria-hidden="true">|</span>
      <span class="report-day-date">${escapeHTML(partes.fecha)}</span>
    </div>
  `;
}

function obtenerPartesSeparadorFechaReporte(fechaISO) {
  const iso = normalizarFechaISO(fechaISO);
  const partes = iso.split("-");

  if (partes.length !== 3) {
    return { dia: "Fecha", fecha: formatearFecha(fechaISO).replace(/\/\d{4}$/, "") };
  }

  const fecha = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  return {
    dia: dias[fecha.getDay()],
    fecha: `${Number(partes[2])} de ${meses[fecha.getMonth()]}`
  };
}

function formatearFechaReporteLarga(fechaISO) {
  const partes = obtenerPartesSeparadorFechaReporte(fechaISO);
  return `${partes.dia} | ${partes.fecha}`;
}

function cargarReporteSemanal() {
  document.getElementById("dataTitle").textContent = "Reporte semanal";
  document.getElementById("dataSubtitle").textContent = "Cargando reporte semanal...";
  document.getElementById("dataStats").innerHTML = ""; document.getElementById("dataList").innerHTML = "";
  document.getElementById("dataAccessName").textContent = currentModule;
  document.getElementById("dataBrandIcon").className = "brand-icon solid-blue";
  document.getElementById("dataBrandIcon").setAttribute("data-icon", "calendar"); showScreen("dataScreen");
  
  API.obtenerReporteSemanal(r => {
    document.getElementById("dataSubtitle").textContent = `Cinco días hábiles: ${formatearFecha(r.fechaInicio)} al ${formatearFecha(r.fechaFin)}`;
    document.getElementById("dataStats").innerHTML = renderEstadisticaGeneral(r);
    renderListaReportePorDia(r.incidencias, {
      fechas: r.diasHabiles || r.fechas || [],
      titulo: "Personal con incidencia",
      subtitulo: "Docentes ausentes o con permiso.",
      vacio: "No hay incidencias programadas en los cinco días hábiles del reporte."
    });
  }, renderError);
}

function abrirConsultaFechas() {
  document.getElementById("rangeFechaInicio").value = ""; document.getElementById("rangeFechaFin").value = "";
  document.getElementById("rangeStats").innerHTML = ""; document.getElementById("rangeResults").innerHTML = "";
  document.getElementById("rangeStatus").className = "status-box"; showScreen("rangeScreen");
}

// SEC2_FIX_CONSULTA_FECHAS_POR_DIA_SIN_DETALLE_BANNER_AZUL_VISIBLE_V23_20260710
function ejecutarConsultaFechas() {
  const inicio = document.getElementById("rangeFechaInicio").value;
  const fin = document.getElementById("rangeFechaFin").value;
  const status = document.getElementById("rangeStatus");
  
  if (!inicio || !fin) { alert("Selecciona ambas fechas para el rango de consulta."); return; }
  status.className = "status-box show"; status.textContent = "Consultando...";
  
  API.consultarFechas({ FechaInicio: inicio, FechaFin: fin }, r => {
    status.className = "status-box";
    document.getElementById("rangeStats").innerHTML = renderEstadisticaGeneral(r);

    renderListaConsultaFechasPorDia(r.incidencias, {
      fechas: r.diasHabiles || r.fechas || [],
      fechaInicio: r.fechaInicio || inicio,
      fechaFin: r.fechaFin || fin
    });
  }, error => {
    status.className = "status-box show error"; status.textContent = obtenerMensajeError(error);
  });
}

function renderListaConsultaFechasPorDia(incidencias, opciones = {}) {
  const container = document.getElementById("rangeResults");
  container.innerHTML = "";

  const lista = Array.isArray(incidencias) ? incidencias : [];
  const fechasBase = Array.isArray(opciones.fechas) ? opciones.fechas : [];
  const fechas = normalizarFechasReporte(lista, fechasBase, null);

  container.innerHTML = `
    <h2 class="section-title">Resultados de búsqueda</h2>
    <p class="section-subtitle">Ausencias reales encontradas en el rango seleccionado.</p>
  `;

  if (fechas.length === 0) {
    container.insertAdjacentHTML("beforeend", crearTarjetaSimple("Sin incidencias", "No existen ausencias reales en este intervalo."));
    inicializarIconos();
    return;
  }

  let totalMostradas = 0;

  fechas.forEach(function(fecha) {
    const delDia = lista.filter(function(inc) {
      return obtenerFechaReporteIncidencia(inc) === normalizarFechaISO(fecha);
    });

    // En Consulta de fechas se separa día laboral por día laboral.
    // Para rangos largos no se agrega tarjeta vacía por cada día sin ausencias, para no saturar la pantalla.
    container.insertAdjacentHTML("beforeend", crearSeparadorFechaReporte(fecha));

    delDia.forEach(function(incidencia) {
      totalMostradas += 1;
      // Consulta de fechas es operativa: no muestra Ver detalle y no muestra periodo dentro de la tarjeta.
      container.appendChild(crearCardIncidencia(incidencia, false, { ocultarPeriodo: true }));
    });
  });

  if (totalMostradas === 0) {
    container.insertAdjacentHTML("beforeend", crearTarjetaSimple("Sin incidencias", "No existen ausencias reales en este intervalo."));
  }

  inicializarIconos();
}

function abrirEstadisticaMensual() {
  document.getElementById("statMes").value = ""; document.getElementById("statAnio").value = new Date().getFullYear();
  document.getElementById("statMonthResults").innerHTML = ""; document.getElementById("statMonthStatus").className = "status-box";
  showScreen("statMonthScreen");
}

function consultarEstadisticaMensual() {
  const mes = document.getElementById("statMes").value;
  const anio = document.getElementById("statAnio").value;
  const status = document.getElementById("statMonthStatus");

  if (!mes) { alert("Seleccione el mes a analizar."); return; }
  if (!anio || anio < 2020 || anio > 2100) { alert("Introduzca un año válido."); return; }

  status.className = "status-box show";
  status.textContent = "Generando estadística...";

  // SEC2_FIX_ESTADISTICA_PERMISO_OFICIAL_SOLO_FECHAS_OFICIALES_V16_20260710
  // Primero usamos la RPC mensual porque Supabase conoce las tres fechas oficiales reales.
  // Las fechas de uso NO cuentan para estadística.
  API.obtenerEstadisticaMensual(selectedPersonID, mes, anio, function(res) {
    status.className = "status-box";
    const estadistica = construirEstadisticaMensualDesdeRespuesta(res, Number(mes), Number(anio));
    renderEstadisticaMensualTipoPermiso(estadistica);
  }, function(errorRpc) {
    console.warn("No se pudo obtener estadística mensual por RPC. Se reconstruirá desde historial:", errorRpc);

    API.obtenerHistorialPersona(selectedPersonID, "todas", function(historial) {
      status.className = "status-box";
      const estadistica = construirEstadisticaMensualDesdeHistorial(historial, Number(mes), Number(anio));
      renderEstadisticaMensualTipoPermiso(estadistica);
    }, function(errorHistorial) {
      status.className = "status-box show error";
      status.textContent = obtenerMensajeError(errorHistorial || errorRpc);
    });
  });
}

function construirEstadisticaMensualDesdeHistorial(respuesta, mes, anio) {
  const persona = respuesta && respuesta.persona ? respuesta.persona : {};
  const incidencias = Array.isArray(respuesta && respuesta.incidencias) ? respuesta.incidencias : [];
  const inicioMes = new Date(anio, mes - 1, 1);
  const finMes = new Date(anio, mes, 0);

  const tipos = crearConteoTiposEstadistica();
  let totalDias = 0;

  incidencias.forEach(function(incidencia) {
    const clave = claveTipoIncidencia(incidencia.TipoIncidencia || incidencia.tipo || incidencia.tipo_incidencia || "Especial");

    if (clave === "permisoOficial") {
      // Para permiso oficial SOLO cuentan las tres fechas oficiales autorizadas.
      // Las fechas de uso son control interno y nunca se suman a estadística.
      const fechasOficiales = [
        incidencia.FechaOficial1 || incidencia.fecha_oficial_1 || incidencia.fechaOficial1,
        incidencia.FechaOficial2 || incidencia.fecha_oficial_2 || incidencia.fechaOficial2,
        incidencia.FechaOficial3 || incidencia.fecha_oficial_3 || incidencia.fechaOficial3
      ].map(parseFechaLocal).filter(Boolean);

      const diasOficialesMes = fechasOficiales.filter(function(fecha) {
        return fecha >= inicioMes && fecha <= finMes && esDiaHabil(fecha);
      }).length;

      if (diasOficialesMes > 0 && tipos[clave]) {
        tipos[clave].incidencias += 1;
        tipos[clave].dias += diasOficialesMes;
        totalDias += diasOficialesMes;
      }
      return;
    }

    const fechaInicio = parseFechaLocal(incidencia.FechaInicio || incidencia.fecha_inicio || incidencia.fechaInicio);
    const fechaFin = parseFechaLocal(incidencia.FechaFin || incidencia.fecha_fin || incidencia.fechaFin || incidencia.FechaInicio || incidencia.fecha_inicio || incidencia.fechaInicio);

    if (!fechaInicio || !fechaFin) return;
    if (fechaFin < inicioMes || fechaInicio > finMes) return;

    const desde = fechaInicio < inicioMes ? inicioMes : fechaInicio;
    const hasta = fechaFin > finMes ? finMes : fechaFin;
    const dias = contarDiasHabilesEntre(desde, hasta);
    if (dias <= 0) return;

    if (tipos[clave]) {
      tipos[clave].incidencias += 1;
      tipos[clave].dias += dias;
      totalDias += dias;
    }
  });

  return {
    persona: persona,
    mes: mes,
    anio: anio,
    fechaInicio: `${anio}-${String(mes).padStart(2, "0")}-01`,
    fechaFin: `${anio}-${String(mes).padStart(2, "0")}-${String(finMes.getDate()).padStart(2, "0")}`,
    totalDias: totalDias,
    tipos: Object.values(tipos)
  };
}

function construirEstadisticaMensualDesdeRespuesta(res, mes, anio) {
  const persona = res && res.persona ? res.persona : {};
  const finMes = new Date(anio, mes, 0);
  const tipos = crearConteoTiposEstadistica();
  const datos = Array.isArray(res && res.datos) ? res.datos : [];

  datos.forEach(function(item) {
    const tipo = item.tipo || item.TipoIncidencia || item.nombre || item.tipo_incidencia || "";
    const clave = claveTipoIncidencia(tipo);
    if (!tipos[clave]) return;

    const cantidad = numeroEnteroSeguro(item.dias ?? item.cantidad ?? item.total ?? item.valor ?? 0);
    const incidencias = numeroEnteroSeguro(item.incidencias ?? item.registros ?? item.permisos ?? (cantidad > 0 ? 1 : 0));
    tipos[clave].dias += cantidad;
    tipos[clave].incidencias += incidencias;
  });

  return {
    persona: persona,
    mes: mes,
    anio: anio,
    fechaInicio: (res && res.fechaInicio) || `${anio}-${String(mes).padStart(2, "0")}-01`,
    fechaFin: (res && res.fechaFin) || `${anio}-${String(mes).padStart(2, "0")}-${String(finMes.getDate()).padStart(2, "0")}`,
    totalDias: Object.values(tipos).reduce(function(sum, item) { return sum + item.dias; }, 0),
    tipos: Object.values(tipos)
  };
}

function crearConteoTiposEstadistica() {
  return {
    permisoOficial: { clave: "permisoOficial", nombre: "Permiso oficial", color: "purple", icono: "permiso-oficial", incidencias: 0, dias: 0 },
    incapacidad: { clave: "incapacidad", nombre: "Incapacidad", color: "blue", icono: "incapacidad", incidencias: 0, dias: 0 },
    humanitarioSindical: { clave: "humanitarioSindical", nombre: "Humanitario sindical", color: "green", icono: "humanitario-sindical", incidencias: 0, dias: 0 },
    humanitarioOficial: { clave: "humanitarioOficial", nombre: "Humanitario oficial", color: "orange", icono: "humanitario-oficial", incidencias: 0, dias: 0 },
    comisionSindical: { clave: "comisionSindical", nombre: "Comisión sindical", color: "purple-soft", icono: "comision-sindical", incidencias: 0, dias: 0 },
    comisionOficial: { clave: "comisionOficial", nombre: "Comisión oficial", color: "blue-soft", icono: "comision-oficial", incidencias: 0, dias: 0 },
    especial: { clave: "especial", nombre: "Especial", color: "gold", icono: "especial", incidencias: 0, dias: 0 }
  };
}

function claveTipoIncidencia(tipo) {
  const texto = normalizarTextoComparacion(tipo);

  if (texto.includes("permiso oficial") || texto.includes("permiso personal")) return "permisoOficial";
  if (texto.includes("incapacidad") || texto.includes("licencia medica")) return "incapacidad";
  if (texto.includes("humanitario sindical")) return "humanitarioSindical";
  if (texto.includes("humanitario oficial")) return "humanitarioOficial";
  if (texto.includes("comision sindical")) return "comisionSindical";
  if (texto.includes("comision oficial") || texto === "comision") return "comisionOficial";
  return "especial";
}

function parseFechaLocal(valor) {
  if (!valor) return null;
  const texto = String(valor).slice(0, 10);
  const partes = texto.split("-");

  if (partes.length === 3) {
    const y = Number(partes[0]);
    const m = Number(partes[1]);
    const d = Number(partes[2]);
    if (y && m && d) return new Date(y, m - 1, d);
  }

  const fecha = new Date(valor);
  return Number.isNaN(fecha.getTime()) ? null : new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}

function renderEstadisticaMensualTipoPermiso(estadistica) {
  const tiposConDatos = estadistica.tipos.filter(function(item) { return item.dias > 0 || item.incidencias > 0; });
  const tipoMasUsado = obtenerTipoMasUsadoEstadistica(estadistica.tipos);
  const maxDias = Math.max(1, ...estadistica.tipos.map(function(item) { return item.dias; }));
  const nombrePersona = `${escapeHTML(estadistica.persona.Nombre || estadistica.persona.nombre || "")} ${escapeHTML(estadistica.persona.Apellidos || estadistica.persona.apellidos || "")}`.trim() || "Docente";

  const html = `
    <article class="data-card">
      <h2 class="data-card-title">${nombrePersona}</h2>
      <p class="data-card-text"><strong>Periodo analizado:</strong> ${formatearFecha(estadistica.fechaInicio)} al ${formatearFecha(estadistica.fechaFin)}</p>
      <p class="data-card-text"><strong>Total de días de incidencia:</strong> ${numeroEnteroSeguro(estadistica.totalDias)}</p>
      <p class="data-card-text"><strong>Tipo de permiso más usado:</strong> ${escapeHTML(tipoMasUsado)}</p>
      <section class="chart-wrap sec2-type-chart-wrap">
        <div class="chart-axis-label">RESUMEN POR TIPO DE INCIDENCIA</div>
        <div class="sec2-type-chart">
          ${estadistica.tipos.map(function(item) { return barraTipoEstadistica(item, maxDias); }).join("")}
        </div>
      </section>
      ${tiposConDatos.length === 0 ? `<p class="section-subtitle" style="margin-top:12px;">No hay incidencias registradas para este mes.</p>` : ""}
    </article>
  `;

  document.getElementById("statMonthResults").innerHTML = html;
  inicializarIconos();
}

function barraTipoEstadistica(item, maxDias) {
  const altura = item.dias > 0 ? Math.max(22, Math.round((item.dias / maxDias) * 150)) : 8;

  return `
    <article class="sec2-type-bar-item">
      <div class="sec2-type-bar-value">${item.dias > 0 ? item.dias : ""}</div>
      <div class="sec2-type-bar solid-${item.color}" style="height:${altura}px;"></div>
      <div class="sec2-type-bar-icon solid-${item.color} sec2-type-icon-unified" data-icon="${item.icono}"></div>
      <div class="sec2-type-bar-label">${escapeHTML(item.nombre)}</div>
    </article>
  `;
}

function obtenerTipoMasUsadoEstadistica(tipos) {
  const ordenados = tipos
    .filter(function(item) { return item.dias > 0 || item.incidencias > 0; })
    .sort(function(a, b) {
      if (b.dias !== a.dias) return b.dias - a.dias;
      return b.incidencias - a.incidencias;
    });

  return ordenados.length ? ordenados[0].nombre : "Sin incidencias";
}


/* =========================================================
   SEC2 PDF — Historial del docente
   Generación local en navegador móvil con jsPDF + autoTable.
   Modelo visual basado en reporte maestro SEC2.
   ========================================================= */

const SEC2_PDF_LOGO_URL = "https://raw.githubusercontent.com/SecSJNA/sec2-app/d810700d427ea454662ff6e4836c4d6431cb8115/logoPng.png";
const SEC2_PDF_ESCUELA = "ESCUELA SECUNDARIA GENERAL No. 2\n“SUPREMA JUNTA NACIONAL AMERICANA”";
const SEC2_PDF_LEMA = "Formación académica integral, comunitaria y humanista";

function debeMostrarBotonPDFHistorial() {
  const rol = String(currentModule || sessionStorage.getItem("currentActiveModule") || "");
  return !profileMode && (rol === "Direccion" || rol === "Correspondencia");
}

async function generarHistorialPDFDocente() {
  if (!selectedPersonID) {
    alert("Primero selecciona un docente.");
    return;
  }

  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("No se cargó la librería PDF. Revisa conexión o recarga la página.");
    return;
  }

  const botonTemporal = document.activeElement;
  const textoOriginal = botonTemporal && botonTemporal.textContent ? botonTemporal.textContent : "";
  try {
    if (botonTemporal && botonTemporal.tagName === "BUTTON") botonTemporal.textContent = "GENERANDO PDF...";

    const respuesta = await obtenerHistorialPersonaPromesaPDF(selectedPersonID);
    await construirYMostrarPDFHistorialDocente(respuesta || {});
  } catch (error) {
    console.error("Error generando PDF SEC2:", error);
    alert("No fue posible generar el PDF: " + obtenerMensajeError(error));
  } finally {
    if (botonTemporal && botonTemporal.tagName === "BUTTON" && textoOriginal) botonTemporal.textContent = textoOriginal;
  }
}

function obtenerHistorialPersonaPromesaPDF(idPersona) {
  return new Promise(function(resolve, reject) {
    API.obtenerHistorialPersona(idPersona, "todas", resolve, reject);
  });
}

async function construirYMostrarPDFHistorialDocente(respuesta) {
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4", compress: true });

  const persona = respuesta.persona || {};
  const incidencias = normalizarIncidenciasPDF(respuesta.incidencias || []);
  const logoData = await cargarImagenPDF(SEC2_PDF_LOGO_URL);
  const metricas = calcularMetricasPDF(incidencias);
  const periodo = obtenerPeriodoPDF(incidencias);

  dibujarEncabezadoPDF(doc, logoData, persona, periodo);
  let y = 118;

  y = dibujarTarjetaDocentePDF(doc, persona, y);
  y = dibujarEstadisticasRapidasPDF(doc, metricas, y + 20);
  y = dibujarTituloSeccionPDF(doc, "HISTORIAL COMPLETO DE INCIDENCIAS", "orden cronológico: más reciente al más antiguo", y + 18);

  const filasTabla = incidencias.map(function(incidencia, idx) {
    const dias = calcularDiasIncidenciaPDF(incidencia);
    return [
      String(idx + 1),
      incidencia.TipoIncidencia || "Especial",
      formatearFechaPDF(incidencia.FechaInicio),
      formatearFechaPDF(incidencia.FechaFin),
      String(dias),
      limpiarTextoPDF(incidencia.Observaciones || ""),
      limpiarTextoPDF(incidencia.Estado || "Activa")
    ];
  });

  if (filasTabla.length === 0) {
    filasTabla.push(["-", "Sin incidencias", "-", "-", "0", "Sin registros en el periodo.", "-"]);
  }

  doc.autoTable({
    startY: y,
    head: [["No.", "TIPO DE INCIDENCIA", "FECHA INICIO", "FECHA FIN", "DÍAS", "OBSERVACIONES", "ESTADO"]],
    body: filasTabla,
    theme: "grid",
    margin: { left: 20, right: 20, top: 112, bottom: 46 },
    styles: {
      font: "helvetica",
      fontSize: 7.6,
      cellPadding: { top: 5, right: 4, bottom: 5, left: 4 },
      valign: "middle",
      textColor: [10, 28, 64],
      lineColor: [218, 226, 238],
      lineWidth: 0.55
    },
    headStyles: {
      fillColor: [5, 31, 89],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center"
    },
    columnStyles: {
      0: { halign: "center", cellWidth: 28 },
      1: { cellWidth: 142, cellPadding: { left: 18, right: 4, top: 5, bottom: 5 } },
      2: { halign: "center", cellWidth: 75 },
      3: { halign: "center", cellWidth: 75 },
      4: { halign: "center", cellWidth: 38 },
      5: { cellWidth: 132 },
      6: { halign: "center", cellWidth: 62 }
    },
    didDrawPage: function() {
      dibujarEncabezadoPDF(doc, logoData, persona, periodo);
    },
    didDrawCell: function(data) {
      if (data.section === "body" && data.column.index === 1) {
        const tipo = filasTabla[data.row.index] ? filasTabla[data.row.index][1] : "";
        const meta = obtenerMetaPDF(tipo);
        dibujarIconoTipoPDF(doc, meta.clave, meta.color, data.cell.x + 6, data.cell.y + data.cell.height / 2 - 4.5, 9);
      }
    }
  });

  y = doc.lastAutoTable.finalY + 14;
  y = asegurarEspacioPDF(doc, y, 160, logoData, persona, periodo);
  y = dibujarResumenTotalPDF(doc, metricas, y);
  y = asegurarEspacioPDF(doc, y + 18, 190, logoData, persona, periodo);
  dibujarGraficoMesesPDF(doc, metricas.meses, y + 10);

  agregarPieYPaginacionPDF(doc);

  const nombreArchivo = crearNombreArchivoPDF(persona);
  abrirPDFEnTelefono(doc, nombreArchivo);
}

function normalizarIncidenciasPDF(incidencias) {
  if (!Array.isArray(incidencias)) return [];
  return incidencias.map(function(i) {
    return {
      IDIncidencia: i.IDIncidencia || i.id || i.id_incidencia || "",
      Folio: i.Folio || i.folio || "",
      TipoIncidencia: i.TipoIncidencia || i.tipo || i.tipo_incidencia || "Especial",
      FechaInicio: i.FechaInicio || i.fecha_inicio || i.fechaInicio || "",
      FechaFin: i.FechaFin || i.fecha_fin || i.fechaFin || i.FechaInicio || i.fecha_inicio || "",
      FechaOficial1: i.FechaOficial1 || i.fecha_oficial_1 || i.fechaOficial1 || "",
      FechaOficial2: i.FechaOficial2 || i.fecha_oficial_2 || i.fechaOficial2 || "",
      FechaOficial3: i.FechaOficial3 || i.fecha_oficial_3 || i.fechaOficial3 || "",
      Observaciones: i.Observaciones || i.observaciones || "",
      Estado: i.Estado || i.estado || "Activa"
    };
  }).sort(function(a, b) {
    return String(b.FechaInicio || "").localeCompare(String(a.FechaInicio || ""));
  });
}

function calcularMetricasPDF(incidencias) {
  const tipos = crearConteoTiposEstadisticaPDF();
  const meses = {};
  let totalDias = 0;

  incidencias.forEach(function(i) {
    const clave = claveTipoIncidencia(i.TipoIncidencia);
    const dias = calcularDiasIncidenciaPDF(i);
    if (tipos[clave]) tipos[clave].conteo += 1;
    totalDias += dias;

    const fechaMes = parseFechaLocalPDF(i.FechaInicio);
    if (fechaMes) {
      const key = `${fechaMes.getFullYear()}-${String(fechaMes.getMonth() + 1).padStart(2, "0")}`;
      meses[key] = (meses[key] || 0) + 1;
    }
  });

  return {
    totalIncidencias: incidencias.length,
    totalDias: totalDias,
    tipos: tipos,
    meses: meses
  };
}

function crearConteoTiposEstadisticaPDF() {
  return {
    permisoOficial: { nombre: "Permiso oficial", color: [109, 40, 217], conteo: 0, icono: "permisoOficial" },
    incapacidad: { nombre: "Incapacidad", color: [11, 99, 229], conteo: 0, icono: "incapacidad" },
    humanitarioSindical: { nombre: "Humanitario sindical", color: [21, 154, 52], conteo: 0, icono: "humanitarioSindical" },
    humanitarioOficial: { nombre: "Humanitario oficial", color: [255, 90, 31], conteo: 0, icono: "humanitarioOficial" },
    comisionSindical: { nombre: "Comisión sindical", color: [139, 73, 223], conteo: 0, icono: "comisionSindical" },
    comisionOficial: { nombre: "Comisión oficial", color: [47, 128, 237], conteo: 0, icono: "comisionOficial" },
    especial: { nombre: "Especial", color: [191, 140, 36], conteo: 0, icono: "especial" }
  };
}

function calcularDiasIncidenciaPDF(incidencia) {
  const clave = claveTipoIncidencia(incidencia.TipoIncidencia || "");
  if (clave === "permisoOficial") {
    const fechas = [incidencia.FechaOficial1, incidencia.FechaOficial2, incidencia.FechaOficial3]
      .map(parseFechaLocalPDF)
      .filter(Boolean)
      .filter(esDiaHabilPDF);
    return fechas.length;
  }

  const inicio = parseFechaLocalPDF(incidencia.FechaInicio);
  const fin = parseFechaLocalPDF(incidencia.FechaFin || incidencia.FechaInicio);
  return contarDiasHabilesPDF(inicio, fin);
}

function obtenerPeriodoPDF(incidencias) {
  const fechas = [];
  incidencias.forEach(function(i) {
    const a = parseFechaLocalPDF(i.FechaInicio);
    const b = parseFechaLocalPDF(i.FechaFin || i.FechaInicio);
    if (a) fechas.push(a);
    if (b) fechas.push(b);
  });
  if (!fechas.length) return { inicio: "Sin registros", fin: "Sin registros" };
  fechas.sort(function(a, b) { return a - b; });
  return { inicio: formatearFechaDatePDF(fechas[0]), fin: formatearFechaDatePDF(fechas[fechas.length - 1]) };
}

function dibujarEncabezadoPDF(doc, logoData, persona, periodo) {
  const w = doc.internal.pageSize.getWidth();
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, w, 108, "F");

  if (logoData) {
    try { doc.addImage(logoData, "PNG", 20, 16, 72, 72); } catch (e) {}
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(5, 31, 89);
  const escuela = SEC2_PDF_ESCUELA.split("\n");
  doc.text(escuela[0], 142, 31);
  doc.text(escuela[1], 142, 48);
  doc.setDrawColor(220, 38, 38);
  doc.setLineWidth(0.8);
  doc.line(142, 64, 378, 64);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.text(SEC2_PDF_LEMA, 171, 80);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("REPORTE DE INCIDENCIAS", w - 24, 23, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.2);
  doc.text("Resumen del docente", w - 24, 36, { align: "right" });
  doc.text("Fecha de generación:", w - 160, 55);
  doc.text(formatearFechaHoraPDF(new Date()), w - 24, 55, { align: "right" });
  doc.text("Periodo del reporte:", w - 160, 70);
  doc.text(`${periodo.inicio} al ${periodo.fin}`, w - 24, 70, { align: "right" });
}

function dibujarTarjetaDocentePDF(doc, persona, y) {
  const w = doc.internal.pageSize.getWidth();
  const x = 20;
  const ancho = w - 40;
  doc.setDrawColor(205, 215, 228);
  doc.setLineWidth(0.7);
  doc.roundedRect(x, y, ancho, 72, 4, 4);
  doc.setFillColor(241, 245, 255);
  doc.circle(x + 38, y + 36, 26, "F");
  dibujarAvatarPersonaPDF(doc, x + 26, y + 22, 24, [80, 80, 255]);

  const nombre = limpiarTextoPDF(`${persona.Nombre || persona.nombre || ""} ${persona.Apellidos || persona.apellidos || ""}`.trim() || "DOCENTE").toUpperCase();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(5, 31, 89);
  doc.text(nombre, x + 84, y + 26);
  doc.setFontSize(8.5);
  doc.text("Turno:", x + 84, y + 45);
  doc.setFont("helvetica", "normal");
  doc.text(TURNOS_TEXTO[persona.Turno] || persona.TurnoNombre || persona.turno_nombre || "Sin dato", x + 124, y + 45);
  doc.setFont("helvetica", "bold");
  doc.text("Puesto / Rol:", x + 184, y + 45);
  doc.setFont("helvetica", "normal");
  doc.text("Docente", x + 240, y + 45);
  doc.setFont("helvetica", "bold");
  doc.text("ID de Acceso:", x + 84, y + 61);
  doc.setFont("helvetica", "normal");
  doc.text(persona.IDAcceso || persona.id_acceso || "", x + 145, y + 61);
  return y + 72;
}

function dibujarEstadisticasRapidasPDF(doc, metricas, y) {
  const w = doc.internal.pageSize.getWidth();
  dibujarTituloSeccionPDF(doc, "ESTADÍSTICAS RÁPIDAS", "", y - 4);
  y += 18;

  const cards = [
    { nombre: "Total\nincidencias", valor: metricas.totalIncidencias, color: [11, 99, 229], icono: "total" },
    { nombre: "Permiso\noficial", valor: metricas.tipos.permisoOficial.conteo, color: metricas.tipos.permisoOficial.color, icono: "permisoOficial" },
    { nombre: "Incapacidad", valor: metricas.tipos.incapacidad.conteo, color: metricas.tipos.incapacidad.color, icono: "incapacidad" },
    { nombre: "Humanitario\nsindical", valor: metricas.tipos.humanitarioSindical.conteo, color: metricas.tipos.humanitarioSindical.color, icono: "humanitarioSindical" },
    { nombre: "Humanitario\noficial", valor: metricas.tipos.humanitarioOficial.conteo, color: metricas.tipos.humanitarioOficial.color, icono: "humanitarioOficial" },
    { nombre: "Comisión\nsindical", valor: metricas.tipos.comisionSindical.conteo, color: metricas.tipos.comisionSindical.color, icono: "comisionSindical" },
    { nombre: "Comisión\noficial", valor: metricas.tipos.comisionOficial.conteo, color: metricas.tipos.comisionOficial.color, icono: "comisionOficial" },
    { nombre: "Especial", valor: metricas.tipos.especial.conteo, color: metricas.tipos.especial.color, icono: "especial" }
  ];

  const x0 = 20;
  const gap = 6;
  const cw = (w - 40 - gap * 7) / 8;
  cards.forEach(function(c, idx) {
    const x = x0 + idx * (cw + gap);
    doc.setDrawColor(216, 225, 238);
    doc.setLineWidth(0.7);
    doc.roundedRect(x, y, cw, 82, 4, 4);
    dibujarIconoTipoPDF(doc, c.icono, c.color, x + cw / 2 - 8, y + 14, 16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.setTextColor(c.color[0], c.color[1], c.color[2]);
    doc.text(String(c.valor), x + cw / 2, y + 51, { align: "center" });
    doc.setFontSize(7.2);
    doc.setTextColor(0, 0, 0);
    const lineas = String(c.nombre).split("\n");
    lineas.forEach(function(linea, i) { doc.text(linea, x + cw / 2, y + 67 + i * 9, { align: "center" }); });
  });
  return y + 82;
}

function dibujarTituloSeccionPDF(doc, titulo, subtitulo, y) {
  const w = doc.internal.pageSize.getWidth();
  doc.setDrawColor(5, 31, 89);
  doc.setLineWidth(0.7);
  doc.line(20, y + 10, 224, y + 10);
  doc.line(w - 224, y + 10, w - 20, y + 10);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.2);
  doc.setTextColor(5, 31, 89);
  doc.text(titulo, w / 2, y + 13, { align: "center" });
  if (subtitulo) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.6);
    doc.text(`(${subtitulo})`, w / 2, y + 24, { align: "center" });
    return y + 28;
  }
  return y + 18;
}

function dibujarResumenTotalPDF(doc, metricas, y) {
  const w = doc.internal.pageSize.getWidth();
  const x = 20;
  const ancho = w - 40;
  doc.setDrawColor(205, 215, 228);
  doc.setLineWidth(0.7);
  doc.roundedRect(x, y, ancho, 54, 4, 4);
  dibujarIconoTipoPDF(doc, "total", [5, 31, 89], x + 22, y + 15, 24);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(5, 31, 89);
  doc.text("RESUMEN TOTAL\nDEL PERIODO", x + 58, y + 23);
  doc.setDrawColor(205, 215, 228);
  doc.line(x + ancho / 3, y + 10, x + ancho / 3, y + 44);
  doc.line(x + (ancho / 3) * 2, y + 10, x + (ancho / 3) * 2, y + 44);
  doc.text("TOTAL DE PERMISOS", x + ancho / 2, y + 20, { align: "center" });
  doc.setFontSize(17);
  doc.text(String(metricas.totalIncidencias), x + ancho / 2, y + 38, { align: "center" });
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text("incidencias", x + ancho / 2, y + 49, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("TOTAL DE DÍAS DE INCIDENCIA", x + ancho * 5 / 6, y + 20, { align: "center" });
  doc.setFontSize(17);
  doc.text(String(metricas.totalDias), x + ancho * 5 / 6, y + 38, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text("días", x + ancho * 5 / 6, y + 49, { align: "center" });
  return y + 54;
}

function dibujarGraficoMesesPDF(doc, meses, y) {
  const w = doc.internal.pageSize.getWidth();
  const x = 50;
  const ancho = w - 100;
  const alto = 124;
  const entries = Object.keys(meses).sort().map(function(k) { return { key: k, valor: meses[k] }; });
  if (!entries.length) entries.push({ key: "Sin", valor: 0 });
  const max = Math.max(1, ...entries.map(function(e) { return e.valor; }));
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(5, 31, 89);
  doc.text("RESUMEN POR MESES (número de incidencias)", w / 2, y, { align: "center" });
  doc.setDrawColor(220, 225, 232);
  doc.setLineWidth(0.7);
  doc.line(x, y + alto, x + ancho, y + alto);
  doc.line(x, y + 16, x, y + alto);

  const colores = [[109,40,217], [21,154,52], [11,99,229], [255,90,31], [21,154,52], [255,90,31], [109,40,217], [220,38,38]];
  const gap = Math.min(26, ancho / entries.length * 0.35);
  const bw = Math.max(14, Math.min(36, (ancho - gap * (entries.length + 1)) / entries.length));
  entries.forEach(function(e, idx) {
    const bx = x + gap + idx * (bw + gap);
    const bh = e.valor > 0 ? Math.max(8, (e.valor / max) * 84) : 2;
    const c = colores[idx % colores.length];
    doc.setFillColor(c[0], c[1], c[2]);
    doc.roundedRect(bx, y + alto - bh, bw, bh, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(5, 31, 89);
    if (e.valor > 0) doc.text(String(e.valor), bx + bw / 2, y + alto - bh - 5, { align: "center" });
    doc.setFont("helvetica", "normal");
    const etiqueta = etiquetaMesPDF(e.key);
    doc.text(etiqueta[0], bx + bw / 2, y + alto + 12, { align: "center" });
    if (etiqueta[1]) doc.text(etiqueta[1], bx + bw / 2, y + alto + 22, { align: "center" });
  });
}

function dibujarIconoTipoPDF(doc, clave, color, x, y, s) {
  doc.setFillColor(color[0], color[1], color[2]);
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.setLineWidth(Math.max(1, s * 0.09));

  if (clave === "permisoOficial") {
    doc.roundedRect(x + s * 0.10, y + s * 0.18, s * 0.78, s * 0.70, s * 0.10, s * 0.10, "F");
    doc.rect(x + s * 0.28, y + s * 0.46, s * 0.14, s * 0.14, "F");
    doc.rect(x + s * 0.50, y + s * 0.46, s * 0.14, s * 0.14, "F");
    return;
  }
  if (clave === "incapacidad") {
    doc.triangle(x + s / 2, y, x + s * 0.90, y + s * 0.22, x + s * 0.80, y + s * 0.78, "F");
    doc.triangle(x + s / 2, y, x + s * 0.10, y + s * 0.22, x + s * 0.20, y + s * 0.78, "F");
    doc.triangle(x + s * 0.20, y + s * 0.78, x + s * 0.80, y + s * 0.78, x + s / 2, y + s, "F");
    return;
  }
  if (clave === "humanitarioSindical") {
    doc.circle(x + s * 0.50, y + s * 0.28, s * 0.18, "F");
    doc.circle(x + s * 0.25, y + s * 0.39, s * 0.13, "F");
    doc.circle(x + s * 0.75, y + s * 0.39, s * 0.13, "F");
    doc.roundedRect(x + s * 0.22, y + s * 0.56, s * 0.56, s * 0.34, s * 0.08, s * 0.08, "F");
    return;
  }
  if (clave === "humanitarioOficial") {
    doc.ellipse(x + s * 0.50, y + s * 0.48, s * 0.42, s * 0.30, "F");
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(Math.max(1.5, s * 0.13));
    doc.arc(x + s * 0.50, y + s * 0.44, s * 0.22, s * 0.18, 20, 160);
    return;
  }
  if (clave === "comisionSindical") {
    dibujarEstrellaPDF(doc, x + s / 2, y + s * 0.42, s * 0.42, color);
    doc.setFillColor(color[0], color[1], color[2]);
    doc.triangle(x + s * 0.28, y + s * 0.95, x + s * 0.72, y + s * 0.95, x + s * 0.50, y + s * 0.62, "F");
    return;
  }
  if (clave === "comisionOficial") {
    doc.roundedRect(x + s * 0.12, y + s * 0.32, s * 0.76, s * 0.52, s * 0.08, s * 0.08, "F");
    doc.roundedRect(x + s * 0.33, y + s * 0.16, s * 0.34, s * 0.18, s * 0.03, s * 0.03, "F");
    return;
  }
  if (clave === "especial") {
    dibujarEstrellaPDF(doc, x + s / 2, y + s / 2, s * 0.46, color);
    return;
  }
  if (clave === "total") {
    doc.roundedRect(x + s * 0.15, y + s * 0.08, s * 0.70, s * 0.84, s * 0.08, s * 0.08, "S");
    doc.line(x + s * 0.32, y + s * 0.32, x + s * 0.72, y + s * 0.32);
    doc.line(x + s * 0.32, y + s * 0.50, x + s * 0.72, y + s * 0.50);
    doc.line(x + s * 0.32, y + s * 0.68, x + s * 0.72, y + s * 0.68);
  }
}

function dibujarEstrellaPDF(doc, cx, cy, r, color) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const ang = -Math.PI / 2 + i * Math.PI / 5;
    const rr = i % 2 === 0 ? r : r * 0.45;
    pts.push([cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr]);
  }
  doc.setFillColor(color[0], color[1], color[2]);
  doc.triangle(pts[0][0], pts[0][1], pts[1][0], pts[1][1], pts[2][0], pts[2][1], "F");
  doc.lines(pts.slice(1).map(function(p, i) { return [p[0] - pts[i][0], p[1] - pts[i][1]]; }), pts[0][0], pts[0][1], [1, 1], "F", true);
}

function dibujarAvatarPersonaPDF(doc, x, y, s, color) {
  doc.setFillColor(color[0], color[1], color[2]);
  doc.circle(x + s / 2, y + s * 0.30, s * 0.18, "F");
  doc.roundedRect(x + s * 0.18, y + s * 0.58, s * 0.64, s * 0.30, s * 0.10, s * 0.10, "F");
}

function obtenerMetaPDF(tipo) {
  const clave = claveTipoIncidencia(tipo);
  const tipos = crearConteoTiposEstadisticaPDF();
  const item = tipos[clave] || tipos.especial;
  return { clave: item.icono, color: item.color };
}

function asegurarEspacioPDF(doc, y, alto, logoData, persona, periodo) {
  const h = doc.internal.pageSize.getHeight();
  if (y + alto > h - 52) {
    doc.addPage();
    dibujarEncabezadoPDF(doc, logoData, persona, periodo);
    return 118;
  }
  return y;
}

function agregarPieYPaginacionPDF(doc) {
  const total = doc.internal.getNumberOfPages();
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setDrawColor(220, 38, 38);
    doc.setLineWidth(0.8);
    doc.line(20, h - 30, w - 20, h - 30);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.setTextColor(5, 31, 89);
    doc.text(`“${SEC2_PDF_LEMA}”`, w / 2, h - 16, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(`Página ${i}/${total}`, w - 24, 92, { align: "right" });
  }
}

function abrirPDFEnTelefono(doc, nombreArchivo) {
  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const nueva = window.open(url, "_blank");
  if (!nueva) {
    doc.save(nombreArchivo);
  }
  setTimeout(function() { URL.revokeObjectURL(url); }, 60000);
}

function crearNombreArchivoPDF(persona) {
  const nombre = limpiarTextoPDF(`${persona.Nombre || persona.nombre || ""}_${persona.Apellidos || persona.apellidos || ""}`.trim())
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_\-]/g, "");
  return `SEC2_historial_${nombre || "docente"}.pdf`;
}

function cargarImagenPDF(url) {
  return new Promise(function(resolve) {
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function() {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } catch (e) { resolve(null); }
      };
      img.onerror = function() { resolve(null); };
      img.src = url;
    } catch (e) { resolve(null); }
  });
}

function parseFechaLocalPDF(valor) {
  if (!valor) return null;
  const texto = String(valor).slice(0, 10);
  const partes = texto.split("-");
  if (partes.length === 3) {
    const y = Number(partes[0]);
    const m = Number(partes[1]);
    const d = Number(partes[2]);
    if (y && m && d) return new Date(y, m - 1, d);
  }
  const fecha = new Date(valor);
  return Number.isNaN(fecha.getTime()) ? null : new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}

function esDiaHabilPDF(fecha) {
  if (!fecha) return false;
  const dia = fecha.getDay();
  return dia !== 0 && dia !== 6;
}

function contarDiasHabilesPDF(inicio, fin) {
  if (!inicio || !fin || fin < inicio) return 0;
  let total = 0;
  const cursor = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate());
  const limite = new Date(fin.getFullYear(), fin.getMonth(), fin.getDate());
  while (cursor <= limite) {
    if (esDiaHabilPDF(cursor)) total += 1;
    cursor.setDate(cursor.getDate() + 1);
  }
  return total;
}

function formatearFechaPDF(valor) {
  const fecha = parseFechaLocalPDF(valor);
  return fecha ? formatearFechaDatePDF(fecha) : "-";
}

function formatearFechaDatePDF(fecha) {
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const dia = String(fecha.getDate()).padStart(2, "0");
  return `${dia}/${meses[fecha.getMonth()]}/${fecha.getFullYear()}`;
}

function formatearFechaHoraPDF(fecha) {
  const f = fecha instanceof Date ? fecha : new Date(fecha);
  const fechaTxt = formatearFechaDatePDF(f);
  const hora = f.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
  return `${fechaTxt}   ${hora}`;
}

function etiquetaMesPDF(key) {
  const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const partes = String(key).split("-");
  if (partes.length !== 2) return [key, ""];
  return [meses[Number(partes[1]) - 1] || partes[1], partes[0]];
}

function limpiarTextoPDF(valor) {
  return String(valor || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function obtenerMensajeError(err) {
  return err.message || err;
}

