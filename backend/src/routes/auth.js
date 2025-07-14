import express from 'express';
const router = express.Router();

// Registro
router.post('/register', (req, res) => {
  // TODO: lógica de registro
  res.json({ message: 'Registro simulado' });
});

// Login
router.post('/login', (req, res) => {
  // TODO: lógica de login
  res.json({ token: 'jwt-demo-token' });
});

export default router;
