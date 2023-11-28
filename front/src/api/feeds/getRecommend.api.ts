import { api } from "..";

export const getRecommend = async (postData: {
  content: string;
  feedId: string;
}) => {
  const response = await api.post("/recommend/gpt", postData);
  return response;
};
