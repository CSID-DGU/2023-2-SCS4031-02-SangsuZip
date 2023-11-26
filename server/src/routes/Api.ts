import express from 'express';

import { writeFeed } from '../controllers/Api/Feed';
import { getFeeds } from '../controllers/Api/Feed';

import { signup } from '../controllers/Api/User';
import { recommendGPT } from '../controllers/Api/Recommend';

import { connectTagsNeo4j } from '../controllers/Api/Recommend';

const router = express.Router();

router.post('/signup', signup)

router.post('/write', writeFeed);
router.get('/main/feeds/:idx', getFeeds);
router.post('/recommend/gpt', recommendGPT);

router.post('/recommend/neo4j', connectTagsNeo4j);

export default router;