-- ============================================================
-- SEC2-INCIDENCIAS
-- 004_funciones_consulta_basica.sql
-- Consultas básicas para Mi Perfil, historial y reportes vacíos
-- ============================================================

create or replace function usuario_visible_sec2(
  p_usuario_sesion_id uuid,
  p_usuario_objetivo_id uuid
)
returns boolean
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_rol_sesion text;
  v_turno_sesion text;
  v_turno_objetivo text;
begin
  select r.clave, t.clave
  into v_rol_sesion, v_turno_sesion
  from usuarios u
  join roles r on r.id = u.rol_id
  join turnos t on t.id = u.turno_id
  where u.id = p_usuario_sesion_id
  limit 1;

  select t.clave
  into v_turno_objetivo
  from usuarios u
  join turnos t on t.id = u.turno_id
  where u.id = p_usuario_objetivo_id
  limit 1;

  if p_usuario_sesion_id is null or p_usuario_objetivo_id is null then
    return false;
  end if;

  if v_rol_sesion = 'direccion' then
    return true;
  end if;

  if v_rol_sesion = 'docente' then
    return p_usuario_sesion_id = p_usuario_objetivo_id;
  end if;

  if v_rol_sesion in ('prefectura', 'correspondencia') then
    return (
      v_turno_sesion = 'A'
      or v_turno_objetivo = 'A'
      or v_turno_sesion = v_turno_objetivo
    );
  end if;

  return false;
end;
$$;

create or replace function obtener_usuario_sesion_sec2(p_id_acceso text)
returns uuid
language sql
security definer
set search_path = public, extensions
as $$
  select u.id
  from usuarios u
  where u.id_acceso = trim(p_id_acceso)
    and u.activo = true
  limit 1;
$$;

create or replace function usuario_json_sec2(p_usuario_id uuid)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  select jsonb_build_object(
    'ID', u.id,
    'IDAcceso', u.id_acceso::text,
    'Nombre', u.nombre,
    'Apellidos', trim(coalesce(u.apellido_paterno, '') || ' ' || coalesce(u.apellido_materno, '')),
    'NombreCompleto', u.nombre_completo,
    'Correo', u.correo::text,
    'Rol', r.nombre,
    'Turno', t.clave
  )
  from usuarios u
  join roles r on r.id = u.rol_id
  join turnos t on t.id = u.turno_id
  where u.id = p_usuario_id
  limit 1;
$$;

create or replace function obtener_usuarios_para_formulario_sec2(
  p_id_acceso_sesion text
)
returns table (
  "IDAcceso" text,
  "Nombre" text,
  "Apellidos" text,
  "Rol" text,
  "Turno" text
)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_sesion_id uuid;
begin
  v_sesion_id := obtener_usuario_sesion_sec2(p_id_acceso_sesion);

  if v_sesion_id is null then
    raise exception 'Sesión inválida.';
  end if;

  return query
  select
    u.id_acceso::text as "IDAcceso",
    u.nombre as "Nombre",
    trim(coalesce(u.apellido_paterno, '') || ' ' || coalesce(u.apellido_materno, '')) as "Apellidos",
    r.nombre as "Rol",
    t.clave as "Turno"
  from usuarios u
  join roles r on r.id = u.rol_id
  join turnos t on t.id = u.turno_id
  where u.activo = true
    and usuario_visible_sec2(v_sesion_id, u.id)
  order by u.apellido_paterno, u.apellido_materno, u.nombre;
end;
$$;

create or replace function incidencias_json_persona_sec2(
  p_usuario_id uuid,
  p_filtro text default 'todas'
)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'IDIncidencia', i.folio,
        'IDUsuario', u.id_acceso::text,
        'Nombre', u.nombre,
        'Apellidos', trim(coalesce(u.apellido_paterno, '') || ' ' || coalesce(u.apellido_materno, '')),
        'Turno', t.clave,
        'TipoIncidencia', ti.nombre,
        'FechaInicio', i.fecha_inicio::text,
        'FechaFin', i.fecha_fin::text,
        'LicenciaMedica', i.licencia_medica,
        'Observaciones', i.observaciones,
        'RegistradoPor', ur.codigo_auditoria,
        'FechaRegistro', i.fecha_registro::date::text
      )
      order by i.fecha_inicio desc
    ),
    '[]'::jsonb
  )
  from incidencias i
  join usuarios u on u.id = i.usuario_id
  join turnos t on t.id = u.turno_id
  join tipos_incidencia ti on ti.id = i.tipo_incidencia_id
  join estados_incidencia ei on ei.id = i.estado_id
  left join usuarios ur on ur.id = i.registrado_por_id
  where i.usuario_id = p_usuario_id
    and ei.clave = 'activa'
    and (
      coalesce(p_filtro, 'todas') <> 'proximas'
      or i.fecha_inicio >= current_date
    );
$$;

create or replace function estadisticas_persona_sec2(p_usuario_id uuid)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  with base as (
    select ti.clave
    from incidencias i
    join tipos_incidencia ti on ti.id = i.tipo_incidencia_id
    join estados_incidencia ei on ei.id = i.estado_id
    where i.usuario_id = p_usuario_id
      and ei.clave = 'activa'
  )
  select jsonb_build_object(
    'total', count(*),
    'permisosOficiales', count(*) filter (where clave = 'permiso_oficial'),
    'incapacidades', count(*) filter (where clave = 'incapacidad'),
    'comisiones', count(*) filter (where clave in ('comision_sindical', 'comision_oficial')),
    'humanitarios', count(*) filter (where clave in ('humanitario_sindical', 'humanitario_oficial')),
    'especiales', count(*) filter (where clave = 'especial'),
    'otras', count(*) filter (where clave not in ('permiso_oficial','incapacidad','comision_sindical','comision_oficial','humanitario_sindical','humanitario_oficial','especial'))
  )
  from base;
$$;

create or replace function ultima_incidencia_persona_sec2(p_usuario_id uuid)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  select coalesce(
    (
      select jsonb_build_object(
        'IDIncidencia', i.folio,
        'FechaInicio', i.fecha_inicio::text,
        'FechaFin', i.fecha_fin::text
      )
      from incidencias i
      join estados_incidencia ei on ei.id = i.estado_id
      where i.usuario_id = p_usuario_id
        and ei.clave = 'activa'
      order by i.fecha_inicio desc
      limit 1
    ),
    'null'::jsonb
  );
$$;

create or replace function obtener_resumen_persona_sec2(
  p_id_acceso_sesion text,
  p_id_acceso_persona text
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_sesion_id uuid;
  v_persona_id uuid;
begin
  v_sesion_id := obtener_usuario_sesion_sec2(p_id_acceso_sesion);

  select u.id
  into v_persona_id
  from usuarios u
  where u.id_acceso = trim(p_id_acceso_persona)
    and u.activo = true
  limit 1;

  if v_sesion_id is null then
    raise exception 'Sesión inválida.';
  end if;

  if v_persona_id is null then
    raise exception 'Usuario no encontrado.';
  end if;

  if not usuario_visible_sec2(v_sesion_id, v_persona_id) then
    raise exception 'No tienes permiso para consultar esta persona.';
  end if;

  return jsonb_build_object(
    'persona', usuario_json_sec2(v_persona_id),
    'estadisticas', estadisticas_persona_sec2(v_persona_id),
    'incidencias', incidencias_json_persona_sec2(v_persona_id, 'todas'),
    'ultimaIncidencia', ultima_incidencia_persona_sec2(v_persona_id)
  );
end;
$$;

create or replace function obtener_historial_persona_sec2(
  p_id_acceso_sesion text,
  p_id_acceso_persona text,
  p_filtro text default 'todas'
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_sesion_id uuid;
  v_persona_id uuid;
begin
  v_sesion_id := obtener_usuario_sesion_sec2(p_id_acceso_sesion);

  select u.id
  into v_persona_id
  from usuarios u
  where u.id_acceso = trim(p_id_acceso_persona)
    and u.activo = true
  limit 1;

  if v_sesion_id is null then
    raise exception 'Sesión inválida.';
  end if;

  if v_persona_id is null then
    raise exception 'Usuario no encontrado.';
  end if;

  if not usuario_visible_sec2(v_sesion_id, v_persona_id) then
    raise exception 'No tienes permiso para consultar esta persona.';
  end if;

  return jsonb_build_object(
    'persona', usuario_json_sec2(v_persona_id),
    'incidencias', incidencias_json_persona_sec2(v_persona_id, coalesce(p_filtro, 'todas'))
  );
end;
$$;

create or replace function reporte_rango_sec2(
  p_id_acceso_sesion text,
  p_fecha_inicio date,
  p_fecha_fin date
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_sesion_id uuid;
  v_total_visible integer;
  v_ausentes integer;
  v_incidencias jsonb;
begin
  v_sesion_id := obtener_usuario_sesion_sec2(p_id_acceso_sesion);

  if v_sesion_id is null then
    raise exception 'Sesión inválida.';
  end if;

  select count(*)
  into v_total_visible
  from usuarios u
  where u.activo = true
    and usuario_visible_sec2(v_sesion_id, u.id);

  select count(distinct i.usuario_id)
  into v_ausentes
  from incidencias i
  join estados_incidencia ei on ei.id = i.estado_id
  where ei.clave = 'activa'
    and i.fecha_inicio <= p_fecha_fin
    and i.fecha_fin >= p_fecha_inicio
    and usuario_visible_sec2(v_sesion_id, i.usuario_id);

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'IDIncidencia', i.folio,
        'IDUsuario', u.id_acceso::text,
        'Nombre', u.nombre,
        'Apellidos', trim(coalesce(u.apellido_paterno, '') || ' ' || coalesce(u.apellido_materno, '')),
        'Turno', t.clave,
        'TipoIncidencia', ti.nombre,
        'FechaInicio', i.fecha_inicio::text,
        'FechaFin', i.fecha_fin::text,
        'LicenciaMedica', i.licencia_medica,
        'Observaciones', i.observaciones
      )
      order by i.fecha_inicio asc
    ),
    '[]'::jsonb
  )
  into v_incidencias
  from incidencias i
  join usuarios u on u.id = i.usuario_id
  join turnos t on t.id = u.turno_id
  join tipos_incidencia ti on ti.id = i.tipo_incidencia_id
  join estados_incidencia ei on ei.id = i.estado_id
  where ei.clave = 'activa'
    and i.fecha_inicio <= p_fecha_fin
    and i.fecha_fin >= p_fecha_inicio
    and usuario_visible_sec2(v_sesion_id, i.usuario_id);

  return jsonb_build_object(
    'fechaInicio', p_fecha_inicio::text,
    'fechaFin', p_fecha_fin::text,
    'fecha', p_fecha_inicio::text,
    'presentes', greatest(v_total_visible - v_ausentes, 0),
    'ausentes', v_ausentes,
    'incidencias', v_incidencias
  );
end;
$$;

create or replace function obtener_reporte_dia_sec2(
  p_id_acceso_sesion text
)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  select reporte_rango_sec2(p_id_acceso_sesion, current_date, current_date);
$$;

create or replace function obtener_reporte_semanal_sec2(
  p_id_acceso_sesion text
)
returns jsonb
language sql
security definer
set search_path = public, extensions
as $$
  select reporte_rango_sec2(
    p_id_acceso_sesion,
    (current_date - interval '3 days')::date,
    (current_date + interval '3 days')::date
  );
$$;

create or replace function consultar_fechas_sec2(
  p_id_acceso_sesion text,
  p_fecha_inicio date,
  p_fecha_fin date
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if p_fecha_inicio is null or p_fecha_fin is null then
    raise exception 'Faltan fechas.';
  end if;

  if p_fecha_fin < p_fecha_inicio then
    raise exception 'La fecha final no puede ser anterior a la inicial.';
  end if;

  return reporte_rango_sec2(p_id_acceso_sesion, p_fecha_inicio, p_fecha_fin);
end;
$$;

create or replace function obtener_estadistica_mensual_sec2(
  p_id_acceso_sesion text,
  p_id_acceso_persona text,
  p_mes integer,
  p_anio integer
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_sesion_id uuid;
  v_persona_id uuid;
  v_inicio date;
  v_fin date;
  v_datos jsonb;
  v_total integer;
begin
  v_sesion_id := obtener_usuario_sesion_sec2(p_id_acceso_sesion);

  select u.id
  into v_persona_id
  from usuarios u
  where u.id_acceso = trim(p_id_acceso_persona)
    and u.activo = true
  limit 1;

  if v_sesion_id is null then
    raise exception 'Sesión inválida.';
  end if;

  if v_persona_id is null then
    raise exception 'Usuario no encontrado.';
  end if;

  if not usuario_visible_sec2(v_sesion_id, v_persona_id) then
    raise exception 'No tienes permiso para consultar esta persona.';
  end if;

  if p_mes < 1 or p_mes > 12 then
    raise exception 'Mes no válido.';
  end if;

  v_inicio := make_date(p_anio, p_mes, 1);
  v_fin := (v_inicio + interval '1 month - 1 day')::date;

  with dias as (
    select generate_series(v_inicio, v_fin, interval '1 day')::date as dia
  ),
  conteo as (
    select
      d.dia,
      count(i.id) as cantidad
    from dias d
    left join incidencias i
      on i.usuario_id = v_persona_id
      and i.fecha_inicio <= d.dia
      and i.fecha_fin >= d.dia
    left join estados_incidencia ei on ei.id = i.estado_id
    where i.id is null or ei.clave = 'activa'
    group by d.dia
    order by d.dia
  )
  select
    coalesce(jsonb_agg(jsonb_build_object('dia', extract(day from dia)::int, 'cantidad', cantidad, 'tipo', 'Incidencias')), '[]'::jsonb),
    coalesce(sum(cantidad), 0)::int
  into v_datos, v_total
  from conteo;

  return jsonb_build_object(
    'persona', usuario_json_sec2(v_persona_id),
    'mes', p_mes,
    'anio', p_anio,
    'fechaInicio', v_inicio::text,
    'fechaFin', v_fin::text,
    'total', v_total,
    'tipoMasFrecuente', case when v_total > 0 then 'Incidencias' else 'Sin dato' end,
    'datos', v_datos
  );
end;
$$;

-- ============================================================
-- FIN 004_funciones_consulta_basica.sql
-- ============================================================
