import { api } from "..";

export const getRecommend = async (postData: {
  tags: string[];
  feedId: string;
}) => {
  const response = await api.post("/recommend/gpt", postData);
  return response.data;
};
