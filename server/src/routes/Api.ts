import express from 'express';
import { getAccessToken, getOauth } from '../controllers/UserController';
import { createFeed, deleteFeed, getMyFeeds, getFeed, updateFeed, getFeeds } from '../controllers/FeedController';
import { connectTagsNeo4j, recommendGPT } from '../controllers/RecommendController';

// import { getFeed, writeFeed } from '../controllers/FeedController';
// import { getFeeds } from '../controllers/FeedController';
// import { deleteFeed } from '../controllers/FeedController';
// import { updateFeed } from '../controllers/FeedController';
// import { signup, signupGit } from '../controllers/UserController';
// import { recommendGPT } from '../controllers/RecommendController';
// import { connectTagsNeo4j } from '../controllers/RecommendController';

// import { authGithub } from '../controllers/Auth/Github';
// import { getGithubAccessToken } from '../controllers/Auth/Github';

const router = express.Router();

router.get('/oauth/github', getOauth);
router.get('/oauth/github/callback', getAccessToken);

router.post('/feed',createFeed);
router.put('/feed', updateFeed);
router.delete('/feed',deleteFeed);
router.get('/feed',getFeed);

router.get('/main/feeds/:idx', getFeeds);
router.get('/main/feeds/:userId/:idx',getMyFeeds);


router.post('/recommend/gpt', recommendGPT);
router.post('/recommend/neo4j', connectTagsNeo4j); 

// router.post('/signup', signup)

// router.post('/write', writeFeed);
// router.get('/main/feeds/:idx', getFeeds);
// router.delete('/delete/:feedId', deleteFeed);
// router.patch('/write/:feedId', updateFeed);

// router.get('/oauth/github', authGithub);
// router.post('/github/signup', signupGit);

// router.get('/oauth/github/callback', getGithubAccessToken);
// router.get('/feed/:feedId', getFeed);



export default router;