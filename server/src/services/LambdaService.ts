import dotenv from 'dotenv';
import axios from 'axios';
import RecommendGPTDTO from '../DTO/RecommendGPTDTO';
import Feed from '../models/Feed';
import { CommonResponseDTO } from '../DTO/CommonResponseDTO';
import { eventEmitter, Events } from '../utils/eventEmitter';

import { TagSubscriber } from '../subscribers/TagSubscriber';

export class LambdaService {

    constructor(){
        dotenv.config();
    }

    async invokeLambda (feedId : string ) : Promise<any> {
        const lambdaURL : string = process.env.AWS_LAMBDA_URL || '';
        
        try{
            const originFeed = await Feed.findById(feedId);
            const content = originFeed?.contents.replace(/\\n/g, '\n');

            const reqbody = {
                content : content
            }
            const lambdaRes = await axios.post(lambdaURL, reqbody, {timeout: 60000} );

            const parsedObject = JSON.parse(lambdaRes.data.body, (key, value) => {
                if (typeof value === 'string' && value.startsWith('\\')) {
                    return JSON.parse(`"${value}"`);
                }
                return value;
            });
            // console.log(parsedObject);
            const tmpJsonObj = JSON.parse(parsedObject.message);
            
            
            const recommendedTags = Object.keys(tmpJsonObj);
            

            if(originFeed && recommendedTags) {
                const tagSubscriber = new TagSubscriber();
                tagSubscriber.eventListener();

                const saveBody = {
                    tags : originFeed.tags,
                    recommendedTags, 
                    feedId
                }
                // EventDispatcher.dispatch(events.feed.created, saveBody);
                eventEmitter.emit(Events.TAG_RECOMMENED,saveBody);
            }
            // await this.recommendTagsSave(feedId, recommendedTags);
            
            const recommendGPTDTO : RecommendGPTDTO[] = [];

            for (const tag in tmpJsonObj) {
                if (tmpJsonObj.hasOwnProperty(tag)) {
                    try {
                        const feed = await Feed.find({ tags: { $in: tag } })
                            .sort({ createdAt: -1 })
                            .limit(3)
                            .exec();
            
                        if (feed) {
                            recommendGPTDTO.push({ tag: tag, description: tmpJsonObj[tag], feed: feed });
                        }
                    } catch (err) {
                        return new CommonResponseDTO(undefined, 500, "추천 태그 가져오는 데 오류 발생");
                    }
                }
            }
            
            return new CommonResponseDTO(recommendGPTDTO, 200, "GPT 태그 추천 완료");

        } catch(err){
            console.log(err);
            return new CommonResponseDTO(undefined, 500, "Lambda GPT 프롬프트 에러 발생");
        }
    }

    async recommendTagsSave(_id : string, recommendedTags : string[]) : Promise<any>{
        try{
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
        } catch(err){
            console.log('Feed를 찾지 못함');
        }

    }
}

