# SEC2-SUPABASE-007 — Ingeniería Inversa del Backend

## Objetivo

Analizar completamente el backend desarrollado en Google Apps Script para comprender su funcionamiento antes de migrarlo a Supabase.

Este documento NO busca copiar el código.

Busca descubrir:

- la arquitectura real
- las reglas de negocio
- las dependencias
- la lógica implícita
- las validaciones
- las decisiones originales

El objetivo es migrar comportamiento, no necesariamente implementación.

---

# Filosofía

El código existente constituye la referencia funcional del sistema.

Sin embargo, durante la migración:

- podrá simplificarse
- podrá optimizarse
- podrá reorganizarse

siempre que el comportamiento final permanezca correcto.

---

# Objetivos de la ingeniería inversa

Durante el análisis deberán identificarse:

✓ funciones existentes

✓ flujo de autenticación

✓ flujo de permisos

✓ flujo de incidencias

✓ flujo de permisos oficiales

✓ flujo de notificaciones

✓ flujo de reportes

✓ validaciones

✓ reglas ocultas

✓ dependencias

✓ optimizaciones posibles

---

# Inventario general

Pendiente.

Se elaborará una lista completa de todas las funciones existentes en gsfinscript.

Cada función deberá clasificarse.

---

# Clasificación funcional

Las funciones se clasificarán como:

- autenticación

- incidencias

- permisos oficiales

- notificaciones

- reportes

- utilidades

- inicialización

- mantenimiento

- administración

---

# Flujo de autenticación

Pendiente.

Debe documentarse completamente.

Preguntas a responder:

- ¿Cómo inicia sesión?

- ¿Cómo identifica al usuario?

- ¿Cómo identifica el rol?

- ¿Cómo identifica el turno?

- ¿Cómo mantiene la sesión?

---

# Flujo de incidencias

Pendiente.

Responder:

- ¿Cómo se crea?

- ¿Cómo se valida?

- ¿Cómo se guarda?

- ¿Cómo se consulta?

- ¿Cómo se modifica?

- ¿Cómo se elimina?

---

# Flujo de permisos oficiales

Este será uno de los análisis más importantes.

Debe responder:

- cómo se registran

- cómo calcula fechas

- cómo calcula estados

- cómo registra usos

- cómo protege usos utilizados

- qué reglas automáticas existen

---

# Flujo de notificaciones

Pendiente.

Responder:

- creación

- lectura

- actualización de estado

- fecha de lectura

- usuario lector

---

# Flujo de reportes

Pendiente.

Responder:

- reporte del día

- reporte semanal

- consulta por fechas

- filtros

- agrupaciones

---

# Auditoría

Identificar:

- qué acciones generan auditoría

- qué información registra

- dónde la registra

---

# Hojas utilizadas

Pendiente.

Para cada hoja deberá documentarse:

- propósito

- columnas

- columnas obligatorias

- columnas opcionales

- columnas de compatibilidad

- columnas realmente utilizadas

---

# Dependencias

Documentar todas las dependencias encontradas entre:

Usuarios

↓

Incidencias

↓

Notificaciones

↓

Configuración

↓

Papelera

---

# Reglas de negocio

Documentar todas las reglas encontradas.

No únicamente las visibles.

También aquellas implícitas dentro del código.

---

# Validaciones

Documentar:

- validaciones de entrada

- validaciones de fechas

- validaciones por rol

- validaciones por turno

- validaciones por estado

---

# Optimizaciones posibles

Durante la ingeniería inversa deberán identificarse:

- código duplicado

- consultas repetidas

- validaciones redundantes

- estructuras simplificables

---

# Equivalencia Supabase

Para cada función importante deberá definirse:

Implementación actual

↓

Implementación equivalente en Supabase

---

# Riesgos de migración

Documentar cualquier comportamiento cuya migración requiera especial atención.

---

# Conclusiones

Este documento servirá como referencia oficial para diseñar la nueva arquitectura en Supabase.

Ninguna decisión importante de la base de datos deberá tomarse sin revisar previamente este análisis.
