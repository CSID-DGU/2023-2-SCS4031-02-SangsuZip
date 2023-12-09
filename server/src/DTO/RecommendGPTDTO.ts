import Feed from '../models/Feed';


interface RecommendGPTDTO {
    tag: string;
    description: string;
    feed : Feed['_id'];
}

export default RecommendGPTDTO;