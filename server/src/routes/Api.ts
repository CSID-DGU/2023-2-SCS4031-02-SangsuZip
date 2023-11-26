import express from 'express';

import { writeFeed } from '../controllers/Api/Feed';
import { getFeeds } from '../controllers/Api/Feed';

import { signup } from '../controllers/Api/User';

const router = express.Router();

router.post('/signup', signup)

router.post('/write', writeFeed);
router.get('/main/feeds/:idx', getFeeds);

export default router;