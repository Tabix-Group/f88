// Servidor Express para servir archivos estáticos de audio
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// Permitir configurar la ruta de audios y el puerto por variable de entorno
const AUDIO_PATH = process.env.AUDIO_PATH || path.join(__dirname, 'public/audios');
const AUDIO_ROUTE = process.env.AUDIO_ROUTE || '/audios';

// Railway requiere usar process.env.PORT si está definido
const AUDIO_PORT = process.env.PORT || process.env.AUDIO_PORT || 4100;

app.use(AUDIO_ROUTE, express.static(AUDIO_PATH));

app.listen(AUDIO_PORT, () => {
  console.log(`Servidor de audios corriendo en puerto ${AUDIO_PORT}`);
});
