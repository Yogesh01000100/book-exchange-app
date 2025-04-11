import express from 'express';
import {
    getBooks,
    createBook,
    updateStatus,
    deleteBook
} from '../controllers/booksController';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id/status', updateStatus);
router.delete('/:id', deleteBook);

export default router;
