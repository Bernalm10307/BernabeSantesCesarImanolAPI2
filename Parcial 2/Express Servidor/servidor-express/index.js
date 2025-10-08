const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', (req, res) => {
  res.json({ metodo: 'POST', recibido: req.body });
});

app.put('/', (req, res) => {
  res.json({ metodo: 'PUT', recibido: req.body });
});

app.delete('/', (req, res) => {
  res.send('DELETE recibido correctamente');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
