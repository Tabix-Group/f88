import express from 'express';
const router = express.Router();

// Chatbot IA simulado
router.post('/', (req, res) => {
  const { question } = req.body;
  // TODO: Integrar con OpenAI u otro servicio
  res.json({ answer: `Interpretación IA demo para: ${question}` });
});

export default router;
