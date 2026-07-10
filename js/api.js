/* =========================================================
   SEC2 API — Supabase V10
   SEC2_API_V10_RPC_GUARDAR_DETALLE_ELIMINAR_20260709
   Compatible con app.js actual
   ========================================================= */

const SEC2_API = (() => {
  function getClient() {
    if (!window.sec2Supabase) {
      throw new Error("Cliente Supabase no inicializado. Revisa config.js y supabase.js.");
    }
    return window.sec2Supabase;
  }

  async function rpc(nombreFuncion, parametros = {}) {
    const supabase = getClient();
    const { data, error } = await supabase.rpc(nombreFuncion, parametros);

    if (error) {
      throw new Error(error.message || "Error consultando Supabase.");
    }

    return data;
  }

  function normalizarTexto(valor) {
    return valor === null || valor === undefined ? "" : String(valor).trim();
  }

  function normalizarRolFrontend(rolClave) {
    const clave = normalizarTexto(rolClave).toLowerCase();

    if (clave === "direccion" || clave === "dirección") return "Direccion";
    if (clave === "correspondencia") return "Correspondencia";
    if (clave === "prefectura") return "Prefectura";
    if (clave === "docente") return "Docente";

    return normalizarTexto(rolClave);
  }

  function idSesion() {
    return sessionStorage.getItem("userIDAcceso") || "";
  }

  function valorFechaONull(valor) {
    const texto = normalizarTexto(valor);
    return texto ? texto : null;
  }

  function extraerRespuestaRpc(resultado) {
    const fila = Array.isArray(resultado) ? resultado[0] : resultado;
    return fila || null;
  }

  function normalizarRespuestaGuardado(resultado) {
    const fila = extraerRespuestaRpc(resultado);

    if (!fila) {
      throw new Error("No se recibió respuesta de Supabase al guardar la incidencia.");
    }

    if (fila.success === false) {
      throw new Error(fila.error || "No fue posible guardar la incidencia.");
    }

    const id = fila.IDIncidencia || fila.idIncidencia || fila.id_incidencia || fila.incidencia_id || fila.id || fila.Folio || fila.folio;

    return {
      success: true,
      IDIncidencia: id,
      idIncidencia: id,
      id_incidencia: id,
      Folio: fila.Folio || fila.folio || "",
      folio: fila.folio || fila.Folio || "",
      raw: fila
    };
  }

  function normalizarRespuestaDetalle(resultado) {
    const fila = extraerRespuestaRpc(resultado);

    if (!fila) {
      throw new Error("No se recibió detalle de la incidencia.");
    }

    if (fila.success === false) {
      throw new Error(fila.error || "No fue posible obtener el detalle de la incidencia.");
    }

    return {
      incidencia: fila.incidencia || fila.Incidencia || fila,
      puedeEditar: Boolean(fila.puedeEditar || fila.puede_editar),
      puedeEliminar: Boolean(fila.puedeEliminar || fila.puede_eliminar)
    };
  }

  async function iniciarSesionAsync(idAcceso, contrasena) {
    const resultado = await rpc("iniciar_sesion_sec2", {
      p_id_acceso: normalizarTexto(idAcceso),
      p_password: normalizarTexto(contrasena)
    });

    const fila = extraerRespuestaRpc(resultado);

    if (!fila) {
      return { success: false, error: "No se recibió respuesta del servidor." };
    }

    if (!fila.success) {
      return { success: false, error: fila.error || "No fue posible iniciar sesión." };
    }

    const apellidos = [fila.apellido_paterno, fila.apellido_materno]
      .filter(Boolean)
      .join(" ");

    return {
      success: true,
      data: {
        ID: fila.usuario_id,
        IDAcceso: fila.id_acceso,
        Nombre: fila.nombre,
        Apellidos: apellidos,
        NombreCompleto: fila.nombre_completo,
        Correo: fila.correo,
        Rol: normalizarRolFrontend(fila.rol_clave || fila.rol_nombre),
        RolNombre: fila.rol_nombre,
        Turno: fila.turno_clave,
        TurnoNombre: fila.turno_nombre,
        Activo: fila.activo
      }
    };
  }

  async function obtenerUsuariosParaFormularioAsync() {
    return await rpc("obtener_usuarios_para_formulario_sec2", {
      p_id_acceso_sesion: idSesion()
    });
  }

  async function obtenerResumenPersonaAsync(idAccesoPersona) {
    return await rpc("obtener_resumen_persona_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_acceso_persona: normalizarTexto(idAccesoPersona)
    });
  }

  async function obtenerHistorialPersonaAsync(idAccesoPersona, filtro) {
    return await rpc("obtener_historial_persona_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_acceso_persona: normalizarTexto(idAccesoPersona),
      p_filtro: normalizarTexto(filtro || "todas")
    });
  }

  async function obtenerReporteDiaAsync() {
    return await rpc("obtener_reporte_dia_sec2", {
      p_id_acceso_sesion: idSesion()
    });
  }

  async function obtenerReporteSemanalAsync() {
    return await rpc("obtener_reporte_semanal_sec2", {
      p_id_acceso_sesion: idSesion()
    });
  }

  async function consultarFechasAsync(datos) {
    return await rpc("consultar_fechas_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_fecha_inicio: datos.FechaInicio,
      p_fecha_fin: datos.FechaFin
    });
  }

  async function obtenerEstadisticaMensualAsync(idAccesoPersona, mes, anio) {
    return await rpc("obtener_estadistica_mensual_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_acceso_persona: normalizarTexto(idAccesoPersona),
      p_mes: Number(mes),
      p_anio: Number(anio)
    });
  }

  async function guardarIncidenciaAsync(datos) {
    const resultado = await rpc("guardar_incidencia_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_acceso_persona: normalizarTexto(datos.IDUsuario),
      p_tipo_incidencia: normalizarTexto(datos.TipoIncidencia),
      p_fecha_inicio: valorFechaONull(datos.FechaInicio),
      p_fecha_fin: valorFechaONull(datos.FechaFin),
      p_licencia_medica: normalizarTexto(datos.LicenciaMedica),
      p_observaciones: normalizarTexto(datos.Observaciones),
      p_registrado_por: normalizarTexto(datos.RegistradoPor || idSesion()),
      p_fecha_oficial_1: valorFechaONull(datos.FechaOficial1),
      p_fecha_oficial_2: valorFechaONull(datos.FechaOficial2),
      p_fecha_oficial_3: valorFechaONull(datos.FechaOficial3),
      p_uso_1_fecha: valorFechaONull(datos.Uso1Fecha),
      p_uso_2_fecha: valorFechaONull(datos.Uso2Fecha),
      p_uso_3_fecha: valorFechaONull(datos.Uso3Fecha)
    });

    return normalizarRespuestaGuardado(resultado);
  }

  async function obtenerDetalleIncidenciaAsync(idIncidencia) {
    const resultado = await rpc("obtener_detalle_incidencia_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_incidencia: normalizarTexto(idIncidencia)
    });

    return normalizarRespuestaDetalle(resultado);
  }

  async function eliminarIncidenciaAsync(idIncidencia) {
    const resultado = await rpc("eliminar_incidencia_sec2", {
      p_id_acceso_sesion: idSesion(),
      p_id_incidencia: normalizarTexto(idIncidencia)
    });

    const fila = extraerRespuestaRpc(resultado);

    if (!fila) {
      throw new Error("No se recibió respuesta de Supabase al eliminar la incidencia.");
    }

    if (fila.success === false) {
      throw new Error(fila.error || "No fue posible eliminar la incidencia.");
    }

    return fila;
  }

  return {
    rpc,
    iniciarSesionAsync,
    obtenerUsuariosParaFormularioAsync,
    obtenerResumenPersonaAsync,
    obtenerHistorialPersonaAsync,
    obtenerReporteDiaAsync,
    obtenerReporteSemanalAsync,
    consultarFechasAsync,
    obtenerEstadisticaMensualAsync,
    guardarIncidenciaAsync,
    obtenerDetalleIncidenciaAsync,
    eliminarIncidenciaAsync
  };
})();

/* =========================================================
   API compatible con el sistema anterior
   ========================================================= */

const API = {
  iniciarSesion: function(idAcceso, contrasena, onSuccess, onFailure) {
    SEC2_API.iniciarSesionAsync(idAcceso, contrasena)
      .then(function(respuesta) {
        if (respuesta.success) {
          if (typeof onSuccess === "function") onSuccess(respuesta.data);
        } else {
          if (typeof onFailure === "function") onFailure(respuesta.error);
        }
      })
      .catch(function(error) {
        if (typeof onFailure === "function") onFailure(error.message || "Error al iniciar sesión.");
      });
  },

  obtenerSesionActual: function() {
    return {
      idAccesoSesion: sessionStorage.getItem("userIDAcceso") || "",
      rolSesion: sessionStorage.getItem("userRol") || "",
      modulo: sessionStorage.getItem("currentActiveModule") || ""
    };
  },

  cerrarSesionLocal: function() {
    sessionStorage.clear();
  },

  obtenerUsuariosParaFormulario: function(onSuccess, onFailure) {
    SEC2_API.obtenerUsuariosParaFormularioAsync()
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data || []); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerResumenPersona: function(idAccesoPersona, onSuccess, onFailure) {
    SEC2_API.obtenerResumenPersonaAsync(idAccesoPersona)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerHistorialPersona: function(idAccesoPersona, filtro, onSuccess, onFailure) {
    SEC2_API.obtenerHistorialPersonaAsync(idAccesoPersona, filtro)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerReporteDia: function(onSuccess, onFailure) {
    SEC2_API.obtenerReporteDiaAsync()
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerReporteSemanal: function(onSuccess, onFailure) {
    SEC2_API.obtenerReporteSemanalAsync()
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  consultarFechas: function(datos, onSuccess, onFailure) {
    SEC2_API.consultarFechasAsync(datos)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerEstadisticaMensual: function(idAccesoPersona, mes, anio, onSuccess, onFailure) {
    SEC2_API.obtenerEstadisticaMensualAsync(idAccesoPersona, mes, anio)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  guardarIncidencia: function(datos, onSuccess, onFailure) {
    SEC2_API.guardarIncidenciaAsync(datos)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerDetalleIncidencia: function(idIncidencia, onSuccess, onFailure) {
    SEC2_API.obtenerDetalleIncidenciaAsync(idIncidencia)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  guardarUsosPermisoOficial: function(idIncidencia, datos, onSuccess, onFailure) {
    if (typeof onFailure === "function") onFailure("Uso de permisos oficiales aún no migrado a Supabase.");
  },

  eliminarIncidencia: function(idIncidencia, onSuccess, onFailure) {
    SEC2_API.eliminarIncidenciaAsync(idIncidencia)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  obtenerNotificacionesUsuario: function(onSuccess, onFailure) {
    if (typeof onSuccess === "function") onSuccess({ notificaciones: [] });
  },

  obtenerDetalleNotificacion: function(idNotificacion, onSuccess, onFailure) {
    if (typeof onFailure === "function") onFailure("Notificaciones aún no migradas a Supabase.");
  },

  guardarNotificacion: function(datos, onSuccess, onFailure) {
    if (typeof onFailure === "function") onFailure("Enviar notificaciones aún no migrado a Supabase.");
  },

  obtenerNotificacionesEnviadas: function(onSuccess, onFailure) {
    if (typeof onSuccess === "function") onSuccess({ notificaciones: [] });
  }
};

window.SEC2_API = SEC2_API;
window.API = API;
