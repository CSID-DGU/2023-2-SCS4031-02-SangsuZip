import { Request, Response } from 'express';
import Feed from '../../models/Feed'
import User from '../../models/User'

export const writeFeed = async (req: Request, res: Response) => {
    try {
        const { title, tags, contents, author, createdAt } = req.body;

        const userExists = await User.findById(author);
        if (!userExists) {
            return res.status(404).json({ error: 'User not found' })
        }

        const newFeed = new Feed({
            title,
            tags,
            contents,
            author,
            createdAt
        });

        const savedFeed = await newFeed.save();

        res.status(201).json(savedFeed);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getFeeds = async (req: Request, res: Response) => {
    try {
        const { idx } = req.params
        const sIdx = parseInt(idx, 10) * 21;

        const feeds = await Feed.find().skip(sIdx).limit(21)

        const resFeeds = feeds.map(feedInstance => ({
            title: feedInstance.title,
            tags: feedInstance.tags,
            recommendedTags: feedInstance.recommendedTags,
            contents: feedInstance.contents,
            author: feedInstance.author.nickname,
            createdAt: feedInstance.createdAt
        }))

        res.status(200).json(resFeeds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteFeed = async (req: Request, res: Response) => {
    const { feedId } = req.params;

    try {
        const deletedFeed = await Feed.findByIdAndDelete(feedId);

        if (deleteFeed) {
            res.status(200).json(deleteFeed)
        } else {
            res.status(404).json({ msg: "Feed not found" })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const updateFeed = async (req: Request, res: Response) => {
    const { feedId } = req.params;
    const { title, tags, recommendedTags, contents, userId } = req.body;

    try {
        const feed = await Feed.findById(feedId)

        if (!feed) {
            res.status(404).json({ error: 'Feed not found' })
        } else {
            feed.title = title;
            feed.tags = tags;
            feed.recommendedTags = recommendedTags;
            feed.contents = contents;

            await feed.save();

            res.status(200).json(feed);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getFeed = async (req: Request, res: Response) => {
    const { feedId } = req.params;
  
    try {
      const feed = await Feed.findById(feedId);
      if (!feed) {
        res.status(404).json({ error: "Feed not found" });
      } else {
        res.status(200).json(feed);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };