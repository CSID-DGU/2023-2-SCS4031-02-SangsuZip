import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 4000;

// mongodb 연결
const mongoURI = 'mongodb-connection-string';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// cors 설정
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
}

app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});