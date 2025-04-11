import app from './app';
import connectDB from './db';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
});
