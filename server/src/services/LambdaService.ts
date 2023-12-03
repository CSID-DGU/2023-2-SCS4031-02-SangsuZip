import dotenv from 'dotenv';
import axios from 'axios';
import RecommendGPTDTO from '../models/RecommendGPTDTO';
import Feed from '../models/Feed';

dotenv.config();

export class LambdaService {
    async invokeLambda (content : string, _id : string ) : Promise<any> {
        const lambdaURL : string = process.env.AWS_LAMBDA_URL || '';
        
        try{
            const reqbody = {
                content
            }
            const lambdaRes = await axios.post(lambdaURL, reqbody, {timeout: 60000} );
            const tmp = JSON.parse(lambdaRes.data.body.message);
            console.log(tmp);
            // const cleantmp = tmp.replace(/\\n|'/g, '');
            const tmpJsonObj = JSON.parse(tmp.message);
            console.log(tmpJsonObj);
            const lambdaBody = JSON.parse(tmpJsonObj);
            console.log(lambdaBody);
            
            
            const recommendedTags = Object.keys(lambdaBody);

            const tagsSaveResult = await this.recommendTagsSave(_id, recommendedTags);

            const recommendGPTDTO : RecommendGPTDTO[] = [];

            for( const tag in lambdaBody){
                if(lambdaBody.hasOwnProperty(tag)){
                    const feed = await Feed.find({ tags : { $in: [tag] }})
                        .sort({createdAt : -1})    
                        .limit(3)
                        .exec()
                        .then(feeds => {
                            if(feeds){
                                recommendGPTDTO.push({ tag: tag, description : lambdaBody[tag], feed : feed });
                            }
                        })
                        .catch(err => {
                            console.log("tags 관련 피드 가져오는데 오류 발생");
                        })
                    
                }
            }
            return recommendGPTDTO;

        } catch(err){
            // console.log('lambda 에러 발생');
            console.error(err);
        }

        return null;
    }

    async recommendTagsSave(_id : string, recommendedTags : string[]) : Promise<any>{
        
        const result = await Feed.findById(_id)
            .exec()
            .then(beforeFeed => {
                if(beforeFeed){
                    beforeFeed.recommendedTags = recommendedTags;
                    beforeFeed.save();
                }
            })
            .catch(err => {
                console.log('Feed 저장 에러 발생');
            });

        return result;
    }
}
