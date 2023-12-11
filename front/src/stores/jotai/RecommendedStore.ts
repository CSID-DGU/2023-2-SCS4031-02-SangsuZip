import { RecommendTagsProps } from "@/types/TagModal.types";
import { atom } from "jotai";

export const RecommendedTagsStore = atom<RecommendTagsProps[]>([]);
