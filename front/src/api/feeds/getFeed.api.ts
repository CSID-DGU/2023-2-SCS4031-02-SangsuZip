import { api } from "..";

export const getFeed = async () => {
  const response = await api.get("/main/feeds/:idx=0");
  return response.data;
};
