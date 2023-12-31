import { api } from "..";

export const getFeed = async (feedId: string) => {
  const response = await api.get(`/feed/?feedId=${feedId}`);
  return response.data;
};
