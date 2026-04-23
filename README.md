# is-2026-checkpoint-01

## Descripción

Este repositorio contiene el desarrollo de un trabajo práctico enfocado en la containerización de una aplicación fullstack. La solución está compuesta por múltiples servicios desacoplados: frontend, backend, base de datos y administración mediante Portainer, todos orquestados a través de Docker Compose.

El objetivo es garantizar un entorno consistente, reproducible y escalable, aplicando buenas prácticas de desarrollo colaborativo y despliegue basado en contenedores.

---

## Integrantes y asignación de roles

| Integrante       | Rol / Feature     |
|------------------|-------------------|
| Milagros Crespo  | Frontend          |
| Manuela Chanquía | Backend           |
| Lucía Meza       | Database          |
| Damián Piazza    | Docker / Compose  |
| Martina García   | Portainer         |

---

## Ejecución del proyecto

### Requisitos

* Docker
* Docker Compose

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/Damianpiazz/is-2026-checkpoint-01.git
cd is-2026-checkpoint-01
```

2. Configurar variables de entorno:

```bash
cp .env.example .env
```

3. Levantar los servicios:

```bash
docker compose up -d --build
```

4. Acceder a los servicios:

* Frontend: http://localhost:<puerto>
* Backend: http://localhost:<puerto>
* Portainer: http://localhost:9000

---

## Descripción de servicios

### Frontend

Aplicación cliente encargada de la interfaz de usuario. Consume la API del backend.

### Backend

Servicio encargado de la lógica de negocio y exposición de endpoints API.

### Database

Motor de base de datos utilizado para persistencia de datos. Inicializado mediante scripts.

### Portainer

Herramienta de administración visual para la gestión de contenedores Docker.

---

## Flujo de trabajo y colaboración (Feature Branch Workflow)

Se utiliza un modelo basado en ramas por funcionalidad. La rama `main` está protegida y no permite pushes directos. Toda integración se realiza mediante Pull Requests.

### Flujo de trabajo

1. Clonar el repositorio
2. Crear una rama:

```bash
git checkout -b feature/<nombre-feature>
```

3. Desarrollar la funcionalidad con commits atómicos
4. Subir la rama:

```bash
git push origin feature/<nombre-feature>
```

5. Abrir Pull Request hacia `main`
6. Esperar revisión y aprobación
7. Merge realizado por el coordinador

### Actualización de cambios

```bash
git checkout main
git pull
```

---

## Convención de commits

Se utiliza el estándar Conventional Commits.

### Formato

```
tipo(scope): descripción corta en tiempo presente
```

### Tipos

* feat: nueva funcionalidad
* fix: corrección de errores
* docs: documentación
* chore: mantenimiento/configuración
* refactor: mejora interna sin cambio funcional

### Scope

Debe indicar el componente afectado:

* frontend
* backend
* database
* compose
* readme

### Ejemplos válidos

```
feat(frontend): agrega tabla de integrantes con fetch al backend
fix(backend): corrige ruta del endpoint /api/team
docs(readme): documenta instrucciones de instalación
chore(database): agrega script init.sql con tabla members
feat(compose): agrega servicio portainer con volumen persistente
```

### Ejemplos inválidos

```
fix
cambios
terminado
wip
arregle cosas
```

---

## Reglas para Pull Requests

### Apertura

* Todo cambio debe realizarse mediante Pull Request hacia `main`

### Revisión

* Al menos un integrante debe revisar el código
* Se deben resolver observaciones antes de aprobar

### Restricciones

* No se permite auto-merge
* El merge lo realiza el coordinador del equipo

### Contenido del Pull Request

#### Título

```
tipo: descripción breve
```

#### Descripción obligatoria

* Resumen
* Motivación
* Cambios realizados
* Cómo probarlo
* Impacto