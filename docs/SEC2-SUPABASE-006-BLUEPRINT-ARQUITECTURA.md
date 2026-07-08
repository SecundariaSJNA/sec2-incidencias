# SEC2-SUPABASE-006 — Blueprint de Arquitectura

## 1. Objetivo

Definir el plano maestro concreto de SEC2-Incidencias antes de crear tablas, funciones o políticas en Supabase.

Este documento conecta:

- frontend
- backend
- base de datos
- seguridad
- roles
- PWA
- auditoría
- flujos principales

---

## 2. Arquitectura general

Frontend:

- GitHub Pages
- HTML
- CSS
- JavaScript modular
- PWA

Backend/Base de datos:

- Supabase
- PostgreSQL
- Row Level Security
- Funciones RPC cuando sea necesario

---

## 3. Flujo general nuevo

Usuario abre la app desde QR o icono instalado.

↓

index.html carga la interfaz.

↓

app.js controla sesión y navegación.

↓

api.js se comunica con Supabase.

↓

Supabase valida permisos.

↓

PostgreSQL devuelve solo datos autorizados.

---

## 4. Módulos frontend

Archivos principales:

- index.html
- css/style.css
- js/app.js
- js/api.js
- js/ui.js
- js/incidencias.js
- js/reportes.js
- js/notificaciones.js
- manifest.json
- sw.js

Regla:

api.js será la única puerta entre frontend y Supabase.

---

## 5. Entidades principales

- usuario
- rol
- turno
- tipo_incidencia
- incidencia
- permiso_oficial_fecha
- notificacion
- auditoria_evento
- sistema_estado

---

## 6. Flujo de autenticación

El usuario ingresa:

- id_acceso
- contraseña

Supabase valida credenciales.

Si son correctas:

- devuelve usuario autorizado
- devuelve rol
- devuelve turno
- inicia sesión local controlada

Reglas:

- usuario inactivo no puede entrar
- rol debe coincidir con módulo
- no se expone password_hash
- ningún usuario puede consultar datos ajenos

---

## 7. Flujo por roles

### Direccion

Puede:

- ver todo
- registrar incidencias
- editar usos de permiso oficial
- eliminar incidencias
- enviar notificaciones
- consultar reportes
- consultar historiales

### Correspondencia

Puede:

- consultar fechas
- consultar historial según turno
- ver personal permitido por turno

No puede:

- registrar incidencias
- eliminar incidencias
- editar permisos oficiales

### Prefectura

Puede:

- ver reporte del día
- ver reporte semanal
- consultar historial según turno

No puede:

- registrar incidencias
- eliminar incidencias
- enviar notificaciones

### Docente

Puede:

- ver su perfil
- ver su historial
- ver sus notificaciones

No puede:

- ver datos de otros
- registrar incidencias
- eliminar incidencias

---

## 8. Flujo de incidencias

Direccion selecciona usuario.

↓

Selecciona tipo de incidencia.

↓

Captura fechas y observaciones.

↓

Supabase valida permisos.

↓

Se guarda incidencia.

↓

Se registra auditoría si aplica.

---

## 9. Flujo de permiso oficial

Permiso oficial es una incidencia especial.

Tiene:

- una incidencia principal
- una o más fechas oficiales
- una fecha de uso por cada fecha oficial
- estado de uso

Reglas:

- requiere al menos una fecha oficial
- máximo inicial: tres fechas oficiales
- fecha_inicio se calcula desde la menor fecha oficial
- fecha_fin se calcula desde la mayor fecha oficial
- uso pendiente no tiene fecha de uso
- uso utilizado tiene fecha de uso
- uso utilizado no se debe modificar ni borrar
- solo Direccion puede registrar usos

---

## 10. Flujo de notificaciones

Direccion envía mensaje.

↓

Se crea notificación para usuario destino.

↓

Usuario la ve en su módulo.

↓

Al abrirla:

- cambia a Leída
- guarda fecha_lectura
- guarda leido_por

---

## 11. Flujo de reportes

Reporte del día:

- calcula incidencias activas en una fecha
- filtra según rol y turno
- calcula presentes y ausentes

Reporte semanal:

- calcula rango de 7 días
- agrupa por día
- filtra según rol y turno

Consulta de fechas:

- Dirección y Correspondencia
- rango personalizado
- filtra según permisos

---

## 12. Auditoría

Todo cambio crítico debe registrar:

- usuario que ejecuta
- acción
- tabla afectada
- registro afectado
- valores anteriores si aplica
- valores nuevos si aplica
- fecha y hora

Eventos críticos:

- creación de incidencia
- edición de permiso oficial
- eliminación de incidencia
- envío de notificación
- lectura de notificación si se decide auditar

---

## 13. PWA

La app debe poder:

- abrirse desde QR
- instalarse en Android
- instalarse en iPhone
- mostrar icono correcto
- usar nombre correcto
- evitar apariencia de sitio web genérico

Archivos:

- manifest.json
- sw.js
- iconos
- apple-touch-icon

Regla:

El service worker no debe cachear respuestas con datos personales.

---

## 14. Supabase

Componentes previstos:

- tablas
- relaciones
- índices
- restricciones
- RLS
- funciones RPC
- storage no requerido inicialmente

---

## 15. Orden de construcción

1. Documentación
2. Catálogos
3. Usuarios
4. Autenticación
5. Incidencias
6. Permisos oficiales
7. Reportes
8. Notificaciones
9. Auditoría
10. PWA
11. Ping técnico
12. Datos reales

---

## 16. Regla de avance

No se implementa una fase hasta que su diseño esté aprobado.

No se crean tablas sin ficha técnica.

No se modifica frontend hasta que la base y seguridad estén definidas.

---

## 17. Pendientes

- Definir si notificaciones admitirán múltiples destinatarios en versión 1.
- Definir método exacto de hash de contraseñas.
- Definir formato final de sesiones.
- Definir si se auditará lectura de notificaciones.
- Definir estructura final de importación desde Excel o CSV.
