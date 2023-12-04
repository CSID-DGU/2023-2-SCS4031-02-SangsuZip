import { api } from "..";

export const getFeed = async (userId: string, feedId: string) => {
  const response = await api.get(`/feed/${userId}/${feedId}`);
  return response.data;
};
