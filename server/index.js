import express from 'express';
import * as dotenv from 'dotenv';
import cors from ' cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ liming: "50mb"}))

app.get('/', (reg, res) =>{
    res.status(200).json({ message: " Hello from DALL.E"})
})