# SEC2-SUPABASE-004 — Convenciones del Proyecto

## Objetivo

Este documento define las reglas de nomenclatura, organización y desarrollo del proyecto SEC2-Incidencias.

Estas reglas deberán respetarse durante todo el desarrollo para mantener una arquitectura consistente, legible y fácil de mantener.

---

# 1. Filosofía del proyecto

Principios generales:

- Diseñar antes de programar.
- Documentar antes de implementar.
- Construir por fases.
- Evitar retrocesos estructurales.
- Priorizar claridad sobre rapidez.
- Mantener arquitectura limpia.
- No duplicar lógica innecesariamente.
- Todo cambio importante deberá quedar documentado.

---

# 2. Idioma

El proyecto utilizará español para:

- tablas
- columnas
- funciones SQL
- documentación
- comentarios

Se permitirá inglés únicamente para:

- palabras reservadas de SQL
- PostgreSQL
- Supabase
- JavaScript
- nombres internos obligatorios

---

# 3. Convención de nombres

Todas las tablas utilizarán:

- minúsculas
- snake_case

Ejemplos:

usuarios
incidencias
notificaciones
permiso_oficial_fechas

Nunca:

Usuarios
Incidencias
MiTabla

---

# 4. Columnas

Todas las columnas utilizarán:

snake_case

Ejemplos:

id_acceso

fecha_registro

fecha_oficial_1

usuario_id

created_at

updated_at

---

# 5. Claves primarias

Toda tabla tendrá una única clave primaria llamada:

id

No existirán claves primarias llamadas:

id_usuario

id_notificacion

id_incidencia

Esas serán claves foráneas.

---

# 6. Claves foráneas

Las relaciones seguirán esta regla:

usuario_id

rol_id

turno_id

incidencia_id

tipo_incidencia_id

estado_id

---

# 7. Tipos de fecha

Siempre que sea posible se utilizarán los tipos propios de PostgreSQL.

No almacenar fechas como texto.

---

# 8. Contraseñas

Nunca almacenar contraseñas en texto plano.

Siempre utilizar hash.

---

# 9. Auditoría

Todo cambio importante deberá poder rastrearse.

Registrar:

- quién

- cuándo

- qué modificó

---

# 10. Seguridad

Toda tabla sensible utilizará:

Row Level Security (RLS)

No confiar únicamente en restricciones del frontend.

---

# 11. Frontend

Mantener:

- diseño actual

- estructura modular

- apariencia tipo aplicación

Modificar únicamente la comunicación con el backend.

---

# 12. Backend

Toda comunicación con Supabase deberá pasar por:

api.js

Evitar consultas SQL distribuidas por múltiples archivos JavaScript.

---

# 13. GitHub

Cada cambio importante deberá representar un checkpoint estable.

No acumular muchos cambios sin confirmar.

---

# 14. Documentación

Antes de crear una tabla deberá existir:

- ficha técnica

Antes de crear una función deberá existir:

- descripción funcional

Antes de modificar arquitectura deberá actualizarse la documentación.

---

# 15. Objetivo final

Construir una aplicación mantenible durante varios años, con arquitectura profesional, escalable y segura.
