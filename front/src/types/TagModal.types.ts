import { FeedType } from "./common/Feed.types";

export type TagModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hashArr: string[];
  feedId: string;
};

export type RecommendTagsProps = {
  tag: string;
  description: string;
  feed: FeedType[];
};
