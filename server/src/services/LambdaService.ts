import dotenv from 'dotenv';
import axios from 'axios';
import RecommendDTO from '../models/RecommendDTO';
import Feed from '../models/Feed';

dotenv.config();

export class LambdaService {
    async invokeLambda (content : string, _id : string ) : Promise<any> {
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
            
            const recommendedTags = Object.keys(resbody);
            

            await Feed.findById(_id)
                .exec()
                .then(beforeFeed => {
                    if(beforeFeed){
                        beforeFeed.recommendedTags = beforeFeed.recommendedTags.concat(recommendedTags);
                        beforeFeed.save();
                    }
                })
                .catch(err => {
                    console.log('Feed 저장 에러 발생 : ' + err);
                })
            
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