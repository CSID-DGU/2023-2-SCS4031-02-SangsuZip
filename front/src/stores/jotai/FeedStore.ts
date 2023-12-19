import { FeedType } from "../../types/common/Feed.types";
import { atom } from "jotai";

export const FeedAtom = atom<FeedType>({
  title: "",
  author: "",
  contents: "",
  recommendedTags: [],
  tags: [],
  createdAt: "",
  _id: "",
});
