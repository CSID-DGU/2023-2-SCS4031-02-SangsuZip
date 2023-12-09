import { Request, Response } from "express";
import { connectTags } from "../services/neo4jService";
import { LambdaService } from '../services/LambdaService';

export const connectTagsNeo4j = async (req: Request, res: Response) => {
    const { tags, recommendedTags } = req.body;

    const result = await connectTags(tags, recommendedTags);

    res.status(result.statusCode).json(result);

    // try {

    //     res.status(201).json(tags + ' ' + recommendedTags + ' sucessfully saved');
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
}

export const recommendGPT = async (req: Request, res: Response) => {
    const lambdaService = new LambdaService();
    const id = req.body.feedId;

    // const result = await lambdaService.invokeLambda(body, id)
    //     .then((result) => {
    //         if(result === null) res.status(400).json({ error : 'error'});
    //         else res.status(200).json({ 
    //             body : result
    //         }); 
    //     })
    //     .catch((error) => {
    //         res.status(500).json({ error: 'Lambda error' });
    //     });
    const result = await lambdaService.invokeLambda(id);

    res.status(result.statusCode).json(result);
}
