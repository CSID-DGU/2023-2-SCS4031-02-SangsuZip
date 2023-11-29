import { Request, Response } from "express";
import { connectTags } from "../../services/neo4jService";
import { LambdaService } from '../../services/LambdaService';

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

const lambdaService = new LambdaService();

export const recommendGPT = async (req: Request, res: Response) => {
    try {
        const body = req.body.content;
        const id = req.body.feedId;

        lambdaService.invokeLambda(body, id)
            .then((result) => {
                if(result === null) res.status(400).json({ error : 'error'});
                else res.status(200).json({ 
                    body : result
                }); 
            })
            .catch((error) => {
                res.status(500).json({ error: 'Lambda error' });
            });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
