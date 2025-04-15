import express from 'express';
import {
    getBooks,
    createBook,
    updateStatus,
    deleteBook,
    updateImage
} from '../controllers/booksController';

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id/status', updateStatus);
router.delete('/:id', deleteBook);
router.put('/:id/image', updateImage);

export default router;
