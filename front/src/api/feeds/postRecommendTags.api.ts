import { api } from "..";

export const postRecommendTags = async (postData: {
  tags: string[];
  recommendedTags: string[];
}) => {
  const response = await api.post("/recommend/neo4j", postData);
  return response.data;
};
