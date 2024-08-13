import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());

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