const express = require('express');
const cors = require('cors');
const characterRouter = require('./v1/routes/characterRoutes');
const connectDB = require('./database/connection');
const { swaggerDocs: v1SwaggerDocs } = require('./v1/swagger')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Conexión a la base de datos

connectDB();

app.use('/api/v1/characters', characterRouter);

app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}`);
    v1SwaggerDocs(app, PORT);
  });
