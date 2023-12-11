import { LambdaService } from "../services/LambdaService";
import { Neo4jService } from "../services/neo4jService";
import { eventEmitter, Events } from '../utils/eventEmitter';

export class TagSubscriber {
    public eventListener(): void {
        eventEmitter.on(Events.TAG_RECOMMENED, async (saveBody) =>{
            try{
                const lambdaService = new LambdaService();
                const neo4jService = new Neo4jService();
                await lambdaService.recommendTagsSave(saveBody.feedId, saveBody.recommendedTags);
                await neo4jService.connectTags(saveBody.tags, saveBody.recommendedTags);
                console.log('적재 완료');
            } catch(err){
                console.log('적재 에러');
            }

        })
    }

}

