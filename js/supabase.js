const sec2Supabase = window.supabase.createClient(
  window.SEC2_CONFIG.SUPABASE_URL,
  window.SEC2_CONFIG.SUPABASE_PUBLISHABLE_KEY
);

window.sec2Supabase = sec2Supabase;
