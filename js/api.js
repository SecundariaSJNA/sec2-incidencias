/* =========================================================
   SEC2 API — Supabase V7
   Capa compatible con app.js / incidencias.js / reportes.js

   Cambio V7:
   - Guarda incidencias usando el esquema real normalizado de Supabase.
   - public.incidencias usa: id, folio, usuario_id, tipo_incidencia_id, estado_id,
     fecha_inicio, fecha_fin, licencia_medica, observaciones, registrado_por_id, fecha_registro.
   - Resuelve IDAcceso a usuarios.id y TipoIncidencia a tipos_incidencia.id.
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

    const usuario = fila.usuarios || fila.usuario || fila.usuario_detalle || {};
    const tipo = fila.tipos_incidencia || fila.tipo_incidencia || fila.tipo || {};
    const estado = fila.estados_incidencia || fila.estado || {};
    const registrador = fila.registrador || fila.registrado_por || fila.registrado_por_usuario || {};

    const apellidosUsuario = usuario.Apellidos || usuario.apellidos || [usuario.apellido_paterno, usuario.apellido_materno].filter(Boolean).join(" ");
    const apellidosRegistrador = registrador.Apellidos || registrador.apellidos || [registrador.apellido_paterno, registrador.apellido_materno].filter(Boolean).join(" ");

    return {
      IDIncidencia: fila.IDIncidencia || fila.idIncidencia || fila.id_incidencia || fila.incidencia_id || fila.id || fila.folio || "",
      IDUsuario: fila.IDUsuario || fila.idUsuario || fila.id_usuario || fila.id_acceso_persona || usuario.id_acceso || usuario.IDAcceso || fila.usuario_id || "",
      Nombre: fila.Nombre || fila.nombre || fila.usuario_nombre || usuario.nombre || usuario.Nombre || "",
      Apellidos: fila.Apellidos || fila.apellidos || fila.usuario_apellidos || apellidosUsuario || "",
      Correo: fila.Correo || fila.correo || usuario.correo || usuario.Correo || "",
      Rol: fila.Rol || fila.rol || usuario.rol || usuario.Rol || "",
      Turno: fila.Turno || fila.turno || fila.turno_clave || usuario.turno_clave || usuario.Turno || "",
      TipoIncidencia: fila.TipoIncidencia || fila.tipoIncidencia || fila.tipo_incidencia || tipo.nombre || tipo.Nombre || tipo.clave || tipo.Clave || "",
      FechaInicio: fila.FechaInicio || fila.fechaInicio || fila.fecha_inicio || "",
      FechaFin: fila.FechaFin || fila.fechaFin || fila.fecha_fin || "",
      LicenciaMedica: fila.LicenciaMedica || fila.licenciaMedica || fila.licencia_medica || "",
      Observaciones: fila.Observaciones || fila.observaciones || "",
      RegistradoPor: fila.RegistradoPor || fila.registradoPor || fila.registrado_por || registrador.id_acceso || registrador.IDAcceso || apellidosRegistrador || fila.registrado_por_id || "",
      FechaRegistro: fila.FechaRegistro || fila.fechaRegistro || fila.fecha_registro || fila.created_at || "",
      Estado: fila.Estado || fila.estado || estado.nombre || estado.Nombre || estado.clave || estado.Clave || "Activa",
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

  function normalizarClaveCatalogo(texto) {
    return normalizarTexto(texto)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  async function buscarUsuarioPorIDAcceso(idAcceso, etiqueta) {
    const supabase = getClient();
    const valor = normalizarTexto(idAcceso);

    if (!valor) {
      throw new Error(`No se recibió IDAcceso para resolver ${etiqueta}.`);
    }

    const intentos = [
      { columna: "id_acceso", valor },
      { columna: "IDAcceso", valor },
      { columna: "idacceso", valor },
      { columna: "id", valor }
    ];

    const errores = [];

    for (const intento of intentos) {
      const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq(intento.columna, intento.valor)
        .maybeSingle();

      if (!error && data) return data;
      if (error) errores.push(`usuarios.${intento.columna}: ${error.message || error}`);
    }

    throw new Error(`No se encontró ${etiqueta} en usuarios con IDAcceso ${valor}. ${errores.join(" | ")}`);
  }

  async function buscarTipoIncidencia(tipoTexto) {
    const supabase = getClient();
    const tipo = normalizarTexto(tipoTexto);
    const clave = normalizarClaveCatalogo(tipo);

    if (!tipo) throw new Error("No se recibió tipo de incidencia.");

    const intentos = [
      { metodo: "eq", columna: "nombre", valor: tipo },
      { metodo: "ilike", columna: "nombre", valor: tipo },
      { metodo: "eq", columna: "clave", valor: clave },
      { metodo: "eq", columna: "codigo", valor: clave }
    ];

    const errores = [];

    for (const intento of intentos) {
      let query = supabase.from("tipos_incidencia").select("*");

      if (intento.metodo === "ilike") query = query.ilike(intento.columna, intento.valor);
      else query = query.eq(intento.columna, intento.valor);

      const { data, error } = await query.maybeSingle();

      if (!error && data) return data;
      if (error) errores.push(`tipos_incidencia.${intento.columna}: ${error.message || error}`);
    }

    throw new Error(`No se encontró el tipo de incidencia: ${tipo}. Revisa tabla tipos_incidencia. ${errores.join(" | ")}`);
  }

  async function buscarEstadoIncidenciaActivo() {
    const supabase = getClient();

    const candidatos = ["Activa", "Activo", "Vigente", "Registrada", "Abierta"];
    const errores = [];

    for (const nombre of candidatos) {
      const clave = normalizarClaveCatalogo(nombre);
      const intentos = [
        { metodo: "eq", columna: "nombre", valor: nombre },
        { metodo: "ilike", columna: "nombre", valor: nombre },
        { metodo: "eq", columna: "clave", valor: clave },
        { metodo: "eq", columna: "codigo", valor: clave }
      ];

      for (const intento of intentos) {
        let query = supabase.from("estados_incidencia").select("*");
        if (intento.metodo === "ilike") query = query.ilike(intento.columna, intento.valor);
        else query = query.eq(intento.columna, intento.valor);

        const { data, error } = await query.maybeSingle();
        if (!error && data) return data;
        if (error) errores.push(`estados_incidencia.${intento.columna}: ${error.message || error}`);
      }
    }

    const { data, error } = await supabase.from("estados_incidencia").select("*").limit(1).maybeSingle();
    if (!error && data) return data;
    if (error) errores.push(`estados_incidencia.limit(1): ${error.message || error}`);

    throw new Error(`No se pudo resolver estado activo en estados_incidencia. ${errores.join(" | ")}`);
  }

  async function guardarIncidenciaAsync(datos) {
    validarDatosIncidencia(datos);

    /*
      SEC2_FIX_SCHEMA_REAL_INCIDENCIAS_V7_20260709
      Esquema confirmado en Supabase:
      incidencias.id uuid, folio text, usuario_id uuid, tipo_incidencia_id uuid,
      estado_id uuid, fecha_inicio date, fecha_fin date, licencia_medica text,
      observaciones text, registrado_por_id uuid, fecha_registro timestamptz.
    */
    const supabase = getClient();
    const d = datos || {};
    const oficial = esPermisoOficial(d);
    const fechaInicio = oficial ? fechaONull(d.FechaOficial1 || d.FechaInicio) : fechaONull(d.FechaInicio);
    const fechaFin = oficial ? fechaONull(d.FechaOficial3 || d.FechaOficial2 || d.FechaOficial1 || d.FechaFin) : fechaONull(d.FechaFin);
    const folio = generarIDIncidenciaTemporal();

    const usuario = await buscarUsuarioPorIDAcceso(d.IDUsuario, "docente afectado");
    const registrador = await buscarUsuarioPorIDAcceso(d.RegistradoPor || idSesion(), "usuario registrador");
    const tipo = await buscarTipoIncidencia(d.TipoIncidencia);
    const estado = await buscarEstadoIncidenciaActivo();

    const fila = {
      folio: folio,
      usuario_id: usuario.id,
      tipo_incidencia_id: tipo.id,
      estado_id: estado.id,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
      licencia_medica: valorONull(d.LicenciaMedica),
      observaciones: valorONull(d.Observaciones),
      registrado_por_id: registrador.id,
      fecha_registro: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from("incidencias")
      .insert(fila)
      .select("*, usuarios:usuario_id(*), tipos_incidencia:tipo_incidencia_id(*), estados_incidencia:estado_id(*), registrador:registrado_por_id(*)")
      .single();

    if (error) {
      throw new Error(`Guardado directo SEC2 V7 falló en public.incidencias: ${error.message || error}`);
    }

    const normalizada = normalizarIncidenciaDesdeBD(data || fila);

    return {
      success: true,
      IDIncidencia: normalizada.IDIncidencia || (data && data.id) || folio,
      incidencia: Object.assign({}, normalizada, { IDIncidencia: normalizada.IDIncidencia || (data && data.id) || folio })
    };
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
      { columna: "id", valor: idIncidencia },
      { columna: "folio", valor: idIncidencia }
    ];

    const errores = [];

    for (const intento of intentos) {
      const { data, error } = await supabase
        .from("incidencias")
        .select("*, usuarios:usuario_id(*), tipos_incidencia:tipo_incidencia_id(*), estados_incidencia:estado_id(*), registrador:registrado_por_id(*)")
        .eq(intento.columna, intento.valor)
        .maybeSingle();

      if (!error && data) {
        return {
          incidencia: normalizarIncidenciaDesdeBD(data),
          puedeEditar: false,
          puedeEliminar: false
        };
      }

      if (error) errores.push(`incidencias.${intento.columna}: ${error.message || error}`);
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
