# API South Park
API South Park es un servidor RESTful que proporciona una lista de personajes del show de televisión "South Park". La API fue desarrollada utilizando Node.js, Express y MongoDB.

-------------
## instalación
Para utilizar esta API, primero debes clonar el repositorio:

`$ git clone https://github.com/tu-usuario/api-south-park.git`


Luego, ingresa al directorio del proyecto y ejecuta los siguientes comandos:

`$ cd api-south-park`
`$ npm install`

-------------
## Uso
Para iniciar el servidor, debes ejecutar el siguiente comando:

`$ npm run dev`

Una vez que el servidor esté en ejecución, puedes acceder a la API a través de la URL http://localhost:3000/api/v1/characters. Los endpoints disponibles son:

- GET /api/v1/characters: obtiene una lista de todos los personajes
- GET /api/v1/characters/:id: obtiene un personaje por ID
- POST /api/v1/characters: crea un nuevo personaje
- PATCH /api/v1/characters/:id: actualiza un personaje existente por ID
- DELETE /api/v1/characters/:id: elimina un personaje existente por ID

-------------
## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes crear un fork del repositorio, hacer los cambios que consideres necesarios y enviarnos una solicitud de extracción. Asegúrate de que tus cambios sean coherentes con el código existente y que estén bien probados.

