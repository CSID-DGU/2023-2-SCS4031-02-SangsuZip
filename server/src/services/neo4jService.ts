import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';

dotenv.config()

const neo4jUri = process.env.NEO4J_URI
const neo4jUser = process.env.NEO4J_USER
const neo4jPassword = process.env.NEO4J_PASSWORD

const driver = neo4j.driver(neo4jUri || '', neo4j.auth.basic(neo4jUser || '', neo4jPassword || ''));

export const connectTags = async (tags: string[], recommendedTags: string[]) => {
    const session = driver.session();

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
    } finally {
        session.close();
    }
}

