import { api } from "..";

export const getMyFeed = async (userId: string) => {
  const response = await api.get(`/main/feeds/${userId}/:idx=0`);
  return response.data;
};
