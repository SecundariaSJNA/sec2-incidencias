-- ============================================================
-- SEC2-INCIDENCIAS
-- 001_schema_inicial.sql
-- Schema inicial PostgreSQL / Supabase
-- ============================================================

-- ============================================================
-- 01. EXTENSIONES
-- ============================================================

create extension if not exists pgcrypto;
create extension if not exists citext;

-- ============================================================
-- 02. FUNCIONES TÉCNICAS
-- ============================================================

create or replace function actualizar_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- 03. CATÁLOGOS
-- ============================================================

create table if not exists roles (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  activo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint roles_clave_check check (clave ~ '^[a-z0-9_]+$')
);

create table if not exists turnos (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  activo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint turnos_clave_check check (clave in ('M', 'V', 'A'))
);

create table if not exists tipos_incidencia (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  requiere_licencia_medica boolean not null default false,
  es_permiso_oficial boolean not null default false,
  activo boolean not null default true,
  orden integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint tipos_incidencia_clave_check check (clave ~ '^[a-z0-9_]+$')
);

create table if not exists estados_incidencia (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  activo boolean not null default true,
  orden integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint estados_incidencia_clave_check check (clave ~ '^[a-z0-9_]+$')
);

create table if not exists estados_uso_permiso (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  activo boolean not null default true,
  orden integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint estados_uso_permiso_clave_check check (clave ~ '^[a-z0-9_]+$')
);

create table if not exists estados_notificacion (
  id uuid primary key default gen_random_uuid(),
  clave text not null unique,
  nombre text not null unique,
  descripcion text,
  activo boolean not null default true,
  orden integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint estados_notificacion_clave_check check (clave ~ '^[a-z0-9_]+$')
);

-- ============================================================
-- 04. USUARIOS
-- ============================================================

create table if not exists usuarios (
  id uuid primary key default gen_random_uuid(),

  codigo_auditoria text,
  id_acceso citext not null unique,

  nombre text not null,
  apellido_paterno text,
  apellido_materno text,
  apellidos_originales text,

  nombre_completo text generated always as (
    trim(
      concat_ws(
        ' ',
        nombre,
        nullif(apellido_paterno, ''),
        nullif(apellido_materno, '')
      )
    )
  ) stored,

  correo citext,

  rol_id uuid not null references roles(id),
  turno_id uuid not null references turnos(id),

  activo boolean not null default true,

  password_hash text not null,

  ultimo_acceso_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint usuarios_id_acceso_check check (length(trim(id_acceso::text)) >= 3),
  constraint usuarios_nombre_check check (length(trim(nombre)) >= 2)
);

create index if not exists idx_usuarios_rol_id on usuarios(rol_id);
create index if not exists idx_usuarios_turno_id on usuarios(turno_id);
create index if not exists idx_usuarios_activo on usuarios(activo);
create index if not exists idx_usuarios_nombre_completo on usuarios(nombre_completo);

-- ============================================================
-- 05. INCIDENCIAS
-- ============================================================

create table if not exists incidencias (
  id uuid primary key default gen_random_uuid(),

  folio text not null unique,

  usuario_id uuid not null references usuarios(id),
  tipo_incidencia_id uuid not null references tipos_incidencia(id),
  estado_id uuid not null references estados_incidencia(id),

  fecha_inicio date not null,
  fecha_fin date not null,

  licencia_medica text,
  observaciones text,

  registrado_por_id uuid not null references usuarios(id),
  fecha_registro timestamptz not null default now(),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint incidencias_fechas_check check (fecha_fin >= fecha_inicio),
  constraint incidencias_folio_check check (folio ~ '^I[0-9]+$')
);

create index if not exists idx_incidencias_usuario_id on incidencias(usuario_id);
create index if not exists idx_incidencias_tipo_id on incidencias(tipo_incidencia_id);
create index if not exists idx_incidencias_estado_id on incidencias(estado_id);
create index if not exists idx_incidencias_fecha_inicio on incidencias(fecha_inicio);
create index if not exists idx_incidencias_fecha_fin on incidencias(fecha_fin);
create index if not exists idx_incidencias_rango_fechas on incidencias(fecha_inicio, fecha_fin);
create index if not exists idx_incidencias_registrado_por on incidencias(registrado_por_id);

-- ============================================================
-- 06. PERMISOS OFICIALES
-- ============================================================

create table if not exists permiso_oficial_fechas (
  id uuid primary key default gen_random_uuid(),

  incidencia_id uuid not null references incidencias(id) on delete cascade,

  numero integer not null,
  fecha_oficial date not null,
  fecha_uso date,
  estado_uso_id uuid not null references estados_uso_permiso(id),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint permiso_oficial_numero_check check (numero between 1 and 3),
  constraint permiso_oficial_numero_unico unique (incidencia_id, numero)
);

create index if not exists idx_permiso_fechas_incidencia_id on permiso_oficial_fechas(incidencia_id);
create index if not exists idx_permiso_fechas_fecha_oficial on permiso_oficial_fechas(fecha_oficial);
create index if not exists idx_permiso_fechas_fecha_uso on permiso_oficial_fechas(fecha_uso);
create index if not exists idx_permiso_fechas_estado_uso on permiso_oficial_fechas(estado_uso_id);

-- ============================================================
-- 07. NOTIFICACIONES
-- ============================================================

create table if not exists notificaciones (
  id uuid primary key default gen_random_uuid(),

  folio text not null unique,

  usuario_id uuid not null references usuarios(id),
  enviado_por_id uuid not null references usuarios(id),

  mensaje text not null,

  estado_id uuid not null references estados_notificacion(id),

  fecha_envio timestamptz not null default now(),
  fecha_lectura timestamptz,
  leido_por_id uuid references usuarios(id),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint notificaciones_folio_check check (folio ~ '^N[0-9]+$'),
  constraint notificaciones_mensaje_check check (length(trim(mensaje)) > 0)
);

create index if not exists idx_notificaciones_usuario_id on notificaciones(usuario_id);
create index if not exists idx_notificaciones_enviado_por on notificaciones(enviado_por_id);
create index if not exists idx_notificaciones_estado_id on notificaciones(estado_id);
create index if not exists idx_notificaciones_fecha_envio on notificaciones(fecha_envio desc);

-- ============================================================
-- 08. AUDITORÍA
-- ============================================================

create table if not exists auditoria_eventos (
  id uuid primary key default gen_random_uuid(),

  usuario_id uuid references usuarios(id),

  accion text not null,
  tabla_afectada text not null,
  registro_id uuid,
  folio_referencia text,

  valores_anteriores jsonb,
  valores_nuevos jsonb,

  ip_origen text,
  user_agent text,

  created_at timestamptz not null default now(),

  constraint auditoria_accion_check check (length(trim(accion)) > 0),
  constraint auditoria_tabla_check check (length(trim(tabla_afectada)) > 0)
);

create index if not exists idx_auditoria_usuario_id on auditoria_eventos(usuario_id);
create index if not exists idx_auditoria_tabla on auditoria_eventos(tabla_afectada);
create index if not exists idx_auditoria_created_at on auditoria_eventos(created_at desc);
create index if not exists idx_auditoria_registro_id on auditoria_eventos(registro_id);

-- ============================================================
-- 09. SISTEMA
-- ============================================================

create table if not exists sistema_estado (
  id uuid primary key default gen_random_uuid(),

  clave text not null unique,
  valor text,
  descripcion text,

  updated_at timestamptz not null default now(),

  constraint sistema_estado_clave_check check (clave ~ '^[a-z0-9_]+$')
);

create table if not exists configuracion (
  id uuid primary key default gen_random_uuid(),

  clave text not null unique,
  valor text,
  descripcion text,
  activo boolean not null default true,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint configuracion_clave_check check (clave ~ '^[a-z0-9_]+$')
);

-- ============================================================
-- 10. TRIGGERS UPDATED_AT
-- ============================================================

create trigger trg_roles_updated_at
before update on roles
for each row execute function actualizar_updated_at();

create trigger trg_turnos_updated_at
before update on turnos
for each row execute function actualizar_updated_at();

create trigger trg_tipos_incidencia_updated_at
before update on tipos_incidencia
for each row execute function actualizar_updated_at();

create trigger trg_estados_incidencia_updated_at
before update on estados_incidencia
for each row execute function actualizar_updated_at();

create trigger trg_estados_uso_permiso_updated_at
before update on estados_uso_permiso
for each row execute function actualizar_updated_at();

create trigger trg_estados_notificacion_updated_at
before update on estados_notificacion
for each row execute function actualizar_updated_at();

create trigger trg_usuarios_updated_at
before update on usuarios
for each row execute function actualizar_updated_at();

create trigger trg_incidencias_updated_at
before update on incidencias
for each row execute function actualizar_updated_at();

create trigger trg_permiso_oficial_fechas_updated_at
before update on permiso_oficial_fechas
for each row execute function actualizar_updated_at();

create trigger trg_notificaciones_updated_at
before update on notificaciones
for each row execute function actualizar_updated_at();

create trigger trg_configuracion_updated_at
before update on configuracion
for each row execute function actualizar_updated_at();

-- ============================================================
-- 11. DATOS INICIALES DE CATÁLOGOS
-- ============================================================

insert into roles (clave, nombre, descripcion)
values
  ('direccion', 'Direccion', 'Acceso completo al sistema.'),
  ('correspondencia', 'Correspondencia', 'Consulta incidencias e historiales según turno.'),
  ('prefectura', 'Prefectura', 'Consulta reportes e historiales según turno.'),
  ('docente', 'Docente', 'Consulta únicamente su información personal.')
on conflict (clave) do nothing;

insert into turnos (clave, nombre, descripcion)
values
  ('M', 'Matutino', 'Turno matutino.'),
  ('V', 'Vespertino', 'Turno vespertino.'),
  ('A', 'Ambos', 'Visibilidad o asignación general para ambos turnos.')
on conflict (clave) do nothing;

insert into tipos_incidencia
(clave, nombre, descripcion, requiere_licencia_medica, es_permiso_oficial, orden)
values
  ('permiso_oficial', 'Permiso oficial', 'Permiso oficial con fechas autorizadas y usos posteriores.', false, true, 1),
  ('incapacidad', 'Incapacidad', 'Incidencia médica con posible licencia médica.', true, false, 2),
  ('humanitario_sindical', 'Humanitario sindical', 'Permiso humanitario de carácter sindical.', false, false, 3),
  ('humanitario_oficial', 'Humanitario oficial', 'Permiso humanitario de carácter oficial.', false, false, 4),
  ('comision_sindical', 'Comisión sindical', 'Comisión sindical.', false, false, 5),
  ('comision_oficial', 'Comisión oficial', 'Comisión oficial.', false, false, 6),
  ('especial', 'Especial', 'Incidencia especial o no clasificada.', false, false, 7)
on conflict (clave) do nothing;

insert into estados_incidencia (clave, nombre, descripcion, orden)
values
  ('activa', 'Activa', 'Incidencia vigente o válida.', 1),
  ('eliminada', 'Eliminada', 'Incidencia marcada como eliminada sin borrarse físicamente.', 2),
  ('cancelada', 'Cancelada', 'Incidencia cancelada.', 3)
on conflict (clave) do nothing;

insert into estados_uso_permiso (clave, nombre, descripcion, orden)
values
  ('pendiente', 'Pendiente', 'Fecha de uso todavía no registrada.', 1),
  ('utilizada', 'Utilizada', 'Fecha de uso ya registrada y bloqueada para modificación.', 2)
on conflict (clave) do nothing;

insert into estados_notificacion (clave, nombre, descripcion, orden)
values
  ('no_leida', 'No leída', 'Notificación pendiente de lectura.'),
  ('leida', 'Leída', 'Notificación ya abierta por el usuario.')
on conflict (clave) do nothing;

insert into sistema_estado (clave, valor, descripcion)
values
  ('ultimo_ping', now()::text, 'Ping técnico anti-inactividad de Supabase Free.')
on conflict (clave) do nothing;

insert into configuracion (clave, valor, descripcion)
values
  ('nombre_app', 'SEC2 Incidencias', 'Nombre visible de la aplicación.'),
  ('version_schema', '001', 'Versión inicial del esquema de base de datos.')
on conflict (clave) do nothing;

-- ============================================================
-- 12. RLS INICIAL
-- ============================================================

alter table roles enable row level security;
alter table turnos enable row level security;
alter table tipos_incidencia enable row level security;
alter table estados_incidencia enable row level security;
alter table estados_uso_permiso enable row level security;
alter table estados_notificacion enable row level security;
alter table usuarios enable row level security;
alter table incidencias enable row level security;
alter table permiso_oficial_fechas enable row level security;
alter table notificaciones enable row level security;
alter table auditoria_eventos enable row level security;
alter table sistema_estado enable row level security;
alter table configuracion enable row level security;

-- Las políticas RLS se definirán en un archivo posterior:
-- supabase/sql/002_politicas_rls.sql

-- ============================================================
-- 13. COMENTARIOS
-- ============================================================

comment on table roles is 'Catálogo de roles oficiales del sistema.';
comment on table turnos is 'Catálogo de turnos escolares.';
comment on table tipos_incidencia is 'Catálogo de tipos de incidencia.';
comment on table estados_incidencia is 'Catálogo de estados de incidencia.';
comment on table estados_uso_permiso is 'Catálogo de estados de uso de permiso oficial.';
comment on table estados_notificacion is 'Catálogo de estados de notificación.';
comment on table usuarios is 'Usuarios internos del sistema SEC2.';
comment on table incidencias is 'Incidencias principales registradas para usuarios.';
comment on table permiso_oficial_fechas is 'Fechas oficiales y usos asociados a permisos oficiales.';
comment on table notificaciones is 'Notificaciones internas enviadas a usuarios.';
comment on table auditoria_eventos is 'Registro de eventos críticos y auditoría.';
comment on table sistema_estado is 'Estado técnico del sistema.';
comment on table configuracion is 'Parámetros configurables del sistema.';

-- ============================================================
-- FIN 001_schema_inicial.sql
-- ============================================================
