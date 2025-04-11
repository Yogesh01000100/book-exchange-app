import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    location: String,
    contact: String,
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: String,
    status: {
        type: String,
        enum: ['Available', 'Rented', 'Exchanged'],
        default: 'Available'
    }
});

export default mongoose.model('Book', bookSchema);
