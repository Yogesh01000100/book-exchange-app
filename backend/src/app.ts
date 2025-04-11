import express from 'express';
import cors from "cors";
import authRoutes from './routes/auth';
import bookRoutes from './routes/books';
import uploadRoutes from './routes/upload';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/upload', uploadRoutes);

export default app;
