// Servidor Express para servir archivos estáticos de audio
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use('/audios', express.static(path.join(__dirname, 'public/audios')));

app.listen(4100, () => {
  console.log('Servidor de audios corriendo en puerto 4100');
});
