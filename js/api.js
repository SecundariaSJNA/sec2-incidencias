/* =========================================================
   SEC2 API — Supabase
   Compatibilidad con app.js heredado
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

    if (clave === "direccion") return "Direccion";
    if (clave === "correspondencia") return "Correspondencia";
    if (clave === "prefectura") return "Prefectura";
    if (clave === "docente") return "Docente";

    return normalizarTexto(rolClave);
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

  return {
    rpc,
    iniciarSesionAsync
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
          if (typeof onSuccess === "function") {
            onSuccess(respuesta.data);
          }
        } else {
          if (typeof onFailure === "function") {
            onFailure(respuesta.error);
          }
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
  }
};

/* =========================================================
   Exposición global
   ========================================================= */

window.SEC2_API = SEC2_API;
window.API = API;
