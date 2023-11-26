import { Request, Response } from "express";
import { connectTags } from "../../services/neo4jService";

export const connectTagsNeo4j = async (req: Request, res: Response) => {
    try {
        const { tags, recommendedTags } = req.body;

        await connectTags(tags, recommendedTags);

        res.status(201).json(tags + ' ' + recommendedTags + ' sucessfully saved');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}