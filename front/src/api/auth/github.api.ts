import { api } from "..";

export const authGithub = async () => {
  const response = await api.get("/oauth/github");
  return response;
};
