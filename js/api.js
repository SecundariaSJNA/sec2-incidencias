/* =========================================================
   SEC2 API — Supabase V6
   Capa compatible con app.js / incidencias.js / reportes.js

   Cambio V5:
   - Corrige guardado directo según error real de Supabase.
   - Ya no inserta columnas no existentes: estado, fecha_oficial_1/2/3 ni uso_1/2/3.
   - Prueba varios nombres de columnas para adaptarse al esquema real de incidencias.
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

  function valorONull(valor) {
    const texto = normalizarTexto(valor);
    return texto ? texto : null;
  }

  function fechaONull(valor) {
    const texto = normalizarTexto(valor);
    return texto ? texto : null;
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

  function generarIDIncidenciaTemporal() {
    const fecha = new Date();
    const yyyy = fecha.getFullYear();
    const mm = String(fecha.getMonth() + 1).padStart(2, "0");
    const dd = String(fecha.getDate()).padStart(2, "0");
    const hh = String(fecha.getHours()).padStart(2, "0");
    const mi = String(fecha.getMinutes()).padStart(2, "0");
    const ss = String(fecha.getSeconds()).padStart(2, "0");
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `INC-${yyyy}${mm}${dd}-${hh}${mi}${ss}-${rand}`;
  }

  function esPermisoOficial(datos) {
    const tipo = normalizarTexto(datos && datos.TipoIncidencia).toLowerCase();
    return tipo === "permiso oficial";
  }

  function normalizarIncidenciaParaRPC(datos) {
    const d = datos || {};
    const oficial = esPermisoOficial(d);

    /*
      SEC2_FIX_RPC_GUARDAR_V5_20260709
      La función RPC aún no existe en Supabase o no coincide con la firma.
      Usamos una firma mínima para no seguir enviando parámetros de columnas
      que el esquema real no tiene: fecha_oficial_1/2/3 ni uso_1/2/3.
    */
    return {
      p_id_acceso_sesion: idSesion(),
      p_id_acceso_persona: normalizarTexto(d.IDUsuario),
      p_tipo_incidencia: normalizarTexto(d.TipoIncidencia),
      p_fecha_inicio: oficial ? fechaONull(d.FechaOficial1 || d.FechaInicio) : fechaONull(d.FechaInicio),
      p_fecha_fin: oficial ? fechaONull(d.FechaOficial3 || d.FechaOficial2 || d.FechaOficial1 || d.FechaFin) : fechaONull(d.FechaFin),
      p_licencia_medica: valorONull(d.LicenciaMedica),
      p_observaciones: valorONull(d.Observaciones),
      p_registrado_por: normalizarTexto(d.RegistradoPor || idSesion())
    };
  }

  function validarDatosIncidencia(datos) {
    const d = datos || {};

    if (!normalizarTexto(d.IDUsuario)) {
      throw new Error("Seleccione el docente afectado.");
    }

    if (!normalizarTexto(d.TipoIncidencia)) {
      throw new Error("Seleccione el tipo de incidencia.");
    }

    if (esPermisoOficial(d)) {
      if (!fechaONull(d.FechaOficial1) && !fechaONull(d.FechaOficial2) && !fechaONull(d.FechaOficial3)) {
        throw new Error("Capture al menos una fecha oficial autorizada.");
      }
      return;
    }

    if (!fechaONull(d.FechaInicio) || !fechaONull(d.FechaFin)) {
      throw new Error("Capture fecha inicio y fecha fin.");
    }

    if (fechaONull(d.FechaInicio) > fechaONull(d.FechaFin)) {
      throw new Error("La fecha inicio no puede ser posterior a la fecha fin.");
    }
  }

  function normalizarRespuestaGuardado(respuesta, idRespaldo) {
    const fila = Array.isArray(respuesta) ? respuesta[0] : respuesta;

    if (!fila) {
      return {
        success: true,
        IDIncidencia: idRespaldo,
        incidencia: { IDIncidencia: idRespaldo }
      };
    }

    if (fila.success === false) {
      throw new Error(fila.error || "No fue posible guardar la incidencia.");
    }

    const id = fila.IDIncidencia || fila.idIncidencia || fila.id_incidencia || fila.incidencia_id || fila.id || idRespaldo;

    return {
      success: true,
      IDIncidencia: id,
      incidencia: Object.assign({}, fila, { IDIncidencia: id })
    };
  }

  function normalizarIncidenciaDesdeBD(fila) {
    if (!fila) return null;

    return {
      IDIncidencia: fila.IDIncidencia || fila.idIncidencia || fila.id_incidencia || fila.incidencia_id || fila.id || "",
      IDUsuario: fila.IDUsuario || fila.idUsuario || fila.id_usuario || fila.id_acceso_persona || fila.usuario_id || "",
      Nombre: fila.Nombre || fila.nombre || fila.usuario_nombre || "",
      Apellidos: fila.Apellidos || fila.apellidos || fila.usuario_apellidos || "",
      Correo: fila.Correo || fila.correo || "",
      Rol: fila.Rol || fila.rol || "",
      Turno: fila.Turno || fila.turno || fila.turno_clave || "",
      TipoIncidencia: fila.TipoIncidencia || fila.tipoIncidencia || fila.tipo_incidencia || fila.tipo || "",
      FechaInicio: fila.FechaInicio || fila.fechaInicio || fila.fecha_inicio || "",
      FechaFin: fila.FechaFin || fila.fechaFin || fila.fecha_fin || "",
      LicenciaMedica: fila.LicenciaMedica || fila.licenciaMedica || fila.licencia_medica || "",
      Observaciones: fila.Observaciones || fila.observaciones || "",
      RegistradoPor: fila.RegistradoPor || fila.registradoPor || fila.registrado_por || "",
      FechaRegistro: fila.FechaRegistro || fila.fechaRegistro || fila.fecha_registro || fila.created_at || "",
      Estado: fila.Estado || fila.estado || "Activa",
      FechaOficial1: fila.FechaOficial1 || fila.fechaOficial1 || fila.fecha_oficial_1 || "",
      FechaOficial2: fila.FechaOficial2 || fila.fechaOficial2 || fila.fecha_oficial_2 || "",
      FechaOficial3: fila.FechaOficial3 || fila.fechaOficial3 || fila.fecha_oficial_3 || "",
      Uso1Fecha: fila.Uso1Fecha || fila.uso1Fecha || fila.uso_1_fecha || "",
      Uso2Fecha: fila.Uso2Fecha || fila.uso2Fecha || fila.uso_2_fecha || "",
      Uso3Fecha: fila.Uso3Fecha || fila.uso3Fecha || fila.uso_3_fecha || "",
      Uso1Estado: fila.Uso1Estado || fila.uso1Estado || fila.uso_1_estado || "Pendiente",
      Uso2Estado: fila.Uso2Estado || fila.uso2Estado || fila.uso_2_estado || "Pendiente",
      Uso3Estado: fila.Uso3Estado || fila.uso3Estado || fila.uso_3_estado || "Pendiente"
    };
  }

  function normalizarRespuestaDetalle(respuesta) {
    const fila = Array.isArray(respuesta) ? respuesta[0] : respuesta;

    if (!fila) {
      throw new Error("No se encontró la incidencia solicitada.");
    }

    if (fila.success === false) {
      throw new Error(fila.error || "No fue posible consultar el detalle de la incidencia.");
    }

    const incidencia = fila.incidencia ? normalizarIncidenciaDesdeBD(fila.incidencia) : normalizarIncidenciaDesdeBD(fila);

    return {
      incidencia,
      puedeEditar: Boolean(fila.puedeEditar ?? fila.puede_editar ?? false),
      puedeEliminar: Boolean(fila.puedeEliminar ?? fila.puede_eliminar ?? false)
    };
  }

  async function iniciarSesionAsync(idAcceso, contrasena) {
    const resultado = await rpc("iniciar_sesion_sec2", {
      p_id_acceso: normalizarTexto(idAcceso),
      p_password: normalizarTexto(contrasena)
    });

    const fila = Array.isArray(resultado) ? resultado[0] : resultado;

    if (!fila) {
      return {
        success: false,
        error: "No se recibió respuesta del servidor."
      };
    }

    if (!fila.success) {
      return {
        success: false,
        error: fila.error || "No fue posible iniciar sesión."
      };
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
        Rol: normalizarRolFrontend(fila.rol_clave),
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
    validarDatosIncidencia(datos);

    /*
      SEC2_FIX_GUARDAR_DIRECTO_MINIMO_V6_20260709
      La RPC guardar_incidencia_sec2 no existe todavía en Supabase.
      Para incidencias simples NO se deben enviar campos de permiso oficial.
      Se guarda directo en public.incidencias con columnas mínimas.
    */
    const idRespaldo = generarIDIncidenciaTemporal();
    return await guardarIncidenciaFallbackDirecto(datos, idRespaldo, null);
  }

  async function guardarIncidenciaFallbackDirecto(datos, idRespaldo, errorRPC) {
    const supabase = getClient();
    const d = datos || {};
    const oficial = esPermisoOficial(d);
    const fechaInicio = oficial ? fechaONull(d.FechaOficial1 || d.FechaInicio) : fechaONull(d.FechaInicio);
    const fechaFin = oficial ? fechaONull(d.FechaOficial3 || d.FechaOficial2 || d.FechaOficial1 || d.FechaFin) : fechaONull(d.FechaFin);
    const ahoraISO = new Date().toISOString();
    const idUsuario = normalizarTexto(d.IDUsuario);
    const tipo = normalizarTexto(d.TipoIncidencia);
    const licencia = valorONull(d.LicenciaMedica);
    const observaciones = valorONull(d.Observaciones);
    const registradoPor = normalizarTexto(d.RegistradoPor || idSesion());

    /*
      SEC2_FIX_FALLBACK_INCIDENCIAS_V6_20260709
      Errores reales detectados:
      - public.Incidencias no existe.
      - public.incidencias no tiene columna estado.
      - public.incidencias no tiene columnas fecha_oficial_1/2/3.

      Por eso se intenta primero un insert mínimo en public.incidencias.
      Si el esquema usa nombres distintos, se prueban variantes comunes sin
      romper la app ni enviarla al splash.
    */
    const intentos = [
      {
        nombre: "snake_case_minimo",
        fila: {
          id_incidencia: idRespaldo,
          id_usuario: idUsuario,
          tipo_incidencia: tipo,
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin,
          licencia_medica: licencia,
          observaciones: observaciones,
          registrado_por: registradoPor,
          fecha_registro: ahoraISO
        }
      },
      {
        nombre: "snake_case_sin_id_incidencia",
        fila: {
          id_usuario: idUsuario,
          tipo_incidencia: tipo,
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin,
          licencia_medica: licencia,
          observaciones: observaciones,
          registrado_por: registradoPor,
          fecha_registro: ahoraISO
        }
      },
      {
        nombre: "lowercase_sin_guion_minimo",
        fila: {
          idincidencia: idRespaldo,
          idusuario: idUsuario,
          tipoincidencia: tipo,
          fechainicio: fechaInicio,
          fechafin: fechaFin,
          licenciamedica: licencia,
          observaciones: observaciones,
          registradopor: registradoPor,
          fecharegistro: ahoraISO
        }
      },
      {
        nombre: "lowercase_sin_guion_sin_id_incidencia",
        fila: {
          idusuario: idUsuario,
          tipoincidencia: tipo,
          fechainicio: fechaInicio,
          fechafin: fechaFin,
          licenciamedica: licencia,
          observaciones: observaciones,
          registradopor: registradoPor,
          fecharegistro: ahoraISO
        }
      },
      {
        nombre: "usuario_id_minimo",
        fila: {
          incidencia_id: idRespaldo,
          usuario_id: idUsuario,
          tipo: tipo,
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin,
          licencia_medica: licencia,
          observaciones: observaciones,
          registrado_por: registradoPor,
          created_at: ahoraISO
        }
      },
      {
        nombre: "usuario_id_sin_id_incidencia",
        fila: {
          usuario_id: idUsuario,
          tipo: tipo,
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin,
          licencia_medica: licencia,
          observaciones: observaciones,
          registrado_por: registradoPor,
          created_at: ahoraISO
        }
      }
    ];

    const errores = [];

    for (const intento of intentos) {
      const { data, error } = await supabase
        .from("incidencias")
        .insert(intento.fila)
        .select()
        .single();

      if (!error) {
        const normalizada = normalizarIncidenciaDesdeBD(data || intento.fila);
        return {
          success: true,
          IDIncidencia: normalizada.IDIncidencia || idRespaldo,
          incidencia: Object.assign({}, normalizada, { IDIncidencia: normalizada.IDIncidencia || idRespaldo })
        };
      }

      errores.push(`${intento.nombre}: ${error.message || error}`);
    }

    const mensajeRPC = errorRPC && errorRPC.message ? errorRPC.message : "Guardado directo SEC2 V6.";
    throw new Error(`${mensajeRPC} No pudo insertar en public.incidencias con columnas mínimas. Intentos: ${errores.join(" | ")}`);
  }

  async function obtenerDetalleIncidenciaAsync(idIncidencia) {
    const id = normalizarTexto(idIncidencia);

    if (!id) {
      throw new Error("ID de incidencia no válido.");
    }

    try {
      const respuesta = await rpc("obtener_detalle_incidencia_sec2", {
        p_id_acceso_sesion: idSesion(),
        p_id_incidencia: id
      });
      return normalizarRespuestaDetalle(respuesta);
    } catch (errorRPC) {
      return await obtenerDetalleIncidenciaFallbackDirecto(id, errorRPC);
    }
  }

  async function obtenerDetalleIncidenciaFallbackDirecto(idIncidencia, errorRPC) {
    const supabase = getClient();
    const intentos = [
      { tabla: "Incidencias", columna: "IDIncidencia" },
      { tabla: "incidencias", columna: "id_incidencia" },
      { tabla: "incidencias", columna: "id" }
    ];

    const errores = [];

    for (const intento of intentos) {
      const { data, error } = await supabase
        .from(intento.tabla)
        .select("*")
        .eq(intento.columna, idIncidencia)
        .maybeSingle();

      if (!error && data) {
        return {
          incidencia: normalizarIncidenciaDesdeBD(data),
          puedeEditar: false,
          puedeEliminar: false
        };
      }

      if (error) errores.push(`${intento.tabla}.${intento.columna}: ${error.message || error}`);
    }

    const mensajeRPC = errorRPC && errorRPC.message ? errorRPC.message : "RPC obtener_detalle_incidencia_sec2 no disponible.";
    throw new Error(`${mensajeRPC} / Fallback directo no pudo consultar detalle: ${errores.join(" | ")}`);
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
    obtenerDetalleIncidenciaAsync
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
        if (typeof onFailure === "function") {
          onFailure(error.message || "Error al iniciar sesión.");
        }
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

  obtenerDetalleIncidencia: function(idIncidencia, onSuccess, onFailure) {
    SEC2_API.obtenerDetalleIncidenciaAsync(idIncidencia)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  guardarIncidencia: function(datos, onSuccess, onFailure) {
    SEC2_API.guardarIncidenciaAsync(datos)
      .then(function(data) { if (typeof onSuccess === "function") onSuccess(data); })
      .catch(function(error) { if (typeof onFailure === "function") onFailure(error.message || error); });
  },

  guardarUsosPermisoOficial: function(idIncidencia, datos, onSuccess, onFailure) {
    if (typeof onFailure === "function") onFailure("Uso de permisos oficiales aún no migrado a Supabase.");
  },

  eliminarIncidencia: function(idIncidencia, onSuccess, onFailure) {
    if (typeof onFailure === "function") onFailure("Eliminar incidencias aún no migrado a Supabase.");
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

/* =========================================================
   Exposición global
   ========================================================= */

window.SEC2_API = SEC2_API;
window.API = API;
