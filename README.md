# Proyecto Angular 17

Este proyecto está construido con [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8. Utiliza Node.js 20.14.0, junto con npm 10.7.0. y Tailwind 3.4.4 para el diseño UI. Se han añadido funcionalidades de seguridad, como guards, para la protección de rutas al momento de autenticarse.

## Requisitos

- **Node.js**: Versión 20.14.0
- **npm**: Versión 10.7.0

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

O Descargar el ZIP
Puedes descargar el proyecto como un archivo ZIP desde [este enlace](https://github.com/mikemendozal/angular17-app/archive/refs/heads/develop.zip)

## Instalar Dependencias
Navega al directorio del proyecto e instala las dependencias necesarias:

```bash
cd tu-repositorio
npm install
```

## Ejecución del Proyecto
Para ejecutar el proyecto en un entorno de desarrollo, utiliza el siguiente comando:

```bash
ng serve
```

Esto abrirá una nueva pestaña en tu navegador en http://localhost:4200.

## Credenciales de Acceso
Para iniciar sesión, usa las siguientes credenciales estáticas:

**Usuario**
```bash
admin
```

**Contraseña**
```bash  
admin2024
```

## Implementación de Tailwind CSS
Este proyecto utiliza Tailwind CSS para la estilización. Puedes personalizar los estilos en el archivo tailwind.config.js y en las hojas de estilo de tu aplicación.

## Seguridad
Para proteger las rutas, se han implementado guards que verifican la autenticación del usuario. Esto asegura que solo los usuarios autenticados puedan acceder a determinadas rutas dentro de la aplicación.

## Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:
* Fork del repositorio
* Clonar el repositorio
* Actualizar la rama master
* Crear una rama
* Hacer los cambios
* Hacer un Pull Request

### Fork del repositorio
El primer paso es hacer "Fork" del repositorio.

### Clonar el repositorio
Después de tener el repositorio en nuestra cuenta, seleccionar la dirección del repositorio "SSH o HTTP" y clonar:

```bash
$ git clone https://github.com/mikemendozal/angular17-app.git
```

Dentro de la carpeta que genera, comprobar la URL del repositorio:

```bash
$ git remote -v
```

Antes de realizar modificaciones agregar la URL del repositorio original del proyecto:

```bash
$ git remote add upstream https://github.com/mikemendozal/angular17-app.git(Forkeado)
```

Comprobar

```bash
$ git remote -v
```

### Actualizar la rama Master
Antes de empezar a trabajar, obtener los últimos cambios del Repo Original:

```bash
$ git pull -r upstream master
```

### Crear una Rama
Para crear una rama usar la opción "checkout" de git:

```bash
$ git checkout -b feature-nombre-rama
```

### Hacer cambios
Realizar todos los cambios que se desea hacer al proyecto.

Agregar los archivos y hacer un commit

Después de realizar el commit hacer el push hacia nuestro repositorio indicando la rama que hemos creado.

```bash
$ git push origin feature-nombre-rama
```

### Hacer un Pull Request
Hacer click en "Compare & Pull Request"

Escribir cambios del Pull Request.

Si todo está bien, enviar con el botón "Send Pull Request".
