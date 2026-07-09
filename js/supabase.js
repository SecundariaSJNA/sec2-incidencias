/* =========================================================
   SEC2 Supabase Client
   ========================================================= */

(function() {
  if (!window.SEC2_CONFIG) {
    throw new Error("SEC2_CONFIG no está definido. Cargue config.js antes de supabase.js.");
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    throw new Error("SDK de Supabase no cargado. Revise el script CDN antes de supabase.js.");
  }

  if (!window.sec2Supabase) {
    window.sec2Supabase = window.supabase.createClient(
      window.SEC2_CONFIG.SUPABASE_URL,
      window.SEC2_CONFIG.SUPABASE_PUBLISHABLE_KEY
    );
  }
})();
