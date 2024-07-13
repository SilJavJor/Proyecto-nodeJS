# Backend

## Instalación

1. Ir a la carpeta `back` con el siguiente comando:
    ```bash
    cd back
    ```

2. Ejecutar el siguiente comando para instalar las dependencias:
    ```bash
    npm install
    ```

3. Ejecutar el siguiente comando para instalar nodemon de forma global:
    ```bash
    npm install nodemon -g
    ```

## Servidor

- De ser necesario, se adjuntan los scripts de creación de las bases de datos correspondientes a cada entorno en la carpeta `info/sqls`.
- En esta carpeta se encuentran los scripts necesarios para crear las bases de datos en forma conjunta o separadas.

- Ejecutar el siguiente comando en la carpeta `back` para que el servidor se ejecute en modo local:
    ```bash
    node index.js
    ```
  - Este comando ejecutará el servidor en modo local sin parámetros adicionales.

o

- Ejecutar el siguiente comando para ejecutar el servidor en el entorno de desarrollo:
    ```bash
    npm run start-dev
    ```
  - Este comando ejecutará el servidor en el entorno de desarrollo.

- Cada entorno tiene su base de datos correspondiente.

- Debe considerarse que al modificarse la base de datos, el backend también debe ser modificado.

- Aquí solo se informa un entorno a modo de ejemplo.
