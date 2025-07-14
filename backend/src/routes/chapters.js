import express from 'express';
const router = express.Router();


// Simulación de capítulos
const chapters = [
  { id: 1, title: 'Capítulo 1', text: 'Así habló Zaratustra...', audio: 'http://localhost:4100/audios/zaratustra.mp3' }
];

router.get('/', (req, res) => {
  res.json(chapters);
});

export default router;
