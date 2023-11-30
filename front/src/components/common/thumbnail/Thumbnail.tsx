import { ThumbnailProps } from "@/types/common/Thumbnail.types";
import * as S from "./style";

function Thumbnail({
  imageURL,
  tags,
  title,
  contents,
  author,
  createdAt,
  recommendedTags,
}: ThumbnailProps) {
  return (
    <S.Container>
      <S.Image src={imageURL}></S.Image>
      <S.ContentContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
        <S.Title>{title}</S.Title>
        <S.Content>{contents}</S.Content>
        <S.RecommendTagContainer>
          추천 태그
          {recommendedTags.map((tag: string, index: number) => (
            <S.RecommendTag key={index}>#{tag}</S.RecommendTag>
          ))}
        </S.RecommendTagContainer>
        <S.Author>{author}</S.Author>
        <S.Date>{createdAt.slice(0, 10)}</S.Date>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Thumbnail;
