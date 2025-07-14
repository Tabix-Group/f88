import express from 'express';
const router = express.Router();

// Listar productos
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Libro físico', link: 'https://amazon.com/demo-libro' },
    { id: 2, name: 'Libro digital', link: 'https://amazon.com/demo-libro-digital' },
    { id: 3, name: 'Curso + Libro', link: '/curso' }
  ]);
});

export default router;
