import { api } from "..";

export const postImage = async (
  formData: FormData,
  headers: Record<string, string>
) => {
  const response = await api.post("/feed/img", formData, { headers });
  return response.data;
};
