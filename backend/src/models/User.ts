import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['Owner', 'Seeker'] },
    mobile: String
});

export default mongoose.model('User', userSchema);
