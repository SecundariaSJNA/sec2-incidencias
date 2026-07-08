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
---

# AUDITORÍA 01 — Arquitectura General del Backend

## Estado general

La versión analizada de `gsfinscript` corresponde a un backend maduro.

No se trata de un prototipo.

Contiene una arquitectura organizada por módulos, separación de responsabilidades y utilidades reutilizables.

Esto confirma que la migración debe conservar la lógica funcional, pero no necesariamente la implementación.

---

# Arquitectura detectada

El backend se encuentra organizado aproximadamente en los siguientes bloques:

1. Configuración
2. Utilidades generales
3. Lectura de tablas
4. Normalización
5. Manejo de fechas
6. Usuarios
7. Sesión y autenticación
8. Incidencias
9. Permisos oficiales
10. Notificaciones
11. Reportes
12. Papelera
13. Seguridad
14. API (GET / POST)

La separación es suficientemente clara para migrar cada módulo de manera independiente.

---

# Patrón de acceso a datos

El sistema utiliza un patrón consistente:

Google Sheets

↓

leerTabla()

↓

Objetos JavaScript

↓

Funciones del sistema

↓

Respuesta JSON

En Supabase este flujo cambiará a:

PostgreSQL

↓

Consulta SQL

↓

Objetos JavaScript

↓

Respuesta JSON

La lógica superior podrá mantenerse prácticamente igual.

---

# Sistema de lectura

Se detectó una función central llamada:

leerTabla()

Responsabilidades:

- leer cualquier hoja
- convertir filas en objetos
- asociar encabezados
- eliminar filas vacías
- utilizar caché

Esta función constituye el equivalente al futuro repositorio de datos en Supabase.

---

# Sistema de escritura

El backend utiliza funciones genéricas como:

- actualizarCamposPorEncabezado()
- appendRowPorEncabezado()

Estas funciones permiten escribir utilizando nombres de columnas en lugar de índices numéricos.

Esta decisión fue correcta y facilita la migración.

En PostgreSQL ese comportamiento será reemplazado por consultas SQL.

---

# Sistema de normalización

Existe un módulo completo dedicado a normalizar datos.

Se identificaron funciones para:

- texto
- correo
- fechas
- fecha y hora
- roles

La normalización evita inconsistencias antes de almacenar información.

Este comportamiento deberá mantenerse durante la migración.

---

# Manejo de fechas

Se detectaron funciones específicas para:

- fecha actual
- fecha y hora actual
- sumar días
- obtener fecha mínima
- obtener fecha máxima

Estas funciones son especialmente importantes para:

- permisos oficiales
- reportes
- incidencias

En PostgreSQL parte de estas operaciones podrán ejecutarse directamente mediante SQL.

---

# Caché

El backend utiliza CacheService de Google Apps Script.

Objetivo:

- reducir lecturas repetidas de Google Sheets
- mejorar velocidad

En Supabase este mecanismo cambiará.

No existirá CacheService.

La optimización vendrá principalmente de:

- índices
- consultas SQL
- PostgreSQL

---

# API detectada

El backend expone acciones mediante POST.

Acciones identificadas hasta este momento:

- iniciarSesion
- guardarIncidencia
- guardarUsosPermisoOficial
- eliminarIncidencia
- guardarNotificacion

Cada acción:

- valida datos
- obtiene contexto
- ejecuta lógica
- limpia caché
- responde JSON

Este patrón será reutilizado durante la migración.

---

# Primera conclusión

La arquitectura general del backend es suficientemente modular para migrarse a Supabase por componentes.

No será necesario reescribir toda la lógica desde cero.

La estrategia correcta será:

módulo por módulo

↓

función por función

↓

tabla por tabla

↓

pruebas unitarias

antes de continuar con el siguiente módulo.

---

# Decisiones preliminares

Se aprueban provisionalmente las siguientes decisiones:

✓ mantener separación por módulos

✓ mantener funciones utilitarias

✓ mantener normalización

✓ eliminar dependencia de Google Sheets

✓ eliminar CacheService

✓ sustituir acceso por consultas PostgreSQL

✓ conservar la estructura lógica del backend
---

# AUDITORÍA 02 — Autenticación y Seguridad

## Objetivo del módulo

Controlar el acceso de los usuarios al sistema y determinar qué puede hacer cada uno según su rol.

El sistema actual implementa autenticación propia basada en Google Sheets.

Durante la migración este comportamiento se conservará funcionalmente, pero cambiará de infraestructura.

---

# Flujo de autenticación detectado

El proceso identificado es el siguiente:

Usuario

↓

Captura:

- IDAcceso
- Contraseña

↓

Se envía acción:

iniciarSesion

↓

verificarCredenciales()

↓

buscarUsuarioPorIDAcceso()

↓

Validación de usuario activo

↓

Validación de contraseña

↓

Creación del objeto de sesión

↓

Respuesta JSON al frontend

---

# Identificador principal

El sistema NO utiliza la columna ID como identidad del usuario.

Utiliza:

IDAcceso

Esta decisión fue correcta y deberá mantenerse.

Durante la migración:

IDAcceso

↓

id_acceso

seguirá siendo el identificador visible para el usuario.

---

# Estado del usuario

Se detectó una función:

usuarioEstaActivo()

Su finalidad es impedir el acceso de usuarios desactivados.

Actualmente interpreta múltiples valores como inactivo:

- no
- false
- falso
- baja
- inactivo
- 0

La lógica deberá simplificarse en PostgreSQL utilizando un campo booleano.

---

# Contraseñas

Estado actual

Las contraseñas se almacenan en texto plano y se comparan directamente durante el inicio de sesión.

Esto representa una limitación heredada de Google Sheets.

---

# Migración propuesta

En Supabase:

Las contraseñas nunca deberán almacenarse en texto plano.

Se utilizará un hash criptográfico.

El usuario seguirá ingresando la misma contraseña, pero la base de datos almacenará únicamente el hash.

---

# Contexto de sesión

Después del login el backend construye un objeto de sesión con:

- ID
- IDAcceso
- Nombre
- Apellidos
- Correo
- Rol
- Turno
- Activo

Este objeto será el equivalente al perfil del usuario autenticado.

En Supabase se obtendrá mediante la sesión autenticada y consultas controladas.

---

# Canonicalización de roles

Se detectó una normalización de nombres.

Ejemplos:

direccion

↓

Direccion

dir

↓

Direccion

doc

↓

Docente

prefectura

↓

Prefectura

Esta lógica evita inconsistencias históricas.

En Supabase la tabla `roles` eliminará la necesidad de esta normalización.

---

# Validación de permisos

Existe una función específica:

validarRol()

Su responsabilidad es impedir operaciones para usuarios sin autorización.

Esta separación es correcta.

En la nueva arquitectura esta validación existirá en dos niveles:

Frontend:

ocultar botones y opciones.

Supabase:

bloquear realmente el acceso mediante RLS y políticas de seguridad.

---

# Seguridad detectada

Fortalezas

✓ separación del login

✓ separación de permisos

✓ validación de usuario activo

✓ construcción de contexto

✓ normalización previa

Debilidades

- contraseñas en texto plano

- autenticación propia

- permisos dependen parcialmente del frontend

---

# Migración propuesta

Google Sheets

↓

Autenticación manual

↓

Comparación de contraseña

↓

Objeto de sesión

↓

Frontend

se transformará en:

Supabase

↓

Autenticación segura

↓

Sesión firmada

↓

Perfil del usuario

↓

Políticas RLS

↓

Frontend

---

# Decisiones aprobadas

✓ conservar IDAcceso como identificador visible.

✓ conservar la lógica de usuario activo.

✓ conservar los cuatro roles oficiales.

✓ eliminar almacenamiento de contraseñas en texto plano.

✓ trasladar la seguridad principal a Supabase.

✓ mantener el frontend prácticamente igual.

---

# Riesgos identificados

La autenticación será uno de los módulos con mayor cambio técnico.

Aunque el comportamiento visible será el mismo para el usuario, internamente cambiará completamente la infraestructura.

Esta migración deberá realizarse únicamente después de diseñar correctamente la tabla `usuarios` y las políticas RLS.
---

# AUDITORÍA 03 — Usuarios, Roles y Turnos

## Objetivo del módulo

Analizar cómo el backend actual administra usuarios, roles, turnos, visibilidad y selección de personal.

Este módulo será la base para diseñar la tabla `usuarios` y sus relaciones con `roles` y `turnos`.

---

# Hoja origen

El módulo trabaja principalmente con la hoja:

Usuarios

---

# Columnas detectadas

La función `obtenerUsuarios()` transforma cada fila de la hoja Usuarios en un objeto con los siguientes campos:

- ID
- Nombre
- Apellidos
- Correo
- Rol
- Turno
- Activo
- IDAcceso
- Contrasena

---

# Identidad funcional

El identificador funcional es:

IDAcceso

No es:

ID

La función `buscarUsuarioPorIDAcceso()` busca usuarios por `IDAcceso`.

Esto confirma que en Supabase la columna equivalente será:

id_acceso

---

# Columna ID

La columna `ID` no funciona como identidad principal de acceso.

Sin embargo, sí se usa como referencia de auditoría en otras partes del sistema, por ejemplo:

- RegistradoPor
- EnviadoPor
- LeidoPor
- EliminadoPor

En Supabase se recomienda conservar esta información como:

codigo_auditoria

o reemplazarla por relaciones reales hacia `usuarios.id`.

---

# Nombre y apellidos

El sistema conserva nombre y apellidos separados.

Además, el ordenamiento se hace por:

Apellidos + Nombre

Esta lógica deberá conservarse para desplegables y listados.

---

# Correo

El correo se normaliza a minúsculas.

Actualmente no es obligatorio para iniciar sesión.

Se conservará como campo informativo y para funciones futuras.

Posibles usos futuros:

- PDF
- avisos
- recuperación administrativa
- exportaciones
- reportes

No formará parte del login inicial.

---

# Rol

El rol se normaliza mediante `canonicalizarRol()`.

Roles válidos:

- Direccion
- Prefectura
- Docente
- Correspondencia

También acepta abreviaturas:

- dir
- pre
- doc
- cor

En Supabase esta normalización deberá sustituirse por una tabla `roles`.

---

# Turno

El turno se usa para restringir visibilidad.

Valores actuales:

- M
- V
- A

La lógica actual interpreta `A` como visibilidad amplia.

Si el usuario de sesión tiene turno `A`, puede ver información de ambos turnos.

Si el usuario objetivo tiene turno `A`, también puede ser visible para otros contextos autorizados.

---

# Usuario activo

La función `usuarioEstaActivo()` interpreta como inactivo cualquiera de estos valores:

- no
- false
- falso
- inactivo
- baja
- 0

Si el campo está vacío, el usuario se considera activo.

En Supabase esta lógica deberá simplificarse con:

activo boolean default true

---

# Visibilidad por rol

La función `usuarioVisiblePorTurno()` define reglas importantes:

## Dirección

Puede ver todos los usuarios.

## Docente

Solo puede verse a sí mismo.

## Correspondencia y Prefectura

Pueden ver usuarios según turno.

Reglas:

- si turno de sesión es A, puede ver todos
- si turno del usuario objetivo es A, puede verlo
- si ambos turnos coinciden, puede verlo

---

# Personal activo

La función `obtenerPersonalActivo()` filtra únicamente usuarios activos y los ordena por apellidos/nombre.

Esta lógica será necesaria para formularios y reportes.

---

# Usuarios para formulario

La función `obtenerUsuariosParaFormulario()` devuelve distintos resultados según rol:

## Dirección

Recibe todo el personal activo.

## Correspondencia

Recibe personal visible según turno.

## Prefectura

Recibe personal visible según turno.

## Docente

Recibe solo su propio usuario.

---

# Conclusión técnica

La tabla `usuarios` no debe diseñarse aislada.

Debe depender de:

- roles
- turnos

Y debe permitir:

- identidad visible mediante `id_acceso`
- control de activo/inactivo
- ordenamiento por apellidos y nombre
- visibilidad por turno
- permisos diferenciados por rol

---

# Decisiones para Supabase

Se aprueban preliminarmente:

- conservar `id_acceso` como identidad visible
- crear `usuarios.id` como identidad interna
- crear `roles` como catálogo
- crear `turnos` como catálogo
- conservar correo como dato no obligatorio para login
- reemplazar `Contrasena` por `password_hash`
- usar `activo boolean`
- conservar lógica de turno `A`

---

# Riesgos de migración

La visibilidad por turno no debe quedar solo en frontend.

Debe implementarse también en Supabase mediante funciones o políticas.

Si esto se descuida, un usuario podría intentar consultar información de otro turno manipulando peticiones.

---

# Equivalencia recomendada

Usuarios.ID

↓

usuarios.codigo_auditoria

Usuarios.IDAcceso

↓

usuarios.id_acceso

Usuarios.Contrasena

↓

usuarios.password_hash

Usuarios.Rol

↓

usuarios.rol_id

Usuarios.Turno

↓

usuarios.turno_id

Usuarios.Activo

↓

usuarios.activo
