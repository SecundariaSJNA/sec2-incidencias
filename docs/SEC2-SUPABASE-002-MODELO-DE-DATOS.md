# SEC2-SUPABASE-002 — Modelo de Datos

## 1. Objetivo

Diseñar la base de datos profesional de SEC2-Incidencias en Supabase PostgreSQL.

Este modelo no copia Google Sheets columna por columna. Rediseña el sistema como base relacional limpia, conservando la lógica funcional existente.

---

## 2. Principios

- Usar tablas relacionales.
- Evitar duplicación innecesaria.
- Mantener `id_acceso` como identidad visible del usuario.
- Usar `id` interno como clave técnica.
- Proteger datos con RLS.
- Separar datos principales de catálogos.
- Separar permisos oficiales en tabla propia de fechas.
- Diseñar antes de crear tablas en Supabase.

---

## 3. Tablas previstas

### Catálogos

- roles
- turnos
- tipos_incidencia
- estados_incidencia
- estados_uso_permiso
- estados_notificacion

### Núcleo del sistema

- usuarios
- incidencias
- permiso_oficial_fechas
- notificaciones
- auditoria_eventos
- sistema_estado

---

## 4. Tabla roles

Pendiente de diseño.

Valores iniciales:

- Direccion
- Correspondencia
- Prefectura
- Docente

---

## 5. Tabla turnos

Pendiente de diseño.

Valores iniciales:

- M
- V
- A

---

## 6. Tabla usuarios

Pendiente de diseño.

Debe reemplazar la hoja Usuarios.

Campos conceptuales:

- id
- codigo_auditoria
- id_acceso
- nombre
- apellidos
- correo
- rol_id
- turno_id
- activo
- password_hash
- created_at
- updated_at

---

## 7. Tabla tipos_incidencia

Pendiente de diseño.

Valores iniciales:

- Permiso oficial
- Incapacidad
- Humanitario sindical
- Humanitario oficial
- Comisión sindical
- Comisión oficial
- Especial

---

## 8. Tabla incidencias

Pendiente de diseño.

Debe contener la incidencia principal, sin duplicar innecesariamente datos del usuario.

Campos conceptuales:

- id
- folio
- usuario_id
- tipo_incidencia_id
- fecha_inicio
- fecha_fin
- licencia_medica
- observaciones
- registrado_por_id
- fecha_registro
- estado_id
- created_at
- updated_at

---

## 9. Tabla permiso_oficial_fechas

Pendiente de diseño.

Debe reemplazar:

- FechaOficial1
- FechaOficial2
- FechaOficial3
- Uso1Fecha
- Uso1Estado
- Uso2Fecha
- Uso2Estado
- Uso3Fecha
- Uso3Estado

Campos conceptuales:

- id
- incidencia_id
- numero
- fecha_oficial
- fecha_uso
- estado_uso_id
- created_at
- updated_at

Reglas:

- Una incidencia de permiso oficial debe tener al menos una fecha oficial.
- Máximo inicial: 3 fechas oficiales.
- Cada fecha oficial puede tener una fecha de uso.
- Si fecha_uso está vacía, el estado será Pendiente.
- Si fecha_uso existe, el estado será Utilizada.
- Una fecha de uso Utilizada no debe modificarse ni borrarse.
- Solo Direccion puede editar usos.

---

## 10. Tabla notificaciones

Pendiente de diseño.

Campos conceptuales:

- id
- folio
- usuario_id
- mensaje
- enviado_por_id
- fecha_envio
- estado_id
- fecha_lectura
- leido_por_id
- created_at
- updated_at

---

## 11. Tabla auditoria_eventos

Pendiente de diseño.

Debe reemplazar o mejorar la hoja Papelera.

Objetivo:

- registrar eliminaciones
- registrar cambios críticos
- registrar quién hizo qué
- conservar evidencia del estado anterior

---

## 12. Tabla sistema_estado

Pendiente de diseño.

Uso inicial:

- ping técnico anti-inactividad
- valores técnicos del sistema

---

## 13. Pendientes

- Definir columnas exactas.
- Definir tipos de datos.
- Definir llaves primarias.
- Definir llaves foráneas.
- Definir índices.
- Definir restricciones.
- Definir políticas RLS.
