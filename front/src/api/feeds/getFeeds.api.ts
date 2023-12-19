import { api } from "..";

export const getFeeds = async () => {
  const response = await api.get("/main/feeds/:idx=0");
  return response.data;
};
