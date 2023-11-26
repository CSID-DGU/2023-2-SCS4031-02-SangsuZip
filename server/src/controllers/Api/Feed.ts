import { Request, Response } from 'express';
import Feed from '../../models/Feed'
import User from '../../models/User'

export const write = async (req: Request, res: Response) => {
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