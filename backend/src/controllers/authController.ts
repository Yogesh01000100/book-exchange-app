import { Request, Response } from 'express';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password, mobile, role } = req.body;
        const existing = await User.findOne({ email });
        if (existing) return res.status(409).json({ message: 'Email already exists' });

        const user = await User.create({ name, email, password, mobile, role });
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json({ message: 'Error registering user' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: 'Login error' });
    }
};
