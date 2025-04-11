import { Request, Response } from 'express';
import Book from '../models/Book';

export const getBooks = async (req: Request, res: Response) => {
    const books = await Book.find().populate('ownerId', 'name email');
    res.json(books);
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const { title, author, genre, location, contact, ownerId, imageUrl } = req.body;

        const book = await Book.create({
            title,
            author,
            genre,
            location,
            contact,
            ownerId,
            imageUrl,
        });

        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add book' });
    }
};

export const updateStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        book.status = book.status === 'Available' ? 'Rented' : 'Available';
        await book.save();

        res.json(book);
    } catch (err) {
        res.status(500).json({ message: 'Error updating status' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.json({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting book' });
    }
};
