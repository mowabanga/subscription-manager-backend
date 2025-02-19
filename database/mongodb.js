import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
    throw new Error("Please define the MONGODB_URI environment inside .env.<development/production./local");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log('Connected to database successfully');
    }
    catch (error) {
        console.error('Error connecting to database: ', error)
        process.exit(1)
    }
}

export default connectToDatabase