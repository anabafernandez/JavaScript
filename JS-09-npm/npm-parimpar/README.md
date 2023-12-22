# Crear y publicar un nuevo package de npn

##Creacion del package
1.Inicializar npm desde CLI con el comando
    sh
        npm init
Me guiara a través de una serie da pasos donde me solicite información relacionada con mi package, como el nombre, la versión, la descripción, el punto de entrada (index.js), comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con búsquedas, autor,licencia.

2.Presionar enter para aceptar que la información es correcta y generar el archivo package.json

> - package.json
    -Contiene información sobre el proyecto-modulo que vamos a crear, son un estandar de node.js para facilitar la estructura y ejecucion de los proyectos dentro del entorno de ejecución y de esta manera poder compartirlo a través del sitio de [https://www.npmjs.com]
    -La información se estructura como objeto de JS con notación JSON

    3.Crear una carpeta llamada "modules" en donde vivira nuestro script
    4.Dentro crear el script.js con el nombre "parimpar.js"
    5.Crear la función del script y exportarlo con "export default"
    6. Importar el script desde el archivo `index.js` con `import + function + from + ruta`
    7. Configurar el `"type": "module"` en el archivo `package.json`
    8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```
node index.js
```
