-- ============================================================
-- SEC2-INCIDENCIAS
-- 001_schema_inicial.sql
-- Etapa 2: Construcción inicial de base PostgreSQL / Supabase
-- ============================================================

-- Este archivo será la fuente oficial para crear la estructura
-- inicial de la base de datos del proyecto SEC2-Incidencias.
--
-- Regla:
-- Todo cambio estructural primero se documenta aquí,
-- luego se ejecuta en Supabase.

-- ============================================================
-- 00. NOTAS GENERALES
-- ============================================================

-- Arquitectura:
-- Frontend: GitHub Pages
-- Backend/Base: Supabase PostgreSQL
-- Login: id_acceso + contraseña interna con hash
-- Correo: dato informativo/futuro, no login inicial
-- Reportes: se calculan, no se almacenan
-- Auditoría: reemplaza Papelera
-- PWA: se mantiene desde GitHub Pages

-- ============================================================
-- 01. EXTENSIONES
-- ============================================================

-- Aquí se activarán extensiones necesarias de PostgreSQL.
-- Ejemplo futuro:
-- create extension if not exists pgcrypto;

-- ============================================================
-- 02. CATÁLOGOS
-- ============================================================

-- Tablas previstas:
-- roles
-- turnos
-- tipos_incidencia
-- estados_incidencia
-- estados_uso_permiso
-- estados_notificacion

-- ============================================================
-- 03. USUARIOS
-- ============================================================

-- Tabla prevista:
-- usuarios

-- Reemplaza hoja:
-- Usuarios

-- Identidad visible:
-- id_acceso

-- Login:
-- id_acceso + password_hash

-- ============================================================
-- 04. INCIDENCIAS
-- ============================================================

-- Tabla prevista:
-- incidencias

-- Reemplaza hoja:
-- Incidencias

-- No duplicará nombre, apellidos, correo, rol ni turno,
-- salvo que después se apruebe snapshot histórico.

-- ============================================================
-- 05. PERMISOS OFICIALES
-- ============================================================

-- Tabla prevista:
-- permiso_oficial_fechas

-- Reemplaza columnas:
-- FechaOficial1
-- FechaOficial2
-- FechaOficial3
-- Uso1Fecha
-- Uso1Estado
-- Uso2Fecha
-- Uso2Estado
-- Uso3Fecha
-- Uso3Estado

-- ============================================================
-- 06. NOTIFICACIONES
-- ============================================================

-- Tabla prevista:
-- notificaciones

-- Reemplaza hoja:
-- Notificaciones

-- No duplicará datos del usuario.
-- Usará relaciones:
-- usuario_id
-- enviado_por_id
-- leido_por_id

-- ============================================================
-- 07. AUDITORÍA
-- ============================================================

-- Tabla prevista:
-- auditoria_eventos

-- Reemplaza/mejora hoja:
-- Papelera

-- Guardará:
-- quién hizo qué
-- cuándo
-- sobre qué tabla
-- qué registro
-- valores anteriores
-- valores nuevos

-- ============================================================
-- 08. SISTEMA
-- ============================================================

-- Tabla prevista:
-- sistema_estado

-- Uso:
-- ping técnico anti-inactividad
-- parámetros técnicos futuros

-- ============================================================
-- 09. FUNCIONES
-- ============================================================

-- Funciones futuras:
-- iniciar_sesion
-- verificar_password
-- registrar_incidencia
-- registrar_uso_permiso_oficial
-- marcar_notificacion_leida
-- registrar_evento_auditoria

-- ============================================================
-- 10. RLS / SEGURIDAD
-- ============================================================

-- RLS = Row Level Security.
-- Es la seguridad por filas de Supabase.
--
-- Aquí se definirán políticas para:
-- Docente solo ve lo suyo
-- Prefectura ve según turno
-- Correspondencia ve según turno
-- Dirección ve todo

-- ============================================================
-- FIN DEL ESQUELETO INICIAL
-- ============================================================
