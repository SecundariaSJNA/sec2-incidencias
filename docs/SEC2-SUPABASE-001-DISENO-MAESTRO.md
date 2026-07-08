# SEC2-SUPABASE-001 — Diseño Maestro

## 1. Objetivo del documento

Este documento define la arquitectura base para migrar la aplicación SEC2-Incidencias desde Google Apps Script + Google Sheets hacia GitHub Pages + Supabase.

La prioridad es conservar la lógica funcional existente, especialmente roles, incidencias, permisos oficiales, reportes, notificaciones, auditoría y comportamiento tipo app instalada.

---

## 2. Arquitectura anterior

Frontend:
- GitHub Pages
- HTML
- CSS
- JavaScript
- Manifest PWA
- Service Worker

Backend:
- Google Apps Script

Base de datos:
- Google Sheets

Hojas principales:
- Usuarios
- Incidencias
- Notificaciones
- Papelera
- Configuracion

---

## 3. Arquitectura nueva

Frontend:
- GitHub Pages

Backend / Base de datos:
- Supabase
- PostgreSQL
- Supabase API
- Funciones RPC cuando sea necesario

PWA:
- manifest.json
- sw.js
- iconos locales
- instalación en Android/iPhone
- acceso por QR

---

## 4. Principio de migración

No se reconstruirá la app desde cero visualmente.

Se conservará:
- diseño visual actual
- estructura de módulos
- navegación
- roles
- lógica de incidencias
- permisos oficiales
- reportes
- notificaciones
- PWA

Se reemplazará:
- Google Apps Script
- Google Sheets
- api.js antiguo

Por:
- Supabase PostgreSQL
- funciones SQL/RPC
- api.js nuevo

---

## 5. Roles del sistema

Roles oficiales:

- Direccion
- Correspondencia
- Prefectura
- Docente

Reglas generales:

- Direccion tiene control completo.
- Correspondencia consulta según turno.
- Prefectura consulta reportes según turno.
- Docente consulta únicamente su información propia.

---

## 6. Identidad principal

La identidad principal del sistema será:

`id_acceso`

Equivalencia con sistema anterior:

- Usuarios.IDAcceso → usuarios.id_acceso
- Incidencias.IDUsuario → incidencias.id_usuario
- Notificaciones.IDUsuario → notificaciones.id_usuario

La columna antigua `ID` no será identidad principal. Se conservará como código de auditoría si es necesario.

---

## 7. Tablas Supabase previstas

Tablas iniciales:

- usuarios
- incidencias
- notificaciones
- papelera
- sistema_estado
- configuracion, si se confirma necesaria

---

## 8. Tabla usuarios

Pendiente de diseño SQL definitivo.

Campos base previstos:

- id
- codigo_auditoria
- id_acceso
- nombre
- apellidos
- correo
- rol
- turno
- activo
- password_hash
- created_at
- updated_at

---

## 9. Tabla incidencias

Pendiente de diseño SQL definitivo.

Debe conservar la lógica de:

- IDIncidencia
- IDUsuario
- datos visibles de usuario
- tipo de incidencia
- fecha inicio
- fecha fin
- licencia médica
- observaciones
- registrado por
- fecha registro
- estado
- tres fechas oficiales
- tres fechas de uso
- tres estados de uso

---

## 10. Permiso oficial

El permiso oficial es lógica crítica.

Debe conservar:

- fecha_oficial_1
- fecha_oficial_2
- fecha_oficial_3
- uso_1_fecha
- uso_1_estado
- uso_2_fecha
- uso_2_estado
- uso_3_fecha
- uso_3_estado

Reglas:

- Requiere al menos fecha oficial 1.
- Fecha inicio será la menor fecha oficial.
- Fecha fin será la mayor fecha oficial.
- Los usos inician como Pendiente si no tienen fecha.
- Al registrar una fecha de uso, el estado pasa a Utilizada.
- Una fecha ya Utilizada no debe poder modificarse ni borrarse.
- Solo Direccion puede editar usos de permisos oficiales.

---

## 11. Tabla notificaciones

Pendiente de diseño SQL definitivo.

Debe conservar:

- IDNotificacion
- IDUsuario
- nombre
- apellidos
- correo
- rol
- turno
- mensaje
- enviado por
- fecha envío
- estado
- fecha lectura
- leído por

Reglas:

- Solo Direccion puede enviar.
- Cada usuario ve solo sus notificaciones.
- Al abrir una notificación pasa a Leída.
- Se guarda fecha_lectura.
- Se guarda leido_por.

---

## 12. Tabla papelera

Debe conservar auditoría de eliminación.

Reglas:

- Solo Direccion puede eliminar incidencias.
- La incidencia se copia a papelera.
- La incidencia original se marca como Eliminada.
- Se guarda eliminado_por.
- Se guarda fecha_eliminacion.

---

## 13. Seguridad

Principios:

- No exponer tablas sensibles públicamente.
- Usar Row Level Security.
- No guardar contraseñas en texto plano.
- No permitir que Docente vea datos de otra persona.
- No confiar solo en ocultar botones del frontend.
- Validar permisos también en Supabase.

---

## 14. PWA

Debe conservar:

- instalación desde Android
- instalación desde iPhone
- apertura desde QR
- icono correcto
- nombre correcto
- apariencia tipo app nativa
- sin banner innecesario

Pendiente revisar:

- manifest.json
- sw.js
- iconos
- apple-touch-icon
- theme-color
- cache seguro

---

## 15. Plan secuencial

Fase 1:
- Documento base
- Diseño de tablas
- Diseño de seguridad

Fase 2:
- Crear tablas Supabase
- Crear restricciones
- Crear índices
- Crear RLS

Fase 3:
- Datos ficticios
- Probar login

Fase 4:
- Nuevo api.js
- Conectar frontend a Supabase

Fase 5:
- Incidencias normales

Fase 6:
- Permisos oficiales

Fase 7:
- Historial y reportes

Fase 8:
- Notificaciones

Fase 9:
- Papelera y auditoría

Fase 10:
- PWA final

Fase 11:
- Ping técnico anti-inactividad

Fase 12:
- Carga de datos reales

---

## 16. Pendientes de decisión

- Confirmar estructura final de usuarios.
- Confirmar si configuracion será tabla separada.
- Confirmar método de autenticación inicial.
- Confirmar si se conservarán IDs tipo I001/N001.
- Confirmar estrategia de importación desde Excel/CSV.
