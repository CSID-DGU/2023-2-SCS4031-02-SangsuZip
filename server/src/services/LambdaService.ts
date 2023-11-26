import dotenv from 'dotenv';
import axios from 'axios';
import RecommendDTO from '../models/RecommendDTO';

dotenv.config();

export class LambdaService {
    async invokeLambda (content : string ) : Promise<any> {
        const lambdaURL : string = process.env.AWS_LAMBDA_URL || '';
        try{
            const reqbody = {
                content : content
            }
            const response = await axios.post(lambdaURL,reqbody);
            const jsonString = response.data.body;
            const cleanJsonString = jsonString.replace(/\\n|'/g, '');

            const tmpJsonObj = JSON.parse(cleanJsonString)
            
            const resbody = JSON.parse(tmpJsonObj.message)
            
            const dto : RecommendDTO[] = [];
            
            for( const tag in resbody){
                if(resbody.hasOwnProperty(tag)){
                    dto.push({ tag: tag, description : resbody[tag] });
                }
            }

            return dto;
        } catch (err) {
            console.error(err);
        }

        return null;
    }
}