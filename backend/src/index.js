import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import chapterRoutes from './routes/chapters.js';
import chatRoutes from './routes/chat.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('API f88 backend funcionando');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
