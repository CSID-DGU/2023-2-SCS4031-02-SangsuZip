import { Request, Response } from 'express';
import { LambdaService } from '../../services/LambdaService';

const lambdaService = new LambdaService();

export const recommendGPT = async (req: Request, res: Response) => {
    try {
        const body = req.body.content;
        
        lambdaService.invokeLambda(body)
            .then((result) => {
                if(result === null) res.status(400).json({ error : 'error'});
                else res.status(200).json({ result }); 
            })
            .catch((error) => {
                res.status(500).json({ error: 'Lambda error' });
            });
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
