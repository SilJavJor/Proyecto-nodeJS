# Back-end

## Instalación

-- Ir a la carpeta `back` con:

```bash
cd back

-- Ejecutar el siguiente comando:

```bash
npm install

-- Esto instalará las dependencias correspondientes.

```bash
npm install nodemon -g

   - Esto instalará nodemon en forma global.

## Servidor

-- De ser necesario se adjuntan los scripts de cracion de las bases de datos correspondientes a cada entorno en la carpeta info/sqls

-- En esta carpeta se encuentran los scripts necesarios para la crear las bases de datos en forma conjunta o separadas

-- Ejecutar el siguiente comando en la carpeta back para que el servidor se ejecute en modo local:

```bash
node index.js

-- Este comando ejejcutar el servidor en modo local sin parametros para el servidor

o

```bash
npm run start-dev

-- Este comando ejecutara el servidor en el entorno de desarrollo

-- Cada entorno tiene su base de datos correspondiente.

-- Debe considerarse que al modificarse la base de datos el Backend tambien debe ser modificado

-- Aqui solo se informa un entorno a modo de ejemplo
