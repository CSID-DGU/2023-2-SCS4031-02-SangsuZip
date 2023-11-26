import express from 'express';
import { write } from '../controllers/Api/Feed'
import { signup } from '../controllers/Api/User'

const router = express.Router();

router.post('/signup', signup)

router.post('/write', write);

export default router;