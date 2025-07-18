import express from 'express';
const router = express.Router();



// Usar variable de entorno para la URL base de audios
const AUDIO_BASE_URL = process.env.AUDIO_BASE_URL || 'http://localhost:4100';
const chapters = [
  { id: 1, title: 'Capítulo 1', text: 'Así habló Zaratustra...', audio: `${AUDIO_BASE_URL}/audios/zaratustra.mp3` }
];

router.get('/', (req, res) => {
  res.json(chapters);
});

export default router;
