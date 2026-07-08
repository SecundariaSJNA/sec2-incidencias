# SEC2-SUPABASE-003 — Fichas Técnicas de Tablas

## Objetivo

Este documento contiene la ficha técnica de cada tabla antes de crearla en Supabase.

Cada tabla se diseñará aquí primero para evitar errores estructurales posteriores.

---

## Orden de diseño

1. roles
2. turnos
3. tipos_incidencia
4. estados_incidencia
5. estados_uso_permiso
6. estados_notificacion
7. usuarios
8. incidencias
9. permiso_oficial_fechas
10. notificaciones
11. auditoria_eventos
12. sistema_estado
---

# TABLA 001 — roles

## Objetivo

Almacenar los roles oficiales del sistema.

Es una tabla catálogo.

No almacena personas.

Solo define los tipos de usuario que existen.

---

## Tipo

Catálogo.

---

## Registros esperados

Muy pocos.

Inicialmente:

- Dirección
- Correspondencia
- Prefectura
- Docente

---

## Crecimiento esperado

Muy bajo.

Probablemente menos de 15 registros durante toda la vida del sistema.

---

## Dependencias

Será utilizada por:

- usuarios

---

## Relaciones

Un rol puede pertenecer a muchos usuarios.

Un usuario pertenece únicamente a un rol.

Relación:

roles

↓

usuarios

---

## Columnas previstas

id

nombre

descripcion

activo

created_at

updated_at

---

## Restricciones

El nombre del rol no podrá repetirse.

No podrá eliminarse un rol que tenga usuarios asociados.

---

## Índices

Clave primaria:

id

Índice único:

nombre

---

## Seguridad

Solo Dirección podrá administrar los roles.

Los demás únicamente podrán consultarlos.

---

## Observaciones

Esta tabla prácticamente nunca cambia.

Constituye uno de los catálogos principales del sistema.
