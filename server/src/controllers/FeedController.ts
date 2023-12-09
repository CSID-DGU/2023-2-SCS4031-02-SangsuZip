import { Request, Response } from 'express';
import * as feedService from '../services/FeedService';
import Feed, { NewCreateFeed } from "../models/Feed";
// import httpStatus from 'http-status';

// import User from '../models/User'

// export const writeFeed = async (req: Request, res: Response) => {
//     try {
//         const { title, tags, contents, author, createdAt } = req.body;

//         const userExists = await User.findById(author);
//         if (!userExists) {
//             return res.status(404).json({ error: 'User not found' })
//         }

//         const newFeed = new Feed({
//             title,
//             tags,
//             contents,
//             author,
//             createdAt
//         });

//         const savedFeed = await newFeed.save();

//         res.status(201).json(savedFeed);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' })
//     }
// }

// export const deleteFeed = async (req: Request, res: Response) => {
//     const { feedId } = req.params;

//     try {
//         const deletedFeed = await Feed.findByIdAndDelete(feedId);

//         if (deleteFeed) {
//             res.status(200).json(deleteFeed)
//         } else {
//             res.status(404).json({ msg: "Feed not found" })
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' })
//     }
// }

// export const updateFeed = async (req: Request, res: Response) => {
//     const { feedId } = req.params;
//     const { title, tags, recommendedTags, contents, userId } = req.body;

//     try {
//         const feed = await Feed.findById(feedId)

//         if (!feed) {
//             res.status(404).json({ error: 'Feed not found' })
//         } else {
//             feed.title = title;
//             feed.tags = tags;
//             feed.recommendedTags = recommendedTags;
//             feed.contents = contents;

//             await feed.save();

//             res.status(200).json(feed);
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }


// export const getFeeds = async (req: Request, res: Response) => {
//     try {
//         const { idx } = req.params
//         const sIdx = parseInt(idx, 10) * 21;

//         const feeds = await Feed.find().skip(sIdx).limit(21)

//         const resFeeds = feeds.map(feedInstance => ({
//             title: feedInstance.title,
//             tags: feedInstance.tags,
//             recommendedTags: feedInstance.recommendedTags,
//             contents: feedInstance.contents,
//             author: feedInstance.author.nickname,
//             createdAt: feedInstance.createdAt
//         }))

//         res.status(200).json(resFeeds);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
// export const getFeed = async (req: Request, res: Response) => {
//     const { feedId } = req.params;
  
//     try {
//       const feed = await Feed.findById(feedId);
//       if (!feed) {
//         res.status(404).json({ error: "Feed not found" });
//       } else {
//         res.status(200).json(feed);
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
export const createFeed = async (req : Request, res : Response) => {

    const writeFeed : NewCreateFeed = {
        title : req.body.title,
        tags : req.body.tags,
        contents : req.body.contents,
        author : req.body.userId,
    }

    const result = await feedService.writeFeed(writeFeed);

    res.status(result.statusCode).json(result);
}

export const updateFeed = async (req: Request, res : Response) => {
    const feedId = req.query.feedId as string;

    const updateFeed : NewCreateFeed = {
        title : req.body.title,
        tags : req.body.tags,
        contents : req.body.contents,
        author : req.body.userId,
    }

    const result = await feedService.updateFeed(updateFeed, feedId);

    res.status(result.statusCode).json(result);

}
export const getFeeds = async (req: Request, res : Response) => {    
    const {idx} = req.params;
    const sIdx = parseInt(idx, 10) * 21;
    const result = await feedService.getFeedAll(sIdx);
    res.status(result.statusCode).json(result);
}

export const getMyFeeds = async(req:Request, res : Response) => {
    const {userId, idx} = req.params;
    console.log(userId +" " + idx);
    const sIdx = parseInt(idx, 10) * 21;
    const result = await feedService.getFeedByIdAll(userId, sIdx);
    res.status(result.statusCode).json(result);
}
export const getFeed = async (req: Request, res: Response) => {
    const feedId = req.query.feedId as string;
    const result = await feedService.getFeedById(feedId);
    res.status(result.statusCode).json(result);
};

export const deleteFeed = async (req: Request, res: Response) => {
    const feedId = req.query.feedId as string;
    const result = await feedService.deleteFeedById(feedId);
    res.status(result.statusCode).json(result);
}