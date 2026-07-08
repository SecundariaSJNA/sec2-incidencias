# SEC2-SUPABASE-005 — Modelo Conceptual

## Objetivo

Este documento identifica las entidades reales del sistema antes de diseñar la base de datos.

Una entidad representa un objeto del mundo real que la aplicación necesita administrar.

Todavía NO se definen tablas, columnas ni tipos de datos.

Solo se identifica qué existe realmente dentro del sistema.

---

# Principios

Antes de crear una tabla debemos responder:

- ¿Qué representa?
- ¿Tiene vida propia?
- ¿Puede existir sin otra entidad?
- ¿Debe conservar historial?
- ¿Puede crecer en el futuro?

Si la respuesta es sí, probablemente merece convertirse en una entidad independiente.

---

# Entidad: Usuario

Representa una persona que puede acceder al sistema.

Puede ser:

- Dirección
- Correspondencia
- Prefectura
- Docente

Responsabilidades:

- autenticarse
- consultar información
- registrar acciones según permisos
- recibir notificaciones

---

# Entidad: Rol

Representa el conjunto de permisos asignados a un usuario.

Ejemplos:

- Dirección
- Correspondencia
- Prefectura
- Docente

---

# Entidad: Turno

Representa el turno escolar al que pertenece un usuario.

Valores iniciales:

- M
- V
- A

---

# Entidad: Tipo de Incidencia

Representa la clasificación de una incidencia.

Ejemplos:

- Permiso oficial
- Incapacidad
- Comisión sindical
- Comisión oficial
- Humanitario oficial
- Humanitario sindical
- Especial

---

# Entidad: Incidencia

Representa un evento registrado para un usuario.

Debe almacenar únicamente la información propia de la incidencia.

No debe duplicar información permanente del usuario.

---

# Entidad: Permiso Oficial

Representa una incidencia especial.

Características:

- posee fechas oficiales
- posee fechas de uso
- requiere reglas especiales
- solo Dirección puede modificar ciertos datos

Esta entidad dependerá de una incidencia.

---

# Entidad: Fecha Oficial

Representa cada una de las fechas autorizadas dentro de un permiso oficial.

Cada permiso oficial puede tener hasta tres inicialmente.

Cada fecha puede tener:

- fecha oficial
- fecha de uso
- estado

En futuras versiones el límite podría aumentar sin modificar la estructura general.

---

# Entidad: Notificación

Representa un mensaje interno enviado por el sistema.

Características:

- tiene remitente
- tiene destinatario
- tiene estado
- registra lectura

---

# Entidad: Auditoría

Representa el historial de cambios importantes.

Debe registrar:

- quién realizó una acción
- cuándo ocurrió
- qué cambió

Su objetivo es preservar trazabilidad.

---

# Entidad: Sistema

Representa información técnica del funcionamiento interno.

Ejemplos:

- último ping
- parámetros técnicos
- configuración del sistema

No almacena información escolar.

---

# Relaciones conceptuales

Usuario
↓
genera
↓
Incidencia

Usuario
↓
recibe
↓
Notificación

Usuario
↓
tiene
↓
Rol

Usuario
↓
pertenece
↓
Turno

Incidencia
↓
puede convertirse en
↓
Permiso Oficial

Permiso Oficial
↓
contiene
↓
Fechas Oficiales

Sistema
↓
mantiene
↓
Estado Técnico

Auditoría
↓
registra acciones sobre
↓
Usuarios
Incidencias
Notificaciones

---

# Objetivo de este modelo

Comprender el dominio del problema antes de diseñar la base de datos.

Este documento servirá como base para construir posteriormente:

- Modelo lógico
- Modelo físico
- Base de datos PostgreSQL
