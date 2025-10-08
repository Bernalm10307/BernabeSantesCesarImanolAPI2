const express = require('express');
const path = require('path');
const app = express();

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // carpeta donde estarán las plantillas

// Middleware para parsear JSON
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  // Renderiza la plantilla "index.pug" y le pasa datos
  res.render('index', { titulo: 'Página con Pug', mensaje: '¡Hola desde Pug!' });
});

app.post('/datos', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.render('respuesta', { nombre, mensaje });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
