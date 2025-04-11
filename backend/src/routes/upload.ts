import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/config';
import { uploadImage } from '../controllers/uploadController';

const router = express.Router();

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            folder: 'book-exchange',
            allowed_formats: ['jpg', 'png', 'jpeg']
        };
    }

});

const upload = multer({ storage });

router.post('/', upload.single('image'), uploadImage);

export default router;
