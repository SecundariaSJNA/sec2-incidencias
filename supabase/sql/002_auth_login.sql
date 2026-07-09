-- ============================================================
-- SEC2-INCIDENCIAS
-- 002_auth_login.sql
-- Funciones de autenticación interna
-- ============================================================

-- Login temporal de prueba:
-- IDAcceso: DIR001
-- Contraseña: DIR1234
--
-- Regla definitiva:
-- La columna A / ID anterior NO será login.
-- El login real será id_acceso + contraseña interna con hash.

-- ============================================================
-- 01. FUNCIÓN: hash_password_sec2
-- ============================================================

create or replace function hash_password_sec2(password_text text)
returns text
language sql
security definer
set search_path = public, extensions
as $$
  select extensions.crypt(password_text, extensions.gen_salt('bf'));
$$;

-- ============================================================
-- 02. FUNCIÓN: verificar_password_sec2
-- ============================================================

create or replace function verificar_password_sec2(password_text text, password_hash text)
returns boolean
language sql
security definer
set search_path = public, extensions
as $$
  select password_hash = extensions.crypt(password_text, password_hash);
$$;

-- ============================================================
-- 03. FUNCIÓN: iniciar_sesion_sec2
-- ============================================================

create or replace function iniciar_sesion_sec2(
  p_id_acceso text,
  p_password text
)
returns table (
  success boolean,
  error text,
  usuario_id uuid,
  id_acceso text,
  nombre text,
  apellido_paterno text,
  apellido_materno text,
  nombre_completo text,
  correo text,
  rol_clave text,
  rol_nombre text,
  turno_clave text,
  turno_nombre text,
  activo boolean
)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_usuario usuarios%rowtype;
  v_rol roles%rowtype;
  v_turno turnos%rowtype;
begin
  if p_id_acceso is null or trim(p_id_acceso) = '' then
    return query
    select
      false,
      'Escribe el ID de acceso.',
      null::uuid,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::boolean;
    return;
  end if;

  if p_password is null or trim(p_password) = '' then
    return query
    select
      false,
      'Escribe la contraseña.',
      null::uuid,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::boolean;
    return;
  end if;

  select u.*
  into v_usuario
  from public.usuarios as u
  where u.id_acceso = trim(p_id_acceso)
  limit 1;

  if v_usuario.id is null then
    return query
    select
      false,
      'El ID de acceso no se encuentra registrado.',
      null::uuid,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::boolean;
    return;
  end if;

  if v_usuario.activo is not true then
    return query
    select
      false,
      'El usuario no está activo.',
      null::uuid,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::boolean;
    return;
  end if;

  if not verificar_password_sec2(p_password, v_usuario.password_hash) then
    return query
    select
      false,
      'La contraseña es incorrecta.',
      null::uuid,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::text,
      null::boolean;
    return;
  end if;

  select r.*
  into v_rol
  from public.roles as r
  where r.id = v_usuario.rol_id
  limit 1;

  select t.*
  into v_turno
  from public.turnos as t
  where t.id = v_usuario.turno_id
  limit 1;

  update public.usuarios as u
  set ultimo_acceso_at = now()
  where u.id = v_usuario.id;

  return query
  select
    true,
    null::text,
    v_usuario.id,
    v_usuario.id_acceso::text,
    v_usuario.nombre,
    v_usuario.apellido_paterno,
    v_usuario.apellido_materno,
    v_usuario.nombre_completo,
    v_usuario.correo::text,
    v_rol.clave,
    v_rol.nombre,
    v_turno.clave,
    v_turno.nombre,
    v_usuario.activo;
end;
$$;

-- ============================================================
-- 04. FUNCIÓN: crear_usuario_sec2
-- ============================================================

create or replace function crear_usuario_sec2(
  p_codigo_auditoria text,
  p_id_acceso text,
  p_nombre text,
  p_apellido_paterno text,
  p_apellido_materno text,
  p_apellidos_originales text,
  p_correo text,
  p_rol_clave text,
  p_turno_clave text,
  p_password text
)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_rol_id uuid;
  v_turno_id uuid;
  v_usuario_id uuid;
begin
  if p_id_acceso is null or trim(p_id_acceso) = '' then
    raise exception 'Falta id_acceso.';
  end if;

  if p_nombre is null or trim(p_nombre) = '' then
    raise exception 'Falta nombre.';
  end if;

  if p_password is null or trim(p_password) = '' then
    raise exception 'Falta contraseña.';
  end if;

  select r.id
  into v_rol_id
  from public.roles as r
  where r.clave = p_rol_clave
    and r.activo = true
  limit 1;

  if v_rol_id is null then
    raise exception 'Rol no válido: %', p_rol_clave;
  end if;

  select t.id
  into v_turno_id
  from public.turnos as t
  where t.clave = p_turno_clave
    and t.activo = true
  limit 1;

  if v_turno_id is null then
    raise exception 'Turno no válido: %', p_turno_clave;
  end if;

  insert into public.usuarios (
    codigo_auditoria,
    id_acceso,
    nombre,
    apellido_paterno,
    apellido_materno,
    apellidos_originales,
    correo,
    rol_id,
    turno_id,
    activo,
    password_hash
  )
  values (
    nullif(trim(p_codigo_auditoria), ''),
    trim(p_id_acceso),
    trim(p_nombre),
    nullif(trim(p_apellido_paterno), ''),
    nullif(trim(p_apellido_materno), ''),
    nullif(trim(p_apellidos_originales), ''),
    nullif(lower(trim(p_correo)), ''),
    v_rol_id,
    v_turno_id,
    true,
    hash_password_sec2(p_password)
  )
  on conflict (id_acceso) do update
  set
    codigo_auditoria = excluded.codigo_auditoria,
    nombre = excluded.nombre,
    apellido_paterno = excluded.apellido_paterno,
    apellido_materno = excluded.apellido_materno,
    apellidos_originales = excluded.apellidos_originales,
    correo = excluded.correo,
    rol_id = excluded.rol_id,
    turno_id = excluded.turno_id,
    activo = true,
    password_hash = excluded.password_hash,
    updated_at = now()
  returning id into v_usuario_id;

  return v_usuario_id;
end;
$$;

-- ============================================================
-- 05. USUARIO TEMPORAL DE PRUEBA
-- ============================================================

select crear_usuario_sec2(
  'DIR001',
  'DIR001',
  'Direccion',
  'Prueba',
  'SEC2',
  'Prueba SEC2',
  null,
  'direccion',
  'A',
  'DIR1234'
);

-- ============================================================
-- FIN 002_auth_login.sql
-- ============================================================
