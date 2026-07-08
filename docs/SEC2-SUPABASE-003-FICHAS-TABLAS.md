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
---

# ENTREGABLE 01 — Catálogos del Sistema

## Objetivo del entregable

Definir las tablas catálogo iniciales del sistema SEC2-Incidencias.

Las tablas catálogo contienen valores controlados que el sistema usa para evitar errores de escritura, duplicidad o inconsistencias.

Ejemplos:

- roles
- turnos
- tipos de incidencia
- estados

Estas tablas cambian poco, pero son fundamentales para que el sistema tenga orden, seguridad y reglas claras.

---

# Concepto: tabla catálogo

Una tabla catálogo es una tabla con valores relativamente fijos.

No guarda movimientos diarios.

No guarda incidencias.

No guarda mensajes.

Solo guarda listas oficiales de valores que otras tablas usarán.

Ejemplo:

En vez de escribir manualmente el rol en cada usuario:

- Direccion
- direccion
- Dirección
- DIRECCION

se crea una tabla `roles` y cada usuario queda relacionado con un rol válido.

Esto evita errores y hace más limpio el sistema.

---

# TABLA 001 — roles

## Objetivo

Almacenar los roles oficiales del sistema.

Define qué tipo de usuario es una persona y qué permisos generales tendrá dentro de la aplicación.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| direccion | Direccion |
| correspondencia | Correspondencia |
| prefectura | Prefectura |
| docente | Docente |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave técnica del rol |
| nombre | Nombre visible del rol |
| descripcion | Explicación del rol |
| activo | Indica si el rol está disponible |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- No se debe eliminar un rol si tiene usuarios asociados.
- Si un rol deja de usarse, se marcará como inactivo.

---

## Relaciones

Un rol puede estar asignado a muchos usuarios.

Un usuario solo tendrá un rol principal.

Relación:

roles  
↓  
usuarios

---

## Seguridad

- Dirección podrá administrar roles.
- Los demás roles solo podrán consultarlos.
- Ningún usuario común podrá crear roles nuevos.

---

## Observaciones

Esta tabla es fundamental para el sistema de permisos.

No debe depender únicamente del frontend. Los permisos también deberán validarse en Supabase.

---

# TABLA 002 — turnos

## Objetivo

Almacenar los turnos oficiales del sistema.

Sirve para filtrar usuarios, incidencias y reportes según el turno permitido.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| M | Matutino |
| V | Vespertino |
| A | Ambos |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave corta del turno |
| nombre | Nombre visible del turno |
| descripcion | Explicación del turno |
| activo | Indica si el turno está disponible |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- No se debe eliminar un turno si tiene usuarios asociados.
- El turno `A` representa visibilidad o asignación general.

---

## Relaciones

Un turno puede estar asignado a muchos usuarios.

Un usuario pertenece a un turno.

Relación:

turnos  
↓  
usuarios

---

## Seguridad

- Dirección podrá administrar turnos.
- Los demás roles solo podrán consultarlos.

---

## Observaciones

En la lógica anterior, un usuario con turno `A` podía ver información de ambos turnos.

Esta regla deberá conservarse en Supabase.

---

# TABLA 003 — tipos_incidencia

## Objetivo

Almacenar los tipos oficiales de incidencia que pueden registrarse en el sistema.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| permiso_oficial | Permiso oficial |
| incapacidad | Incapacidad |
| humanitario_sindical | Humanitario sindical |
| humanitario_oficial | Humanitario oficial |
| comision_sindical | Comisión sindical |
| comision_oficial | Comisión oficial |
| especial | Especial |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave técnica del tipo |
| nombre | Nombre visible |
| descripcion | Explicación del tipo de incidencia |
| requiere_licencia_medica | Indica si requiere licencia médica |
| es_permiso_oficial | Indica si activa lógica especial de permiso oficial |
| activo | Indica si el tipo está disponible |
| orden | Orden visual en formularios |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- `permiso_oficial` deberá tener `es_permiso_oficial = true`.
- `incapacidad` deberá tener `requiere_licencia_medica = true`.
- Los tipos inactivos no aparecerán en formularios nuevos.
- Los tipos inactivos seguirán existiendo para historiales antiguos.

---

## Relaciones

Un tipo de incidencia puede estar asociado a muchas incidencias.

Una incidencia tendrá un solo tipo de incidencia.

Relación:

tipos_incidencia  
↓  
incidencias

---

## Seguridad

- Dirección podrá administrar tipos de incidencia.
- Los demás roles solo podrán consultarlos.

---

## Observaciones

En el sistema anterior también se trataba `Permiso personal` como compatible con `Permiso oficial`.

En la nueva base no se agregará inicialmente como tipo principal, pero deberá considerarse en la migración de datos históricos si aparece en registros antiguos.

---

# TABLA 004 — estados_incidencia

## Objetivo

Almacenar los estados posibles de una incidencia.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| activa | Activa |
| eliminada | Eliminada |
| cancelada | Cancelada |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave técnica del estado |
| nombre | Nombre visible |
| descripcion | Explicación del estado |
| activo | Indica si el estado puede usarse |
| orden | Orden visual |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- Una incidencia nueva iniciará normalmente como `activa`.
- Una incidencia eliminada no deberá desaparecer físicamente.
- El estado `eliminada` conserva historial y auditoría.

---

## Relaciones

Un estado puede estar asociado a muchas incidencias.

Una incidencia tendrá un solo estado.

Relación:

estados_incidencia  
↓  
incidencias

---

## Seguridad

- Dirección podrá administrar estados.
- Los demás roles solo podrán consultarlos.

---

## Observaciones

En el sistema anterior, eliminar una incidencia significaba marcarla como `Eliminada` y copiarla a Papelera.

En Supabase se conservará la idea de no borrar físicamente información importante.

---

# TABLA 005 — estados_uso_permiso

## Objetivo

Almacenar los estados posibles de cada fecha de uso dentro de un permiso oficial.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| pendiente | Pendiente |
| utilizada | Utilizada |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave técnica del estado |
| nombre | Nombre visible |
| descripcion | Explicación del estado |
| activo | Indica si el estado puede usarse |
| orden | Orden visual |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- Si una fecha de uso no tiene fecha registrada, su estado será `pendiente`.
- Si una fecha de uso tiene fecha registrada, su estado será `utilizada`.
- Una fecha marcada como `utilizada` no deberá poder modificarse ni borrarse.

---

## Relaciones

Un estado de uso puede estar asociado a muchas fechas de permiso oficial.

Una fecha de permiso oficial tendrá un solo estado de uso.

Relación:

estados_uso_permiso  
↓  
permiso_oficial_fechas

---

## Seguridad

- Dirección podrá registrar usos de permisos oficiales.
- Los demás roles solo podrán consultar según sus permisos.
- La protección de usos utilizados deberá existir en Supabase, no solo en el frontend.

---

## Observaciones

Esta tabla protege una de las reglas más delicadas del sistema: los permisos oficiales con fechas posteriores de uso.

---

# TABLA 006 — estados_notificacion

## Objetivo

Almacenar los estados posibles de una notificación.

---

## Tipo

Catálogo.

---

## Registros iniciales

| clave | nombre |
|---|---|
| no_leida | No leída |
| leida | Leída |

---

## Columnas previstas

| columna | descripción |
|---|---|
| id | Identificador interno único |
| clave | Clave técnica del estado |
| nombre | Nombre visible |
| descripcion | Explicación del estado |
| activo | Indica si el estado puede usarse |
| orden | Orden visual |
| created_at | Fecha de creación |
| updated_at | Fecha de última actualización |

---

## Reglas

- `clave` no podrá repetirse.
- `nombre` no podrá repetirse.
- Una notificación nueva inicia como `no_leida`.
- Al abrirse por el destinatario cambia a `leida`.
- Al marcarse como leída se registra `fecha_lectura`.
- Al marcarse como leída se registra `leido_por`.

---

## Relaciones

Un estado puede estar asociado a muchas notificaciones.

Una notificación tendrá un solo estado.

Relación:

estados_notificacion  
↓  
notificaciones

---

## Seguridad

- Dirección podrá enviar notificaciones.
- Cada usuario solo podrá consultar sus propias notificaciones.
- El cambio de estado a leída deberá validarse en Supabase.

---

## Observaciones

Este catálogo permitirá manejar notificaciones de forma limpia y ampliable.

En futuras versiones podrían agregarse estados como:

- archivada
- eliminada
- enviada
- fallida

sin modificar la estructura principal de la tabla `notificaciones`.

---

# Decisiones cerradas de este entregable

## 1. Los catálogos serán tablas independientes

No se usarán listas escritas directamente dentro del código JavaScript.

---

## 2. Se usará `clave` para lógica interna

Ejemplo:

- `direccion`
- `docente`
- `permiso_oficial`
- `activa`
- `no_leida`

Esto evita depender de textos visibles que pueden cambiar.

---

## 3. Se usará `nombre` para mostrar en pantalla

Ejemplo:

- Dirección
- Docente
- Permiso oficial
- Activa
- No leída

---

## 4. Los catálogos tendrán campo `activo`

No se eliminarán valores usados históricamente.

Si un valor deja de usarse, se desactiva.

---

## 5. Los catálogos tendrán `created_at` y `updated_at`

Esto permite auditoría técnica básica desde el inicio.

---

# Pendientes posteriores

Después de aprobar estos catálogos se diseñarán las tablas núcleo:

- usuarios
- incidencias
- permiso_oficial_fechas

Estas tablas dependerán directamente de los catálogos definidos en este entregable.
Esta tabla prácticamente nunca cambia.

Constituye uno de los catálogos principales del sistema.
