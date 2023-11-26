import { api } from "..";
import { WriteDataProps } from "../../types/api/feeds/writeFeed.types";

export const writeFeed = async (writeData: WriteDataProps) => {
  const response = await api.post("/write", writeData);
  return response;
};
