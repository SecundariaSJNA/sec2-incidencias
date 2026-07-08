/* =========================================================
   SEC2 API — Supabase
   Reemplaza comunicación anterior con Google Apps Script.
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

  async function iniciarSesion(idAcceso, contrasena) {
    const resultado = await rpc("iniciar_sesion_sec2", {
      p_id_acceso: idAcceso,
      p_password: contrasena
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

    return {
      success: true,
      data: {
        id: fila.usuario_id,
        IDAcceso: fila.id_acceso,
        Nombre: fila.nombre,
        Apellidos: [fila.apellido_paterno, fila.apellido_materno].filter(Boolean).join(" "),
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

  function normalizarRolFrontend(rolClave) {
    const clave = String(rolClave || "").toLowerCase();

    if (clave === "direccion") return "Direccion";
    if (clave === "correspondencia") return "Correspondencia";
    if (clave === "prefectura") return "Prefectura";
    if (clave === "docente") return "Docente";

    return rolClave || "";
  }

  return {
    iniciarSesion,
    rpc
  };
})();

window.SEC2_API = SEC2_API;
