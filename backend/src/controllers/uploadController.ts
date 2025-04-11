import { Request, Response } from 'express';

export const uploadImage = (req: Request, res: Response) => {
    try {
        const file = req.file as Express.Multer.File & { path: string };
        res.status(200).json({ imageUrl: file.path });
    } catch (err) {
        res.status(500).json({ message: 'Upload failed' });
    }
};
