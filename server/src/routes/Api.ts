import express from 'express';
import { write } from '../controllers/Api/feed';

const router = express.Router();

router.post('/write', write);

export default router;