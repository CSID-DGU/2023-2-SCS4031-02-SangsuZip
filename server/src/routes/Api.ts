import express from 'express';

import { writeFeed } from '../controllers/Api/Feed';
import { getFeeds } from '../controllers/Api/Feed';
import { deleteFeed } from '../controllers/Api/Feed';
import { updateFeed } from '../controllers/Api/Feed';

import { signup, signupGit } from '../controllers/Api/User';

import { recommendGPT } from '../controllers/Api/Recommend';
import { connectTagsNeo4j } from '../controllers/Api/Recommend';

import { authGithub } from '../controllers/Auth/Github';
import { getGithubAccessToken } from '../controllers/Auth/Github';

const router = express.Router();

router.post('/signup', signup)

router.post('/write', writeFeed);
router.get('/main/feeds/:idx', getFeeds);
router.delete('/delete/:feedId', deleteFeed);
router.patch('/write/:feedId', updateFeed);

router.post('/recommend/gpt', recommendGPT);
router.post('/recommend/neo4j', connectTagsNeo4j); 

router.get('/oauth/github', authGithub);
router.post('/github/signup', signupGit);

router.get('/oauth/github/callback', getGithubAccessToken);

export default router;