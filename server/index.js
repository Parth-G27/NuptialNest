import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = 8000;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PWD;

Connection(username, password);

app.listen(PORT, 
    () => {
        console.log("Server is running on PORT ",PORT);
    }
)