# Proyecto

Aplicación frontend para gestionar un catálogo de productos y pedidos, desarrollada con Angular y Tailwind CSS.

### Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- Docker
- Node.js (Opcional, si deseas ejecutarlo localmente fuera de Docker)

## Correr el proyecto

### Con Docker
1. Clona este repositorio: 
    `git clone https://github.com/caachaparrosi/angular-product-orders`
    `cd angular-product-orders`

2. Construye la imagen de Docker:
    `docker build -t angular-product-orders`

3. Inicia un contenedor desde la imagen: 
    `docker run -d -p 4200:4200 --name angular-container angular-product-orders`

- La aplicación estará disponible en `http://localhost:4200`


### Sin Docker
1. Clona este repositorio: 
    `git clone https://github.com/caachaparrosi/angular-product-orders`
    `cd angular-product-orders`

2. Ejecute `npm i` o `npm install`. El comando lee el archivo pakage.json e instala todas las dependencias que se enumeran allí.

3. Ejecute `ng serve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Créditos 
Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.12.
