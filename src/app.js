// Importaciones de terceros
const express = require('express');

// Importaciones internas
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.routes');
const videoRoutes = require('./routes/video.routes');
const categoryRoutes = require('./routes/category.routes');

//// Variables y llamadas a funciones
const app = express();
const PORT = 8000;
initModels();
app.use(express.json());

// Rutas
app.use( '/api/v1', userRoutes );
app.use( '/api/v1', courseRoutes );
app.use( '/api/v1', videoRoutes );
app.use( '/api/v1', categoryRoutes );


//// Verificación Db
db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

// db.sync( {force:true} ) // Sincronizar y fuerza la alteración de las tablas
// db.sync( {alter:true} ) // Sincronizar y fuerza la alteración de las tablas
db.sync()
.then( () => console.log('base de datos sincronizada'))
.catch( (err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//