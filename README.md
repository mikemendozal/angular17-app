# Proyecto Angular 17
====

Este proyecto está construido con [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8. Utiliza Node.js 20.14.0, junto con npm 10.7.0. y Tailwind CSS 3.4.4 para el diseño de la interfaz. Se han añadido funcionalidades de seguridad, como guards, para la protección de rutas al momento de autenticarse.

## Requisitos

- **Node.js**: Versión 20.14.0
- **npm**: Versión 10.7.0

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

O Descargar el ZIP
Puedes descargar el proyecto como un archivo ZIP desde este enlace.

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
Usuario: admin
Contraseña: admin2024

Puedes copiar los datos haciendo clic en los campos siguientes:

Usuario: <span style="cursor: pointer; color: blue;" onclick="navigator.clipboard.writeText('admin');">admin</span>
Contraseña: <span style="cursor: pointer; color: blue;" onclick="navigator.clipboard.writeText('admin2024');">admin2024</span>

> Nota: La funcionalidad de copiado es soportada por navegadores modernos. Si no funciona, por favor copia manualmente las credenciales.

## Implementación de Tailwind CSS
Este proyecto utiliza Tailwind CSS para la estilización. Puedes personalizar los estilos en el archivo tailwind.config.js y en las hojas de estilo de tu aplicación.

## Seguridad
Para proteger las rutas, se han implementado guards que verifican la autenticación del usuario. Esto asegura que solo los usuarios autenticados puedan acceder a determinadas rutas dentro de la aplicación.

## Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
1. Crea una nueva rama con tus cambios: **git checkout -b develop**
2. Realiza un commit de tus cambios: **git commit -m 'Descripción de cambios'**
3. Sube tus cambios al repositorio: **git push origin develop**
4. Envía un pull request.
