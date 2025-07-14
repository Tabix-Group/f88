# f88 - MVP

Proyecto MVP para libro y curso online (coaching, desarrollo personal).

## Estructura

- `/backend`: API REST (Node.js + Express + PostgreSQL)
- `/frontend`: Next.js (SSR, deploy en Vercel)

## Funcionalidades

### Frontend
- Landing page minimalista, cálida, con valores de coaching
- Registro/Login
- Dashboard con opciones de compra (libro físico/virtual, curso)
- Vista de curso: texto y audio sincronizados, chatbot IA

### Backend
- Autenticación JWT
- Endpoints: registro/login, productos, capítulos, chat IA
- PostgreSQL para usuarios y compras

## Demo
- Libro de dominio público: "Así habló Zaratustra" (Nietzsche)
- Audios de dominio público

## Cómo iniciar en local

1. Instala dependencias en ambos proyectos:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. Inicia el backend (por defecto en puerto 4000):
   ```bash
   cd backend
   npm run dev
   # o npm start
   # Acceso: http://localhost:4000
   ```

3. Inicia el frontend (por defecto en puerto 3000):
   ```bash
   cd ../frontend
   npm run dev
   # Acceso: http://localhost:3000
   ```

4. Inicia el servidor de audios (por ejemplo, en puerto 5000):
   ```bash
   # Si usas un servidor estático para /audios
   npx serve ./public/audios -l 5000
   # Acceso: http://localhost:5000
   ```

---
1. Estructura base backend y frontend
2. Autenticación y endpoints básicos
3. Landing page y flujo de usuario
4. Integración de libro y audio
5. Chatbot IA
6. Integración con Shopify/Amazon (mock)

---

Desarrollado por Tabix-Group
