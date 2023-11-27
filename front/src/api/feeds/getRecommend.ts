import { api } from "..";

export const getRecommend = async (postData: { content: string }) => {
  const response = await api.post("/recommend/gpt", postData);
  return response;
};
