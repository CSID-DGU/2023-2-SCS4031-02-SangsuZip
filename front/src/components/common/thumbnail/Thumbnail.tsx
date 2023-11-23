import * as S from "./style";
import { ThumbnailProps } from "../../../types/common/thumbnail.types";

function Thumbnail({
  imageURL,
  tags,
  title,
  content,
  author,
  date,
  recommendTags,
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
        <S.Content>{content}</S.Content>
        <S.RecommendTagContainer>
          추천 태그
          {recommendTags.map((tag: string, index: number) => (
            <S.RecommendTag key={index}>#{tag}</S.RecommendTag>
          ))}
        </S.RecommendTagContainer>
        <S.Author>{author}</S.Author>
        <S.Date>{date}</S.Date>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Thumbnail;
