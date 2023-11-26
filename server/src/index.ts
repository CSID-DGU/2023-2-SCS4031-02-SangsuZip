import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Api from './routes/Api'
import dotenv from 'dotenv'

const app = express();
const port = 4000;

// mongodb 연결
dotenv.config()
mongoose.connect(process.env.DATABASE || '');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// middleware
// cors 설정
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

app.use(cors(corsOptions))
// body-parser
app.use(express.json())

// routes
app.use('/', Api)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});