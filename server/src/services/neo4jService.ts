import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';
import { CommonResponseDTO } from '../DTO/CommonResponseDTO';


export class Neo4jService{
    constructor(){
        dotenv.config();
    }
    private neo4jUri = process.env.NEO4J_URI
    private neo4jUser = process.env.NEO4J_USER
    private neo4jPassword = process.env.NEO4J_PASSWORD
    
    private driver = neo4j.driver(this.neo4jUri || '', neo4j.auth.basic(this.neo4jUser || '', this.neo4jPassword || ''));

    async connectTags (tags: string[], recommendedTags: string[]) {
        const session = this.driver.session();
    
        try {
            for (const tag of tags) {
                for (const rTag of recommendedTags) {
                    const query = `
                        MERGE (tag: Tag {name: $tagName})
                        MERGE (rTag: Tag {name: $rTagName})
                        MERGE (tag)-[:relates]->(rTag)
                    `;
    
                    await session.run(query, { tagName: tag, rTagName: rTag })
                }
            }
        } catch(err){
            return new CommonResponseDTO(undefined, 500, "Neo4j 저장하는데 오류 발생");
        } finally {
            session.close();
            return new CommonResponseDTO({tags, recommendedTags}, 201, "성공적으로 저장 완료");
        }
    }
}

